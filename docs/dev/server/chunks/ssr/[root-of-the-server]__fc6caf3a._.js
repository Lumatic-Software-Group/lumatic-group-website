module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Navbar-module__mqZdaq__active",
  "cta": "Navbar-module__mqZdaq__cta",
  "drawer": "Navbar-module__mqZdaq__drawer",
  "drawerCta": "Navbar-module__mqZdaq__drawerCta",
  "drawerLink": "Navbar-module__mqZdaq__drawerLink",
  "drawerLinks": "Navbar-module__mqZdaq__drawerLinks",
  "drawerOpen": "Navbar-module__mqZdaq__drawerOpen",
  "hamburger": "Navbar-module__mqZdaq__hamburger",
  "inner": "Navbar-module__mqZdaq__inner",
  "link": "Navbar-module__mqZdaq__link",
  "links": "Navbar-module__mqZdaq__links",
  "logo": "Navbar-module__mqZdaq__logo",
  "logoImg": "Navbar-module__mqZdaq__logoImg",
  "navbar": "Navbar-module__mqZdaq__navbar",
  "open": "Navbar-module__mqZdaq__open",
  "overlay": "Navbar-module__mqZdaq__overlay",
  "scrolled": "Navbar-module__mqZdaq__scrolled",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const navLinks = [
    {
        label: "Home",
        href: "#home"
    },
    {
        label: "Services",
        href: "#services"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Work",
        href: "#portfolio"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 40);
            const sections = navLinks.map((l)=>l.href.replace("#", ""));
            for(let i = sections.length - 1; i >= 0; i--){
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    const handleNav = (href)=>{
        setMenuOpen(false);
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbar} ${scrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrolled : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#home",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                            onClick: ()=>handleNav("#home"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/lumatic_logo_optimized_.png",
                                alt: "Lumatic Software Group",
                                width: 140,
                                height: 40,
                                priority: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImg
                            }, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].links,
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link} ${activeSection === link.href.replace("#", "") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                                        onClick: ()=>handleNav(link.href),
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://wa.me/971502659885",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cta,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    width: "16",
                                    height: "16",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                "Get a Quote"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hamburger} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].open : ""}`,
                            onClick: ()=>setMenuOpen(!menuOpen),
                            "aria-label": "Toggle menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawer} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerOpen : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLinks,
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerLink,
                                    onClick: ()=>handleNav(link.href),
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/971502659885",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawerCta,
                        children: "WhatsApp Us Now"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Navbar.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__P_e-fq__actions",
  "badge": "Hero-module__P_e-fq__badge",
  "badgeDot": "Hero-module__P_e-fq__badgeDot",
  "bg": "Hero-module__P_e-fq__bg",
  "bgImage": "Hero-module__P_e-fq__bgImage",
  "bgOverlay": "Hero-module__P_e-fq__bgOverlay",
  "bottomFade": "Hero-module__P_e-fq__bottomFade",
  "btnOutline": "Hero-module__P_e-fq__btnOutline",
  "btnPrimary": "Hero-module__P_e-fq__btnPrimary",
  "container": "Hero-module__P_e-fq__container",
  "fadeIn": "Hero-module__P_e-fq__fadeIn",
  "fadeUp": "Hero-module__P_e-fq__fadeUp",
  "grid": "Hero-module__P_e-fq__grid",
  "headline": "Hero-module__P_e-fq__headline",
  "headlineAccent": "Hero-module__P_e-fq__headlineAccent",
  "hero": "Hero-module__P_e-fq__hero",
  "orb1": "Hero-module__P_e-fq__orb1",
  "orb2": "Hero-module__P_e-fq__orb2",
  "pulse": "Hero-module__P_e-fq__pulse",
  "scrollAnim": "Hero-module__P_e-fq__scrollAnim",
  "scrollDown": "Hero-module__P_e-fq__scrollDown",
  "scrollLine": "Hero-module__P_e-fq__scrollLine",
  "stat": "Hero-module__P_e-fq__stat",
  "statLabel": "Hero-module__P_e-fq__statLabel",
  "statValue": "Hero-module__P_e-fq__statValue",
  "stats": "Hero-module__P_e-fq__stats",
  "subline": "Hero-module__P_e-fq__subline",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.module.css [app-ssr] (css module)");
"use client";
;
;
const stats = [
    {
        value: "500K+",
        label: "App Downloads"
    },
    {
        value: "6+",
        label: "Years Experience"
    },
    {
        value: "50+",
        label: "Projects Delivered"
    },
    {
        value: "5★",
        label: "Client Rating"
    }
];
function Hero() {
    const scrollTo = (id)=>document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgImage
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgOverlay
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orb1
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orb2
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeDot
                            }, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            "Dubai · UAE  ·  AI-Powered Studio"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headline,
                        children: [
                            "We Build Digital",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headlineAccent,
                                children: " Products"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            "That Drive",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headlineAccent,
                                children: " Growth"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subline,
                        children: "Lumatic Software Group is a developer-led studio crafting WhatsApp automation, mobile apps, and premium websites for ambitious Dubai businesses — fast, bilingual, and built to convert."
                    }, void 0, false, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/971502659885",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimary,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        width: "18",
                                        height: "18",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    "Start on WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnOutline,
                                onClick: ()=>scrollTo("services"),
                                children: [
                                    "Our Services",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        width: "16",
                                        height: "16",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 18l6-6-6-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                        children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollDown,
                onClick: ()=>scrollTo("services"),
                "aria-label": "Scroll down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollLine
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomFade
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Hero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Services-module__tScCJW__card",
  "cardCta": "Services-module__tScCJW__cardCta",
  "cardCtaFeatured": "Services-module__tScCJW__cardCtaFeatured",
  "cardDesc": "Services-module__tScCJW__cardDesc",
  "cardFeatured": "Services-module__tScCJW__cardFeatured",
  "cardFooter": "Services-module__tScCJW__cardFooter",
  "cardTitle": "Services-module__tScCJW__cardTitle",
  "container": "Services-module__tScCJW__container",
  "feature": "Services-module__tScCJW__feature",
  "features": "Services-module__tScCJW__features",
  "grid": "Services-module__tScCJW__grid",
  "header": "Services-module__tScCJW__header",
  "iconFeatured": "Services-module__tScCJW__iconFeatured",
  "iconWrap": "Services-module__tScCJW__iconWrap",
  "label": "Services-module__tScCJW__label",
  "labelLine": "Services-module__tScCJW__labelLine",
  "price": "Services-module__tScCJW__price",
  "section": "Services-module__tScCJW__section",
  "strip": "Services-module__tScCJW__strip",
  "stripCta": "Services-module__tScCJW__stripCta",
  "stripText": "Services-module__tScCJW__stripText",
  "subtitle": "Services-module__tScCJW__subtitle",
  "tag": "Services-module__tScCJW__tag",
  "tagFeatured": "Services-module__tScCJW__tagFeatured",
  "title": "Services-module__tScCJW__title",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.module.css [app-ssr] (css module)");
"use client";
;
;
const services = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            width: "32",
            height: "32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "Most Popular",
        title: "WhatsApp Chatbot Setup",
        description: "Never lose a sale after hours again. We build AI-powered WhatsApp bots that handle pricing, FAQs, order capture and Telegram integration — while you sleep.",
        features: [
            "AI-powered auto-replies",
            "Product catalogue & orders",
            "30-day support included",
            "5–7 day delivery"
        ],
        price: "From 800 AED",
        href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20WhatsApp%20chatbot"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            width: "32",
            height: "32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 21h8M12 17v4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "Best Value",
        title: "Business Website",
        description: "A professional, mobile-first Next.js website in English, Arabic, or Farsi — built to rank on Google and convert visitors into paying clients.",
        features: [
            "5-page bilingual site (EN/AR/FA)",
            "WhatsApp CTA on every page",
            "SEO-ready & mobile-responsive",
            "7–14 day delivery"
        ],
        price: "From 2,500 AED",
        href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20a%20business%20website"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            width: "32",
            height: "32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 18H12.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "Developer-Grade",
        title: "Android App Development",
        description: "Senior Kotlin/MVVM development for UAE startups. Whether it's new features, bug fixes, or a full rebuild — we code to ship-ready standard, fast.",
        features: [
            "Kotlin · MVVM · KMM",
            "Firebase & REST integration",
            "500K+ download track record",
            "B2B contract invoicing"
        ],
        price: "From 600 AED/day",
        href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20Android%20development"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            width: "32",
            height: "32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 10V3L4 14h7v7l9-11h-7z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "Growth Package",
        title: "Full Digital Growth",
        description: "Website + WhatsApp bot + 8 SEO blog posts in Farsi, Arabic & English + Google Search Console setup. Start generating inbound leads in 30 days.",
        features: [
            "Everything in Web + Bot",
            "8 SEO blog posts (Farsi/EN/AR)",
            "Google Search Console setup",
            "Monthly performance report"
        ],
        price: "From 4,000 AED",
        href: "https://wa.me/971502659885?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Digital%20Growth%20package"
    }
];
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].labelLine
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                "What We Build"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Services Priced for",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 76,
                                    columnNumber: 32
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Dubai Businesses"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Three packages. Simple enough to explain in one WhatsApp message. Delivered fast with AI tools. Priced to remove hesitation."
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                    children: services.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${i === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardFeatured : ""}`,
                            children: [
                                svc.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag} ${i === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagFeatured : ""}`,
                                    children: svc.tag
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconWrap} ${i === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconFeatured : ""}`,
                                    children: svc.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                    children: svc.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDesc,
                                    children: svc.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].features,
                                    children: svc.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feature,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    width: "14",
                                                    height: "14",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 8l3.5 3.5L13 4",
                                                        stroke: "#C9A84C",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                f
                                            ]
                                        }, f, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardFooter,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                            children: svc.price
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: svc.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardCta} ${i === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardCtaFeatured : ""}`,
                                            children: [
                                                "Get Started",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    width: "14",
                                                    height: "14",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 8h10M9 4l4 4-4 4",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, svc.title, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].strip,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stripText,
                            children: "Not sure which package is right for you?"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://wa.me/971502659885",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stripCta,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    width: "18",
                                    height: "18",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                "Chat with us — it's free"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Services.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accentBar": "About-module__fz_m9q__accentBar",
  "actions": "About-module__fz_m9q__actions",
  "body": "About-module__fz_m9q__body",
  "btnLink": "About-module__fz_m9q__btnLink",
  "btnPrimary": "About-module__fz_m9q__btnPrimary",
  "container": "About-module__fz_m9q__container",
  "content": "About-module__fz_m9q__content",
  "floatingCard": "About-module__fz_m9q__floatingCard",
  "floatingDesc": "About-module__fz_m9q__floatingDesc",
  "floatingIcon": "About-module__fz_m9q__floatingIcon",
  "floatingTitle": "About-module__fz_m9q__floatingTitle",
  "image": "About-module__fz_m9q__image",
  "imageCol": "About-module__fz_m9q__imageCol",
  "imageOverlay": "About-module__fz_m9q__imageOverlay",
  "imageWrap": "About-module__fz_m9q__imageWrap",
  "label": "About-module__fz_m9q__label",
  "labelLine": "About-module__fz_m9q__labelLine",
  "pillar": "About-module__fz_m9q__pillar",
  "pillarDesc": "About-module__fz_m9q__pillarDesc",
  "pillarIcon": "About-module__fz_m9q__pillarIcon",
  "pillarTitle": "About-module__fz_m9q__pillarTitle",
  "pillars": "About-module__fz_m9q__pillars",
  "section": "About-module__fz_m9q__section",
  "title": "About-module__fz_m9q__title",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.module.css [app-ssr] (css module)");
"use client";
;
;
;
const pillars = [
    {
        icon: "🏗️",
        title: "Developer-Led",
        desc: "Every project is overseen by Mahdi Abbasian — a Senior Mobile Developer with 6+ years and 500K+ app downloads."
    },
    {
        icon: "⚡",
        title: "AI-Accelerated",
        desc: "We use cutting-edge AI tools to deliver in days, not months — without compromising on quality or code standards."
    },
    {
        icon: "🌐",
        title: "Bilingual by Default",
        desc: "Every product we ship works in English, Arabic, and Farsi — designed for Dubai's multicultural business landscape."
    },
    {
        icon: "📈",
        title: "Built to Convert",
        desc: "We don't just build pretty sites. Every element is engineered to turn visitors into WhatsApp conversations and paying clients."
    }
];
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageCol,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/business-bay-dubai_optimized_.jpg",
                                    alt: "Business Bay Dubai — Lumatic Software Group",
                                    fill: true,
                                    sizes: "(max-width: 900px) 100vw, 50vw",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image,
                                    priority: false
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageOverlay
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingIcon,
                                    children: "🇦🇪"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingTitle,
                                            children: "Registered in Dubai"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingDesc,
                                            children: "UAE Company · Legal B2B Invoicing"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accentBar
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].labelLine
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                "About Lumatic"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "A Studio Where the",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 68,
                                    columnNumber: 31
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Founder Still Codes"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                            children: "Lumatic Software Group is a Dubai-based digital studio founded by Mahdi Abbasian — a Senior Android Developer who has shipped apps with over 500,000 downloads. We apply AI tools to deliver enterprise-quality digital products at startup-friendly prices."
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                            children: "We serve Iranian, Arab, and international business owners across the UAE who need a credible digital presence — fast. Whether it's a WhatsApp chatbot for your food business, an Android feature for your startup, or a bilingual website for your trade company, we build it in days, not months."
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillars,
                            children: pillars.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillar,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillarIcon,
                                            children: p.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillarTitle,
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillarDesc,
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.title, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/971502659885",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimary,
                                    children: "Talk to the Founder"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://abbasian.dev",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnLink,
                                    children: "View Developer Portfolio →"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/About.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accentLine": "Portfolio-module__S6ipBa__accentLine",
  "card": "Portfolio-module__S6ipBa__card",
  "cardDesc": "Portfolio-module__S6ipBa__cardDesc",
  "cardTitle": "Portfolio-module__S6ipBa__cardTitle",
  "cardTop": "Portfolio-module__S6ipBa__cardTop",
  "category": "Portfolio-module__S6ipBa__category",
  "container": "Portfolio-module__S6ipBa__container",
  "grid": "Portfolio-module__S6ipBa__grid",
  "header": "Portfolio-module__S6ipBa__header",
  "label": "Portfolio-module__S6ipBa__label",
  "labelLine": "Portfolio-module__S6ipBa__labelLine",
  "metric": "Portfolio-module__S6ipBa__metric",
  "process": "Portfolio-module__S6ipBa__process",
  "processHeader": "Portfolio-module__S6ipBa__processHeader",
  "processTitle": "Portfolio-module__S6ipBa__processTitle",
  "section": "Portfolio-module__S6ipBa__section",
  "statIcon": "Portfolio-module__S6ipBa__statIcon",
  "statItem": "Portfolio-module__S6ipBa__statItem",
  "statLabel": "Portfolio-module__S6ipBa__statLabel",
  "statValue": "Portfolio-module__S6ipBa__statValue",
  "statsBand": "Portfolio-module__S6ipBa__statsBand",
  "statsContainer": "Portfolio-module__S6ipBa__statsContainer",
  "step": "Portfolio-module__S6ipBa__step",
  "stepDesc": "Portfolio-module__S6ipBa__stepDesc",
  "stepLine": "Portfolio-module__S6ipBa__stepLine",
  "stepNumber": "Portfolio-module__S6ipBa__stepNumber",
  "stepTitle": "Portfolio-module__S6ipBa__stepTitle",
  "steps": "Portfolio-module__S6ipBa__steps",
  "subtitle": "Portfolio-module__S6ipBa__subtitle",
  "tag": "Portfolio-module__S6ipBa__tag",
  "tags": "Portfolio-module__S6ipBa__tags",
  "title": "Portfolio-module__S6ipBa__title",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.module.css [app-ssr] (css module)");
"use client";
;
;
const stats = [
    {
        value: "500K+",
        label: "App Downloads",
        icon: "📲"
    },
    {
        value: "6+",
        label: "Years Experience",
        icon: "🏆"
    },
    {
        value: "5–7",
        label: "Days to Deliver",
        icon: "⚡"
    },
    {
        value: "3",
        label: "Languages Supported",
        icon: "🌐"
    }
];
const projects = [
    {
        category: "WhatsApp Automation",
        title: "Food Business Bot — Dubai",
        desc: "AI-powered WhatsApp chatbot for a Dubai-based Iranian food business. Handles order capture, menu enquiries, and pricing 24/7. Client saved 3+ hours/day in manual replies.",
        tags: [
            "WhatsApp API",
            "AI Replies",
            "Order Capture"
        ],
        metric: "3 hrs/day saved",
        color: "#25D366"
    },
    {
        category: "Business Website",
        title: "Bilingual Trading Co. Site",
        desc: "5-page Next.js website in English and Farsi for a Dubai trading company. SEO-optimised, mobile-first, with WhatsApp CTA on every page. Launched in 10 days.",
        tags: [
            "Next.js",
            "Bilingual EN/FA",
            "SEO-Ready"
        ],
        metric: "10-day delivery",
        color: "#C9A84C"
    },
    {
        category: "Android Development",
        title: "Delivery App — Feature Module",
        desc: "New real-time driver tracking module built with Kotlin and Firebase for a UAE delivery startup. Clean MVVM architecture, shipped in 12 days as a B2B contract.",
        tags: [
            "Kotlin",
            "Firebase",
            "MVVM"
        ],
        metric: "12-day turnaround",
        color: "#4A90D9"
    },
    {
        category: "Full Digital Growth",
        title: "Home Services — Full Launch",
        desc: "Website + WhatsApp bot + 8 SEO blog posts in Farsi and English for a Dubai home services company. First inbound Google lead arrived within 45 days of launch.",
        tags: [
            "Website",
            "Bot",
            "SEO Content"
        ],
        metric: "45 days to 1st lead",
        color: "#9B59B6"
    }
];
const process = [
    {
        step: "01",
        title: "WhatsApp Consult",
        desc: "Free 20-minute call to understand your business and recommend the right package."
    },
    {
        step: "02",
        title: "Proposal & Quote",
        desc: "Clear scope, fixed price, delivery timeline. No hidden fees. You approve before we start."
    },
    {
        step: "03",
        title: "Build & Deliver",
        desc: "We build fast using AI tools. You review at every stage. Delivered in days, not months."
    },
    {
        step: "04",
        title: "Launch & Support",
        desc: "We go live together and provide 30-day support to make sure everything performs."
    }
];
function Portfolio() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsBand,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsContainer,
                    children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statIcon,
                                    children: s.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                    children: s.value
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "portfolio",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].labelLine
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        "Our Work"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                    children: [
                                        "Projects That Paid Off",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 80,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "for Dubai Businesses"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Real results for real clients. Every project is developer-reviewed, AI-accelerated, and delivered with measurable outcomes."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                            children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTop,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].category,
                                                    style: {
                                                        color: p.color
                                                    },
                                                    children: p.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                                    children: p.metric
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accentLine,
                                            style: {
                                                background: p.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDesc,
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tags,
                                            children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.title, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].process,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].labelLine
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                "How It Works"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processTitle,
                                            children: [
                                                "From first message to live product",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 51
                                                }, this),
                                                "in as little as 5 days"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].steps,
                                    children: process.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].step,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepNumber,
                                                    children: p.step
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                i < process.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepLine
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitle,
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Portfolio$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDesc,
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.step, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Portfolio.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bg": "Contact-module__ASxBbW__bg",
  "bgGrid": "Contact-module__ASxBbW__bgGrid",
  "channel": "Contact-module__ASxBbW__channel",
  "channelIcon": "Contact-module__ASxBbW__channelIcon",
  "channelLabel": "Contact-module__ASxBbW__channelLabel",
  "channelValue": "Contact-module__ASxBbW__channelValue",
  "channels": "Contact-module__ASxBbW__channels",
  "container": "Contact-module__ASxBbW__container",
  "field": "Contact-module__ASxBbW__field",
  "fieldLabel": "Contact-module__ASxBbW__fieldLabel",
  "form": "Contact-module__ASxBbW__form",
  "formNote": "Contact-module__ASxBbW__formNote",
  "formTitle": "Contact-module__ASxBbW__formTitle",
  "formWrap": "Contact-module__ASxBbW__formWrap",
  "info": "Contact-module__ASxBbW__info",
  "input": "Contact-module__ASxBbW__input",
  "label": "Contact-module__ASxBbW__label",
  "labelLine": "Contact-module__ASxBbW__labelLine",
  "row": "Contact-module__ASxBbW__row",
  "section": "Contact-module__ASxBbW__section",
  "submit": "Contact-module__ASxBbW__submit",
  "subtitle": "Contact-module__ASxBbW__subtitle",
  "textarea": "Contact-module__ASxBbW__textarea",
  "title": "Contact-module__ASxBbW__title",
  "waCta": "Contact-module__ASxBbW__waCta",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.module.css [app-ssr] (css module)");
"use client";
;
;
;
const channels = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "22",
            height: "22",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        label: "WhatsApp",
        value: "+971 50 265 9885",
        href: "https://wa.me/971502659885",
        color: "#25D366"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            width: "22",
            height: "22",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Email",
        value: "hello@lumaticgroup.info",
        href: "mailto:hello@lumaticgroup.info",
        color: "#C9A84C"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            width: "22",
            height: "22",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Location",
        value: "Dubai, United Arab Emirates",
        href: "https://maps.google.com/?q=Dubai,UAE",
        color: "#C9A84C"
    }
];
function Contact() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        business: "",
        service: "",
        message: ""
    });
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const body = encodeURIComponent(`Name: ${form.name}\nBusiness: ${form.business}\nService: ${form.service}\n\n${form.message}`);
        const subject = encodeURIComponent(`Lumatic Enquiry from ${form.name}`);
        window.location.href = `mailto:hello@lumaticgroup.info?subject=${subject}&body=${body}`;
        setSent(true);
        setTimeout(()=>setSent(false), 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgGrid
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].info,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].labelLine
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    "Get in Touch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    "Let's Build Something",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                        lineNumber: 77,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "That Pays Off"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Tell us what your business needs. We reply within a few hours on WhatsApp — or send a quick message below and we'll be in touch."
                            }, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].channels,
                                children: channels.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: ch.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].channel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].channelIcon,
                                                style: {
                                                    color: ch.color
                                                },
                                                children: ch.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].channelLabel,
                                                        children: ch.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].channelValue,
                                                        children: ch.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, ch.label, true, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/971502659885",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].waCta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        width: "20",
                                        height: "20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    "Chat on WhatsApp — fastest response"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formTitle,
                                    children: "Send us a message"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].row,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                    children: "Your Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    value: form.name,
                                                    onChange: handleChange,
                                                    placeholder: "Mohammed Al Rashid",
                                                    required: true,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                    children: "Business Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "business",
                                                    value: form.business,
                                                    onChange: handleChange,
                                                    placeholder: "Your company",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                            children: "Service Interested In"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "service",
                                            value: form.service,
                                            onChange: handleChange,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select a service…"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "WhatsApp Chatbot",
                                                    children: "WhatsApp Chatbot"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Business Website",
                                                    children: "Business Website"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Android Development",
                                                    children: "Android Development"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Full Digital Growth Package",
                                                    children: "Full Digital Growth Package"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Other",
                                                    children: "Other / Not sure yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                            children: "Message *"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            value: form.message,
                                            onChange: handleChange,
                                            placeholder: "Tell us a bit about your business and what you need…",
                                            rows: 5,
                                            required: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submit,
                                    children: [
                                        sent ? "✓ Message Sent!" : "Send Message",
                                        !sent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "16",
                                            height: "16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formNote,
                                    children: "We typically respond within 2 hours during Dubai business hours (9am–9pm GST)."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Contact.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottom": "Footer-module__oYEHRW__bottom",
  "bottomInner": "Footer-module__oYEHRW__bottomInner",
  "bottomRight": "Footer-module__oYEHRW__bottomRight",
  "brand": "Footer-module__oYEHRW__brand",
  "col": "Footer-module__oYEHRW__col",
  "colTitle": "Footer-module__oYEHRW__colTitle",
  "contact": "Footer-module__oYEHRW__contact",
  "contactItem": "Footer-module__oYEHRW__contactItem",
  "container": "Footer-module__oYEHRW__container",
  "cta": "Footer-module__oYEHRW__cta",
  "ctaText": "Footer-module__oYEHRW__ctaText",
  "devLink": "Footer-module__oYEHRW__devLink",
  "dot": "Footer-module__oYEHRW__dot",
  "footer": "Footer-module__oYEHRW__footer",
  "link": "Footer-module__oYEHRW__link",
  "links": "Footer-module__oYEHRW__links",
  "logo": "Footer-module__oYEHRW__logo",
  "social": "Footer-module__oYEHRW__social",
  "socials": "Footer-module__oYEHRW__socials",
  "tagline": "Footer-module__oYEHRW__tagline",
  "top": "Footer-module__oYEHRW__top",
});
}),
"[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.module.css [app-ssr] (css module)");
"use client";
;
;
;
const services = [
    {
        label: "WhatsApp Chatbot",
        href: "#services"
    },
    {
        label: "Business Website",
        href: "#services"
    },
    {
        label: "Android Development",
        href: "#services"
    },
    {
        label: "Full Digital Growth",
        href: "#services"
    }
];
const company = [
    {
        label: "About Us",
        href: "#about"
    },
    {
        label: "Our Work",
        href: "#portfolio"
    },
    {
        label: "Contact",
        href: "#contact"
    },
    {
        label: "abbasian.dev",
        href: "https://abbasian.dev",
        external: true
    }
];
const socials = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mahdi-abbasian",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "18",
            height: "18",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/971502659885",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "18",
            height: "18",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Telegram",
        href: "https://t.me/lumaticgroup",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "18",
            height: "18",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Footer() {
    const scrollTo = (href)=>{
        if (href.startsWith("http")) {
            window.open(href, "_blank");
            return;
        }
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].top,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brand,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/lumatic_logo_optimized_.png",
                                    alt: "Lumatic Software Group",
                                    width: 150,
                                    height: 44,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagline,
                                    children: "AI-powered digital studio for Dubai businesses. We build what your customers need to find you, trust you, and buy from you."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                                    children: socials.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: s.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social,
                                            "aria-label": s.label,
                                            children: s.icon
                                        }, s.label, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/971502659885",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactItem,
                                            children: "+971 50 265 9885"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot,
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:hello@lumaticgroup.info",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactItem,
                                            children: "hello@lumaticgroup.info"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colTitle,
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].links,
                                    children: services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                                                onClick: ()=>scrollTo(s.href),
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        }, s.label, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colTitle,
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].links,
                                    children: company.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                                                onClick: ()=>scrollTo(c.href),
                                                children: [
                                                    c.label,
                                                    c.external && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 12 12",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        width: "10",
                                                        height: "10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 9L9 3M5 3h4v4",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        }, c.label, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colTitle,
                                    children: "Start Today"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaText,
                                    children: "Ready to grow your Dubai business digitally? Message us now — free consultation."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/971502659885",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cta,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            width: "16",
                                            height: "16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        "WhatsApp Us Now"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottom,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Lumatic Software Group · Dubai, UAE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomRight,
                            children: [
                                "Led by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://abbasian.dev",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2f$front$2f$abbasian$2e$dev$2f$lumatic$2d$group$2d$website$2f$components$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].devLink,
                                    children: "Mahdi Abbasian"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                ", Senior Mobile Developer"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web/front/abbasian.dev/lumatic-group-website/components/Footer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fc6caf3a._.js.map