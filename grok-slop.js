// ==UserScript==
// @name         grokSlop
// @namespace    https://github.com/yechielw
// @describe     disable grok auto translate
// @match        https://x.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yechielw/userscripts-public/refs/heads/master/grok-slop.js
// @downloadURL  https://raw.githubusercontent.com/yechielw/userscripts-public/refs/heads/master/grok-slop.js
// ==/UserScript==

(() => {
  const selector = 'button[aria-label="Show original"]';

  const clickMatches = () => {
    document.querySelectorAll(selector).forEach(button => button.click());
  };

  clickMatches();

  new MutationObserver(clickMatches).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
