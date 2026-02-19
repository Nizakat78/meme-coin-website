(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const containerVariants = {
    hidden: {},
    visible: (i = 1)=>({
            transition: {
                staggerChildren: 0.025,
                delayChildren: i * 0.01
            }
        })
};
const charVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.2,
                0.65,
                0.3,
                0.9
            ]
        }
    }
};
const AnimatedText = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "c42c605fcbe7172db844ab413769ca1ec0087c0df8ad1b5c309e3d83a30de6ee") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c42c605fcbe7172db844ab413769ca1ec0087c0df8ad1b5c309e3d83a30de6ee";
    }
    const { text, el: t1, className } = t0;
    const Wrapper = t1 === undefined ? "p" : t1;
    let T0;
    let T1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== Wrapper || $[2] !== className || $[3] !== text) {
        const words = text.split(" ");
        T1 = Wrapper;
        t7 = className;
        if ($[13] !== text) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: text
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx",
                lineNumber: 61,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[13] = text;
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span;
        t2 = "hidden";
        t3 = "visible";
        t4 = containerVariants;
        t5 = true;
        t6 = words.map((word, wordIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block whitespace-nowrap",
                children: [
                    word.split("").map(_temp),
                    wordIndex < words.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block",
                        children: " "
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx",
                        lineNumber: 72,
                        columnNumber: 166
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, wordIndex, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx",
                lineNumber: 72,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = Wrapper;
        $[2] = className;
        $[3] = text;
        $[4] = T0;
        $[5] = T1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        T0 = $[4];
        T1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
    }
    let t9;
    if ($[15] !== T0 || $[16] !== t2 || $[17] !== t3 || $[18] !== t4 || $[19] !== t5 || $[20] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            initial: t2,
            animate: t3,
            variants: t4,
            "aria-hidden": t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = T0;
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== T1 || $[23] !== t7 || $[24] !== t8 || $[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            className: t7,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = T1;
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    return t10;
};
_c = AnimatedText;
const __TURBOPACK__default__export__ = AnimatedText;
function _temp(char, charIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        className: "inline-block",
        variants: charVariants,
        children: char
    }, charIndex, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx",
        lineNumber: 124,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AnimatedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/meme-coin-website/src/components/AnimatedOnScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const animationVariants = {
    fadeInUp: {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    },
    fadeInLeft: {
        hidden: {
            opacity: 0,
            x: -40
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    },
    zoomIn: {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeIn'
            }
        }
    }
};
const AnimatedOnScroll = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "f81c03e2069903756fdbfa9676bfc5b55f72b9ea90b1427d44acbe2fbd824625") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f81c03e2069903756fdbfa9676bfc5b55f72b9ea90b1427d44acbe2fbd824625";
    }
    const { children, className, stagger: t1, animationType: t2 } = t0;
    const stagger = t1 === undefined ? 0 : t1;
    const animationType = t2 === undefined ? "fadeInUp" : t2;
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            triggerOnce: true,
            threshold: 0.1
        };
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(t3);
    let t4;
    let t5;
    if ($[2] !== controls || $[3] !== inView) {
        t4 = ()=>{
            if (inView) {
                controls.start("visible");
            }
        };
        t5 = [
            controls,
            inView
        ];
        $[2] = controls;
        $[3] = inView;
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const t6 = animationVariants[animationType];
    let t7;
    if ($[6] !== animationType || $[7] !== children || $[8] !== controls || $[9] !== stagger) {
        t7 = stagger > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: animationVariants[animationType],
                custom: i,
                initial: "hidden",
                animate: controls,
                transition: {
                    delay: i * stagger
                },
                children: child
            }, i, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedOnScroll.tsx",
                lineNumber: 107,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))) : children;
        $[6] = animationType;
        $[7] = children;
        $[8] = controls;
        $[9] = stagger;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== className || $[12] !== controls || $[13] !== ref || $[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            animate: controls,
            initial: "hidden",
            variants: t6,
            className: className,
            children: t7
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/components/AnimatedOnScroll.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = className;
        $[12] = controls;
        $[13] = ref;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
};
_s(AnimatedOnScroll, "2NEUvrxzw09dl1eC0Q0pbm0pOIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AnimatedOnScroll;
const __TURBOPACK__default__export__ = AnimatedOnScroll;
var _c;
__turbopack_context__.k.register(_c, "AnimatedOnScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const colorSchemes = {
    sunrise: {
        gradient: `radial-gradient(circle at 50% 100%, #ffc107 0%, #ff8f00 10%, #ff5722 20%, #f44336 30%, #c2185b 50%, #512da8 70%, #1a237e 90%, #000000 100%)`
    },
    day: {
        gradient: `radial-gradient(circle at 50% 50%, #87CEEB 0%, #1E90FF 50%, #00008B 100%)`
    },
    sunset: {
        gradient: `radial-gradient(circle at 50% 100%, #ffc107 0%, #ff8f00 10%, #ff5722 20%, #f44336 30%, #c2185b 50%, #512da8 70%, #1a237e 90%, #000000 100%)`
    },
    night: {
        gradient: `radial-gradient(circle at 50% 50%, #000000 0%, #000033 50%, #000066 100%)`
    }
};
const MeshBackground = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "6f17fb3a0c9cec6d1ccc42149d023335cc66fef603587298f88344bcf2ffab24") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f17fb3a0c9cec6d1ccc42149d023335cc66fef603587298f88344bcf2ffab24";
    }
    const { variant: t1 } = t0;
    t1 === undefined ? "default" : t1;
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    let t2;
    let t3;
    if ($[1] !== controls) {
        t2 = ()=>{
            const sequence = async ()=>{
                while(true){
                    await controls.start({
                        background: colorSchemes.sunrise.gradient,
                        transition: {
                            duration: 5,
                            ease: "easeInOut"
                        }
                    });
                    await controls.start({
                        background: colorSchemes.day.gradient,
                        transition: {
                            duration: 10,
                            ease: "easeInOut"
                        }
                    });
                    await controls.start({
                        background: colorSchemes.sunset.gradient,
                        transition: {
                            duration: 5,
                            ease: "easeInOut"
                        }
                    });
                    await controls.start({
                        background: colorSchemes.night.gradient,
                        transition: {
                            duration: 10,
                            ease: "easeInOut"
                        }
                    });
                }
            };
            sequence();
        };
        t3 = [
            controls
        ];
        $[1] = controls;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: colorSchemes.night.gradient
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 grid-pattern opacity-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = Array.from({
            length: 6
        }).map(_temp);
        t7 = Array.from({
            length: 3
        }).map(_temp2);
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
        t7 = $[7];
    }
    let t8;
    if ($[8] !== controls) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            animate: controls,
            initial: t4,
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = controls;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
};
_s(MeshBackground, "6pZ2lBElA3YLtcQOKE/nS/LmH94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = MeshBackground;
const __TURBOPACK__default__export__ = MeshBackground;
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute w-1 h-1 rounded-full",
        style: {
            background: "rgba(152,245,255,0.2)",
            left: `${15 + i * 15}%`,
            top: `${10 + i * 14}%`
        },
        animate: {
            y: [
                0,
                -30 - i * 10,
                0
            ],
            x: [
                0,
                i % 2 === 0 ? 15 : -15,
                0
            ],
            opacity: [
                0.2,
                0.5,
                0.2
            ],
            scale: [
                1,
                1.5,
                1
            ]
        },
        transition: {
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.8
        }
    }, `particle-${i}`, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx",
        lineNumber: 120,
        columnNumber: 10
    }, this);
}
function _temp2(__0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
        className: "absolute",
        style: {
            color: "rgba(152,245,255,0.1)",
            left: `${20 + i_0 * 30}%`,
            top: `${15 + i_0 * 25}%`,
            width: `${16 + i_0 * 6}px`,
            height: `${16 + i_0 * 6}px`
        },
        viewBox: "0 0 24 24",
        fill: "currentColor",
        animate: {
            rotate: [
                0,
                180,
                360
            ],
            opacity: [
                0.1,
                0.25,
                0.1
            ],
            scale: [
                1,
                1.2,
                1
            ]
        },
        transition: {
            duration: 12 + i_0 * 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i_0 * 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx",
            lineNumber: 152,
            columnNumber: 6
        }, this)
    }, `star-${i_0}`, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MeshBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/meme-coin-website/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/src/components/AnimatedOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$MeshBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/* ---- Origin Story: Animated Portal/Emergence ---- */ const OriginGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                    src: "https://lottie.host/c5f23c16-9e62-4c67-9b91-05f7cf7a3d1e/WZy9wPbYdK.lottie",
                    loop: true,
                    autoplay: true,
                    className: "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 21,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-radial from-[rgba(152,245,255,0.1)] to-transparent pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 21,
                    columnNumber: 203
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = OriginGraphic;
/* ---- Pack/Community Illustration ---- */ const PackGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                src: "https://lottie.host/79010375-7f28-4394-a130-9b882f059293/c06g9pQ103.lottie",
                loop: true,
                autoplay: true,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 40,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = PackGraphic;
/* ---- Authenticity/Unique Illustration ---- */ const AuthenticGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                src: "https://lottie.host/1ff719c9-c35e-4f3e-b8be-def6e8e39d75/XaJmq8hP9z.lottie",
                loop: true,
                autoplay: true,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 59,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = AuthenticGraphic;
/* ---- Rocket/Growth Illustration ---- */ const GrowthGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                src: "https://lottie.host/aeba95e1-2e70-4f9e-99d0-9c1f30f7b1fb/rocket.lottie",
                loop: true,
                autoplay: true,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 78,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = GrowthGraphic;
/* ---- Floating Particles Background ---- */ const FloatingParticles = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                [
                    5,
                    10,
                    20
                ],
                [
                    90,
                    15,
                    16
                ],
                [
                    15,
                    80,
                    18
                ],
                [
                    85,
                    75,
                    14
                ],
                [
                    50,
                    5,
                    12
                ],
                [
                    45,
                    90,
                    15
                ]
            ].map(_temp)
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = FloatingParticles;
function AboutPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(78);
    if ($[0] !== "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8") {
        for(let $i = 0; $i < 78; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb01224f15b82efc330c9d0902c590eb0aa4e065f62e67f5e559bbf65c5c7f8";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$MeshBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "purple"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aurora-bg absolute inset-0 pointer-events-none z-0"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingParticles, {}, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 1,
                ease: "easeOut"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "The Legend of Ulyg Dog",
                el: "h1",
                className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 138,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeOut"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "Authentic Meme Coin Revolution",
                el: "div",
                className: "text-xl md:text-2xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 155,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 lg:py-28 relative z-10 px-6",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-32 h-1 mx-auto mt-8 rounded-full",
                    style: {
                        background: "linear-gradient(90deg, #98F5FF, #B8A9FF, #FFB8D9)"
                    },
                    initial: {
                        scaleX: 0,
                        opacity: 0
                    },
                    animate: {
                        scaleX: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 1.2,
                        delay: 0.6
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 162,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            x: -40
        };
        t7 = {
            opacity: 1,
            x: 0
        };
        t8 = {
            once: true
        };
        t9 = {
            duration: 0.8,
            type: "spring",
            stiffness: 50
        };
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t6,
            whileInView: t7,
            viewport: t8,
            transition: t9,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 neon-border",
                    style: {
                        color: "#98F5FF",
                        background: "rgba(152,245,255,0.1)",
                        border: "1px solid rgba(152,245,255,0.2)"
                    },
                    whileHover: {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(152,245,255,0.3)"
                    },
                    children: "ORIGIN STORY"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 211,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-6 gradient-text-gold",
                    children: "From a Glitch to a Galaxy"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 218,
                    columnNumber: 35
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed mb-4",
                    children: "Born in the deepest corners of the mempool, Ulyg Dog was not coded -- he was manifested. A happy accident of stray packets and forgotten code that resulted in something so perfectly imperfect, it could only be destined for the moon."
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 218,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed",
                    children: "While other coins chased trends with slick logos, Ulyg Dog embraced his flaws. His crooked smile, his mismatched ears, his complete disregard for conventional aesthetics -- these became his badges of honor."
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 218,
                    columnNumber: 422
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    let t13;
    let t14;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            opacity: 0,
            scale: 0.85,
            rotateY: -20
        };
        t12 = {
            opacity: 1,
            scale: 1,
            rotateY: 0
        };
        t13 = {
            once: true
        };
        t14 = {
            duration: 1,
            delay: 0.2,
            type: "spring"
        };
        $[12] = t11;
        $[13] = t12;
        $[14] = t13;
        $[15] = t14;
    } else {
        t11 = $[12];
        t12 = $[13];
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "grid md:grid-cols-2 gap-12 items-center mb-28",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex justify-center",
                    initial: t11,
                    whileInView: t12,
                    viewport: t13,
                    transition: t14,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-sm holo-shine rounded-3xl p-4",
                        animate: {
                            y: [
                                0,
                                -10,
                                0
                            ],
                            rotateZ: [
                                0,
                                1,
                                -1,
                                0
                            ]
                        },
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OriginGraphic, {}, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 266,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 258,
                        columnNumber: 200
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 258,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            y: 30
        };
        t17 = {
            opacity: 1,
            y: 0
        };
        t18 = {
            once: true
        };
        t19 = {
            duration: 0.8
        };
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "The Ulyg Dogma",
            el: "h2",
            className: "text-3xl md:text-5xl font-bold tracking-tighter gradient-text-gold"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mt-4 max-w-xl mx-auto",
            children: "Three pillars that define the ULGD movement"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
        $[20] = t19;
        $[21] = t20;
        $[22] = t21;
    } else {
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
        t19 = $[20];
        t20 = $[21];
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            initial: t16,
            whileInView: t17,
            viewport: t18,
            transition: t19,
            children: [
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-24 h-0.5 mx-auto mt-6",
                    style: {
                        background: "linear-gradient(90deg, transparent, #98F5FF, transparent)"
                    },
                    initial: {
                        scaleX: 0
                    },
                    whileInView: {
                        scaleX: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1,
                        delay: 0.3
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 310,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    let t24;
    let t25;
    let t26;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            x: -50,
            rotateY: -15
        };
        t24 = {
            opacity: 1,
            x: 0,
            rotateY: 0
        };
        t25 = {
            once: true
        };
        t26 = {
            duration: 0.8,
            type: "spring"
        };
        $[24] = t23;
        $[25] = t24;
        $[26] = t25;
        $[27] = t26;
    } else {
        t23 = $[24];
        t24 = $[25];
        t25 = $[26];
        t26 = $[27];
    }
    let t27;
    let t28;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            y: [
                0,
                -12,
                0
            ],
            scale: [
                1,
                1.02,
                1
            ]
        };
        t28 = {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
        };
        $[28] = t27;
        $[29] = t28;
    } else {
        t27 = $[28];
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "order-2 md:order-1",
            initial: t23,
            whileInView: t24,
            viewport: t25,
            transition: t26,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full max-w-xs mx-auto rounded-2xl overflow-hidden",
                animate: t27,
                transition: t28,
                whileHover: {
                    scale: 1.05,
                    transition: {
                        duration: 0.3
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackGraphic, {}, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 383,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 378,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    let t31;
    let t32;
    let t33;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            opacity: 0,
            x: 50
        };
        t31 = {
            opacity: 1,
            x: 0
        };
        t32 = {
            once: true
        };
        t33 = {
            duration: 0.8,
            type: "spring",
            delay: 0.1
        };
        $[31] = t30;
        $[32] = t31;
        $[33] = t32;
        $[34] = t33;
    } else {
        t30 = $[31];
        t31 = $[32];
        t32 = $[33];
        t33 = $[34];
    }
    let t34;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            y: -5,
            boxShadow: "0 20px 40px rgba(152,245,255,0.15)"
        };
        $[35] = t34;
    } else {
        t34 = $[35];
    }
    let t35;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-0 left-0 w-full h-1",
            style: {
                background: "linear-gradient(90deg, #98F5FF, #5CE0FF, #98F5FF)"
            },
            animate: {
                x: [
                    "-100%",
                    "100%"
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[36] = t35;
    } else {
        t35 = $[36];
    }
    let t36;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#98F5FF",
                background: "rgba(152,245,255,0.1)",
                border: "1px solid rgba(152,245,255,0.2)"
            },
            children: "PILLAR 01"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[37] = t36;
    } else {
        t36 = $[37];
    }
    let t37;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "order-1 md:order-2",
                    initial: t30,
                    whileInView: t31,
                    viewport: t32,
                    transition: t33,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden",
                        whileHover: t34,
                        children: [
                            t35,
                            t36,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                style: {
                                    color: "#98F5FF"
                                },
                                children: "A Pack, Not an Army"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                lineNumber: 457,
                                columnNumber: 319
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 leading-relaxed",
                                children: "We are a wonderfully weird, fiercely loyal pack of strays, artists, and degens who believe in the unifying power of the meme. Strength in numbers, character in imperfection."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                lineNumber: 459,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 457,
                        columnNumber: 193
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 457,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[38] = t37;
    } else {
        t37 = $[38];
    }
    let t38;
    let t39;
    let t40;
    let t41;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            opacity: 0,
            x: -50
        };
        t39 = {
            opacity: 1,
            x: 0
        };
        t40 = {
            once: true
        };
        t41 = {
            duration: 0.8,
            type: "spring"
        };
        $[39] = t38;
        $[40] = t39;
        $[41] = t40;
        $[42] = t41;
    } else {
        t38 = $[39];
        t39 = $[40];
        t40 = $[41];
        t41 = $[42];
    }
    let t42;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            y: -5,
            boxShadow: "0 20px 40px rgba(184,169,255,0.15)"
        };
        $[43] = t42;
    } else {
        t42 = $[43];
    }
    let t43;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-0 left-0 w-full h-1",
            style: {
                background: "linear-gradient(90deg, #B8A9FF, #a090ff, #B8A9FF)"
            },
            animate: {
                x: [
                    "-100%",
                    "100%"
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[44] = t43;
    } else {
        t43 = $[44];
    }
    let t44;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#B8A9FF",
                background: "rgba(184,169,255,0.1)",
                border: "1px solid rgba(184,169,255,0.2)"
            },
            children: "PILLAR 02"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[45] = t44;
    } else {
        t44 = $[45];
    }
    let t45;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t38,
            whileInView: t39,
            viewport: t40,
            transition: t41,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden",
                whileHover: t42,
                children: [
                    t43,
                    t44,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        style: {
                            color: "#B8A9FF"
                        },
                        children: "Ugly is Authentic"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 533,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 leading-relaxed",
                        children: "Perfection is boring and often fake. We celebrate the glitches, the quirks, and the happy accidents. No filters, no pretense. Ugliness is a mark of character."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 535,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 533,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[46] = t45;
    } else {
        t45 = $[46];
    }
    let t46;
    let t47;
    let t48;
    let t49;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            opacity: 0,
            x: 50,
            rotateY: 15
        };
        t47 = {
            opacity: 1,
            x: 0,
            rotateY: 0
        };
        t48 = {
            once: true
        };
        t49 = {
            duration: 0.8,
            type: "spring",
            delay: 0.1
        };
        $[47] = t46;
        $[48] = t47;
        $[49] = t48;
        $[50] = t49;
    } else {
        t46 = $[47];
        t47 = $[48];
        t48 = $[49];
        t49 = $[50];
    }
    let t50;
    let t51;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = {
            y: [
                0,
                -12,
                0
            ],
            rotate: [
                0,
                2,
                -2,
                0
            ]
        };
        t51 = {
            duration: 5.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
        };
        $[51] = t50;
        $[52] = t51;
    } else {
        t50 = $[51];
        t51 = $[52];
    }
    let t52;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex justify-center",
                    initial: t46,
                    whileInView: t47,
                    viewport: t48,
                    transition: t49,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-xs rounded-2xl overflow-hidden",
                        animate: t50,
                        transition: t51,
                        whileHover: {
                            scale: 1.05,
                            transition: {
                                duration: 0.3
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthenticGraphic, {}, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 599,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 594,
                        columnNumber: 194
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 594,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[53] = t52;
    } else {
        t52 = $[53];
    }
    let t53;
    let t54;
    let t55;
    let t56;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = {
            opacity: 0,
            x: -50,
            rotateY: -15
        };
        t54 = {
            opacity: 1,
            x: 0,
            rotateY: 0
        };
        t55 = {
            once: true
        };
        t56 = {
            duration: 0.8,
            type: "spring"
        };
        $[54] = t53;
        $[55] = t54;
        $[56] = t55;
        $[57] = t56;
    } else {
        t53 = $[54];
        t54 = $[55];
        t55 = $[56];
        t56 = $[57];
    }
    let t57;
    let t58;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = {
            y: [
                0,
                -15,
                0
            ],
            scale: [
                1,
                1.03,
                1
            ]
        };
        t58 = {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
        };
        $[58] = t57;
        $[59] = t58;
    } else {
        t57 = $[58];
        t58 = $[59];
    }
    let t59;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "order-2 md:order-1",
            initial: t53,
            whileInView: t54,
            viewport: t55,
            transition: t56,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full max-w-xs mx-auto rounded-2xl overflow-hidden",
                animate: t57,
                transition: t58,
                whileHover: {
                    scale: 1.05,
                    transition: {
                        duration: 0.3
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthGraphic, {}, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 662,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 657,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 657,
            columnNumber: 11
        }, this);
        $[60] = t59;
    } else {
        t59 = $[60];
    }
    let t60;
    let t61;
    let t62;
    let t63;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = {
            opacity: 0,
            x: 50
        };
        t61 = {
            opacity: 1,
            x: 0
        };
        t62 = {
            once: true
        };
        t63 = {
            duration: 0.8,
            type: "spring",
            delay: 0.1
        };
        $[61] = t60;
        $[62] = t61;
        $[63] = t62;
        $[64] = t63;
    } else {
        t60 = $[61];
        t61 = $[62];
        t62 = $[63];
        t63 = $[64];
    }
    let t64;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = {
            y: -5,
            boxShadow: "0 20px 40px rgba(255,184,217,0.15)"
        };
        $[65] = t64;
    } else {
        t64 = $[65];
    }
    let t65;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-0 left-0 w-full h-1",
            style: {
                background: "linear-gradient(90deg, #FFB8D9, #ff90c0, #FFB8D9)"
            },
            animate: {
                x: [
                    "-100%",
                    "100%"
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[66] = t65;
    } else {
        t65 = $[66];
    }
    let t66;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#FFB8D9",
                background: "rgba(255,184,217,0.1)",
                border: "1px solid rgba(255,184,217,0.2)"
            },
            children: "PILLAR 03"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 726,
            columnNumber: 11
        }, this);
        $[67] = t66;
    } else {
        t66 = $[67];
    }
    let t67;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-24",
            children: [
                t37,
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [
                        t59,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "order-1 md:order-2",
                            initial: t60,
                            whileInView: t61,
                            viewport: t62,
                            transition: t63,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden",
                                whileHover: t64,
                                children: [
                                    t65,
                                    t66,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-4",
                                        style: {
                                            color: "#FFB8D9"
                                        },
                                        children: "Enjoy the Ride"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 357
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 leading-relaxed",
                                        children: "We are aiming for the stars, but we are not in a frantic rush. Building a real community and a token with lasting value, one ugly step at a time."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                lineNumber: 737,
                                columnNumber: 231
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 737,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 737,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 737,
            columnNumber: 11
        }, this);
        $[68] = t67;
    } else {
        t67 = $[68];
    }
    let t68;
    let t69;
    let t70;
    let t71;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = {
            opacity: 0,
            y: 40
        };
        t69 = {
            opacity: 1,
            y: 0
        };
        t70 = {
            once: true
        };
        t71 = {
            duration: 0.8
        };
        $[69] = t68;
        $[70] = t69;
        $[71] = t70;
        $[72] = t71;
    } else {
        t68 = $[69];
        t69 = $[70];
        t70 = $[71];
        t71 = $[72];
    }
    let t72;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = {
            scale: 1.02
        };
        $[73] = t72;
    } else {
        t72 = $[73];
    }
    let t73;
    let t74;
    let t75;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 opacity-20",
            style: {
                background: "radial-gradient(circle at center, rgba(152,245,255,0.2), transparent 70%)"
            },
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ],
                opacity: [
                    0.2,
                    0.3,
                    0.2
                ]
            },
            transition: {
                duration: 4,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 786,
            columnNumber: 11
        }, this);
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl md:text-3xl font-bold mb-4 gradient-text-gold relative z-10",
            children: "Ready to Join the Pack?"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 mb-6 relative z-10",
            children: "Be part of the most authentic meme coin community in the cryptoverse."
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 796,
            columnNumber: 11
        }, this);
        $[74] = t73;
        $[75] = t74;
        $[76] = t75;
    } else {
        t73 = $[74];
        t74 = $[75];
        t75 = $[76];
    }
    let t76;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black text-white min-h-screen relative overflow-hidden",
            children: [
                t0,
                t1,
                t2,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 lg:px-8 pb-20 max-w-6xl relative z-10",
                    children: [
                        t15,
                        t22,
                        t67,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mt-24 text-center",
                            initial: t68,
                            whileInView: t69,
                            viewport: t70,
                            transition: t71,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "inline-block card-premium rounded-3xl p-10 relative overflow-hidden",
                                whileHover: t72,
                                children: [
                                    t73,
                                    t74,
                                    t75,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        className: "btn-premium relative z-10",
                                        whileHover: {
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(152,245,255,0.4)"
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: "Get ULGD Now"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                        lineNumber: 807,
                                        columnNumber: 425
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                lineNumber: 807,
                                columnNumber: 301
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 807,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 807,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        $[77] = t76;
    } else {
        t76 = $[77];
    }
    return t76;
}
_c5 = AboutPage;
function _temp(t0, i) {
    const [left, top, size] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute rounded-full pointer-events-none z-0",
        style: {
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            background: i % 3 === 0 ? "rgba(152,245,255,0.15)" : i % 3 === 1 ? "rgba(184,169,255,0.12)" : "rgba(255,184,217,0.1)",
            boxShadow: `0 0 ${size * 2}px ${i % 3 === 0 ? "rgba(152,245,255,0.3)" : i % 3 === 1 ? "rgba(184,169,255,0.25)" : "rgba(255,184,217,0.2)"}`
        },
        animate: {
            y: [
                0,
                -30 - i * 5,
                0
            ],
            x: [
                0,
                i % 2 === 0 ? 15 : -15,
                0
            ],
            scale: [
                1,
                1.2,
                1
            ],
            opacity: [
                0.3,
                0.7,
                0.3
            ]
        },
        transition: {
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
        }
    }, `particle-${i}`, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
        lineNumber: 821,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "OriginGraphic");
__turbopack_context__.k.register(_c1, "PackGraphic");
__turbopack_context__.k.register(_c2, "AuthenticGraphic");
__turbopack_context__.k.register(_c3, "GrowthGraphic");
__turbopack_context__.k.register(_c4, "FloatingParticles");
__turbopack_context__.k.register(_c5, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationControls",
    ()=>animationControls,
    "setValues",
    ()=>setValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/render/utils/setters.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
;
;
;
function stopAnimation(visualElement) {
    visualElement.values.forEach((value)=>value.stop());
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [
        ...variantLabels
    ].reverse();
    reversedLabels.forEach((key)=>{
        const variant = visualElement.getVariant(key);
        variant && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child)=>{
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    } else if (typeof definition === "string") {
        return setVariants(visualElement, [
            definition
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, definition);
    }
}
/**
 * @public
 */ function animationControls() {
    /**
     * Track whether the host component has mounted.
     */ let hasMounted = false;
    /**
     * A collection of linked component animation controls.
     */ const subscribers = new Set();
    const controls = {
        subscribe (visualElement) {
            subscribers.add(visualElement);
            return ()=>void subscribers.delete(visualElement);
        },
        start (definition, transitionOverride) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            const animations = [];
            subscribers.forEach((visualElement)=>{
                animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, definition, {
                    transitionOverride
                }));
            });
            return Promise.all(animations);
        },
        set (definition) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach((visualElement)=>{
                setValues(visualElement, definition);
            });
        },
        stop () {
            subscribers.forEach((visualElement)=>{
                stopAnimation(visualElement);
            });
        },
        mount () {
            hasMounted = true;
            return ()=>{
                hasMounted = false;
                controls.stop();
            };
        }
    };
    return controls;
}
;
}),
"[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation,
    "useAnimationControls",
    ()=>useAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * Creates `LegacyAnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `LegacyAnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */ function useAnimationControls() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationControls"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(controls.mount, []);
    return controls;
}
const useAnimation = useAnimationControls;
;
}),
"[project]/Desktop/meme-coin-website/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InView",
    ()=>InView,
    "defaultFallbackInView",
    ()=>defaultFallbackInView,
    "observe",
    ()=>observe,
    "useInView",
    ()=>useInView,
    "useOnInView",
    ()=>useOnInView
]);
// src/InView.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
// src/observe.ts
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue;
function defaultFallbackInView(inView) {
    unsupportedValue = inView;
}
function getRootId(root) {
    if (!root) return "0";
    if (RootIds.has(root)) return RootIds.get(root);
    rootId += 1;
    RootIds.set(root, rootId.toString());
    return RootIds.get(root);
}
function optionsToId(options) {
    return Object.keys(options).sort().filter((key)=>options[key] !== void 0).map((key)=>{
        return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
    }).toString();
}
function createObserver(options) {
    const id = optionsToId(options);
    let instance = observerMap.get(id);
    if (!instance) {
        const elements = /* @__PURE__ */ new Map();
        let thresholds;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                var _a2;
                const inView = entry.isIntersecting && thresholds.some((threshold)=>entry.intersectionRatio >= threshold);
                if (options.trackVisibility && typeof entry.isVisible === "undefined") {
                    entry.isVisible = inView;
                }
                (_a2 = elements.get(entry.target)) == null ? void 0 : _a2.forEach((callback)=>{
                    callback(inView, entry);
                });
            });
        }, options);
        thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [
            options.threshold || 0
        ]);
        instance = {
            id,
            observer,
            elements
        };
        observerMap.set(id, instance);
    }
    return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
    if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
        const bounds = element.getBoundingClientRect();
        callback(fallbackInView, {
            isIntersecting: fallbackInView,
            target: element,
            intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
            time: 0,
            boundingClientRect: bounds,
            intersectionRect: bounds,
            rootBounds: bounds
        });
        return ()=>{};
    }
    const { id, observer, elements } = createObserver(options);
    const callbacks = elements.get(element) || [];
    if (!elements.has(element)) {
        elements.set(element, callbacks);
    }
    callbacks.push(callback);
    observer.observe(element);
    return function unobserve() {
        callbacks.splice(callbacks.indexOf(callback), 1);
        if (callbacks.length === 0) {
            elements.delete(element);
            observer.unobserve(element);
        }
        if (elements.size === 0) {
            observer.disconnect();
            observerMap.delete(id);
        }
    };
}
// src/InView.tsx
function isPlainChildren(props) {
    return typeof props.children !== "function";
}
var InView = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        __publicField(this, "node", null);
        __publicField(this, "_unobserveCb", null);
        __publicField(this, "lastInView");
        __publicField(this, "handleNode", (node)=>{
            if (this.node) {
                this.unobserve();
                if (!node && !this.props.triggerOnce && !this.props.skip) {
                    this.setState({
                        inView: !!this.props.initialInView,
                        entry: void 0
                    });
                    this.lastInView = this.props.initialInView;
                }
            }
            this.node = node ? node : null;
            this.observeNode();
        });
        __publicField(this, "handleChange", (inView, entry)=>{
            const previousInView = this.lastInView;
            this.lastInView = inView;
            if (previousInView === void 0 && !inView) {
                return;
            }
            if (inView && this.props.triggerOnce) {
                this.unobserve();
            }
            if (!isPlainChildren(this.props)) {
                this.setState({
                    inView,
                    entry
                });
            }
            if (this.props.onChange) {
                this.props.onChange(inView, entry);
            }
        });
        this.state = {
            inView: !!props.initialInView,
            entry: void 0
        };
        this.lastInView = props.initialInView;
    }
    componentDidMount() {
        this.unobserve();
        this.observeNode();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
            this.unobserve();
            this.observeNode();
        }
    }
    componentWillUnmount() {
        this.unobserve();
    }
    observeNode() {
        if (!this.node || this.props.skip) return;
        const { threshold, root, rootMargin, trackVisibility, delay, fallbackInView } = this.props;
        if (this.lastInView === void 0) {
            this.lastInView = this.props.initialInView;
        }
        this._unobserveCb = observe(this.node, this.handleChange, {
            threshold,
            root,
            rootMargin,
            // @ts-expect-error
            trackVisibility,
            delay
        }, fallbackInView);
    }
    unobserve() {
        if (this._unobserveCb) {
            this._unobserveCb();
            this._unobserveCb = null;
        }
    }
    render() {
        const { children } = this.props;
        if (typeof children === "function") {
            const { inView, entry } = this.state;
            return children({
                inView,
                entry,
                ref: this.handleNode
            });
        }
        const { as, triggerOnce, threshold, root, rootMargin, onChange, skip, trackVisibility, delay, initialInView, fallbackInView, ...props } = this.props;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](as || "div", {
            ref: this.handleNode,
            ...props
        }, children);
    }
};
;
function useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange } = {}) {
    var _a2;
    const [ref, setRef] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const callback = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](onChange);
    const lastInViewRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](initialInView);
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        inView: !!initialInView,
        entry: void 0
    });
    callback.current = onChange;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useInView.useEffect": ()=>{
            if (lastInViewRef.current === void 0) {
                lastInViewRef.current = initialInView;
            }
            if (skip || !ref) return;
            let unobserve;
            unobserve = observe(ref, {
                "useInView.useEffect": (inView, entry)=>{
                    const previousInView = lastInViewRef.current;
                    lastInViewRef.current = inView;
                    if (previousInView === void 0 && !inView) {
                        return;
                    }
                    setState({
                        inView,
                        entry
                    });
                    if (callback.current) callback.current(inView, entry);
                    if (entry.isIntersecting && triggerOnce && unobserve) {
                        unobserve();
                        unobserve = void 0;
                    }
                }
            }["useInView.useEffect"], {
                root,
                rootMargin,
                threshold,
                // @ts-expect-error
                trackVisibility,
                delay
            }, fallbackInView);
            return ({
                "useInView.useEffect": ()=>{
                    if (unobserve) {
                        unobserve();
                    }
                }
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        // If the threshold is an array, convert it to a string, so it won't change between renders.
        Array.isArray(threshold) ? threshold.toString() : threshold,
        ref,
        root,
        rootMargin,
        triggerOnce,
        skip,
        trackVisibility,
        fallbackInView,
        delay
    ]);
    const entryTarget = (_a2 = state.entry) == null ? void 0 : _a2.target;
    const previousEntryTarget = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
        previousEntryTarget.current = entryTarget;
        setState({
            inView: !!initialInView,
            entry: void 0
        });
        lastInViewRef.current = initialInView;
    }
    const result = [
        setRef,
        state.inView,
        state.entry
    ];
    result.ref = result[0];
    result.inView = result[1];
    result.entry = result[2];
    return result;
}
;
var _a, _b;
var useSyncEffect = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"]) != null ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]) != null ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var useOnInView = (onIntersectionChange, { threshold, root, rootMargin, trackVisibility, delay, triggerOnce, skip } = {})=>{
    const onIntersectionChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](onIntersectionChange);
    const observedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const observerCleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const lastInViewRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    useSyncEffect({
        "useOnInView.useSyncEffect": ()=>{
            onIntersectionChangeRef.current = onIntersectionChange;
        }
    }["useOnInView.useSyncEffect"], [
        onIntersectionChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useOnInView.useCallback": (element)=>{
            const cleanupExisting = {
                "useOnInView.useCallback.cleanupExisting": ()=>{
                    if (observerCleanupRef.current) {
                        const cleanup = observerCleanupRef.current;
                        observerCleanupRef.current = void 0;
                        cleanup();
                    }
                }
            }["useOnInView.useCallback.cleanupExisting"];
            if (element === observedElementRef.current) {
                return observerCleanupRef.current;
            }
            if (!element || skip) {
                cleanupExisting();
                observedElementRef.current = null;
                lastInViewRef.current = void 0;
                return;
            }
            cleanupExisting();
            observedElementRef.current = element;
            let destroyed = false;
            const destroyObserver = observe(element, {
                "useOnInView.useCallback.destroyObserver": (inView, entry)=>{
                    const previousInView = lastInViewRef.current;
                    lastInViewRef.current = inView;
                    if (previousInView === void 0 && !inView) {
                        return;
                    }
                    onIntersectionChangeRef.current(inView, entry);
                    if (triggerOnce && inView) {
                        stopObserving();
                    }
                }
            }["useOnInView.useCallback.destroyObserver"], {
                threshold,
                root,
                rootMargin,
                trackVisibility,
                delay
            });
            function stopObserving() {
                if (destroyed) return;
                destroyed = true;
                destroyObserver();
                observedElementRef.current = null;
                observerCleanupRef.current = void 0;
                lastInViewRef.current = void 0;
            }
            observerCleanupRef.current = stopObserving;
            return observerCleanupRef.current;
        }
    }["useOnInView.useCallback"], [
        Array.isArray(threshold) ? threshold.toString() : threshold,
        root,
        rootMargin,
        trackVisibility,
        delay,
        triggerOnce,
        skip
    ]);
};
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=Desktop_meme-coin-website_1514f105._.js.map