const resetRootFontSize = function(doc, win) {
    let viewport = document.querySelector("meta[name=viewport]");
    if (window.devicePixelRatio == 1) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    }
    else if (window.devicePixelRatio == 2) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
    }
    else if (window.devicePixelRatio == 3) {
        viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
        // viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    }
    else
    {
        viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    }

    // 
    // viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');

    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
            console.log('rem=================')
            log('clientWidth==========',clientWidth)
            log('fontSize============',docEl.style.fontSize)
            log('devicePixelRatio=========',window.devicePixelRatio)
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    console.log('DOMContentLoaded end')
}

resetRootFontSize(document, window);


window.onResize = function() {
    console.log('界面大小reset========================================')
    resetRootFontSize(document, window);
}

export default resetRootFontSize