!function(n){function r(r){for(var t,a,A=r[0],l=r[1],c=r[2],s=0,u=[];s<A.length;s++)a=A[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(m&&m(r);u.length;)u.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var n,r=0;r<i.length;r++){for(var e=i[r],t=!0,A=1;A<e.length;A++){var l=e[A];0!==o[l]&&(t=!1)}t&&(i.splice(r--,1),n=a(a.s=e[0]))}return n}var t={},o={0:0},i=[];function a(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=t,a.d=function(n,r,e){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,r){if(1&r&&(n=a(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)a.d(e,t,function(r){return n[r]}.bind(null,t));return e},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="./";var A=window.webpackJsonp=window.webpackJsonp||[],l=A.push.bind(A);A.push=r,A=A.slice();for(var c=0;c<A.length;c++)r(A[c]);var m=l;i.push([37,1]),e()}({22:function(n,r,e){var t=e(9),o=e(23);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},23:function(n,r,e){"use strict";e.r(r);var t=e(6),o=e.n(t),i=e(7),a=e.n(i)()(o.a);a.push([n.i,".img-gallery {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.img-gallery .image-container {\r\n    height: 100%;\r\n    width: 80%;\r\n    -webkit-column-count: 4;\r\n    -moz-column-count: 4;\r\n    column-count: 4;\r\n    -webkit-column-width: 25%;\r\n    -moz-column-width: 25%;\r\n    column-width: 25%;\r\n    padding: 0 12px;\r\n    column-gap: 20px;\r\n    z-index: 2;\r\n\r\n}\r\n\r\n.img-gallery .image-wrapper {\r\n    -webkit-transition: all 350ms ease;\r\n    transition: all 350ms ease;\r\n    cursor: pointer;\r\n    margin-bottom: 12px;\r\n    /* border: 2px solid rgb(255, 255, 255); */\r\n    /* border-radius: 1rem; */\r\n}\r\n\r\n.img-gallery .image-wrapper:hover {\r\n    filter: opacity(.9);\r\n    transform: scale(1.02);\r\n}\r\n\r\n/* .img-gallery .image:hover {} */\r\n\r\n@media (max-width:991px) {\r\n    .img-gallery .image-container {\r\n        -webkit-column-count: 3;\r\n        -moz-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n@media (max-width:480px) {\r\n    .img-gallery .image-container {\r\n        -webkit-column-count: 2;\r\n        -moz-column-count: 2;\r\n        column-count: 2;\r\n        -webkit-column-width: 50%;\r\n        -moz-column-width: 50%;\r\n        column-width: 50%;\r\n    }\r\n}\r\n\r\n\r\n.img-gallery.expanded {\r\n    overflow: hidden;\r\n}\r\n\r\n.img-gallery .expanded-image {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 999;\r\n    transition: opacity 0.3s, transform 0.3s;\r\n}\r\n\r\n.img-gallery .expanded-image-inner {\r\n    max-width: 90%;\r\n    max-height: 75%;\r\n}\r\n\r\n.img-gallery .close-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 2rem;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\n.img-gallery .download-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    left: 2rem;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n}","",{version:3,sources:["webpack://./components/ImageGallery.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,oBAAoB;IACpB,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,UAAU;;AAEd;;AAEA;IACI,kCAAkC;IAClC,0BAA0B;IAC1B,eAAe;IACf,mBAAmB;IACnB,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA,iCAAiC;;AAEjC;IACI;QACI,uBAAuB;QACvB,oBAAoB;QACpB,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,uBAAuB;QACvB,oBAAoB;QACpB,eAAe;QACf,yBAAyB;QACzB,sBAAsB;QACtB,iBAAiB;IACrB;AACJ;;;AAGA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,wCAAwC;AAC5C",sourcesContent:[".img-gallery {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.img-gallery .image-container {\r\n    height: 100%;\r\n    width: 80%;\r\n    -webkit-column-count: 4;\r\n    -moz-column-count: 4;\r\n    column-count: 4;\r\n    -webkit-column-width: 25%;\r\n    -moz-column-width: 25%;\r\n    column-width: 25%;\r\n    padding: 0 12px;\r\n    column-gap: 20px;\r\n    z-index: 2;\r\n\r\n}\r\n\r\n.img-gallery .image-wrapper {\r\n    -webkit-transition: all 350ms ease;\r\n    transition: all 350ms ease;\r\n    cursor: pointer;\r\n    margin-bottom: 12px;\r\n    /* border: 2px solid rgb(255, 255, 255); */\r\n    /* border-radius: 1rem; */\r\n}\r\n\r\n.img-gallery .image-wrapper:hover {\r\n    filter: opacity(.9);\r\n    transform: scale(1.02);\r\n}\r\n\r\n/* .img-gallery .image:hover {} */\r\n\r\n@media (max-width:991px) {\r\n    .img-gallery .image-container {\r\n        -webkit-column-count: 3;\r\n        -moz-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n@media (max-width:480px) {\r\n    .img-gallery .image-container {\r\n        -webkit-column-count: 2;\r\n        -moz-column-count: 2;\r\n        column-count: 2;\r\n        -webkit-column-width: 50%;\r\n        -moz-column-width: 50%;\r\n        column-width: 50%;\r\n    }\r\n}\r\n\r\n\r\n.img-gallery.expanded {\r\n    overflow: hidden;\r\n}\r\n\r\n.img-gallery .expanded-image {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 999;\r\n    transition: opacity 0.3s, transform 0.3s;\r\n}\r\n\r\n.img-gallery .expanded-image-inner {\r\n    max-width: 90%;\r\n    max-height: 75%;\r\n}\r\n\r\n.img-gallery .close-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 2rem;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\n.img-gallery .download-button {\r\n    position: absolute;\r\n    top: 1rem;\r\n    left: 2rem;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n}"],sourceRoot:""}]),r.default=a},24:function(n,r,e){var t=e(9),o=e(25);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},25:function(n,r,e){"use strict";e.r(r);var t=e(6),o=e.n(t),i=e(7),a=e.n(i)()(o.a);a.push([n.i,"/* SnowingBackground.css */\r\n.snow-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    z-index: 3;\r\n    overflow: hidden;\r\n}\r\n\r\n.snowflake {\r\n    text-align: center;\r\n    position: absolute;\r\n    font-size: 3rem;\r\n    color: white;\r\n    border-radius: 50%;\r\n    opacity: 0.8;\r\n    pointer-events: none;\r\n    animation-duration: 10s;\r\n    animation-timing-function: linear;\r\n    /* Set animation duration separately to override inline style */\r\n}\r\n\r\n@keyframes falling-rotating-cw {\r\n    0% {\r\n        transform: translateY(-20vh) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(100vh) rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes falling-rotating-ccw {\r\n    0% {\r\n        transform: translateY(-20vh) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(100vh) rotate(-360deg);\r\n    }\r\n}","",{version:3,sources:["webpack://./components/SnowingBackground.css"],names:[],mappings:"AAAA,0BAA0B;AAC1B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;IACvB,iCAAiC;IACjC,+DAA+D;AACnE;;AAEA;IACI;QACI,yCAAyC;IAC7C;;IAEA;QACI,2CAA2C;IAC/C;AACJ;;AAEA;IACI;QACI,yCAAyC;IAC7C;;IAEA;QACI,4CAA4C;IAChD;AACJ",sourcesContent:["/* SnowingBackground.css */\r\n.snow-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    z-index: 3;\r\n    overflow: hidden;\r\n}\r\n\r\n.snowflake {\r\n    text-align: center;\r\n    position: absolute;\r\n    font-size: 3rem;\r\n    color: white;\r\n    border-radius: 50%;\r\n    opacity: 0.8;\r\n    pointer-events: none;\r\n    animation-duration: 10s;\r\n    animation-timing-function: linear;\r\n    /* Set animation duration separately to override inline style */\r\n}\r\n\r\n@keyframes falling-rotating-cw {\r\n    0% {\r\n        transform: translateY(-20vh) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(100vh) rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes falling-rotating-ccw {\r\n    0% {\r\n        transform: translateY(-20vh) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(100vh) rotate(-360deg);\r\n    }\r\n}"],sourceRoot:""}]),r.default=a},26:function(n,r,e){var t=e(9),o=e(27);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},27:function(n,r,e){"use strict";e.r(r);var t=e(6),o=e.n(t),i=e(7),a=e.n(i)()(o.a);a.push([n.i,".video-gallery {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.video-gallery .video-container {\r\n    height: 100%;\r\n    width: 80%;\r\n    -webkit-column-count: 4;\r\n    -moz-column-count: 4;\r\n    column-count: 4;\r\n    -webkit-column-width: 25%;\r\n    -moz-column-width: 25%;\r\n    column-width: 25%;\r\n    padding: 0 12px;\r\n    column-gap: 20px;\r\n}\r\n\r\n.video-gallery .video-wrapper {\r\n    -webkit-transition: all 350ms ease;\r\n    transition: all 350ms ease;\r\n    cursor: pointer;\r\n    margin-bottom: 12px;\r\n    /* border: 2px solid rgb(255, 255, 255); */\r\n    /* border-radius: 1rem; */\r\n}\r\n\r\n.video-gallery .video-wrapper:hover {\r\n    filter: opacity(.9);\r\n    /* transform: scale(1.02); */\r\n}\r\n\r\n/* .video-gallery .video:hover {} */\r\n\r\n@media (max-width:991px) {\r\n    .video-gallery .video-container {\r\n        -webkit-column-count: 3;\r\n        -moz-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n@media (max-width:480px) {\r\n    .video-gallery .video-container {\r\n        -webkit-column-count: 2;\r\n        -moz-column-count: 2;\r\n        column-count: 2;\r\n        -webkit-column-width: 50%;\r\n        -moz-column-width: 50%;\r\n        column-width: 50%;\r\n    }\r\n}","",{version:3,sources:["webpack://./components/VideoGallery.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,oBAAoB;IACpB,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,0BAA0B;IAC1B,eAAe;IACf,mBAAmB;IACnB,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA,mCAAmC;;AAEnC;IACI;QACI,uBAAuB;QACvB,oBAAoB;QACpB,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,uBAAuB;QACvB,oBAAoB;QACpB,eAAe;QACf,yBAAyB;QACzB,sBAAsB;QACtB,iBAAiB;IACrB;AACJ",sourcesContent:[".video-gallery {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.video-gallery .video-container {\r\n    height: 100%;\r\n    width: 80%;\r\n    -webkit-column-count: 4;\r\n    -moz-column-count: 4;\r\n    column-count: 4;\r\n    -webkit-column-width: 25%;\r\n    -moz-column-width: 25%;\r\n    column-width: 25%;\r\n    padding: 0 12px;\r\n    column-gap: 20px;\r\n}\r\n\r\n.video-gallery .video-wrapper {\r\n    -webkit-transition: all 350ms ease;\r\n    transition: all 350ms ease;\r\n    cursor: pointer;\r\n    margin-bottom: 12px;\r\n    /* border: 2px solid rgb(255, 255, 255); */\r\n    /* border-radius: 1rem; */\r\n}\r\n\r\n.video-gallery .video-wrapper:hover {\r\n    filter: opacity(.9);\r\n    /* transform: scale(1.02); */\r\n}\r\n\r\n/* .video-gallery .video:hover {} */\r\n\r\n@media (max-width:991px) {\r\n    .video-gallery .video-container {\r\n        -webkit-column-count: 3;\r\n        -moz-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n@media (max-width:480px) {\r\n    .video-gallery .video-container {\r\n        -webkit-column-count: 2;\r\n        -moz-column-count: 2;\r\n        column-count: 2;\r\n        -webkit-column-width: 50%;\r\n        -moz-column-width: 50%;\r\n        column-width: 50%;\r\n    }\r\n}"],sourceRoot:""}]),r.default=a},28:function(n,r,e){var t=e(9),o=e(29);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},29:function(n,r,e){"use strict";e.r(r);var t=e(6),o=e.n(t),i=e(7),a=e.n(i)()(o.a);a.push([n.i,".main {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url('./bg.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: bottom;\r\n    z-index: -2;\r\n\r\n}\r\n\r\n.main .navbar {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    /* height: 4rem; */\r\n    height: 10%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: start;\r\n}\r\n\r\n.main .item-title {\r\n    display: flex;\r\n    text-align: center;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.main .item-link {\r\n    display: flex;\r\n    text-align: center;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.main .title {\r\n    margin-right: 2rem;\r\n    font-size: 2rem;\r\n    color: rgb(6, 6, 6);\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\n.main .option {\r\n    font-size: 1.5rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n    transition: 250ms;\r\n    color: rgb(0, 102, 255);\r\n}\r\n\r\n.main .link:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.main .option:hover {\r\n    transform: scale(1.2);\r\n    color: blue;\r\n}\r\n\r\n.main .option.active {\r\n    transform: scale(1.15);\r\n    color: rgb(4, 2, 153);\r\n}\r\n\r\n\r\n.main .content {\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: center; */\r\n    width: 100%;\r\n    height: 90%;\r\n    overflow: auto;\r\n}\r\n\r\n.main .cat-icon {\r\n    padding-right: 1rem;\r\n}\r\n\r\n@media (max-width:480px) {\r\n\r\n    .main .item-title {\r\n        width: 100%;\r\n        justify-content: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .main .item-link {\r\n        width: 50%;\r\n        margin-left: 0rem;\r\n        justify-content: center;\r\n    }\r\n\r\n    .main .navbar {\r\n        height: 15%;\r\n    }\r\n\r\n    .main .content {\r\n        height: 85%;\r\n    }\r\n}","",{version:3,sources:["webpack://./components/Main.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;IACjC,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,WAAW;;AAEf;;AAEA;IACI,0CAA0C;IAC1C,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,iBAAiB;IACjB,wCAAwC;IACxC,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI;QACI,WAAW;QACX,uBAAuB;QACvB,kBAAkB;IACtB;;IAEA;QACI,UAAU;QACV,iBAAiB;QACjB,uBAAuB;IAC3B;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,WAAW;IACf;AACJ",sourcesContent:[".main {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url('./bg.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: bottom;\r\n    z-index: -2;\r\n\r\n}\r\n\r\n.main .navbar {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    /* height: 4rem; */\r\n    height: 10%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: start;\r\n}\r\n\r\n.main .item-title {\r\n    display: flex;\r\n    text-align: center;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.main .item-link {\r\n    display: flex;\r\n    text-align: center;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.main .title {\r\n    margin-right: 2rem;\r\n    font-size: 2rem;\r\n    color: rgb(6, 6, 6);\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\n.main .option {\r\n    font-size: 1.5rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n    transition: 250ms;\r\n    color: rgb(0, 102, 255);\r\n}\r\n\r\n.main .link:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.main .option:hover {\r\n    transform: scale(1.2);\r\n    color: blue;\r\n}\r\n\r\n.main .option.active {\r\n    transform: scale(1.15);\r\n    color: rgb(4, 2, 153);\r\n}\r\n\r\n\r\n.main .content {\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: center; */\r\n    width: 100%;\r\n    height: 90%;\r\n    overflow: auto;\r\n}\r\n\r\n.main .cat-icon {\r\n    padding-right: 1rem;\r\n}\r\n\r\n@media (max-width:480px) {\r\n\r\n    .main .item-title {\r\n        width: 100%;\r\n        justify-content: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .main .item-link {\r\n        width: 50%;\r\n        margin-left: 0rem;\r\n        justify-content: center;\r\n    }\r\n\r\n    .main .navbar {\r\n        height: 15%;\r\n    }\r\n\r\n    .main .content {\r\n        height: 85%;\r\n    }\r\n}"],sourceRoot:""}]),r.default=a},37:function(n,r,e){"use strict";e.r(r);var t=e(0),o=e.n(t),i=e(16),a=e.n(i);e(22);function A(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,i,a,A=[],l=!0,c=!1;try{if(i=(e=e.call(n)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(t=i.call(e)).done)&&(A.push(t.value),A.length!==r);l=!0);}catch(n){c=!0,o=n}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return A}}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return l(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var c=function(){var n="https://drive.google.com/drive/folders/11onr9XDg2qnBmMjSfz8Hu4E1r-3ACEkB?usp=drive_link",r=A(Object(t.useState)([]),2),e=r[0],i=r[1],a=A(Object(t.useState)(null),2),l=a[0],c=a[1],m=A(Object(t.useState)(!1),2),s=m[0],u=m[1];return Object(t.useEffect)((function(){(function(n){return new Promise((function(r,e){var t=[],o=n.match(/\/folders\/([^/?]+)/)[1],i="https://www.googleapis.com/drive/v3/files?q='".concat(o,"'+in+parents&key=AIzaSyBUr_mnb94MoMew5PDsCL9RJ0q3s76oBFg");fetch(i).then((function(n){return n.json()})).then((function(n){n.files.forEach((function(n){if(n.mimeType.startsWith("image/")){var r="https://drive.google.com/uc?id=".concat(n.id);t.push(r)}})),r(t)})).catch((function(n){console.error("Error fetching data:",n),e(n)}))}))})(n).then((function(n){return i(n)})).catch((function(n){return console.error("Error:",n)}))}),[n]),o.a.createElement("div",{className:"img-gallery ".concat(s?"expanded":"")},o.a.createElement("div",{className:"image-container"},e.map((function(n,r){return o.a.createElement("div",{key:r,className:"image-wrapper",onClick:function(){return function(n){c(n),u(!0)}(r)}},o.a.createElement("img",{className:"image",src:n,alt:"Image ".concat(r),style:{width:"100%"}}))}))),s&&o.a.createElement("div",{className:"expanded-image"},o.a.createElement("img",{className:"expanded-image-inner",src:e[l],alt:"Image ".concat(l)}),o.a.createElement("button",{className:"close-button",onClick:function(){return u(!1)}},"Close")))},m=e(11),s=e(1),u=(e(24),function(){return Object(t.useEffect)((function(){var n=function n(){var r=document.createElement("div");r.className="snowflake",r.style.left="".concat(100*Math.random(),"vw"),r.style.animationDuration="".concat(3*Math.random()+7,"s"),r.textContent="*",r.style.fontSize="".concat(3*Math.random(),"rem");var e=Math.random()<.5?"":"c";r.style.animationName="falling-rotating-".concat(e,"cw"),document.querySelector(".snow-container").appendChild(r),r.addEventListener("animationend",(function(){r.remove(),n()}))};!function(){for(var r=0;r<50;r++)setTimeout(n,1e4*Math.random())}()}),[]),o.a.createElement("div",{className:"snow-container"})});e(26);function d(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,i,a,A=[],l=!0,c=!1;try{if(i=(e=e.call(n)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(t=i.call(e)).done)&&(A.push(t.value),A.length!==r);l=!0);}catch(n){c=!0,o=n}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return A}}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return f(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var g=function(){var n="https://drive.google.com/drive/u/5/folders/1Zrln1qPsJGrjwp7pQSyxBoLejcRmGrbs",r=d(Object(t.useState)([]),2),e=r[0],i=r[1];return Object(t.useEffect)((function(){(function(n){return new Promise((function(r,e){var t=[],o=n.match(/\/folders\/([^/?]+)/)[1],i="https://www.googleapis.com/drive/v3/files?q='".concat(o,"'+in+parents&key=AIzaSyBUr_mnb94MoMew5PDsCL9RJ0q3s76oBFg");fetch(i).then((function(n){return n.json()})).then((function(n){n.files.forEach((function(n){if(n.mimeType.startsWith("video/")){var r="https://drive.google.com/uc?id=".concat(n.id);t.push(r)}})),r(t)})).catch((function(n){console.error("Error fetching data:",n),e(n)}))}))})(n).then((function(n){return i(n)})).catch((function(n){return console.error("Error:",n)}))}),[n]),o.a.createElement("div",{className:"video-gallery"},o.a.createElement("div",{className:"video-container"},e.map((function(n,r){return o.a.createElement("div",{key:r,className:"video-wrapper"},o.a.createElement("video",{className:"video",controls:!0,style:{width:"100%"}},o.a.createElement("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."))}))))};e(28);function C(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,i,a,A=[],l=!0,c=!1;try{if(i=(e=e.call(n)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(t=i.call(e)).done)&&(A.push(t.value),A.length!==r);l=!0);}catch(n){c=!0,o=n}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return A}}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return B(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return B(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var p=function(){var n=C(Object(t.useState)(window.location.href.split("/").slice(-1)[0]),2),r=n[0],e=n[1];return Object(t.useEffect)((function(){""==r?console.log("images"):console.log("videos")}),[r]),o.a.createElement(m.a,{basename:"/"},o.a.createElement("div",{className:"main"},o.a.createElement(u,null),o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"item-title"},o.a.createElement("div",{className:"title"},o.a.createElement("i",{className:"fa-solid fa-cat cat-icon"}),"Mimi Gallery")),o.a.createElement("div",{className:"item-link"},o.a.createElement(m.b,{to:"/",className:"link ".concat(""===r?"active":""),onClick:function(){return e("")}},o.a.createElement("div",{className:"option ".concat(""===r?"active":"")},o.a.createElement("i",{className:"fa-solid fa-paw"})," Images"))),o.a.createElement("div",{className:"item-link"},o.a.createElement(m.b,{to:"/videos",className:"link",onClick:function(){return e("videos")}},o.a.createElement("div",{className:"option ".concat("videos"===r?"active":"")},o.a.createElement("i",{className:"fa-solid fa-paw"})," Videos")))),o.a.createElement("div",{className:"content"},o.a.createElement(s.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(c,null))}}),o.a.createElement(s.a,{path:"/videos",render:function(){return o.a.createElement("div",null,o.a.createElement(g,null))}}))))};e(35);a.a.render(o.a.createElement(p,null),document.getElementById("root"))}});
//# sourceMappingURL=index.bundle.js.map