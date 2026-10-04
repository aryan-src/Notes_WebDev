/* Generates an enriched js/mindmap-data.js by pulling REAL content out of
   lessons.js (the actual W3Schools-based lesson text) instead of generic
   templated filler, and adds a 3rd "example" child (real code snippet)
   to every branch that has one available. */

const fs = require('fs');
const vm = require('vm');

const lessonsSrc = fs.readFileSync('lessons.js', 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(lessonsSrc + '\nthis.__LESSONS__ = LESSONS;', sandbox);
const LESSONS = sandbox.__LESSONS__;

const SKIP_HEADINGS = new Set(['Your Turn', 'Knowledge Check', 'Example Explained']);

function decode(html) {
  if (!html) return '';
  return String(html)
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(str, max) {
  if (str.length <= max) return str;
  const cut = str.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace > 40 ? lastSpace : max) + '…';
}

const PITFALL_WORDS = ['not ', "n't", 'never', 'avoid', 'warning', 'careful', 'must', 'important', 'cannot', "can't", 'only', 'always'];

function classifyBadge(noteText) {
  const t = noteText.toLowerCase();
  return PITFALL_WORDS.some(w => t.includes(w)) ? 'Pitfall' : 'Standard';
}

function firstCodeLine(code) {
  if (!code) return '';
  const lines = code.split('\n').map(l => l.trim()).filter(Boolean);
  // Prefer a line that isn't just a doctype/html wrapper tag when possible
  const meaningful = lines.find(l => !/^<!DOCTYPE|^<html|^<\/html|^<body|^<\/body>$/i.test(l));
  return meaningful || lines[0] || '';
}

/* ---------- Section extraction: walk each lesson's blocks ---------- */
function extractSections(lesson) {
  const sections = [];
  let current = null;

  (lesson.blocks || []).forEach(block => {
    if (block.type === 'heading') {
      current = { heading: block.text, paragraphs: [], notes: [], example: null };
      sections.push(current);
      return;
    }
    if (!current) return;
    if (block.type === 'p') current.paragraphs.push(decode(block.html));
    else if (block.type === 'note') current.notes.push(decode(block.html));
    else if (block.type === 'example' && !current.example) current.example = block.code;
  });

  return sections.filter(s => !SKIP_HEADINGS.has(s.heading));
}

/* ---------- Icons ---------- */
function getBranchIcon(heading) {
  const h = heading.toLowerCase();
  const rules = [
    [/doctype|document|charset|utf-8|ansi|iso/, '📜'],
    [/head\b|title|base\b|meta/, '🧠'],
    [/link|url|href|path|absolute|relative/, '🔗'],
    [/img|image|src\b|alt\b|favicon|picture/, '🖼️'],
    [/table|cell|row|header/, '📊'],
    [/list|ul\b|ol\b|dl\b/, '📋'],
    [/style|css|color|font|background|border|margin|padding/, '🎨'],
    [/class|id\b/, '🏷️'],
    [/button|input|form/, '🔘'],
    [/script|js\b|noscript/, '⚡'],
    [/layout|flex|grid|div|float|inline-block/, '📐'],
    [/responsive|viewport|media|bootstrap/, '📱'],
    [/semantic|article|section|aside|nav|main|details|figure/, '🏛️'],
    [/entity|symbol|emoji|diacritical|greek|arrow|currency|math/, '🔣'],
    [/xhtml|validator|guide/, '⚖️'],
    [/code|kbd|samp|pre\b|var\b/, '💻'],
    [/comment/, '💡'],
    [/quote|abbr|cite|address|bdo/, '💬'],
  ];
  for (const [re, icon] of rules) if (re.test(h)) return icon;
  return '📌';
}

const CATEGORY_MAP = {
  'html-basics': ['Core Basics', '🏗️', 'Essential'],
  'html-elements': ['Core Basics', '🧱', 'Essential'],
  'html-attributes': ['Core Basics', '🏷️', 'Essential'],
  'html-headings': ['Core Basics', '👑', 'Typography'],
  'html-paragraphs': ['Core Basics', '📝', 'Typography'],
  'html-styles': ['Styling', '🎨', 'CSS'],
  'html-formatting': ['Styling', '✨', 'Text Format'],
  'html-quotations': ['Styling', '💬', 'Text Format'],
  'html-comments': ['Core Basics', '💡', 'Code Clean'],
  'html-colors': ['Styling', '🌈', 'HEX & RGB'],
  'html-css': ['Styling', '🖌️', 'Inline & External'],
  'html-links': ['Core Basics', '🔗', 'Navigation'],
  'html-images': ['Media', '🖼️', 'Assets'],
  'html-favicon': ['Media', '🔖', 'Tab Icon'],
  'html-page-titles': ['Architecture', '🏷️', 'SEO'],
  'html-tables': ['Architecture', '📊', 'Data Grid'],
  'html-lists': ['Architecture', '📋', 'Ordered/Unordered'],
  'html-blocks-inline': ['Architecture', '📦', 'Box Model'],
  'html-div': ['Architecture', '🔲', 'Container'],
  'html-classes': ['Styling', '🏷️', 'CSS Class'],
  'html-id': ['Architecture', '🔑', 'Unique ID'],
  'html-buttons': ['Interactivity', '🔘', 'Forms'],
  'html-iframes': ['Media', '🪟', 'Embeds'],
  'html-js': ['Interactivity', '⚡', 'Scripts'],
  'html-file-paths': ['Architecture', '📁', 'Relative/Absolute'],
  'html-head': ['Architecture', '🧠', 'Metadata'],
  'html-layout': ['Architecture', '📐', 'Grid & Flex'],
  'html-responsive': ['Architecture', '📱', 'Mobile First'],
  'html-semantics': ['Architecture', '🏛️', 'Accessibility'],
  'html-style-guide': ['Styling', '📏', 'Best Practice'],
  'html-entities': ['Characters', '🔣', 'Symbols'],
  'html-symbols': ['Characters', '🔤', 'Symbols'],
  'html-emojis': ['Characters', '😀', 'Symbols'],
  'html-charsets': ['Characters', '🌐', 'Encoding'],
  'html-url-encode': ['Architecture', '🔐', 'Encoding'],
  'html-vs-xhtml': ['Architecture', '⚖️', 'Standards'],
  'html-computercode': ['Styling', '💻', 'Code Snippets'],
  'html-forms': ['Interactivity', '📝', 'Forms'],
  'html-form-attributes': ['Interactivity', '⚙️', 'Forms'],
  'html-form-elements': ['Interactivity', '🧩', 'Forms'],
  'html-input-types': ['Interactivity', '⌨️', 'Forms'],
  'html-input-attributes': ['Interactivity', '🔧', 'Forms'],
  'input-form-attributes': ['Interactivity', '🔗', 'Forms'],
  'html-canvas': ['Media', '🖌️', 'Graphics'],
  'html-svg': ['Media', '📐', 'Graphics'],
  'html-media': ['Media', '🎞️', 'Assets'],
  'html-video': ['Media', '🎬', 'Assets'],
  'html-audio': ['Media', '🔊', 'Assets'],
  'html-plug-ins': ['Media', '🧩', 'Embeds'],
  'html-youtube': ['Media', '📺', 'Embeds'],
};

const PALETTES = [
  ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#06b6d4'],
  ['#ef4444', '#84cc16', '#3b82f6', '#a855f7', '#f97316', '#14b8a6'],
  ['#6366f1', '#ec4899', '#10b981', '#eab308', '#06b6d4', '#f43f5e'],
  ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'],
];

const mindmapList = [];

LESSONS.filter(l => l.status === 'ready').forEach((lesson, idx) => {
  const lid = lesson.id;
  const title = lesson.title;
  const subtitle = lesson.subtitle || `Grounded in MDN and WHATWG principles for ${title}`;
  const sections = extractSections(lesson);
  const [cat, topIcon, badge] = CATEGORY_MAP[lid] || ['Core Basics', '📚', 'Topic'];
  const palette = PALETTES[idx % PALETTES.length];

  const usableSections = sections.length ? sections : [{
    heading: title, paragraphs: [subtitle], notes: [], example: null
  }];

  const branches = usableSections.map((sec, hIdx) => {
    const col = palette[hIdx % palette.length];
    const icon = getBranchIcon(sec.heading);

    const definition = truncate(sec.paragraphs[0] || subtitle, 150);
    let detailText, detailBadge;
    if (sec.notes[0]) {
      detailText = truncate(sec.notes[0], 150);
      detailBadge = classifyBadge(sec.notes[0]);
    } else if (sec.paragraphs[1]) {
      detailText = truncate(sec.paragraphs[1], 150);
      detailBadge = 'Detail';
    } else if (sec.example) {
      detailText = 'See the live, editable example for this topic in the lesson.';
      detailBadge = 'Example';
    } else {
      detailText = `Follow modern HTML5 and WCAG 2.2 best practice for ${sec.heading}.`;
      detailBadge = 'Standard';
    }

    const children = [
      {
        id: `node-${idx + 1}0${hIdx + 1}1`,
        label: 'Definition & Concept',
        icon: '⚡',
        badge: 'Concept',
        summary: definition,
      },
      {
        id: `node-${idx + 1}0${hIdx + 1}2`,
        label: detailBadge === 'Example' ? 'Try It' : 'Key Detail',
        icon: '💡',
        badge: detailBadge,
        summary: detailText,
      },
    ];

    if (sec.example) {
      const snippet = truncate(firstCodeLine(sec.example), 80);
      children.push({
        id: `node-${idx + 1}0${hIdx + 1}3`,
        label: 'Code Snippet',
        icon: '💻',
        badge: 'Code',
        summary: snippet,
        isCode: true,
      });
    }

    return {
      id: `node-${idx + 1}0${hIdx + 1}`,
      label: sec.heading,
      icon,
      color: col,
      summary: definition,
      children,
    };
  });

  const totalNodes = 1 + branches.length + branches.reduce((s, b) => s + b.children.length, 0);

  mindmapList.push({
    id: lid,
    title,
    category: cat,
    icon: topIcon,
    badge,
    description: subtitle,
    stats: { branches: branches.length, nodes: totalNodes },
    root: {
      id: `root-${lid}`,
      label: title,
      icon: topIcon,
      type: 'root',
      summary: subtitle,
      children: branches,
    },
  });
});

let out = '/* ============================================================\n';
out += '   HTML Academy — Mind Map Data (auto-generated from lessons.js)\n';
out += '   Regenerate with: node gen_mindmap.js\n';
out += '   ============================================================ */\n\n';
out += 'const MINDMAP_DATA = ' + JSON.stringify(mindmapList, null, 2) + ';\n';

fs.writeFileSync('js/mindmap-data.js', out);
console.log(`Generated js/mindmap-data.js — ${mindmapList.length} topics, ${mindmapList.reduce((s,t)=>s+t.stats.nodes,0)} total nodes`);
