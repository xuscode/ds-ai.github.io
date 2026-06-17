/**
 * 3DEXPERIENCE / V5 MCP — Shared Components
 * Navbar & Footer injected via JS so one edit updates all pages.
 */
(function () {
    'use strict';

    // Detect which page we're on
    var path = window.location.pathname;
    var pageType = /docs\.html/.test(path) ? 'docs'
                 : /contact\.html/.test(path) ? 'contact'
                 : 'index';

    // Helper: generate nav link href depending on current page
    function navHref(target) {
        return pageType === 'index' ? '#' + target : 'index.html#' + target;
    }

    // ======================================================
    // Standard Navbar — used by index.html & contact.html
    // ======================================================
    var NAV_STANDARD = [
    '<nav class="nav">',
    '  <div class="nav-container">',
    '    <div class="nav-brand">',
    '      <svg class="nav-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" style="display:none">',
    '        <circle cx="16" cy="16" r="14" stroke="url(#logo-grad)" stroke-width="2.5"/>',
    '        <path d="M16 4L22 16L16 28L10 16L16 4Z" fill="url(#logo-grad)" opacity="0.9"/>',
    '        <circle cx="16" cy="16" r="3" fill="white"/>',
    '        <defs>',
    '          <linearGradient id="logo-grad" x1="4" y1="4" x2="28" y2="28">',
    '            <stop stop-color="#0078D7"/><stop offset="1" stop-color="#00B4D8"/>',
    '          </linearGradient>',
    '        </defs>',
    '      </svg>',
    '      <span class="nav-title">3DEXPERIENCE AI 开发平台</span>',
    '    </div>',
    '    <div class="nav-links">',
    '      <a href="' + navHref('features') + '">核心能力</a>',
    '      <a href="' + navHref('quickstart') + '">快速接入</a>',
    '      <a href="' + navHref('examples') + '">使用示例</a>',
    '      <a href="docs.html" class="nav-link-docs">开发文档</a>',
    '    </div>',
    '    <button class="btn-nav-cta">登录</button>',
    '    <button class="mobile-menu-btn" aria-label="菜单">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '  </div>',
    '</nav>'
    ].join('\n');

    // ======================================================
    // Docs Navbar — used by docs.html
    // ======================================================
    var NAV_DOCS = [
    '<nav class="nav">',
    '  <div class="nav-container">',
    '    <div class="nav-brand">',
    '      <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;">',
    '        <svg class="nav-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" style="display:none">',
    '          <circle cx="16" cy="16" r="14" stroke="url(#logo-grad)" stroke-width="2.5"/>',
    '          <path d="M16 4L22 16L16 28L10 16L16 4Z" fill="url(#logo-grad)" opacity="0.9"/>',
    '          <circle cx="16" cy="16" r="3" fill="white"/>',
    '          <defs>',
    '            <linearGradient id="logo-grad" x1="4" y1="4" x2="28" y2="28">',
    '              <stop stop-color="#0078D7"/><stop offset="1" stop-color="#00B4D8"/>',
    '            </linearGradient>',
    '          </defs>',
    '        </svg>',
    '        <span class="nav-title">3DEXPERIENCE AI 开发平台</span>',
    '      </a>',
    '    </div>',
    '    <div class="nav-links">',
    '      <a href="index.html#features">核心能力</a>',
    '      <a href="index.html#quickstart">快速接入</a>',
    '      <a href="index.html#examples">使用示例</a>',
    '      <a href="docs.html" class="nav-link-docs">开发文档</a>',
    '    </div>',
    '    <button class="btn-nav-cta" id="docsLoginBtn">登录</button>',
    '    <button class="mobile-menu-btn" id="docsMobileMenuBtn" aria-label="菜单">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '  </div>',
    '</nav>'
    ].join('\n');

    // ======================================================
    // Footer — shared across all pages
    // ======================================================
    var FOOTER = [
    '<footer class="footer">',
    '  <div class="footer-container">',
    '    <div class="footer-grid">',
    '      <div class="footer-col footer-col-brand">',
    '        <div class="footer-brand">',
    '          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style="display:none">',
    '            <circle cx="16" cy="16" r="14" stroke="url(#logo-grad-2)" stroke-width="2.5"/>',
    '            <path d="M16 4L22 16L16 28L10 16L16 4Z" fill="url(#logo-grad-2)" opacity="0.9"/>',
    '            <circle cx="16" cy="16" r="3" fill="white"/>',
    '            <defs>',
    '              <linearGradient id="logo-grad-2" x1="4" y1="4" x2="28" y2="28">',
    '                <stop stop-color="#0078D7"/><stop offset="1" stop-color="#00B4D8"/>',
    '              </linearGradient>',
    '            </defs>',
    '          </svg>',
    '          <span>3DEXPERIENCE / V5 AI开发平台</span>',
    '        </div>',
    '      </div>',
    '      <div class="footer-col">',
    '        <h4>开发者</h4>',
    '        <a href="' + navHref('quickstart') + '">快速接入</a>',
    '        <a href="docs.html">工具列表</a>',
    '        <a href="docs.html">API 文档</a>',
    '        <a href="#">GitHub</a>',
    '      </div>',
    '      <div class="footer-col">',
    '        <h4>支持</h4>',
    '        <a href="#">常见问题</a>',
    '        <a href="#">社区讨论</a>',
    '        <a href="contact.html">联系我们</a>',
    '      </div>',
    '    </div>',
    '    <div class="footer-bottom">',
    '      <span>&copy; 2026 3DEXPERIENCE / V5 AI开发平台. CATIA is a registered trademark of Dassault Systèmes.</span>',
    '      <div class="footer-bottom-links">',
    '        <a href="#">隐私政策</a>',
    '        <a href="#">服务条款</a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</footer>'
    ].join('\n');

    // ======================================================
    // Injection
    // ======================================================
    function inject() {
        var navEl = document.getElementById('nav-placeholder');
        var footerEl = document.getElementById('footer-placeholder');

        if (navEl) {
            var isDocs = navEl.getAttribute('data-type') === 'docs';
            navEl.outerHTML = isDocs ? NAV_DOCS : NAV_STANDARD;
        }
        if (footerEl) {
            footerEl.outerHTML = FOOTER;
        }
    }

    // Run immediately — the placeholder divs are already in the DOM
    // (this script is loaded at the bottom of <body>)
    inject();

})();
