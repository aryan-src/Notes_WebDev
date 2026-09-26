/* ============================================================
   HTML Academy — Mind Map Renderer & Modal Controller
   ============================================================ */

(function () {
  'use strict';

  let currentTopicId = 'html-basics';
  let searchQuery = '';
  let activeCategory = 'all';
  let collapsedNodeIds = new Set();
  
  // Transform State for Zoom/Pan
  let transform = { x: 0, y: 0, scale: 1 };
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };

  // DOM Elements cache
  let modal, backdrop, searchInput, topicGrid, mindmapViewport, canvasContent, topicTitleEl, topicBadgeEl, topicDescEl;

  // Currently-rendered topic, kept around so we can redraw connector
  // arrows on resize without re-querying MINDMAP_DATA.
  let renderedTopic = null;
  let resizeRaf = null;

  document.addEventListener('DOMContentLoaded', initMindMap);

  function initMindMap() {
    setupDOMReferences();
    if (!modal) return;

    bindEvents();
    renderTopicCards();
    renderCurrentMindMap();
  }

  function setupDOMReferences() {
    modal = document.getElementById('mindmapModal');
    backdrop = document.getElementById('mindmapBackdrop');
    searchInput = document.getElementById('mindmapSearch');
    topicGrid = document.getElementById('mindmapTopicGrid');
    mindmapViewport = document.getElementById('mindmapViewport');
    canvasContent = document.getElementById('mindmapCanvasContent');
    topicTitleEl = document.getElementById('mindmapCurrentTopicTitle');
    topicBadgeEl = document.getElementById('mindmapCurrentTopicBadge');
    topicDescEl = document.getElementById('mindmapCurrentTopicDesc');
  }

  function bindEvents() {
    // Open Trigger from Topbar Nav Button
    const triggerBtn = document.getElementById('mindmapNavBtn');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', openMindMapModal);
    }

    // Close Triggers
    const closeBtn = document.getElementById('mindmapCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeMindMapModal);
    if (backdrop) backdrop.addEventListener('click', closeMindMapModal);

    // ESC Key to close modal
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && !modal.hidden) {
        closeMindMapModal();
      }
    });

    // Topic Search Input
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value.toLowerCase().trim();
        renderTopicCards();
      });
    }

    // Category Filter Chips
    const filterContainer = document.getElementById('mindmapCategoryFilters');
    if (filterContainer) {
      filterContainer.addEventListener('click', function (e) {
        const chip = e.target.closest('.mm-filter-chip');
        if (!chip) return;
        
        const chips = filterContainer.querySelectorAll('.mm-filter-chip');
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        activeCategory = chip.dataset.category || 'all';
        renderTopicCards();
      });
    }

    // Zoom & Pan Controls
    const zoomInBtn = document.getElementById('mmZoomIn');
    const zoomOutBtn = document.getElementById('mmZoomOut');
    const zoomResetBtn = document.getElementById('mmZoomReset');

    if (zoomInBtn) zoomInBtn.addEventListener('click', function() { adjustZoom(0.15); });
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', function() { adjustZoom(-0.15); });
    if (zoomResetBtn) zoomResetBtn.addEventListener('click', resetZoomPan);

    // Trackpad/Mouse Wheel & Touch Panning on Viewport
    if (mindmapViewport) {
      mindmapViewport.addEventListener('wheel', handleWheel, { passive: false });
      mindmapViewport.addEventListener('mousedown', handleMouseDown);
      mindmapViewport.addEventListener('touchstart', handleTouchStart, { passive: true });
      mindmapViewport.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    // Redraw connector arrows if the viewport is resized
    window.addEventListener('resize', function () {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(function () { drawConnectors(renderedTopic); });
    });
  }

  function openMindMapModal(topicId) {
    if (!modal) return;
    if (topicId && typeof MINDMAP_DATA !== 'undefined') {
      const exists = MINDMAP_DATA.some(t => t.id === topicId);
      if (exists) {
        currentTopicId = topicId;
        collapsedNodeIds.clear();
        renderTopicCards();
        renderCurrentMindMap();
      }
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    resetZoomPan();
    // The modal was `hidden` (display:none) during the render above, so
    // every node measured 0x0 and no arrows were drawn — redraw now that
    // the layout is actually visible.
    requestAnimationFrame(function () { drawConnectors(renderedTopic); });
  }

  function closeMindMapModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  // Expose global helper to launch mind map directly for any topic ID
  window.openTopicMindMap = function (topicId) {
    openMindMapModal(topicId);
  };

  /* ---------- Render Topic Selector Cards ---------- */
  function renderTopicCards() {
    if (!topicGrid || typeof MINDMAP_DATA === 'undefined') return;

    const filtered = MINDMAP_DATA.filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery) ||
                            topic.description.toLowerCase().includes(searchQuery) ||
                            topic.category.toLowerCase().includes(searchQuery);
      const matchesCat = activeCategory === 'all' || topic.category.toLowerCase() === activeCategory.toLowerCase();
      return matchesSearch && matchesCat;
    });

    if (filtered.length === 0) {
      topicGrid.innerHTML = `
        <div class="mm-empty-state">
          <span>🔍</span>
          <p>No mind map topics match "${escapeHTML(searchQuery)}"</p>
        </div>
      `;
      return;
    }

    topicGrid.innerHTML = filtered.map(topic => {
      const isActive = topic.id === currentTopicId;
      return `
        <div class="mm-topic-card ${isActive ? 'active' : ''}" data-topic-id="${topic.id}">
          <div class="mm-card-header">
            <span class="mm-card-icon">${topic.icon}</span>
            <span class="mm-card-badge">${escapeHTML(topic.badge)}</span>
          </div>
          <h4 class="mm-card-title">${escapeHTML(topic.title)}</h4>
          <p class="mm-card-desc">${escapeHTML(topic.description)}</p>
          <div class="mm-card-footer">
            <span class="mm-card-meta">${topic.stats.branches} Branches · ${topic.stats.nodes} Key Concepts</span>
            <button class="mm-card-btn" type="button">
              ${isActive ? 'Viewing' : 'Explore Map →'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards
    const cards = topicGrid.querySelectorAll('.mm-topic-card');
    cards.forEach(card => {
      card.addEventListener('click', function () {
        const tid = this.dataset.topicId;
        if (tid && tid !== currentTopicId) {
          currentTopicId = tid;
          collapsedNodeIds.clear();
          renderTopicCards();
          renderCurrentMindMap();
          resetZoomPan();
        }
      });
    });
  }

  /* ---------- Interactive Mind Map Visualizer ---------- */
  function renderCurrentMindMap() {
    if (!canvasContent || typeof MINDMAP_DATA === 'undefined') return;

    const topic = MINDMAP_DATA.find(t => t.id === currentTopicId);
    if (!topic) return;

    // Update Header Metadata
    if (topicTitleEl) topicTitleEl.textContent = topic.title;
    if (topicBadgeEl) topicBadgeEl.textContent = topic.badge;
    if (topicDescEl) topicDescEl.textContent = topic.description;

    const rootData = topic.root;
    renderedTopic = topic;

    // Build tree DOM markup
    const htmlMarkup = `
      <div class="mm-tree-root-container">
        <svg class="mm-connectors" aria-hidden="true"></svg>

        <!-- Central Concept Node -->
        <div class="mm-node mm-node-root" id="node-${rootData.id}" data-node-id="${rootData.id}">
          <div class="mm-node-inner">
            <span class="mm-node-icon">${rootData.icon}</span>
            <div class="mm-node-content">
              <span class="mm-node-title">${escapeHTML(rootData.label)}</span>
              <span class="mm-node-sub">${escapeHTML(rootData.summary)}</span>
            </div>
          </div>
        </div>

        <!-- Core Branches Layer -->
        <div class="mm-branches-wrapper">
          ${(rootData.children || []).map((branch, index) => renderBranch(branch, index)).join('')}
        </div>
      </div>
    `;

    canvasContent.innerHTML = htmlMarkup;
    bindNodeCollapseEvents();
    bindNodeHoverEvents();
    applyTransform();
    drawConnectors(topic);
  }

  function renderBranch(branch, index) {
    const isCollapsed = collapsedNodeIds.has(branch.id);
    const branchColor = branch.color || '#3b82f6';
    const hasChildren = branch.children && branch.children.length > 0;

    return `
      <div class="mm-branch-column" style="--branch-color: ${branchColor}">
        <!-- Core Branch Node -->
        <div class="mm-node mm-node-branch ${isCollapsed ? 'collapsed' : ''}" data-node-id="${branch.id}">
          <div class="mm-node-inner" style="border-left-color: ${branchColor}">
            <span class="mm-node-icon">${branch.icon}</span>
            <div class="mm-node-content">
              <span class="mm-node-title">${escapeHTML(branch.label)}</span>
              <span class="mm-node-sub">${escapeHTML(branch.summary)}</span>
            </div>
            ${hasChildren ? `
              <button class="mm-collapse-btn" type="button" aria-label="Toggle Sub-topics" title="${isCollapsed ? 'Expand' : 'Collapse'}">
                ${isCollapsed ? '+' : '−'}
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Sub-topics Layer -->
        ${(hasChildren && !isCollapsed) ? `
          <div class="mm-subtopics-list">
            ${branch.children.map(subNode => `
              <div class="mm-node mm-node-subtopic ${subNode.isCode ? 'mm-node-code' : ''}" data-node-id="${subNode.id}">
                <div class="mm-node-inner">
                  <span class="mm-node-icon">${subNode.icon}</span>
                  <div class="mm-node-content">
                    <div class="mm-subtopic-title-row">
                      <span class="mm-node-title">${escapeHTML(subNode.label)}</span>
                      ${subNode.badge ? `<span class="mm-subtopic-badge">${escapeHTML(subNode.badge)}</span>` : ''}
                    </div>
                    <span class="mm-node-sub ${subNode.isCode ? 'mm-node-code-text' : ''}">${escapeHTML(subNode.summary)}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  function bindNodeCollapseEvents() {
    if (!canvasContent) return;

    const collapseBtns = canvasContent.querySelectorAll('.mm-collapse-btn');
    collapseBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const branchCard = this.closest('.mm-node-branch');
        if (!branchCard) return;

        const nodeId = branchCard.dataset.nodeId;
        if (collapsedNodeIds.has(nodeId)) {
          collapsedNodeIds.delete(nodeId);
        } else {
          collapsedNodeIds.add(nodeId);
        }

        renderCurrentMindMap();
      });
    });
  }

  /* ---------- Node hover -> highlight its connector arrow(s) ---------- */
  function bindNodeHoverEvents() {
    if (!canvasContent) return;
    const nodes = canvasContent.querySelectorAll('.mm-node[data-node-id]');
    nodes.forEach(node => {
      const id = node.dataset.nodeId;
      node.addEventListener('mouseenter', function () { setConnectorsActive(id, true); });
      node.addEventListener('mouseleave', function () { setConnectorsActive(id, false); });
    });
  }

  function setConnectorsActive(nodeId, active) {
    const svg = canvasContent && canvasContent.querySelector('.mm-connectors');
    if (!svg) return;
    svg.querySelectorAll(`path[data-from="${nodeId}"], path[data-to="${nodeId}"]`).forEach(p => {
      p.classList.toggle('active', active);
    });
  }

  /* ---------- Connector Arrow Engine (real SVG paths, not CSS lines) ---------- */
  const usedMarkerColors = new Set();

  function drawConnectors(topic) {
    if (!canvasContent || !topic) return;
    const container = canvasContent.querySelector('.mm-tree-root-container');
    const svg = container && container.querySelector('.mm-connectors');
    if (!container || !svg) return;

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    if (!w || !h) return;

    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const scale = transform.scale || 1;
    const containerRect = container.getBoundingClientRect();

    function relRect(el) {
      const r = el.getBoundingClientRect();
      return {
        left: (r.left - containerRect.left) / scale,
        top: (r.top - containerRect.top) / scale,
        width: r.width / scale,
        height: r.height / scale,
      };
    }

    function findNode(id) {
      return container.querySelector(`.mm-node[data-node-id="${id}"]`);
    }

    const edges = [];
    const rootEl = findNode(topic.root.id);
    (topic.root.children || []).forEach(branch => {
      const branchEl = findNode(branch.id);
      if (rootEl && branchEl) {
        edges.push({ from: topic.root.id, to: branch.id, fromEl: rootEl, toEl: branchEl, color: branch.color || '#3b82f6' });
      }
      if (branchEl && !branchEl.classList.contains('collapsed')) {
        (branch.children || []).forEach(sub => {
          const subEl = findNode(sub.id);
          if (subEl) {
            edges.push({ from: branch.id, to: sub.id, fromEl: branchEl, toEl: subEl, color: branch.color || '#3b82f6' });
          }
        });
      }
    });

    // Group edges by source node so siblings fan out from evenly-spaced
    // points along the source's right edge instead of a single point —
    // this keeps multiple arrows from crossing right at the source.
    const bySource = new Map();
    edges.forEach(e => {
      if (!bySource.has(e.from)) bySource.set(e.from, []);
      bySource.get(e.from).push(e);
    });
    bySource.forEach(group => {
      const n = group.length;
      group.forEach((e, i) => {
        e.startOffsetRatio = n > 1 ? (i + 1) / (n + 1) : 0.5;
      });
    });

    usedMarkerColors.clear();
    edges.forEach(e => usedMarkerColors.add(e.color));

    const defs = Array.from(usedMarkerColors).map(color => {
      const markerId = 'mm-arrow-' + color.replace('#', '');
      return `
        <marker id="${markerId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="${color}"></path>
        </marker>`;
    }).join('');

    const paths = edges.map(e => {
      const fromR = relRect(e.fromEl);
      const toR = relRect(e.toEl);
      const x1 = fromR.left + fromR.width;
      const y1 = fromR.top + fromR.height * e.startOffsetRatio;
      const x2 = toR.left - 4;
      const y2 = toR.top + toR.height / 2;
      const cp = Math.max(32, (x2 - x1) * 0.55);
      const markerId = 'mm-arrow-' + e.color.replace('#', '');
      const d = `M ${x1.toFixed(1)},${y1.toFixed(1)} C ${(x1 + cp).toFixed(1)},${y1.toFixed(1)} ${(x2 - cp).toFixed(1)},${y2.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
      return `<path class="mm-connector-path" d="${d}" stroke="${e.color}" data-from="${e.from}" data-to="${e.to}" marker-end="url(#${markerId})"></path>`;
    }).join('');

    svg.innerHTML = `<defs>${defs}</defs>${paths}`;
  }

  /* ---------- Zoom & Pan Engine ---------- */
  const MIN_SCALE = 0.4;
  const MAX_SCALE = 2.5;

  function applyTransform() {
    if (!canvasContent) return;
    canvasContent.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`;
    
    const zoomLevelEl = document.getElementById('mmZoomLevel');
    if (zoomLevelEl) {
      zoomLevelEl.textContent = Math.round(transform.scale * 100) + '%';
    }
  }

  function adjustZoom(delta) {
    transform.scale = Math.min(Math.max(transform.scale + delta, MIN_SCALE), MAX_SCALE);
    applyTransform();
  }

  function resetZoomPan() {
    transform = { x: 0, y: 0, scale: 1 };
    applyTransform();
  }

  function handleWheel(e) {
    e.preventDefault();
    if (e.ctrlKey) {
      const zoomFactor = e.deltaY < 0 ? 1.05 : 0.95;
      transform.scale = Math.min(Math.max(0.4, transform.scale * zoomFactor), 2.5);
      applyTransform();
    } else {
      // Two-finger scroll panning
      transform.x -= e.deltaX;
      transform.y -= e.deltaY;
      applyTransform();
    }
  }

  function handleMouseDown(e) {
    if (e.button !== 0) return; // Only left mouse click
    if (e.target.closest('.mm-collapse-btn') || e.target.closest('.mm-node-inner')) {
      // Allow node clicking without triggering viewport drag
    }
    isDragging = true;
    dragStart = { x: e.clientX - transform.x, y: e.clientY - transform.y };
    mindmapViewport.style.cursor = 'grabbing';
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    transform.x = e.clientX - dragStart.x;
    transform.y = e.clientY - dragStart.y;
    applyTransform();
  }

  function handleMouseUp() {
    if (isDragging) {
      isDragging = false;
      if (mindmapViewport) mindmapViewport.style.cursor = 'grab';
    }
  }

  let touchStartPos = { x: 0, y: 0 };
  function handleTouchStart(e) {
    if (e.touches.length === 1 || e.touches.length === 2) {
      const touch = e.touches[0];
      touchStartPos = { x: touch.clientX - transform.x, y: touch.clientY - transform.y };
    }
  }

  function handleTouchMove(e) {
    if (e.touches.length === 1 || e.touches.length === 2) {
      e.preventDefault();
      const touch = e.touches[0];
      transform.x = touch.clientX - touchStartPos.x;
      transform.y = touch.clientY - touchStartPos.y;
      applyTransform();
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
