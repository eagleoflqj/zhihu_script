// ==UserScript==
// @name         zhihu_script
// @namespace    https://github.com/eagleoflqj/zhihu_script
// @version      0.0.2
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
    const remove_hot = () => $('#Popover1-content > div').remove(); // 知乎热搜
    const remove_elements = () => {
        const input = $('.SearchBar-input > input'); // 搜索框
        input.attr('placeholder', '');
        input.focus(remove_hot);
        remove_hot();
    }
    setInterval(remove_elements, 100);
})();
