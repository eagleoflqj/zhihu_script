// ==UserScript==
// @name         zhihu_script
// @namespace    https://github.com/eagleoflqj/zhihu_script
// @version      0.0.1
// @description  Don't waste time on zhihu
// @author       You
// @match        https://www.zhihu.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const prefix = 'https://www.zhihu.com/';
    const time_consuming_urls = [
        '', // 推荐
        'explore', // 发现
        'hot', // 热榜
    ];
    const suffix = window.location.href.slice(prefix.length);
    if (~time_consuming_urls.indexOf(suffix)) {
        window.location.href = prefix + 'follow';
    }
    const remove_elements = () => {
        const input = $('.SearchBar-input > input');
        input.attr('placeholder', '');
        input.unbind();
        input.focus(() => $('body > div:last-child').remove());
    }
    setInterval(remove_elements, 100);
})();
