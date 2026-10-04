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
  let hasDragged = false;

  // DOM Elements cache
  let modal, backdrop, searchInput, topicGrid, mindmapViewport, canvasContent;
  let topicTitleEl, topicBadgeEl, topicDescEl, sidebarToggleBtn, toggleAllBtn;
  let mindmapBodyEl, mindmapSidebarEl, sidebarOverlayEl;
  let activeNodeId = null;

  // Currently-rendered topic, kept around so we can redraw connector arrows
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
    sidebarToggleBtn = document.getElementById('mmSidebarToggle');
    toggleAllBtn = document.getElementById('mmToggleAll');
    mindmapBodyEl = document.querySelector('.mindmap-body');
    mindmapSidebarEl = document.getElementById('mindmapSidebar');
    sidebarOverlayEl = document.getElementById('mmSidebarOverlay');
  }

  function bindEvents() {
    // Open Trigger from Topbar Nav Button
    const triggerBtn = document.getElementById('mindmapNavBtn');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', function () {
        openMindMapModal();
      });
    }

    // Close Triggers
    const closeBtn = document.getElementById('mindmapCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeMindMapModal);
    if (backdrop) backdrop.addEventListener('click', closeMindMapModal);

    // Mobile Sidebar Backdrop Click
    if (sidebarOverlayEl) {
      sidebarOverlayEl.addEventListener('click', function () {
        if (mindmapBodyEl) mindmapBodyEl.classList.remove('sidebar-mobile-open');
        sidebarOverlayEl.classList.remove('active');
      });
    }

    // ESC Key to close modal or sidebar
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && !modal.hidden) {
        if (mindmapBodyEl && mindmapBodyEl.classList.contains('sidebar-mobile-open')) {
          mindmapBodyEl.classList.remove('sidebar-mobile-open');
          if (sidebarOverlayEl) sidebarOverlayEl.classList.remove('active');
        } else {
          closeMindMapModal();
        }
      }
    });

    // Sidebar Toggle Button
    if (sidebarToggleBtn && mindmapBodyEl) {
      sidebarToggleBtn.addEventListener('click', function () {
        if (isMobile()) {
          const isOpen = mindmapBodyEl.classList.toggle('sidebar-mobile-open');
          if (sidebarOverlayEl) sidebarOverlayEl.classList.toggle('active', isOpen);
        } else {
          mindmapBodyEl.classList.toggle('sidebar-collapsed');
          setTimeout(function () {
            fitToView();
            drawConnectors(renderedTopic);
          }, 260);
        }
      });
    }

    // Toggle All (Collapse All / Expand All) Button
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', handleToggleAll);
    }

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

    if (zoomInBtn) zoomInBtn.addEventListener('click', function() { adjustZoom(1.2); });
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', function() { adjustZoom(0.833); });
    if (zoomResetBtn) zoomResetBtn.addEventListener('click', function() { fitToView(); });

    // Trackpad/Mouse Wheel & Touch Panning on Viewport (Desktop only for pan)
    if (mindmapViewport) {
      mindmapViewport.addEventListener('wheel', handleWheel, { passive: false });
      mindmapViewport.addEventListener('mousedown', handleMouseDown);
      mindmapViewport.addEventListener('touchstart', handleTouchStart, { passive: true });
      mindmapViewport.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    // Redraw connector arrows on resize
    window.addEventListener('resize', function () {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(function () {
        if (isMobile()) {
          if (canvasContent) canvasContent.style.transform = 'none';
        } else {
          applyTransform();
          drawConnectors(renderedTopic);
        }
      });
    });
  }

  function isMobile() {
    return window.innerWidth <= 768;
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

    // Measure and fit once modal is rendered
    requestAnimationFrame(function () {
      if (isMobile()) {
        if (canvasContent) canvasContent.style.transform = 'none';
      } else {
        fitToView();
        drawConnectors(renderedTopic);
      }
    });
  }

  function closeMindMapModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (mindmapBodyEl) mindmapBodyEl.classList.remove('sidebar-mobile-open');
    if (sidebarOverlayEl) sidebarOverlayEl.classList.remove('active');
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

    topicGrid.innerHTML = filtered.map((topic, idx) => {
      const isActive = topic.id === currentTopicId;
      const progressPercent = Math.min(100, Math.round(((idx % 3 + 2) / 4) * 100));
      const tags = [topic.badge || 'Essential', 'HTML5', topic.category || 'DOM'];

      return `
        <div class="mm-topic-card ${isActive ? 'active' : ''}" data-topic-id="${topic.id}">
          <div class="mm-card-header">
            <div class="mm-card-header-left">
              <span class="mm-card-icon">${topic.icon}</span>
              <div class="mm-card-header-titles">
                <span class="mm-card-badge">${escapeHTML(topic.badge)}</span>
                <h4 class="mm-card-title">${escapeHTML(topic.title)}</h4>
              </div>
            </div>
            <span class="mm-card-node-stat">${topic.stats.nodes} Nodes</span>
          </div>
          <p class="mm-card-desc">${escapeHTML(topic.description)}</p>
          
          <div class="mm-card-progress-wrap">
            <div class="mm-card-progress-bar">
              <div class="mm-card-progress-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>

          <div class="mm-card-footer">
            <div class="mm-card-tags">
              ${tags.map(t => `<span class="mm-card-tag">${escapeHTML(t)}</span>`).join('')}
            </div>
            <button class="mm-card-btn" type="button">
              ${isActive ? 'Viewing ✓' : 'Explore Map →'}
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
          if (!isMobile()) fitToView();
        }

        // Auto-close mobile sidebar drawer on topic selection
        if (isMobile() && mindmapBodyEl) {
          mindmapBodyEl.classList.remove('sidebar-mobile-open');
          if (sidebarOverlayEl) sidebarOverlayEl.classList.remove('active');
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

    // Update Toggle All button label
    updateToggleAllBtn();

    // Build hierarchical tree DOM markup
    const htmlMarkup = `
      <div class="mm-tree-root-container">
        <svg class="mm-connectors" aria-hidden="true"></svg>

        <!-- Central Concept Node (Root) -->
        <div class="mm-node mm-node-root ${activeNodeId === rootData.id ? 'is-active-node' : ''}" id="node-${rootData.id}" data-node-id="${rootData.id}">
          <div class="mm-node-inner">
            <span class="mm-node-icon">${rootData.icon || '🧠'}</span>
            <div class="mm-node-content">
              <span class="mm-node-title">${escapeHTML(rootData.label)}</span>
              ${rootData.summary ? `<span class="mm-node-sub">${escapeHTML(rootData.summary)}</span>` : ''}
            </div>
          </div>
        </div>

        <!-- Level 1: Branches Row / Mobile Cluster Cards -->
        <div class="mm-branches-wrapper">
          ${(rootData.children || []).map((branch, index) => renderBranch(branch, index)).join('')}
        </div>
      </div>
    `;

    canvasContent.innerHTML = htmlMarkup;
    bindNodeEvents(topic);
    
    if (isMobile()) {
      canvasContent.style.transform = 'none';
    } else {
      applyTransform();
      drawConnectors(topic);
    }
  }

  function renderBranch(branch, index) {
    const isCollapsed = collapsedNodeIds.has(branch.id);
    const branchColor = branch.color || '#3b82f6';
    const hasChildren = branch.children && branch.children.length > 0;
    const isBranchActive = activeNodeId === branch.id;

    return `
      <div class="mm-branch-column" style="--branch-color: ${branchColor}">
        <!-- Level 1 Branch Node / Cluster Header -->
        <div class="mm-node mm-node-branch ${isCollapsed ? 'collapsed' : ''} ${isBranchActive ? 'is-active-node' : ''}" id="node-${branch.id}" data-node-id="${branch.id}">
          <div class="mm-node-inner" style="border-left-color: ${branchColor}">
            <span class="mm-node-icon">${branch.icon || '📌'}</span>
            <div class="mm-node-content">
              <span class="mm-node-title">${escapeHTML(branch.label)}</span>
              ${branch.summary ? `<span class="mm-node-sub">${escapeHTML(branch.summary)}</span>` : ''}
            </div>
            ${hasChildren ? `
              <button class="mm-collapse-btn" type="button" aria-label="${isCollapsed ? 'Expand' : 'Collapse'}" title="${isCollapsed ? 'Expand branch' : 'Collapse branch'}">
                ${isCollapsed ? '+' : '−'}
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Level 2: Subtopics Row / Tree Nodes with Guide Lines -->
        ${(hasChildren && !isCollapsed) ? `
          <div class="mm-subtopics-list">
            ${branch.children.map(subNode => {
              const isSubActive = activeNodeId === subNode.id;
              return `
                <div class="mm-node mm-node-subtopic node-chip ${subNode.isCode ? 'mm-node-code' : ''} ${isSubActive ? 'is-active-node' : ''}" id="node-${subNode.id}" data-node-id="${subNode.id}">
                  <div class="mm-node-inner">
                    <span class="mm-node-icon">${subNode.icon || '💡'}</span>
                    <div class="mm-node-content">
                      <div class="mm-subtopic-title-row">
                        <span class="mm-node-title">${escapeHTML(subNode.label)}</span>
                        ${subNode.badge ? `<span class="mm-subtopic-badge">${escapeHTML(subNode.badge)}</span>` : ''}
                      </div>
                      <span class="mm-node-sub ${subNode.isCode ? 'mm-node-code-text' : ''}">${escapeHTML(subNode.summary)}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  function toggleBranchCollapse(nodeId) {
    if (collapsedNodeIds.has(nodeId)) {
      collapsedNodeIds.delete(nodeId);
    } else {
      collapsedNodeIds.add(nodeId);
    }
    renderCurrentMindMap();
    requestAnimationFrame(function () {
      if (!isMobile()) drawConnectors(renderedTopic);
    });
  }

  function handleToggleAll() {
    if (!renderedTopic) return;
    const branches = renderedTopic.root.children || [];
    const allCollapsed = branches.every(b => collapsedNodeIds.has(b.id));

    if (allCollapsed) {
      collapsedNodeIds.clear();
    } else {
      branches.forEach(b => collapsedNodeIds.add(b.id));
    }
    renderCurrentMindMap();
    requestAnimationFrame(function () {
      if (!isMobile()) {
        fitToView();
        drawConnectors(renderedTopic);
      }
    });
  }

  function updateToggleAllBtn() {
    if (!toggleAllBtn || !renderedTopic) return;
    const branches = renderedTopic.root.children || [];
    const allCollapsed = branches.length > 0 && branches.every(b => collapsedNodeIds.has(b.id));
    toggleAllBtn.textContent = allCollapsed ? 'Expand All' : 'Collapse All';
  }

  function bindNodeEvents(topic) {
    if (!canvasContent) return;

    // 1. Collapse toggle handlers on branch collapse buttons
    const collapseButtons = canvasContent.querySelectorAll('.mm-collapse-btn');
    collapseButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const branchCard = this.closest('.mm-node-branch');
        if (branchCard && branchCard.dataset.nodeId) {
          toggleBranchCollapse(branchCard.dataset.nodeId);
        }
      });
    });

    // 2. Node click handlers: toggle collapse on branch, toggle visual focus without popup
    const allNodes = canvasContent.querySelectorAll('.mm-node[data-node-id]');
    allNodes.forEach(nodeEl => {
      nodeEl.addEventListener('click', function (e) {
        if (hasDragged) return;
        if (e.target.closest('.mm-collapse-btn')) return;
        e.stopPropagation();

        const nodeId = this.dataset.nodeId;
        if (this.classList.contains('mm-node-branch') && nodeId) {
          toggleBranchCollapse(nodeId);
          return;
        }

        // Toggle active selection state
        activeNodeId = (activeNodeId === nodeId) ? null : nodeId;
        canvasContent.querySelectorAll('.mm-node').forEach(el => {
          el.classList.toggle('is-active-node', el.dataset.nodeId === activeNodeId);
        });
      });

      // Node Hover -> Highlight SVG Connectors on Desktop
      const id = nodeEl.dataset.nodeId;
      nodeEl.addEventListener('mouseenter', function () { setConnectorsActive(id, true); });
      nodeEl.addEventListener('mouseleave', function () { setConnectorsActive(id, false); });
    });
  }

  function setConnectorsActive(nodeId, active) {
    const svg = canvasContent && canvasContent.querySelector('.mm-connectors');
    if (!svg) return;
    svg.querySelectorAll(`path[data-from="${nodeId}"], path[data-to="${nodeId}"]`).forEach(p => {
      p.classList.toggle('active', active);
    });
  }

  /* ---------- Connector Arrow Engine (Precise Top-Down Tree Curves) ---------- */
  const usedMarkerColors = new Set();

  function drawConnectors(topic) {
    if (isMobile() || !canvasContent || !topic) return;
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
      if (!el) return null;
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
    const rootR = relRect(rootEl);
    const branches = topic.root.children || [];
    const branchCount = branches.length;

    usedMarkerColors.clear();

    branches.forEach((branch, bIdx) => {
      const branchEl = findNode(branch.id);
      const branchR = relRect(branchEl);
      const branchColor = branch.color || '#3b82f6';
      usedMarkerColors.add(branchColor);

      if (rootR && branchR) {
        // Start evenly distributed along the bottom of the Root node
        const startX = branchCount > 1 
          ? rootR.left + rootR.width * ((bIdx + 1) / (branchCount + 1))
          : rootR.left + rootR.width / 2;
        const startY = rootR.top + rootR.height;

        // End at top center of branch node
        const endX = branchR.left + branchR.width / 2;
        const endY = branchR.top;

        const cpY = Math.max(24, (endY - startY) * 0.5);
        const d = `M ${startX.toFixed(1)},${startY.toFixed(1)} C ${startX.toFixed(1)},${(startY + cpY).toFixed(1)} ${endX.toFixed(1)},${(endY - cpY).toFixed(1)} ${endX.toFixed(1)},${(endY - 6).toFixed(1)}`;

        edges.push({
          from: topic.root.id,
          to: branch.id,
          d: d,
          color: branchColor
        });
      }

      // Connect Branch to each Subtopic if expanded
      if (branchEl && !collapsedNodeIds.has(branch.id) && branch.children && branch.children.length > 0) {
        const subs = branch.children;
        const subCount = subs.length;

        subs.forEach((sub, sIdx) => {
          const subEl = findNode(sub.id);
          const subR = relRect(subEl);
          if (!branchR || !subR) return;

          // Start evenly distributed along the bottom of the Branch node
          const startX = subCount > 1
            ? branchR.left + branchR.width * ((sIdx + 1) / (subCount + 1))
            : branchR.left + branchR.width / 2;
          const startY = branchR.top + branchR.height;

          // End at top center of subtopic node
          const endX = subR.left + subR.width / 2;
          const endY = subR.top;

          const cpY = Math.max(16, (endY - startY) * 0.5);
          const d = `M ${startX.toFixed(1)},${startY.toFixed(1)} C ${startX.toFixed(1)},${(startY + cpY).toFixed(1)} ${endX.toFixed(1)},${(endY - cpY).toFixed(1)} ${endX.toFixed(1)},${(endY - 6).toFixed(1)}`;

          edges.push({
            from: branch.id,
            to: sub.id,
            d: d,
            color: branchColor
          });
        });
      }
    });

    const defs = Array.from(usedMarkerColors).map(color => {
      const markerId = 'mm-arrow-' + color.replace('#', '');
      return `
        <marker id="${markerId}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${color}"></path>
        </marker>`;
    }).join('');

    const paths = edges.map(e => {
      const markerId = 'mm-arrow-' + e.color.replace('#', '');
      return `<path class="mm-connector-path" d="${e.d}" stroke="${e.color}" data-from="${e.from}" data-to="${e.to}" marker-end="url(#${markerId})"></path>`;
    }).join('');

    svg.innerHTML = `<defs>${defs}</defs>${paths}`;
  }

  /* ---------- Smooth Pan & Zoom Engine ---------- */
  const MIN_SCALE = 0.15;
  const MAX_SCALE = 2.2;

  function applyTransform() {
    if (isMobile()) return;
    if (!canvasContent) return;
    canvasContent.style.transform = `translate(${transform.x.toFixed(1)}px, ${transform.y.toFixed(1)}px) scale(${transform.scale.toFixed(3)})`;
    
    const zoomLevelEl = document.getElementById('mmZoomLevel');
    if (zoomLevelEl) {
      zoomLevelEl.textContent = Math.round(transform.scale * 100) + '%';
    }
  }

  function adjustZoom(factor) {
    if (isMobile() || !mindmapViewport) return;
    const rect = mindmapViewport.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, factor);
  }

  function zoomAt(clientX, clientY, factor) {
    if (isMobile() || !mindmapViewport) return;
    const rect = mindmapViewport.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    const oldScale = transform.scale;
    const newScale = Math.min(Math.max(oldScale * factor, MIN_SCALE), MAX_SCALE);
    if (Math.abs(newScale - oldScale) < 0.001) return;

    transform.x = mouseX - (mouseX - transform.x) * (newScale / oldScale);
    transform.y = mouseY - (mouseY - transform.y) * (newScale / oldScale);
    transform.scale = newScale;
    applyTransform();
  }

  function fitToView() {
    if (isMobile()) {
      if (canvasContent) canvasContent.style.transform = 'none';
      return;
    }
    const container = canvasContent && canvasContent.querySelector('.mm-tree-root-container');
    if (!container || !mindmapViewport) {
      transform = { x: 0, y: 0, scale: 1 };
      applyTransform();
      return;
    }

    const contentW = container.offsetWidth;
    const contentH = container.offsetHeight;
    const viewportW = mindmapViewport.clientWidth;
    const viewportH = mindmapViewport.clientHeight;

    if (!contentW || !contentH || !viewportW || !viewportH) {
      transform = { x: 0, y: 0, scale: 1 };
      applyTransform();
      return;
    }

    const padX = 80;
    const padY = 80;
    const fitScaleX = (viewportW - padX * 2) / contentW;
    const fitScaleY = (viewportH - padY * 2) / contentH;
    let fitScale = Math.min(fitScaleX, fitScaleY, 1.05);

    // Floor and ceiling bounds for initial open fit
    fitScale = Math.max(Math.min(fitScale, 1.1), MIN_SCALE);

    const x = Math.max(20, (viewportW - (contentW + 160) * fitScale) / 2);
    const y = Math.max(30, (viewportH - (contentH + 160) * fitScale) / 2);

    transform = { x, y, scale: fitScale };
    applyTransform();
  }

  function handleWheel(e) {
    if (isMobile()) return; // allow natural vertical scroll on mobile
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      const zoomFactor = e.deltaY < 0 ? 1.06 : 0.94;
      zoomAt(e.clientX, e.clientY, zoomFactor);
    } else {
      // Two-finger trackpad or wheel pan
      transform.x -= e.deltaX;
      transform.y -= e.deltaY;
      applyTransform();
    }
  }

  function handleMouseDown(e) {
    if (isMobile()) return;
    if (e.button !== 0) return; // Left click only
    if (e.target.closest('.mm-collapse-btn') || e.target.closest('.mm-node')) return;

    isDragging = true;
    hasDragged = false;
    dragStart = { x: e.clientX - transform.x, y: e.clientY - transform.y };
    if (mindmapViewport) mindmapViewport.classList.add('is-dragging');
  }

  function handleMouseMove(e) {
    if (isMobile() || !isDragging) return;
    const dx = Math.abs(e.clientX - (dragStart.x + transform.x));
    const dy = Math.abs(e.clientY - (dragStart.y + transform.y));
    if (dx > 3 || dy > 3) hasDragged = true;

    transform.x = e.clientX - dragStart.x;
    transform.y = e.clientY - dragStart.y;
    applyTransform();
  }

  function handleMouseUp() {
    if (isDragging) {
      isDragging = false;
      if (mindmapViewport) mindmapViewport.classList.remove('is-dragging');
    }
  }

  let touchStartPos = { x: 0, y: 0 };
  let pinchStartDist = null;
  let pinchStartScale = 1;

  function touchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  }

  function handleTouchStart(e) {
    if (isMobile()) return; // Let touch scroll natively on mobile outline
    if (e.touches.length === 2) {
      pinchStartDist = touchDist(e.touches);
      pinchStartScale = transform.scale;
    } else if (e.touches.length === 1) {
      pinchStartDist = null;
      const touch = e.touches[0];
      touchStartPos = { x: touch.clientX - transform.x, y: touch.clientY - transform.y };
    }
  }

  function handleTouchMove(e) {
    if (isMobile()) return; // Let touch scroll natively on mobile outline
    if (e.touches.length === 2 && pinchStartDist) {
      e.preventDefault();
      const newDist = touchDist(e.touches);
      const ratio = newDist / pinchStartDist;
      const center = {
        clientX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        clientY: (e.touches[0].clientY + e.touches[1].clientY) / 2
      };
      zoomAt(center.clientX, center.clientY, ratio / (transform.scale / pinchStartScale));
    } else if (e.touches.length === 1 && !pinchStartDist) {
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

