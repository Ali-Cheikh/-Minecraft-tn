function sleep(e) {
    return new Promise((t=>setTimeout(t, e)))
}
async function showCopied() {
    var e = document.getElementById("copied");
    e.innerHTML = "IP COPIED",
    await sleep(3e3),
    e.innerHTML = "play.minecraft.tn"
}
async function showCopiedDiscord() {
    window.open("https://discord.gg/xceg9Aef94", "_blank")
}
window.innerWidth < 768 && [].slice.call(document.querySelectorAll("[data-bss-disabled-mobile]")).forEach((function(e) {
    e.classList.remove("animated"),
    e.removeAttribute("data-bss-hover-animate"),
    e.removeAttribute("data-aos")
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    AOS.init();
    [].slice.call(document.querySelectorAll("[data-bss-hover-animate]")).forEach((function(e) {
        e.addEventListener("mouseenter", (function(e) {
            e.target.classList.add("animated", e.target.dataset.bssHoverAnimate)
        }
        )),
        e.addEventListener("mouseleave", (function(e) {
            e.target.classList.remove("animated", e.target.dataset.bssHoverAnimate)
        }
        ))
    }
    )),
    [].slice.call(document.querySelectorAll("[data-bss-tooltip]")).map((function(e) {
        return new bootstrap.Tooltip(e)
    }
    ))
}
), !1),
function() {
    var e = document.getElementsByClassName("js-cd-top")[0];
    function t() {
        var t = window.scrollY || document.documentElement.scrollTop;
        t > 300 ? o(e, "cd-top--show") : a(e, "cd-top--show"),
        t > 1200 && o(e, "cd-top--fade-out"),
        scrolling = !1
    }
    function n(e, t) {
        return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    }
    function o(e, t) {
        var a = t.split(" ");
        e.classList ? e.classList.add(a[0]) : n(e, a[0]) || (e.className += " " + a[0]),
        a.length > 1 && o(e, a.slice(1).join(" "))
    }
    function a(e, t) {
        var o = t.split(" ");
        if (e.classList)
            e.classList.remove(o[0]);
        else if (n(e, o[0])) {
            var i = new RegExp("(\\s|^)" + o[0] + "(\\s|$)");
            e.className = e.className.replace(i, " ")
        }
        o.length > 1 && a(e, o.slice(1).join(" "))
    }
    scrolling = !1,
    e && (window.addEventListener("scroll", (function(e) {
        scrolling || (scrolling = !0,
        window.requestAnimationFrame ? window.requestAnimationFrame(t) : setTimeout(t, 250))
    }
    )),
    e.addEventListener("click", (function(e) {
        var t, n, o, a;
        e.preventDefault(),
        window.requestAnimationFrame ? (t = 700,
        n = window.scrollY || document.documentElement.scrollTop,
        o = null,
        a = function(e) {
            o || (o = e);
            var i = e - o
              , r = Math.max(Math.easeInOutQuad(i, n, -n, t), 0);
            window.scrollTo(0, r),
            i < t && window.requestAnimationFrame(a)
        }
        ,
        window.requestAnimationFrame(a)) : window.scrollTo(0, 0)
    }
    ))),
    Math.easeInOutQuad = function(e, t, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
    }
}();
const getCount = async()=>{
    const e = document.getElementById("discord-count");
    await fetch("https://discord.com/api/guilds/690887886697922641/widget.json").then((e=>e.json())).then((t=>e.innerHTML = t.presence_count));
    setTimeout(getCount, 6e4)
}
;
function showMore() {
    const e = document.getElementById("showmore-1");
    "SHOW MORE" == e.innerHTML ? ($("#1st-survival").fadeIn(0),
    $("#2nd-survival").fadeIn(0),
    $("#1st-skyblock").fadeIn(0),
    e.innerText = "SHOW LESS") : ($("#1st-survival").fadeOut(0),
    $("#2nd-survival").fadeOut(0),
    $("#1st-skyblock").fadeOut(0),
    e.innerText = "SHOW MORE")
}
function switchMode() {
    const e = document.getElementById("switchMode");
    "survival" === e.innerHTML.toLowerCase() ? (e.innerHTML = "SKYBLOCK",
    document.getElementById("survival-mode").classList.remove("d-none"),
    document.getElementById("skyblock-mode").classList.add("d-none")) : (e.innerHTML = "SURVIVAL",
    document.getElementById("survival-mode").classList.add("d-none"),
    document.getElementById("skyblock-mode").classList.remove("d-none"))
}
getCount(),
function() {
    "use strict";
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , t = function() {
        function t(e) {
            var n = e.ip
              , o = e.element
              , a = e.format
              , i = e.refreshRate;
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            a = a || "{online}",
            i = i || 6e4,
            !n)
                throw TypeError("ip cannot be null or undefined");
            if (!o)
                throw TypeError("element cannot be null or undefined");
            var r = n.split(":");
            this.ip = r[0],
            this.port = r[1] || "25565",
            this.format = a,
            this.element = "string" == typeof o ? document.querySelector(o) : o,
            this.runQuery(),
            this.timerId = setInterval(this.runQuery.bind(this), i)
        }
        return e(t, [{
            key: "runQuery",
            value: function() {
                var e = this
                  , t = new XMLHttpRequest;
                t.onreadystatechange = function() {
                    if (4 === t.readyState && 200 === t.status) {
                        var n = JSON.parse(t.responseText);
                        if (null !== e.element.getAttribute("data-playercounter-status"))
                            return void (e.element.innerText = n.online ? "online" : "offline");
                        n.online && (e.element.innerHTML = e.format.replace(/{\b(online|max)\b}/gi, (function(e, t) {
                            return n.players["online" === t ? "now" : t]
                        }
                        )))
                    }
                }
                ,
                t.open("GET", "https://mcapi.us/server/status?ip=" + this.ip + "&port=" + this.port),
                t.send()
            }
        }]),
        t
    }()
      , n = function() {
        for (var e = document.querySelectorAll("[data-playercounter-ip]"), n = 0; n < e.length; n++) {
            var o = e[n];
            new t({
                element: o,
                ip: o.getAttribute("data-playercounter-ip"),
                format: o.getAttribute("data-playercounter-format"),
                refreshRate: o.getAttribute("data-playercounter-refreshRate")
            })
        }
    };
    "complete" === document.readyState ? n() : window.onload = n,
    window.PlayerCounter = t
}(),
$("document").ready((function() {
    $("#1st-survival").fadeOut(0),
    $("#2nd-survival").fadeOut(0),
    $("#1st-skyblock").fadeOut(0)
}
));
