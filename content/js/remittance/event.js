//---------------------------------------------------
// popup
//---------------------------------------------------
$(function () {
    // 팝업 열기
    $('.btn-apply').click(function () {
        openPop('event-apply');
    });
    // 팝업 닫기
    $('.btn-close').click(function () {
        closePop('event-apply');
    });
});

function openPop(flag) {
    $(window).scrollTop(0);
    $('#' + flag).show();
    $('html').addClass('popup-active');
}

function closePop(flag) {
    $('#' + flag).hide();
    $('html').removeClass('popup-active');
}

//---------------------------------------------------
// scrollmagic
//---------------------------------------------------
$(function () {
    // init controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "350%"
        }
    });

    // build scenes
    new ScrollMagic.Scene({
            triggerElement: "#parallax"
        })
        .setTween(".effect-coin1", {
            y: "300%",
            ease: Linear.easeInOut
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#parallax"
        })
        .setTween(".effect-coin2", {
            y: "260%",
            ease: Linear.easeInOut
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#parallax"
        })
        .setTween(".effect-coin3", {
            y: "270%",
            ease: Linear.easeInOut
        })
        .addTo(controller);
});