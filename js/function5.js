jQuery(function(e) {
    e("#preloader").delay(1e3).fadeOut(), e("#loader").delay(1e3).fadeOut("slow"), e(".menu-toggle").click(function() {
        e(this).toggleClass("open")
    });
    let t = document.querySelector(".bottom-header-part");
    window.onscroll = function() {
        window.pageYOffset > 200 ? t.classList.add("fix-header") : t.classList.remove("fix-header")
    }, e(document).ready(function() {
        var t = e(".bottom-header-part").height();
        e(".bottom-header-outer-wrapper").css("min-height", t + "px")
    }), e(window).on("load resize", function() {
        992 > e(window).width() && e(window).width() >= 768 ? (e(".main-navigation").find("a").unbind("keydown"), e(".main-navigation").find("li").last().bind("keydown", function(t) {
            9 === t.which && (t.preventDefault(), e("#masthead").find(".menu-toggle").focus())
        })) : 768 > e(window).width() ? (e(".main-navigation").find("li").unbind("keydown"), e(".main-navigation").find("a").last().bind("keydown", function(t) {
            9 === t.which && (t.preventDefault(), e("#masthead").find(".menu-toggle").focus())
        })) : (e(".main-navigation").find("li").unbind("keydown"), e(".main-navigation").find("a").unbind("keydown"))
    });
    var a = e("#masthead .menu-toggle");
    a.on("keydown", function(t) {
        var n = 9 === t.keyCode,
            o = t.shiftKey;
        a.hasClass("open") && o && n && (t.preventDefault(), e(".main-navigation").toggleClass("toggled"), a.removeClass("open"))
    }), e(".header-search-wrap").find(".search-submit").bind("keydown", function(t) {
        9 === t.keyCode && (t.preventDefault(), e(".header-search-icon").focus())
    }), e(".header-search-icon").on("keydown", function(t) {
        var a = 9 === t.keyCode,
            n = t.shiftKey;
        e(".header-search-wrap").hasClass("show") && n && a && (t.preventDefault(), e(".header-search-wrap").removeClass("show"), e(".header-search-icon").focus())
    });
    var n = e(".header-search-wrap");

    function o() {
        e(".progressbar").each(function() {
            var t = e(this).offset().top,
                a = e(window).scrollTop(),
                n = e(this).find(".circle").attr("data-percent");
            parseInt(n, 10), parseInt(100, 10);
            var o = e(this).data("animate");
            t < a + e(window).height() - 30 && !o && (e(this).data("animate", !0), e(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: n / 100,
                emptyFill: "rgba(237,241,244, .3)"
            }).on("circle-animation-progress", function(t, a, n) {
                e(this).find("div").text((100 * n).toFixed(1) + "%")
            }).stop())
        })
    }
    e(".header-search-icon").click(function(e) {
        e.preventDefault(), n.toggleClass("show"), n.find("input.search-field").focus()
    }), e(document).click(function(t) {
        n.is(t.target) || n.has(t.target).length || e(".header-search-wrap").removeClass("show")
    }), e(".pure-portfolio-main-banner-section").hasClass("featured-typed") && new Typed("#typed", {
        stringsElement: "#typed-strings",
        loop: !0,
        backDelay: 900,
        backSpeed: 40,
        typeSpeed: 40
    }), o(), e(window).scroll(o), (wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: !0,
        live: !0
    })).init(), e(document).ready(function() {
        magicMouse(options = {
            cursorOuter: "circle-basic",
            hoverEffect: "circle-move",
            hoverItemMove: !1,
            defaultCursor: !1,
            outerWidth: 30,
            outerHeight: 30
        })
    });
    var i = e(".pure-portfolio-scroll-to-top");
    e(window).scroll(function() {
            e(window).scrollTop() > 400 ? i.addClass("show") : i.removeClass("show")
        }), i.on("click", function(t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, "300")
        }),
        function(e) {
            "use strict";
            e(document).ready(function() {
                var t = document.querySelector(".progress-wrap path"),
                    a = t.getTotalLength();
                t.style.transition = t.style.WebkitTransition = "none", t.style.strokeDasharray = a + " " + a, t.style.strokeDashoffset = a, t.getBoundingClientRect(), t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 10ms linear";
                var n = function() {
                    var n = e(window).scrollTop(),
                        o = e(document).height() - e(window).height();
                    t.style.strokeDashoffset = a - n * a / o
                };
                n(), e(window).scroll(n)
            })
        }(jQuery)
});