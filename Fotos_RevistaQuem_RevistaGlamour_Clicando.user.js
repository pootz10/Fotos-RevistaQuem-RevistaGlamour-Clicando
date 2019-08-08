// ==UserScript==
// @name        Fotos RevistaQuem RevistaGlamour Clicando
// @namespace   pootz10
// @description Permite Abrir Fotos de Links da RevistaQuem e RevistaGlamour da Globo.com na Outra Aba Clicando
// @include     http://revista*.globo.com/*.html
// @include     https://revista*.globo.com/*.html
// @version     1.0
// @history     ...
// @license     MIT
// @require     https://code.jquery.com/jquery-2.2.3.min.js
// @require     https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @updateURL   https://raw.githubusercontent.com/pootz10/Fotos-RevistaQuem-RevistaGlamour-Clicando/master/Fotos_RevistaQuem_RevistaGlamour_Clicando.user.js
// @downloadURL https://raw.githubusercontent.com/pootz10/Fotos-RevistaQuem-RevistaGlamour-Clicando/master/Fotos_RevistaQuem_RevistaGlamour_Clicando.user.js
// @grant       GM_openInTab
// @run-at      document-idle
// ==/UserScript==

waitForKeyElements("image.lazy-loaded.lazy-loaded", clickableImage, false);

function clickableImage (jNode) {

     var imgLink = jNode.data ("src");
     jNode.on( "click", function() {

         GM_openInTab(imgLink);

     });
};
