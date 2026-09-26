/* ============================================================
   HTML Academy — lesson data
   ------------------------------------------------------------
   To add a new section to the left navigation lane:
   1. Add an object to LESSONS with a unique `id`, `title`,
      `status: 'ready'` and a `blocks` array.
   2. Supported block types:
        { type: 'heading',  text }                       -> section heading
        { type: 'p',        html }                       -> paragraph (HTML allowed)
        { type: 'note',     html }                       -> highlighted note box
        { type: 'example',  code }                       -> editable example + live preview
        { type: 'challenge',brief, starter, solution }   -> "your turn" exercise
        { type: 'quiz',     questions:[...] }            -> knowledge check
   Sections with `status: 'coming-soon'` show a placeholder page.
   ============================================================ */

const LESSONS = [
  {
    id: 'html-basics',
    title: 'HTML Basics',
    subtitle: 'Documents, headings, paragraphs, links & images',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Basic',
      url: 'https://www.w3schools.com/html/html_basic.asp'
    },
    blocks: [
      { type: 'p', html: 'In this chapter we will show some basic HTML examples. Do not worry if we use tags you have not learned about yet.' },

      { type: 'heading', text: 'HTML Documents' },
      { type: 'p', html: 'All HTML documents must start with a document type declaration: <code>&lt;!DOCTYPE html&gt;</code>.' },
      { type: 'p', html: 'The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.' },
      { type: 'p', html: 'The visible part of an HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html>
<body>
<h1>My First Heading</h1>
<p>My first paragraph.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'The <!DOCTYPE> Declaration' },
      { type: 'p', html: 'The document type declaration is not an HTML tag. It is an instruction to the web browser about what version of HTML the document is written in.' },
      { type: 'note', html: 'The <code>&lt;!DOCTYPE&gt;</code> declaration is <strong>case insensitive</strong>.' },
      { type: 'p', html: 'The <code>&lt;!DOCTYPE&gt;</code> declaration for HTML5 is: <code>&lt;!DOCTYPE html&gt;</code>' },

      { type: 'heading', text: 'HTML Headings' },
      { type: 'p', html: 'HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. <code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading:' },
      {
        type: 'example',
        code: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`
      },
      { type: 'heading', text: 'HTML Paragraphs' },
      { type: 'p', html: 'HTML paragraphs are defined with the <code>&lt;p&gt;</code> tag:' },
      {
        type: 'example',
        code: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
      },

      { type: 'heading', text: 'HTML Links' },
      { type: 'p', html: 'HTML links are defined with the <code>&lt;a&gt;</code> tag:' },
      {
        type: 'example',
        code: `<a href="https://www.w3schools.com">This is a link</a>`
      },
      { type: 'p', html: "The link's destination is specified in the <code>href</code> attribute. Attributes are used to provide additional information about HTML elements. You will learn more about attributes in a later chapter." },

      { type: 'heading', text: 'HTML Images' },
      { type: 'p', html: 'HTML images are defined with the <code>&lt;img&gt;</code> tag. The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code>, and <code>height</code> are provided as attributes:' },
      {
        type: 'example',
        code: `<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`
      },

      { type: 'heading', text: 'How to View HTML Source' },
      { type: 'p', html: 'Have you ever seen a Web page and wondered "Hey! How did they do that?"' },
      { type: 'p', html: '<strong>View HTML Source Code:</strong> Press <kbd>Ctrl</kbd> + <kbd>U</kbd> in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.' },
      { type: 'p', html: '<strong>Inspect an HTML Element:</strong> Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Put it all together! Create a page with the HTML5 doctype, an <code>&lt;h1&gt;</code> with your name, a short <code>&lt;p&gt;</code> about yourself, and a link (<code>&lt;a&gt;</code>) to your favorite website. Edit the code on the left — the result updates on the right.',
        starter: `<!DOCTYPE html>
<html>
<body>

<!-- Write your page here -->

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>

<h1>Your Name</h1>
<p>Hi! I am learning HTML and this is my very first web page.</p>
<a href="https://www.w3schools.com">My favorite website</a>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which declaration must appear at the very top of an HTML5 document?',
            options: ['<code>&lt;!DOCTYPE html&gt;</code>', '<code>&lt;html&gt;</code>', '<code>&lt;meta charset="UTF-8"&gt;</code>', '<code>&lt;head&gt;</code>'],
            answer: 0,
            explanation: 'The <code>&lt;!DOCTYPE&gt;</code> declaration tells the browser which version of HTML to use. For HTML5 it is simply <code>&lt;!DOCTYPE html&gt;</code>.'
          },
          {
            question: 'Which tag defines the most important (largest) heading?',
            options: ['<code>&lt;h6&gt;</code>', '<code>&lt;head&gt;</code>', '<code>&lt;h1&gt;</code>', '<code>&lt;heading&gt;</code>'],
            answer: 2,
            explanation: 'Headings run from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important). <code>&lt;head&gt;</code> is a different element — it holds metadata, not visible headings.'
          },
          {
            question: "Where is a link's destination specified?",
            options: ['In the <code>src</code> attribute', 'In the <code>href</code> attribute', 'In the <code>link</code> attribute', 'In the <code>dest</code> attribute'],
            answer: 1,
            explanation: 'The <code>&lt;a&gt;</code> tag stores the destination URL in its <code>href</code> attribute. <code>src</code> is used by images.'
          },
          {
            question: 'Which element wraps the visible content of a web page?',
            options: ['<code>&lt;body&gt;</code>', '<code>&lt;html&gt;</code>', '<code>&lt;head&gt;</code>', '<code>&lt;content&gt;</code>'],
            answer: 0,
            explanation: 'Everything between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code> is what the browser displays on the page.'
          },
          {
            question: 'What is the purpose of the <code>alt</code> attribute on an <code>&lt;img&gt;</code> tag?',
            options: ['It sets the image’s URL', 'It styles the image', 'It provides alternative text when the image cannot be shown', 'It resizes the image'],
            answer: 2,
            explanation: 'The <code>alt</code> text describes the image — screen readers use it, and browsers display it if the image fails to load. <code>src</code> sets the URL; <code>width</code>/<code>height</code> control the size.'
          }
        ]
      },
    ]
  },

  {
    id: 'html-elements',
    title: 'HTML Elements',
    subtitle: 'Start tags, content, end tags & nesting',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Elements',
      url: 'https://www.w3schools.com/html/html_elements.asp'
    },
    blocks: [
      { type: 'heading', text: 'HTML Elements' },
      { type: 'p', html: 'The HTML <strong>element</strong> is everything from the start tag to the end tag:' },
      { type: 'p', html: '<code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code>' },
      { type: 'p', html: 'Examples of some HTML elements:' },
      { type: 'p', html: '<code>&lt;h1&gt;My First Heading&lt;/h1&gt;</code>' },
      { type: 'p', html: '<code>&lt;p&gt;My first paragraph.&lt;/p&gt;</code>' },
      {
        type: 'table',
        head: ['Start tag', 'Element content', 'End tag'],
        rows: [
          ['<code>&lt;h1&gt;</code>', 'My First Heading', '<code>&lt;/h1&gt;</code>'],
          ['<code>&lt;p&gt;</code>', 'My first paragraph.', '<code>&lt;/p&gt;</code>'],
          ['<code>&lt;br&gt;</code>', '<em>none</em>', '<em>none</em>']
        ]
      },
      { type: 'note', html: 'Some HTML elements have no content (like the <code>&lt;br&gt;</code> element). These elements are called <strong>empty elements</strong>. Empty elements do not have an end tag!' },
      { type: 'heading', text: 'Nested HTML Elements' },
      { type: 'p', html: 'HTML elements can be nested (this means that elements can contain other elements).' },
      { type: 'p', html: 'All HTML documents consist of nested HTML elements.' },
      { type: 'p', html: 'The following example contains four HTML elements (<code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>):' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`
      },

      { type: 'heading', text: 'Example Explained', level: 3 },
      { type: 'p', html: 'The <code>&lt;html&gt;</code> element is the root element and it defines the whole HTML document.' },
      { type: 'p', html: 'It has a start tag <code>&lt;html&gt;</code> and an end tag <code>&lt;/html&gt;</code>.' },
      { type: 'p', html: 'Then, inside the <code>&lt;html&gt;</code> element there is a <code>&lt;body&gt;</code> element:' },
      {
        type: 'example',
        code: `<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>`
      },
      { type: 'p', html: "The <code>&lt;body&gt;</code> element defines the document's body." },
      { type: 'p', html: 'It has a start tag <code>&lt;body&gt;</code> and an end tag <code>&lt;/body&gt;</code>.' },
      { type: 'p', html: 'Then, inside the <code>&lt;body&gt;</code> element there are two other elements: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>:' },
      {
        type: 'example',
        code: `<h1>My First Heading</h1>
<p>My first paragraph.</p>`
      },
      { type: 'p', html: 'The <code>&lt;h1&gt;</code> element defines a heading.' },
      { type: 'p', html: 'It has a start tag <code>&lt;h1&gt;</code> and an end tag <code>&lt;/h1&gt;</code>:' },
      {
        type: 'example',
        code: `<h1>My First Heading</h1>`
      },
      { type: 'p', html: 'The <code>&lt;p&gt;</code> element defines a paragraph.' },
      { type: 'p', html: 'It has a start tag <code>&lt;p&gt;</code> and an end tag <code>&lt;/p&gt;</code>:' },
      {
        type: 'example',
        code: `<p>My first paragraph.</p>`
      },
      { type: 'heading', text: 'Never Skip the End Tag' },
      { type: 'p', html: 'Some HTML elements will display correctly, even if you forget the end tag:' },
      {
        type: 'example',
        code: `<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>`
      },
      { type: 'p', html: '<strong>However, never rely on this! Unexpected results and errors may occur if you forget the end tag!</strong>' },

      { type: 'heading', text: 'Empty HTML Elements' },
      { type: 'p', html: 'HTML elements with no content are called empty elements.' },
      { type: 'p', html: 'The <code>&lt;br&gt;</code> tag defines a line break, and is an empty element without a closing tag:' },
      {
        type: 'example',
        code: `<p>This is a <br> paragraph with a line break.</p>`
      },

      { type: 'heading', text: 'HTML is Not Case Sensitive' },
      { type: 'p', html: 'HTML tags are not case sensitive: <code>&lt;P&gt;</code> means the same as <code>&lt;p&gt;</code>.' },
      { type: 'p', html: 'The HTML standard does not require lowercase tags, but W3C <strong>recommends</strong> lowercase in HTML, and <strong>demands</strong> lowercase for stricter document types like XHTML.' },
      { type: 'note', html: 'At W3Schools we always use lowercase tag names.' },

      { type: 'heading', text: 'HTML Tag Reference' },
      { type: 'p', html: "W3Schools' tag reference contains additional information about these tags and their attributes." },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;html&gt;</code>', 'Defines the root of an HTML document'],
          ['<code>&lt;body&gt;</code>', "Defines the document's body"],
          ['<code>&lt;h1&gt; to &lt;h6&gt;</code>', 'Defines HTML headings']
        ]
      },
      { type: 'note', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/html/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Practice nesting! Build a complete document with the doctype, an <code>&lt;html&gt;</code> root element, a <code>&lt;body&gt;</code> inside it, and inside the body an <code>&lt;h1&gt;</code> and a <code>&lt;p&gt;</code>.',
        starter: `<!DOCTYPE html>

<!-- Build your nested document here -->`,
        solution: `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What is an HTML element, in one sentence?',
            options: ['Only the start tag of a tag pair', 'Everything from the start tag to the end tag', 'Only the content between two tags', 'Only the text a browser displays'],
            answer: 1,
            explanation: 'An HTML element runs from its start tag, through its content, to its end tag — for example <code>&lt;p&gt;...&lt;/p&gt;</code>.'
          },
          {
            question: 'Which of these is an <strong>empty element</strong> (an element with no end tag)?',
            options: ['<code>&lt;p&gt;</code>', '<code>&lt;h1&gt;</code>', '<code>&lt;br&gt;</code>', '<code>&lt;html&gt;</code>'],
            answer: 2,
            explanation: 'The <code>&lt;br&gt;</code> tag defines a line break and has no content, so it is an empty element — and empty elements do not have an end tag.'
          },
          {
            question: 'What does it mean that HTML elements can be <strong>nested</strong>?',
            options: ['Elements must be written in alphabetical order', 'Elements can contain other elements', 'Elements must always be on separate lines', 'You may reuse the same tag forever'],
            answer: 1,
            explanation: 'All HTML documents are trees of nested elements — <code>&lt;html&gt;</code> contains <code>&lt;body&gt;</code>, which contains <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>.'
          },
          {
            question: 'Are HTML tags case sensitive?',
            options: ['Yes — <code>&lt;P&gt;</code> and <code>&lt;p&gt;</code> are different', 'No — <code>&lt;P&gt;</code> means the same as <code>&lt;p&gt;</code>', 'Only inside the <code>&lt;head&gt;</code> element', 'Only in XHTML documents'],
            answer: 1,
            explanation: 'HTML tags are not case sensitive, but lowercase is recommended — and demanded by stricter document types like XHTML.'
          },
          {
            question: 'Which element is the <strong>root</strong> of every HTML document?',
            options: ['<code>&lt;body&gt;</code>', '<code>&lt;root&gt;</code>', '<code>&lt;html&gt;</code>', '<code>&lt;meta&gt;</code>'],
            answer: 2,
            explanation: 'The <code>&lt;html&gt;</code> element is the root element — it defines the whole HTML document and contains all other elements.'
          }
        ]
      }


    ]
  },

  {
    id: 'html-attributes',
    title: 'HTML Attributes',
    subtitle: 'href, src, alt, style, lang & title',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Attributes',
      url: 'https://www.w3schools.com/html/html_attributes.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML attributes provide additional information about HTML elements.' },

      { type: 'heading', text: 'HTML Attributes' },
      { type: 'list', items: [
        'All HTML elements can have <strong>attributes</strong>',
        'Attributes provide <strong>additional information</strong> about elements',
        'Attributes are always specified in <strong>the start tag</strong>',
        'Attributes usually come in name/value pairs like: <strong>name="value"</strong>'
      ] },

      { type: 'heading', text: 'The href Attribute' },
      { type: 'p', html: 'The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:' },
      { type: 'example', code: `<a href="https://www.w3schools.com">Visit W3Schools</a>` },
      { type: 'p', html: 'You will learn more about links in our <a href="https://www.w3schools.com/html/html_links.asp" target="_blank" rel="noopener">HTML Links chapter</a>.' },

      { type: 'heading', text: 'The src Attribute' },
      { type: 'p', html: 'The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed:' },
      { type: 'example', code: `<img src="img_girl.jpg">` },
      { type: 'p', html: 'There are two ways to specify the URL in the <code>src</code> attribute:' },
      { type: 'p', html: '<strong>1. Absolute URL</strong> - Links to an external image that is hosted on another website. Example: <code>src="https://www.w3schools.com/images/img_girl.jpg"</code>.' },
      { type: 'p', html: '<strong>Notes:</strong> External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.' },
      { type: 'p', html: '<strong>2. Relative URL</strong> - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: <code>src="img_girl.jpg"</code>. If the URL begins with a slash, it will be relative to the domain. Example: <code>src="/images/img_girl.jpg"</code>.' },
      { type: 'note', label: 'Tip', html: 'It is almost always best to use relative URLs. They will not break if you change domain.' },
      { type: 'heading', text: 'The width and height Attributes' },
      { type: 'p', html: 'The <code>&lt;img&gt;</code> tag should also contain the <code>width</code> and <code>height</code> attributes, which specify the width and height of the image (in pixels):' },
      { type: 'example', code: `<img src="img_girl.jpg" width="500" height="600">` },

      { type: 'heading', text: 'The alt Attribute' },
      { type: 'p', html: 'The required <code>alt</code> attribute for the <code>&lt;img&gt;</code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the <code>src</code> attribute, or if the user uses a screen reader.' },
      { type: 'example', code: `<img src="img_girl.jpg" alt="Girl with a jacket">` },
      { type: 'p', html: 'See what happens if we try to display an image that does not exist:' },
      { type: 'example', code: `<img src="img_typo.jpg" alt="Girl with a jacket">` },
      { type: 'p', html: 'You will learn more about images in our <a href="https://www.w3schools.com/html/html_images.asp" target="_blank" rel="noopener">HTML Images chapter</a>.' },

      { type: 'heading', text: 'The style Attribute' },
      { type: 'p', html: 'The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.' },
      { type: 'example', code: `<p style="color:red;">This is a red paragraph.</p>` },
      { type: 'p', html: 'You will learn more about styles in our <a href="https://www.w3schools.com/html/html_styles.asp" target="_blank" rel="noopener">HTML Styles chapter</a>.' },

      { type: 'heading', text: 'The lang Attribute' },
      { type: 'p', html: 'You should always include the <code>lang</code> attribute inside the <code>&lt;html&gt;</code> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.' },
      { type: 'p', html: 'The following example specifies English as the language:' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`
      },
      { type: 'p', html: 'Country codes can also be added to the language code in the <code>lang</code> attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.' },
      { type: 'p', html: 'The following example specifies English as the language and United States as the country:' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>`
      },
      { type: 'p', html: 'You can see all the language codes in our <a href="https://www.w3schools.com/tags/ref_language_codes.asp" target="_blank" rel="noopener">HTML Language Code Reference</a>.' },

      { type: 'heading', text: 'The title Attribute' },
      { type: 'p', html: 'The <code>title</code> attribute defines some extra information about an element.' },
      { type: 'p', html: 'The value of the title attribute will be displayed as a tooltip when you mouse over the element:' },
      { type: 'example', code: `<p title="I'm a tooltip">This is a paragraph.</p>` },
      { type: 'heading', text: 'We Suggest: Always Use Lowercase Attributes' },
      { type: 'p', html: 'The HTML standard does not require lowercase attribute names.' },
      { type: 'p', html: 'The title attribute (and all other attributes) can be written with uppercase or lowercase like <strong>title</strong> or <strong>TITLE</strong>.' },
      { type: 'p', html: 'However, W3C <strong>recommends</strong> lowercase attributes in HTML, and <strong>demands</strong> lowercase attributes for stricter document types like XHTML.' },
      { type: 'note', html: 'At W3Schools we always use lowercase attribute names.' },

      { type: 'heading', text: 'We Suggest: Always Quote Attribute Values' },
      { type: 'p', html: 'The HTML standard does not require quotes around attribute values.' },
      { type: 'p', html: 'However, W3C <strong>recommends</strong> quotes in HTML, and <strong>demands</strong> quotes for stricter document types like XHTML.' },
      { type: 'example', label: 'Good', code: `<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>` },
      { type: 'example', label: 'Bad', code: `<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>` },
      { type: 'p', html: 'Sometimes you have to use quotes. This example will not display the title attribute correctly, because it contains a space:' },
      { type: 'example', code: `<p title=Description of W3Schools>` },
      { type: 'note', html: 'At W3Schools we always use quotes around attribute values.' },

      { type: 'heading', text: 'Single or Double Quotes?' },
      { type: 'p', html: 'Double quotes around attribute values are the most common in HTML, but single quotes can also be used.' },
      { type: 'p', html: 'In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:' },
      { type: 'example', code: `<p title='John "ShotGun" Nelson'>` },
      { type: 'p', html: 'Or vice versa:' },
      { type: 'example', code: `<p title="John 'ShotGun' Nelson">` },

      { type: 'heading', text: 'Chapter Summary' },
      { type: 'list', items: [
        'All HTML elements can have <strong>attributes</strong>',
        'The <code>href</code> attribute of <code>&lt;a&gt;</code> specifies the URL of the page the link goes to',
        'The <code>src</code> attribute of <code>&lt;img&gt;</code> specifies the path to the image to be displayed',
        'The <code>width</code> and <code>height</code> attributes of <code>&lt;img&gt;</code> provide size information for images',
        'The <code>alt</code> attribute of <code>&lt;img&gt;</code> provides an alternate text for an image',
        'The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more',
        'The <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag declares the language of the Web page',
        'The <code>title</code> attribute defines some extra information about an element'
      ] },

      { type: 'heading', text: 'HTML Attribute Reference' },
      { type: 'note', html: 'A complete list of all attributes for each HTML element is listed in the <a href="https://www.w3schools.com/tags/ref_attributes.asp" target="_blank" rel="noopener">HTML Attribute Reference</a>.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Add attributes! Give the link an <code>href</code>, the image an <code>src</code>, <code>alt</code>, <code>width</code> and <code>height</code>, the paragraph a red <code>style</code>, and declare the page language with <code>lang</code> on the <code>&lt;html&gt;</code> tag.',
        starter: `<!DOCTYPE html>
<html>
<body>

<a>Visit W3Schools</a>
<img>
<p>This is a paragraph.</p>

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>

<a href="https://www.w3schools.com">Visit W3Schools</a>
<img src="img_girl.jpg" alt="Girl with a jacket" width="300" height="400">
<p style="color:red;">This is a paragraph.</p>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Where are HTML attributes always specified?',
            options: ['In the end tag', 'In the start tag', 'In a separate CSS file', 'After the closing angle bracket'],
            answer: 1,
            explanation: 'Attributes are always specified in the start tag, usually as name="value" pairs.'
          },
          {
            question: 'Which attribute specifies the URL of the page a link goes to?',
            options: ['<code>src</code>', '<code>alt</code>', '<code>href</code>', '<code>link</code>'],
            answer: 2,
            explanation: 'The <code>href</code> attribute of the <code>&lt;a&gt;</code> tag specifies the destination URL.'
          },
          {
            question: 'What is the <code>alt</code> attribute for?',
            options: ['It sizes the image', 'It provides alternate text when the image cannot be displayed', 'It animates the image', 'It sets the image border'],
            answer: 1,
            explanation: 'If an image cannot be shown — a slow connection, a bad <code>src</code>, or a screen reader — the <code>alt</code> text is used instead.'
          },
          {
            question: 'Where does the value of a <code>title</code> attribute appear?',
            options: ['As a tooltip when you mouse over the element', 'As a heading on the page', 'Only in the browser tab', 'Inside the image itself'],
            answer: 0,
            explanation: 'The <code>title</code> attribute value is shown as a tooltip when the user hovers over the element.'
          },
          {
            question: 'What does <code>lang="en-US"</code> declare?',
            options: ['English (en) as the language and the United States (US) as the country', 'The page is only viewable in the US', 'The character encoding of the page', 'The keyboard layout of the page'],
            answer: 0,
            explanation: 'The first two characters (<code>en</code>) define the language, and the last two (<code>US</code>) define the country.'
          }
        ]
      }



    ]
  },

  {
    id: 'html-headings',
    title: 'HTML Headings',
    subtitle: 'h1 to h6, structure & sizing',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Headings',
      url: 'https://www.w3schools.com/html/html_headings.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML headings are titles or subtitles that you want to display on a webpage.' },

      { type: 'heading', text: 'HTML Headings' },
      { type: 'p', html: 'HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.' },
      { type: 'p', html: '<code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.' },
      {
        type: 'example',
        code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`
      },
      { type: 'note', html: 'Browsers automatically add some white space (a margin) before and after a heading.' },

      { type: 'heading', text: 'Headings Are Important' },
      { type: 'p', html: 'Search engines use the headings to index the structure and content of your web pages.' },
      { type: 'p', html: 'Users often skim a page by its headings. It is important to use headings to show the document structure.' },
      { type: 'p', html: '<code>&lt;h1&gt;</code> headings should be used for main headings, followed by <code>&lt;h2&gt;</code> headings, then the less important <code>&lt;h3&gt;</code>, and so on.' },
      { type: 'p', html: 'For example:' },
      { type: 'list', items: [
        '<code>&lt;h1&gt;</code> - Page title',
        '<code>&lt;h2&gt;</code> - Section titles',
        '<code>&lt;h3&gt;</code> - Sub-sections'
      ] },
      {
        type: 'example',
        code: `<h1>Travel Guide</h1>

<h2>Europe</h2>
<h3>France</h3>
<h3>Italy</h3>

<h2>Asia</h2>
<h3>India</h3>
<h3>Thailand</h3>`
      },
      { type: 'note', label: 'Tip', html: 'Use only one <code>&lt;h1&gt;</code> per page - it represents the main topic or title.' },
      { type: 'note', html: "Use HTML headings for headings only. Don't use headings to make text <strong>BIG</strong> or <strong>bold</strong>." },

      { type: 'heading', text: 'Bigger Headings' },
      { type: 'p', html: 'Each HTML heading has a default size. However, you can specify the size for any heading with the <code>style</code> attribute, using the CSS <code>font-size</code> property:' },
      {
        type: 'example',
        code: `<h1 style="font-size:60px;">Heading 1</h1>`
      },

      { type: 'heading', text: 'HTML Tag Reference' },
      { type: 'p', html: "W3Schools' tag reference contains additional information about these tags and their attributes." },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;html&gt;</code>', 'Defines the root of an HTML document'],
          ['<code>&lt;body&gt;</code>', "Defines the document's body"],
          ['<code>&lt;h1&gt; to &lt;h6&gt;</code>', 'Defines HTML headings']
        ]
      },
      { type: 'note', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a proper heading structure! Add one <code>&lt;h1&gt;</code> for your page title, then group items under <code>&lt;h2&gt;</code> sections with <code>&lt;h3&gt;</code> sub-sections — remember: only one <code>&lt;h1&gt;</code> per page.',
        starter: `<!DOCTYPE html>
<html>
<body>

<!-- Build your heading structure here -->

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>

<h1>My Favorite Books</h1>

<h2>Fiction</h2>
<h3>The Great Gatsby</h3>
<h3>To Kill a Mockingbird</h3>

<h2>Science</h2>
<h3>A Brief History of Time</h3>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which heading tag defines the most important (largest) heading?',
            options: ['<code>&lt;h6&gt;</code>', '<code>&lt;h1&gt;</code>', '<code>&lt;head&gt;</code>', '<code>&lt;heading&gt;</code>'],
            answer: 1,
            explanation: '<code>&lt;h1&gt;</code> defines the most important heading; <code>&lt;h6&gt;</code> defines the least important one.'
          },
          {
            question: 'How many heading tags does HTML define?',
            options: ['Four', 'Five', 'Six', 'An unlimited number'],
            answer: 2,
            explanation: 'HTML defines six heading tags: <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>.'
          },
          {
            question: 'What is the recommended heading structure for a page?',
            options: ['Start with <code>&lt;h3&gt;</code>, then <code>&lt;h2&gt;</code>', 'Use <code>&lt;h1&gt;</code> for main headings, then <code>&lt;h2&gt;</code>, then <code>&lt;h3&gt;</code>, and so on', 'Use headings in any order — only size matters', 'Use only <code>&lt;h6&gt;</code> for a compact page'],
            answer: 1,
            explanation: '<code>&lt;h1&gt;</code> headings should be used for main headings, followed by <code>&lt;h2&gt;</code> headings, then the less important <code>&lt;h3&gt;</code>, and so on.'
          },
          {
            question: 'Should you use heading tags just to make text big or bold?',
            options: ['Yes — that is what headings are for', 'Only on mobile pages', 'No — use HTML headings for headings only', 'Yes, but only <code>&lt;h1&gt;</code>'],
            answer: 2,
            explanation: "Use HTML headings for headings only. Don't use headings to make text BIG or bold — resize with the CSS <code>font-size</code> property instead."
          },
          {
            question: 'How do you make a heading bigger than its default size?',
            options: ['Add <code>size="big"</code> to the tag', 'Use the <code>style</code> attribute with the CSS <code>font-size</code> property', 'Wrap it in a <code>&lt;font&gt;</code> tag', 'Write the tag in uppercase'],
            answer: 1,
            explanation: 'Each heading has a default size, but you can specify the size yourself — for example <code>style="font-size:60px;"</code>.'
          }
        ]
      }


    ]
  },

  {
    id: 'html-paragraphs',
    title: 'HTML Paragraphs',
    subtitle: 'Paragraphs, whitespace, hr, br & pre',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Paragraphs',
      url: 'https://www.w3schools.com/html/html_paragraphs.asp'
    },
    blocks: [
      { type: 'p', html: 'A paragraph always starts on a new line, and is usually a block of text.' },

      { type: 'heading', text: 'HTML Paragraphs' },
      { type: 'p', html: 'The HTML <code>&lt;p&gt;</code> element defines a paragraph.' },
      { type: 'p', html: 'A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.' },
      {
        type: 'example',
        code: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
      },

      { type: 'heading', text: 'HTML Display' },
      { type: 'p', html: 'You cannot be sure how HTML will be displayed.' },
      { type: 'p', html: 'Large or small screens, and resized windows will create different results.' },
      { type: 'p', html: 'With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.' },
      { type: 'p', html: 'The browser will automatically remove any extra spaces and lines when the page is displayed:' },
      {
        type: 'example',
        code: `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains                a lot of spaces
in the source                code,
but the                browser
ignores it.
</p>`
      },
      { type: 'heading', text: 'HTML Horizontal Rules' },
      { type: 'p', html: 'The <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.' },
      { type: 'p', html: 'The <code>&lt;hr&gt;</code> element is used to separate content (or define a change) in an HTML page:' },
      {
        type: 'example',
        code: `<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>`
      },
      { type: 'p', html: 'The <code>&lt;hr&gt;</code> tag is an empty tag, which means that it has no end tag.' },

      { type: 'heading', text: 'HTML Line Breaks' },
      { type: 'p', html: 'The HTML <code>&lt;br&gt;</code> element defines a line break.' },
      { type: 'p', html: 'Use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph:' },
      {
        type: 'example',
        code: `<p>This is<br>a paragraph<br>with line breaks.</p>`
      },
      { type: 'p', html: 'The <code>&lt;br&gt;</code> tag is an empty tag, which means that it has no end tag.' },

      { type: 'heading', text: 'The Poem Problem' },
      { type: 'p', html: 'This poem will display on a single line:' },
      {
        type: 'example',
        code: `<p>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</p>`
      },

      { type: 'heading', text: 'Solution - The HTML <pre> Element' },
      { type: 'p', html: 'The HTML <code>&lt;pre&gt;</code> element defines preformatted text.' },
      { type: 'p', html: 'The text inside a <code>&lt;pre&gt;</code> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:' },
      {
        type: 'example',
        code: `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`
      },

      { type: 'heading', text: 'HTML Tag Reference' },
      { type: 'p', html: "W3Schools' tag reference contains additional information about HTML elements and their attributes." },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;p&gt;</code>', 'Defines a paragraph'],
          ['<code>&lt;hr&gt;</code>', 'Defines a thematic change in the content'],
          ['<code>&lt;br&gt;</code>', 'Inserts a single line break'],
          ['<code>&lt;pre&gt;</code>', 'Defines pre-formatted text']
        ]
      },
      { type: 'note', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Write a mini article! Start with an <code>&lt;h1&gt;</code> title, add two or three <code>&lt;p&gt;</code> paragraphs, separate them with <code>&lt;hr&gt;</code> thematic breaks, and finish with a closing line that uses <code>&lt;br&gt;</code> inside a paragraph.',
        starter: `<!DOCTYPE html>
<html>
<body>

<!-- Write your article here -->

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>

<h1>My Trip to the Mountains</h1>
<p>We woke up early and packed our bags for the long hike.</p>
<hr>
<p>The view from the top was amazing, with snow on the peaks.</p>
<hr>
<p>On the way down we saw a waterfall.</p>
<p>See you next time!<br>Thanks for reading.</p>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which element defines a paragraph?',
            options: ['<code>&lt;para&gt;</code>', '<code>&lt;text&gt;</code>', '<code>&lt;p&gt;</code>', '<code>&lt;paragraph&gt;</code>'],
            answer: 2,
            explanation: 'The HTML <code>&lt;p&gt;</code> element defines a paragraph. It always starts on a new line and browsers add a margin around it.'
          },
          {
            question: 'What happens to extra spaces and line breaks in the HTML source code?',
            options: ['The browser preserves them exactly', 'The browser automatically removes them when the page is displayed', 'They cause an error', 'They are only removed on mobile screens'],
            answer: 1,
            explanation: 'With HTML you cannot change the display by adding extra spaces or lines — the browser automatically removes them.'
          },
          {
            question: 'What does the <code>&lt;hr&gt;</code> tag define?',
            options: ['A line break', 'A thematic break, most often displayed as a horizontal rule', 'A new paragraph', 'A horizontal table'],
            answer: 1,
            explanation: 'The <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. It is an empty tag.'
          },
          {
            question: 'How do you insert a new line <strong>without</strong> starting a new paragraph?',
            options: ['Press Enter twice in the HTML code', 'Use <code>&lt;br&gt;</code>', 'Use <code>&lt;hr&gt;</code>', 'Use <code>&lt;newline&gt;</code>'],
            answer: 1,
            explanation: 'The HTML <code>&lt;br&gt;</code> element defines a line break — a new line without starting a new paragraph. It is an empty tag.'
          },
          {
            question: 'Which element preserves both spaces and line breaks?',
            options: ['<code>&lt;p&gt;</code>', '<code>&lt;pre&gt;</code>', '<code>&lt;code&gt;</code>', '<code>&lt;break&gt;</code>'],
            answer: 1,
            explanation: 'The HTML <code>&lt;pre&gt;</code> element defines preformatted text — displayed in a fixed-width font, preserving both spaces and line breaks.'
          }
        ]
      }


    ]
  },

  {
    id: 'html-styles',
    title: 'HTML Styles',
    subtitle: 'Colors, fonts, sizes & alignment',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Styles',
      url: 'https://www.w3schools.com/html/html_styles.asp'
    },
    blocks: [
      { type: 'p', html: 'The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.' },
      {
        type: 'example',
        code: `<p style="font-size:20px;color:red;">I am Red</p>
<p style="font-size:20px;color:blue;">I am Blue</p>
<p style="font-size:36px;margin:12px 0">I am Big</p>`
      },

      { type: 'heading', text: 'The HTML Style Attribute' },
      { type: 'p', html: 'Setting the style of an HTML element, can be done with the <code>style</code> attribute.' },
      { type: 'p', html: 'The HTML <code>style</code> attribute has the following syntax:' },
      { type: 'p', html: '<code>&lt;tagname style="property:value;"&gt;</code>' },
      { type: 'p', html: 'The <em>property</em> is a CSS property. The <em>value</em> is a CSS value.' },
      { type: 'note', html: 'You will learn more about CSS later in this tutorial.' },

      { type: 'heading', text: 'Background Color' },
      { type: 'p', html: 'The CSS <code>background-color</code> property defines the background color for an HTML element.' },
      { type: 'p', html: 'Set the background color for a page to powderblue:' },
      {
        type: 'example',
        code: `<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`
      },
      { type: 'p', html: 'Set background color for two different elements:' },
      {
        type: 'example',
        code: `<body>

<h1 style="background-color:powderblue;">This is a heading</h1>
<p style="background-color:tomato;">This is a paragraph.</p>

</body>`
      },
      { type: 'heading', text: 'Text Color' },
      { type: 'p', html: 'The CSS <code>color</code> property defines the text color for an HTML element:' },
      {
        type: 'example',
        code: `<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`
      },

      { type: 'heading', text: 'Fonts' },
      { type: 'p', html: 'The CSS <code>font-family</code> property defines the font to be used for an HTML element:' },
      {
        type: 'example',
        code: `<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`
      },

      { type: 'heading', text: 'Text Size' },
      { type: 'p', html: 'The CSS <code>font-size</code> property defines the text size for an HTML element:' },
      {
        type: 'example',
        code: `<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`
      },

      { type: 'heading', text: 'Text Alignment' },
      { type: 'p', html: 'The CSS <code>text-align</code> property defines the horizontal text alignment for an HTML element:' },
      {
        type: 'example',
        code: `<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      { type: 'list', items: [
        'Use the <code>style</code> attribute for styling HTML elements',
        'Use <code>background-color</code> for background color',
        'Use <code>color</code> for text colors',
        'Use <code>font-family</code> for text fonts',
        'Use <code>font-size</code> for text sizes',
        'Use <code>text-align</code> for text alignment'
      ] },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Style it up! Give the <code>&lt;h1&gt;</code> a <code>background-color</code>, color the first paragraph\'s text with <code>color</code>, pick a font with <code>font-family</code>, enlarge the last line with <code>font-size</code>, and center it with <code>text-align</code>.',
        starter: `<!DOCTYPE html>
<html>
<body>

<h1>My Styled Page</h1>
<p>This is a paragraph.</p>
<p>I am a plain line.</p>

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>

<h1 style="background-color:powderblue;">My Styled Page</h1>
<p style="color:tomato;font-family:verdana;">This is a paragraph.</p>
<p style="font-size:160%;text-align:center;">I am a plain line.</p>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which attribute is used to style an HTML element?',
            options: ['<code>class</code>', '<code>style</code>', '<code>font</code>', '<code>css</code>'],
            answer: 1,
            explanation: 'Setting the style of an HTML element can be done with the <code>style</code> attribute, like <code>style="color:red;"</code>.'
          },
          {
            question: 'What is the correct syntax of the style attribute?',
            options: ['<code>style="property:value;"</code>', '<code>style="value:property;"</code>', '<code>style(property:value)</code>', '<code>style="property value"</code>'],
            answer: 0,
            explanation: 'The style attribute syntax is <code>property:value;</code> — the property is a CSS property, and the value is a CSS value.'
          },
          {
            question: 'Which CSS property sets the <strong>text color</strong> of an element?',
            options: ['<code>background-color</code>', '<code>text-color</code>', '<code>color</code>', '<code>font-color</code>'],
            answer: 2,
            explanation: 'The CSS <code>color</code> property defines the text color. <code>background-color</code> sets the background instead.'
          },
          {
            question: 'What does <code>font-size:300%</code> do?',
            options: ['Makes the text 3 pixels tall', 'Makes the text 300% of its default size', 'Sets the element width to 300px', 'Bolds the text three times'],
            answer: 1,
            explanation: 'The CSS <code>font-size</code> property defines the text size — <code>300%</code> means three times the default size.'
          },
          {
            question: 'Which property centers text horizontally?',
            options: ['<code>align:center</code>', '<code>text-align:center</code>', '<code>margin:auto</code>', '<code>position:center</code>'],
            answer: 1,
            explanation: 'The CSS <code>text-align</code> property defines the horizontal text alignment — use <code>text-align:center;</code> to center text.'
          }
        ]
      }


    ]
  },

  {
    id: 'html-formatting',
    title: 'HTML Formatting',
    subtitle: 'Bold, italic, small, mark & more',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Formatting',
      url: 'https://www.w3schools.com/html/html_formatting.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML contains several elements for defining text with a special meaning.' },
      {
        type: 'example',
        code: `<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>`
      },

      { type: 'heading', text: 'HTML Formatting Elements' },
      { type: 'p', html: 'Formatting elements were designed to display special types of text:' },
      { type: 'list', items: [
        '<code>&lt;b&gt;</code> - Bold text',
        '<code>&lt;strong&gt;</code> - Important text',
        '<code>&lt;i&gt;</code> - Italic text',
        '<code>&lt;em&gt;</code> - Emphasized text',
        '<code>&lt;mark&gt;</code> - Marked text',
        '<code>&lt;small&gt;</code> - Smaller text',
        '<code>&lt;del&gt;</code> - Deleted text',
        '<code>&lt;ins&gt;</code> - Inserted text',
        '<code>&lt;sub&gt;</code> - Subscript text',
        '<code>&lt;sup&gt;</code> - Superscript text'
      ] },

      { type: 'heading', text: 'HTML <b> and <strong> Elements' },
      { type: 'p', html: 'The HTML <code>&lt;b&gt;</code> element defines bold text, without any extra importance.' },
      { type: 'example', code: `<b>This text is bold</b>` },
      { type: 'p', html: 'The HTML <code>&lt;strong&gt;</code> element defines text with strong importance. The content inside is typically displayed in bold.' },
      { type: 'example', code: `<strong>This text is important!</strong>` },

      { type: 'heading', text: 'HTML <i> and <em> Elements' },
      { type: 'p', html: 'The HTML <code>&lt;i&gt;</code> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.' },
      { type: 'note', label: 'Tip', html: 'The <code>&lt;i&gt;</code> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.' },
      { type: 'example', code: `<i>This text is italic</i>` },
      { type: 'p', html: 'The HTML <code>&lt;em&gt;</code> element defines emphasized text. The content inside is typically displayed in italic.' },
      { type: 'note', label: 'Tip', html: 'A screen reader will pronounce the words in <code>&lt;em&gt;</code> with an emphasis, using verbal stress.' },
      { type: 'example', code: `<em>This text is emphasized</em>` },
      { type: 'heading', text: 'HTML <small> Element' },
      { type: 'p', html: 'The HTML <code>&lt;small&gt;</code> element defines smaller text:' },
      { type: 'example', code: `<small>This is some smaller text.</small>` },

      { type: 'heading', text: 'HTML <mark> Element' },
      { type: 'p', html: 'The HTML <code>&lt;mark&gt;</code> element defines text that should be marked or highlighted:' },
      { type: 'example', code: `<p>Do not forget to buy <mark>milk</mark> today.</p>` },

      { type: 'heading', text: 'HTML <del> Element' },
      { type: 'p', html: 'The HTML <code>&lt;del&gt;</code> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:' },
      { type: 'example', code: `<p>My favorite color is <del>blue</del> red.</p>` },

      { type: 'heading', text: 'HTML <ins> Element' },
      { type: 'p', html: 'The HTML <code>&lt;ins&gt;</code> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:' },
      { type: 'example', code: `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>` },

      { type: 'heading', text: 'HTML <sub> Element' },
      { type: 'p', html: 'The HTML <code>&lt;sub&gt;</code> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H<sub>2</sub>O:' },
      { type: 'example', code: `<p>This is <sub>subscripted</sub> text.</p>` },

      { type: 'heading', text: 'HTML <sup> Element' },
      { type: 'p', html: 'The HTML <code>&lt;sup&gt;</code> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW<sup>[1]</sup>:' },
      { type: 'example', code: `<p>This is <sup>superscripted</sup> text.</p>` },

      { type: 'heading', text: 'HTML Text Formatting Elements' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;b&gt;</code>', 'Defines bold text'],
          ['<code>&lt;em&gt;</code>', 'Defines emphasized text'],
          ['<code>&lt;i&gt;</code>', 'Defines a part of text in an alternate voice or mood'],
          ['<code>&lt;small&gt;</code>', 'Defines smaller text'],
          ['<code>&lt;strong&gt;</code>', 'Defines important text'],
          ['<code>&lt;sub&gt;</code>', 'Defines subscripted text'],
          ['<code>&lt;sup&gt;</code>', 'Defines superscripted text'],
          ['<code>&lt;ins&gt;</code>', 'Defines inserted text'],
          ['<code>&lt;del&gt;</code>', 'Defines deleted text'],
          ['<code>&lt;mark&gt;</code>', 'Defines marked/highlighted text']
        ]
      },
      { type: 'note', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Put the formatting elements to work! Make "big sale" bold with <code>&lt;b&gt;</code>, stress "today only" with <code>&lt;strong&gt;</code>, show a price change with <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code>, write the chemical formula for water using <code>&lt;sub&gt;</code>, raise the exponent with <code>&lt;sup&gt;</code>, and highlight an item with <code>&lt;mark&gt;</code>.',
        starter: `<!DOCTYPE html>
<html>
<body>

<p>Our big sale ends today only.</p>
<p>Price: $10</p>
<p>Chemical formula: H2O</p>
<p>Power: x2 and milk is important!</p>

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>

<p>Our <b>big sale</b> ends <strong>today only</strong>.</p>
<p>Price: <del>$10</del> <ins>$7</ins></p>
<p>Chemical formula: H<sub>2</sub>O</p>
<p>Power: x<sup>2</sup> and <mark>milk</mark> is important!</p>

</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which element defines bold text, <strong>without</strong> any extra importance?',
            options: ['<code>&lt;strong&gt;</code>', '<code>&lt;b&gt;</code>', '<code>&lt;em&gt;</code>', '<code>&lt;mark&gt;</code>'],
            answer: 1,
            explanation: 'The <code>&lt;b&gt;</code> element defines bold text without any extra importance. <code>&lt;strong&gt;</code> also looks bold, but marks text as important.'
          },
          {
            question: 'Which element defines text that should be marked or highlighted?',
            options: ['<code>&lt;mark&gt;</code>', '<code>&lt;small&gt;</code>', '<code>&lt;ins&gt;</code>', '<code>&lt;sub&gt;</code>'],
            answer: 0,
            explanation: 'The <code>&lt;mark&gt;</code> element defines marked/highlighted text — browsers usually show it with a yellow background.'
          },
          {
            question: 'Which pair of elements defines deleted and inserted text?',
            options: ['<code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code>', '<code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>', '<code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code>', '<code>&lt;em&gt;</code> and <code>&lt;small&gt;</code>'],
            answer: 2,
            explanation: '<code>&lt;del&gt;</code> defines deleted text (usually struck through) and <code>&lt;ins&gt;</code> defines inserted text (usually underlined).'
          },
          {
            question: 'What does the <code>&lt;sub&gt;</code> element define, and what is it useful for?',
            options: ['Superscript text, for footnotes', 'Subscript text — half a character below the line, useful for formulas like H<sub>2</sub>O', 'Smaller text, for captions', 'Bold text, for emphasis'],
            answer: 1,
            explanation: 'Subscript text appears half a character below the normal line — perfect for chemical formulas like H<sub>2</sub>O.'
          },
          {
            question: 'What is the difference between <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code>?',
            options: ['There is no difference at all', '<code>&lt;b&gt;</code> is bold without importance, <code>&lt;strong&gt;</code> marks text with strong importance', '<code>&lt;strong&gt;</code> is italic', '<code>&lt;b&gt;</code> only works on mobile'],
            answer: 1,
            explanation: 'Both look bold, but <code>&lt;b&gt;</code> is purely visual while <code>&lt;strong&gt;</code> tells browsers and screen readers the text has strong importance.'
          }
        ]
      }


    ]
  },

  {
    id: 'html-quotations',
    title: 'HTML Quotations',
    subtitle: 'Quotations, citations, contact info & abbreviations',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Quotation and Citation Elements',
      url: 'https://www.w3schools.com/html/html_quotation_elements.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML provides elements for quotations, citations, abbreviations, contact information, and text with a specific direction. These elements give browsers and assistive technology more meaning than plain text alone.' },
      {
        type: 'example',
        code: `<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 60 years, WWF has worked to help people and nature thrive. As the world's
  leading conservation organization, WWF works in nearly 100 countries. At every
  level, we collaborate with people around the world to develop and deliver
  innovative solutions that protect communities, wildlife, and the places in
  which they live.</blockquote>`
      },

      { type: 'heading', text: 'HTML <blockquote> for Quotations' },
      { type: 'p', html: 'The HTML <code>&lt;blockquote&gt;</code> element defines a section quoted from another source. Browsers usually indent blockquote elements.' },
      { type: 'note', label: 'Tip', html: 'The optional <code>cite</code> attribute can identify the source of the quotation. It does not automatically create a link, but browsers may expose the source to users and tools.' },
      {
        type: 'example',
        code: `<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 60 years, WWF has worked to help people and nature thrive. As the world's
  leading conservation organization, WWF works in nearly 100 countries. At every
  level, we collaborate with people around the world to develop and deliver
  innovative solutions that protect communities, wildlife, and the places in
  which they live.</blockquote>`
      },

      { type: 'heading', text: 'HTML <q> for Short Quotations' },
      { type: 'p', html: 'The HTML <code>&lt;q&gt;</code> element defines a short quotation. Browsers normally insert quotation marks around it automatically.' },
      {
        type: 'example',
        code: `<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`
      },

      { type: 'heading', text: 'HTML <abbr> for Abbreviations' },
      { type: 'p', html: 'The HTML <code>&lt;abbr&gt;</code> element defines an abbreviation or acronym, such as &quot;HTML&quot;, &quot;CSS&quot;, &quot;Dr.&quot;, or &quot;ASAP&quot;. Marking abbreviations can provide useful information to browsers, translation systems, and search engines.' },
      { type: 'note', label: 'Tip', html: 'Use the global <code>title</code> attribute to show the full form of an abbreviation or acronym when the user hovers over it.' },
      { type: 'example', code: `<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>` },

      { type: 'heading', text: 'HTML <address> for Contact Information' },
      { type: 'p', html: 'The HTML <code>&lt;address&gt;</code> element defines contact information for the author or owner of a document or article. It can include an email address, URL, physical address, phone number, or social media handle.' },
      { type: 'p', html: 'Text inside <code>&lt;address&gt;</code> usually renders in italics, and browsers add a line break before and after the element.' },
      {
        type: 'example',
        code: `<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>`
      },

      { type: 'heading', text: 'HTML <cite> for Work Title' },
      { type: 'p', html: 'The HTML <code>&lt;cite&gt;</code> element defines the title of a creative work, such as a book, poem, song, movie, painting, or sculpture. Its text usually renders in italics.' },
      { type: 'note', label: 'Note', html: "A person's name is not the title of a work, so do not use <code>&lt;cite&gt;</code> for an author's name." },
      { type: 'example', code: `<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>` },

      { type: 'heading', text: 'HTML <bdo> for Bi-Directional Override' },
      { type: 'p', html: 'BDO stands for Bi-Directional Override. The HTML <code>&lt;bdo&gt;</code> element overrides the current text direction, which is useful for languages written in different directions.' },
      { type: 'example', code: `<bdo dir="rtl">This text will be written from right to left</bdo>` },

      { type: 'heading', text: 'HTML Quotation and Citation Elements' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;abbr&gt;</code>', 'Defines an abbreviation or acronym'],
          ['<code>&lt;address&gt;</code>', 'Defines contact information for the author/owner of a document'],
          ['<code>&lt;bdo&gt;</code>', 'Defines the text direction'],
          ['<code>&lt;blockquote&gt;</code>', 'Defines a section that is quoted from another source'],
          ['<code>&lt;cite&gt;</code>', 'Defines the title of a work'],
          ['<code>&lt;q&gt;</code>', 'Defines a short inline quotation']
        ]
      },
      { type: 'note', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Create a short quotation card. Use <code>&lt;blockquote&gt;</code> for the long quotation, <code>&lt;q&gt;</code> for a short line inside a sentence, and <code>&lt;abbr title="..."&gt;</code> for an abbreviation. Add the author contact information in <code>&lt;address&gt;</code>, mark the title of the quoted work with <code>&lt;cite&gt;</code>, and demonstrate right-to-left text with <code>&lt;bdo dir="rtl"&gt;</code>.',
        starter: `<!DOCTYPE html>
<html>
<body>

<blockquote cite="https://example.com/interview">
  Success is the sum of small efforts, repeated day in and day out.
</blockquote>
<p>The speaker also said: <q>Keep learning.</q></p>
<p>Published by the <abbr title="Internet Technology Institute">ITI</abbr>.</p>

</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>

<blockquote cite="https://example.com/interview">
  Success is the sum of small efforts, repeated day in and day out.
</blockquote>
<p>The speaker also said: <q>Keep learning.</q></p>
<p><cite>Learning Every Day</cite> was published by the
  <abbr title="Internet Technology Institute">ITI</abbr>.</p>
<address>
Written by Jane Smith<br>
jane@example.com
</address>
<bdo dir="rtl">This text is written from right to left.</bdo>

</body>
</html>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which element defines a section quoted from another source?',
            options: ['<code>&lt;q&gt;</code>', '<code>&lt;cite&gt;</code>', '<code>&lt;blockquote&gt;</code>', '<code>&lt;address&gt;</code>'],
            answer: 2,
            explanation: 'The <code>&lt;blockquote&gt;</code> element defines a section quoted from another source and is usually displayed with indentation.'
          },
          {
            question: 'What does the <code>&lt;q&gt;</code> element define?',
            options: ['A short inline quotation', 'An author’s contact information', 'The title of a work', 'A creative work'],
            answer: 0,
            explanation: 'The <code>&lt;q&gt;</code> element defines a short inline quotation. Browsers normally add quotation marks around it.'
          },
          {
            question: 'Which attribute can provide the full form of an abbreviation when hovered?',
            options: ['<code>cite</code>', '<code>dir</code>', '<code>title</code>', '<code>href</code>'],
            answer: 2,
            explanation: 'The global <code>title</code> attribute can describe an abbreviation or acronym, as in <code>&lt;abbr title="World Health Organization"&gt;WHO&lt;/abbr&gt;</code>.'
          },
          {
            question: 'Which element should contain the title of a book, film, or painting?',
            options: ['<code>&lt;address&gt;</code>', '<code>&lt;bdo&gt;</code>', '<code>&lt;abbr&gt;</code>', '<code>&lt;cite&gt;</code>'],
            answer: 3,
            explanation: 'The <code>&lt;cite&gt;</code> element defines the title of a creative work. An author’s name is not a work title.'
          },
          {
            question: 'What does <code>&lt;bdo dir="rtl"&gt;</code> do?',
            options: ['It overrides the current text direction so the content is written right to left', 'It makes contact information italic', 'It adds a clickable citation', 'It defines an acronym'],
            answer: 0,
            explanation: 'BDO stands for Bi-Directional Override. The value <code>rtl</code> makes the content run from right to left.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-comments',
    title: 'HTML Comments',
    subtitle: 'Document, hide & debug your HTML',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Comments',
      url: 'https://www.w3schools.com/html/html_comments.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML comments are not displayed in the browser, but they can help document your HTML source code.' },

      { type: 'heading', text: 'HTML Comment Tag' },
      { type: 'p', html: 'You can add comments to your HTML source using the following syntax:' },
      { type: 'example', label: 'Comment syntax', code: `<!-- Write your comments here -->` },
      { type: 'note', label: 'Remember', html: 'The exclamation point (<code>!</code>) appears in the opening <code>&lt;!--</code>, but not in the closing <code>--&gt;</code>.' },
      { type: 'note', html: 'Comments are not displayed by the browser, but they can help document your HTML source code.' },

      { type: 'heading', text: 'Add Comments' },
      { type: 'p', html: 'With comments you can place notifications and reminders in your HTML code:' },
      { type: 'example', code: `<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->` },

      { type: 'heading', text: 'Hide Content' },
      { type: 'p', html: 'Comments can hide content temporarily. This is useful when a section is unfinished or should not appear yet.' },
      {
        type: 'example',
        label: 'Hide a paragraph',
        code: `<p>This is a paragraph.</p>

<!-- <p>This is another paragraph</p> -->

<p>This is a paragraph too.</p>`
      },
      { type: 'p', html: 'A comment can hide more than one line. Everything between <code>&lt;!--</code> and <code>--&gt;</code> is hidden from the display.' },
      {
        type: 'example',
        label: 'Hide a section',
        code: `<p>This is a paragraph.</p>
<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
<p>This is a paragraph too.</p>`
      },
      { type: 'p', html: 'Comments are also useful for debugging HTML. Comment out lines of code one at a time to isolate an error, then restore the correct lines by removing the comment markers.' },
      { type: 'note', label: 'Tip', html: 'Keep useful notes, but avoid comments that repeat what the code already says clearly. Comments are for information that helps future readers understand why the code exists.' },
      { type: 'heading', text: 'Hide Inline Content' },
      { type: 'p', html: 'Comments can hide parts in the middle of HTML code, including a small section inside a paragraph:' },
      { type: 'example', label: 'Part of a paragraph', code: `<p>This <!-- great text --> is a paragraph.</p>` },
      { type: 'note', html: 'Everything from <code>&lt;!--</code> through <code>--&gt;</code> is treated as a comment. Do not nest one comment inside another.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Document a page in progress. Add a reminder near the top, temporarily hide an unfinished promo section, and hide a few unwanted words inside a paragraph. Use comments deliberately: the reminders and hidden content should not appear in the preview.',
        starter: `<!DOCTYPE html>
<html lang="en">
<body>
  <!-- Add a reminder here -->

  <h1>My Project</h1>
  <p>Our <!-- phrase to hide --> website will launch soon.</p>

  <!--
  <section>
    <h2>Limited-time offer</h2>
    <p>Save 20% this week!</p>
  </section>
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>
  <!-- TODO: add links to the finished project pages -->

  <h1>My Project</h1>
  <p>Our <!-- experimental --> website will launch soon.</p>

  <!--
  <section>
    <h2>Limited-time offer</h2>
    <p>Save 20% this week!</p>
  </section>
  -->
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What is the correct HTML comment syntax?',
            options: ['<code>&lt;!-- comment --&gt;</code>', '<code>&lt;!— comment —&gt;</code>', '<code>&lt; comment &gt;</code>', '<code>/* comment */</code>'],
            answer: 0,
            explanation: 'An HTML comment starts with <code>&lt;!--</code> and ends with <code>--&gt;</code>.'
          },
          {
            question: 'Where must the exclamation point appear in a standard HTML comment?',
            options: ['Only in the opening <code>&lt;!--</code>', 'Only in the closing <code>--&gt;</code>', 'In both delimiters', 'It is not used'],
            answer: 0,
            explanation: 'The opening delimiter contains an exclamation point: <code>&lt;!--</code>.'
          },
          {
            question: 'Will content placed between <code>&lt;!--</code> and <code>--&gt;</code> appear in the browser?',
            options: ['No, it is hidden', 'Yes, as plain text', 'Only the text inside <code>&lt;p&gt;</code> appears', 'Only in mobile browsers'],
            answer: 0,
            explanation: 'Comments are for source code and are not displayed in the rendered page.'
          },
          {
            question: 'Which is a useful way to use comments when debugging?',
            options: ['Hide every element permanently', 'Temporarily comment out code one section at a time to isolate an error', 'Place JavaScript inside a comment', 'Make CSS automatically valid'],
            answer: 1,
            explanation: 'Hiding one section at a time helps identify which part of the HTML causes a problem.'
          },
          {
            question: 'Can HTML comments be nested inside other HTML comments?',
            options: ['Yes, in every browser', 'No; the first closing <code>--&gt;</code> ends the comment', 'Only inside <code>&lt;pre&gt;</code>', 'Only when the language attribute is set'],
            answer: 1,
            explanation: 'HTML comments cannot be nested. The first <code>--&gt;</code> closes the comment.'
          }
        ]
      }
    ]
  },














  {
    id: 'html-colors',
    title: 'HTML Colors',
    subtitle: 'Named colors, color values, backgrounds & borders',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Colors',
      url: 'https://www.w3schools.com/html/html_colors.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.' },

      { type: 'heading', text: 'Color Names' },
      { type: 'p', html: 'In HTML, a color can be specified by using a color name. HTML supports 140 standard color names.' },
      {
        type: 'example',
        label: 'Named colors',
        code: `<div style="background-color:Tomato;color:white;">Tomato</div>
<div style="background-color:Orange;">Orange</div>
<div style="background-color:DodgerBlue;color:white;">DodgerBlue</div>
<div style="background-color:MediumSeaGreen;color:white;">MediumSeaGreen</div>
<div style="background-color:Gray;color:white;">Gray</div>
<div style="background-color:SlateBlue;color:white;">SlateBlue</div>
<div style="background-color:Violet;color:white;">Violet</div>
<div style="background-color:LightGray;color:#444444;">LightGray</div>`
      },
      { type: 'note', label: 'Tip', html: 'Color names are readable, but a HEX or other color value gives you more precise control.' },

      { type: 'heading', text: 'Background Color' },
      { type: 'p', html: 'You can set the background color for HTML elements with the <code>background-color</code> CSS property.' },
      {
        type: 'example',
        code: `<h1 style="background-color:DodgerBlue;color:white;">Hello World</h1>
<p style="background-color:Tomato;color:white;">Lorem ipsum...</p>`
      },

      { type: 'heading', text: 'Text Color' },
      { type: 'p', html: 'You can set the color of text with the <code>color</code> CSS property.' },
      {
        type: 'example',
        code: `<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`
      },

      { type: 'heading', text: 'Border Color' },
      { type: 'p', html: 'You can set the color of borders. The color is one part of the CSS <code>border</code> shorthand.' },
      {
        type: 'example',
        code: `<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`
      },

      { type: 'heading', text: 'Color Values' },
      { type: 'p', html: 'In HTML, colors can also be specified using RGB, HEX, HSL, RGBA, and HSLA values. These formats are useful when you need a precise or translucent color.' },
      {
        type: 'table',
        head: ['Format', 'Example', 'Meaning'],
        rows: [
          ['RGB', '<code>rgb(255, 99, 71)</code>', 'Red, green, and blue values from 0 to 255'],
          ['HEX', '<code>#ff6347</code>', 'Hexadecimal shorthand for RGB values'],
          ['HSL', '<code>hsl(9, 100%, 64%)</code>', 'Hue, saturation, and lightness'],
          ['RGBA', '<code>rgba(255, 99, 71, 0.5)</code>', 'RGB with an alpha channel for transparency'],
          ['HSLA', '<code>hsla(9, 100%, 64%, 0.5)</code>', 'HSL with an alpha channel for transparency']
        ]
      },
      { type: 'p', html: 'The following three <code>&lt;div&gt;</code> elements have their background color set with RGB, HEX, and HSL values:' },
      {
        type: 'example',
        label: 'RGB, HEX, and HSL',
        code: `<div style="background-color:rgb(255, 99, 71);color:white;">rgb(255, 99, 71)</div>
<div style="background-color:#ff6347;color:white;">#ff6347</div>
<div style="background-color:hsl(9, 100%, 64%);color:white;">hsl(9, 100%, 64%)</div>`
      },
      { type: 'p', html: 'RGBA and HSLA add an Alpha channel to the color. In the following example, the final value <code>0.5</code> gives the color 50% transparency.' },
      {
        type: 'example',
        label: 'Transparent colors',
        code: `<div style="background-color:rgba(255, 99, 71, 0.5);color:white;">rgba(255, 99, 71, 0.5)</div>
<div style="background-color:hsla(9, 100%, 64%, 0.5);color:white;">hsla(9, 100%, 64%, 0.5)</div>`
      },
      { type: 'note', label: 'Next', html: 'You will learn more about <a href="https://www.w3schools.com/html/html_colors_rgb.asp" target="_blank" rel="noopener">RGB</a>, <a href="https://www.w3schools.com/html/html_colors_hex.asp" target="_blank" rel="noopener">HEX</a>, and <a href="https://www.w3schools.com/html/html_colors_hsl.asp" target="_blank" rel="noopener">HSL</a> in the next chapters.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Create a colorful card! Use named colors or HEX/RGB/HSL values to set a heading color, a paragraph text color, a section background, and a border. Add one translucent background with an alpha value such as <code>rgba()</code>.',
        starter: `<!DOCTYPE html>
<html lang="en">
<body>
  <section style="border: 2px solid;">
    <h1 style="">Colorful Card</h1>
    <p style="">This card uses a background, text color, and border.</p>
  </section>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>
  <section style="border: 2px solid #ff6347; background-color: rgba(255, 99, 71, 0.15); padding: 20px;">
    <h1 style="color: Tomato;">Colorful Card</h1>
    <p style="color: DodgerBlue;">This card uses a background, text color, and border.</p>
  </section>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which CSS property sets the color of text?',
            options: ['<code>background-color</code>', '<code>color</code>', '<code>border-color</code>', '<code>font-size</code>'],
            answer: 1,
            explanation: 'The <code>color</code> property sets the foreground or text color.'
          },
          {
            question: 'Which color format uses hexadecimal digits after the <code>#</code> symbol?',
            options: ['RGB', 'HEX', 'HSL', 'HSLA'],
            answer: 1,
            explanation: 'HEX uses a hexadecimal value such as <code>#ff6347</code>.'
          },
          {
            question: 'What does the fourth value in <code>rgba(255, 99, 71, 0.5)</code> control?',
            options: ['The font family', 'The border width', 'The alpha/transparency channel', 'The text alignment'],
            answer: 2,
            explanation: 'The alpha channel controls opacity or transparency. In this example, <code>0.5</code> means 50% transparency.'
          },
          {
            question: 'How can a border color be added with the border shorthand?',
            options: ['<code>border:2px solid Tomato;</code>', '<code>text:2px Tomato;</code>', '<code>background:Tomato;</code>', '<code>margin:2px solid Tomato;</code>'],
            answer: 0,
            explanation: 'The border shorthand combines width, style, and color, such as <code>2px solid Tomato</code>.'
          },
          {
            question: 'What is another way to specify a color besides a named color?',
            options: ['A CSS color value such as HEX, RGB, or HSL', 'An HTML heading', 'A paragraph tag', 'A browser address'],
            answer: 0,
            explanation: 'HTML colors can be specified with RGB, HEX, HSL, RGBA, and HSLA values in addition to color names.'
          }
        ]
      }
    ]
  },



  {
    id: 'html-css',
    title: 'HTML CSS',
    subtitle: 'Style HTML with inline, internal & external CSS',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Styles - CSS',
      url: 'https://www.w3schools.com/html/html_css.asp'
    },
    blocks: [
      { type: 'p', html: '<strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. It saves a lot of work because it can control the layout of multiple web pages all at once.' },

      { type: 'heading', text: 'What is CSS?' },
      { type: 'p', html: 'Cascading Style Sheets (CSS) is used to format the layout of a webpage. It lets you control colors, fonts, text size, spacing, positioning, backgrounds, responsive displays, and much more.' },
      { type: 'note', label: 'Tip', html: '<strong>Cascading</strong> means a style applied to a parent element also applies to its child elements. For example, if body text is blue, its headings and paragraphs are blue too unless another style overrides them.' },

      { type: 'heading', text: 'Using CSS' },
      { type: 'p', html: 'CSS can be added to HTML documents in three ways:' },
      {
        type: 'list',
        items: [
          '<strong>Inline</strong> &mdash; use the <code>style</code> attribute inside an HTML element',
          '<strong>Internal</strong> &mdash; use a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section',
          '<strong>External</strong> &mdash; use a <code>&lt;link&gt;</code> element to connect an external CSS file'
        ]
      },
      { type: 'p', html: 'The most common way is to keep styles in external CSS files. This tutorial also uses inline and internal styles because they are easy to demonstrate and edit.' },

      { type: 'heading', text: 'Inline CSS' },
      { type: 'p', html: 'Inline CSS applies a unique style to one HTML element through the element\'s <code>style</code> attribute. This example makes the heading blue and the paragraph red:' },
      {
        type: 'example',
        code: `<h1 style="color:blue;">A Blue Heading</h1>

<p style="color:red;">A red paragraph.</p>`
      },

      { type: 'heading', text: 'Internal CSS' },
      { type: 'p', html: 'Internal CSS defines styles for one HTML page. Place a <code>&lt;style&gt;</code> element in the document\'s <code>&lt;head&gt;</code> section. This example styles all headings, all paragraphs, and the page background:' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background-color: powderblue; }
    h1    { color: blue; }
    p     { color: red; }
  </style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'External CSS' },
      { type: 'p', html: 'An external style sheet defines styles for many HTML pages. Add a <code>&lt;link&gt;</code> element in the <code>&lt;head&gt;</code> of every page that should use the file:' },
      {
        type: 'example',
        label: 'Link the stylesheet',
        code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
      },
      { type: 'p', html: 'The external style sheet can be written in any text editor. It must contain no HTML code and must be saved with the <code>.css</code> extension:' },
      {
        type: 'example',
        label: 'styles.css',
        code: `body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}`
      },
      { type: 'note', label: 'Tip', html: 'With an external style sheet, you can change the look of an entire website by editing one file.' },

      { type: 'heading', text: 'CSS Colors, Fonts and Sizes' },
      { type: 'p', html: 'The CSS <code>color</code> property defines text color, <code>font-family</code> defines the font, and <code>font-size</code> defines text size.' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    color: blue;
    font-family: verdana;
    font-size: 300%;
  }
  p {
    color: red;
    font-family: courier;
    font-size: 160%;
  }
</style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'CSS Border' },
      { type: 'p', html: 'The CSS <code>border</code> property defines a border around an HTML element. You can define borders for nearly all HTML elements.' },
      {
        type: 'example',
        code: `<style>
  p {
    border: 2px solid powderblue;
  }
</style>

<p>This paragraph has a visible border.</p>`
      },

      { type: 'heading', text: 'CSS Padding' },
      { type: 'p', html: 'The CSS <code>padding</code> property defines space between the text and the border.' },
      {
        type: 'example',
        code: `<style>
  p {
    border: 2px solid powderblue;
    padding: 30px;
  }
</style>

<p>Padding creates space inside this border.</p>`
      },

      { type: 'heading', text: 'CSS Margin' },
      { type: 'p', html: 'The CSS <code>margin</code> property defines space outside the border.' },
      {
        type: 'example',
        code: `<style>
  p {
    border: 2px solid powderblue;
    margin: 50px;
  }
</style>

<p>This paragraph has space outside its border.</p>`
      },

      { type: 'heading', text: 'Link to External CSS' },
      { type: 'p', html: 'External style sheets can be referenced with a full URL or with a path relative to the current web page.' },
      { type: 'example', label: 'Full URL', code: `<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">` },
      { type: 'example', label: 'Path from the site root', code: `<link rel="stylesheet" href="/html/styles.css">` },
      { type: 'example', label: 'Same folder', code: `<link rel="stylesheet" href="styles.css">` },
      { type: 'note', html: 'You can read more about paths in the W3Schools <a href="https://www.w3schools.com/html/html_filepaths.asp" target="_blank" rel="noopener">HTML File Paths</a> chapter.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Use the HTML <code>style</code> attribute for inline styling',
          'Use the HTML <code>&lt;style&gt;</code> element to define internal CSS',
          'Use the HTML <code>&lt;link&gt;</code> element to refer to an external CSS file',
          'Use the HTML <code>&lt;head&gt;</code> element to store <code>&lt;style&gt;</code> and <code>&lt;link&gt;</code> elements',
          'Use the CSS <code>color</code> property for text colors',
          'Use the CSS <code>font-family</code> property for text fonts',
          'Use the CSS <code>font-size</code> property for text sizes',
          'Use the CSS <code>border</code> property for borders',
          'Use the CSS <code>padding</code> property for space inside the border',
          'Use the CSS <code>margin</code> property for space outside the border'
        ]
      },
      { type: 'note', label: 'Next', html: 'You can learn much more in the <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener">W3Schools CSS Tutorial</a>.' },

      { type: 'heading', text: 'HTML Style Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;style&gt;</code>', 'Defines style information for an HTML document'],
          ['<code>&lt;link&gt;</code>', 'Defines a link between a document and an external resource']
        ]
      },
      { type: 'note', html: 'For every available HTML tag, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Create a profile card with internal CSS. Style the card background, heading color, text font and size, border, padding, and margin. Then change the card rules as needed and watch the live preview update.',
        starter: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      
    }
    .card h1 {
      
    }
    .card p {
      
    }
  </style>
</head>
<body>
  <article class="card">
    <h1>Your Name</h1>
    <p>Tell visitors what you are learning and why.</p>
  </article>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #eef6ff;
      font-family: Arial, sans-serif;
    }
    .card {
      max-width: 420px;
      margin: 50px auto;
      padding: 30px;
      border: 3px solid DodgerBlue;
      background-color: white;
    }
    .card h1 {
      color: #1769aa;
      font-size: 32px;
    }
    .card p {
      color: #36454f;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <article class="card">
    <h1>Your Name</h1>
    <p>Tell visitors what you are learning and why.</p>
  </article>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does CSS stand for?',
            options: ['Cascading Style Sheets', 'Computer System Setup Sheets', 'Creative Site Structure Sheets', 'Cascading Syntax Style Sheets'],
            answer: 0,
            explanation: 'CSS stands for Cascading Style Sheets, the language used to style HTML pages.'
          },
          {
            question: 'Where should internal CSS normally be placed?',
            options: ['Inside a <code>&lt;style&gt;</code> element in <code>&lt;head&gt;</code>', 'Inside every <code>&lt;p&gt;</code> element', 'In a JavaScript file', 'After the closing <code>&lt;/html&gt;</code> tag'],
            answer: 0,
            explanation: 'Internal CSS uses a <code>&lt;style&gt;</code> element inside the document head.'
          },
          {
            question: 'Which HTML element connects a page to an external CSS file?',
            options: ['<code>&lt;link&gt;</code>', '<code>&lt;meta&gt;</code>', '<code>&lt;script&gt;</code>', '<code>&lt;source&gt;</code>'],
            answer: 0,
            explanation: 'Use <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> in the head to connect an external stylesheet.'
          },
          {
            question: 'Which property creates space outside an element border?',
            options: ['<code>margin</code>', '<code>padding</code>', '<code>font-size</code>', '<code>color</code>'],
            answer: 0,
            explanation: '<code>margin</code> is space outside the border; <code>padding</code> is space inside it.'
          },
          {
            question: 'What is the main advantage of an external CSS file?',
            options: ['One file can control the look of many pages', 'It automatically adds JavaScript', 'It replaces all HTML', 'It makes text comments visible'],
            answer: 0,
            explanation: 'An external stylesheet separates presentation from content and lets one file style an entire site.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-links',
    title: 'HTML Links',
    subtitle: 'Text, images, email links, targets & file paths',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Links',
      url: 'https://www.w3schools.com/html/html_links.asp'
    },
    blocks: [
      { type: 'p', html: 'Links are found in nearly all web pages. Links allow users to click their way from page to page.' },

      { type: 'heading', text: 'HTML Links - Hyperlinks' },
      { type: 'p', html: 'HTML links are hyperlinks. Clicking a link can jump to another document. When you move the mouse over a link, the pointer normally becomes a hand.' },
      { type: 'note', html: 'A link does not have to be text. A link can be an image or any other HTML element.' },

      { type: 'heading', text: 'HTML Links - Syntax' },
      { type: 'p', html: 'The <code>&lt;a&gt;</code> tag defines a hyperlink and follows this syntax:' },
      { type: 'example', label: 'Link syntax', code: `<a href="url">link text</a>` },
      { type: 'p', html: 'The most important attribute of the <code>&lt;a&gt;</code> element is <code>href</code>, which indicates the link’s destination. The <em>link text</em> is the visible part readers click.' },
      { type: 'example', code: `<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>` },
      {
        type: 'list',
        items: [
          'An unvisited link is underlined and blue',
          'A visited link is underlined and purple',
          'An active link is underlined and red'
        ]
      },
      { type: 'note', label: 'Tip', html: 'Links can be styled with CSS to get a different appearance.' },

      { type: 'heading', text: 'HTML Links - The target Attribute' },
      { type: 'p', html: 'By default, the linked page is displayed in the current browser window. The <code>target</code> attribute specifies where to open the linked document.' },
      {
        type: 'list',
        items: [
          '<code>_self</code> &mdash; default; opens in the same window or tab',
          '<code>_blank</code> &mdash; opens in a new window or tab',
          '<code>_parent</code> &mdash; opens in the parent frame',
          '<code>_top</code> &mdash; opens in the full body of the window'
        ]
      },
      { type: 'example', code: `<a href="https://www.w3schools.com/"
   target="_blank">Visit W3Schools!</a>` },
      { type: 'note', label: 'Preview note', html: 'This academy renders examples in a sandbox, so the preview may not open a new browser tab. The <code>target="_blank"</code> attribute is still valid in a normal HTML page.' },

      { type: 'heading', text: 'Absolute URLs vs. Relative URLs' },
      { type: 'p', html: 'An <strong>absolute URL</strong> is a complete web address. A <strong>relative URL</strong> describes a destination in relation to the current page.' },
      {
        type: 'example',
        code: `<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>`
      },

      { type: 'heading', text: 'HTML Links - Use an Image as a Link' },
      { type: 'p', html: 'To use an image as a link, place the <code>&lt;img&gt;</code> element inside the <code>&lt;a&gt;</code> element:' },
      { type: 'example', code: `<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>` },
      { type: 'note', html: 'The sandbox does not provide <code>smiley.gif</code>, so the preview displays the image’s <code>alt</code> text. The complete nested <code>&lt;a&gt;...&lt;img&gt;...&lt;/a&gt;</code> structure is the important part.' },

      { type: 'heading', text: 'Link to an Email Address' },
      { type: 'p', html: 'Use <code>mailto:</code> inside the <code>href</code> attribute to create a link that opens the user’s email program so they can send a new message:' },
      { type: 'example', code: `<a href="mailto:someone@example.com">Send email</a>` },

      { type: 'heading', text: 'Button as a Link' },
      { type: 'p', html: 'To use an HTML button as a link, add JavaScript that specifies what happens when the button is clicked:' },
      { type: 'example', code: `<button onclick="document.location='default.asp'">HTML Tutorial</button>` },
      { type: 'note', label: 'Tip', html: 'The preview sandbox does not run JavaScript, but this is the source page’s example. A normal HTML page can use it after learning JavaScript.' },

      { type: 'heading', text: 'Link Titles' },
      { type: 'p', html: 'The <code>title</code> attribute specifies extra information about an element. It is most often shown as tooltip text when the mouse moves over the element.' },
      { type: 'example', code: `<a href="https://www.w3schools.com/html/"
   title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>` },

      { type: 'heading', text: 'More on Absolute URLs and Relative URLs' },
      { type: 'p', html: 'Use a full URL to link to a web page:' },
      { type: 'example', label: 'Full URL', code: `<a href="https://www.w3schools.com/html/default.asp">HTML tutorial</a>` },
      { type: 'p', html: 'Link to a page located in the <code>html</code> folder on the current website:' },
      { type: 'example', label: 'Root-relative URL', code: `<a href="/html/default.asp">HTML tutorial</a>` },
      { type: 'p', html: 'Link to a page located in the same folder as the current page:' },
      { type: 'example', label: 'Same-folder URL', code: `<a href="default.asp">HTML tutorial</a>` },
      { type: 'note', html: 'You can learn more about these destinations in the <a href="https://www.w3schools.com/html/html_filepaths.asp" target="_blank" rel="noopener">HTML File Paths</a> chapter.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Use the <code>&lt;a&gt;</code> element to define a link',
          'Use the <code>href</code> attribute to define the link address',
          'Use the <code>target</code> attribute to define where to open the linked document',
          'Use an <code>&lt;img&gt;</code> element inside <code>&lt;a&gt;</code> to use an image as a link',
          'Use the <code>mailto:</code> scheme inside <code>href</code> to open the user’s email program'
        ]
      },

      { type: 'heading', text: 'HTML Link Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;a&gt;</code>', 'Defines a hyperlink']
        ]
      },
      { type: 'note', html: 'For a complete list of available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a small resource page. Use an absolute link and a relative link, add a <code>title</code> to one link, create a <code>mailto:</code> link, and wrap an image inside an <code>&lt;a&gt;</code> element. Use <code>target="_blank"</code> for the external resource.',
        starter: `<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Useful Resources</h1>
  <p><a href="">HTML Tutorial</a></p>
  <p><a href="" title="">Open the tutorial in a new tab</a></p>
  <p><a href="">Email the author</a></p>
  <a href="">
    <img src="smiley.gif" alt="HTML tutorial">
  </a>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Useful Resources</h1>
  <p><a href="https://www.w3schools.com/html/">Absolute HTML Tutorial</a></p>
  <p><a href="html_images.asp" title="Open the images chapter in a new tab" target="_blank">Images in a new tab</a></p>
  <p><a href="mailto:someone@example.com">Email the author</a></p>
  <a href="default.asp">
    <img src="smiley.gif" alt="HTML tutorial">
  </a>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which attribute defines a link’s destination?',
            options: ['<code>href</code>', '<code>title</code>', '<code>target</code>', '<code>src</code>'],
            answer: 0,
            explanation: 'The <code>href</code> attribute gives the URL or path a user visits when they activate the link.'
          },
          {
            question: 'Which <code>target</code> value opens a document in a new window or tab?',
            options: ['<code>_self</code>', '<code>_top</code>', '<code>_blank</code>', '<code>_parent</code>'],
            answer: 2,
            explanation: '<code>_blank</code> opens the linked document in a new browsing context.'
          },
          {
            question: 'What kind of link address describes a location relative to the current page?',
            options: ['An absolute URL', 'A relative URL', 'A <code>mailto:</code> scheme', 'An HTML heading'],
            answer: 1,
            explanation: 'A relative URL uses a path such as <code>html_images.asp</code> or <code>/css/default.asp</code> instead of a complete domain.'
          },
          {
            question: 'How do you make an image clickable?',
            options: ['Place the <code>&lt;img&gt;</code> element inside an <code>&lt;a&gt;</code> element', 'Add <code>color</code> to the image', 'Use <code>&lt;mark&gt;</code> around the image', 'Set <code>height</code> to zero'],
            answer: 0,
            explanation: 'The image element is nested inside the hyperlink element, which supplies the destination.'
          },
          {
            question: 'Which scheme opens the user’s email program?',
            options: ['<code>https:</code>', '<code>file:</code>', '<code>mailto:</code>', '<code>target:</code>'],
            answer: 2,
            explanation: 'A URL such as <code>mailto:someone@example.com</code> asks the browser to open an email composition window.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-images',
    title: 'HTML Images',
    subtitle: 'Sources, alt text, sizing, links & image formats',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Images',
      url: 'https://www.w3schools.com/html/html_images.asp'
    },
    blocks: [
      { type: 'p', html: 'Images can improve the design and appearance of a web page. They provide visual context, explain information, and help make a page easier to understand.' },
      { type: 'example', label: 'Italian Trulli', code: `<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli" style="width:100%;max-width:500px;">` },
      { type: 'example', label: 'Girl in a jacket', code: `<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" style="width:100%;max-width:500px;">` },
      { type: 'example', label: 'Flowers in Chania', code: `<img src="https://www.w3schools.com/html/img_chania.jpg" alt="Flowers in Chania" style="width:100%;max-width:500px;">` },
      { type: 'note', html: 'The source examples use same-folder paths such as <code>pic_trulli.jpg</code>. These previews use full W3Schools URLs so the images can load from the academy.' },

      { type: 'heading', text: 'HTML Images Syntax' },
      { type: 'p', html: 'The HTML <code>&lt;img&gt;</code> tag embeds an image in a web page. Images are not technically inserted into the page; they are linked to it. The <code>&lt;img&gt;</code> element creates a holding space for the referenced image.' },
      { type: 'p', html: 'The <code>&lt;img&gt;</code> tag is empty, contains attributes only, and has no closing tag. Its two required attributes are:' },
      {
        type: 'list',
        items: [
          '<code>src</code> &mdash; specifies the path or URL to the image',
          '<code>alt</code> &mdash; specifies alternate text for the image'
        ]
      },
      { type: 'example', label: 'Image syntax', code: `<img src="url" alt="alternatetext">` },

      { type: 'heading', text: 'The src Attribute' },
      { type: 'p', html: 'The required <code>src</code> attribute specifies the path or URL to the image. When a page loads, the browser retrieves the image from a web server and displays it in the page.' },
      { type: 'example', code: `<img src="img_chania.jpg" alt="Flowers in Chania">` },
      { type: 'note', html: 'Keep the image at the correct path relative to the page. If the browser cannot find it, visitors see a broken-image icon and the image’s <code>alt</code> text.' },

      { type: 'heading', text: 'The alt Attribute' },
      { type: 'p', html: 'The required <code>alt</code> attribute provides alternate text when a user cannot view the image, such as when the connection is slow, the <code>src</code> path is wrong, or a screen reader is being used. Its value should describe the image.' },
      { type: 'example', code: `<img src="img_chania.jpg" alt="Flowers in Chania">` },
      { type: 'example', label: 'Missing image', code: `<img src="wrongname.gif" alt="Flowers in Chania">` },
      { type: 'note', label: 'Tip', html: 'A screen reader reads HTML content aloud for people who are visually impaired or have a learning disability. Descriptive <code>alt</code> text makes an image’s purpose available to them.' },

      { type: 'heading', text: 'Image Size — Width and Height' },
      { type: 'p', html: 'Use the <code>style</code> attribute to specify an image’s width and height in CSS units:' },
      { type: 'example', code: `<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">` },
      { type: 'p', html: 'The <code>width</code> and <code>height</code> attributes are also valid and always define image dimensions in pixels:' },
      { type: 'example', code: `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">` },
      { type: 'note', label: 'Remember', html: 'Always specify the image’s width and height. Without them, the page might flicker while the image loads because the browser does not know the reserved size.' },

      { type: 'heading', text: 'Width and Height, or Style?' },
      { type: 'p', html: 'The <code>width</code>, <code>height</code>, and <code>style</code> attributes are all valid. W3Schools suggests using <code>style</code> because it prevents stylesheets from changing the image’s size.' },
      {
        type: 'example',
        code: `<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 100%;
}
</style>
</head>
<body>
<img src="https://www.w3schools.com/html/html5.gif" alt="HTML5 Icon" width="128" height="128">
<img src="https://www.w3schools.com/html/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">
</body>
</html>`
      },
      { type: 'note', html: 'The first image is controlled by the <code>width</code> and <code>height</code> attributes, so the stylesheet does not change its size. The second uses inline <code>style</code>, which also overrides the stylesheet.' },

      { type: 'heading', text: 'Images in Another Folder' },
      { type: 'p', html: 'If your images are in a sub-folder, include the folder name in the <code>src</code> attribute:' },
      { type: 'example', code: `<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">` },

      { type: 'heading', text: 'Images on Another Server/Website' },
      { type: 'p', html: 'To point to an image on another server, specify an absolute URL in the <code>src</code> attribute:' },
      { type: 'example', label: 'External image', code: `<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">` },
      { type: 'note', label: 'External images', html: 'External images may be under copyright and require permission. You also cannot control them: they may be removed or changed without warning.' },

      { type: 'heading', text: 'Animated Images' },
      { type: 'p', html: 'HTML supports animated GIF images. The image is referenced with the same <code>&lt;img&gt;</code> element:' },
      { type: 'example', label: 'Animated GIF', code: `<img src="https://www.w3schools.com/html/programming.gif" alt="Computer Man" style="width:48px;height:48px;">` },

      { type: 'heading', text: 'Image as a Link' },
      { type: 'p', html: 'To use an image as a link, put the <code>&lt;img&gt;</code> element inside the <code>&lt;a&gt;</code> element:' },
      { type: 'example', label: 'Clickable image', code: `<a href="https://www.w3schools.com/html/">
  <img src="https://www.w3schools.com/html/smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>` },

      { type: 'heading', text: 'Image Floating' },
      { type: 'p', html: 'Use the CSS <code>float</code> property to place an image on the right or left of text:' },
      {
        type: 'example',
        code: `<p>
  <img src="https://www.w3schools.com/html/smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
  The image will float to the right of the text.
</p>
<br>
<p>
  <img src="https://www.w3schools.com/html/smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
  The image will float to the left of the text.
</p>`
      },
      { type: 'note', label: 'Next', html: 'Read the <a href="https://www.w3schools.com/css/css_float.asp" target="_blank" rel="noopener">CSS Float Tutorial</a> to learn more about floating elements.' },

      { type: 'heading', text: 'Common Image Formats' },
      { type: 'p', html: 'These common image file types are supported by modern browsers such as Chrome, Edge, Firefox, Safari, and Opera:' },
      {
        type: 'table',
        head: ['Abbreviation', 'File Format', 'File Extension'],
        rows: [
          ['APNG', 'Animated Portable Network Graphics', '<code>.apng</code>'],
          ['GIF', 'Graphics Interchange Format', '<code>.gif</code>'],
          ['ICO', 'Microsoft Icon', '<code>.ico, .cur</code>'],
          ['JPEG', 'Joint Photographic Expert Group image', '<code>.jpg, .jpeg, .jfif, .pjpeg, .pjp</code>'],
          ['PNG', 'Portable Network Graphics', '<code>.png</code>'],
          ['SVG', 'Scalable Vector Graphics', '<code>.svg</code>']
        ]
      },

      { type: 'heading', text: 'Chapter Summary' },
      { type: 'list', items: [
        'Use the <code>&lt;img&gt;</code> element to define an image',
        'Use the <code>src</code> attribute to define the image URL',
        'Use the <code>alt</code> attribute to provide alternate text when the image cannot be displayed',
        'Use the <code>width</code> and <code>height</code> attributes or CSS properties to define image size',
        'Use the CSS <code>float</code> property to let an image float left or right'
      ] },
      { type: 'note', label: 'Remember', html: 'Loading large images takes time and can slow down a page. Use images carefully.' },

      { type: 'heading', text: 'HTML Image Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<a href="https://www.w3schools.com/tags/tag_img.asp" target="_blank" rel="noopener"><code>&lt;img&gt;</code></a>', 'Defines an image'],
          ['<a href="https://www.w3schools.com/tags/tag_map.asp" target="_blank" rel="noopener"><code>&lt;map&gt;</code></a>', 'Defines an image map'],
          ['<a href="https://www.w3schools.com/tags/tag_area.asp" target="_blank" rel="noopener"><code>&lt;area&gt;</code></a>', 'Defines a clickable area inside an image map'],
          ['<a href="https://www.w3schools.com/tags/tag_picture.asp" target="_blank" rel="noopener"><code>&lt;picture&gt;</code></a>', 'Defines a container for multiple image resources']
        ]
      },
      { type: 'note', label: 'Next', html: 'Visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a> for the complete list of HTML tags.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a small travel gallery with a linked hero image. Give the image descriptive <code>alt</code> text, reserve its width and height, and wrap it in an <code>&lt;a&gt;</code> element. Add a CSS <code>float</code> rule so the image sits beside a paragraph. Use the supplied W3Schools image URL so the preview loads.',
        starter: `<!DOCTYPE html>
<html lang="en">
<body>
  <h1>My Travel Gallery</h1>

  <!-- Add your linked hero image here -->

  <p>Write about your favorite destination. An image can float beside this text.</p>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>
  <h1>My Travel Gallery</h1>

  <a href="https://www.w3schools.com/html/">
    <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="White houses in Trulli, Italy" width="300" height="200" style="float:right;margin-left:16px;">
  </a>

  <p>Trulli are traditional Italian buildings with distinctive conical roofs.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which attribute specifies the URL of an image?',
            options: ['<code>href</code>', '<code>src</code>', '<code>alt</code>', '<code>title</code>'],
            answer: 1,
            explanation: 'The <code>src</code> attribute gives the browser the image path or URL.'
          },
          {
            question: 'What is the purpose of the <code>alt</code> attribute?',
            options: ['Set the image border', 'Provide alternate text when the image cannot be viewed', 'Link the image to a page', 'Make the image clickable'],
            answer: 1,
            explanation: 'Alternate text describes the image for screen-reader users and appears when the image cannot load.'
          },
          {
            question: 'Which HTML element is used to display an image?',
            options: ['<code>&lt;picture&gt;</code>', '<code>&lt;link&gt;</code>', '<code>&lt;img&gt;</code>', '<code>&lt;map&gt;</code>'],
            answer: 2,
            explanation: 'The empty <code>&lt;img&gt;</code> element creates a holding space for the referenced image.'
          },
          {
            question: 'How do you make an image a link?',
            options: ['Add <code>target</code> to the image', 'Place the <code>&lt;img&gt;</code> element inside an <code>&lt;a&gt;</code> element', 'Add <code>alt</code> to the image', 'Use an <code>&lt;hr&gt;</code> element'],
            answer: 1,
            explanation: 'Nesting an image inside a hyperlink supplies the image with a clickable destination.'
          },
          {
            question: 'Which CSS property places an image on the left or right of text?',
            options: ['<code>float</code>', '<code>src</code>', '<code>alt</code>', '<code>href</code>'],
            answer: 0,
            explanation: 'Values such as <code>float:left</code> and <code>float:right</code> position an image beside text.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-favicon',
    title: 'HTML Favicon',
    subtitle: 'Add a small icon to your browser tab',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Favicon',
      url: 'https://www.w3schools.com/html/html_favicon.asp'
    },
    blocks: [
      { type: 'p', html: 'A favicon is a small image displayed next to the page title in the browser tab.' },

      { type: 'heading', text: 'How To Add a Favicon in HTML' },
      { type: 'p', html: 'You can use any image you like as your favicon. You can also create your own favicon on a favicon generator such as <a href="https://www.favicon.cc" target="_blank" rel="noopener">favicon.cc</a>.' },
      { type: 'note', label: 'Tip', html: 'A favicon is a small image, so it should be simple and have high contrast.' },
      { type: 'p', html: 'The favicon is displayed to the left of the page title in the browser tab.' },
      { type: 'p', html: 'To add one to your website, save the favicon image in your web server’s root directory, or create a root-level folder named <code>images</code> and save it there. A common filename is <code>favicon.ico</code>.' },
      { type: 'p', html: 'Next, add a <code>&lt;link&gt;</code> element to your <code>index.html</code> file, after the <code>&lt;title&gt;</code> element:' },
      {
        type: 'example',
        label: 'Add a favicon',
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
      },
      { type: 'p', html: 'Save the <code>index.html</code> file and reload it in your browser. The browser tab should display the favicon to the left of the page title.' },
      { type: 'note', label: 'Preview note', html: 'A favicon belongs to the browser’s tab or bookmark interface, so it is not displayed inside the academy’s sandboxed live-result panel. Test it by opening your own saved <code>index.html</code> file in a browser tab.' },

      { type: 'heading', text: 'Favicon File Format Support' },
      { type: 'p', html: 'The following table shows favicon image file format support for the browsers listed in the source.' },
      {
        type: 'table',
        head: ['Browser', 'ICO', 'PNG', 'GIF', 'JPEG', 'SVG'],
        rows: [
          ['Edge', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
          ['Chrome', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
          ['Firefox', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
          ['Opera', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
          ['Safari', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes']
        ]
      },

      { type: 'heading', text: 'Chapter Summary' },
      { type: 'list', items: ['Use the HTML <code>&lt;link&gt;</code> element to insert a favicon'] },

      { type: 'heading', text: 'HTML Link Tag' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<a href="https://www.w3schools.com/tags/tag_link.asp" target="_blank" rel="noopener"><code>&lt;link&gt;</code></a>', 'Defines the relationship between a document and an external resource']
        ]
      },
      { type: 'note', html: 'For the complete list of HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Give a small personal project its own favicon. Create an <code>images</code> folder, place a simple high-contrast icon named <code>favicon.ico</code> inside it, and connect the page to it with a <code>&lt;link&gt;</code> element after the page title. The code preview shows the page content; save the same structure locally to see the icon in the browser tab.',
        starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Project</title>
  <!-- Add the favicon link here -->
</head>
<body>
  <h1>My Project</h1>
  <p>Welcome to my project.</p>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Project</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
  <h1>My Project</h1>
  <p>Welcome to my project.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Where is a favicon normally displayed?',
            options: ['Behind the main page heading', 'Next to the page title in the browser tab', 'Inside every paragraph', 'At the bottom of a webpage'],
            answer: 1,
            explanation: 'A favicon is a small icon shown beside the page title in a browser tab or bookmark.'
          },
          {
            question: 'Which HTML element connects a page to a favicon?',
            options: ['<code>&lt;link&gt;</code>', '<code>&lt;img&gt;</code>', '<code>&lt;meta&gt;</code>', '<code>&lt;h1&gt;</code>'],
            answer: 0,
            explanation: 'The <code>link</code> element in the document head defines the relationship with the favicon resource.'
          },
          {
            question: 'Where should the favicon <code>link</code> be placed?',
            options: ['After the <code>title</code> in the document head', 'Inside the final paragraph', 'After <code>&lt;/html&gt;</code>', 'Inside an image'],
            answer: 0,
            explanation: 'Place the link after the title in the document head, as shown in the example.'
          },
          {
            question: 'What is a common filename for a favicon?',
            options: ['<code>favicon.ico</code>', '<code>index.js</code>', '<code>body.css</code>', '<code>title.png</code>'],
            answer: 0,
            explanation: 'Favicons are commonly stored as favicon.ico, although other supported image formats can also be used.'
          },
          {
            question: 'What should you consider when designing a favicon?',
            options: ['Use a simple image with high contrast', 'Use as much tiny text as possible', 'Avoid all recognizable shapes', 'Make it a full-screen photo'],
            answer: 0,
            explanation: 'Favicons are tiny, so a simple design and strong contrast make the icon easier to recognize.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-page-titles',
    title: 'HTML Page Titles',
    subtitle: 'Describe your page with the <title> element',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Page Title',
      url: 'https://www.w3schools.com/html/html_page_title.asp'
    },
    blocks: [
      { type: 'p', html: 'Every web page should have a page title to describe the meaning of the page.' },

      { type: 'heading', text: 'The Title Element' },
      { type: 'p', html: 'The <code>&lt;title&gt;</code> element adds a title to your page:' },
      {
        type: 'example',
        label: 'Add a page title',
        code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>
  The content of the document......
</body>
</html>`
      },
      { type: 'p', html: 'The title is shown in the browser’s title bar. In this academy’s preview, the title is still present in the document source, but the surrounding page content is what you see in the result panel.' },

      { type: 'heading', text: 'What is a Good Title?' },
      { type: 'p', html: 'The title should describe the content and meaning of the page. The page title is also very important for search engine optimization (SEO): search engine algorithms use its text to help decide the order of pages in search results.' },
      { type: 'p', html: 'The <code>&lt;title&gt;</code> element:' },
      {
        type: 'list',
        items: [
          'Defines a title in the browser toolbar',
          'Provides a title for the page when it is added to favorites',
          'Displays a title for the page in search-engine results'
        ]
      },
      { type: 'note', label: 'Remember', html: 'Make the title as accurate and meaningful as possible. A title describes this specific page—not just the website name.' },

      { type: 'heading', text: 'HTML Title Tag' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;title&gt;</code>', 'Defines the title of the document']
        ]
      },
      { type: 'note', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Give a small project a meaningful page title. Add a <code>&lt;title&gt;</code> inside the document head that describes the page’s purpose, then add a heading and paragraph in the body. Use a title that would make sense in browser tabs, favorites, and search results.',
        starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Replace this title</title>
</head>
<body>
  <h1>My Project</h1>
  <p>Tell visitors what this page is about.</p>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Project · Learn HTML</title>
</head>
<body>
  <h1>My Project</h1>
  <p>Tell visitors what this page is about.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Where should the <code>&lt;title&gt;</code> element be placed?',
            options: ['Inside the document head', 'Inside the body after the first heading', 'After the closing <code>&lt;/html&gt;</code> tag', 'Inside a paragraph'],
            answer: 0,
            explanation: 'The title belongs in the document head, where metadata for the page is defined.'
          },
          {
            question: 'What does the page title describe?',
            options: ['The content and meaning of the page', 'Only the website’s color scheme', 'The browser’s window size', 'The HTML version used by every page'],
            answer: 0,
            explanation: 'A good page title is an accurate, meaningful description of that specific page.'
          },
          {
            question: 'Where is a page title commonly displayed?',
            options: ['In the browser title bar or tab', 'Inside every paragraph', 'Only at the bottom of the webpage', 'In the HTML body by default'],
            answer: 0,
            explanation: 'Browsers commonly show the title in the title bar or browser tab.'
          },
          {
            question: 'Which statement about a good title is correct?',
            options: ['It should be as accurate and meaningful as possible', 'It should be identical on every page', 'It should always be the longest possible phrase', 'It should contain only the website logo'],
            answer: 0,
            explanation: 'Meaningful, specific titles help people and search engines understand what each page is about.'
          },
          {
            question: 'What is the <code>&lt;title&gt;</code> element used for?',
            options: ['Defining the title of the document', 'Adding visible body text', 'Creating an image', 'Linking an external stylesheet'],
            answer: 0,
            explanation: 'The title element defines the document title used by browser and search-result interfaces.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-tables',
    title: 'HTML Tables',
    subtitle: 'Arrange structured data in rows and columns',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Tables',
      url: 'https://www.w3schools.com/html/html_tables.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML tables allow web developers to arrange data into rows and columns.' },
      {
        type: 'example',
        label: 'A simple table',
        code: `<style>
  table { border-collapse: collapse; }
  th, td { border: 1px solid #94a3b8; padding: 8px 10px; }
</style>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`
      },
      { type: 'note', html: 'The basic table HTML defines structure, not visible borders. The small stylesheet above only makes the rows and cells visible in this academy’s live preview.' },

      { type: 'heading', text: 'Define an HTML Table' },
      { type: 'p', html: 'A table in HTML consists of table cells inside rows and columns. Use <code>&lt;table&gt;</code> for the table, <code>&lt;tr&gt;</code> for each row, and <code>&lt;th&gt;</code> or <code>&lt;td&gt;</code> for the cells.' },

      { type: 'heading', text: 'Table Cells' },
      { type: 'p', html: 'Each data cell is defined by a <code>&lt;td&gt;</code> and a <code>&lt;/td&gt;</code> tag. <code>td</code> stands for <strong>table data</strong>. Everything between these tags is the content of the cell.' },
      {
        type: 'example',
        code: `<style>table{border-collapse:collapse}td{border:1px solid #94a3b8;padding:8px 10px}</style>
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>`
      },
      { type: 'note', html: 'A table cell can contain text, images, lists, links, other tables, and many other HTML elements.' },

      { type: 'heading', text: 'Table Rows' },
      { type: 'p', html: 'Each table row starts with a <code>&lt;tr&gt;</code> and ends with a <code>&lt;/tr&gt;</code> tag. <code>tr</code> stands for <strong>table row</strong>.' },
      {
        type: 'example',
        code: `<style>table{border-collapse:collapse}td{border:1px solid #94a3b8;padding:8px 10px}</style>
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>`
      },
      { type: 'p', html: 'You can have as many rows as you like. As a simple rule, make sure each row has the same number of cells.' },

      { type: 'heading', text: 'Table Headers' },
      { type: 'p', html: 'Use <code>&lt;th&gt;</code> instead of <code>&lt;td&gt;</code> when a cell labels its column or row. <code>th</code> stands for <strong>table header</strong>.' },
      {
        type: 'example',
        label: 'Header cells',
        code: `<style>table{border-collapse:collapse}th,td{border:1px solid #94a3b8;padding:8px 10px}</style>
<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>`
      },
      { type: 'p', html: 'By default, text in <code>&lt;th&gt;</code> elements is bold and centered, but you can change that appearance with CSS.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Use <code>&lt;table&gt;</code> to define a table',
          'Use <code>&lt;tr&gt;</code> to define each table row',
          'Use <code>&lt;td&gt;</code> for ordinary data cells',
          'Use <code>&lt;th&gt;</code> for header cells',
          'Use <code>&lt;caption&gt;</code> to describe a table',
          'Use <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> to define groups of columns',
          'Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to group table sections'
        ]
      },

      { type: 'heading', text: 'HTML Table Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;table&gt;</code>', 'Defines a table'],
          ['<code>&lt;th&gt;</code>', 'Defines a header cell in a table'],
          ['<code>&lt;tr&gt;</code>', 'Defines a row in a table'],
          ['<code>&lt;td&gt;</code>', 'Defines a cell in a table'],
          ['<code>&lt;caption&gt;</code>', 'Defines a table caption'],
          ['<code>&lt;colgroup&gt;</code>', 'Specifies a group of one or more columns for formatting'],
          ['<code>&lt;col&gt;</code>', 'Specifies column properties within a <code>&lt;colgroup&gt;</code>'],
          ['<code>&lt;thead&gt;</code>', 'Groups the header content in a table'],
          ['<code>&lt;tbody&gt;</code>', 'Groups the body content in a table'],
          ['<code>&lt;tfoot&gt;</code>', 'Groups the footer content in a table']
        ]
      },
      { type: 'note', html: 'For a complete list of available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },


      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a student score table with three columns: <code>Student</code>, <code>Subject</code>, and <code>Score</code>. Use a <code>&lt;th&gt;</code> row for the headings, <code>&lt;tr&gt;</code> for each student, and <code>&lt;td&gt;</code> for the data. Add a <code>&lt;caption&gt;</code> that describes the table.',
        starter: `<style>
  table { border-collapse: collapse; }
  caption { font-weight: bold; margin-bottom: 8px; text-align: left; }
  th, td { border: 1px solid #94a3b8; padding: 8px 10px; }
</style>
<table>
  <!-- Add a caption and rows here -->
</table>`,
        solution: `<style>
  table { border-collapse: collapse; }
  caption { font-weight: bold; margin-bottom: 8px; text-align: left; }
  th, td { border: 1px solid #94a3b8; padding: 8px 10px; }
</style>
<table>
  <caption>Student Scores</caption>
  <tr><th>Student</th><th>Subject</th><th>Score</th></tr>
  <tr><td>Emil</td><td>HTML</td><td>96</td></tr>
  <tr><td>Tobias</td><td>CSS</td><td>91</td></tr>
  <tr><td>Linus</td><td>JavaScript</td><td>88</td></tr>
</table>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which element defines one row of a table?',
            options: ['<code>&lt;tr&gt;</code>', '<code>&lt;td&gt;</code>', '<code>&lt;th&gt;</code>', '<code>&lt;caption&gt;</code>'],
            answer: 0,
            explanation: '<code>tr</code> stands for table row. Each row starts with <code>&lt;tr&gt;</code> and ends with <code>&lt;/tr&gt;</code>.'
          },
          {
            question: 'Which element should label a column heading?',
            options: ['<code>&lt;th&gt;</code>', '<code>&lt;meta&gt;</code>', '<code>&lt;style&gt;</code>', '<code>&lt;link&gt;</code>'],
            answer: 0,
            explanation: 'The <code>th</code> element defines a table header cell.'
          },
          {
            question: 'What does <code>td</code> stand for?',
            options: ['Table data', 'Table design', 'Table document', 'Table directory'],
            answer: 0,
            explanation: '<code>td</code> stands for table data; its content is an ordinary data cell.'
          },
          {
            question: 'Which element describes the purpose of a whole table?',
            options: ['<code>&lt;caption&gt;</code>', '<code>&lt;col&gt;</code>', '<code>&lt;tfoot&gt;</code>', '<code>&lt;tbody&gt;</code>'],
            answer: 0,
            explanation: 'The <code>caption</code> element provides a description or title for the table.'
          },
          {
            question: 'Which element groups the body content of a table?',
            options: ['<code>&lt;tbody&gt;</code>', '<code>&lt;head&gt;</code>', '<code>&lt;title&gt;</code>', '<code>&lt;footer&gt;</code>'],
            answer: 0,
            explanation: 'The <code>tbody</code> element groups the main body rows of a table.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-lists',
    title: 'HTML Lists',
    subtitle: 'Unordered, ordered & description lists',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Lists',
      url: 'https://www.w3schools.com/html/html_lists.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML lists allow web developers to group a set of related items in lists.' },
      {
        type: 'example',
        label: 'Two kinds of HTML list',
        code: `<section style="display:flex;gap:2rem;flex-wrap:wrap;">
  <div>
    <p>An unordered HTML list:</p>
    <ul>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
  </div>
  <div>
    <p>An ordered HTML list:</p>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
      <li>Fourth item</li>
    </ol>
  </div>
</section>`
      },

      { type: 'heading', text: 'Unordered HTML List' },
      { type: 'p', html: 'An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.' },
      { type: 'p', html: 'The list items are marked with bullets (small black circles) by default:' },
      { type: 'example', code: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>` },
      { type: 'note', label: 'Remember', html: 'Use <code>&lt;ul&gt;</code> when the order of the items does not matter.' },

      { type: 'heading', text: 'Ordered HTML List' },
      { type: 'p', html: 'An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.' },
      { type: 'p', html: 'The list items are marked with numbers by default:' },
      { type: 'example', code: `<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>` },
      { type: 'note', label: 'Remember', html: 'Use <code>&lt;ol&gt;</code> when the order of the items matters, such as steps in a recipe.' },

      { type: 'heading', text: 'HTML Description Lists' },
      { type: 'p', html: 'HTML also supports description lists. A description list is a list of terms, with a description of each term.' },
      { type: 'p', html: 'The <code>&lt;dl&gt;</code> tag defines the description list, the <code>&lt;dt&gt;</code> tag defines the term (name), and the <code>&lt;dd&gt;</code> tag describes each term:' },
      { type: 'example', code: `<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>` },

      { type: 'heading', text: 'HTML List Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;ul&gt;</code>', 'Defines an unordered list'],
          ['<code>&lt;ol&gt;</code>', 'Defines an ordered list'],
          ['<code>&lt;li&gt;</code>', 'Defines a list item'],
          ['<code>&lt;dl&gt;</code>', 'Defines a description list'],
          ['<code>&lt;dt&gt;</code>', 'Defines a term in a description list'],
          ['<code>&lt;dd&gt;</code>', 'Describes the term in a description list']
        ]
      },
      { type: 'note', label: 'Next', html: 'For a complete list of all available HTML tags, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a small packing guide. Use an <code>&lt;ul&gt;</code> for a checklist of things to pack, an <code>&lt;ol&gt;</code> for steps in an order that must be followed, and a <code>&lt;dl&gt;</code> for two terms with their descriptions. Choose the list type based on whether each group is unordered, ordered, or made of terms and definitions.',
        starter: `<!DOCTYPE html>
<html lang="en">
<body>
  <h1>My Packing Guide</h1>

  <h2>Pack these items</h2>
  <p>Add an unordered list of four items.</p>

  <h2>Follow these steps</h2>
  <p>Add an ordered list of three steps.</p>

  <h2>Useful terms</h2>
  <p>Add a description list with two terms and definitions.</p>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>
  <h1>My Packing Guide</h1>

  <h2>Pack these items</h2>
  <ul>
    <li>Passport</li>
    <li>Clothes</li>
    <li>Toiletries</li>
    <li>Phone charger</li>
  </ul>

  <h2>Follow these steps</h2>
  <ol>
    <li>Check the weather.</li>
    <li>Pack the suitcase.</li>
    <li>Check the list before leaving.</li>
  </ol>

  <h2>Useful terms</h2>
  <dl>
    <dt>Boarding pass</dt>
    <dd>A document that allows you to board the plane.</dd>
    <dt>Itinerary</dt>
    <dd>A plan or schedule for a journey.</dd>
  </dl>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which element creates an unordered list?',
            options: ['<code>&lt;ol&gt;</code>', '<code>&lt;ul&gt;</code>', '<code>&lt;li&gt;</code>', '<code>&lt;dd&gt;</code>'],
            answer: 1,
            explanation: 'The <code>ul</code> element defines an unordered list, whose items normally appear with bullet markers.'
          },
          {
            question: 'Which list type is best for steps that must happen in sequence?',
            options: ['An unordered list', 'An ordered list', 'A description list', 'A paragraph'],
            answer: 1,
            explanation: 'An ordered list, written with <code>ol</code>, communicates an intentional sequence.'
          },
          {
            question: 'What does each <code>&lt;li&gt;</code> element represent?',
            options: ['A list item', 'A table row', 'A list description', 'A document title'],
            answer: 0,
            explanation: 'The <code>li</code> element represents one item in an ordered or unordered list.'
          },
          {
            question: 'Which elements define a description list and its terms?',
            options: ['<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code>', '<code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code>', '<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and <code>&lt;li&gt;</code>', '<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, and <code>&lt;h3&gt;</code>'],
            answer: 1,
            explanation: 'A description list uses <code>dl</code>; <code>dt</code> defines a term and <code>dd</code> describes it.'
          },
          {
            question: 'What is the main difference between <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>?',
            options: ['<code>ul</code> is for links and <code>ol</code> is for images', '<code>ul</code> is unordered and <code>ol</code> is ordered', '<code>ul</code> requires text and <code>ol</code> requires images', 'There is no difference'],
            answer: 1,
            explanation: '<code>ul</code> presents an unordered collection, while <code>ol</code> presents items in order.'
          }
        ]
      }
    ]
  },

  {
    id: 'html-blocks-inline',
    title: 'HTML Blocks & Inline',
    subtitle: 'Block-level and inline element behavior',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Block and Inline Elements',
      url: 'https://www.w3schools.com/html/html_blocks.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML elements are commonly divided into two groups: <strong>block-level elements</strong> and <strong>inline elements</strong>. Their default browser behavior affects line breaks, available width, and how content flows.' },

      { type: 'heading', text: 'Block-level Elements' },
      { type: 'p', html: 'A block-level element always starts on a new line. Browsers automatically add space before and after it, and it takes up the full width available.' },
      { type: 'p', html: 'Two commonly used block elements are <code>&lt;p&gt;</code>, which defines a paragraph, and <code>&lt;div&gt;</code>, which defines a division or section.' },
      { type: 'example', label: 'Block elements', code: `<p>Hello World</p>
<div>Hello World</div>` },
      { type: 'p', html: 'The page lists these HTML elements as block-level:' },
      {
        type: 'list',
        items: [
          '<code>&lt;address&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;canvas&gt;</code>, <code>&lt;dd&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;dl&gt;</code>',
          '<code>&lt;dt&gt;</code>, <code>&lt;fieldset&gt;</code>, <code>&lt;figcaption&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;h1&gt;</code>&ndash;<code>&lt;h6&gt;</code>',
          '<code>&lt;header&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;noscript&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;p&gt;</code>',
          '<code>&lt;pre&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;ul&gt;</code>, and <code>&lt;video&gt;</code>'
        ]
      },

      { type: 'heading', text: 'Inline Elements' },
      { type: 'p', html: 'An inline element does not start on a new line. It only takes up as much width as necessary and continues within the surrounding flow.' },
      { type: 'example', label: 'Inline element', code: `<p>This is a <span>span element inside</span> a paragraph.</p>` },
      { type: 'p', html: 'The page lists these HTML elements as inline:' },
      {
        type: 'list',
        items: [
          '<code>&lt;a&gt;</code>, <code>&lt;abbr&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;bdo&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;cite&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;dfn&gt;</code>',
          '<code>&lt;em&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;kbd&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;map&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;output&gt;</code>, <code>&lt;q&gt;</code>',
          '<code>&lt;samp&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;small&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;sub&gt;</code>, <code>&lt;sup&gt;</code>',
          '<code>&lt;textarea&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;var&gt;</code>'
        ]
      },
      { type: 'note', html: 'The source notes that an inline element cannot contain a block-level element. In modern HTML, the permitted content model is defined per element, so use the correct semantic parent and valid nesting rather than relying only on visual appearance.' },

      { type: 'heading', text: 'The <div> Element' },
      { type: 'p', html: 'The <code>&lt;div&gt;</code> element is a block-level container often used to group other elements. It has no required attributes, but <code>style</code>, <code>class</code>, and <code>id</code> are common. With CSS, it can style a whole block of content.' },
      { type: 'example', label: 'Styled div', code: `<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>` },
      { type: 'note', label: 'Semantics first', html: '<code>&lt;div&gt;</code> has no meaning by itself. Prefer a semantic element such as <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, or <code>&lt;main&gt;</code> when one accurately describes the content.' },

      { type: 'heading', text: 'The <span> Element' },
      { type: 'p', html: 'The <code>&lt;span&gt;</code> element is an inline container used to mark up part of text or a document. It has no required attributes; <code>style</code>, <code>class</code>, and <code>id</code> are common.' },
      { type: 'example', label: 'Styled spans', code: `<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes
and my father has <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.</p>` },
      { type: 'note', label: 'Tip', html: 'Use <code>&lt;span&gt;</code> when no more specific semantic element fits. A <code>&lt;span&gt;</code> alone adds no semantics; its surrounding element and content provide meaning.' },
      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'A block-level element always starts on a new line and takes up the full width available.',
          'An inline element does not start on a new line and only takes up as much width as necessary.',
          'The <code>&lt;div&gt;</code> element is block-level and is often used as a container for other HTML elements.',
          'The <code>&lt;span&gt;</code> element is an inline container used to mark up part of a text or document.'
        ]
      },

      { type: 'heading', text: 'HTML Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;div&gt;</code>', 'Defines a section in a document (block-level)'],
          ['<code>&lt;span&gt;</code>', 'Defines a section in a document (inline)']
        ]
      },
      { type: 'note', label: 'Reference', html: 'For a complete list of available tags, visit the <a href="https://www.w3schools.com/tags/" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a compact city guide. Use a semantic block container for each city, place a heading and description inside it, and use inline <code>&lt;span&gt;</code> elements to highlight the country and a rating. Use <code>&lt;div&gt;</code> only for a layout panel where no more specific semantic element fits. Compare how the page changes when the spans are replaced with block elements.',
        starter: `<!DOCTYPE html>
<html lang="en">
<body>
  <section>
    <h2>London</h2>
    <p>Country: United Kingdom. Rating: 5 stars.</p>
  </section>

  <section>
    <h2>Tokyo</h2>
    <p>Country: Japan. Rating: 5 stars.</p>
  </section>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<body>
  <div style="display:flex;gap:1rem;">
    <section style="border:1px solid #888;padding:1rem;">
      <h2>London</h2>
      <p>Country: <span style="color:blue;font-weight:bold;">United Kingdom</span>.</p>
      <p>Rating: <span style="color:green;font-weight:bold;">5 stars</span>.</p>
    </section>

    <section style="border:1px solid #888;padding:1rem;">
      <h2>Tokyo</h2>
      <p>Country: <span style="color:blue;font-weight:bold;">Japan</span>.</p>
      <p>Rating: <span style="color:green;font-weight:bold;">5 stars</span>.</p>
    </section>
  </div>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What happens by default when a block-level element appears?',
            options: ['It starts on a new line and uses the available width', 'It continues directly after the preceding word', 'It becomes invisible', 'It changes the document language'],
            answer: 0,
            explanation: 'Block-level elements begin on a new line and stretch across the width available to them.'
          },
          {
            question: 'How does an inline element normally affect line flow?',
            options: ['It continues in the current line and uses only the width it needs', 'It always forces a page break', 'It fills the entire browser width', 'It removes surrounding text'],
            answer: 0,
            explanation: 'Inline elements continue in the surrounding flow and only consume the width their content requires.'
          },
          {
            question: 'Which element is a block-level container often used to group other elements?',
            options: ['<code>&lt;span&gt;</code>', '<code>&lt;div&gt;</code>', '<code>&lt;em&gt;</code>', '<code>&lt;var&gt;</code>'],
            answer: 1,
            explanation: 'The <code>div</code> element is block-level and is frequently used to group and style a block of content.'
          },
          {
            question: 'Which element is designed to mark up a small part of text within a paragraph?',
            options: ['<code>&lt;span&gt;</code>', '<code>&lt;table&gt;</code>', '<code>&lt;section&gt;</code>', '<code>&lt;footer&gt;</code>'],
            answer: 0,
            explanation: 'The <code>span</code> element is an inline container for a small part of text or a document.'
          },
          {
            question: 'What is the best way to use <code>&lt;div&gt;</code> in a modern page?',
            options: ['Use it for every heading and paragraph', 'Use it only when no more specific semantic element accurately fits the content', 'Place it inside every inline span', 'Use it instead of HTML'],
            answer: 1,
            explanation: 'A div has no inherent meaning. Prefer semantic elements when they fit, and use div for generic grouping when needed.'
          }
        ]
      }
    ]
  }
,
  {
    id: 'html-div',
    title: 'HTML Div',
    subtitle: 'Generic containers and responsive layouts',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Div Element',
      url: 'https://www.w3schools.com/html/html_div.asp'
    },
    blocks: [
      { type: 'p', html: 'The <code>&lt;div&gt;</code> element is used as a container for other HTML elements.' },

      { type: 'heading', text: 'The <div> Element' },
      { type: 'p', html: 'The <code>&lt;div&gt;</code> element is a block element by default. It takes all available width and comes with line breaks before and after.' },
      { type: 'example', label: 'Full available width', code: `Lorem Ipsum
<div style="background:#fff4a3;color:#000;">I am a div</div>
dolor sit amet.` },
      { type: 'p', html: 'The element has no required attributes, but <code>style</code>, <code>class</code>, and <code>id</code> are common ways to identify or style it.' },

      { type: 'heading', text: '<div> as a container' },
      { type: 'p', html: 'A <code>&lt;div&gt;</code> is often used to group related sections of a web page together.' },
      { type: 'example', label: 'Grouped section', code: `<div style="background:#fff4a3;padding:10px;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>` },
      { type: 'note', label: 'Semantic HTML', html: 'A <code>div</code> has no inherent meaning. Prefer a specific semantic element when one accurately describes the content; use <code>&lt;div&gt;</code> for generic grouping.' },

      { type: 'heading', text: 'Center align a <div> element' },
      { type: 'p', html: 'To center a <code>&lt;div&gt;</code> that is not 100% wide, give it a fixed width and set its CSS <code>margin</code> property to <code>auto</code>.' },
      { type: 'example', code: `<style>
.card {
  width: 300px;
  margin: auto;
  padding: 10px;
  background: #fff4a3;
}
</style>

<div class="card">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>` },

      { type: 'heading', text: 'Multiple <div> elements' },
      { type: 'p', html: 'You can use many <code>&lt;div&gt;</code> containers on the same page.' },
      { type: 'example', code: `<div style="background:#fff4a3;padding:10px;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>

<div style="background:#ffc0c7;padding:10px;">
  <h2>Oslo</h2>
  <p>Oslo is the capital city of Norway.</p>
</div>

<div style="background:#d9eee1;padding:10px;">
  <h2>Rome</h2>
  <p>Rome is the capital city of Italy.</p>
</div>` },

      { type: 'heading', text: 'Aligning <div> elements side by side' },
      { type: 'p', html: 'Web pages often need two or more <code>&lt;div&gt;</code> elements beside one another. There are several CSS methods for creating this layout.' },
      { type: 'example', label: 'Target layout', code: `<style>
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.city-grid div { padding: 10px; }
</style>

<div class="city-grid">
  <div style="background:#fff4a3;">London</div>
  <div style="background:#ffc0c7;">Oslo</div>
  <div style="background:#d9eee1;">Rome</div>
</div>` },

      { type: 'heading', text: 'Float' },
      { type: 'p', html: 'The CSS <code>float</code> property was not originally designed to align divs side by side, but it has long been used for horizontal positioning.' },
      { type: 'example', code: `<style>
.mycontainer { width: 100%; overflow: auto; }
.mycontainer div {
  box-sizing: border-box;
  width: 33.33%;
  padding: 10px;
  float: left;
}
</style>

<div class="mycontainer">
  <div style="background:#fff4a3;">London</div>
  <div style="background:#ffc0c7;">Oslo</div>
  <div style="background:#d9eee1;">Rome</div>
</div>` },


      { type: 'heading', text: 'Inline-block' },
      { type: 'p', html: 'Change the <code>display</code> property from <code>block</code> to <code>inline-block</code>. The divs no longer add line breaks before and after themselves, so they can appear side by side.' },
      { type: 'example', code: `<style>
div {
  width: 30%;
  display: inline-block;
  padding: 10px;
}
</style>

<div style="background:#fff4a3;">London</div>
<div style="background:#ffc0c7;">Oslo</div>
<div style="background:#d9eee1;">Rome</div>` },

      { type: 'heading', text: 'Flex' },
      { type: 'p', html: 'The CSS Flexbox Layout Module makes it easier to design flexible responsive layouts without floats or positioning. Surround the divs with a parent div and give the parent <code>display: flex</code>.' },
      { type: 'example', code: `<style>
.flex-container {
  display: flex;
}
.flex-container > div {
  width: 33%;
  padding: 10px;
  box-sizing: border-box;
}
</style>

<div class="flex-container">
  <div style="background:#fff4a3;">London</div>
  <div style="background:#ffc0c7;">Oslo</div>
  <div style="background:#d9eee1;">Rome</div>
</div>` },
      { type: 'p', html: 'Flexbox is a modern way to distribute space and align items in a one-dimensional row or column.' },

      { type: 'heading', text: 'Grid' },
      { type: 'p', html: 'The CSS Grid Layout Module provides a grid-based system with rows and columns. It can define more than one row and position each row individually.' },
      { type: 'p', html: 'For a grid, surround the divs with a parent div, give the parent <code>display: grid</code>, and specify the width of each column.' },
      { type: 'example', code: `<style>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 10px;
}
.grid-container > div {
  padding: 10px;
}
</style>

<div class="grid-container">
  <div style="background:#fff4a3;">London</div>
  <div style="background:#ffc0c7;">Oslo</div>
  <div style="background:#d9eee1;">Rome</div>
</div>` },
      { type: 'note', label: 'Modern CSS', html: 'Flexbox and Grid are generally more flexible than <code>float</code> for contemporary layouts. Use the approach that best fits the layout you need.' },

      { type: 'heading', text: 'HTML Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [['<code>&lt;div&gt;</code>', 'Defines a section in a document (block-level)']]
      },
      { type: 'p', html: 'For a complete list of available HTML tags, visit the <a href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a responsive city-card layout. Create three <code>&lt;div&gt;</code> cards for London, Oslo, and Rome. First use <code>display: grid</code> with three equal columns and a gap. Then change the parent to <code>display: flex</code> and try <code>flex-wrap: wrap</code>. Notice which layout best fits your content.',
        starter: `<style>
.city-grid {
  display: ;
  grid-template-columns: ;
  gap: 12px;
}
.city-grid > div {
  padding: 16px;
  background: #fff4a3;
}
</style>

<div class="city-grid">
  <div>London</div>
  <div>Oslo</div>
  <div>Rome</div>
</div>`,
        solution: `<style>
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.city-grid > div {
  padding: 16px;
  background: #fff4a3;
}
</style>

<div class="city-grid">
  <div>London</div>
  <div>Oslo</div>
  <div>Rome</div>
</div>

<style>
.city-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.city-grid > div {
  flex: 1 1 200px;
}
</style>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What is the default display behavior of a <code>&lt;div&gt;</code>?',
            options: ['Block-level: it starts on a new line and uses the available width', 'Inline: it continues in the current line', 'A centered grid container', 'An invisible semantic element'],
            answer: 0,
            explanation: 'A div is block-level by default, so it begins on a new line and fills the width available to it.'
          },
          {
            question: 'Which rule centers a fixed-width div horizontally?',
            options: ['<code>position:absolute</code>', '<code>margin: auto</code>', '<code>float: center</code>', '<code>text-align: center</code> on the parent'],
            answer: 1,
            explanation: 'Give the div a width that is smaller than its parent, then use equal automatic side margins: <code>margin: auto</code>.'
          },
          {
            question: 'Which property changes a div from block to <code>inline-block</code>?',
            options: ['<code>display</code>', '<code>width</code>', '<code>align</code>', '<code>float</code>'],
            answer: 0,
            explanation: 'The <code>display</code> property controls the box type, including <code>block</code>, <code>inline-block</code>, <code>flex</code>, and <code>grid</code>.'
          },
          {
            question: 'Which CSS system is designed around rows and columns and can position items in both directions?',
            options: ['Grid', 'Float', 'Inline-block', 'The margin property'],
            answer: 0,
            explanation: 'CSS Grid provides a two-dimensional layout system with explicit rows and columns.'
          },
          {
            question: 'When is a <code>&lt;div&gt;</code> an appropriate choice?',
            options: ['For every heading and paragraph', 'As a generic container when no more specific semantic element fits', 'To make text inline', 'Instead of adding CSS'],
            answer: 1,
            explanation: 'A div has no inherent meaning. Prefer semantic elements for headings, articles, sections, and navigation, and use div for generic grouping and layout.'
          }
        ]
      }
    ]
  }
,
  {
    id: 'html-classes',
    title: 'HTML Classes',
    subtitle: 'Select, style & interact with groups of elements',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Classes',
      url: 'https://www.w3schools.com/html/html_classes.asp'
    },
    blocks: [
      { type: 'p', html: 'The HTML <code>class</code> attribute specifies one or more class names for an element. Classes let CSS and JavaScript select a group of elements and apply shared styles or behavior.' },

      { type: 'heading', text: 'Using CSS Classes' },
      { type: 'p', html: 'A class can be used to style several HTML elements at once. In CSS, write a period followed by the class name, and place the declarations inside curly braces.' },
      {
        type: 'example',
        label: 'Style a city class',
        code: `<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>
  <div class="city">
    <h2>London</h2>
    <p>London is the capital of England.</p>
  </div>
  <div class="city">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p>
  </div>
  <div class="city">
    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan.</p>
  </div>
</body>
</html>`
      },
      {
        type: 'example',
        label: 'Style spans with a note class',
        code: `<style>
.note {
  font-size: 120%;
  color: red;
}
</style>
<h1>My <span class="note">Important</span> Heading</h1>
<p>This is some <span class="note">important</span> text.</p>`
      },
      { type: 'note', label: 'Remember', html: 'The <code>class</code> attribute can be used on <strong>any</strong> HTML element, and class names are case sensitive.' },

      { type: 'heading', text: 'The Syntax for a Class' },
      { type: 'p', html: 'To create a class selector, write a period (<code>.</code>) followed by a class name. In the HTML, assign that name with the <code>class</code> attribute.' },
      { type: 'example', label: 'Class selector syntax', code: `<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>` },

      { type: 'heading', text: 'Multiple Classes' },
      { type: 'p', html: 'An HTML element can belong to more than one class. Separate class names with a space, such as <code>class="city main"</code>. The element receives styles from all of them.' },
      { type: 'example', code: `<style>
.city { background-color: tomato; color: white; padding: 10px; }
.main { font-size: 200%; }
</style>
<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>` },

      { type: 'heading', text: 'Different Elements Can Share the Same Class' },
      { type: 'p', html: 'Different HTML elements can use the same class name and therefore share its styles.' },
      { type: 'example', code: `<style>
.city {
  background-color: tomato;
  color: white;
  padding: 8px;
}
</style>
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France.</p>` },

      { type: 'heading', text: 'Using the class Attribute in JavaScript' },
      { type: 'p', html: 'JavaScript can find a group of elements by class name with <code>getElementsByClassName()</code>, then apply the same action to each result.' },
      { type: 'example', label: 'Click to hide or show the city cards', code: `<button onclick="toggleCities()">Toggle city cards</button>

<div class="city">London</div>
<div class="city">Paris</div>
<div class="city">Tokyo</div>

<script>
function toggleCities() {
  const cities = document.getElementsByClassName("city");
  const shouldHide = cities[0].style.display !== "none";

  for (let i = 0; i < cities.length; i++) {
    cities[i].style.display = shouldHide ? "none" : "block";
  }
}
</script>` },
      { type: 'note', label: 'Preview tip', html: 'This example runs inside the academy’s isolated live preview. Allowing scripts there does not give example code access to the lesson page or its files.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'The HTML <code>class</code> attribute specifies one or more class names for an element',
          'Classes are used by CSS and JavaScript to select and access specific elements',
          'The <code>class</code> attribute can be used on any HTML element',
          'Class names are case sensitive',
          'Different HTML elements can point to the same class name',
          'JavaScript can access elements with a specific class name with the <code>getElementsByClassName()</code> method'
        ]
      },
      {
        type: 'note',
        label: 'JavaScript note',
        html: 'Do not worry if the JavaScript example feels unfamiliar yet. Classes are also a foundation for later JavaScript topics.'
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a reusable class system for a small team directory. Create a <code>.card</code> class shared by several elements, add a <code>.featured</code> class to one member, and style the same class on different element types. Then use a <code>getElementsByClassName()</code> button to show or hide every card.',
        starter: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  border: 2px solid #777;
  padding: 12px;
  margin: 10px;
}

</style>
</head>
<body>
  <h2 class="card">Ada</h2>
  <p class="card">Designer</p>
  <p class="card">Grace</p>

  <button onclick="toggleCards()">Toggle cards</button>
  <script>
function toggleCards() {
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].hidden = !cards[i].hidden;
  }
}
</script>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  border: 2px solid #777;
  padding: 12px;
  margin: 10px;
}

.featured {
  background-color: gold;
  font-weight: bold;
}
</style>
</head>
<body>
  <h2 class="card featured">Ada</h2>
  <p class="card">Designer</p>
  <p class="card">Grace</p>

  <button onclick="toggleCards()">Toggle cards</button>
  <script>
function toggleCards() {
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].hidden = !cards[i].hidden;
  }
}
</script>
</body>
</html>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does the HTML <code>class</code> attribute do?',
            options: ['Specifies one or more class names for an element', 'Creates a new HTML document section', 'Sets an image source', 'Defines the page language'],
            answer: 0,
            explanation: 'The <code>class</code> attribute assigns one or more class names that CSS and JavaScript can use to select the element.'
          },
          {
            question: 'How do you write a CSS selector for the <code>city</code> class?',
            options: ['<code>#city</code>', '<code>.city</code>', '<code>city()</code>', '<code>class=city</code>'],
            answer: 1,
            explanation: 'A class selector starts with a period followed by the class name, such as <code>.city</code>.'
          },
          {
            question: 'What happens when an element has <code>class="city main"</code>?',
            options: ['It receives only the first class style', 'It receives styles from both the <code>city</code> and <code>main</code> classes', 'It becomes a link', 'It duplicates the element'],
            answer: 1,
            explanation: 'Class names are separated by spaces. The element can use the CSS rules from every named class.'
          },
          {
            question: 'Which JavaScript method finds elements with a specific class name?',
            options: ['<code>getElementsByClassName()</code>', '<code>getElementById()</code>', '<code>queryTitle()</code>', '<code>findFont()</code>'],
            answer: 0,
            explanation: '<code>getElementsByClassName()</code> returns a collection of elements that have the requested class.'
          },
          {
            question: 'Are HTML class names case sensitive?',
            options: ['Yes', 'No', 'Only in CSS', 'Only inside JavaScript'],
            answer: 0,
            explanation: 'Class names are case sensitive, so <code>City</code> and <code>city</code> are different class names.'
          }
        ]
      },
    ]
  },
  {
    id: 'html-id',
    title: 'HTML Id',
    subtitle: 'Unique identifiers for elements',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML id',
      url: 'https://www.w3schools.com/html/html_id.asp'
    },
    blocks: [
      { type: 'p', html: 'The HTML <code>id</code> attribute specifies a unique identifier for an element. Because the value is unique within the entire HTML document, an id gives one exact element a name that links and JavaScript can target.' },

      { type: 'heading', text: 'Using the id Attribute' },
      { type: 'p', html: 'Add an id to an element with <code>id="name"</code>. The value should describe the element clearly and must be unique within the page.' },
      {
        type: 'example',
        label: 'Give a heading an id',
        code: `<h1 id="myHeader">My Header</h1>

<p>This heading can now be located by its unique id.</p>`
      },
      { type: 'note', label: 'Remember', html: 'An id is unique within the whole HTML document. Do not reuse the same id on another element.' },

      { type: 'heading', text: 'Using IDs in Links' },
      { type: 'p', html: 'To link directly to an element, put a <code>#</code> before its id in the <code>href</code> attribute. This lets visitors jump to that exact part of the page.' },
      {
        type: 'example',
        label: 'Link to an element with an id',
        code: `<a href="#myHeader">Jump to My Header</a>

<h1 id="myHeader">My Header</h1>

<p>Selecting the link jumps to the heading with id="myHeader".</p>`
      },

      { type: 'heading', text: 'Using IDs in JavaScript' },
      { type: 'p', html: 'JavaScript can use <code>document.getElementById("name")</code> to find the one element with that id, then change its text, attributes, styles, or behavior.' },
      {
        type: 'example',
        label: 'Change an element with JavaScript',
        code: `<h1 id="myHeader">My Header</h1>

<button type="button" onclick="changeHeader()">Change the heading</button>

<script>
function changeHeader() {
  document.getElementById("myHeader").innerHTML = "My Header has changed";
}
</script>`
      },
      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'The <code>id</code> attribute specifies a unique identifier for an HTML element.',
          'The id value must be unique within the entire HTML document.',
          'The <code>id</code> attribute can be used on any HTML element.',
          'A link such as <code>href="#sectionName"</code> can jump to an element with that id.',
          'JavaScript can locate an element with <code>document.getElementById()</code>.'
        ]
      },
      { type: 'note', label: 'Naming IDs', html: 'Use descriptive names such as <code>site-header</code> or <code>student-form</code>. IDs should not contain spaces and should be written consistently in HTML and JavaScript.' },

      { type: 'heading', text: 'HTML Attribute Reference' },
      {
        type: 'table',
        head: ['Attribute', 'Description'],
        rows: [
          ['<code>class</code>', 'Specifies one or more class names for an element.'],
          ['<code>id</code>', 'Specifies a unique identifier for an element.'],
          ['<code>style</code>', 'Specifies an inline CSS style for an element.'],
          ['<code>title</code>', 'Specifies extra information about an element, usually shown as a tooltip.']
        ]
      },
      { type: 'p', html: 'The <code>id</code> attribute is a <strong>global attribute</strong>, so it can be placed on almost any HTML element—not only headings.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Build a profile card with the id <code>profile-card</code>. Add a link that jumps to it, a button that changes its heading, and unique ids for its name and status. Give every element an id that describes its purpose.</p>',
        starter: `<!DOCTYPE html>
<html>
<body>
  <a href="#profile-card">View profile</a>

  <section>
    <h2>Student Profile</h2>
    <p>Add the ids and JavaScript here.</p>
  </section>

  <button type="button">Update profile</button>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
  <a href="#profile-card">View profile</a>

  <section id="profile-card">
    <h2 id="profile-name">Aarav Sharma</h2>
    <p id="profile-status">Status: Online</p>
  </section>

  <button type="button" onclick="updateProfile()">Update profile</button>

  <script>
function updateProfile() {
  document.getElementById("profile-name").textContent = "Aarav Sharma — Updated";
  document.getElementById("profile-status").textContent = "Status: Ready";
}
</script>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does the HTML <code>id</code> attribute specify?',
            options: ['A unique identifier for an element', 'The visible text of an element', 'A repeated style class', 'The document language'],
            answer: 0,
            explanation: 'The id attribute provides a unique name that identifies one exact element within the document.'
          },
          {
            question: 'Where must an id value be unique?',
            options: ['Inside a single paragraph', 'Inside one CSS rule', 'Within the entire HTML document', 'Only on headings'],
            answer: 2,
            explanation: 'No two elements in the same HTML document should use the same id value.'
          },
          {
            question: 'Which link jumps to an element whose id is <code>contact</code>?',
            options: ['<code>href="contact"</code>', '<code>href="#contact"</code>', '<code>id="href=#contact"</code>', '<code>href="id contact"</code>'],
            answer: 1,
            explanation: 'A fragment link uses a hash symbol followed by the target element id.'
          },
          {
            question: 'Which JavaScript method finds one element by its id?',
            options: ['<code>document.getElementById()</code>', '<code>document.getElementsByTagName()</code>', '<code>document.createClass()</code>', '<code>element.href()</code>'],
            answer: 0,
            explanation: 'getElementById() locates the element with the supplied unique id.'
          },
          {
            question: 'Can the <code>id</code> attribute be used on any HTML element?',
            options: ['Yes, it is a global attribute', 'Only on <code>div</code> elements', 'Only on links and forms', 'Only on <code>head</code> elements'],
            answer: 0,
            explanation: 'The id global attribute can be placed on almost any HTML element.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-buttons',
    title: 'HTML Buttons',
    subtitle: 'Clickable controls for actions and forms',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Buttons',
      url: 'https://www.w3schools.com/html/html_buttons.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML buttons are clickable controls that can run JavaScript, submit a form, or reset a form. Use the <code>&lt;button&gt;</code> element for an action a user can perform.' },

      { type: 'heading', text: 'The Button Element' },
      { type: 'p', html: 'The <code>&lt;button&gt;</code> element defines a clickable button. The text between its opening and closing tags is the label shown to the user.' },
      {
        type: 'example',
        label: 'A basic button',
        code: `<button type="button">Click Me!</button>`
      },
      { type: 'note', label: 'Tip', html: 'A button with <code>type="button"</code> is a normal clickable button and does nothing by default. Add an event handler when you want it to perform an action.' },

      { type: 'heading', text: 'Button Styling' },
      { type: 'p', html: 'Buttons are often styled with CSS. A class lets you style several buttons consistently without repeating the same declarations.' },
      {
        type: 'example',
        label: 'Style a button with CSS',
        code: `<style>
button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

<button type="button">Green Button</button>`
      },

      { type: 'heading', text: 'Disabled Buttons' },
      { type: 'p', html: 'Use the <code>disabled</code> attribute to make a button unclickable. Disabled buttons cannot be activated and usually appear faded.' },
      {
        type: 'example',
        label: 'Disable a button',
        code: `<button type="button">Active Button</button>
<button type="button" disabled>Disabled Button</button>`
      },
      { type: 'note', label: 'Remember', html: 'The <code>disabled</code> attribute is a boolean attribute. Writing it by itself is enough; you do not write <code>disabled="true"</code>.' },


      { type: 'heading', text: 'Buttons with JavaScript' },
      { type: 'p', html: 'Use the <code>onclick</code> attribute to run JavaScript when a user clicks a button. This is a simple way to connect an HTML control to an action.' },
      {
        type: 'example',
        label: 'Run JavaScript on click',
        code: `<button type="button" onclick="alert('Hello!')">Click Me</button>`
      },
      { type: 'note', label: 'Note', html: 'The <code>onclick</code> attribute runs JavaScript. You will learn more about JavaScript in the HTML JavaScript chapter.' },

      { type: 'heading', text: 'Button Types' },
      { type: 'p', html: 'The <code>type</code> attribute defines what a button does when it is clicked. There are three button types:' },
      {
        type: 'list',
        items: [
          '<code>type="button"</code> — a normal clickable button that does nothing by default.',
          '<code>type="submit"</code> — submits the form.',
          '<code>type="reset"</code> — resets the form fields to their default values.'
        ]
      },
      {
        type: 'example',
        label: 'The three button types',
        code: `<button type="button">Normal Button</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>`
      },
      { type: 'note', label: 'Important', html: 'Always specify the <code>type</code> attribute. Inside a form, the default type is <code>submit</code>, so a button without a type may submit the form unexpectedly.' },

      { type: 'heading', text: 'Buttons in Forms' },
      { type: 'p', html: 'Buttons are often used inside forms. A submit button sends the form data to the server, while a reset button clears the form.' },
      {
        type: 'example',
        label: 'Submit and reset a form',
        code: `<form action="/action_page.php">
  First name: <input type="text" name="fname">
  <button type="submit">Submit</button>
  <button type="reset">Reset Form</button>
</form>`
      },

      { type: 'heading', text: 'HTML Button Reference' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;button&gt;</code>', 'Defines a clickable button.'],
          ['<code>type</code>', 'Defines the button type: button, submit, or reset.'],
          ['<code>disabled</code>', 'Disables the button so it cannot be clicked.'],
          ['<code>onclick</code>', 'Runs JavaScript when the button is clicked.']
        ]
      },
      { type: 'p', html: 'For a complete list of HTML elements and attributes, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Build a small button panel with four buttons: a normal action button that uses JavaScript, a disabled button, a submit button, and a reset button. Add CSS so the buttons are easy to see.</p>',
        starter: `<form>
  <p>Name: <input type="text" name="name"></p>
  <button type="button" onclick="greet()">Greet</button>
  <button type="button" disabled>Unavailable</button>
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>

<script>
function greet() {
  alert("Hello!");
}
</script>`,
        solution: `<style>
button {
  padding: 10px 16px;
  margin: 4px;
  border: 0;
  border-radius: 6px;
  color: white;
  background: #1769aa;
  cursor: pointer;
}
button:disabled {
  background: #aaa;
  cursor: not-allowed;
}
</style>

<form>
  <p>Name: <input type="text" name="name"></p>
  <button type="button" onclick="greet()">Greet</button>
  <button type="button" disabled>Unavailable</button>
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>

<script>
function greet() {
  alert("Hello!");
}
</script>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which HTML element defines a clickable button?',
            options: ['<code>&lt;button&gt;</code>', '<code>&lt;input&gt;</code>', '<code>&lt;link&gt;</code>', '<code>&lt;title&gt;</code>'],
            answer: 0,
            explanation: 'The button element defines a clickable button.'
          },
          {
            question: 'What does the <code>disabled</code> attribute do?',
            options: ['Deletes the button', 'Makes the button unclickable', 'Submits the form', 'Styles the button'],
            answer: 1,
            explanation: 'A disabled button cannot be clicked and usually appears faded.'
          },
          {
            question: 'Which attribute runs JavaScript when a button is clicked?',
            options: ['<code>onclick</code>', '<code>class</code>', '<code>href</code>', '<code>alt</code>'],
            answer: 0,
            explanation: 'The onclick attribute runs JavaScript when the button is clicked.'
          },
          {
            question: 'What does <code>type="reset"</code> do?',
            options: ['Submits the form', 'Resets form fields', 'Disables the button', 'Styles the button'],
            answer: 1,
            explanation: 'A reset button clears form fields and returns them to their default values.'
          },
          {
            question: 'Why should you always specify a button type?',
            options: ['It changes the button color', 'Inside a form, the default type is submit', 'It makes the button larger', 'It creates a link'],
            answer: 1,
            explanation: 'Inside a form, an omitted type defaults to submit, which can unexpectedly submit the form.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-iframes',
    title: 'HTML Iframes',
    subtitle: 'Embed another document inside your page',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Iframes',
      url: 'https://www.w3schools.com/html/html_iframe.asp'
    },
    blocks: [
      { type: 'p', html: 'The HTML <code>&lt;iframe&gt;</code> element specifies an inline frame. An iframe creates a rectangular region in the current page that can display another document, website, or media resource.' },

      { type: 'heading', text: 'The Iframe Element' },
      { type: 'p', html: 'Use the <code>src</code> attribute to define the URL of the page to embed. Always include a meaningful <code>title</code> so screen-reader users understand the purpose of the embedded content.' },
      {
        type: 'example',
        label: 'Embed a page with an iframe',
        code: `<iframe src="https://www.w3schools.com" width="400" height="250" title="W3Schools website"></iframe>`
      },
      { type: 'note', label: 'Accessibility', html: 'An iframe should have a useful <code>title</code> attribute. The title describes the embedded content for people who cannot see the frame.' },

      { type: 'heading', text: 'Set the Size of an Iframe' },
      { type: 'p', html: 'The <code>height</code> and <code>width</code> attributes specify the size of an iframe. Their values are pixels by default.' },
      {
        type: 'example',
        label: 'Set iframe size with attributes',
        code: `<iframe src="https://www.w3schools.com" height="200" width="300" title="Embedded page"></iframe>`
      },
      { type: 'p', html: 'You can also use the <code>style</code> attribute with the CSS <code>height</code> and <code>width</code> properties.' },
      {
        type: 'example',
        label: 'Set iframe size with CSS',
        code: `<iframe src="https://www.w3schools.com" style="height:200px; width:300px;" title="Embedded page"></iframe>`
      },

      { type: 'heading', text: 'Remove the Iframe Border' },
      { type: 'p', html: 'By default, an iframe has a border around it. To remove the border, add the <code>style</code> attribute and use the CSS <code>border</code> property with the value <code>none</code>.' },
      {
        type: 'example',
        label: 'Remove an iframe border',
        code: `<iframe src="https://www.w3schools.com" style="border:none; height:200px; width:300px;" title="Borderless embedded page"></iframe>`
      },
      { type: 'p', html: 'CSS can also change the size, style, and color of an iframe border.' },
      {
        type: 'example',
        label: 'Style an iframe border',
        code: `<iframe src="https://www.w3schools.com" style="border:2px solid red; height:200px; width:300px;" title="Red-bordered embedded page"></iframe>`
      },

      { type: 'heading', text: 'Use an Iframe as a Link Target' },
      { type: 'p', html: 'An iframe can be used as the target frame for a link. Give the iframe a <code>name</code>, then set the link\'s <code>target</code> attribute to that same name.' },
      {
        type: 'example',
        label: 'Open a link inside an iframe',
        code: `<iframe src="https://www.w3schools.com" name="content-frame" height="220" width="400" title="Embedded content"></iframe>

<p><a href="https://developer.mozilla.org" target="content-frame">Open MDN inside the frame</a></p>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'The <code>&lt;iframe&gt;</code> tag specifies an inline frame.',
          'The <code>src</code> attribute defines the URL of the page to embed.',
          'Always include a useful <code>title</code> attribute for screen readers.',
          'The <code>height</code> and <code>width</code> attributes specify the iframe size.',
          'Use <code>style="border:none;"</code> to remove the default iframe border.',
          'An iframe can be a link target when its <code>name</code> matches the link\'s <code>target</code>.'
        ]
      },
      { type: 'note', label: 'Good practice', html: 'Only embed content you trust. An iframe loads a separate document, and the embedded page should have a useful accessible title.' },

      { type: 'heading', text: 'HTML Iframe Reference' },
      {
        type: 'table',
        head: ['Attribute', 'Description'],
        rows: [
          ['<code>src</code>', 'Defines the URL of the page to embed.'],
          ['<code>width</code>', 'Sets the iframe width, in pixels by default.'],
          ['<code>height</code>', 'Sets the iframe height, in pixels by default.'],
          ['<code>title</code>', 'Provides accessible text describing the embedded content.'],
          ['<code>name</code>', 'Names the iframe so a link can target it.'],
          ['<code>style</code>', 'Applies inline CSS, such as sizing or border styles.']
        ]
      },
      { type: 'p', html: 'The <code>&lt;iframe&gt;</code> element defines an inline frame. For more elements, see the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a resource dashboard with two embedded pages. Give each iframe a descriptive title, set its size, remove one border, and add a link that loads a new page into a named iframe.</p>',
        starter: `<h1>My Resource Dashboard</h1>

<!-- Add your first iframe here -->

<a href="https://www.w3schools.com" target="resource-frame">Open W3Schools in the frame</a>

<!-- Add a second iframe and link here -->`,
        solution: `<h1>My Resource Dashboard</h1>

<iframe
  src="https://www.w3schools.com"
  name="resource-frame"
  width="500"
  height="260"
  title="W3Schools learning resources"
  style="border:2px solid #1769aa;"
></iframe>

<p>
  <a href="https://developer.mozilla.org" target="resource-frame">
    Open MDN in the frame
  </a>
</p>

<iframe
  src="https://developer.mozilla.org"
  width="500"
  height="220"
  title="MDN Web Docs"
  style="border:none;"
></iframe>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does the HTML <code>&lt;iframe&gt;</code> element do?',
            options: ['Displays another document inside the current page', 'Creates a CSS grid', 'Stores data in the browser', 'Defines a page title'],
            answer: 0,
            explanation: 'An iframe creates an inline frame that can display another document or website.'
          },
          {
            question: 'Which attribute defines the URL of the embedded page?',
            options: ['<code>src</code>', '<code>alt</code>', '<code>class</code>', '<code>name</code>'],
            answer: 0,
            explanation: 'The src attribute gives the iframe the URL of the document to embed.'
          },
          {
            question: 'Why should an iframe have a useful <code>title</code>?',
            options: ['It changes the iframe color', 'It provides accessible information to screen-reader users', 'It sets the page language', 'It makes the iframe responsive'],
            answer: 1,
            explanation: 'The title describes the embedded content for users who cannot see the frame.'
          },
          {
            question: 'Which CSS declaration removes the default iframe border?',
            options: ['<code>border:none;</code>', '<code>display:none;</code>', '<code>width:auto;</code>', '<code>color:white;</code>'],
            answer: 0,
            explanation: 'The border CSS property with the value none removes the visible iframe border.'
          },
          {
            question: 'How does a link target a named iframe?',
            options: ['The link target matches the iframe name', 'The link src matches the iframe class', 'The link uses the iframe title as a URL', 'The link uses <code>border:none</code>'],
            answer: 0,
            explanation: 'Give the iframe a name and use that same value in the link target attribute.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-js',
    title: 'HTML JS',
    subtitle: 'Make pages interactive with JavaScript',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Scripts',
      url: 'https://www.w3schools.com/html/html_scripts.asp'
    },
    blocks: [
      { type: 'p', html: 'The HTML <code>&lt;script&gt;</code> element defines client-side JavaScript. JavaScript can make a webpage interactive by changing HTML content, styles, and attributes after the page loads.' },

      { type: 'heading', text: 'Using the Script Element' },
      { type: 'p', html: 'Use the <code>&lt;script&gt;</code> element to include JavaScript in an HTML document. The script element can be placed in both the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> sections.' },
      {
        type: 'example',
        label: 'Run JavaScript in the body',
        code: `<!DOCTYPE html>
<html>
<body>
  <h2 id="demo">This text will change.</h2>

  <script>
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
  </script>
</body>
</html>`
      },
      { type: 'note', label: 'Where to place scripts', html: 'A script can appear in <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code>. In this example it is placed in the body after the element it changes, so the element already exists when the script runs.' },

      { type: 'heading', text: 'A Taste of JavaScript' },
      { type: 'p', html: 'JavaScript most often selects an HTML element with <code>document.getElementById()</code> and then changes its content, styles, or attributes.' },

      { type: 'heading', text: 'Change HTML Content' },
      { type: 'p', html: 'The <code>innerHTML</code> property can replace the content inside an element.' },
      {
        type: 'example',
        label: 'Change HTML content',
        code: `<h2 id="demo">This text will change.</h2>

<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`
      },

      { type: 'heading', text: 'Change HTML Styles' },
      { type: 'p', html: 'JavaScript can change the style of an element through its <code>style</code> property.' },
      {
        type: 'example',
        label: 'Change styles with JavaScript',
        code: `<h2 id="demo">This heading will be styled.</h2>

<script>
  const demo = document.getElementById("demo");
  demo.style.fontSize = "25px";
  demo.style.color = "red";
  demo.style.backgroundColor = "yellow";
</script>`
      },

      { type: 'heading', text: 'Change HTML Attributes' },
      { type: 'p', html: 'JavaScript can also change attributes such as an image source.' },
      {
        type: 'example',
        label: 'Change an image source',
        code: `<img id="image" src="picture1.jpg" alt="Example image" width="180">

<script>
  document.getElementById("image").src = "picture2.gif";
</script>`
      },
      { type: 'note', label: 'Note', html: 'The <code>img</code> element needs a valid image path to display an image. This example focuses on the JavaScript statement that changes its <code>src</code> attribute.' },

      { type: 'heading', text: 'The noscript Element' },
      { type: 'p', html: 'The HTML <code>&lt;noscript&gt;</code> element defines alternate content for users whose browser has JavaScript disabled or does not support it.' },
      {
        type: 'example',
        label: 'Provide a noscript message',
        code: `<h2 id="demo">This content can be changed by JavaScript.</h2>

<script>
  document.getElementById("demo").innerHTML = "JavaScript is working!";
</script>

<noscript>Sorry, your browser does not support JavaScript!</noscript>`
      },
      { type: 'note', label: 'Accessibility and fallback', html: 'Use <code>noscript</code> when visitors need a useful fallback message. It is displayed only when client-side scripts are unavailable.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'The <code>&lt;script&gt;</code> element defines client-side JavaScript.',
          'A script can be placed in the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code>.',
          'JavaScript can change HTML content, styles, and attributes.',
          '<code>document.getElementById()</code> selects one element by its unique id.',
          '<code>innerHTML</code> changes content inside an element.',
          '<code>style</code> changes CSS styles for an element.',
          '<code>noscript</code> provides alternate content when JavaScript is unavailable.'
        ]
      },
      { type: 'note', label: 'Learn more', html: 'You can learn much more about JavaScript in the <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener">JavaScript Tutorial</a>.' },

      { type: 'heading', text: 'HTML Script Tags' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;script&gt;</code>', 'Defines a client-side script.'],
          ['<code>&lt;noscript&gt;</code>', 'Defines alternate content for users who do not support client-side scripts.']
        ]
      },
      { type: 'p', html: 'For a complete list of available HTML tags, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Build a live theme card. Use JavaScript to select the card by its id, change its text, change its background color, and change a button label. Add a <code>noscript</code> fallback message.</p>',
        starter: `<div id="theme-card">
  <h2 id="theme-title">Default theme</h2>
  <p id="theme-status">Light mode</p>
  <button type="button" onclick="changeTheme()">Change theme</button>
</div>

<script>
function changeTheme() {
  // Add JavaScript here
}
</script>`,
        solution: `<div id="theme-card" style="padding: 18px; border: 2px solid #444; width: 280px;">
  <h2 id="theme-title">Default theme</h2>
  <p id="theme-status">Light mode</p>
  <button type="button" onclick="changeTheme()">Change theme</button>
</div>

<noscript>Please enable JavaScript to change the theme.</noscript>

<script>
function changeTheme() {
  const card = document.getElementById("theme-card");
  const title = document.getElementById("theme-title");
  const status = document.getElementById("theme-status");

  title.textContent = "Dark theme";
  status.textContent = "Dark mode enabled";
  card.style.backgroundColor = "#202124";
  card.style.color = "white";
}
</script>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does the HTML <code>&lt;script&gt;</code> element define?',
            options: ['A client-side JavaScript script', 'An image', 'A page title', 'A CSS stylesheet'],
            answer: 0,
            explanation: 'The script element defines client-side JavaScript that runs in the browser.'
          },
          {
            question: 'Which JavaScript method selects an element by its id?',
            options: ['<code>document.getElementById()</code>', '<code>document.getElementsByClassName()</code>', '<code>document.write()</code>', '<code>window.location</code>'],
            answer: 0,
            explanation: 'document.getElementById("demo") selects the element with the matching id.'
          },
          {
            question: 'Which property changes the content inside an element?',
            options: ['<code>innerHTML</code>', '<code>src</code>', '<code>width</code>', '<code>name</code>'],
            answer: 0,
            explanation: 'The innerHTML property replaces the HTML content inside an element.'
          },
          {
            question: 'How does JavaScript change an element’s styles?',
            options: ['Through its <code>style</code> property', 'Through its <code>alt</code> attribute', 'With a <code>title</code> tag', 'With a <code>caption</code> element'],
            answer: 0,
            explanation: 'Properties such as fontSize, color, and backgroundColor can be changed through element.style.'
          },
          {
            question: 'When is <code>&lt;noscript&gt;</code> content displayed?',
            options: ['When JavaScript is unavailable or disabled', 'Only inside the head', 'Only when an image loads', 'When a link is hovered'],
            answer: 0,
            explanation: 'noscript provides alternate content for browsers that do not support or have disabled client-side scripts.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-file-paths',
    title: 'HTML File Paths',
    subtitle: 'Locate files with absolute and relative paths',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML File Paths',
      url: 'https://www.w3schools.com/html/html_filepaths.asp'
    },
    blocks: [
      { type: 'p', html: 'A file path describes the location of a file in a website’s folder structure. File paths are used when linking to external files such as web pages, images, stylesheets, and JavaScript files.' },

      { type: 'heading', text: 'Absolute File Paths' },
      { type: 'p', html: 'An absolute file path is the full URL to a file. It includes the protocol, domain, and complete location on the web server.' },
      {
        type: 'example',
        label: 'Use an absolute image path',
        code: `<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">`
      },
      { type: 'note', label: 'When to use one', html: 'An absolute path can be useful when the resource is hosted on a different domain or when the exact public URL is known. Keep in mind that the link depends on that URL.' },

      { type: 'heading', text: 'Relative File Paths' },
      { type: 'p', html: 'A relative file path points to a file relative to the current page. The path changes meaning depending on where the current HTML file is located in the website folder structure.' },

      { type: 'heading', text: 'Images Folder at the Root' },
      { type: 'p', html: 'This path starts with a slash, so it points to an <code>images</code> folder at the root of the current website.' },
      {
        type: 'example',
        label: 'Root-relative image path',
        code: `<img src="/images/picture.jpg" alt="Mountain">`
      },

      { type: 'heading', text: 'Images Folder in the Current Folder' },
      { type: 'p', html: 'This path points to a <code>picture.jpg</code> file inside an <code>images</code> folder beside the current page.' },
      {
        type: 'example',
        label: 'Current-folder relative path',
        code: `<img src="images/picture.jpg" alt="Mountain">`
      },

      { type: 'heading', text: 'Move One Level Up' },
      { type: 'p', html: 'The <code>../</code> prefix means “go up one folder.” The next example points to an <code>images</code> folder one level above the current folder.' },
      {
        type: 'example',
        label: 'Parent-folder relative path',
        code: `<img src="../images/picture.jpg" alt="Mountain">`
      },

      { type: 'heading', text: 'Best Practice' },
      { type: 'p', html: 'It is best practice to use relative file paths when possible. Relative paths are not bound to the current base URL, so they work on localhost, the current public domain, and future domains.' },
      {
        type: 'note',
        label: 'Recommended',
        html: 'Prefer paths such as <code>images/picture.jpg</code> when the file belongs to your site. They make a project easier to move between local and hosted environments.'
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a small project page that loads an image from the current <code>images</code> folder, a stylesheet from <code>css</code>, and a script from <code>js</code>. Then add one parent-folder link.</p>',
        starter: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Add a relative image, stylesheet, and script path -->

  <script src="js/app.js"></script>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/app.js" defer></script>
</head>
<body>
  <img src="images/picture.jpg" alt="A project image">
  <a href="../about.html">About this project</a>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does a file path describe?',
            options: ['The location of a file in a website’s folder structure', 'The color of a web page', 'The browser version', 'The HTML document title'],
            answer: 0,
            explanation: 'A file path describes where a file is located in a website’s folder structure.'
          },
          {
            question: 'What is an absolute file path?',
            options: ['The full URL to a file', 'A path relative to the current page', 'A CSS color value', 'A file name with no folder'],
            answer: 0,
            explanation: 'An absolute file path is the complete URL, including protocol and domain, to the resource.'
          },
          {
            question: 'Which path points to an images folder at the website root?',
            options: ['<code>/images/picture.jpg</code>', '<code>images/picture.jpg</code>', '<code>../images/picture.jpg</code>', '<code>www/images.jpg</code>'],
            answer: 0,
            explanation: 'A leading slash starts at the root of the current website.'
          },
          {
            question: 'What does <code>../</code> mean in a relative path?',
            options: ['Go up one folder', 'Go to another domain', 'Create a new file', 'Load a script'],
            answer: 0,
            explanation: 'The ../ prefix moves up one directory from the current folder.'
          },
          {
            question: 'Which path type is recommended when possible?',
            options: ['Relative file paths', 'Absolute paths only', 'Empty paths', 'A URL with no filename'],
            answer: 0,
            explanation: 'Relative paths make a site portable between localhost and different public domains.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-head',
    title: 'HTML Head',
    subtitle: 'Metadata, links, styles & scripts',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML head Elements',
      url: 'https://www.w3schools.com/html/html_head.asp'
    },
    blocks: [
      { type: 'p', html: 'The <code>&lt;head&gt;</code> element is a container for metadata—information about the document that is not normally shown in the page body. It is placed between the <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> tags.' },

      { type: 'heading', text: 'The head Element' },
      { type: 'p', html: 'The <code>&lt;head&gt;</code> element contains information about the document, such as its title, character set, description, author, viewport settings, stylesheets, and scripts.' },
      {
        type: 'example',
        label: 'A document with a head',
        code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This content belongs in the body.</p>
  </body>
</html>`
      },
      { type: 'note', label: 'Remember', html: 'The <code>&lt;head&gt;</code> is not the same as the <code>&lt;header&gt;</code> element. Head contains document metadata; header usually contains visible introductory content.' },

      { type: 'heading', text: 'The title Element' },
      { type: 'p', html: 'The <code>&lt;title&gt;</code> element defines the title of the document. Browsers display it in the browser tab, and search engines may use it as a clickable result title. A document should include a meaningful title.' },
      {
        type: 'example',
        label: 'Add a document title',
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>My HTML Academy Lesson</title>
  </head>
  <body>
    <h1>My page</h1>
  </body>
</html>`
      },

      { type: 'heading', text: 'The base Element' },
      { type: 'p', html: 'The <code>&lt;base&gt;</code> element specifies a default URL and/or target for relative links in a document. It must have an <code>href</code> or a <code>target</code> attribute, or both. There can be only one <code>&lt;base&gt;</code> element in a document.' },
      {
        type: 'example',
        label: 'Set a default URL and target',
        code: `<head>
  <base href="https://www.w3schools.com/" target="_blank">
</head>
<body>
  <a href="tags/tag_base.asp">HTML base tag</a>
</body>`
      },
      { type: 'note', label: 'Careful', html: 'Because <code>&lt;base&gt;</code> affects relative URLs for the whole document, use it only when you understand how it will change every relative link.' },

      { type: 'heading', text: 'The meta Element' },
      { type: 'p', html: 'The <code>&lt;meta&gt;</code> element defines metadata about an HTML document. It is commonly used to specify the character set, page description, keywords, author, and viewport settings.' },
      {
        type: 'example',
        label: 'Add metadata',
        code: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Learn the HTML head element">
  <meta name="keywords" content="HTML, head, metadata">
  <meta name="author" content="HTML Academy">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Metadata Example</title>
</head>`
      },
      { type: 'note', label: 'Tip', html: 'The viewport meta tag helps responsive websites fit the device screen width.' },

      { type: 'heading', text: 'The style Element' },
      { type: 'p', html: 'The <code>&lt;style&gt;</code> element contains style information for one document. It can be placed inside <code>&lt;head&gt;</code> and uses CSS rules.' },
      {
        type: 'example',
        label: 'Add internal CSS',
        code: `<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    h1 {
      color: #1769aa;
    }
  </style>
</head>`
      },

      { type: 'heading', text: 'The link Element' },
      { type: 'p', html: 'The <code>&lt;link&gt;</code> element defines the relationship between the current document and an external resource. It is most often used to connect an external stylesheet.' },
      {
        type: 'example',
        label: 'Connect an external stylesheet',
        code: `<head>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>`
      },
      { type: 'note', label: 'Good practice', html: 'Use the <code>rel="stylesheet"</code> relationship when connecting an external CSS file.' },

      { type: 'heading', text: 'The script Element' },
      { type: 'p', html: 'The <code>&lt;script&gt;</code> element defines client-side JavaScript. It can contain inline JavaScript or connect to an external script file.' },
      {
        type: 'example',
        label: 'Connect an external script',
        code: `<head>
  <script src="js/app.js" defer></script>
</head>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'The <code>&lt;head&gt;</code> element is a container for metadata and goes between <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code>.',
          '<code>&lt;title&gt;</code> defines the document title.',
          '<code>&lt;base&gt;</code> specifies a default URL or target for relative links.',
          '<code>&lt;meta&gt;</code> defines metadata such as character set, description, author, and viewport settings.',
          '<code>&lt;style&gt;</code> contains style information for one document.',
          '<code>&lt;link&gt;</code> connects the document to an external resource, commonly a stylesheet.',
          '<code>&lt;script&gt;</code> defines client-side JavaScript.'
        ]
      },

      { type: 'heading', text: 'HTML Head Elements Reference' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;head&gt;</code>', 'Defines information about the document.'],
          ['<code>&lt;title&gt;</code>', 'Defines the title of a document.'],
          ['<code>&lt;base&gt;</code>', 'Defines a default address or target for all links on a page.'],
          ['<code>&lt;link&gt;</code>', 'Defines the relationship between a document and an external resource.'],
          ['<code>&lt;meta&gt;</code>', 'Defines metadata about an HTML document.'],
          ['<code>&lt;script&gt;</code>', 'Defines a client-side script.'],
          ['<code>&lt;style&gt;</code>', 'Defines style information for a document.']
        ]
      },
      { type: 'p', html: 'For a complete list of HTML elements, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Build a complete HTML document head. Include a character set, viewport settings, description, title, internal style, external stylesheet, and external JavaScript. Put visible content in the body.</p>',
        starter: `<!DOCTYPE html>
<html>
  <head>
    <!-- Add head metadata and resource links here -->
  </head>
  <body>
    <h1>My project</h1>
  </body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A small HTML project page">
    <title>My Project</title>
    <style>
      body { font-family: Arial, sans-serif; }
      h1 { color: #1769aa; }
    </style>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/app.js" defer></script>
  </head>
  <body>
    <h1>My project</h1>
    <p>Metadata belongs in the head; visible content belongs in the body.</p>
  </body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Where is the <code>&lt;head&gt;</code> element placed?',
            options: ['Between <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code>', 'Inside every paragraph', 'After the closing body tag', 'Only inside a link'],
            answer: 0,
            explanation: 'The head element is a child of html and appears before the body element.'
          },
          {
            question: 'Which element defines the document title?',
            options: ['<code>&lt;title&gt;</code>', '<code>&lt;h1&gt;</code>', '<code>&lt;meta&gt;</code>', '<code>&lt;link&gt;</code>'],
            answer: 0,
            explanation: 'The title element defines the document title shown by the browser.'
          },
          {
            question: 'What is the <code>&lt;meta&gt;</code> element used for?',
            options: ['Defining document metadata', 'Creating visible body content', 'Closing the HTML document', 'Replacing the doctype'],
            answer: 0,
            explanation: 'Meta elements describe document information such as charset, description, author, and viewport settings.'
          },
          {
            question: 'Which element is commonly used to link an external stylesheet?',
            options: ['<code>&lt;link rel="stylesheet"&gt;</code>', '<code>&lt;style href="body"&gt;</code>', '<code>&lt;title rel="css"&gt;</code>', '<code>&lt;meta src="style"&gt;</code>'],
            answer: 0,
            explanation: 'A link element with rel="stylesheet" connects the document to an external CSS file.'
          },
          {
            question: 'How many <code>&lt;base&gt;</code> elements can a document contain?',
            options: ['Only one', 'Exactly two', 'As many as needed', 'None are allowed'],
            answer: 0,
            explanation: 'There can be only one base element in a document because it affects relative URLs globally.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-layout',
    title: 'HTML Layout',
    subtitle: 'Structure pages with semantic HTML & CSS',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Layout Elements and Techniques',
      url: 'https://www.w3schools.com/html/html_layout.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML layout describes how a webpage is organized and presented. Good layout combines semantic HTML for meaning with CSS for visual arrangement.' },

      { type: 'heading', text: 'Using div Elements' },
      { type: 'p', html: 'The <code>&lt;div&gt;</code> element is commonly used to group related content and organize a page. It is a generic container and does not add specific meaning by itself.' },
      {
        type: 'example',
        label: 'Group content with div elements',
        code: `<div class="page">
  <div class="header">
    <h1>My Website</h1>
  </div>

  <div class="content">
    <p>Main content goes here.</p>
  </div>

  <div class="footer">
    <p>Footer content goes here.</p>
  </div>
</div>`
      },
      { type: 'note', label: 'Use semantic elements when possible', html: 'Prefer elements such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code> when they describe the content more clearly than a generic div.' },

      { type: 'heading', text: 'Using Semantic Layout Elements' },
      { type: 'p', html: 'Semantic layout elements describe the purpose of page regions. They make the structure clearer for developers, browsers, search engines, and assistive technology.' },
      {
        type: 'example',
        label: 'Build a semantic page structure',
        code: `<header>
  <h1>My Website</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Main article</h2>
    <p>Article content goes here.</p>
  </article>
  <aside>
    <h3>Related information</h3>
  </aside>
</main>

<footer>
  <p>Copyright information</p>
</footer>`
      },

      { type: 'heading', text: 'CSS Layout' },
      { type: 'p', html: 'CSS can control the size, position, spacing, and arrangement of page elements. Common layout systems include floats, Flexbox, and Grid.' },
      {
        type: 'list',
        items: [
          '<strong>Float layout:</strong> places elements to one side and uses <code>clear</code> to control following content.',
          '<strong>Flexbox:</strong> distributes space and aligns items predictably in one dimension.',
          '<strong>Grid:</strong> arranges content in rows and columns with a grid-based layout system.'
        ]
      },

      { type: 'heading', text: 'CSS Float Layout' },
      { type: 'p', html: 'You can create layouts using the CSS <code>float</code> property. It is easy to learn, but floating elements are tied to the document flow and can reduce layout flexibility.' },
      {
        type: 'example',
        label: 'Arrange cards with float',
        code: `<style>
.card {
  float: left;
  width: 30%;
  margin: 1%;
  padding: 12px;
  border: 1px solid #777;
}
.clear {
  clear: both;
}
</style>

<div class="card">London</div>
<div class="card">Paris</div>
<div class="card">Tokyo</div>
<div class="clear"></div>`
      },
      { type: 'note', label: 'Float limitation', html: 'Because floating elements are tied to the document flow, they may harm flexibility. Modern layouts often use Flexbox or Grid instead.' },

      { type: 'heading', text: 'CSS Flexbox Layout' },
      { type: 'p', html: 'Flexbox makes elements behave predictably when a layout must accommodate different screen sizes and display devices. Use <code>display: flex</code> on a parent container to arrange its children along one axis.' },
      {
        type: 'example',
        label: 'Arrange cards with Flexbox',
        code: `<style>
.cards {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.card {
  flex: 1 1 180px;
  padding: 16px;
  border: 1px solid #777;
}
</style>

<div class="cards">
  <div class="card">London</div>
  <div class="card">Paris</div>
  <div class="card">Tokyo</div>
</div>`
      },

      { type: 'heading', text: 'CSS Grid Layout' },
      { type: 'p', html: 'CSS Grid is a grid-based layout system for rows and columns. It can design pages without relying on floats or positioning.' },
      {
        type: 'example',
        label: 'Create a page with Grid',
        code: `<style>
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  gap: 12px;
}
header { grid-area: header; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }
</style>

<div class="layout">
  <header>Header</header>
  <main>Main content</main>
  <aside>Related content</aside>
  <footer>Footer</footer>
</div>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Use <code>div</code> elements to group content when no more specific element is appropriate.',
          'Prefer semantic elements such as <code>header</code>, <code>nav</code>, <code>main</code>, <code>article</code>, <code>aside</code>, and <code>footer</code> for meaningful page structure.',
          'CSS controls the visual arrangement of page elements.',
          'Floats place elements to one side and use <code>clear</code> to control following content.',
          'Flexbox is useful for one-dimensional alignment and flexible component layouts.',
          'Grid lays content out in rows and columns.'
        ]
      },
      { type: 'note', label: 'Choosing a technique', html: 'For new responsive layouts, Flexbox and Grid are often easier to maintain than float-based layouts. Use semantic HTML to describe the page structure and CSS to arrange it.' },

      { type: 'heading', text: 'HTML Layout Elements Reference' },
      {
        type: 'table',
        head: ['Element', 'Purpose'],
        rows: [
          ['<code>&lt;header&gt;</code>', 'Defines introductory content, usually at the top of a page or section.'],
          ['<code>&lt;nav&gt;</code>', 'Defines a set of navigation links.'],
          ['<code>&lt;main&gt;</code>', 'Defines the main unique content of the document.'],
          ['<code>&lt;article&gt;</code>', 'Defines an independent, self-contained composition.'],
          ['<code>&lt;aside&gt;</code>', 'Defines content indirectly related to the main content.'],
          ['<code>&lt;footer&gt;</code>', 'Defines footer content for a document or section.'],
          ['<code>&lt;div&gt;</code>', 'Defines a generic container or grouping of content.']
        ]
      },
      { type: 'p', html: 'For a complete list of available HTML elements, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Build a responsive city guide. Use semantic elements for the header, navigation, main article, aside, and footer. Add CSS Grid so the main article and aside sit side by side, with the header and footer spanning the full row.</p>',
        starter: `<header>
  <h1>City Guide</h1>
  <nav><!-- Add navigation links --></nav>
</header>

<main>
  <article>
    <h2>London</h2>
    <p>Write about London here.</p>
  </article>
  <aside>
    <h3>Related information</h3>
  </aside>
</main>

<footer>
  <p>Footer content</p>
</footer>`,
        solution: `<style>
.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "header header"
    "nav nav"
    "main aside"
    "footer footer";
  gap: 12px;
}
header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }
header, nav, main, aside, footer { padding: 16px; border: 1px solid #777; }
</style>

<div class="page">
  <header><h1>City Guide</h1></header>
  <nav><a href="#">London</a> · <a href="#">Paris</a> · <a href="#">Tokyo</a></nav>
  <main>
    <h2>London</h2>
    <p>London is the capital city of England.</p>
  </main>
  <aside>
    <h3>Related information</h3>
    <p>The River Thames runs through London.</p>
  </aside>
  <footer>Copyright information</footer>
</div>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What is the role of a <code>&lt;div&gt;</code> element in a layout?',
            options: ['A generic container for grouping content', 'A required page title', 'A link target', 'A JavaScript function'],
            answer: 0,
            explanation: 'A div groups content and helps organize a page, but it does not carry specific semantic meaning by itself.'
          },
          {
            question: 'Which element should contain the main unique content of a document?',
            options: ['<code>&lt;main&gt;</code>', '<code>&lt;footer&gt;</code>', '<code>&lt;aside&gt;</code>', '<code>&lt;base&gt;</code>'],
            answer: 0,
            explanation: 'The main element defines the primary unique content of the document.'
          },
          {
            question: 'Which CSS layout system uses rows and columns?',
            options: ['Grid', 'Float', 'The title element', 'The alt attribute'],
            answer: 0,
            explanation: 'CSS Grid is a two-dimensional layout system based on rows and columns.'
          },
          {
            question: 'Which CSS property places an element to one side of its container?',
            options: ['<code>float</code>', '<code>display: block</code>', '<code>title</code>', '<code>src</code>'],
            answer: 0,
            explanation: 'The float property places an element to one side and uses clear to control following content.'
          },
          {
            question: 'What is Flexbox useful for?',
            options: ['Flexible alignment and distribution of elements in one dimension', 'Defining document metadata', 'Creating table cells', 'Writing a page title'],
            answer: 0,
            explanation: 'Flexbox helps elements behave predictably when a layout must adapt to different screen sizes and devices.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-responsive',
    title: 'HTML Responsive',
    subtitle: 'Design pages for different screen sizes',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Responsive Web Design',
      url: 'https://www.w3schools.com/html/html_responsive.asp'
    },
    blocks: [
      { type: 'p', html: 'Responsive web design makes a webpage look good on desktops, tablets, and mobile phones. It adjusts the page to fit the user’s screen and device capabilities.' },

      { type: 'heading', text: 'Setting the Viewport' },
      { type: 'p', html: 'The <code>viewport</code> meta tag controls the visible area of a webpage on a mobile device. Add it inside the <code>&lt;head&gt;</code> so the page uses the device width.' },
      {
        type: 'example',
        label: 'Set the mobile viewport',
        code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Page</title>
</head>
<body>
  <h1>Works on mobile and desktop</h1>
  <p>The page can respond to the device width.</p>
</body>
</html>`
      },
      { type: 'note', label: 'Important', html: 'The viewport tag does not make a page responsive by itself. It gives the browser the information it needs to size the page correctly.' },

      { type: 'heading', text: 'Using Media Queries' },
      { type: 'p', html: 'CSS media queries apply different styles depending on the device characteristics, such as screen width. The <code>@media</code> rule contains styles that apply only when its condition is true.' },
      {
        type: 'example',
        label: 'Change styles for small screens',
        code: `<style>
.card {
  padding: 20px;
  background: #e8f1ff;
}

@media (max-width: 600px) {
  .card {
    padding: 10px;
    background: #fff0db;
  }
}
</style>

<div class="card">
  This card changes its padding and color on small screens.
</div>`
      },

      { type: 'heading', text: 'Responsive Images' },
      { type: 'p', html: 'Images should scale with the page instead of forcing horizontal scrolling. CSS can set an image to a fluid width while keeping its proportions.' },
      {
        type: 'example',
        label: 'Make an image fluid',
        code: `<style>
img {
  max-width: 100%;
  height: auto;
}
</style>

<img src="https://www.w3schools.com/images/w3schools.jpg" alt="W3Schools" width="500">`
      },
      { type: 'note', label: 'Preview tip', html: 'Resize the browser preview panel to see how the image scales. The image can shrink below its original width while keeping its aspect ratio.' },

      { type: 'heading', text: 'Responsive Video' },
      { type: 'p', html: 'Videos can also be made responsive. CSS can make the video’s width fluid and give it an automatic height so it fits narrow screens.' },
      {
        type: 'example',
        label: 'Make video responsive',
        code: `<style>
video {
  max-width: 100%;
  height: auto;
}
</style>

<video controls width="320">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`
      },
      { type: 'note', label: 'Media source', html: 'The example uses <code>movie.mp4</code> to match the source lesson. Supply a valid video file to see your own video play in the preview.' },

      { type: 'heading', text: 'Using a CSS Framework' },
      { type: 'p', html: 'A CSS framework provides ready-made responsive classes and components. W3.CSS is one popular framework designed to make responsive pages easier to build.' },
      {
        type: 'example',
        label: 'Use W3.CSS responsive classes',
        code: `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<div class="w3-row-padding">
  <div class="w3-third">
    <h2>London</h2>
    <p>London is the capital city of England.</p>
  </div>
  <div class="w3-third">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p>
  </div>
  <div class="w3-third">
    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan.</p>
  </div>
</div>`
      },
      { type: 'p', html: 'W3.CSS classes can make the three columns adjust as the available screen width changes.' },

      { type: 'heading', text: 'Using Bootstrap' },
      { type: 'p', html: 'Bootstrap is another popular CSS framework for responsive design. Its grid and utility classes help create layouts that adapt to different screen sizes.' },
      {
        type: 'example',
        label: 'Use Bootstrap responsive columns',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4"><h3>Column 1</h3><p>Responsive content.</p></div>
      <div class="col-sm-4"><h3>Column 2</h3><p>Responsive content.</p></div>
      <div class="col-sm-4"><h3>Column 3</h3><p>Responsive content.</p></div>
    </div>
  </div>
</body>
</html>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Responsive web design adapts a page to different screen sizes and devices.',
          'The viewport meta tag controls the visible area of a page on mobile devices.',
          'CSS media queries apply styles conditionally based on device characteristics.',
          'Responsive images and videos can scale with a fluid maximum width.',
          'W3.CSS provides responsive classes such as <code>w3-third</code>.',
          'Bootstrap provides responsive grid and utility classes.'
        ]
      },
      { type: 'note', label: 'Design tip', html: 'Combine a viewport tag with fluid CSS and sensible media queries or a responsive framework. Test the page on narrow and wide screens.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a responsive city guide. Add the viewport meta tag, make an image fluid, and use a media query to change the card layout on small screens. Include three city cards.</p>',
        starter: `<!DOCTYPE html>
<html>
<head>
  <!-- Add the viewport meta tag and responsive CSS here -->
</head>
<body>
  <div class="card">
    <h2>London</h2>
    <p>Write about London here.</p>
  </div>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .card {
      padding: 16px;
      background: #e8f1ff;
    }
    @media (max-width: 600px) {
      .cards { grid-template-columns: 1fr; }
    }
    img { max-width: 100%; height: auto; }
  </style>
</head>
<body>
  <h1>City Guide</h1>
  <div class="cards">
    <div class="card"><h2>London</h2><p>The capital of England.</p></div>
    <div class="card"><h2>Paris</h2><p>The capital of France.</p></div>
    <div class="card"><h2>Tokyo</h2><p>The capital of Japan.</p></div>
  </div>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What does the viewport meta tag control?',
            options: ['The visible area of a page on a mobile device', 'The document title', 'The image alt text', 'The link target'],
            answer: 0,
            explanation: 'The viewport meta tag gives mobile browsers information about the page width and initial scale.'
          },
          {
            question: 'What is a CSS media query used for?',
            options: ['Applying styles conditionally for device characteristics or screen sizes', 'Changing a page title', 'Adding an image source', 'Defining a document language'],
            answer: 0,
            explanation: 'Media queries apply CSS only when their conditions match features such as the viewport width.'
          },
          {
            question: 'Which CSS helps an image scale responsively?',
            options: ['<code>max-width: 100%</code> and <code>height: auto</code>', '<code>display: block</code> only', '<code>target: _blank</code>', '<code>charset: UTF-8</code>'],
            answer: 0,
            explanation: 'A maximum width of 100% and automatic height keep an image inside its container while preserving its ratio.'
          },
          {
            question: 'Which are responsive framework examples mentioned by the source?',
            options: ['W3.CSS and Bootstrap', 'HTML and CSS only', 'Tables and frames', 'Meta and base'],
            answer: 0,
            explanation: 'W3.CSS and Bootstrap are frameworks that provide ready-made responsive classes and components.'
          },
          {
            question: 'What is the main goal of responsive web design?',
            options: ['Make a page adapt well to different screen sizes and devices', 'Make every page use the same fixed width', 'Prevent all horizontal scrolling at every size', 'Remove CSS from webpages'],
            answer: 0,
            explanation: 'Responsive design adjusts content and layout so a webpage works well across screens and devices.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-semantics',
    title: 'HTML Semantics',
    subtitle: 'Give web content meaning and structure',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Semantic Elements',
      url: 'https://www.w3schools.com/html/html5_semantic_elements.asp'
    },
    blocks: [
      { type: 'p', html: 'Semantic elements clearly describe the meaning and purpose of content in a webpage. Instead of using generic containers everywhere, semantic HTML gives browsers, search engines, assistive technology, and developers useful context.' },

      { type: 'heading', text: 'What Are Semantic Elements?' },
      { type: 'p', html: 'A semantic element describes what its content represents. For example, <code>&lt;article&gt;</code> represents independent content, while <code>&lt;nav&gt;</code> represents navigation links. Use semantic elements when they accurately match the purpose of the content.' },
      {
        type: 'example',
        label: 'Semantic page structure',
        code: `<article>
  <header>
    <h1>Semantic HTML</h1>
    <p>Published by HTML Academy</p>
  </header>

  <section>
    <h2>Why meaning matters</h2>
    <p>Semantic elements make a page easier to understand.</p>
  </section>

  <footer>
    <p>Article footer</p>
  </footer>
</article>`
      },
      { type: 'note', label: 'Why use semantics?', html: 'A semantic Web allows data to be shared and reused across applications, enterprises, and communities. Good semantics also improve accessibility and make code more understandable.' },

      { type: 'heading', text: 'The article Element' },
      { type: 'p', html: 'The <code>&lt;article&gt;</code> element defines independent, self-contained content. A blog post, news story, product description, or forum post can be an article.' },
      {
        type: 'example',
        label: 'Use article for independent content',
        code: `<article>
  <h1>My First Blog Post</h1>
  <p>I went on a trip to New York this summer.</p>
  <p>The weather was nice, and Epcot was amazing!</p>
</article>`
      },

      { type: 'heading', text: 'The aside Element' },
      { type: 'p', html: 'The <code>&lt;aside&gt;</code> element defines content aside from the main page content. It can be useful for related links, a glossary, or supplementary information.' },
      {
        type: 'example',
        label: 'Use aside for related content',
        code: `<main>
  <article>
    <h1>Learning HTML</h1>
    <p>Semantic elements make pages clearer.</p>
  </article>

  <aside>
    <h2>Related links</h2>
    <ul>
      <li><a href="#">HTML tutorial</a></li>
      <li><a href="#">Semantic element reference</a></li>
    </ul>
  </aside>
</main>`
      },

      { type: 'heading', text: 'The section Element' },
      { type: 'p', html: 'The <code>&lt;section&gt;</code> element defines a section of a document. Sections usually need their own heading to describe their topic.' },
      {
        type: 'example',
        label: 'Divide a page into sections',
        code: `<section>
  <h2>Products</h2>
  <p>Browse our products here.</p>
</section>

<section>
  <h2>Support</h2>
  <p>Contact our support team.</p>
</section>`
      },

      { type: 'heading', text: 'The header and footer Elements' },
      { type: 'p', html: 'The <code>&lt;header&gt;</code> element specifies a header for a document or section. The <code>&lt;footer&gt;</code> element defines a footer for a document or section.' },
      {
        type: 'example',
        label: 'Use section-level header and footer',
        code: `<section>
  <header>
    <h2>Article title</h2>
    <p>By a student</p>
  </header>

  <p>Article content goes here.</p>

  <footer>
    <p>Posted today</p>
  </footer>
</section>`
      },

      { type: 'heading', text: 'The main Element' },
      { type: 'p', html: 'The <code>&lt;main&gt;</code> element specifies the main unique content of a document. A page should generally have one main element, and it should not be repeated inside every article or section.' },
      {
        type: 'example',
        label: 'Use main for the primary content',
        code: `<main>
  <h1>Main page content</h1>
  <p>This is the content a visitor came to read.</p>
</main>`
      },

      { type: 'heading', text: 'The nav Element' },
      { type: 'p', html: 'The <code>&lt;nav&gt;</code> element defines a set of navigation links. It is intended for major navigation, not for every group of links on a page.' },
      {
        type: 'example',
        label: 'Use nav for navigation links',
        code: `<nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>`
      },

      { type: 'heading', text: 'The details and summary Elements' },
      { type: 'p', html: 'The <code>&lt;details&gt;</code> element defines additional details that users can view or hide. Its <code>&lt;summary&gt;</code> element provides the visible heading or label for the details.' },
      {
        type: 'example',
        label: 'Create expandable details',
        code: `<details>
  <summary>What is semantic HTML?</summary>
  <p>Semantic HTML describes the meaning of content on a page.</p>
</details>`
      },

      { type: 'heading', text: 'The figure and figcaption Elements' },
      { type: 'p', html: 'The <code>&lt;figure&gt;</code> element specifies self-contained content, such as an illustration, diagram, photo, or code listing. The <code>&lt;figcaption&gt;</code> element defines a caption and can be the first or last child of figure.' },
      {
        type: 'example',
        label: 'Caption an image with figure',
        code: `<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig. 1 — Trulli, Puglia, Italy.</figcaption>
</figure>`
      },

      { type: 'heading', text: 'The mark and time Elements' },
      { type: 'p', html: 'The <code>&lt;mark&gt;</code> element marks or highlights text. The <code>&lt;time&gt;</code> element defines a date or time, optionally using the <code>datetime</code> attribute for a machine-readable value.' },
      {
        type: 'example',
        label: 'Highlight text and define a date',
        code: `<p>Remember to read the <mark>important</mark> notes.</p>

<p>Published on <time datetime="2026-09-24">September 24, 2026</time>.</p>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Semantic elements describe the meaning and purpose of webpage content.',
          '<code>&lt;article&gt;</code> defines independent, self-contained content.',
          '<code>&lt;aside&gt;</code> defines content aside from the main page content.',
          '<code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> define document or section regions.',
          '<code>&lt;main&gt;</code> specifies the main unique content of a document.',
          '<code>&lt;nav&gt;</code> defines navigation links.',
          '<code>&lt;section&gt;</code> defines a section of a document.',
          '<code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> provide expandable details.',
          '<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> provide self-contained content and captions.',
          '<code>&lt;mark&gt;</code> highlights text and <code>&lt;time&gt;</code> defines a date or time.'
        ]
      },
      { type: 'note', label: 'Accessibility first', html: 'Choose an element because it matches the meaning of the content, not because of how it looks. CSS should control presentation.' },

      { type: 'heading', text: 'Semantic Elements Reference' },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;article&gt;</code>', 'Defines independent, self-contained content.'],
          ['<code>&lt;aside&gt;</code>', 'Defines content aside from the page content.'],
          ['<code>&lt;details&gt;</code>', 'Defines additional details that a user can view or hide.'],
          ['<code>&lt;figcaption&gt;</code>', 'Defines a caption for a figure element.'],
          ['<code>&lt;figure&gt;</code>', 'Specifies self-contained content such as an illustration or photo.'],
          ['<code>&lt;footer&gt;</code>', 'Defines a footer for a document or section.'],
          ['<code>&lt;header&gt;</code>', 'Specifies a header for a document or section.'],
          ['<code>&lt;main&gt;</code>', 'Specifies the main content of a document.'],
          ['<code>&lt;mark&gt;</code>', 'Defines marked or highlighted text.'],
          ['<code>&lt;nav&gt;</code>', 'Defines navigation links.'],
          ['<code>&lt;section&gt;</code>', 'Defines a section in a document.'],
          ['<code>&lt;summary&gt;</code>', 'Defines a visible heading for a details element.'],
          ['<code>&lt;time&gt;</code>', 'Defines a date or time.']
        ]
      },
      { type: 'p', html: 'For a complete list of available HTML elements, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Build a semantic article page. Include a header, navigation, main, article, section, aside, figure with figcaption, details with summary, a marked phrase, and a time element. Avoid using a div when a semantic element is a better fit.</p>',
        starter: `<article>
  <!-- Add semantic page regions here -->
</article>`,
        solution: `<article>
  <header>
    <h1>My Travel Journal</h1>
    <p>By <time datetime="2026-09-24">September 24, 2026</time></p>
  </header>

  <nav><a href="#story">Story</a> · <a href="#tips">Tips</a></nav>

  <main>
    <section id="story">
      <h2>A day in Puglia</h2>
      <p>Trulli were <mark>beautiful</mark> to see.</p>
    </section>

    <aside>
      <h2>Related information</h2>
      <p>Puglia is in southern Italy.</p>
    </aside>

    <figure>
      <img src="pic_trulli.jpg" alt="Trulli in Puglia">
      <figcaption>Trulli, Puglia, Italy.</figcaption>
    </figure>

    <details>
      <summary>More travel tips</summary>
      <p>Pack comfortable shoes and a camera.</p>
    </details>
  </main>

  <footer>Journal entry complete.</footer>
</article>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What is the main purpose of semantic HTML?',
            options: ['Describe the meaning of webpage content', 'Replace all CSS', 'Make every element inline', 'Define browser history'],
            answer: 0,
            explanation: 'Semantic HTML gives content meaning and structure for browsers, developers, search engines, and assistive technology.'
          },
          {
            question: 'Which element defines independent, self-contained content?',
            options: ['<code>&lt;article&gt;</code>', '<code>&lt;aside&gt;</code>', '<code>&lt;mark&gt;</code>', '<code>&lt;time&gt;</code>'],
            answer: 0,
            explanation: 'The article element is intended for independent content such as a blog post or news story.'
          },
          {
            question: 'Where should the primary unique content of a page go?',
            options: ['Inside the <code>&lt;main&gt;</code> element', 'Inside a table header', 'Inside the <code>&lt;title&gt;</code>', 'Inside an image alt attribute'],
            answer: 0,
            explanation: 'The main element identifies the primary unique content of a document.'
          },
          {
            question: 'Which pair provides expandable content with a visible label?',
            options: ['<code>details</code> and <code>summary</code>', '<code>header</code> and <code>footer</code>', '<code>figure</code> and <code>mark</code>', '<code>nav</code> and <code>time</code>'],
            answer: 0,
            explanation: 'Use details for view-or-hide content and summary for its visible heading.'
          },
          {
            question: 'Which element defines a caption for a figure?',
            options: ['<code>&lt;figcaption&gt;</code>', '<code>&lt;nav&gt;</code>', '<code>&lt;section&gt;</code>', '<code>&lt;main&gt;</code>'],
            answer: 0,
            explanation: 'The figcaption element provides a caption for content inside a figure element.'
          }
        ]
      }
    ]
  },
  {
    id: 'html-style-guide',
    title: 'HTML Style Guide',
    subtitle: 'Write clean, consistent, maintainable HTML',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Style Guide and Coding Conventions',
      url: 'https://www.w3schools.com/html/html5_syntax.asp'
    },
    blocks: [
      { type: 'p', html: 'An HTML style guide helps you write consistent, readable, and maintainable HTML. Following conventions makes code easier for you and other developers to understand, debug, and reuse.' },

      { type: 'heading', text: 'Use Lowercase Tags' },
      { type: 'p', html: 'HTML tags should be written in lowercase. HTML is case insensitive, but lowercase tags improve readability and make code consistent.' },
      {
        type: 'example',
        label: 'Use lowercase HTML tags',
        code: `<p>This is a lowercase paragraph tag.</p>`
      },

      { type: 'heading', text: 'Use Lowercase Attribute Names' },
      { type: 'p', html: 'HTML attribute names should also be written in lowercase. Use the same style consistently in every element.' },
      {
        type: 'example',
        label: 'Use lowercase attribute names',
        code: `<a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>`
      },

      { type: 'heading', text: 'Always Quote Attribute Values' },
      { type: 'p', html: 'Always put attribute values inside double quotes. Quoted values are clearer and work reliably when they contain spaces or special characters.' },
      {
        type: 'example',
        label: 'Compare quoted and unquoted values',
        code: `<!-- Recommended: quoted value -->
<p title="A helpful tooltip">A good example</p>

<!-- Avoid: unquoted value with a space -->
<p title=A helpful tooltip>Not recommended</p>`
      },
      { type: 'note', label: 'Consistency', html: 'Double quotes are recommended by this style guide. Pick one quote style and use it consistently throughout your project.' },

      { type: 'heading', text: 'Always Include alt for Images' },
      { type: 'p', html: 'Always include an <code>alt</code> attribute for images. The value should describe the image for people who cannot see it. For decorative images, use an empty alt value such as <code>alt=""</code>.' },
      {
        type: 'example',
        label: 'Write accessible image markup',
        code: `<img src="london.jpg" alt="The River Thames in London" width="320">

<img src="divider.svg" alt="" width="20">`
      },

      { type: 'heading', text: 'Use Correct Attribute Syntax' },
      { type: 'p', html: 'Attribute names should follow their element, and attribute values should be separated from names with an equals sign. Values should be enclosed in quotes.' },
      {
        type: 'example',
        label: 'Check attribute syntax',
        code: `<!-- Correct: name="value" -->
<img src="london.jpg" alt="London">

<!-- Incorrect: missing quotes and wrong spacing -->
<img src = london.jpg alt = London>`
      },

      { type: 'heading', text: 'Never Skip the End Tag' },
      { type: 'p', html: 'Do not skip the closing tag for elements such as <code>&lt;p&gt;</code>, <code>&lt;li&gt;</code>, and <code>&lt;div&gt;</code>. Browsers may repair missing tags, but this can produce unexpected results.' },
      {
        type: 'example',
        label: 'Close every element',
        code: `<p>This paragraph has a closing tag.</p>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>`
      },
      { type: 'note', label: 'HTML5 exceptions', html: 'Some empty elements, such as <code>&lt;br&gt;</code> and <code>&lt;img&gt;</code>, do not need closing tags.' },

      { type: 'heading', text: 'Use Lowercase File Names' },
      { type: 'p', html: 'Use lowercase file names because some web servers are case sensitive. A request for <code>london.jpg</code> may not find <code>London.jpg</code>.' },
      {
        type: 'example',
        label: 'Use consistent lowercase filenames',
        code: `<img src="images/london.jpg" alt="London">
<link rel="stylesheet" href="css/site-style.css">
<script src="js/site-script.js"></script>`
      },

      { type: 'heading', text: 'Use File Extensions' },
      { type: 'p', html: 'Use the conventional extensions: <code>.html</code> for HTML files, <code>.css</code> for stylesheets, and <code>.js</code> for JavaScript files.' },
      { type: 'list', items: ['HTML files: <code>.html</code> or <code>.htm</code>', 'CSS files: <code>.css</code>', 'JavaScript files: <code>.js</code>'] },
      { type: 'note', label: 'HTML extensions', html: 'There is no browser or web-server difference between <code>.htm</code> and <code>.html</code>. Both are treated as HTML.' },

      { type: 'heading', text: 'Use Default Filenames' },
      { type: 'p', html: 'When a URL does not specify a filename, a server may use a default name such as <code>index.html</code>, <code>index.htm</code>, <code>default.html</code>, or <code>default.htm</code>.' },
      { type: 'note', label: 'Important', html: 'If the server only recognizes <code>index.html</code>, naming your page <code>default.html</code> will prevent it from being served at the site root.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Use lowercase HTML tags and lowercase attribute names.',
          'Always quote attribute values.',
          'Always include meaningful <code>alt</code> text for images.',
          'Use correct attribute syntax: <code>name="value"</code>.',
          'Do not skip closing tags, except for valid empty elements.',
          'Use lowercase file names and conventional extensions.',
          'Understand that <code>.htm</code> and <code>.html</code> are equivalent.',
          'Use a default filename supported by your server, commonly <code>index.html</code>.'
        ]
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Rewrite this untidy HTML so it follows the style guide. Use lowercase tags and attributes, quote every value, add an accessible alt attribute, close every required element, and use lowercase file names.</p>',
        starter: `<DIV CLASS="CITY">
  <H1>LONDON</H1>
  <IMG SRC=LONDON.JPG ALT=LONDON>
  <P>London is the capital of England.
</DIV>`,
        solution: `<div class="city">
  <h1>London</h1>
  <img src="images/london.jpg" alt="The River Thames in London">
  <p>London is the capital of England.</p>
</div>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What casing is recommended for HTML tags?', options: ['Lowercase', 'Uppercase', 'Random casing', 'Title case'], answer: 0, explanation: 'Use lowercase tags for consistency and readability.' },
          { question: 'How should attribute values be written?', options: ['Inside quotes', 'Without quotes', 'Only on images', 'Only on links'], answer: 0, explanation: 'Always quote attribute values for clarity and reliable parsing.' },
          { question: 'What should an image alt attribute contain?', options: ['A useful description of the image', 'The CSS file path', 'The page title', 'A closing tag'], answer: 0, explanation: 'Alt text describes the image for people who cannot see it.' },
          { question: 'Why should you not skip end tags?', options: ['Browsers may produce unexpected results', 'Tags become uppercase', 'Images cannot load', 'Files must be PDFs'], answer: 0, explanation: 'Complete closing tags make the structure clear and avoid browser error recovery.' },
          { question: 'Which filename is a common default page name?', options: ['<code>index.html</code>', '<code>main.jpg</code>', '<code>style.css</code>', '<code>script.js</code>'], answer: 0, explanation: 'Many web servers use index.html as the default page at a directory URL.' }
        ]
      }
    ]
  },
  {
    id: 'html-entities',
    title: 'HTML Entities',
    subtitle: 'Display reserved characters and symbols',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Character Entities',
      url: 'https://www.w3schools.com/html/html_entities.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML character entities let you display characters that have special meanings in HTML or that may not be easy to type directly. An entity begins with an ampersand and ends with a semicolon.' },

      { type: 'heading', text: 'What Are HTML Entities?' },
      { type: 'p', html: 'Reserved characters such as <code>&lt;</code>, <code>&gt;</code>, and <code>&amp;</code> have special meaning in HTML. An entity represents a character or symbol so the browser can display it correctly.' },
      {
        type: 'example',
        label: 'Display a reserved character',
        code: `<p>5 &lt; 10 and 10 &gt; 5</p>
<p>Tom &amp; Jerry</p>`
      },
      { type: 'note', label: 'Remember', html: 'Always end an entity with a semicolon. Entity names are case sensitive.' },

      { type: 'heading', text: 'Named and Numeric Entities' },
      { type: 'p', html: 'Characters can be represented by a named entity, a decimal numeric reference, or a hexadecimal numeric reference.' },
      {
        type: 'example',
        label: 'Compare entity formats',
        code: `<p>Copyright: &copy; 2026</p>
<p>Copyright: &#169; 2026</p>
<p>Copyright: &#xA9; 2026</p>`
      },
      { type: 'p', html: 'Named entities are readable, while numeric references can represent any supported character.' },

      { type: 'heading', text: 'Reserved Character Entities' },
      { type: 'p', html: 'Use entities for characters that could otherwise be interpreted as HTML syntax or that are difficult to include directly in a page.' },
      {
        type: 'example',
        label: 'Use reserved character entities',
        code: `<p>Less than: &lt;</p>
<p>Greater than: &gt;</p>
<p>Ampersand: &amp;</p>
<p>Double quote: &quot;</p>
<p>Single quote: &apos;</p>`
      },
      { type: 'note', label: 'Important', html: 'Use <code>&amp;lt;</code> to display a less-than sign, not <code>&lt;</code> by itself. The complete entity is decoded before the browser displays it.' },

      { type: 'heading', text: 'Non-Breaking Space' },
      { type: 'p', html: 'A regular HTML space can be removed when the browser formats text. The <code>&amp;nbsp;</code> entity creates a non-breaking space that keeps connected words or values together.' },
      {
        type: 'example',
        label: 'Keep values together',
        code: `<p>10&nbsp;km/h</p>
<p>10&nbsp;PM</p>
<p>10&nbsp;PM&nbsp;tomorrow</p>`
      },
      { type: 'p', html: 'The non-breaking space is also useful when breaking words would be disruptive, such as in a product measurement or a time.' },

      { type: 'heading', text: 'Some Useful HTML Character Entities' },
      {
        type: 'table',
        head: ['Result', 'Name', 'Number'],
        rows: [
          ['&nbsp;', '<code>&amp;nbsp;</code>', '—'],
          ['&lt;', '<code>&amp;lt;</code>', '<code>&amp;#60;</code>'],
          ['&gt;', '<code>&amp;gt;</code>', '<code>&amp;#62;</code>'],
          ['&amp;', '<code>&amp;amp;</code>', '<code>&amp;#38;</code>'],
          ['&quot;', '<code>&amp;quot;</code>', '<code>&amp;#34;</code>'],
          ['&apos;', '<code>&amp;apos;</code>', '<code>&amp;#39;</code>'],
          ['&cent;', '<code>&amp;cent;</code>', '<code>&amp;#162;</code>'],
          ['&pound;', '<code>&amp;pound;</code>', '<code>&amp;#163;</code>'],
          ['&yen;', '<code>&amp;yen;</code>', '<code>&amp;#165;</code>'],
          ['&euro;', '<code>&amp;euro;</code>', '<code>&amp;#8364;</code>'],
          ['&copy;', '<code>&amp;copy;</code>', '<code>&amp;#169;</code>'],
          ['&reg;', '<code>&amp;reg;</code>', '<code>&amp;#174;</code>'],
          ['&trade;', '<code>&amp;trade;</code>', '<code>&amp;#8482;</code>']
        ]
      },
      { type: 'note', label: 'Case sensitivity', html: 'Entity names are case sensitive. For example, <code>&amp;COPY;</code> and <code>&amp;copy;</code> are not the same entity.' },

      { type: 'heading', text: 'Combining Diacritical Marks' },
      { type: 'p', html: 'A diacritical mark is a glyph added to a letter, such as a grave accent, acute accent, circumflex, or tilde. Combining marks can produce characters that are not directly available in the page’s character set.' },
      {
        type: 'example',
        label: 'Add diacritical marks',
        code: `<p>a&#x0300; &rarr; à</p>
<p>a&#x0301; &rarr; á</p>
<p>a&#x0302; &rarr; â</p>
<p>a&#x0303; &rarr; ã</p>
<p>O&#x0300; &rarr; Ò</p>
<p>O&#x0301; &rarr; Ó</p>`
      },
      { type: 'note', label: 'Encoding tip', html: 'Use the correct character encoding, such as UTF-8, so text and symbols render correctly across browsers.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'HTML entities display characters that have special meaning or are difficult to type directly.',
          'Entities can be named, decimal numeric, or hexadecimal numeric references.',
          'Reserved characters include <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, and quotes.',
          'Always end an entity with a semicolon and remember that entity names are case sensitive.',
          '<code>&amp;nbsp;</code> creates a non-breaking space that keeps connected values together.',
          'Diacritical marks can be combined with letters to produce accented characters.'
        ]
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a product note that displays less-than and greater-than signs, an ampersand, a copyright symbol, a non-breaking space in “10 km/h”, and an accented word using a combining entity. Include at least one decimal and one hexadecimal entity.</p>',
        starter: `<p>Write a product note here.</p>

<p>Example value: 10 km/h</p>`,
        solution: `<p>Use 5 &lt; 10 and 10 &gt; 5.</p>
<p>Tom &amp; Jerry</p>
<p>Copyright: &copy; 2026</p>
<p>Distance: 10&nbsp;km/h</p>
<p>Accent: a&#x0301; (á)</p>
<p>Decimal copyright: &#169;</p>
<p>Hexadecimal copyright: &#xA9;</p>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What do HTML entities begin and end with?', options: ['An ampersand and a semicolon', 'A slash and a colon', 'A hash and a period', 'A tag and a closing tag'], answer: 0, explanation: 'An entity begins with & and ends with a semicolon.' },
          { question: 'Which entity displays a less-than sign?', options: ['<code>&amp;lt;</code>', '<code>&amp;gt;</code>', '<code>&amp;copy;</code>', '<code>&amp;nbsp;</code>'], answer: 0, explanation: 'The lt entity displays a less-than sign safely in HTML.' },
          { question: 'What does <code>&amp;nbsp;</code> create?', options: ['A non-breaking space', 'A page break', 'A new paragraph', 'A bold value'], answer: 0, explanation: 'The nbsp entity creates a non-breaking space that keeps connected values together.' },
          { question: 'Are HTML entity names case sensitive?', options: ['Yes', 'No', 'Only in hexadecimal', 'Only in attributes'], answer: 0, explanation: 'Entity names are case sensitive, so the exact casing is important.' },
          { question: 'What is a combining diacritical mark?', options: ['A mark added to a letter to create an accented character', 'A closing tag', 'A CSS property', 'A file path'], answer: 0, explanation: 'Diacritical marks combine with letters to produce characters such as à, á, or ã.' }
        ]
      }
    ]
  },
  {
    id: 'html-symbols',
    title: 'HTML Symbols',
    subtitle: 'Use character entities for symbols',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Symbols',
      url: 'https://www.w3schools.com/html/html_symbols.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML symbols are characters you can add to a webpage using character entities. They are useful for currency, mathematics, arrows, technical marks, weather, and many other symbols.' },
      { type: 'heading', text: 'HTML Symbol Entities' },
      { type: 'p', html: 'Use a named entity such as <code>&amp;hearts;</code> or a numeric entity to display a symbol. The entity is written in HTML and the browser displays the corresponding character.' },
      {
        type: 'example',
        label: 'Display common symbols',
        code: `<p>Currency: &euro; &pound; &yen;</p>
<p>Symbols: &hearts; &star; &check;</p>
<p>Math: &pi; &sum; &infin;</p>
<p>Arrows: &larr; &uarr; &rarr; &darr;</p>`
      },
      { type: 'note', label: 'Entity names are case sensitive', html: 'Use the exact entity spelling, including capitalization. Always end named entities with a semicolon.' },

      { type: 'heading', text: 'Currency Symbols' },
      {
        type: 'example',
        label: 'Currency entities',
        code: `<p>Euro: &euro;</p>
<p>British pound: &pound;</p>
<p>Japanese yen: &yen;</p>
<p>Indian rupee: &#8377;</p>
<p>Bitcoin: &#8383;</p>`
      },
      {
        type: 'table',
        head: ['Result', 'Entity', 'Description'],
        rows: [
          ['€', '<code>&amp;euro;</code>', 'Euro sign'],
          ['£', '<code>&amp;pound;</code>', 'British pound sign'],
          ['¥', '<code>&amp;yen;</code>', 'Yen sign'],
          ['₹', '<code>&amp;#8377;</code>', 'Indian rupee sign'],
          ['₿', '<code>&amp;#8383;</code>', 'Bitcoin sign']
        ]
      },

      { type: 'heading', text: 'Mathematical Symbols' },
      { type: 'p', html: 'HTML supports many mathematical symbols, including pi, summation, infinity, equality, and less-than or greater-than signs.' },
      {
        type: 'example',
        label: 'Math symbol entities',
        code: `<p>Pi: &pi;</p>
<p>Summation: &sum;</p>
<p>Infinity: &infin;</p>
<p>Not equal: &ne;</p>
<p>Less than or equal: &le;</p>`
      },

      { type: 'heading', text: 'Greek Letters' },
      {
        type: 'example',
        label: 'Greek letter entities',
        code: `<p>Alpha: &Alpha;</p>
<p>Beta: &Beta;</p>
<p>Gamma: &Gamma;</p>
<p>Delta: &Delta;</p>
<p>Omega: &Omega;</p>`
      },

      { type: 'heading', text: 'Arrows' },
      { type: 'p', html: 'Arrow entities can show direction in instructions, navigation, diagrams, and status messages.' },
      {
        type: 'example',
        label: 'Arrow entities',
        code: `<p>Left: &larr;</p>
<p>Up: &uarr;</p>
<p>Right: &rarr;</p>
<p>Down: &darr;</p>
<p>Double right: &rArr;</p>`
      },

      { type: 'heading', text: 'Common Symbol Families' },
      {
        type: 'list',
        items: [
          '<strong>Letterlike:</strong> entities such as <code>&amp;trade;</code>, <code>&amp;deg;</code>, and <code>&amp;plusmn;</code>.',
          '<strong>Number forms:</strong> entities such as <code>&amp;frac12;</code> and <code>&amp;frac14;</code>.',
          '<strong>Box drawings:</strong> entities such as <code>&amp;boxH;</code> and <code>&amp;boxV;</code>.',
          '<strong>Block elements:</strong> entities such as <code>&amp;block;</code> and <code>&amp;blacksquare;</code>.',
          '<strong>Geometric shapes:</strong> entities such as <code>&amp;triangle;</code> and <code>&amp;circle;</code>.',
          '<strong>Miscellaneous and technical:</strong> entities for check marks, crosses, technical symbols, and more.',
          '<strong>Weather, music, transport, and life symbols:</strong> the source reference includes categories such as weather, musical, arrows and transport, recycling, and life and religion.'
        ]
      },
      { type: 'p', html: 'For the complete collection, visit the <a href="https://www.w3schools.com/html/html_entities.asp" target="_blank" rel="noopener">HTML Entities Reference</a> and the linked <a href="https://www.w3schools.com/charsets/ref_html_entities.asp" target="_blank" rel="noopener">HTML Symbol Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a symbol guide that displays a currency symbol, a mathematical expression, a Greek letter, an arrow, a check mark, and a warning sign. Use named entities where possible and numeric entities for at least two symbols.</p>',
        starter: `<h1>Symbol Guide</h1>
<p>Write your symbol examples here.</p>`,
        solution: `<h1>Symbol Guide</h1>
<p>Price: &euro;20</p>
<p>Formula: 2 &pi;r = circumference</p>
<p>Greek letter: &alpha; beta &gamma;</p>
<p>Navigate: &larr; back &rarr; forward</p>
<p>Status: &check; complete &nbsp; &cross; error</p>
<p>Warning: &#9888; be careful</p>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'How are HTML symbol entities normally written?', options: ['With an ampersand, name or number, and semicolon', 'Only as CSS values', 'As image file names', 'As closing tags'], answer: 0, explanation: 'Named and numeric entities use an ampersand and a terminating semicolon.' },
          { question: 'Which entity displays the euro symbol?', options: ['<code>&amp;euro;</code>', '<code>&amp;pound;</code>', '<code>&amp;pi;</code>', '<code>&amp;larr;</code>'], answer: 0, explanation: 'The euro entity displays the € currency symbol.' },
          { question: 'What does <code>&amp;pi;</code> display?', options: ['The Greek letter pi', 'A left arrow', 'A check mark', 'A copyright symbol'], answer: 0, explanation: 'The pi entity displays π, a mathematical and Greek symbol.' },
          { question: 'Which entity family is used for directional indicators?', options: ['Arrows', 'Block elements', 'Weather symbols', 'Chess symbols'], answer: 0, explanation: 'Arrow entities represent directions such as left, up, right, and down.' },
          { question: 'What should you do when using a named entity?', options: ['Keep the exact case and end it with a semicolon', 'Remove the semicolon', 'Use uppercase names only', 'Put it inside an image path'], answer: 0, explanation: 'Entity names are case sensitive and should use the exact spelling with a semicolon.' }
        ]
      }
    ]
  },
  {
    id: 'html-emojis',
    title: 'HTML Emojis',
    subtitle: 'Add expressive characters to web pages',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Emojis',
      url: 'https://www.w3schools.com/html/html_emojis.asp'
    },
    blocks: [
      { type: 'p', html: 'Emojis are characters from the UTF-8 character set. HTML can display emoji characters directly, or it can display them using numeric character entities.' },

      { type: 'heading', text: 'The HTML Charset Attribute' },
      { type: 'p', html: 'To display an HTML page correctly, the browser must know the character set used in the page. Specify UTF-8 with a <code>meta</code> tag in the document head.' },
      {
        type: 'example',
        label: 'Declare UTF-8 in the head',
        code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>UTF-8 is ready for emoji</h1>
</body>
</html>`
      },
      { type: 'note', label: 'Default encoding', html: 'If no charset is specified, UTF-8 is the default character set in HTML. Declaring it explicitly is still good practice.' },

      { type: 'heading', text: 'UTF-8 Characters' },
      { type: 'p', html: 'Many UTF-8 characters cannot be typed easily on a keyboard. They can be displayed using numeric character entities, which start with <code>&amp;#</code> and end with a semicolon.' },
      {
        type: 'example',
        label: 'Display characters with entity numbers',
        code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <p>I will display &#65; &#66; &#67;</p>
  <p>I will display A B C</p>
</body>
</html>`
      },
      { type: 'p', html: 'The numbers 65, 66, and 67 represent the UTF-8 character codes for A, B, and C.' },

      { type: 'heading', text: 'Emoji Characters' },
      { type: 'p', html: 'Emoji are characters from the UTF-8 alphabet, so they can be copied, displayed, and sized just like other characters in HTML.' },
      {
        type: 'example',
        label: 'Display emoji characters',
        code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>My First Emoji</h1>
  <p>😀 😍 💗</p>
</body>
</html>`
      },
      { type: 'p', html: 'The emoji above also have numeric character values: 😀 is 128516, 😍 is 128525, and 💗 is 128151.' },

      { type: 'heading', text: 'Size Emoji with CSS' },
      { type: 'p', html: 'Since emoji are characters, CSS can size them with the <code>font-size</code> property.' },
      {
        type: 'example',
        label: 'Resize a group of emoji',
        code: `<h1>Sized Emojis</h1>
<p style="font-size: 48px;">😀 😄 😍 💗</p>`
      },
      { type: 'note', label: 'Keep the UTF-8 declaration', html: 'Use <code><meta charset="UTF-8"></code> so the browser knows how to interpret emoji and other Unicode characters.' },

      { type: 'heading', text: 'Emoji Categories' },
      {
        type: 'list',
        items: [
          '<strong>Smileys and people:</strong> common faces, gestures, and people.',
          '<strong>Animals and nature:</strong> animals, plants, and natural scenes.',
          '<strong>Food and drink:</strong> meals, fruit, coffee, and other items.',
          '<strong>Travel and places:</strong> vehicles, buildings, landmarks, and directions.',
          '<strong>Activities:</strong> sports, games, music, art, and events.',
          '<strong>Objects:</strong> everyday tools, clothing, household items, and technology.',
          '<strong>Symbols:</strong> hearts, signs, weather, and other useful marks.'
        ]
      },
      { type: 'p', html: 'For a complete list of emoji and entity numbers, visit the <a href="https://www.w3schools.com/charsets/ref_html_emoji.asp" target="_blank" rel="noopener">HTML Emoji Reference</a>.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'Emojis are characters from the UTF-8 character set.',
          'Use <code>&lt;meta charset="UTF-8"&gt;</code> so the browser interprets Unicode characters correctly.',
          'UTF-8 characters can be displayed with numeric entities such as <code>&amp;#65;</code>.',
          'Emoji can be copied, displayed, and sized like other HTML characters.',
          'CSS can size emoji with the <code>font-size</code> property.',
          'The full reference includes smileys, people, animals, nature, food, travel, activities, objects, and symbols.'
        ]
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create an emoji status card. Add the UTF-8 charset, show three direct emoji, include their numeric character entities, and size the emoji with CSS. Add a short text label so the meaning is clear without relying on the emoji alone.</p>',
        starter: `<!DOCTYPE html>
<html>
<head>
  <!-- Add the UTF-8 charset -->
</head>
<body>
  <h1>My Emoji Card</h1>
  <!-- Add direct and numeric emoji -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    .emoji { font-size: 48px; }
  </style>
</head>
<body>
  <h1>My Emoji Card</h1>
  <p class="emoji">😀 🎉 💗</p>
  <p>Numeric versions: &#128516; &#127881; &#128149;</p>
  <p>Happy, celebrate, and love.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What character set should you declare for emoji support?', options: ['UTF-8', 'ASCII only', 'Binary', 'Latin-1 only'], answer: 0, explanation: 'UTF-8 supports emoji and tells the browser how to interpret Unicode characters.' },
          { question: 'How do numeric character entities begin?', options: ['With an ampersand and a hash', 'With a slash and a period', 'With a CSS colon', 'With a closing bracket'], answer: 0, explanation: 'A numeric entity begins with &# and ends with a semicolon.' },
          { question: 'Which CSS property can size emoji?', options: ['<code>font-size</code>', '<code>src</code>', '<code>charset</code>', '<code>alt</code>'], answer: 0, explanation: 'Emoji are characters, so font-size can make them larger or smaller.' },
          { question: 'What are emoji in HTML?', options: ['Characters from the UTF-8 alphabet', 'Only image files', 'Special HTML tags', 'CSS selectors'], answer: 0, explanation: 'Emoji are Unicode characters and can be displayed as text in HTML.' },
          { question: 'Why include text labels with emoji?', options: ['The meaning remains clear when an emoji is not supported or is not understood', 'To add a closing tag', 'To change the charset', 'To create a form'], answer: 0, explanation: 'Text labels make the message accessible and understandable in more situations.' }
        ]
      }
    ]
  },
  {
    id: 'html-charsets',
    title: 'HTML Charsets',
    subtitle: 'Declare character encoding correctly',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Charsets',
      url: 'https://www.w3schools.com/html/html_charset.asp'
    },
    blocks: [
      { type: 'p', html: 'A character set defines how a browser interprets the characters in an HTML document. Choosing the correct charset helps text, symbols, emoji, and international characters display correctly.' },

      { type: 'heading', text: 'Set the Character Set with meta' },
      { type: 'p', html: 'Use the <code>charset</code> attribute on a <code>meta</code> element in the <code>&lt;head&gt;</code>. For HTML5, declare UTF-8, which supports nearly all characters and symbols used around the world.' },
      {
        type: 'example',
        label: 'Declare UTF-8 in HTML5',
        code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>UTF-8 Page</title>
</head>
<body>
  <p>This page supports English, accents, symbols, and emoji.</p>
</body>
</html>`
      },
      { type: 'note', label: 'Best practice', html: 'Declare <code><meta charset="UTF-8"></code> as early as possible in the head, ideally within the first 1024 bytes of the document.' },

      { type: 'heading', text: 'HTML5 UTF-8 Character Set' },
      { type: 'p', html: 'UTF-8 is the default character set in HTML5 and covers almost all the characters and symbols in the world. It includes basic Latin text, extended Latin characters, Greek letters, symbols, and emoji.' },
      {
        type: 'example',
        label: 'Display international UTF-8 text',
        code: `<p>English: Hello</p>
<p>Français: à la carte</p>
<p>Español: Múnich</p>
<p>Symbols: € © →</p>
<p>Emoji: 😀 🌍</p>`
      },

      { type: 'heading', text: 'ASCII Character Set' },
      { type: 'p', html: 'ASCII was the first character-encoding standard for the web. It defines 128 basic Latin characters, including English letters, numbers, and some special characters.' },
      {
        type: 'list',
        items: [
          'English letters <code>a-z</code> and <code>A-Z</code>.',
          'Numbers <code>0-9</code>.',
          'Some special characters such as <code>!</code>, <code>$</code>, <code>+</code>, <code>-</code>, <code>(</code>, <code>)</code>, <code>@</code>, <code>&lt;</code>, <code>&gt;</code>, <code>.</code>, <code>#</code>, and <code>?</code>.'
        ]
      },
      { type: 'note', label: 'Limitation', html: 'ASCII is limited compared with UTF-8 and does not support the world’s many languages, most symbols, or emoji.' },

      { type: 'heading', text: 'ANSI Character Set' },
      { type: 'p', html: 'ANSI, also known as Windows-1252, was the first Windows character set. It is identical to ASCII for the first 127 characters and adds characters from 128 to 159.' },
      {
        type: 'example',
        label: 'Declare the ANSI character set',
        code: `<meta charset="Windows-1252">`
      },

      { type: 'heading', text: 'ISO-8859-1 Character Set' },
      { type: 'p', html: 'ISO-8859-1 was the default character set for HTML 4. It supports 256 characters. In HTML5, it can be declared with the simpler charset attribute.' },
      {
        type: 'example',
        label: 'Compare HTML4 and HTML5 declarations',
        code: `<!-- Older HTML 4 syntax -->
<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">

<!-- HTML5 syntax -->
<meta charset="ISO-8859-1">`
      },
      { type: 'note', label: 'Prefer UTF-8', html: 'For new HTML documents, UTF-8 is generally the best choice because it supports a much wider range of characters than older encodings.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'The character set tells the browser how to interpret characters in an HTML document.',
          'Declare the encoding in the head with <code><meta charset="UTF-8"></code>.',
          'UTF-8 is the HTML5 default and supports almost all characters and symbols in the world.',
          'ASCII supports 128 basic Latin characters but has limited language and symbol coverage.',
          'ANSI or Windows-1252 extends ASCII with additional characters.',
          'ISO-8859-1 supported 256 characters and was the default for HTML4.',
          'Use UTF-8 for new documents that contain international text, symbols, or emoji.'
        ]
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a multilingual event page. Declare UTF-8 early in the head and include text in English, French, Spanish, and Japanese, plus a currency symbol and an emoji. Add a short note explaining why UTF-8 is used.</p>',
        starter: `<!DOCTYPE html>
<html>
<head>
  <!-- Add the character set -->
  <title>Multilingual Event</title>
</head>
<body>
  <h1>International Event</h1>
  <!-- Add text in multiple languages, a symbol, and emoji -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Multilingual Event</title>
</head>
<body>
  <h1>International Event</h1>
  <p>English: Welcome!</p>
  <p>Français: Bienvenue à Paris</p>
  <p>Español: ¡Bienvenidos!</p>
  <p>日本語: ようこそ</p>
  <p>Cost: €20 · Status: 🎉</p>
  <p>UTF-8 supports these languages, symbols, and emoji.</p>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What does a character set tell the browser?', options: ['How to interpret characters in the document', 'How many paragraphs to display', 'Which CSS framework to load', 'Which links are active'], answer: 0, explanation: 'A character set tells the browser how to interpret the bytes and characters in the document.' },
          { question: 'Which declaration is recommended for HTML5 pages?', options: ['<code>&lt;meta charset="UTF-8"&gt;</code>', '<code>&lt;meta name="author"&gt;</code>', '<code>&lt;link charset="UTF-8"&gt;</code>', '<code>&lt;title charset="UTF-8"&gt;</code>'], answer: 0, explanation: 'Declaring UTF-8 in a meta charset is the standard HTML5 approach.' },
          { question: 'How many basic characters does ASCII define?', options: ['128', '256', '65', '10,000'], answer: 0, explanation: 'ASCII defines 128 basic Latin characters.' },
          { question: 'What is ISO-8859-1 known for in the source?', options: ['The default character set for HTML4 and support for 256 characters', 'The default for CSS Grid', 'A JavaScript method', 'A file extension'], answer: 0, explanation: 'ISO-8859-1 was the default HTML4 character set and supported 256 characters.' },
          { question: 'Why choose UTF-8 for a new page?', options: ['It supports a much wider range of characters, symbols, and emoji', 'It removes all HTML tags', 'It disables JavaScript', 'It only supports English'], answer: 0, explanation: 'UTF-8 covers nearly all the characters and symbols used around the world.' }
        ]
      }
    ]
  },
  {
    id: 'html-url-encode',
    title: 'HTML URL Encode',
    subtitle: 'Encode spaces and special characters in URLs',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML URL Encoding',
      url: 'https://www.w3schools.com/html/html_urlencode.asp'
    },
    blocks: [
      { type: 'p', html: 'URL encoding converts characters that cannot be sent directly over the Internet into a safe format. This is especially important for spaces, non-ASCII characters, and reserved URL characters.' },

      { type: 'heading', text: 'URL Encoding' },
      { type: 'p', html: 'URLs can only be sent over the Internet using the ASCII character set. If a URL contains characters outside ASCII, it must be converted before transmission.' },
      { type: 'p', html: 'URL encoding replaces a non-ASCII character with a percent sign followed by hexadecimal digits. A space is normally encoded as a plus sign or as <code>%20</code>.' },
      {
        type: 'example',
        label: 'See percent-encoded values',
        code: `<p>Original: Hello World!</p>
<p>Encoded with plus: Hello+World%21</p>
<p>Encoded with percent: Hello%20World%21</p>
<p>Euro symbol encoded in UTF-8: %E2%82%AC</p>`
      },
      { type: 'note', label: 'Browser behavior', html: 'When a browser submits form input, it URL-encodes the value before sending it to a server. The server receives and decodes the submitted value.' },

      { type: 'heading', text: 'URL Components' },
      { type: 'p', html: 'A URL is made up of several parts. Understanding these parts helps you encode the right value and avoid malformed links.' },
      {
        type: 'list',
        items: [
          '<strong>scheme:</strong> the protocol used to access the resource.',
          '<strong>domain:</strong> the Internet domain name, such as <code>w3schools.com</code>.',
          '<strong>port:</strong> the port number at the host; the default for HTTP is 80.',
          '<strong>path:</strong> the location on the server; if omitted, the root directory is used.',
          '<strong>filename:</strong> the name of a document or resource.'
        ]
      },
      {
        type: 'example',
        label: 'Read a URL structure',
        code: `https://www.w3schools.com/html/html_urlencode.asp
└─ scheme ─┘└ domain ───────┘└──── path ─────┘└──── filename ────┘`
      },

      { type: 'heading', text: 'Common URL Schemes' },
      {
        type: 'table',
        head: ['Scheme', 'Short for', 'Used for'],
        rows: [
          ['<code>http</code>', 'HyperText Transfer Protocol', 'Common web pages; not encrypted.'],
          ['<code>https</code>', 'Secure HyperText Transfer Protocol', 'Secure web pages; encrypted.'],
          ['<code>ftp</code>', 'File Transfer Protocol', 'Downloading or uploading files.'],
          ['<code>file</code>', 'File', 'A file on your computer.']
        ]
      },

      { type: 'heading', text: 'ASCII Encoding Examples' },
      { type: 'p', html: 'The encoding result depends on the character set used by the page. HTML5 uses UTF-8 by default, so a non-ASCII character can require multiple percent-encoded bytes.' },
      {
        type: 'table',
        head: ['Character', 'Windows-1252', 'UTF-8'],
        rows: [
          ['€', '<code>%80</code>', '<code>%E2%82%AC</code>'],
          ['£', '<code>%A3</code>', '<code>%C2%A3</code>'],
          ['©', '<code>%A9</code>', '<code>%C2%A9</code>'],
          ['®', '<code>%AE</code>', '<code>%C2%AE</code>'],
          ['À', '<code>%C0</code>', '<code>%C3%80</code>'],
          ['Á', '<code>%C1</code>', '<code>%C3%81</code>']
        ]
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'URLs are normally sent using ASCII characters.',
          'URL encoding converts non-ASCII characters into percent signs followed by hexadecimal digits.',
          'Spaces are commonly encoded as a plus sign or as <code>%20</code>.',
          'Browsers URL-encode form input before sending it to a server.',
          'A URL contains a scheme, domain, optional port, path, and filename.',
          'Common schemes include <code>http</code>, <code>https</code>, <code>ftp</code>, and <code>file</code>.',
          'The page character set affects the encoded values of non-ASCII characters.'
        ]
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a search form that sends a query containing spaces, an ampersand, a euro symbol, and a plus sign. Use a UTF-8 document and show an example of the percent-encoded query that the browser would send.</p>',
        starter: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <form action="/search">
    <input type="search" name="q" value="web development">
    <button type="submit">Search</button>
  </form>

  <!-- Add an example encoded query here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <form action="/search">
    <input type="search" name="q" value="HTML & CSS: 20€ + tips">
    <button type="submit">Search</button>
  </form>

  <p>Encoded query example:</p>
  <code>q=HTML+%26+CSS%3A+20%E2%82%AC+%2B+tips</code>
</body>
</html>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What is URL encoding used for?', options: ['Sending characters safely over the Internet', 'Changing an image size', 'Creating HTML tables', 'Selecting a CSS color'], answer: 0, explanation: 'URL encoding converts characters into a format that can be transmitted safely in a URL.' },
          { question: 'What does a non-ASCII character become in URL encoding?', options: ['A percent sign followed by hexadecimal digits', 'A closing tag', 'A CSS class', 'A local file path'], answer: 0, explanation: 'Percent encoding uses a percent sign and hexadecimal digit pairs, such as %20.' },
          { question: 'Which two values can represent a space in a URL?', options: ['A plus sign and %20', 'A dot and a slash', 'A hash and a colon', 'An ampersand and a semicolon'], answer: 0, explanation: 'URLs can represent spaces as + or as the percent-encoded value %20.' },
          { question: 'Which URL scheme is encrypted?', options: ['https', 'http', 'file', 'ftp'], answer: 0, explanation: 'HTTPS is the secure, encrypted version of HTTP.' },
          { question: 'Who URL-encodes form input before sending it?', options: ['The browser', 'The HTML title element', 'The CSS parser', 'The image alt text'], answer: 0, explanation: 'The browser URL-encodes submitted form data before sending it to the server.' }
        ]
      }
    ]
  },
  {
    id: 'html-vs-xhtml',
    title: 'HTML vs XHTML',
    subtitle: 'Compare HTML syntax with XML-based XHTML',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Versus XHTML',
      url: 'https://www.w3schools.com/html/html_xhtml.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML and XHTML are both markup languages used to build webpages. HTML is the standard language of the modern web. XHTML is an XML-based version of HTML with stricter syntax requirements.' },

      { type: 'heading', text: 'What Is XHTML?' },
      { type: 'p', html: 'XHTML stands for Extensible HyperText Markup Language. It is based on XML, which means XHTML documents must be well formed. Well-formed markup is easier for browsers, validators, and other tools to process consistently.' },
      {
        type: 'table',
        head: ['Feature', 'HTML5', 'XHTML'],
        rows: [
          ['Basis', 'HTML syntax with browser error recovery', 'XML syntax with strict well-formed rules'],
          ['Element and attribute case', 'Case insensitive', 'Case sensitive; use lowercase'],
          ['Empty elements', 'May use <code>&lt;br&gt;</code> or <code>&lt;br /&gt;</code>', 'Must be closed, for example <code>&lt;br /&gt;</code>'],
          ['Attribute minimization', 'Some boolean attributes can be minimized', 'Forbidden; write the value explicitly'],
          ['Document type', '<code>&lt;!DOCTYPE html&gt;</code>', 'A specific XHTML doctype was traditionally used']
        ]
      },
      { type: 'note', label: 'Modern recommendation', html: 'HTML5 is the standard choice for new web projects. Learn XHTML rules to understand why well-formed, explicit markup is valuable, but you do not need to use XHTML for every modern page.' },

      { type: 'heading', text: 'XHTML Elements Must Be Properly Closed' },
      { type: 'p', html: 'In XHTML, every non-empty element must have a matching closing tag. Elements must also be nested in the correct order.' },
      {
        type: 'example',
        label: 'Correct XHTML nesting',
        code: `<b><i>Some text</i></b>`
      },
      {
        type: 'example',
        label: 'Incorrect XHTML nesting',
        code: `<b><i>Some text</b></i>`
      },

      { type: 'heading', text: 'XHTML Elements Must Always Be Closed' },
      { type: 'p', html: 'Unlike some HTML syntax, XHTML elements must always be closed, including ordinary content elements.' },
      {
        type: 'example',
        label: 'Closed XHTML elements',
        code: `<p>This is a paragraph</p>
<p>This is another paragraph</p>`
      },
      {
        type: 'example',
        label: 'Missing XHTML closing tags',
        code: `<p>This is a paragraph
<p>This is another paragraph`
      },

      { type: 'heading', text: 'XHTML Empty Elements Must Always Be Closed' },
      { type: 'p', html: 'In XHTML, empty elements must always be closed with a slash, such as <code>&lt;br /&gt;</code>, <code>&lt;hr /&gt;</code>, and <code>&lt;img ... /&gt;</code>.' },
      {
        type: 'example',
        label: 'Closed empty XHTML elements',
        code: `A break: <br />
A horizontal rule: <hr />
An image: <img src="happy.gif" alt="Happy face" />`
      },
      {
        type: 'example',
        label: 'Unclosed empty elements',
        code: `A break: <br>
A horizontal rule: <hr>
An image: <img src="happy.gif" alt="Happy face">`
      },

      { type: 'heading', text: 'XHTML Elements Must Be Lowercase' },
      { type: 'p', html: 'XHTML element names must always be lowercase because XHTML is case sensitive.' },
      {
        type: 'example',
        label: 'Correct lowercase elements',
        code: `<body>
  <p>This is a paragraph</p>
</body>`
      },
      {
        type: 'example',
        label: 'Incorrect uppercase elements',
        code: `<BODY>
  <P>This is a paragraph</P>
</BODY>`
      },

      { type: 'heading', text: 'XHTML Attribute Names Must Be Lowercase' },
      { type: 'p', html: 'Attribute names must be lowercase in XHTML. Use the same lowercase spelling consistently.' },
      {
        type: 'example',
        label: 'Correct lowercase attribute',
        code: `<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`
      },
      {
        type: 'example',
        label: 'Incorrect uppercase attribute',
        code: `<a HREF="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`
      },

      { type: 'heading', text: 'XHTML Attribute Values Must Be Quoted' },
      { type: 'p', html: 'Every XHTML attribute value must be enclosed in quotes.' },
      {
        type: 'example',
        label: 'Correct quoted value',
        code: `<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`
      },
      {
        type: 'example',
        label: 'Incorrect unquoted value',
        code: `<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>`
      },

      { type: 'heading', text: 'XHTML Attribute Minimization Is Forbidden' },
      { type: 'p', html: 'In XHTML, attributes cannot be minimized. A boolean attribute must include an explicit value such as <code>checked="checked"</code> or <code>disabled="disabled"</code>.' },
      {
        type: 'example',
        label: 'Explicit XHTML boolean attributes',
        code: `<input type="checkbox" name="vehicle" value="car" checked="checked" />
<input type="text" name="lastname" disabled="disabled" />`
      },
      {
        type: 'example',
        label: 'Incorrect minimized attributes',
        code: `<input type="checkbox" name="vehicle" value="car" checked />
<input type="text" name="lastname" disabled />`
      },

      { type: 'heading', text: 'Validate HTML With the W3C Validator' },
      { type: 'p', html: 'The W3C validator checks whether markup is valid and can point out syntax errors. Validation helps catch missing tags, incorrect nesting, bad attributes, and other problems before publishing.' },
      { type: 'note', label: 'Validator tip', html: 'Use a validator after copying, generating, or editing HTML. A valid document is more predictable across browsers and tools.' },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          'HTML5 is the standard modern markup language; XHTML is XML-based and stricter.',
          'XHTML elements must be properly nested and always closed.',
          'XHTML empty elements must be closed with a slash.',
          'XHTML element and attribute names must be lowercase.',
          'XHTML attribute values must be quoted.',
          'XHTML forbids minimized boolean attributes.',
          'Use the W3C validator to check markup and find syntax errors.'
        ]
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Convert a loosely written HTML snippet into valid XHTML-style markup. Close every non-empty and empty element, use lowercase element and attribute names, quote every value, and expand boolean attributes.</p>',
        starter: `<DIV CLASS="CARD">
  <H1>My Card</H1>
  <IMG SRC=card.jpg ALT=Card>
  <P>This card is ready.
  <INPUT TYPE=checkbox CHECKED>
</DIV>`,
        solution: `<div class="card">
  <h1>My Card</h1>
  <img src="card.jpg" alt="Card" />
  <p>This card is ready.</p>
  <input type="checkbox" checked="checked" />
</div>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What is XHTML based on?', options: ['XML', 'CSS Grid', 'HTTP only', 'SQL'], answer: 0, explanation: 'XHTML is based on XML and requires well-formed markup.' },
          { question: 'How should empty elements be written in XHTML?', options: ['Closed with a slash, such as <code>&lt;br /&gt;</code>', 'Never closed', 'Written in uppercase', 'Wrapped in a paragraph'], answer: 0, explanation: 'XHTML empty elements must be explicitly closed.' },
          { question: 'What casing does XHTML require for element names?', options: ['Lowercase', 'Uppercase', 'Random casing', 'Any casing'], answer: 0, explanation: 'XHTML is case sensitive, so use lowercase element names.' },
          { question: 'Which attribute form is valid in XHTML?', options: ['<code>checked="checked"</code>', '<code>checked</code>', '<code>CHECKED</code>', 'An unquoted checked value'], answer: 0, explanation: 'Attribute minimization is forbidden, so the value must be explicit.' },
          { question: 'What does the W3C validator help with?', options: ['Finding markup and syntax errors', 'Changing all text to uppercase', 'Hosting a website', 'Creating CSS variables'], answer: 0, explanation: 'The validator checks markup validity and reports syntax problems.' }
        ]
      }
    ]
  },
  {
    id: 'html-computercode',
    title: 'HTML Computercode',
    subtitle: 'Mark code, output, variables & keyboard input',
    status: 'ready',
    source: {
      label: 'W3Schools · HTML Computer Code Elements',
      url: 'https://www.w3schools.com/html/html_computercode_elements.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML computer-code elements describe code, keyboard input, sample program output, variables, and preformatted text. These elements help readers distinguish computer-related content from ordinary prose.' },

      { type: 'heading', text: 'The kbd Element' },
      { type: 'p', html: 'The <code>&lt;kbd&gt;</code> element defines keyboard input, such as a key or combination of keys that a user should press.' },
      {
        type: 'example',
        label: 'Mark keyboard input',
        code: `<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
<p>Open the source with <kbd>Ctrl</kbd> + <kbd>U</kbd>.</p>`
      },

      { type: 'heading', text: 'The samp Element' },
      { type: 'p', html: 'The <code>&lt;samp&gt;</code> element defines sample output from a computer program. It is useful for showing what a command or program might display.' },
      {
        type: 'example',
        label: 'Show sample program output',
        code: `<p>Program output: <samp>File downloaded successfully</samp></p>
<p>Result: <samp>42</samp></p>`
      },

      { type: 'heading', text: 'The code Element' },
      { type: 'p', html: 'The <code>&lt;code&gt;</code> element defines a piece of computer code. The browser displays its content in the default monospace font.' },
      {
        type: 'example',
        label: 'Define computer code',
        code: `<code>x = 5; y = 6; z = x + y;</code>`
      },
      { type: 'note', label: 'Monospace appearance', html: 'The code element signals that its content is code; CSS can customize its color, background, and font.' },

      { type: 'heading', text: 'Preserve Line Breaks with pre and code' },
      { type: 'p', html: 'The <code>&lt;code&gt;</code> element does not preserve extra whitespace and line breaks. Put it inside a <code>&lt;pre&gt;</code> element when the formatting of code matters.' },
      {
        type: 'example',
        label: 'Preserve code formatting',
        code: `<pre><code>x = 5;
y = 6;
z = x + y;</code></pre>`
      },
      { type: 'note', label: 'Why pre?', html: 'The pre element defines preformatted text and preserves spaces and line breaks. It is commonly paired with code.' },

      { type: 'heading', text: 'The var Element' },
      { type: 'p', html: 'The <code>&lt;var&gt;</code> element defines a variable in programming or a mathematical expression. The browser typically displays its content in italics.' },
      {
        type: 'example',
        label: 'Mark variables in a formula',
        code: `<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base and <var>h</var> is the vertical height.</p>`
      },

      { type: 'heading', text: 'Chapter Summary' },
      {
        type: 'list',
        items: [
          '<code>&lt;kbd&gt;</code> defines keyboard input.',
          '<code>&lt;samp&gt;</code> defines sample output from a computer program.',
          '<code>&lt;code&gt;</code> defines a piece of computer code.',
          '<code>&lt;var&gt;</code> defines a variable in programming or a mathematical expression.',
          '<code>&lt;pre&gt;</code> defines preformatted text and preserves whitespace and line breaks.'
        ]
      },
      {
        type: 'table',
        head: ['Tag', 'Description'],
        rows: [
          ['<code>&lt;code&gt;</code>', 'Defines programming code.'],
          ['<code>&lt;kbd&gt;</code>', 'Defines keyboard input.'],
          ['<code>&lt;samp&gt;</code>', 'Defines computer output.'],
          ['<code>&lt;var&gt;</code>', 'Defines a variable.'],
          ['<code>&lt;pre&gt;</code>', 'Defines preformatted text.']
        ]
      },
      { type: 'p', html: 'For a complete list of available HTML tags, visit the <a href="https://www.w3schools.com/html/html_reference.asp" target="_blank" rel="noopener">HTML Tag Reference</a>.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: '<p>Create a small programming tip panel. Mark keyboard shortcuts with <code>kbd</code>, a program result with <code>samp</code>, a short code snippet with <code>code</code>, variables in a formula with <code>var</code>, and preserve the line breaks with <code>pre</code>.</p>',
        starter: `<article>
  <h2>Shortcut and code tip</h2>
  <!-- Add kbd, samp, code, var, and pre examples here -->
</article>`,
        solution: `<article>
  <h2>Shortcut and code tip</h2>
  <p>Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to run the program.</p>
  <p>Program output: <samp>Program completed successfully</samp></p>
  <p>Function: <code>function add(a, b) { return a + b; }</code></p>
  <p>Formula: <var>a</var> + <var>b</var> = <var>c</var></p>
  <pre><code>const result = add(2, 3);
console.log(result);</code></pre>
</article>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which element defines keyboard input?', options: ['<code>&lt;kbd&gt;</code>', '<code>&lt;samp&gt;</code>', '<code>&lt;var&gt;</code>', '<code>&lt;pre&gt;</code>'], answer: 0, explanation: 'The kbd element represents keyboard input such as a key or shortcut.' },
          { question: 'Which element represents sample output from a computer program?', options: ['<code>&lt;samp&gt;</code>', '<code>&lt;code&gt;</code>', '<code>&lt;kbd&gt;</code>', '<code>&lt;var&gt;</code>'], answer: 0, explanation: 'The samp element is intended for sample program output.' },
          { question: 'Which element should contain a piece of programming code?', options: ['<code>&lt;code&gt;</code>', '<code>&lt;mark&gt;</code>', '<code>&lt;small&gt;</code>', '<code>&lt;b&gt;</code>'], answer: 0, explanation: 'The code element marks a piece of computer code.' },
          { question: 'How do you preserve code line breaks?', options: ['Put code inside pre', 'Use a br attribute on code', 'Add extra spaces only', 'Use title'], answer: 0, explanation: 'The pre element preserves whitespace and line breaks, and is commonly paired with code.' },
          { question: 'Which element defines a mathematical or programming variable?', options: ['<code>&lt;var&gt;</code>', '<code>&lt;samp&gt;</code>', '<code>&lt;kbd&gt;</code>', '<code>&lt;pre&gt;</code>'], answer: 0, explanation: 'The var element represents a variable in programming or mathematics.' }
        ]
      }
    ]
  },
  {
    id: 'html-forms',
    title: 'HTML Forms',
    subtitle: 'Create interactive forms for collecting user input',
    status: 'ready',
    navSection: 'HTML Forms',
    source: {
      label: 'W3Schools · HTML Forms',
      url: 'https://www.w3schools.com/html/html_forms.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML forms collect information from people. A user enters data into controls such as text fields, radio buttons, and checkboxes, then submits the form for processing.' },
      { type: 'heading', text: 'How HTML Forms Work' },
      { type: 'p', html: 'When a form is submitted, the browser packages the named form controls and sends their values to the destination specified by the form\'s <code>action</code> attribute. The <code>method</code> attribute controls how the data is sent; common values include <code>get</code> and <code>post</code>.' },
      { type: 'note', label: 'Server processing', html: 'HTML creates the form interface, but a server-side application usually validates and processes the submitted data.' },
      { type: 'heading', text: 'The Form Element' },
      { type: 'p', html: 'The <code>&lt;form&gt;</code> element groups controls that belong together and defines where submitted data is sent.' },
      { type: 'list', items: [
        '<code>action</code> specifies the URL that receives the form data.',
        '<code>method</code> specifies the HTTP method used to submit the data.',
        '<code>autocomplete</code> allows the browser to remember previously entered values.'
      ] },
      {
        type: 'example', label: 'Create a form',
        code: `<form action="/submit" method="post">
  <label for="username">Username</label>
  <input type="text" id="username" name="username">
  <button type="submit">Send</button>
</form>`
      },
      { type: 'heading', text: 'Text Input and Label' },
      { type: 'p', html: 'Use <code>&lt;input type="text"&gt;</code> for a single-line text value. A <code>&lt;label&gt;</code> describes a control, and its <code>for</code> attribute should match the control\'s <code>id</code>.' },
      {
        type: 'example', label: 'Pair a label with an input',
        code: `<label for="first-name">First name:</label>
<input type="text" id="first-name" name="first-name">`
      },
      { type: 'note', label: 'Why use labels?', html: 'Clicking a label focuses or activates its associated control, and screen readers announce the label with the field.' },
      { type: 'heading', text: 'Radio Buttons' },
      { type: 'p', html: 'Radio buttons let a user select one option from a group. Controls in the same group use the same <code>name</code> value, while each <code>id</code> is unique.' },
      {
        type: 'example', label: 'Choose one option',
        code: `<label><input type="radio" name="plan" value="basic"> Basic</label>
<label><input type="radio" name="plan" value="pro"> Pro</label>`
      },
      { type: 'heading', text: 'Checkboxes' },
      { type: 'p', html: 'Checkboxes let a user select one or more independent options. Related checkboxes can share a <code>name</code>, but each checkbox needs its own <code>value</code>.' },
      {
        type: 'example', label: 'Choose several options',
        code: `<label><input type="checkbox" name="hobby" value="coding"> Coding</label>
<label><input type="checkbox" name="hobby" value="music"> Music</label>
<label><input type="checkbox" name="hobby" value="reading"> Reading</label>`
      },
      { type: 'heading', text: 'Submit Buttons' },
      { type: 'p', html: 'An <code>&lt;input type="submit"&gt;</code> creates a submit button. The <code>&lt;button&gt;</code> element is also commonly used and receives its button text directly between its tags.' },
      { type: 'list', items: [
        '<code>&lt;input type="submit" value="Submit"&gt;</code>',
        '<code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code>'
      ] },
      { type: 'heading', text: 'The Name Attribute for Inputs' },
      { type: 'p', html: 'Every input that should be submitted needs a <code>name</code> attribute. The submitted field is identified by that name, and the control\'s current value is associated with it. A control without a name is normally not included in the submitted data.' },
      { type: 'note', label: 'Important', html: 'An <code>id</code> identifies a control in the document; a <code>name</code> identifies its submitted field. They often match, but they serve different purposes.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a profile form with a text input, a group of radio buttons, two checkboxes, and a submit button. Connect every label to its control with matching <code>id</code> and <code>for</code> values, and give every submitted control a <code>name</code>.',
        starter: `<form action="/profile" method="post">
  <!-- Add labels, inputs, radio buttons, checkboxes, and submit -->
</form>`,
        solution: `<form action="/profile" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <fieldset>
    <legend>Account type</legend>
    <label><input type="radio" name="account" value="free"> Free</label>
    <label><input type="radio" name="account" value="pro"> Pro</label>
  </fieldset>

  <label><input type="checkbox" name="interest" value="html"> HTML</label>
  <label><input type="checkbox" name="interest" value="css"> CSS</label>

  <button type="submit">Create profile</button>
</form>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which attribute identifies the submitted field for an input?', options: ['<code>name</code>', '<code>class</code>', '<code>title</code>', '<code>style</code>'], answer: 0, explanation: 'The name attribute is used as the field name in submitted form data.' },
          { question: 'Which control normally allows only one selection in a named group?', options: ['Radio button', 'Text input', 'Textarea', 'Submit button'], answer: 0, explanation: 'Radio buttons that share a name form a single-choice group.' },
          { question: 'What does a label\'s <code>for</code> attribute reference?', options: ['The associated control\'s id', 'The form action', 'The HTTP method', 'A submit button'], answer: 0, explanation: 'The for value matches the id of the associated form control.' },
          { question: 'Why can an input with a value but no name fail to submit?', options: ['Its name is missing, so it has no submitted field key', 'Its id must be disabled', 'Labels cannot contain inputs', 'The browser ignores every text input'], answer: 0, explanation: 'Submitted form fields need a name; a value alone is not enough.' }
        ]
      }
    ]
  },
  {
    id: 'html-form-attributes',
    title: 'HTML Form Attributes',
    subtitle: 'Configure submission, encoding, validation & behavior',
    status: 'ready',
    navSection: 'HTML Forms',
    source: {
      label: 'W3Schools · HTML Form Attributes',
      url: 'https://www.w3schools.com/html/html_forms_attributes.asp'
    },
    blocks: [
      { type: 'p', html: 'Attributes on <code>&lt;form&gt;</code> control where submitted data is sent, how it is encoded, whether the browser validates it, and how the response is displayed.' },
      { type: 'heading', text: 'The accept-charset Attribute' },
      { type: 'p', html: '<code>accept-charset</code> lists the character encodings the server should accept for form submission. Separate multiple encodings with spaces.' },
      {
        type: 'example', label: 'Accepted character sets',
        code: `<form action="/search" accept-charset="UTF-8 ISO-8859-1">
  <input type="search" name="query">
  <button type="submit">Search</button>
</form>`
      },
      { type: 'heading', text: 'The action Attribute' },
      { type: 'p', html: '<code>action</code> specifies the URL that receives the form data. If it is omitted, submission returns to the current page URL.' },
      {
        type: 'example', label: 'Choose a submission URL',
        code: `<form action="/create-account" method="post">
  <input type="email" name="email" required>
  <button type="submit">Create account</button>
</form>`
      },
      { type: 'heading', text: 'The autocomplete Attribute' },
      { type: 'p', html: '<code>autocomplete</code> controls whether the browser may use stored values to complete form fields. It commonly uses <code>on</code> or <code>off</code>.' },
      {
        type: 'example', label: 'Turn autocomplete off',
        code: `<form action="/checkout" autocomplete="off">
  <input type="text" name="coupon">
  <button type="submit">Apply coupon</button>
</form>`
      },
      { type: 'heading', text: 'The enctype Attribute' },
      { type: 'p', html: '<code>enctype</code> specifies how form data is encoded when submitting to the server. It applies to <code>method="post"</code>.' },
      {
        type: 'table',
        head: ['Value', 'Meaning'],
        rows: [
          ['<code>application/x-www-form-urlencoded</code>', 'Default encoding for most form fields.'],
          ['<code>multipart/form-data</code>', 'Encodes fields and uploaded files as separate parts.'],
          ['<code>text/plain</code>', 'Sends plain text without URL-style encoding.']
        ]
      },
      {
        type: 'example', label: 'Upload a file',
        code: `<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar">
  <button type="submit">Upload</button>
</form>`
      },
      { type: 'note', label: 'Important', html: 'The <code>enctype="multipart/form-data"</code> value is used with POST when a form includes file uploads.' },
      { type: 'heading', text: 'The method Attribute' },
      { type: 'p', html: '<code>method</code> specifies the HTTP method used to submit form data. The common values are <code>get</code> and <code>post</code>.' },
      { type: 'list', items: [
        '<strong>GET</strong> appends form data to the URL, making it easy to bookmark but unsuitable for sensitive or large submissions.',
        '<strong>POST</strong> sends data in the request body, keeps it out of the URL, and supports larger submissions such as uploads.'
      ] },
      {
        type: 'example', label: 'Compare GET and POST',
        code: `<!-- Useful for a search page: values appear in the URL -->
<form action="/search" method="get">
  <input type="search" name="q">
  <button type="submit">Search</button>
</form>

<!-- Use POST for sensitive or large submissions -->
<form action="/login" method="post">
  <input type="password" name="password">
  <button type="submit">Log in</button>
</form>`
      },
      { type: 'note', label: 'Security tip', html: 'Use POST instead of GET when form data contains sensitive or personal information.' },
      { type: 'heading', text: 'The name Attribute' },
      { type: 'p', html: '<code>name</code> gives the form itself an identifier for scripts and other page elements. It is separate from each input\'s <code>name</code>, which identifies a submitted field.' },
      {
        type: 'example', label: 'Give the form a name',
        code: `<form id="login" name="login" action="/login" method="post">
  <input type="text" name="username">
  <button type="submit">Log in</button>
</form>`
      },
      { type: 'heading', text: 'The novalidate Attribute' },
      { type: 'p', html: '<code>novalidate</code> is a boolean attribute. When present, it tells the browser not to perform native constraint validation when the form is submitted.' },
      {
        type: 'example', label: 'Skip native validation',
        code: `<form action="/feedback" method="post" novalidate>
  <input type="email" name="email">
  <button type="submit">Send feedback</button>
</form>`
      },
      { type: 'note', label: 'Important', html: 'Skipping browser validation does not make submitted data safe. The server must still validate and sanitize every value.' },
      { type: 'heading', text: 'The rel Attribute' },
      { type: 'p', html: '<code>rel</code> describes the relationship between the current document and the linked destination.' },
      {
        type: 'table',
        head: ['Value', 'Typical meaning'],
        rows: [
          ['<code>noopener</code>', 'Prevents the destination from accessing the current page through <code>window.opener</code>.'],
          ['<code>noreferrer</code>', 'Does not send a referrer to the destination.'],
          ['<code>external</code>', 'Indicates a resource intended for a context outside the current document.']
        ]
      },
      { type: 'heading', text: 'The target Attribute' },
      { type: 'p', html: '<code>target</code> specifies where to display the response received after submission, using values such as <code>_self</code>, <code>_blank</code>, or a named browsing context.' },
      {
        type: 'example', label: 'Open the response in a new tab',
        code: `<form action="/receipt" method="post" target="_blank" rel="noopener">
  <input type="text" name="order">
  <button type="submit">Open receipt</button>
</form>`
      },
      { type: 'note', label: 'Practical default', html: 'If you do not specify <code>target</code>, the response normally replaces the current page.' },
      { type: 'heading', text: 'All Form Attributes' },
      {
        type: 'table',
        head: ['Attribute', 'Purpose'],
        rows: [
          ['<code>accept-charset</code>', 'Character encodings accepted by the server.'],
          ['<code>action</code>', 'Destination URL for submitted form data.'],
          ['<code>autocomplete</code>', 'Whether stored values may complete form fields.'],
          ['<code>enctype</code>', 'Encoding used for POST submissions, including uploads.'],
          ['<code>method</code>', 'GET or POST submission method.'],
          ['<code>name</code>', 'Identifier for the form element.'],
          ['<code>novalidate</code>', 'Skips native browser constraint validation.'],
          ['<code>rel</code>', 'Relationship to the linked resource.'],
          ['<code>target</code>', 'Browsing context used to display the response.']
        ]
      },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a secure account form submitted with POST. Give it an <code>action</code>, a form <code>name</code>, turn autocomplete off, and open the response in a new tab using <code>target="_blank"</code> with <code>rel="noopener"</code>.',
        starter: `<form>
  <!-- Add action, method, name, autocomplete, target, and rel -->
  <input type="email" name="email" required>
  <button type="submit">Continue</button>
</form>`,
        solution: `<form action="/account" method="post" name="account" autocomplete="off" target="_blank" rel="noopener">
  <input type="email" name="email" required>
  <button type="submit">Continue</button>
</form>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which attribute chooses the URL that receives form data?', options: ['<code>action</code>', '<code>target</code>', '<code>name</code>', '<code>rel</code>'], answer: 0, explanation: 'The action attribute specifies the form submission destination.' },
          { question: 'Which method keeps submitted data out of the URL?', options: ['<code>post</code>', '<code>get</code>', '<code>rel</code>', '<code>name</code>'], answer: 0, explanation: 'POST sends data in the request body rather than appending it to the URL.' },
          { question: 'Which encoding is used for a POST form that uploads a file?', options: ['<code>multipart/form-data</code>', '<code>text/css</code>', '<code>application/json</code>', '<code>url</code>'], answer: 0, explanation: 'File upload forms use multipart/form-data with POST.' },
          { question: 'What does <code>novalidate</code> do?', options: ['Skips native browser validation', 'Encrypts every field', 'Sends data with GET', 'Makes a form readonly'], answer: 0, explanation: 'The browser skips native constraint validation, but the server must still validate input.' },
          { question: 'Which pair safely opens a new response tab?', options: ['<code>target="_blank" rel="noopener"</code>', '<code>method="blank" rel="off"</code>', '<code>action="noopener" method="get"</code>', '<code>name="target" enctype="blank"</code>'], answer: 0, explanation: 'target selects the browsing context and rel=noopener limits opener access.' }
        ]
      }
    ]
  },
  {
    id: 'html-form-elements',
    title: 'HTML Form Elements',
    subtitle: 'Build accessible controls with forms, inputs, selects & buttons',
    status: 'ready',
    navSection: 'HTML Forms',
    source: {
      label: 'W3Schools · HTML Form Elements',
      url: 'https://www.w3schools.com/html/html_form_elements.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML form elements create the interface people use to enter and submit information. Each control has a specific purpose, from text entry and selection to grouping, choices, and calculated output.' },
      { type: 'heading', text: 'The Form Element' },
      { type: 'p', html: 'The <code>&lt;form&gt;</code> element groups related controls and defines the interface that collects user input.' },
      {
        type: 'example', label: 'A basic form',
        code: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>`
      },
      { type: 'heading', text: 'The Input Element' },
      { type: 'p', html: 'The <code>&lt;input&gt;</code> element is a void element that creates a form control. Its <code>type</code> attribute determines the kind of control and data it accepts.' },
      {
        type: 'example', label: 'Common input types',
        code: `<label>Text <input type="text" name="text"></label>
<label>Email <input type="email" name="email"></label>
<label>Password <input type="password" name="password"></label>
<label>Number <input type="number" name="number" min="1" max="10"></label>
<label>File <input type="file" name="attachment"></label>`
      },
      { type: 'note', label: 'Input names', html: 'Give each input that should be submitted a <code>name</code> attribute.' },
      { type: 'heading', text: 'The Label Element' },
      { type: 'p', html: 'A <code>&lt;label&gt;</code> gives a control an accessible text description. Its <code>for</code> value should match the associated control\'s <code>id</code>.' },
      {
        type: 'example', label: 'Connect a label to an input',
        code: `<label for="email">Email address:</label>
<input type="email" id="email" name="email">`
      },
      { type: 'heading', text: 'Fieldset and Legend' },
      { type: 'p', html: '<code>&lt;fieldset&gt;</code> groups related form controls, while <code>&lt;legend&gt;</code> provides a caption for that group.' },
      {
        type: 'example', label: 'Group related controls',
        code: `<fieldset>
  <legend>Contact details</legend>
  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone">
</fieldset>`
      },
      { type: 'note', label: 'Grouping matters', html: 'A fieldset and legend communicate the purpose of a group of controls, especially to screen-reader users.' },
      { type: 'heading', text: 'The Select Element' },
      { type: 'p', html: '<code>&lt;select&gt;</code> creates a drop-down list. Its <code>&lt;option&gt;</code> elements define choices, and <code>&lt;optgroup&gt;</code> can organize related choices into labeled groups.' },
      {
        type: 'example', label: 'Create a select list',
        code: `<label for="city">City:</label>
<select id="city" name="city">
  <optgroup label="Canada">
    <option value="ottawa">Ottawa</option>
    <option value="toronto">Toronto</option>
  </optgroup>
  <optgroup label="United States">
    <option value="portland">Portland</option>
  </optgroup>
</select>`
      },
      { type: 'heading', text: 'The Textarea Element' },
      { type: 'p', html: '<code>&lt;textarea&gt;</code> creates a multiline text control. Its content is written between its opening and closing tags.' },
      {
        type: 'example', label: 'Create a textarea',
        code: `<label for="message">Message:</label><br>
<textarea id="message" name="message" rows="5" cols="40">
Write your message here...
</textarea>`
      },
      { type: 'note', label: 'Textarea content', html: 'The default text inside a textarea is its value. Remember to close the textarea tag.' },
      { type: 'heading', text: 'The Button Element' },
      { type: 'p', html: '<code>&lt;button&gt;</code> creates a clickable button. Inside a form, its default <code>type</code> is <code>submit</code>, but the type can be set explicitly to <code>submit</code>, <code>reset</code>, or <code>button</code>.' },
      {
        type: 'example', label: 'Use button types',
        code: `<form action="/submit" method="post">
  <input type="text" name="text">
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
  <button type="button">JavaScript action</button>
</form>`
      },
      { type: 'heading', text: 'The Datalist Element' },
      { type: 'p', html: '<code>&lt;datalist&gt;</code> supplies predefined suggestions for an input. The input\'s <code>list</code> attribute must match the datalist\'s <code>id</code>.' },
      {
        type: 'example', label: 'Provide input suggestions',
        code: `<label for="browser">Browser:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>`
      },
      { type: 'heading', text: 'The Output Element' },
      { type: 'p', html: '<code>&lt;output&gt;</code> represents the result of a calculation or another form of output. The <code>for</code> attribute lists the ids of controls that contribute to the result.' },
      {
        type: 'example', label: 'Display a calculated result',
        code: `<form oninput="total.value = price.value * quantity.value">
  <label>Price <input type="number" id="price" name="price" value="5"></label>
  <label>Quantity <input type="number" id="quantity" name="quantity" value="2"></label>
  <p>Total: <output name="total" for="price quantity"></output></p>
  <button type="submit">Send order</button>
</form>`
      },
      { type: 'note', label: 'Calculated values', html: 'An output element displays a result; it is not a general-purpose container for arbitrary page content.' },
      { type: 'heading', text: 'HTML Form Elements Reference' },
      {
        type: 'table',
        head: ['Element', 'Purpose'],
        rows: [
          ['<code>&lt;form&gt;</code>', 'Groups controls for user input.'],
          ['<code>&lt;input&gt;</code>', 'Creates a form control.'],
          ['<code>&lt;label&gt;</code>', 'Provides an accessible description for a control.'],
          ['<code>&lt;fieldset&gt;</code>', 'Groups related controls.'],
          ['<code>&lt;legend&gt;</code>', 'Captions a fieldset.'],
          ['<code>&lt;select&gt;</code>', 'Creates a drop-down list.'],
          ['<code>&lt;optgroup&gt;</code>', 'Groups related options.'],
          ['<code>&lt;option&gt;</code>', 'Defines a choice in a select or datalist.'],
          ['<code>&lt;textarea&gt;</code>', 'Creates a multiline text control.'],
          ['<code>&lt;button&gt;</code>', 'Creates a clickable button.'],
          ['<code>&lt;datalist&gt;</code>', 'Provides predefined input options.'],
          ['<code>&lt;output&gt;</code>', 'Displays a calculated result.']
        ]
      },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a booking form with a text input, a select list containing an optgroup, a textarea, a datalist suggestion, a fieldset with a legend, and submit and reset buttons. Connect every visible control to a label or provide an accessible label.',
        starter: `<form action="/booking" method="post">
  <!-- Add the form elements -->
</form>`,
        solution: `<form action="/booking" method="post">
  <label for="guest">Guest name:</label>
  <input type="text" id="guest" name="guest" list="guest-suggestions">
  <datalist id="guest-suggestions">
    <option value="Alex">
    <option value="Sam">
  </datalist>

  <label for="room">Room:</label>
  <select id="room" name="room">
    <optgroup label="Standard">
      <option value="single">Single</option>
      <option value="double">Double</option>
    </optgroup>
  </select>

  <label for="requests">Special requests:</label>
  <textarea id="requests" name="requests" rows="4"></textarea>

  <fieldset>
    <legend>Breakfast</legend>
    <label><input type="radio" name="breakfast" value="yes"> Yes</label>
    <label><input type="radio" name="breakfast" value="no"> No</label>
  </fieldset>

  <button type="submit">Book</button>
  <button type="reset">Reset</button>
</form>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which element creates a multiline text control?', options: ['<code>textarea</code>', '<code>output</code>', '<code>legend</code>', '<code>optgroup</code>'], answer: 0, explanation: 'The textarea element accepts multiline text and requires a closing tag.' },
          { question: 'What is the relationship between a datalist id and an input list attribute?', options: ['They match so the input can use the suggestions', 'The id must be a submit button name', 'The list attribute hides the input', 'They define a CSS color pair'], answer: 0, explanation: 'The input list value references the id of its datalist.' },
          { question: 'Which element provides a caption for a fieldset?', options: ['<code>legend</code>', '<code>option</code>', '<code>output</code>', '<code>label</code>'], answer: 0, explanation: 'A legend describes the related group of controls inside a fieldset.' },
          { question: 'Which element represents a calculated result?', options: ['<code>output</code>', '<code>input</code>', '<code>select</code>', '<code>form</code>'], answer: 0, explanation: 'The output element represents a result such as a calculation.' },
          { question: 'What does a button with type="button" do inside a form?', options: ['It is a non-submit action intended for scripts', 'It always submits the form', 'It resets every field', 'It creates a select list'], answer: 0, explanation: 'type="button" prevents normal form submission and is used for scripted actions.' }
        ]
      }
    ]
  },
  {
    id: 'html-input-types',
    title: 'HTML Input Types',
    subtitle: 'Choose the right control for text, choices, dates, files & actions',
    status: 'ready',
    navSection: 'HTML Forms',
    source: {
      label: 'W3Schools · HTML Input Types',
      url: 'https://www.w3schools.com/html/html_form_input_types.asp'
    },
    blocks: [
      { type: 'p', html: 'The <code>type</code> attribute on <code>&lt;input&gt;</code> tells the browser what kind of value a control should collect. The browser can then provide suitable keyboard hints, validation, and interface behavior.' },
      { type: 'note', label: 'Default type', html: 'When no type is provided, <code>&lt;input&gt;</code> behaves as <code>type="text"</code>.' },

      { type: 'heading', text: 'Text and Contact Inputs' },
      { type: 'p', html: '<strong>text</strong> accepts a single line of text. <strong>password</strong> accepts a secret but visually masks its value. <strong>email</strong>, <strong>tel</strong>, and <strong>url</strong> express the expected format and can prompt suitable mobile keyboards.' },
      { type: 'list', items: [
        '<code>text</code> — a single-line text value.',
        '<code>password</code> — a masked value intended for authentication data.',
        '<code>email</code> — an email address.',
        '<code>tel</code> — a telephone number.',
        '<code>url</code> — an absolute URL.',
        '<code>search</code> — text intended for searching.'
      ] },
      {
        type: 'example', label: 'Text and contact controls',
        code: `<label for="search">Search:</label>
<input type="search" id="search" name="search">

<label for="email">Email:</label>
<input type="email" id="email" name="email">

<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">

<label for="website">Website:</label>
<input type="url" id="website" name="website">

<label for="password">Password:</label>
<input type="password" id="password" name="password">`
      },
      { type: 'note', label: 'Password caution', html: 'A password field only masks characters on screen. It does not encrypt the value; use HTTPS and never log passwords.' },

      { type: 'heading', text: 'Checkbox and Radio Inputs' },
      { type: 'p', html: '<strong>checkbox</strong> allows an independent on/off choice or multiple selections. Controls that submit related checkboxes can share a <code>name</code> and use different <code>value</code> attributes.' },
      {
        type: 'example', label: 'Checkboxes',
        code: `<label><input type="checkbox" name="hobby" value="coding"> Coding</label>
<label><input type="checkbox" name="hobby" value="music"> Music</label>`
      },
      { type: 'p', html: '<strong>radio</strong> allows one selection from a group. Radio buttons in the same group share the same <code>name</code> but have separate <code>id</code> values and labels.' },
      {
        type: 'example', label: 'One-choice radio group',
        code: `<label><input type="radio" name="plan" value="free"> Free</label>
<label><input type="radio" name="plan" value="pro"> Pro</label>`
      },
      { type: 'heading', text: 'Number, Range, and Color' },
      { type: 'p', html: '<strong>number</strong> accepts a numeric value and supports constraints such as <code>min</code>, <code>max</code>, and <code>step</code>. <strong>range</strong> chooses a value by moving a slider within a range. <strong>color</strong> opens a color picker.' },
      {
        type: 'example', label: 'Numeric and visual controls',
        code: `<label for="quantity">Quantity:</label>
<input type="number" id="quantity" name="quantity" min="1" max="10" value="1">

<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50">

<label for="color">Accent color:</label>
<input type="color" id="color" name="color" value="#e44d26">`
      },
      { type: 'note', label: 'Range visibility', html: 'A range input communicates its value with slider position, so pair it with a visible label and, when useful, a current value.' },
      { type: 'heading', text: 'Date and Time Inputs' },
      { type: 'p', html: 'Date and time types let browsers render specialized pickers. The available UI varies with browser support, but the submitted values follow standardized formats.' },
      { type: 'list', items: [
        '<code>date</code> — a date with no time.',
        '<code>datetime-local</code> — a date and time with no time-zone information.',
        '<code>month</code> — a month and year.',
        '<code>time</code> — a time with no date or time zone.',
        '<code>week</code> — a week and year.'
      ] },
      {
        type: 'example', label: 'Date and time controls',
        code: `<label for="date">Date:</label>
<input type="date" id="date" name="date">

<label for="appointment">Local appointment:</label>
<input type="datetime-local" id="appointment" name="appointment">

<label for="month">Billing month:</label>
<input type="month" id="month" name="month">

<label for="time">Time:</label>
<input type="time" id="time" name="time">

<label for="week">Delivery week:</label>
<input type="week" id="week" name="week">`
      },
      { type: 'note', label: 'No automatic time zone', html: 'The time and datetime-local types do not include time-zone information. Store or convert time zones separately when they matter.' },
      { type: 'heading', text: 'Hidden and File Inputs' },
      { type: 'p', html: '<strong>hidden</strong> creates a control that is not shown but can still submit a named value. <strong>file</strong> lets a user choose one or more local files for upload.' },
      {
        type: 'example', label: 'Hidden and file controls',
        code: `<!-- Visible, but still submitted with the form -->
<input type="hidden" name="form-version" value="2">

<label for="avatar">Avatar:</label>
<input type="file" id="avatar" name="avatar" accept="image/*">

<label for="documents">Documents:</label>
<input type="file" id="documents" name="documents" multiple>`
      },
      { type: 'note', label: 'Hidden is not secret', html: 'A hidden value can be viewed or changed by the user. Never use hidden fields for passwords, permissions, or other security decisions.' },
      { type: 'note', label: 'File uploads', html: 'The server must validate uploaded files, limit their size and type, and store them safely. The file input does not do that automatically.' },
      { type: 'heading', text: 'Image Submit Input' },
      { type: 'p', html: '<strong>image</strong> creates an image that acts as a submit button. The <code>src</code> identifies the image, and alternative text should describe the action.' },
      {
        type: 'example', label: 'Use an image as the submit button',
        code: `<form action="/search" method="get">
  <input type="search" name="query" aria-label="Search query">
  <input type="image" src="/images/search.png" alt="Submit search">
</form>`
      },
      { type: 'heading', text: 'Button, Submit, and Reset Inputs' },
      { type: 'p', html: '<strong>button</strong> is a clickable non-submit control, normally used with JavaScript. <strong>submit</strong> submits the form. <strong>reset</strong> restores the form controls to their default values.' },
      {
        type: 'example', label: 'Form action controls',
        code: `<form onsubmit="return false">
  <input type="text" name="text" value="Default value">
  <input type="button" value="JavaScript action">
  <input type="reset" value="Reset">
  <input type="submit" value="Submit">
</form>`
      },
      { type: 'note', label: 'Button purpose', html: 'Use <code>type="button"</code> for actions that should not submit. Ordinary submit controls should use <code>type="submit"</code>.' },
      { type: 'heading', text: 'All HTML Input Types' },
      {
        type: 'table',
        head: ['Type', 'Purpose'],
        rows: [
          ['<code>button</code>', 'A clickable non-submit button for scripted actions.'],
          ['<code>checkbox</code>', 'An independent on/off choice or multiple selection.'],
          ['<code>color</code>', 'A color selected with a color picker.'],
          ['<code>date</code>', 'A date with no time.'],
          ['<code>datetime-local</code>', 'A local date and time with no time zone.'],
          ['<code>email</code>', 'An email address.'],
          ['<code>file</code>', 'One or more files selected for upload.'],
          ['<code>hidden</code>', 'A named value submitted without being displayed.'],
          ['<code>image</code>', 'An image used as a submit button.'],
          ['<code>month</code>', 'A month and year.'],
          ['<code>number</code>', 'A numeric value with optional limits and steps.'],
          ['<code>password</code>', 'A visually masked value for sensitive input.'],
          ['<code>radio</code>', 'One choice from a named group.'],
          ['<code>range</code>', 'A value selected with a slider.'],
          ['<code>reset</code>', 'Restores a form to its default values.'],
          ['<code>search</code>', 'Text intended for searching.'],
          ['<code>submit</code>', 'Submits the form.'],
          ['<code>tel</code>', 'A telephone number.'],
          ['<code>text</code>', 'A single line of text; the default input type.'],
          ['<code>time</code>', 'A time with no date or time zone.'],
          ['<code>url</code>', 'An absolute URL.'],
          ['<code>week</code>', 'A week and year.']
        ]
      },
      { type: 'heading', text: 'The Input Type Attribute' },
      { type: 'p', html: 'Write the type as a keyword: <code>&lt;input type="email"&gt;</code>. The value is case-insensitive in HTML, but lowercase is the standard convention.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a preferences form using at least eight different input types. Include text/email, a checkbox, a radio group, a number or range, a date, a color, and a file input. Give every control a label and a name.',
        starter: `<form action="/preferences" method="post">
  <!-- Add at least eight input types -->
  <button type="submit">Save preferences</button>
</form>`,
        solution: `<form action="/preferences" method="post">
  <label for="name">Name: <input type="text" id="name" name="name"></label>
  <label for="email">Email: <input type="email" id="email" name="email"></label>
  <label for="birthday">Birthday: <input type="date" id="birthday" name="birthday"></label>
  <label for="volume">Volume: <input type="range" id="volume" name="volume" min="0" max="100"></label>
  <label for="accent">Accent: <input type="color" id="accent" name="accent"></label>
  <label for="avatar">Avatar: <input type="file" id="avatar" name="avatar" accept="image/*"></label>
  <label><input type="checkbox" name="updates" value="yes"> Send updates</label>
  <label><input type="radio" name="theme" value="light"> Light</label>
  <label><input type="radio" name="theme" value="dark"> Dark</label>
  <button type="submit">Save preferences</button>
</form>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which type should collect a single-line search query?', options: ['<code>search</code>', '<code>color</code>', '<code>file</code>', '<code>hidden</code>'], answer: 0, explanation: 'The search type represents text intended for searching.' },
          { question: 'Which type allows only one selection within a named group?', options: ['<code>radio</code>', '<code>checkbox</code>', '<code>range</code>', '<code>image</code>'], answer: 0, explanation: 'Radio inputs sharing a name behave as a single-choice group.' },
          { question: 'Which type does not include time-zone information?', options: ['<code>datetime-local</code>', '<code>text</code>', '<code>password</code>', '<code>file</code>'], answer: 0, explanation: 'datetime-local stores a local date and time without time-zone information.' },
          { question: 'Which input type is not a secret security mechanism?', options: ['<code>hidden</code>', '<code>password</code>', '<code>checkbox</code>', '<code>submit</code>'], answer: 0, explanation: 'Hidden values remain visible and editable in page source or developer tools.' },
          { question: 'What does <code>type="reset"</code> do?', options: ['Restores the form default values', 'Submits the form to a server', 'Selects a file', 'Opens a color picker'], answer: 0, explanation: 'A reset control restores the form controls to their initial values.' },
          { question: 'What is the default input type when type is omitted?', options: ['<code>text</code>', '<code>hidden</code>', '<code>button</code>', '<code>range</code>'], answer: 0, explanation: 'An input without a type behaves as a text input.' }
        ]
      }
    ]
  },
  {
    id: 'html-input-attributes',
    title: 'HTML Input Attributes',
    subtitle: 'Configure values, limits, validation, files & suggestions',
    status: 'ready',
    navSection: 'HTML Forms',
    source: {
      label: 'W3Schools · HTML Form Input Attributes',
      url: 'https://www.w3schools.com/html/html_form_attributes.asp'
    },
    blocks: [
      { type: 'p', html: 'Input attributes customize an <code>&lt;input&gt;</code> control: its initial value, accepted length or range, validation, file restrictions, user interaction, and relationship to other elements.' },
      { type: 'heading', text: 'The value Attribute' },
      { type: 'p', html: '<code>value</code> sets the control\'s initial value. It is commonly used with text-like inputs and can also provide the starting value for number, range, date, time, color, and file-related controls.' },
      {
        type: 'example', label: 'Set initial values',
        code: `<input type="text" name="username" value="Alex">
<input type="number" name="quantity" value="2">
<input type="date" name="start" value="2026-09-25">`
      },
      { type: 'note', label: 'Placeholder is not a value', html: 'A placeholder is only temporary guidance. Use <code>value</code> when the field should begin with an actual value.' },

      { type: 'heading', text: 'The readonly Attribute' },
      { type: 'p', html: '<code>readonly</code> makes a control focusable and readable but prevents the user from changing its value. A readonly field can still be submitted.' },
      {
        type: 'example', label: 'Read-only reference code',
        code: `<label for="order-id">Order ID:</label>
<input type="text" id="order-id" name="order-id" value="A-1042" readonly>`
      },

      { type: 'heading', text: 'The disabled Attribute' },
      { type: 'p', html: '<code>disabled</code> makes a control non-interactive and removes it from successful form submission. Users cannot focus or change it.' },
      {
        type: 'example', label: 'Disable a field',
        code: `<label for="account">Account:</label>
<input type="text" id="account" name="account" value="Locked account" disabled>`
      },
      { type: 'note', label: 'Readonly vs disabled', html: 'A disabled control is skipped by keyboard navigation and is not submitted with ordinary form data. A readonly control remains focusable and can be submitted.' },

      { type: 'heading', text: 'The size Attribute' },
      { type: 'p', html: '<code>size</code> sets the visible width of a text-like input in characters. It changes presentation but does not impose a submission limit.' },
      {
        type: 'example', label: 'Control visible width',
        code: `<label for="short-code">Short code:</label>
<input type="text" id="short-code" name="code" size="8" maxlength="8">`
      },
      { type: 'heading', text: 'The maxlength and minlength Attributes' },
      { type: 'p', html: '<code>maxlength</code> limits how many characters a user can enter. <code>minlength</code> sets the minimum number of characters required for a text-like field. Both perform client-side constraint validation.' },
      {
        type: 'example', label: 'Set text length constraints',
        code: `<label for="username">Username (3–20 characters):</label>
<input type="text" id="username" name="username" minlength="3" maxlength="20" required>`
      },
      { type: 'note', label: 'Server validation still matters', html: 'A user can bypass client-side restrictions. The server must validate length and content again.' },
      { type: 'heading', text: 'The min and max Attributes' },
      { type: 'p', html: '<code>min</code> and <code>max</code> define the lower and upper boundaries for numeric, date, time, month, week, and range controls.' },
      {
        type: 'example', label: 'Set numeric and date limits',
        code: `<label for="age">Age (1–120):</label>
<input type="number" id="age" name="age" min="1" max="120">

<label for="event-date">Event date (2026–2030):</label>
<input type="date" id="event-date" name="event-date" min="2026-01-01" max="2030-12-31">`
      },
      { type: 'heading', text: 'The step Attribute' },
      { type: 'p', html: '<code>step</code> sets the permitted interval between valid values. For numeric controls it can be a number, and for date/time controls it can use units such as days, months, or seconds.' },
      {
        type: 'example', label: 'Use allowed intervals',
        code: `<label for="quantity">Quantity:</label>
<input type="number" id="quantity" name="quantity" min="1" max="9" step="2" value="1">

<label for="meeting-time">Meeting time:</label>
<input type="time" id="meeting-time" name="meeting-time" min="09:00" max="17:00" step="900">`
      },
      { type: 'heading', text: 'The accept Attribute' },
      { type: 'p', html: '<code>accept</code> filters the file picker for a file input. It can contain file extensions, MIME types, or both.' },
      {
        type: 'example', label: 'Restrict selected files',
        code: `<label for="resume">Resume (PDF or DOCX):</label>
<input type="file" id="resume" name="resume" accept=".pdf,.docx,application/pdf">

<label for="photo">Photo:</label>
<input type="file" id="photo" name="photo" accept="image/*">`
      },
      { type: 'note', label: 'Not a security boundary', html: 'The accept attribute helps the user choose a suitable file, but the server must still inspect uploads and enforce safe file rules.' },
      { type: 'heading', text: 'The multiple Attribute' },
      { type: 'p', html: '<code>multiple</code> lets a file input accept more than one file. Each selected file is submitted under the same input name.' },
      {
        type: 'example', label: 'Choose several files',
        code: `<label for="photos">Photos:</label>
<input type="file" id="photos" name="photos" accept="image/*" multiple>`
      },
      { type: 'heading', text: 'The pattern Attribute' },
      { type: 'p', html: '<code>pattern</code> defines a regular expression that a text-like input value must match. It is useful for formats such as reference numbers and postal codes.' },
      {
        type: 'example', label: 'Validate a reference format',
        code: `<label for="ticket">Ticket number (ABC-1234):</label>
<input type="text" id="ticket" name="ticket" pattern="[A-Z]{3}-[0-9]{4}" required>`
      },
      { type: 'heading', text: 'The required Attribute' },
      { type: 'p', html: '<code>required</code> tells the browser not to submit the form until the control has a valid value.' },
      {
        type: 'example', label: 'Require a value',
        code: `<label for="email">Email:</label>
<input type="email" id="email" name="email" required>`
      },
      { type: 'heading', text: 'The placeholder Attribute' },
      { type: 'p', html: '<code>placeholder</code> provides short example or guidance text inside an empty control. It disappears when the user enters a value.' },
      {
        type: 'example', label: 'Show temporary guidance',
        code: `<label for="code">Promo code:</label>
<input type="text" id="code" name="code" placeholder="Example: SAVE20">`
      },
      { type: 'note', label: 'Accessibility tip', html: 'Do not use placeholder text as a replacement for a label; placeholders can disappear and are not a reliable accessible name.' },
      { type: 'heading', text: 'The autofocus Attribute' },
      { type: 'p', html: '<code>autofocus</code> asks the browser to focus the input when the page opens. Use it only when focusing that control immediately is genuinely helpful.' },
      {
        type: 'example', label: 'Focus a search field',
        code: `<label for="query">Search:</label>
<input type="search" id="query" name="query" autofocus>`
      },
      { type: 'note', label: 'Use carefully', html: 'Unexpected automatic focus can interrupt keyboard and screen-reader users. Avoid autofocus on important consent, payment, or error controls.' },
      { type: 'heading', text: 'The form Attribute' },
      { type: 'p', html: '<code>form</code> associates an input with a form by matching the form\'s <code>id</code>, even when the input is not a descendant of that form.' },
      {
        type: 'example', label: 'Associate an external control',
        code: `<form id="newsletter" action="/subscribe" method="post">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>

<input type="email" name="alternate-email" form="newsletter" placeholder="Alternate email">`
      },
      { type: 'heading', text: 'The list Attribute' },
      { type: 'p', html: '<code>list</code> references a datalist by id. The referenced datalist supplies suggested values for the input.' },
      {
        type: 'example', label: 'Reference a datalist',
        code: `<label for="browser">Browser:</label>
<input type="text" id="browser" name="browser" list="browsers">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>`
      },
      { type: 'heading', text: 'The autocomplete Attribute' },
      { type: 'p', html: '<code>autocomplete</code> tells the browser whether it may predict and offer values for a form or input. The page or field can use <code>on</code> or <code>off</code>.' },
      {
        type: 'example', label: 'Enable and disable autocomplete',
        code: `<form action="/profile" autocomplete="on">
  <input type="text" name="first-name">
  <input type="email" name="email">
  <input type="text" name="one-time-code" autocomplete="off">
  <button type="submit">Save</button>
</form>`
      },
      { type: 'note', label: 'Browser setting', html: 'Some browsers let users control or disable autocomplete in their preferences.' },
      { type: 'heading', text: 'Input Attribute Reference' },
      {
        type: 'table',
        head: ['Attribute', 'Purpose'],
        rows: [
          ['<code>accept</code>', 'File types suggested or accepted by the file picker.'],
          ['<code>autocomplete</code>', 'Controls browser prediction of field values.'],
          ['<code>autofocus</code>', 'Focuses the control when the page opens.'],
          ['<code>disabled</code>', 'Disables interaction and normal submission.'],
          ['<code>form</code>', 'Associates the input with a form by id.'],
          ['<code>formaction</code>', 'Overrides a submit input\'s action URL.'],
          ['<code>formenctype</code>', 'Overrides the encoding used for submission.'],
          ['<code>formmethod</code>', 'Overrides the submission method.'],
          ['<code>formnovalidate</code>', 'Skips validation for this submit control.'],
          ['<code>formtarget</code>', 'Overrides where the response is displayed.'],
          ['<code>list</code>', 'References a datalist by id.'],
          ['<code>max</code>', 'Sets the maximum accepted value.'],
          ['<code>maxlength</code>', 'Limits the number of entered characters.'],
          ['<code>min</code>', 'Sets the minimum accepted value.'],
          ['<code>minlength</code>', 'Sets a minimum number of characters.'],
          ['<code>multiple</code>', 'Allows multiple files in a file input.'],
          ['<code>name</code>', 'Identifies the field in submitted data.'],
          ['<code>pattern</code>', 'Requires a value matching a regular expression.'],
          ['<code>placeholder</code>', 'Shows temporary guidance in an empty control.'],
          ['<code>readonly</code>', 'Prevents changes while keeping the field focusable.'],
          ['<code>required</code>', 'Requires a value before submission.'],
          ['<code>size</code>', 'Sets the visible width in characters.'],
          ['<code>src</code>', 'Specifies the image for an image submit input.'],
          ['<code>step</code>', 'Sets the interval between valid values.'],
          ['<code>value</code>', 'Sets the initial value.']
        ]
      },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a validated account form with a required username limited to 3–20 characters, a required email, a read-only account ID, a disabled country field, a number field with min/max, a file field with an accept hint, and a pattern-validated referral code.',
        starter: `<form action="/account" method="post">
  <!-- Add the input attributes -->
</form>`,
        solution: `<form action="/account" method="post">
  <label for="account-id">Account ID:</label>
  <input type="text" id="account-id" name="account-id" value="A-1042" readonly>

  <label for="country">Country:</label>
  <input type="text" id="country" name="country" value="India" disabled>

  <label for="new-username">Username (3–20):</label>
  <input type="text" id="new-username" name="new-username" minlength="3" maxlength="20" required>

  <label for="new-email">Email:</label>
  <input type="email" id="new-email" name="new-email" required>

  <label for="age">Age (1–120):</label>
  <input type="number" id="age" name="age" min="1" max="120">

  <label for="proof">Proof (PDF):</label>
  <input type="file" id="proof" name="proof" accept="application/pdf">

  <label for="referral">Referral (ABC-1234):</label>
  <input type="text" id="referral" name="referral" pattern="[A-Z]{3}-[0-9]{4}">
  <button type="submit">Save account</button>
</form>`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which attribute sets an input\'s initial value?', options: ['<code>value</code>', '<code>size</code>', '<code>list</code>', '<code>form</code>'], answer: 0, explanation: 'The value attribute provides the control\'s initial value.' },
          { question: 'What is the difference between readonly and disabled?', options: ['Readonly remains focusable and submit-capable; disabled is not interactive or normally submitted', 'Both make a field focusable', 'Disabled hides the field from screen readers', 'Readonly accepts only numbers'], answer: 0, explanation: 'Readonly preserves focus and submission, while disabled removes normal interaction and submission.' },
          { question: 'Which attribute sets the maximum number of characters?', options: ['<code>maxlength</code>', '<code>size</code>', '<code>min</code>', '<code>accept</code>'], answer: 0, explanation: 'maxlength limits the number of characters a user can enter.' },
          { question: 'Which attribute helps restrict a file picker, without replacing server validation?', options: ['<code>accept</code>', '<code>autofocus</code>', '<code>placeholder</code>', '<code>step</code>'], answer: 0, explanation: 'accept provides file-picker guidance; the server must still validate uploads.' },
          { question: 'What does <code>required</code> do?', options: ['Prevents submission until the field has a valid value', 'Focuses the field automatically', 'Makes the field read-only', 'Hides the field from the form'], answer: 0, explanation: 'The required attribute makes the control a constraint-validated part of submission.' },
          { question: 'Which attribute references a datalist?', options: ['<code>list</code>', '<code>size</code>', '<code>minlength</code>', '<code>multiple</code>'], answer: 0, explanation: 'The list attribute contains the id of the related datalist.' }
        ]
      }
    ]
  },
  {
    id: 'input-form-attributes',
    title: 'Input Form Attributes',
    subtitle: 'Associate inputs with forms and override submit behavior',
    status: 'ready',
    navSection: 'HTML Forms',
    source: {
      label: 'W3Schools · HTML Input form* Attributes',
      url: 'https://www.w3schools.com/html/html_form_attributes_form.asp'
    },
    blocks: [
      { type: 'p', html: 'Form-associated input attributes connect an <code>&lt;input&gt;</code> to a form or let one submit control override behavior inherited from its form. They are especially useful for external controls and forms with multiple submit actions.' },

      { type: 'heading', text: 'The form Attribute' },
      { type: 'p', html: 'The <code>form</code> attribute associates an input with a form by matching the form\'s <code>id</code>. The input does not need to be physically nested inside that form.' },
      {
        type: 'example', label: 'Associate an input outside the form',
        code: `<form id="contact-form" action="/contact" method="post">
  <input type="text" name="message">
  <button type="submit">Send</button>
</form>

<!-- This control is associated by id, not by position. -->
<input type="email" name="contact-email" form="contact-form">`
      },
      { type: 'note', label: 'Unique id required', html: 'The form id and input form value must match exactly for the browser to associate them.' },

      { type: 'heading', text: 'The formaction Attribute' },
      { type: 'p', html: '<code>formaction</code> overrides the action URL of the associated form for a particular submit control. It works with <code>type="submit"</code> and <code>type="image"</code>.' },
      {
        type: 'example', label: 'Send with different actions',
        code: `<form action="/save" method="post">
  <input type="text" name="document">
  <input type="submit" value="Save">
  <input type="submit" formaction="/publish" value="Save and publish">
</form>`
      },
      { type: 'heading', text: 'The formenctype Attribute' },
      { type: 'p', html: '<code>formenctype</code> overrides how form data is encoded for a particular submit control. It works with <code>type="submit"</code> and <code>type="image"</code>.' },
      {
        type: 'example', label: 'Override upload encoding',
        code: `<form action="/upload" method="post">
  <input type="file" name="attachment">
  <input type="submit" value="Upload normally">
  <input type="submit" formenctype="multipart/form-data" value="Upload file">
</form>`
      },
      { type: 'note', label: 'When it matters', html: 'formenctype is most commonly needed when a specific submit button must upload a file using multipart/form-data.' },
      { type: 'heading', text: 'The formmethod Attribute' },
      { type: 'p', html: '<code>formmethod</code> overrides the HTTP method for a particular submit control. It supports <code>get</code>, <code>post</code>, and <code>dialog</code>, and works with submit and image inputs.' },
      {
        type: 'example', label: 'Choose a submission method',
        code: `<form action="/documents" method="post">
  <input type="search" name="query">
  <input type="submit" value="Post search">
  <input type="submit" formmethod="get" value="Get search">
</form>`
      },
      { type: 'note', label: 'Sensitive data', html: 'Use POST rather than GET for sensitive or personal information because GET appends values to the URL.' },
      { type: 'heading', text: 'The formnovalidate Attribute' },
      { type: 'p', html: '<code>formnovalidate</code> tells the browser not to validate the form when that particular submit control is used. It works with <code>type="submit"</code>.' },
      {
        type: 'example', label: 'Submit with and without validation',
        code: `<form action="/feedback" novalidate>
  <label for="feedback-email">Email:</label>
  <input type="email" id="feedback-email" name="email" required>
  <input type="submit" value="Submit without validation">
  <input type="submit" formnovalidate value="Skip native validation">
</form>`
      },
      { type: 'note', label: 'Validation is still required', html: 'formnovalidate skips native browser constraints only. The server must still validate and sanitize submitted data.' },
      { type: 'heading', text: 'The formtarget Attribute' },
      { type: 'p', html: '<code>formtarget</code> overrides where a form response is displayed for a particular submit control. It works with submit and image inputs.' },
      {
        type: 'example', label: 'Open one response in a new tab',
        code: `<form action="/receipt" method="post" target="_self">
  <input type="text" name="order">
  <input type="submit" value="Show here">
  <input type="submit" formtarget="_blank" value="Open in a new tab">
</form>`
      },
      { type: 'note', label: 'Safer new tabs', html: 'When opening a new tab, consider <code>rel="noopener"</code> where supported to prevent the new page from accessing the opener.' },
      { type: 'heading', text: 'The Form-Level novalidate Attribute' },
      { type: 'p', html: 'The related <code>novalidate</code> attribute belongs on <code>&lt;form&gt;</code>. When present, it disables native browser validation for every submit path from that form.' },
      {
        type: 'example', label: 'Skip validation for an entire form',
        code: `<form action="/draft" method="post" novalidate>
  <label for="draft-email">Email:</label>
  <input type="email" id="draft-email" name="email" required>
  <button type="submit">Save incomplete draft</button>
</form>`
      },
      { type: 'table', head: ['Attribute', 'Placement and effect'], rows: [
        ['<code>novalidate</code>', 'On the form: skips native validation for submissions from that form.'],
        ['<code>formnovalidate</code>', 'On a submit input: skips native validation when that submit control is used.']
      ] },
      { type: 'heading', text: 'Input Form Attribute Reference' },
      {
        type: 'table',
        head: ['Attribute', 'Purpose', 'Supported input types'],
        rows: [
          ['<code>form</code>', 'Associates the input with a form by id.', 'All input types.'],
          ['<code>formaction</code>', 'Overrides the form action URL.', 'submit, image.'],
          ['<code>formenctype</code>', 'Overrides submission encoding.', 'submit, image.'],
          ['<code>formmethod</code>', 'Overrides the submission method.', 'submit, image.'],
          ['<code>formnovalidate</code>', 'Skips native validation for this submitter.', 'submit.'],
          ['<code>formtarget</code>', 'Overrides where the response is displayed.', 'submit, image.']
        ]
      },
      { type: 'note', label: 'Overrides are per control', html: 'If a submit input has a form* override, that value is used when the input submits the associated form.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a document form with a primary Save submit button and a Publish button that overrides the action, encoding, method, and target. Add a second submit control that skips native validation. Also place an email input outside the form and associate it with the form by id.',
        starter: `<form id="documents" action="/save" method="post" enctype="application/x-www-form-urlencoded">
  <!-- Add fields and submit controls -->
</form>`,
        solution: `<form id="documents" action="/save" method="post" enctype="application/x-www-form-urlencoded">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" required>

  <input type="submit" value="Save">
  <input type="submit" formaction="/publish" formmethod="post" formenctype="application/x-www-form-urlencoded" formtarget="_blank" value="Publish in a new tab">
  <input type="submit" formnovalidate value="Save incomplete draft">
</form>

<label for="editor-email">Editor email:</label>
<input type="email" id="editor-email" name="editor-email" form="documents">`
      },
      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which attribute associates an external input with a form?', options: ['<code>form</code>', '<code>formtarget</code>', '<code>formaction</code>', '<code>formenctype</code>'], answer: 0, explanation: 'The form attribute references the id of the associated form.' },
          { question: 'Which attribute overrides the destination URL for one submit input?', options: ['<code>formaction</code>', '<code>formmethod</code>', '<code>formtarget</code>', '<code>formnovalidate</code>'], answer: 0, explanation: 'formaction replaces the associated form action for that submitter.' },
          { question: 'Which attribute changes the encoding for a specific submit control?', options: ['<code>formenctype</code>', '<code>form</code>', '<code>formtarget</code>', '<code>novalidate</code>'], answer: 0, explanation: 'formenctype overrides the form encoding for submit or image inputs.' },
          { question: 'Where should formnovalidate be placed?', options: ['On a submit input', 'On a paragraph', 'Inside a datalist', 'On every output'], answer: 0, explanation: 'formnovalidate is an input attribute supported by submit controls.' },
          { question: 'Which attribute controls where the response opens for one submitter?', options: ['<code>formtarget</code>', '<code>formmethod</code>', '<code>form</code>', '<code>formaction</code>'], answer: 0, explanation: 'formtarget overrides the response browsing context.' }
        ]
      }
    ]
  },
  {
    id: 'html-canvas',
    title: 'HTML Canvas',
    subtitle: 'Draw graphics and animations with JavaScript',
    status: 'ready',
    navSection: 'HTML Graphics',
    source: {
      label: 'W3Schools · HTML Canvas',
      url: 'https://www.w3schools.com/html/html5_canvas.asp'
    },
    blocks: [
      { type: 'p', html: 'The HTML <code>&lt;canvas&gt;</code> element provides a fixed-size drawing surface. JavaScript uses a rendering context to draw shapes, text, images, and animations directly on that surface.' },
      { type: 'note', label: 'Canvas is not SVG', html: 'Canvas draws pixels through a scripting API. SVG describes graphics as markup elements. A canvas element itself does not contain the drawing commands; the visible graphics are created at runtime.' },

      { type: 'heading', text: 'Create a Canvas Element' },
      { type: 'p', html: 'Add a <code>&lt;canvas&gt;</code> to the page and optionally give it an <code>id</code>, <code>width</code>, and <code>height</code>. The width and height attributes define the bitmap drawing surface.' },
      {
        type: 'example', label: 'Create a drawing surface',
        code: `<canvas id="myCanvas" width="300" height="150">
  Your browser does not support the canvas element.
</canvas>`
      },
      { type: 'note', label: 'Fallback content', html: 'Text placed inside <code>&lt;canvas&gt;</code> is fallback content for browsers that do not support canvas. It is not drawn as visible content on a supported canvas.' },

      { type: 'heading', text: 'Get the Canvas Context' },
      { type: 'p', html: 'JavaScript finds the canvas with <code>document.getElementById()</code>, then calls <code>getContext("2d")</code> to obtain the two-dimensional drawing context.' },
      {
        type: 'example', label: 'Draw a filled rectangle',
        code: `<canvas id="myCanvas" width="300" height="150"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#e44d26";
  ctx.fillRect(20, 20, 180, 80);
</script>`
      },
      { type: 'note', label: 'Context check', html: '<code>getContext("2d")</code> can return <code>null</code> if a context cannot be created. Check the result before drawing if the code must degrade gracefully.' },

      { type: 'heading', text: 'Colors, Borders, and Transparency' },
      { type: 'p', html: 'Use <code>fillStyle</code> for the interior of shapes and <code>strokeStyle</code> for outlines. CSS color values work with canvas, including named colors, hexadecimal colors, <code>rgb()</code>, and <code>rgba()</code>.' },
      {
        type: 'example', label: 'Draw filled and stroked shapes',
        code: `<canvas id="myCanvas" width="320" height="170"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.fillStyle = "rgba(34, 197, 94, 0.55)";
  ctx.fillRect(25, 25, 120, 80);
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 5;
  ctx.strokeRect(25, 25, 120, 80);
  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(175, 25, 110, 80);
</script>`
      },
      { type: 'p', html: 'The fourth value in an <code>rgba()</code> color is alpha transparency from <code>0</code> (fully transparent) to <code>1</code> (fully opaque).' },

      { type: 'heading', text: 'Drawing Paths' },
      { type: 'p', html: 'A path describes connected lines and curves. Call <code>beginPath()</code>, add drawing commands such as <code>moveTo()</code>, <code>lineTo()</code>, and <code>arc()</code>, then render the finished path with <code>stroke()</code> or <code>fill()</code>.' },
      {
        type: 'example', label: 'Draw lines and an arc',
        code: `<canvas id="myCanvas" width="320" height="180"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(30, 40);
  ctx.lineTo(130, 130);
  ctx.lineTo(230, 40);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(260, 135, 25, 0, Math.PI);
  ctx.stroke();
</script>`
      },
      { type: 'note', label: 'Path state', html: '<code>fill()</code> and <code>stroke()</code> affect the current path. Call <code>beginPath()</code> before an unrelated shape so old path commands are not drawn again.' },

      { type: 'heading', text: 'Rectangles, Circles, and Common Shapes' },
      { type: 'p', html: 'Canvas provides convenience methods such as <code>fillRect()</code>, <code>strokeRect()</code>, and <code>clearRect()</code>. Circles and arcs are drawn with <code>arc()</code>, usually as part of a path.' },
      {
        type: 'table',
        head: ['Method', 'Purpose'],
        rows: [
          ['<code>fillRect(x, y, w, h)</code>', 'Fills a rectangle.'],
          ['<code>strokeRect(x, y, w, h)</code>', 'Draws a rectangle outline.'],
          ['<code>clearRect(x, y, w, h)</code>', 'Clears a rectangular region to transparent black.'],
          ['<code>arc(x, y, radius, start, end)</code>', 'Adds a circular arc to the current path.'],
          ['<code>fill()</code> / <code>stroke()</code>', 'Renders the interior or outline of the current path.']
        ]
      },

      { type: 'heading', text: 'Drawing Text on Canvas' },
      { type: 'p', html: 'Set <code>font</code>, <code>fillStyle</code>, or <code>strokeStyle</code>, then draw text with <code>fillText()</code> or <code>strokeText()</code>. The coordinates are the text baseline position.' },
      {
        type: 'example', label: 'Draw filled and outlined text',
        code: `<canvas id="myCanvas" width="360" height="180"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.font = "700 32px Arial";
  ctx.fillStyle = "#166534";
  ctx.fillText("Canvas", 25, 70);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#7c3aed";
  ctx.strokeText("Graphics", 25, 125);
</script>`
      },
      { type: 'heading', text: 'Gradients' },
      { type: 'p', html: 'Gradients act as fill or stroke styles. <code>createLinearGradient()</code> creates a straight transition between coordinates, while <code>createRadialGradient()</code> creates a circular transition from an inner circle to an outer circle.' },
      {
        type: 'example', label: 'Draw linear and radial gradients',
        code: `<canvas id="myCanvas" width="360" height="180"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  const linear = ctx.createLinearGradient(20, 0, 170, 0);
  linear.addColorStop(0, "#e44d26");
  linear.addColorStop(1, "#facc15");
  ctx.fillStyle = linear;
  ctx.fillRect(20, 30, 150, 110);

  const radial = ctx.createRadialGradient(275, 85, 5, 275, 85, 65);
  radial.addColorStop(0, "#22c55e");
  radial.addColorStop(1, "#0f766e");
  ctx.fillStyle = radial;
  ctx.fillRect(205, 30, 140, 110);
</script>`
      },

      { type: 'heading', text: 'Drawing Images' },
      { type: 'p', html: '<code>drawImage()</code> draws an image element, another canvas, or a video frame. The image must be loaded before drawing; otherwise its dimensions may be unavailable.' },
      {
        type: 'example', label: 'Draw a loaded image',
        code: `<canvas id="myCanvas" width="320" height="200"></canvas>
<script>
  const img = new Image();
  img.addEventListener("load", function () {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(img, 20, 20, 280, 160);
  });
  img.src = "https://www.w3schools.com/html/img_mountain.jpg";
</script>`
      },
      { type: 'note', label: 'Images and canvas size', html: 'The <code>width</code> and <code>height</code> attributes control the canvas bitmap size, not the final CSS display size. CSS can scale the canvas and may make its drawing appear stretched if the aspect ratio differs.' },
      { type: 'heading', text: 'Canvas Resize and Responsive Drawing' },
      { type: 'p', html: 'Changing a canvas width or height resets its drawing state and clears its pixels. For responsive work, measure the container, set the bitmap dimensions, and redraw whenever the size changes. Use the device pixel ratio when crisp high-density output is required.' },
      { type: 'note', label: 'High-DPI canvases', html: 'A common pattern multiplies CSS dimensions by <code>window.devicePixelRatio</code>, scales the context with <code>ctx.scale(ratio, ratio)</code>, and then draws using CSS pixel coordinates.' },
      {
        type: 'example', label: 'Redraw after a resize',
        code: `<canvas id="myCanvas" style="width:100%;max-width:500px" width="500" height="220"></canvas>
<script>
  function draw() {
    const canvas = document.getElementById("myCanvas");
    const displayWidth = Math.min(canvas.parentElement.clientWidth, 500);
    const displayHeight = Math.round(displayWidth * 220 / 500);
    canvas.width = displayWidth;
    canvas.height = displayHeight;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0f766e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "24px sans-serif";
    ctx.fillText("Canvas size: " + canvas.width + " × " + canvas.height, 25, 75);
  }
  draw();
  window.addEventListener("resize", draw);
</script>`
      },

      { type: 'heading', text: 'Animation Loop' },
      { type: 'p', html: 'Canvas uses immediate-mode drawing: changing the context changes pixels but does not create a new DOM element. For animation, update coordinates, clear and redraw the scene, then schedule the next frame with <code>requestAnimationFrame()</code>.' },
      { type: 'note', label: 'Respect reduced motion', html: 'Canvas animation is visual motion. For interfaces that support it, honor <code>prefers-reduced-motion</code> and avoid unnecessary continuous animation.' },
      {
        type: 'example', label: 'Animate a moving ball',
        code: `<canvas id="myCanvas" width="360" height="180"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  let x = 20;
  function frame() {
    ctx.clearRect(0, 0, 360, 180);
    ctx.beginPath();
    ctx.arc(x, 90, 16, 0, Math.PI * 2);
    ctx.fillStyle = "#e44d26";
    ctx.fill();
    x += 3;
    if (x > 344) x = 20;
    requestAnimationFrame(frame);
  }
  frame();
</script>`
      },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Create a canvas badge. Draw a colored card using rectangles and circles, add a two-color linear gradient background, write a short label with fillText, and include a small outlined shape. Keep a reference canvas and context variable so the drawing code is easy to find.',
        starter: `<canvas id="badge" width="360" height="180"></canvas>
<script>
  const canvas = document.getElementById("badge");
  const ctx = canvas.getContext("2d");
  // Draw the badge
</script>`,
        solution: `<canvas id="badge" width="360" height="180"></canvas>
<script>
  const canvas = document.getElementById("badge");
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 360, 180);
  gradient.addColorStop(0, "#7c3aed");
  gradient.addColorStop(1, "#0ea5e9");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 360, 180);

  ctx.beginPath();
  ctx.arc(58, 58, 22, 0, Math.PI * 2);
  ctx.fillStyle = "#facc15";
  ctx.fill();

  ctx.font = "700 28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("HTML", 100, 82);
  ctx.font = "16px sans-serif";
  ctx.fillText("Canvas Graphics", 100, 112);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.strokeRect(18, 18, 324, 144);
</script>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What does <code>getContext("2d")</code> return?', options: ['A 2D drawing context', 'A required <code>alt</code> value', 'A separate HTML document', 'A CSS stylesheet'], answer: 0, explanation: 'The method returns the object used to draw with the Canvas 2D API.' },
          { question: 'Which method fills the interior of the current path?', options: ['<code>fill()</code>', '<code>clearRect()</code>', '<code>getContext()</code>', '<code>drawImage()</code>'], answer: 0, explanation: 'fill() paints the interior of the current path with the current fill style.' },
          { question: 'What happens when a canvas width or height is changed?', options: ['The bitmap is cleared and drawing state resets', 'Existing pixels are permanently scaled', 'The canvas becomes an SVG', 'Only its border thickness changes'], answer: 0, explanation: 'Changing the bitmap dimensions clears the canvas and resets its rendering state.' },
          { question: 'Which API creates a straight color transition?', options: ['<code>createLinearGradient()</code>', '<code>strokeText()</code>', '<code>beginPath()</code>', '<code>moveTo()</code>'], answer: 0, explanation: 'createLinearGradient() defines a transition along a line between two coordinates.' },
          { question: 'Which method should schedule canvas animation frames?', options: ['<code>requestAnimationFrame()</code>', '<code>querySelector()</code>', '<code>setAttribute()</code>', '<code>getElementById()</code>'], answer: 0, explanation: 'requestAnimationFrame() schedules a callback for the browser’s next display refresh.' }
        ]
      }
    ]
  },
  {
    id: 'html-svg',
    title: 'HTML SVG',
    subtitle: 'Create scalable vector graphics with XML markup',
    status: 'ready',
    navSection: 'HTML Graphics',
    source: {
      label: 'W3Schools · HTML SVG',
      url: 'https://www.w3schools.com/html/html5_svg.asp'
    },
    blocks: [
      { type: 'p', html: 'SVG (Scalable Vector Graphics) is an XML-based language for describing two-dimensional graphics. Vector shapes scale without losing quality, and each SVG element remains available in the document object model.' },
      { type: 'note', label: 'SVG and Canvas', html: 'SVG describes graphics as elements and attributes. Canvas draws pixels through JavaScript. SVG is often a strong choice for interfaces, diagrams, icons, and illustrations because its shapes remain addressable and scalable.' },

      { type: 'heading', text: 'Create an Inline SVG' },
      { type: 'p', html: 'Place an <code>&lt;svg&gt;</code> element directly in HTML. The <code>xmlns</code> attribute identifies the SVG namespace, while <code>width</code> and <code>height</code> define its displayed dimensions.' },
      {
        type: 'example', label: 'Draw a circle with inline SVG',
        code: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140">
  <circle cx="110" cy="70" r="55" fill="#e44d26" />
</svg>`
      },
      { type: 'note', label: 'SVG uses XML syntax', html: 'SVG element and attribute names are case-sensitive, such as <code>viewBox</code> and <code>linearGradient</code>. Self-closing syntax such as <code>&lt;circle ... /&gt;</code> is valid when there is no separate closing tag.' },

      { type: 'heading', text: 'The viewBox Attribute' },
      { type: 'p', html: 'The <code>viewBox</code> defines the SVG coordinate system with four values: minimum x, minimum y, width, and height. The browser maps that rectangle onto the element\'s displayed size.' },
      {
        type: 'example', label: 'Scale the same drawing responsively',
        code: `<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 200 120" width="100%" style="max-width:420px">
  <rect x="10" y="10" width="180" height="100" rx="16"
        fill="#dbeafe" stroke="#2563eb" stroke-width="5" />
  <text x="100" y="68" text-anchor="middle"
        font-family="sans-serif" font-size="24" fill="#1e3a8a">Responsive SVG</text>
</svg>`
      },
      { type: 'note', label: 'Keep the aspect ratio', html: 'When width and height use the same proportions as the viewBox, the drawing scales without distortion. CSS can control the rendered size while the viewBox preserves the internal coordinate system.' },

      { type: 'heading', text: 'Basic SVG Shapes' },
      { type: 'p', html: 'SVG provides elements for common geometry. Position attributes place each shape in the SVG coordinate system.' },
      {
        type: 'table',
        head: ['Element', 'Main attributes', 'Purpose'],
        rows: [
          ['<code>&lt;rect&gt;</code>', 'x, y, width, height, rx', 'Rectangle with optional rounded corners.'],
          ['<code>&lt;circle&gt;</code>', 'cx, cy, r', 'Circle centered at cx and cy.'],
          ['<code>&lt;ellipse&gt;</code>', 'cx, cy, rx, ry', 'Ellipse with independent radii.'],
          ['<code>&lt;line&gt;</code>', 'x1, y1, x2, y2', 'Straight line segment.'],
          ['<code>&lt;polyline&gt;</code>', 'points', 'Open connected series of lines.'],
          ['<code>&lt;polygon&gt;</code>', 'points', 'Closed shape made from line segments.']
        ]
      },
      {
        type: 'example', label: 'Combine basic shapes',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 190" width="100%">
  <rect x="15" y="20" width="140" height="90" rx="14" fill="#0ea5e9" />
  <circle cx="250" cy="65" r="43" fill="#f59e0b" />
  <ellipse cx="95" cy="150" rx="55" ry="25" fill="#8b5cf6" />
  <line x1="170" y1="120" x2="330" y2="165" stroke="#334155" stroke-width="6" />
</svg>`
      },

      { type: 'heading', text: 'Fill, Stroke, and Style' },
      { type: 'p', html: 'The <code>fill</code> property paints a shape\'s interior, while <code>stroke</code> paints its outline. <code>stroke-width</code>, opacity, and CSS styles control the appearance.' },
      {
        type: 'example', label: 'Style SVG with CSS',
        code: `<style>
  .tile { fill: #f8fafc; stroke: #475569; stroke-width: 4; }
  .accent { fill: #dc2626; }
</style>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" width="100%">
  <rect class="tile" x="15" y="15" width="270" height="120" rx="18" />
  <circle class="accent" cx="150" cy="75" r="38" />
</svg>`
      },
      { type: 'note', label: 'Presentation attributes and CSS', html: 'SVG supports presentation attributes such as <code>fill="red"</code> and CSS rules such as <code>.shape { fill: red; }</code>. CSS is especially useful for reusable styles, responsive changes, and interaction states.' },
      { type: 'heading', text: 'Polyline and Polygon' },
      { type: 'p', html: 'A <code>&lt;polyline&gt;</code> connects a list of coordinate pairs with open line segments. A <code>&lt;polygon&gt;</code> uses the same points syntax but automatically closes the path.' },
      {
        type: 'example', label: 'Draw an open path and closed shape',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 180" width="100%">
  <polyline points="20,140 75,80 130,120 190,45"
            fill="none" stroke="#2563eb" stroke-width="7"
            stroke-linecap="round" stroke-linejoin="round" />
  <polygon points="225,45 320,45 300,140 245,140"
           fill="#f59e0b" stroke="#92400e" stroke-width="4" />
</svg>`
      },

      { type: 'heading', text: 'Drawing Text' },
      { type: 'p', html: 'The <code>&lt;text&gt;</code> element places real text in an SVG. Its <code>x</code> and <code>y</code> attributes position the text, while attributes or CSS set the font, size, fill, and alignment.' },
      {
        type: 'example', label: 'Style SVG text',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 150" width="100%">
  <rect x="10" y="10" width="340" height="130" rx="18" fill="#0f172a" />
  <text x="180" y="70" text-anchor="middle"
        font-family="Verdana, sans-serif" font-size="32"
        font-weight="700" fill="#f8fafc">Vector Text</text>
  <text x="180" y="105" text-anchor="middle"
        font-family="sans-serif" font-size="16" fill="#67e8f9">stays sharp at every size</text>
</svg>`
      },
      { type: 'note', label: 'Text alternatives', html: 'SVG text can be selected and styled, but meaningful graphics still need an accessible name. Add <code>&lt;title&gt;</code> and, for meaningful standalone graphics, an appropriate <code>role</code> and <code>aria-label</code> or surrounding text alternative.' },

      { type: 'heading', text: 'Paths' },
      { type: 'p', html: 'A <code>&lt;path&gt;</code> can draw complex outlines. Its <code>d</code> attribute contains command letters and coordinates. Important commands include <code>M</code> for move, <code>L</code> for line, <code>H</code>/<code>V</code> for horizontal/vertical lines, <code>C</code> for cubic curves, and <code>Z</code> to close.' },
      {
        type: 'example', label: 'Draw a custom path',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 190" width="100%">
  <path d="M 30 150 C 90 20, 180 180, 330 45"
        fill="none" stroke="#7c3aed" stroke-width="8"
        stroke-linecap="round" />
  <circle cx="30" cy="150" r="8" fill="#7c3aed" />
  <circle cx="330" cy="45" r="8" fill="#7c3aed" />
</svg>`
      },
      { type: 'heading', text: 'Gradients' },
      { type: 'p', html: 'Define gradients inside <code>&lt;defs&gt;</code>, give each one an <code>id</code>, add color stops, then reference it with <code>fill="url(#id)"</code>. <code>linearGradient</code> transitions along a line; <code>radialGradient</code> transitions from an inner circle to an outer circle.' },
      {
        type: 'example', label: 'Apply linear and radial gradients',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 180" width="100%">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>
    <radialGradient id="sun">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#f97316" />
    </radialGradient>
  </defs>
  <rect x="12" y="12" width="190" height="156" rx="16" fill="url(#sky)" />
  <circle cx="280" cy="90" r="62" fill="url(#sun)" />
</svg>`
      },
      { type: 'note', label: 'Reuse definitions', html: 'Definitions in <code>&lt;defs&gt;</code> are not painted directly. Elements reference them with a fragment URL such as <code>url(#sky)</code>, allowing one gradient or symbol to be reused.' },

      { type: 'heading', text: 'Transforms' },
      { type: 'p', html: 'A <code>transform</code> attribute changes an element\'s coordinate system. Common functions include <code>translate(x y)</code>, <code>scale(value)</code>, <code>rotate(angle cx cy)</code>, and <code>skewX()</code>/<code>skewY()</code>.' },
      {
        type: 'example', label: 'Translate, rotate, and scale shapes',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 180" width="100%">
  <rect x="25" y="55" width="80" height="55" rx="8" fill="#0ea5e9" />
  <rect x="140" y="55" width="80" height="55" rx="8" fill="#8b5cf6"
        transform="rotate(18 180 82)" />
  <circle cx="300" cy="82" r="34" fill="#f59e0b" transform="scale(1.25)" />
</svg>`
      },
      { type: 'note', label: 'Transform origin', html: 'Rotation and scaling occur around a shape\'s local origin unless an origin is supplied. A value such as <code>rotate(18 180 82)</code> rotates around the point (180, 82), which is often the shape\'s center.' },

      { type: 'heading', text: 'Reuse with Symbols and use' },
      { type: 'p', html: 'Place reusable graphics in <code>&lt;symbol&gt;</code> inside <code>&lt;defs&gt;</code>, then insert instances with <code>&lt;use&gt;</code>. The <code>href</code> value points to the symbol id.' },
      {
        type: 'example', label: 'Reuse a symbol',
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 150" width="100%">
  <defs>
    <symbol id="star" viewBox="0 0 100 100">
      <polygon points="50,5 61,38 96,38 68,59 79,94 50,73 21,94 32,59 4,38 39,38"
               fill="#facc15" stroke="#a16207" stroke-width="5" />
    </symbol>
  </defs>
  <use href="#star" x="25" y="15" width="110" height="110" />
  <use href="#star" x="205" y="15" width="110" height="110" />
</svg>`
      },
      { type: 'heading', text: 'Accessibility' },
      { type: 'p', html: 'SVG graphics need names and interaction behavior that assistive technology can understand. For meaningful graphics, provide a concise accessible name. If the graphic repeats nearby visible information and adds no new meaning, it may be hidden from the accessibility tree.' },
      {
        type: 'example', label: 'Name a meaningful SVG graphic',
        code: `<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 240 130" width="100%" role="img" aria-labelledby="chart-title chart-desc">
  <title id="chart-title">Sales increased by 20 percent</title>
  <desc id="chart-desc">A bar chart comparing January sales of 50 with March sales of 60.</desc>
  <rect x="30" y="65" width="55" height="45" fill="#2563eb" />
  <rect x="145" y="45" width="55" height="65" fill="#16a34a" />
  <line x1="20" y1="112" x2="220" y2="112" stroke="#0f172a" stroke-width="3" />
</svg>`
      },
      { type: 'list', items: [
        'Give meaningful standalone graphics an accessible name with <code>aria-label</code> or <code>aria-labelledby</code>.',
        'Use <code>&lt;title&gt;</code> as the first child of an SVG and connect it with <code>aria-labelledby</code>.',
        'Use <code>&lt;desc&gt;</code> for a longer description when the visual conveys information a short label cannot capture.',
        'If an SVG is decorative and the surrounding content already conveys the same meaning, use <code>aria-hidden="true"</code> and <code>focusable="false"</code>.'
      ] },
      { type: 'note', label: 'Do not rely on the title attribute alone', html: 'A browser tooltip is not a dependable accessible name. Use SVG/ARIA semantics, nearby text, or a proper text alternative for important information.' },

      { type: 'heading', text: 'JavaScript and Inline SVG' },
      { type: 'p', html: 'Because inline SVG elements are part of the DOM, JavaScript can select them, add event listeners, and change attributes. Updating a shape\'s attribute lets the browser rerender that object.' },
      {
        type: 'example', label: 'Change an SVG shape with JavaScript',
        code: `<button type="button" id="paint">Paint circle</button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%">
  <circle id="dot" cx="100" cy="60" r="35" fill="#cbd5e1"
          stroke="#334155" stroke-width="4" />
</svg>
<script>
  document.getElementById("paint").addEventListener("click", function () {
    document.getElementById("dot").setAttribute("fill", "#e44d26");
  });
</script>`
      },
      { type: 'note', label: 'Security and external SVG', html: 'Inline SVG can be scripted. Treat externally supplied SVG as untrusted markup and validate or sanitize it before embedding, especially when it can execute scripts or load external resources.' },

      { type: 'heading', text: 'SVG and Canvas Compared' },
      {
        type: 'table',
        head: ['SVG', 'Canvas'],
        rows: [
          ['XML elements; shapes remain DOM objects.', 'JavaScript drawing commands; immediate pixel drawing.'],
          ['Resolution independent.', 'Resolution dependent.'],
          ['Shapes can receive events and CSS states.', 'A canvas is one interactive surface; hit testing is manual.'],
          ['Text and DOM integration are strong.', 'Text is drawn as pixels.'],
          ['Good for icons, diagrams, maps, and interface graphics.', 'Often good for many custom primitives or graphic-intensive scenes.'],
          ['Changing a shape attribute rerenders that object.', 'A changed scene generally needs to be cleared and redrawn.']
        ]
      },
      { type: 'note', label: 'Choose by workload', html: 'Neither technology is universally faster. Consider the number of objects, update frequency, required hit testing, text, interaction, animation, and output format rather than choosing only from the element name.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Create an accessible SVG status badge with a viewBox. Give the SVG an accessible name, draw a rounded background rectangle, add a circle status indicator, and use SVG text for a short label. Define a gradient in defs and reuse it as the badge fill.',
        starter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 150" width="100%">
  <!-- Add accessible name, gradient, shapes, and text -->
</svg>`,
        solution: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 150" width="100%"
     role="img" aria-labelledby="status-title">
  <title id="status-title">Service status: operational</title>
  <defs>
    <linearGradient id="badge-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
  </defs>
  <rect x="15" y="20" width="330" height="110" rx="24" fill="url(#badge-bg)" />
  <circle cx="70" cy="75" r="22" fill="#86efac" />
  <text x="115" y="72" font-family="sans-serif" font-size="24"
        font-weight="700" fill="#ffffff">Operational</text>
  <text x="115" y="101" font-family="sans-serif" font-size="15"
        fill="#dbeafe">All systems are running</text>
</svg>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What does the SVG <code>viewBox</code> attribute define?', options: ['The internal coordinate system', 'A JavaScript timer', 'The HTML page background', 'A required image format'], answer: 0, explanation: 'viewBox maps an internal coordinate rectangle onto the SVG element’s rendered size.' },
          { question: 'Which element draws connected straight segments that are automatically closed?', options: ['<code>&lt;polygon&gt;</code>', '<code>&lt;line&gt;</code>', '<code>&lt;defs&gt;</code>', '<code>&lt;text&gt;</code>'], answer: 0, explanation: 'polygon connects its points and closes the final point back to the first.' },
          { question: 'Where are reusable SVG definitions commonly placed?', options: ['Inside <code>&lt;defs&gt;</code>', 'Inside a paragraph', 'Inside a table caption', 'Inside a script comment'], answer: 0, explanation: 'defs holds definitions such as gradients, symbols, and clip paths that are referenced elsewhere.' },
          { question: 'What is a practical advantage of inline SVG over a canvas bitmap?', options: ['Its shapes remain addressable DOM elements', 'It automatically uploads PNG files', 'It never needs text alternatives', 'It always animates faster'], answer: 0, explanation: 'Inline SVG elements can be selected, styled, scripted, and given event handlers individually.' },
          { question: 'How should a meaningful standalone SVG graphic receive an accessible name?', options: ['With <code>aria-label</code> or <code>aria-labelledby</code>', 'With a tooltip only', 'With the HTML <code>alt</code> attribute', 'With a CSS color'], answer: 0, explanation: 'Use SVG/ARIA naming semantics, often connecting a child title with aria-labelledby.' }
        ]
      }
    ]
  },
  {
    id: 'html-media',
    title: 'HTML Media',
    subtitle: 'Choose, embed, and deliver audio and video responsibly',
    status: 'ready',
    navSection: 'HTML Media',
    source: {
      label: 'W3Schools · HTML Multimedia',
      url: 'https://www.w3schools.com/html/html_media.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML multimedia combines sound, video, and externally hosted content in a page. Dedicated elements such as <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> provide native playback, while <code>&lt;iframe&gt;</code> can embed supported third-party players.' },
      { type: 'note', label: 'Choose the simplest suitable element', html: 'Use <code>&lt;audio&gt;</code> for sound, <code>&lt;video&gt;</code> for moving pictures, <code>&lt;track&gt;</code> for timed text, and <code>&lt;iframe&gt;</code> for a provider-supported embedded document. Avoid classic plug-in technologies such as Flash, Java Applets, and ActiveX.' },

      { type: 'heading', text: 'Common Media Elements' },
      {
        type: 'table',
        head: ['Element', 'Purpose'],
        rows: [
          ['<code>&lt;audio&gt;</code>', 'Plays sound with optional native controls.'],
          ['<code>&lt;video&gt;</code>', 'Plays video that may also contain sound.'],
          ['<code>&lt;source&gt;</code>', 'Provides an alternative media resource and MIME type.'],
          ['<code>&lt;track&gt;</code>', 'Provides timed captions, subtitles, descriptions, chapters, or metadata.'],
          ['<code>&lt;iframe&gt;</code>', 'Embeds a separate document or supported third-party player.'],
          ['<code>&lt;object&gt;</code>', 'Embeds a general external resource; a fallback should be provided.']
        ]
      },
      { type: 'note', label: 'No plug-in installer', html: 'Modern multimedia is delivered through browser-supported media formats, web standards, and sandboxed third-party embeds rather than traditional browser plug-in installation.' },

      { type: 'heading', text: 'Audio and Video Players' },
      { type: 'p', html: 'The <code>controls</code> attribute gives users the browser\'s native interface for play, pause, seeking, volume, and speed. It is the safest default for user-started media.' },
      {
        type: 'example', label: 'Create native audio and video players',
        code: `<h2>Audio</h2>
<audio controls preload="metadata">
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Audio is not supported.
</audio>

<h2>Video</h2>
<video controls width="480" preload="metadata"
       poster="https://www.w3schools.com/html/img_mountain.jpg">
  <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
  <source src="https://www.w3schools.com/html/movie.webm" type="video/webm">
  Video is not supported.
</video>`
      },
      { type: 'note', label: 'Fallback content scope', html: 'Text inside an audio or video element is fallback for browsers that cannot use the element or resource. It does not replace a transcript, captions, or a direct link when those are needed for accessibility.' },
      { type: 'heading', text: 'Choose Formats and Codecs' },
      { type: 'p', html: 'The page lists MP3, WAV, and Ogg as common audio formats and MP4 and WebM as common video formats. A production choice also depends on the codecs inside each container and the browsers and devices you need to support.' },
      {
        type: 'table',
        head: ['Kind', 'Formats', 'Typical MIME types'],
        rows: [
          ['Audio', 'MP3, WAV, Ogg', '<code>audio/mpeg</code>, <code>audio/wav</code>, <code>audio/ogg</code>'],
          ['Video', 'MP4, WebM, Ogg', '<code>video/mp4</code>, <code>video/webm</code>, <code>video/ogg</code>'],
          ['Timed text', 'WebVTT', '<code>text/vtt</code>']
        ]
      },
      { type: 'note', label: 'File extension is not enough', html: 'MP4 and WebM are containers that can hold different codecs. A browser that supports a format may still lack the particular audio or video codec inside the file. Test real exports and encode suitable alternatives.' },
      { type: 'note', label: 'Historical formats', html: 'MIDI, RealAudio, and WMA appear in the source\'s history of media formats, but the page notes that these are not supported for ordinary playback in modern web browsers. Use current web media formats for new projects.' },

      { type: 'heading', text: 'Source Elements and Browser Selection' },
      { type: 'p', html: 'Use multiple <code>&lt;source&gt;</code> children to provide alternatives. Each source has a <code>src</code> and an optional MIME <code>type</code>. The browser checks them in order and selects the first resource it can play.' },
      {
        type: 'example', label: 'Offer ordered format alternatives',
        code: `<video controls width="480">
  <source src="clip.webm" type="video/webm">
  <source src="clip.mp4" type="video/mp4">
  Your browser cannot play this video.
  <a href="clip.mp4">Download the MP4</a>
</video>`
      },
      { type: 'note', label: 'Server responses matter', html: 'For progressive files, the server should return a suitable <code>Content-Type</code> and support byte-range requests so users can seek without downloading the entire file. Use streaming delivery for large media.' },

      { type: 'heading', text: 'Important Media Attributes' },
      {
        type: 'table',
        head: ['Attribute', 'Effect'],
        rows: [
          ['<code>controls</code>', 'Displays native playback controls.'],
          ['<code>autoplay</code>', 'Requests automatic playback when browser policy allows it.'],
          ['<code>muted</code>', 'Starts or sets the media to silent playback.'],
          ['<code>loop</code>', 'Restarts media when it ends.'],
          ['<code>preload</code>', 'Hints whether to avoid, partly load, or aggressively preload media.'],
          ['<code>poster</code>', 'Supplies a video preview image before playback.'],
          ['<code>playsinline</code>', 'Requests inline playback on mobile instead of forcing fullscreen.'],
          ['<code>width</code> / <code>height</code>', 'Provide initial player dimensions.']
        ]
      },
      { type: 'note', label: 'Autoplay is a request', html: 'Browsers commonly block audible autoplay, and mobile browsers may require <code>muted</code> and <code>playsinline</code>. Never assume autoplay will start, and avoid it for unexpected sound or motion.' },
      {
        type: 'example', label: 'Request inline muted autoplay',
        code: `<video controls autoplay muted loop playsinline
       width="480" src="https://www.w3schools.com/html/movie.mp4"></video>`
      },
      { type: 'heading', text: 'Responsive Media' },
      { type: 'p', html: 'Responsive media should fit its container without overflowing. Audio players are naturally compact; video needs a stable aspect ratio, commonly 16:9.' },
      {
        type: 'example', label: 'Create a responsive video',
        code: `<style>
  .media-frame {
    width: min(100%, 700px);
    aspect-ratio: 16 / 9;
    background: #0f172a;
  }
  .media-frame video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
<div class="media-frame">
  <video controls preload="metadata"
         src="https://www.w3schools.com/html/movie.mp4"></video>
</div>`
      },

      { type: 'heading', text: 'Captions, Subtitles, and Transcripts' },
      { type: 'p', html: 'The <code>&lt;track&gt;</code> element links timed text to a video. Use <code>kind="captions"</code> for dialogue and important sounds, <code>kind="subtitles"</code> for translation, and provide a transcript when static text access is also useful.' },
      {
        type: 'example', label: 'Attach an English caption track',
        code: `<video controls src="lesson.mp4">
  <track kind="captions" src="lesson-en.vtt"
         srclang="en" label="English" default>
  <p>Video fallback: <a href="lesson.mp4">open the MP4</a>.</p>
</video>`
      },
      { type: 'note', label: 'A track file must exist', html: 'The example demonstrates required attributes, but the referenced WebVTT file must actually be hosted and use valid timing syntax. A transcript is still useful even when captions are provided.' },

      { type: 'heading', text: 'Embed Third-Party Players' },
      { type: 'p', html: 'A provider can expose an iframe embed URL for hosted content such as YouTube. Give the iframe a meaningful <code>title</code>, request only needed permissions in <code>allow</code>, and add a direct link for users who cannot load the embed.' },
      {
        type: 'example', label: 'Embed a privacy-enhanced YouTube player',
        code: `<iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY"
        title="HTML media overview video"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen></iframe>
<p><a href="https://www.youtube.com/watch?v=tgbNymZ7vqY"
      target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>`
      },
      { type: 'note', label: 'Third-party privacy', html: 'An embedded player loads another provider\'s document and may involve cookies, account state, and regional restrictions. Apply consent requirements, privacy policies, and data-minimization rules appropriate to your site.' },

      { type: 'heading', text: 'JavaScript Media Control' },
      { type: 'p', html: 'The DOM API provides <code>play()</code>, <code>pause()</code>, <code>currentTime</code>, <code>duration</code>, <code>volume</code>, and events such as <code>play</code>, <code>pause</code>, <code>timeupdate</code>, <code>ended</code>, and <code>error</code>.' },
      {
        type: 'example', label: 'Add a Play/Pause button',
        code: `<video id="media" controls preload="metadata"
       src="https://www.w3schools.com/html/movie.mp4"></video>
<button type="button" id="toggle">Pause</button>
<script>
  const media = document.getElementById("media");
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("click", function () {
    if (media.paused) media.play();
    else media.pause();
  });
  media.addEventListener("play", function () { toggle.textContent = "Pause"; });
  media.addEventListener("pause", function () { toggle.textContent = "Play"; });
</script>`
      },
      { type: 'note', label: 'Keep native controls', html: 'A custom script should not remove native controls unless the replacement is fully keyboard accessible, understandable, and exposes the same essential playback and volume capabilities.' },
      { type: 'heading', text: 'Performance and User Control' },
      { type: 'p', html: 'Media can dominate page bandwidth, memory, and CPU. Compress appropriately, provide dimensions, use metadata or no preload when full download is unnecessary, transcode large video for different screens and connections, and use a CDN or streaming service for production delivery.' },
      { type: 'list', items: [
        'Require user action before playing sound or important motion.',
        'Keep controls visible and usable on touch devices.',
        'Provide captions for speech and important non-speech audio.',
        'Provide transcripts or descriptive text for essential information.',
        'Avoid rapid flashing and startling sudden sound.',
        'Do not rely on fallback text for media that sighted or hearing users need.',
        'Lazy-load non-critical third-party players, not the main lesson video.'
      ] },
      { type: 'note', label: 'Preload is only a hint', html: 'Browsers may ignore preload for data saver, battery, cache, network, or device reasons. Media delivery must remain correct if the browser chooses not to preload.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a media overview page containing an accessible audio player, a responsive captioned video player, and a short comparison of when to use audio, video, or an iframe. Use native controls, format alternatives, preload="metadata", and no forced autoplay.',
        starter: `<h2>Listen</h2>
<!-- Add an audio player with a fallback -->

<h2>Watch</h2>
<!-- Add a responsive captioned video -->

<h2>Compare</h2>
<!-- Explain audio, video, and iframe use cases -->`,
        solution: `<h2>Listen</h2>
<audio controls preload="metadata">
  <source src="summary.ogg" type="audio/ogg">
  <source src="summary.mp3" type="audio/mpeg">
  <a href="summary.mp3">Download the audio summary</a>
</audio>

<h2>Watch</h2>
<div class="video-frame">
  <video controls preload="metadata" poster="poster.jpg">
    <source src="lesson.webm" type="video/webm">
    <source src="lesson.mp4" type="video/mp4">
    <track kind="captions" src="lesson-en.vtt" srclang="en" label="English" default>
    <a href="lesson.mp4">Open the video file</a>
  </video>
</div>
<style>
  .video-frame { width: min(100%, 640px); aspect-ratio: 16 / 9; background: #0f172a; }
  .video-frame video { display: block; width: 100%; height: 100%; object-fit: contain; }
</style>

<h2>Compare</h2>
<p>Use <strong>audio</strong> for sound-only content, <strong>video</strong> for moving
pictures with optional sound, and an <strong>iframe</strong> for a supported third-party player.</p>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which element should normally handle sound-only content?', options: ['<code>&lt;audio&gt;</code>', '<code>&lt;video&gt;</code>', '<code>&lt;track&gt;</code>', '<code>&lt;object&gt;</code>'], answer: 0, explanation: 'audio represents sound-only media and provides native playback controls.' },
          { question: 'What is the purpose of multiple source elements?', options: ['Provide alternative formats the browser may select', 'Play all files at the same time', 'Create subtitles automatically', 'Force autoplay'], answer: 0, explanation: 'Browsers select the first suitable resource from the ordered alternatives.' },
          { question: 'Which attribute displays native media controls?', options: ['<code>controls</code>', '<code>poster</code>', '<code>playsinline</code>', '<code>type</code>'], answer: 0, explanation: 'controls exposes the browser’s native playback interface.' },
          { question: 'Why should autoplay be treated as a request?', options: ['Browsers may block audible or non-user-initiated playback', 'Autoplay always fails on desktop', 'Autoplay creates captions', 'Autoplay prevents media downloads'], answer: 0, explanation: 'Browser policy commonly requires user interaction, particularly for audible or unmuted media.' },
          { question: 'What does a track kind="captions" element link?', options: ['Timed WebVTT text for dialogue and important sounds', 'A JavaScript plug-in', 'A poster image', 'A browser preference file'], answer: 0, explanation: 'A captions track provides synchronized text and relevant sound cues.' }
        ]
      }
    ]
  },
  {
    id: 'html-video',
    title: 'HTML Video',
    subtitle: 'Play video in web pages with native controls',
    status: 'ready',
    navSection: 'HTML Media',
    source: {
      label: 'W3Schools · HTML Video',
      url: 'https://www.w3schools.com/html/html5_video.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML video plays a movie or moving visual sequence in a web page. The <code>&lt;video&gt;</code> element represents the player and can expose browser-native controls for playback, volume, seeking, and speed.' },
      { type: 'note', label: 'Video includes audio', html: 'A video file may contain both moving pictures and sound. Use <code>&lt;audio&gt;</code> instead when the content is sound-only.' },

      { type: 'heading', text: 'The video Element' },
      { type: 'p', html: 'Add a <code>&lt;video&gt;</code> element and use its <code>src</code> attribute to point to one video file. The <code>controls</code> attribute displays the browser\'s built-in playback interface.' },
      {
        type: 'example', label: 'Play one MP4 video',
        code: `<video controls width="480" src="https://www.w3schools.com/html/movie.mp4">
  Your browser does not support the video tag.
</video>`
      },
      { type: 'note', label: 'Include controls', html: 'A video without <code>controls</code> can still be controlled with script, but users may have no visible way to play, pause, seek, or change volume. Native controls are the safest default.' },
      { type: 'note', label: 'Fallback content', html: 'Text inside <code>&lt;video&gt;</code> is shown when the browser does not support the video element. It is not normally visible when playback succeeds.' },

      { type: 'heading', text: 'Use source for Multiple Formats' },
      { type: 'p', html: 'Place one or more <code>&lt;source&gt;</code> children inside <code>&lt;video&gt;</code> to offer alternative encodings. Each source can include a URL and a MIME <code>type</code>. The browser chooses the first candidate it can play.' },
      {
        type: 'example', label: 'Offer MP4, WebM, and Ogg',
        code: `<video controls width="480">
  <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
  <source src="https://www.w3schools.com/html/movie.webm" type="video/webm">
  <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`
      },
      { type: 'note', label: 'Source order matters', html: 'The browser evaluates sources in order. Put the format you most want to serve first and make every <code>type</code> value match the referenced file.' },

      { type: 'heading', text: 'Video Formats and MIME Types' },
      { type: 'p', html: 'W3Schools lists MP4, WebM, and Ogg as common browser video formats. Actual support depends on browser, operating system, device, and the codecs inside the container.' },
      {
        type: 'table',
        head: ['Format', 'Media type', 'Compatibility note'],
        rows: [
          ['MP4', '<code>video/mp4</code>', 'Broad support, often containing H.264 video and AAC or MP3 audio.'],
          ['WebM', '<code>video/webm</code>', 'Widely supported in modern browsers, commonly using VP8/VP9 and Opus.'],
          ['Ogg', '<code>video/ogg</code>', 'Supported by several browsers, but not by Safari according to the source table.']
        ]
      },
      { type: 'note', label: 'Container and codec', html: 'A file extension and MIME type describe the container; codec support still matters inside it. Test important videos on the browsers and devices your audience actually uses.' },

      { type: 'heading', text: 'Autoplay, Muted, Loop, and preload' },
      { type: 'p', html: 'The <code>autoplay</code> attribute requests immediate playback. <code>muted</code> suppresses sound, <code>loop</code> restarts at the end, and <code>preload</code> hints how much media the browser may fetch before playback.' },
      {
        type: 'table',
        head: ['Attribute', 'Purpose'],
        rows: [
          ['<code>autoplay</code>', 'Request automatic playback when policy permits.'],
          ['<code>muted</code>', 'Start without audible sound.'],
          ['<code>loop</code>', 'Restart when the end is reached.'],
          ['<code>preload="none"</code>', 'Suggest that the browser need not preload.'],
          ['<code>preload="metadata"</code>', 'Suggest fetching metadata such as duration.'],
          ['<code>preload="auto"</code>', 'Suggest that the browser may preload the media.']
        ]
      },
      { type: 'note', label: 'Autoplay can be blocked', html: 'Browsers commonly block audible autoplay until a user interacts with the page. Muted autoplay is allowed more often, but can still distract users. Always provide controls and do not depend on autoplay for essential content.' },
      { type: 'heading', text: 'Responsive Video' },
      { type: 'p', html: 'The <code>width</code> and <code>height</code> attributes define the video player\'s intrinsic dimensions. For a fluid layout, use CSS to constrain the player while preserving its aspect ratio.' },
      {
        type: 'example', label: 'Make video responsive',
        code: `<style>
  .video-frame {
    width: min(100%, 640px);
    aspect-ratio: 16 / 9;
    background: #0f172a;
  }
  .video-frame video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
<div class="video-frame">
  <video controls preload="metadata"
         src="https://www.w3schools.com/html/movie.mp4"></video>
</div>`
      },
      { type: 'note', label: 'object-fit', html: '<code>object-fit: contain</code> preserves the complete video without cropping. <code>cover</code> fills the frame and may crop parts of the image.' },

      { type: 'heading', text: 'Poster Images' },
      { type: 'p', html: 'The <code>poster</code> attribute displays an image before playback. It gives users a meaningful preview and can make the player occupy space before video metadata loads.' },
      {
        type: 'example', label: 'Show a poster image',
        code: `<video controls width="480" preload="metadata"
       poster="https://www.w3schools.com/html/img_mountain.jpg"
       src="https://www.w3schools.com/html/movie.mp4"></video>`
      },
      { type: 'note', label: 'Poster is not a substitute', html: 'A poster is only a preview. Important information should not appear only in the poster image, because it disappears when the video starts and is not automatically a text alternative.' },

      { type: 'heading', text: 'Captions and Text Tracks' },
      { type: 'p', html: 'Add a <code>&lt;track&gt;</code> child for captions, subtitles, descriptions, chapters, or metadata. The <code>kind</code>, <code>src</code>, <code>srclang</code>, and <code>label</code> attributes describe the track; <code>default</code> selects an initial track when appropriate.' },
      {
        type: 'example', label: 'Add a caption track',
        code: `<video controls width="480" src="https://www.w3schools.com/html/movie.mp4">
  <track kind="captions"
         src="https://www.w3schools.com/html/movie.vtt"
         srclang="en" label="English" default>
  Your browser does not support the video tag.
</video>`
      },
      { type: 'note', label: 'The track file must exist', html: 'A track URL should point to a valid WebVTT file with the <code>.vtt</code> extension. The example demonstrates the markup; verify that your actual caption file is hosted and served accessibly.' },
      { type: 'heading', text: 'Control Video with JavaScript' },
      { type: 'p', html: 'The DOM exposes methods and properties for loading, playing, pausing, seeking, volume, and playback rate. Keep native controls available unless a custom player supplies equivalent keyboard and screen-reader support.' },
      {
        type: 'example', label: 'Play, pause, and restart',
        code: `<video id="player" controls preload="metadata"
       src="https://www.w3schools.com/html/movie.mp4"></video>
<button type="button" id="toggle">Pause</button>
<button type="button" id="restart">Restart</button>
<script>
  const player = document.getElementById("player");
  const toggle = document.getElementById("toggle");

  toggle.addEventListener("click", function () {
    if (player.paused) player.play();
    else player.pause();
  });
  player.addEventListener("play", function () { toggle.textContent = "Pause"; });
  player.addEventListener("pause", function () { toggle.textContent = "Play"; });

  document.getElementById("restart").addEventListener("click", function () {
    player.currentTime = 0;
    player.play();
  });
</script>`
      },
      {
        type: 'table',
        head: ['API', 'Purpose'],
        rows: [
          ['<code>play()</code>', 'Request playback and return a promise.'],
          ['<code>pause()</code>', 'Pause playback.'],
          ['<code>currentTime</code>', 'Read or set the current position in seconds.'],
          ['<code>duration</code>', 'Read the media duration when available.'],
          ['<code>volume</code>', 'Read or set volume from <code>0</code> to <code>1</code>.'],
          ['<code>playbackRate</code>', 'Read or set the playback speed.'],
          ['<code>paused</code>', 'Indicate whether playback is paused.'],
          ['<code>load()</code>', 'Reload the selected media resource.']
        ]
      },
      { type: 'note', label: 'play() can reject', html: 'Playback may be blocked by autoplay policy or fail because of a source error. Handle the promise returned by <code>play()</code> and give the user useful feedback.' },

      { type: 'heading', text: 'Useful Video Events' },
      { type: 'p', html: 'Media events let an interface react to loading and playback. Use them to update custom controls or application state without repeatedly announcing high-frequency progress to assistive technology.' },
      {
        type: 'list', items: [
          '<code>loadstart</code> — loading has begun.',
          '<code>loadedmetadata</code> — metadata such as duration is available.',
          '<code>canplay</code> — playback can probably begin.',
          '<code>play</code> and <code>pause</code> — playback state changed.',
          '<code>timeupdate</code> — the current position changed.',
          '<code>ratechange</code> — playback speed changed.',
          '<code>ended</code> — playback reached the end.',
          '<code>error</code> — loading or decoding failed.'
        ]
      },
      {
        type: 'example', label: 'Show playback state',
        code: `<video id="player" controls src="https://www.w3schools.com/html/movie.mp4"></video>
<p id="state" role="status">Paused</p>
<script>
  const player = document.getElementById("player");
  const state = document.getElementById("state");
  player.addEventListener("play", function () { state.textContent = "Playing"; });
  player.addEventListener("pause", function () { state.textContent = "Paused"; });
  player.addEventListener("ended", function () { state.textContent = "Finished"; });
  player.addEventListener("error", function () { state.textContent = "Video could not load."; });
</script>`
      },
      { type: 'heading', text: 'Accessibility' },
      { type: 'p', html: 'Video is visual media and may also contain important audio. Provide captions for speech, an audio description track when visual information is not conveyed in the audio, and a transcript or surrounding text when it gives essential information.' },
      { type: 'list', items: [
        'Keep native <code>controls</code>, or make a custom player fully keyboard operable with clear focus and state.',
        'Provide correctly timed captions through a <code>&lt;track kind="captions"&gt;</code>.',
        'Provide audio description when important visual information is not already described in the soundtrack.',
        'Avoid autoplay with sound and never make motion the only way to understand the content.',
        'Provide a transcript or text alternative for narration, instructions, or other essential information.',
        'Do not use rapid flashing; it can create a serious accessibility risk.'
      ] },
      { type: 'note', label: 'Captions are more than text', html: 'Captions should match the dialogue and relevant sound cues with useful timing. Incorrect or missing captions can make a video harder or impossible to understand.' },

      { type: 'heading', text: 'Performance and Delivery' },
      { type: 'p', html: 'Video is bandwidth- and storage-intensive. Compress an appropriate master, transcode for relevant screen sizes and connections, set accurate duration and dimensions, and use <code>preload="metadata"</code> when the entire file is not needed before playback.' },
      { type: 'note', label: 'Preload is a hint', html: 'Browsers may ignore preload hints for network, cache, device, or data-saver conditions. Use a CDN or streaming delivery for large production media rather than downloading a huge file from one origin.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build an accessible responsive lesson video. Add native controls, MP4 and WebM sources, a poster, an English caption track, and a CSS aspect-ratio wrapper that keeps the player inside a phone screen. Add a Play/Pause button synchronized through media events.',
        starter: `<div class="video-frame">
  <video controls preload="metadata">
    <!-- Add sources, poster, and caption track -->
  </video>
</div>
<button type="button" id="toggle">Play</button>
<style>
  .video-frame { width: min(100%, 640px); aspect-ratio: 16 / 9; }
  .video-frame video { width: 100%; height: 100%; }
</style>
<script>
  // Add playback controls
</script>`,
        solution: `<div class="video-frame">
  <video id="lesson-video" controls preload="metadata"
         poster="https://www.w3schools.com/html/img_mountain.jpg">
    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
    <source src="https://www.w3schools.com/html/movie.webm" type="video/webm">
    <track kind="captions" src="captions.vtt"
           srclang="en" label="English" default>
    Your browser does not support the video tag.
  </video>
</div>
<button type="button" id="toggle">Play</button>
<style>
  .video-frame { width: min(100%, 640px); aspect-ratio: 16 / 9; background: #0f172a; }
  .video-frame video { display: block; width: 100%; height: 100%; object-fit: contain; }
</style>
<script>
  const video = document.getElementById("lesson-video");
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("click", function () {
    if (video.paused) video.play();
    else video.pause();
  });
  video.addEventListener("play", function () { toggle.textContent = "Pause"; });
  video.addEventListener("pause", function () { toggle.textContent = "Play"; });
</script>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What does the <code>controls</code> attribute do on a video?', options: ['Displays native playback controls', 'Automatically writes captions', 'Converts the video to WebM', 'Guarantees autoplay'], answer: 0, explanation: 'controls exposes the browser’s built-in playback interface.' },
          { question: 'Which MIME type belongs to a WebM source?', options: ['<code>video/webm</code>', '<code>audio/webm</code>', '<code>video/mpeg4</code>', '<code>text/vtt</code>'], answer: 0, explanation: 'The source table maps WebM video to video/webm.' },
          { question: 'Why can audible autoplay be blocked?', options: ['To prevent unexpected sound and disruptive data use', 'Because controls require JavaScript', 'Because MP4 is obsolete', 'Because captions cannot autoplay'], answer: 0, explanation: 'Browser autoplay policy commonly requires interaction before audible playback.' },
          { question: 'Which element adds a caption file to video?', options: ['<code>&lt;track&gt;</code>', '<code>&lt;source&gt;</code>', '<code>&lt;poster&gt;</code>', '<code>&lt;loop&gt;</code>'], answer: 0, explanation: 'track links timed text such as captions and descriptions.' },
          { question: 'Which property controls playback speed?', options: ['<code>playbackRate</code>', '<code>poster</code>', '<code>preload</code>', '<code>srclang</code>'], answer: 0, explanation: 'playbackRate reads or sets the media playback speed.' }
        ]
      }
    ]
  },
  {
    id: 'html-audio',
    title: 'HTML Audio',
    subtitle: 'Play sound in web pages with native audio controls',
    status: 'ready',
    navSection: 'HTML Media',
    source: {
      label: 'W3Schools · HTML Audio',
      url: 'https://www.w3schools.com/html/html5_audio.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML audio plays sound in a web page. The <code>&lt;audio&gt;</code> element represents a sound player and can provide browser-native controls for play, pause, seeking, volume, and playback speed.' },
      { type: 'note', label: 'Audio and video are separate', html: 'Use <code>&lt;audio&gt;</code> for sound without video. Use the <code>&lt;video&gt;</code> element when the media includes moving pictures.' },

      { type: 'heading', text: 'The audio Element' },
      { type: 'p', html: 'The <code>&lt;audio&gt;</code> element can use a <code>src</code> attribute to point to one audio file. The <code>controls</code> attribute displays the browser\'s built-in playback interface.' },
      {
        type: 'example', label: 'Play one audio file',
        code: `<audio controls src="https://www.w3schools.com/html/horse.ogg">
  Your browser does not support the audio element.
</audio>`
      },
      { type: 'note', label: 'Fallback content', html: 'Text inside <code>&lt;audio&gt;</code> is fallback content for browsers that cannot play the resource. It is not normally displayed when the player works.' },

      { type: 'heading', text: 'Use source for Multiple Formats' },
      { type: 'p', html: 'Instead of one <code>src</code>, place one or more <code>&lt;source&gt;</code> children inside <code>&lt;audio&gt;</code>. Each source provides a file URL and an optional MIME <code>type</code>. The browser selects the first source it can play.' },
      {
        type: 'example', label: 'Offer OGG and MP3 sources',
        code: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`
      },
      { type: 'note', label: 'Keep source order intentional', html: 'Browsers evaluate sources in order and use the first playable candidate. Put broadly supported formats first when that ordering matches your needs, and keep each <code>type</code> value consistent with the referenced file.' },

      { type: 'heading', text: 'Audio File Formats' },
      { type: 'p', html: 'W3Schools lists three common browser audio formats: MP3, OGG, and WAV. Format support can vary by browser, version, device, and codec, so providing more than one source improves compatibility.' },
      {
        type: 'table',
        head: ['File format', 'Media type', 'Common use'],
        rows: [
          ['MP3', '<code>audio/mpeg</code>', 'Compact, widely supported music and speech.'],
          ['OGG', '<code>audio/ogg</code>', 'Common open container/codec option; Safari support can differ.'],
          ['WAV', '<code>audio/wav</code>', 'Uncompressed or lightly processed audio; files can be large.']
        ]
      },
      { type: 'note', label: 'A MIME type is a hint', html: 'The <code>type</code> attribute helps the browser skip a source it should not expect to decode. The server should also send an appropriate <code>Content-Type</code>, and codec support still depends on the browser.' },

      { type: 'heading', text: 'Autoplay, Muted, Loop, and preload' },
      { type: 'p', html: 'The <code>autoplay</code> attribute asks the browser to begin playback as soon as possible. <code>muted</code> starts playback without sound, <code>loop</code> restarts the media at the end, and <code>preload</code> provides a hint about how aggressively to preload.' },
      {
        type: 'table',
        head: ['Attribute', 'Purpose'],
        rows: [
          ['<code>autoplay</code>', 'Request automatic playback when possible.'],
          ['<code>muted</code>', 'Mute the media, including its initial volume state.'],
          ['<code>loop</code>', 'Restart playback when the end is reached.'],
          ['<code>preload="none"</code>', 'Suggest that the browser need not preload the file.'],
          ['<code>preload="metadata"</code>', 'Suggest fetching metadata such as duration before playback.'],
          ['<code>preload="auto"</code>', 'Suggest that the browser may preload the whole file.']
        ]
      },
      { type: 'note', label: 'Autoplay is not guaranteed', html: 'Browsers commonly block audible autoplay until a user interacts with the page. Autoplay that includes <code>muted</code> is generally allowed more often, but it can still be a poor experience. Always provide controls and respect user preferences.' },
      {
        type: 'example', label: 'Muted autoplay and looping',
        code: `<audio controls autoplay muted loop preload="metadata">
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
</audio>`
      },
      { type: 'heading', text: 'Control Audio with JavaScript' },
      { type: 'p', html: 'The HTML DOM exposes methods, properties, and events for <code>&lt;audio&gt;</code>. This is useful when a custom interface needs to load, play, pause, seek, or change volume while native controls remain available as a fallback.' },
      {
        type: 'example', label: 'Play and pause from buttons',
        code: `<audio id="player" controls preload="metadata">
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
</audio>
<button type="button" id="toggle">Pause</button>
<button type="button" id="restart">Restart</button>
<script>
  const player = document.getElementById("player");
  const toggle = document.getElementById("toggle");

  toggle.addEventListener("click", function () {
    if (player.paused) player.play();
    else player.pause();
  });
  player.addEventListener("play", function () { toggle.textContent = "Pause"; });
  player.addEventListener("pause", function () { toggle.textContent = "Play"; });

  document.getElementById("restart").addEventListener("click", function () {
    player.currentTime = 0;
    player.play();
  });
</script>`
      },
      {
        type: 'table',
        head: ['API', 'Purpose'],
        rows: [
          ['<code>play()</code>', 'Request playback and return a promise.'],
          ['<code>pause()</code>', 'Pause playback.'],
          ['<code>currentTime</code>', 'Read or set the playback position in seconds.'],
          ['<code>duration</code>', 'Read the media duration when available.'],
          ['<code>volume</code>', 'Read or set volume from <code>0</code> to <code>1</code>.'],
          ['<code>paused</code>', 'Indicate whether playback is currently paused.'],
          ['<code>load()</code>', 'Reload the selected media resource.']
        ]
      },
      { type: 'note', label: 'Handle play() rejection', html: '<code>play()</code> returns a promise and can reject when a browser blocks autoplay or the resource fails. Handle that rejection rather than assuming playback always begins.' },
      {
        type: 'example', label: 'Handle blocked playback',
        code: `<audio id="player" controls src="https://www.w3schools.com/html/horse.ogg"></audio>
<button type="button" id="play">Play</button>
<p id="status" role="status">Ready</p>
<script>
  const player = document.getElementById("player");
  document.getElementById("play").addEventListener("click", async function () {
    try {
      await player.play();
      document.getElementById("status").textContent = "Playing";
    } catch (error) {
      document.getElementById("status").textContent = "Playback could not start.";
    }
  });
</script>`
      },

      { type: 'heading', text: 'Useful Audio Events' },
      { type: 'p', html: 'Media elements emit events as loading and playback progress. Use these events to synchronize interface text, analytics, or application state.' },
      {
        type: 'list', items: [
          '<code>loadstart</code> fires when the browser begins trying to load a resource.',
          '<code>loadedmetadata</code> fires when metadata such as duration becomes available.',
          '<code>canplay</code> indicates that playback can probably begin.',
          '<code>play</code> and <code>pause</code> reflect playback state changes.',
          '<code>timeupdate</code> fires while the current position changes.',
          '<code>ended</code> fires when playback reaches the end.',
          '<code>error</code> indicates a media or source failure.'
        ]
      },
      { type: 'note', label: 'Do not expose every event to users', html: 'Events are implementation events. Use them to update the interface only when state meaningfully changes, and avoid announcing high-frequency updates such as every <code>timeupdate</code> to assistive technology.' },

      { type: 'heading', text: 'Accessibility and User Control' },
      { type: 'p', html: 'Audio should be understandable and controllable. Always include native controls unless a custom player provides equivalent keyboard and screen-reader support. Place a transcript or lyrics near music or speech when the words matter.' },
      { type: 'list', items: [
        'Do not autoplay unexpected sound; user action should usually be required.',
        'Keep <code>controls</code> visible and large enough to operate on touch devices.',
        'Use a <code>muted</code> attribute rather than setting the volume to zero when silent autoplay is truly needed.',
        'Provide captions or transcripts for speech content.',
        'Provide a visible link to the audio file or another fallback if the embedded player fails.',
        'Avoid rapidly flashing visuals or sudden loud audio.'
      ] },
      { type: 'note', label: 'Captions are not built into audio', html: 'The <code>&lt;audio&gt;</code> element does not create a caption track. Use nearby text, a transcript, lyrics, or another documented alternative for the information conveyed by the sound.' },
      { type: 'heading', text: 'Performance and File Size' },
      { type: 'p', html: 'Audio files can consume significant bandwidth, especially on mobile networks. Choose an appropriate codec and sample rate, compress the file, avoid loading unused media, and use <code>preload="none"</code> or <code>preload="metadata"</code> when immediate full download is unnecessary.' },
      { type: 'note', label: 'Preload is only a hint', html: 'Browsers may ignore preload behavior for network, data-saver, cache, or device reasons. It helps express intent but does not guarantee exactly what will be downloaded.' },
      {
        type: 'example', label: 'Delay downloading until requested',
        code: `<button type="button" id="load">Load audio</button>
<audio id="player" controls preload="none" src="https://www.w3schools.com/html/horse.ogg"></audio>
<script>
  document.getElementById("load").addEventListener("click", function () {
    document.getElementById("player").load();
  });
</script>`
      },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a sound-effects player. Use an audio element with native controls and two source formats, add a heading, a short description, and a visible transcript link. Then add a Play/Pause button that keeps its label synchronized with the player play and pause events.',
        starter: `<audio id="sound" controls preload="metadata">
  <!-- Add source elements -->
</audio>
<button type="button" id="toggle">Play</button>
<p>Sound effect description or transcript.</p>
<script>
  // Add playback controls
</script>`,
        solution: `<h2>Ocean sound effect</h2>
<p>Audio description: gentle waves on a calm shoreline.</p>
<a href="https://www.w3schools.com/html/horse.ogg">Open the audio file</a>
<audio id="sound" controls preload="metadata">
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<button type="button" id="toggle">Play</button>
<script>
  const sound = document.getElementById("sound");
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("click", function () {
    if (sound.paused) sound.play();
    else sound.pause();
  });
  sound.addEventListener("play", function () { toggle.textContent = "Pause"; });
  sound.addEventListener("pause", function () { toggle.textContent = "Play"; });
</script>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'What does the <code>controls</code> attribute do?', options: ['Displays the browser\'s native audio controls', 'Downloads the audio automatically', 'Converts audio to MP3', 'Hides fallback content'], answer: 0, explanation: 'controls exposes the built-in playback and volume interface.' },
          { question: 'What is the media type for an OGG audio source?', options: ['<code>audio/ogg</code>', '<code>video/ogg</code>', '<code>audio/mp4</code>', '<code>application/ogg</code>'], answer: 0, explanation: 'The W3Schools audio format table lists OGG with audio/ogg.' },
          { question: 'Why provide more than one <code>source</code>?', options: ['To give the browser playable format alternatives', 'To play every file at once', 'To create captions automatically', 'To guarantee autoplay permission'], answer: 0, explanation: 'The browser can select the first source it can decode from the ordered alternatives.' },
          { question: 'Why is audible autoplay often blocked?', options: ['To prevent unexpected disruptive sound and data use', 'Because audio controls never work', 'Because preload must always be auto', 'Because MP3 is no longer supported'], answer: 0, explanation: 'Browsers commonly require user interaction before audible playback.' },
          { question: 'Which property sets the current playback position in seconds?', options: ['<code>currentTime</code>', '<code>duration</code>', '<code>volume</code>', '<code>paused</code>'], answer: 0, explanation: 'currentTime is the readable and writable playback position.' }
        ]
      }
    ]
  },
  {
    id: 'html-plug-ins',
    title: 'HTML Plug-ins',
    subtitle: 'Embed external resources with object and safe fallbacks',
    status: 'ready',
    navSection: 'HTML Media',
    source: {
      label: 'W3Schools · HTML object',
      url: 'https://www.w3schools.com/html/html_object.asp'
    },
    blocks: [
      { type: 'p', html: 'HTML plug-ins were browser extensions used for tasks such as Flash movies, Java Applets, ActiveX controls, maps, and other specialized content. Modern browsers no longer support most of those classic plug-in technologies.' },
      { type: 'note', label: 'Historical topic, modern alternatives', html: 'Java Applets and ActiveX are obsolete, and Flash has been removed from modern browsers. For audio use <code>&lt;audio&gt;</code>, for video use <code>&lt;video&gt;</code>, for vector graphics use inline SVG, and for maps or third-party content use that provider\'s current iframe or JavaScript SDK.' },

      { type: 'heading', text: 'The object Element' },
      { type: 'p', html: 'The <code>&lt;object&gt;</code> element embeds an external resource in an HTML document. Its <code>data</code> attribute supplies the resource URL, and its optional <code>type</code> attribute provides the resource\'s MIME type.' },
      {
        type: 'example', label: 'Embed an HTML document',
        code: `<object data="https://www.w3schools.com/html/snippet.html"
        type="text/html" width="100%" height="220">
  Embedded document preview is unavailable.
</object>`
      },
      { type: 'note', label: 'Fallback content', html: 'Content inside <code>&lt;object&gt;</code> can provide a message or link when the resource cannot be embedded. It is not a guarantee that the external document itself is accessible or trustworthy.' },
      { type: 'note', label: 'Third-party documents', html: 'Some sites block framing through <code>X-Frame-Options</code> or a frame-ancestors policy. A valid <code>&lt;object&gt;</code> URL does not guarantee that the resource will load.' },

      { type: 'heading', text: 'The data and type Attributes' },
      { type: 'p', html: 'The <code>data</code> attribute identifies what to load. The <code>type</code> attribute tells the browser what kind of resource it is, helping it choose an appropriate handler or determine that no handler is available.' },
      {
        type: 'table',
        head: ['Attribute', 'Purpose', 'Example'],
        rows: [
          ['<code>data</code>', 'URL of the embedded resource.', '<code>data="document.html"</code>'],
          ['<code>type</code>', 'MIME type of the resource.', '<code>type="text/html"</code>'],
          ['<code>width</code>', 'Rendered width.', '<code>width="640"</code>'],
          ['<code>height</code>', 'Rendered height.', '<code>height="360"</code>'],
          ['<code>name</code>', 'Name used when the resource is targeted by another element.', '<code>name="viewer"</code>']
        ]
      },

      { type: 'heading', text: 'The param Element' },
      { type: 'p', html: 'A <code>&lt;param&gt;</code> child can pass a named configuration value to an embedded plugin or resource. Its <code>name</code> identifies the setting and its <code>value</code> supplies the value.' },
      {
        type: 'example', label: 'Pass a parameter',
        code: `<object data="viewer.html" type="text/html" width="400" height="240">
  <param name="theme" value="dark">
  <param name="autoplay" value="false">
  Embedded viewer is unavailable.
</object>`
      },
      { type: 'note', label: 'Parameters are resource-specific', html: 'The embedded resource must define and interpret parameter names. There is no universal list of valid <code>&lt;param&gt;</code> names, and unsupported values may simply be ignored.' },
      { type: 'heading', text: 'Choose the Right Element' },
      { type: 'p', html: '<code>&lt;object&gt;</code> is broad, but many common resources have more semantic and better-supported dedicated elements.' },
      {
        type: 'table',
        head: ['Need', 'Prefer'],
        rows: [
          ['An image', '<code>&lt;img&gt;</code> with alternative text.'],
          ['Vector graphics', 'Inline <code>&lt;svg&gt;</code>.'],
          ['Sound', '<code>&lt;audio&gt;</code>.'],
          ['Video with captions', '<code>&lt;video&gt;</code> with <code>&lt;track&gt;</code>.'],
          ['A separate web document or provider widget', '<code>&lt;iframe&gt;</code> when the provider supports embedding.'],
          ['A general external resource handled by the browser', '<code>&lt;object&gt;</code> with a useful fallback.']
        ]
      },
      { type: 'note', label: 'Dedicated elements improve fallback', html: 'An image can provide alt text, and media elements provide specialized controls and accessibility features. A generic embedded object usually provides less control over how its resource is presented.' },

      { type: 'heading', text: 'The embed Element' },
      { type: 'p', html: 'The W3Schools page also demonstrates <code>&lt;embed&gt;</code>, a void element that loads an external resource using its <code>src</code> attribute. Unlike <code>&lt;object&gt;</code>, it has no closing tag and cannot contain fallback children.' },
      {
        type: 'example', label: 'Embed an external resource',
        code: `<embed src="https://www.w3schools.com/html/img_mountain.jpg"
       type="image/jpeg" width="320" height="180">`
      },
      { type: 'note', label: 'Prefer meaningful alternatives', html: 'Because <code>&lt;embed&gt;</code> cannot contain fallback content or a normal <code>alt</code> attribute, it is a poor choice for essential images or content. Prefer <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, or another semantic element whenever possible.' },

      { type: 'heading', text: 'Obsolete Plugin Technologies' },
      { type: 'p', html: 'The page describes historical uses including Java Applets, Microsoft ActiveX, Flash, plug-in maps, virus scanners, and identity verification. These illustrate why web standards and sandboxed components replaced many native plug-ins.' },
      {
        type: 'table',
        head: ['Technology', 'Current status'],
        rows: [
          ['Java Applets and <code>&lt;applet&gt;</code>', 'Obsolete and unsupported in modern browsers.'],
          ['ActiveX controls', 'Obsolete and unsupported by modern browsers.'],
          ['Flash and <code>&lt;embed&gt;</code>-based Flash', 'Removed from modern browsers.'],
          ['Map and identity plug-ins', 'Replaced by JavaScript APIs, SDKs, and standards-based components.']
        ]
      },
      { type: 'note', label: 'Do not teach applet or ActiveX as usable', html: 'The old <code>&lt;applet&gt;</code> element and plugin installer models are historical context, not techniques for current projects.' },
      { type: 'heading', text: 'Security and Accessibility' },
      { type: 'p', html: 'Embedded content can execute code, load plugins, or create an interactive browsing context. Only load resources from sources you trust, serve them over HTTPS, and review any script and plugin permissions they request.' },
      { type: 'list', items: [
        'Add meaningful fallback text and a direct link to the resource.',
        'Do not rely on color, sound, or a plugin interface to convey essential information.',
        'Give meaningful embedded media and widgets an accessible name and keyboard support.',
        'Use sandboxed <code>&lt;iframe&gt;</code> content for untrusted or partially trusted third-party pages.',
        'Do not pass secrets, credentials, or sensitive values through <code>&lt;param&gt;</code>.',
        'Remember that visible URL text does not make an untrusted destination safe.'
      ] },
      { type: 'note', label: 'Prefer iframe sandboxing for web content', html: 'For a separate document, a sandboxed <code>&lt;iframe&gt;</code> often gives clearer control over permissions. An <code>&lt;object&gt;</code> can still invoke external handlers, so validate the resource and context.' },

      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Create a resilient resource preview using object. Give the embedded resource a URL and MIME type, set a fixed display size, pass a theme parameter, and include a visible fallback link. Under it, briefly explain why img or video would be better for those resource types.',
        starter: `<object data="" type="" width="420" height="260">
  <!-- Add parameters and fallback content -->
</object>`,
        solution: `<p>Embedded document preview:</p>
<object data="https://www.w3schools.com/html/snippet.html"
        type="text/html" width="420" height="260">
  <param name="theme" value="light">
  This document could not be embedded.
  <a href="https://www.w3schools.com/html/snippet.html">Open the document instead</a>
</object>
<p><strong>Better alternatives:</strong> use <code>img</code> for images,
<code>audio</code> for sound, and <code>video</code> for moving pictures.</p>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which attribute supplies the embedded resource URL to <code>object</code>?', options: ['<code>data</code>', '<code>src</code>', '<code>href</code>', '<code>poster</code>'], answer: 0, explanation: 'The object element uses data for its external resource URL.' },
          { question: 'Where can fallback content be placed?', options: ['Inside <code>&lt;object&gt;</code>', 'Only inside its <code>type</code>', 'Inside a closing <code>&lt;embed /&gt;</code>', 'Inside the browser toolbar'], answer: 0, explanation: 'object is a container and can hold fallback content; embed is a void element.' },
          { question: 'What does <code>&lt;param name="theme" value="dark"&gt;</code> do?', options: ['Passes a named setting to the embedded resource', 'Changes the HTML page theme', 'Creates a JavaScript loop', 'Declares the MIME type'], answer: 0, explanation: 'param sends a resource-specific name/value configuration pair.' },
          { question: 'Which technology is not a practical current plug-in recommendation?', options: ['Java Applets and ActiveX', 'Inline SVG', 'The object element', 'A provider iframe'], answer: 0, explanation: 'Java Applets and ActiveX are obsolete and unsupported in modern browsers.' },
          { question: 'Why is <code>img</code> usually better than <code>embed</code> for an image?', options: ['It provides alternative text and semantic image behavior', 'It automatically uploads the image', 'It never makes a network request', 'It can only display SVG'], answer: 0, explanation: 'img is designed for images and can provide alt text, sizing, loading, and decoding behavior.' }
        ]
      }
    ]
  },
  {
    id: 'html-youtube',
    title: 'HTML YouTube',
    subtitle: 'Embed YouTube videos responsibly with iframes',
    status: 'ready',
    navSection: 'HTML Media',
    source: {
      label: 'W3Schools · HTML YouTube',
      url: 'https://www.w3schools.com/html/html_youtube.asp'
    },
    blocks: [
      { type: 'p', html: 'YouTube videos can be embedded in an HTML page with an <code>&lt;iframe&gt;</code>. The iframe asks YouTube to load a player inside your page rather than sending visitors away to the full YouTube site.' },
      { type: 'note', label: 'Embedding is optional', html: 'A video owner can disable embedding, restrict playback in embedded players, or change privacy settings. A valid embed URL therefore does not guarantee that every video will play for every visitor.' },

      { type: 'heading', text: 'Embed a YouTube Video' },
      { type: 'p', html: 'Use YouTube\'s <code>/embed/VIDEO_ID</code> URL as the iframe <code>src</code>. The video identifier is the final path segment in a normal YouTube video URL.' },
      {
        type: 'example', label: 'Create a basic embed',
        code: `<iframe width="560" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="Sample YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`
      },
      { type: 'note', label: 'Always provide a title', html: 'The iframe <code>title</code> gives assistive technology a meaningful name. Describe the video\'s purpose, not merely “YouTube video.”' },
      { type: 'note', label: 'Allow only needed features', html: 'The <code>allow</code> policy delegates browser features to the player. Request only capabilities the page uses; an overly broad policy increases unnecessary privilege.' },

      { type: 'heading', text: 'Privacy-Enhanced YouTube Embeds' },
      { type: 'p', html: 'The source shows the privacy-enhanced domain <code>www.youtube-nocookie.com</code>. It is designed to reduce cookie-related tracking behavior when visitors interact with the embedded player.' },
      {
        type: 'example', label: 'Use youtube-nocookie.com',
        code: `<iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY"
        title="Privacy-enhanced lesson video"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen></iframe>`
      },
      { type: 'note', label: 'Reduced, not zero, tracking', html: '<code>youtube-nocookie.com</code> should not be described as making the embed completely private or cookie-free. The player is still third-party content and may load resources or set data according to YouTube and the visitor\'s settings.' },
      { type: 'note', label: 'Consent may still be required', html: 'Privacy laws and organizational policy may require consent before loading non-essential third-party content. A privacy-enhanced domain does not replace a consent-management decision.' },
      { type: 'heading', text: 'Autoplay and Muted Playback' },
      { type: 'p', html: 'The embed URL accepts <code>autoplay=1</code> to request automatic playback. Browsers commonly block audible autoplay, so the source also demonstrates <code>mute=1</code> with autoplay.' },
      {
        type: 'example', label: 'Request muted autoplay',
        code: `<iframe width="560" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        title="Muted autoplay example"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>`
      },
      { type: 'note', label: 'Autoplay is disruptive', html: 'Even when a browser allows muted autoplay, starting movement without a visitor request can be distracting and can increase data use. Let people choose when third-party media begins.' },

      { type: 'heading', text: 'Playlists and Looping' },
      { type: 'p', html: 'A comma-separated <code>playlist</code> parameter can include video IDs in addition to the main embed URL. <code>loop=1</code> asks the player to repeat the playlist; <code>loop=0</code> is the default.' },
      {
        type: 'example', label: 'Loop a one-video playlist',
        code: `<iframe width="560" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
        title="Looping sample video"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen></iframe>`
      },
      {
        type: 'table',
        head: ['Parameter', 'Purpose'],
        rows: [
          ['<code>autoplay=1</code>', 'Request automatic playback.'],
          ['<code>mute=1</code>', 'Start with sound muted.'],
          ['<code>playlist=ID1,ID2</code>', 'Provide a comma-separated video playlist.'],
          ['<code>loop=1</code>', 'Repeat the playlist; <code>loop=0</code> is the default.'],
          ['<code>controls=0</code>', 'Hide player controls; <code>controls=1</code> is the default.']
        ]
      },
      { type: 'note', label: 'Keep controls visible', html: 'Hiding controls with <code>controls=0</code> can make playback, volume, captions, and fullscreen harder to access. Keep controls for user-started and educational content unless there is a specific accessible alternative.' },
      {
        type: 'example', label: 'Hide controls',
        code: `<iframe width="560" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        title="Video without player controls"
        allow="encrypted-media"
        allowfullscreen></iframe>`
      },
      { type: 'heading', text: 'Responsive YouTube Embeds' },
      { type: 'p', html: 'A fixed 560 × 315 iframe can overflow a phone. Put the iframe inside a wrapper with a 16:9 <code>aspect-ratio</code>, then make the iframe fill that wrapper.' },
      {
        type: 'example', label: 'Make the embed responsive',
        code: `<style>
  .video-embed {
    position: relative;
    width: min(100%, 800px);
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  .video-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY"
          title="Responsive sample video"
          loading="lazy"
          allow="encrypted-media; picture-in-picture"
          allowfullscreen></iframe>
</div>`
      },
      { type: 'note', label: 'Intrinsic dimensions still help', html: 'Set sensible <code>width</code> and <code>height</code> attributes on the iframe as an initial size. CSS can then scale the player while the browser reserves a stable aspect ratio before CSS loads.' },

      { type: 'heading', text: 'Loading and Performance' },
      { type: 'p', html: 'An iframe creates a third-party document and can consume substantial network and CPU resources. <code>loading="lazy"</code> tells the browser to defer loading an off-screen iframe until it approaches the viewport.' },
      {
        type: 'example', label: 'Lazy-load an off-screen embed',
        code: `<iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY"
        title="Lazy-loaded tutorial"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen></iframe>`
      },
      { type: 'note', label: 'Do not lazy-load the first meaningful item', html: 'Lazy loading is most useful below the fold. A video that is the page\'s primary content should not be delayed unnecessarily.' },
      { type: 'note', label: 'Consider a facade', html: 'For privacy-sensitive pages, a local thumbnail and play button can defer the YouTube iframe until consent or a user click. This reduces initial third-party loading but requires a small amount of implementation work.' },
      {
        type: 'example', label: 'Link out as a simple fallback strategy',
        code: `<p>Watch the lesson:</p>
<a href="https://www.youtube.com/watch?v=tgbNymZ7vqY"
   target="_blank" rel="noopener noreferrer">
  Open “Sample YouTube video” on YouTube
</a>`
      },

      { type: 'heading', text: 'Accessibility' },
      { type: 'p', html: 'The embedded player can expose captions and playback controls, but the surrounding page still needs meaningful structure and alternatives.' },
      {
        type: 'list', items: [
          'Give every iframe a <code>title</code> that describes the video\'s purpose.',
          'Place the embed near a heading that identifies the lesson or topic.',
          'Ensure captions are available for meaningful spoken content.',
          'Do not hide controls unless an equivalent accessible interface is provided.',
          'Avoid autoplay, rapid motion, or content that flashes.',
          'Offer a direct link when the embed may be blocked by privacy settings or owner restrictions.'
        ]
      },
      { type: 'note', label: 'Player accessibility is not page accessibility', html: 'A YouTube iframe does not replace semantic headings, text instructions, transcripts, or a usable link outside the player.' },
      { type: 'heading', text: 'Your Turn' },
      {
        type: 'challenge',
        brief: 'Build a responsive, privacy-aware YouTube lesson embed. Use youtube-nocookie.com, add a meaningful iframe title, allow only encrypted media and picture-in-picture, enable fullscreen, and wrap the player in a 16:9 container. Include a direct YouTube link beneath it as an alternative.',
        starter: `<style>
  .video-embed { width: min(100%, 760px); aspect-ratio: 16 / 9; }
  .video-embed iframe { width: 100%; height: 100%; border: 0; }
</style>
<div class="video-embed">
  <!-- Add the privacy-enhanced iframe -->
</div>
<!-- Add a direct fallback link -->`,
        solution: `<style>
  .video-embed {
    position: relative;
    width: min(100%, 760px);
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  .video-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
<div class="video-embed">
  <iframe width="760" height="428"
          src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY"
          title="HTML iframe lesson video"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="encrypted-media; picture-in-picture"
          allowfullscreen></iframe>
</div>
<p><a href="https://www.youtube.com/watch?v=tgbNymZ7vqY"
      target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>`
      },

      { type: 'heading', text: 'Knowledge Check' },
      {
        type: 'quiz',
        questions: [
          { question: 'Which URL form embeds a YouTube video?', options: ['<code>https://www.youtube.com/embed/VIDEO_ID</code>', '<code>https://youtube.com/VIDEO_ID/embed</code>', '<code>https://youtube.com/video/VIDEO_ID.mp4</code>', '<code>embed:youtube/VIDEO_ID</code>'], answer: 0, explanation: 'YouTube embed pages use the /embed/ path followed by the video ID.' },
          { question: 'What does the iframe <code>title</code> provide?', options: ['An accessible name for the embedded player', 'The video’s publication date', 'A CSS aspect ratio', 'A cookie consent response'], answer: 0, explanation: 'The title identifies the iframe to users of assistive technology.' },
          { question: 'Which domain is presented as the privacy-enhanced YouTube embed domain?', options: ['<code>www.youtube-nocookie.com</code>', '<code>www.youtube-private.com</code>', '<code>video.cookie-free.org</code>', '<code>youtube.embed</code>'], answer: 0, explanation: 'The source uses youtube-nocookie.com to reduce cookie-related tracking behavior.' },
          { question: 'Which parameter asks the player to begin muted?', options: ['<code>mute=1</code>', '<code>controls=0</code>', '<code>loop=1</code>', '<code>playlist=1</code>'], answer: 0, explanation: 'mute=1 starts the player with audio muted.' },
          { question: 'What is a key limitation of every YouTube embed?', options: ['The owner can block embedding or embedded playback', 'The iframe must use HTML canvas', 'YouTube videos cannot have captions', 'The player cannot be made responsive'], answer: 0, explanation: 'Video owners and rights holders can restrict or disable embedded playback.' }
        ]
      }
    ]
  }
];

