/**
 * @name HideGiftButton
 * @version 1.0
 * @description Hides the Nitro-Gift button next to the GIF, or yif picker.
 * @author Carsten
 * @authorLink https://twitter.com/cxrstn_s
 * @source https://github.com/gehaut/bd-plugins
 * @invite yvJbVga
 * @donate https://twitch.tv/gehaut 
 */


module.exports = class HideGiftButton {
    load() {
        console.log("%c[HideGiftButton] " + "%cPlugin loaded!", "color: blue", "color: red")
    }

    start() {
        var div = document.getElementsByClassName("buttons-3JBrkn").item(0).getElementsByClassName("button-38aScr").item(0);
        div.setAttribute("style", "display: none;");
    }
    stop() {var div = document.getElementsByClassName("buttons-3JBrkn").item(0).getElementsByClassName("button-38aScr").item(0);
    div.setAttribute("style", "");}

    onSwitch() {
        var div = document.getElementsByClassName("buttons-3JBrkn").item(0).getElementsByClassName("button-38aScr").item(0);
        div.setAttribute("style", "display: none;");
    }
}