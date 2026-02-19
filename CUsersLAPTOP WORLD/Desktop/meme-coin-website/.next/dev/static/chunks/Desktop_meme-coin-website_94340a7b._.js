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
"[project]/Desktop/meme-coin-website/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/src/components/AnimatedText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/src/components/AnimatedOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$MeshBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/src/components/MeshBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/meme-coin-website/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
/* ---- Large Hero Graphic: Dog in Space Suit on Moon ---- */ const HeroGraphic = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    const [isClicked, setIsClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== isClicked) {
        t0 = ()=>{
            setIsClicked(!isClicked);
        };
        $[1] = isClicked;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleClick = t0;
    let t1;
    if ($[3] !== isClicked) {
        t1 = isClicked ? [
            0,
            -20,
            0
        ] : 0;
        $[3] = isClicked;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t1) {
        t2 = {
            y: t1
        };
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    let t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            duration: 0.5,
            ease: "easeInOut"
        };
        t4 = {
            cursor: "pointer"
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json",
            loop: true,
            autoplay: true,
            className: "w-full h-full pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[10] !== handleClick || $[11] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            onClick: handleClick,
            animate: t2,
            transition: t3,
            style: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = handleClick;
        $[11] = t2;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
};
_s(HeroGraphic, "+2jvnzgqyS4sm44z1s1whgWD4Tg=");
_c = HeroGraphic;
// <img src="https://picsum.photos/520/520" alt="Hero Graphic" />
// <svg viewBox="0 0 520 520" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//   <defs>
//     <linearGradient id="hSuit" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="0%" stopColor="#98F5FF"/>
//       <stop offset="100%" stopColor="#5CE0FF"/>
//     </linearGradient>
//     <linearGradient id="hVisor" x1="0" y1="0" x2="1" y2="1">
//       <stop offset="0%" stopColor="#60a5fa"/>
//       <stop offset="50%" stopColor="#3b82f6"/>
//       <stop offset="100%" stopColor="#1d4ed8"/>
//     </linearGradient>
//     <linearGradient id="hFlame" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="0%" stopColor="#2ECBFF"/>
//       <stop offset="50%" stopColor="#B8A9FF"/>
//       <stop offset="100%" stopColor="#B8A9FF"/>
//     </linearGradient>
//     <radialGradient id="hGlow" cx="50%" cy="40%" r="50%">
//       <stop offset="0%" stopColor="rgba(152,245,255,0.25)"/>
//       <stop offset="100%" stopColor="transparent"/>
//     </radialGradient>
//     <radialGradient id="hMoon" cx="40%" cy="35%" r="60%">
//       <stop offset="0%" stopColor="#3a3a4a"/>
//       <stop offset="100%" stopColor="#1a1a24"/>
//     </radialGradient>
//     <filter id="hSoftGlow">
//       <feGaussianBlur stdDeviation="6" result="blur"/>
//       <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
//     </filter>
//     <filter id="hStarGlow">
//       <feGaussianBlur stdDeviation="2" result="blur"/>
//       <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
//     </filter>
//   </defs>
//   {/* Space background glow */}
//   <circle cx="260" cy="220" r="220" fill="url(#hGlow)"/>
//   {/* Stars scattered */}
//   {[[70,40,2.5],[430,55,2],[90,140,1.5],[450,170,2],[55,280,1.5],[460,300,1],[180,30,1],[380,35,2.5],[140,420,2],[400,440,1.5],[30,380,1],[490,380,2]].map(([cx,cy,r], i) => (
//     <circle key={i} cx={cx} cy={cy} r={r} fill={i%3===0?"#98F5FF":i%3===1?"#B8A9FF":"#FFB8D9"} opacity={0.3+((i%4)*0.15)} filter="url(#hStarGlow)"/>
//   ))}
//   {/* Twinkling cross stars */}
//   {[[120,80,"#98F5FF"],[400,120,"#B8A9FF"],[80,350,"#FFB8D9"]].map(([x,y,c], i) => (
//     <g key={`cs${i}`}>
//       <line x1={Number(x)-8} y1={Number(y)} x2={Number(x)+8} y2={Number(y)} stroke={String(c)} strokeWidth="1" opacity="0.4"/>
//       <line x1={Number(x)} y1={Number(y)-8} x2={Number(x)} y2={Number(y)+8} stroke={String(c)} strokeWidth="1" opacity="0.4"/>
//     </g>
//   ))}
//   {/* Moon surface */}
//   <ellipse cx="260" cy="430" rx="200" ry="60" fill="url(#hMoon)"/>
//   <circle cx="200" cy="420" r="15" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
//   <circle cx="310" cy="435" r="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
//   <circle cx="170" cy="440" r="8" fill="rgba(255,255,255,0.02)"/>
//   <circle cx="350" cy="425" r="12" fill="rgba(255,255,255,0.015)"/>
//   {/* ULGD Flag on moon */}
//   <line x1="360" y1="310" x2="360" y2="410" stroke="#70D4E5" strokeWidth="2"/>
//   <rect x="362" y="312" width="50" height="32" rx="2" fill="rgba(152,245,255,0.2)" stroke="#98F5FF" strokeWidth="1"/>
//   <text x="387" y="333" textAnchor="middle" fill="#98F5FF" fontSize="11" fontWeight="800" fontFamily="Inter, sans-serif">ULGD</text>
//   {/* Dog astronaut body */}
//   <ellipse cx="220" cy="330" rx="55" ry="65" fill="url(#hSuit)" filter="url(#hSoftGlow)" opacity="0.9"/>
//   {/* Suit details */}
//   <rect x="195" y="360" width="20" height="35" rx="8" fill="#70D4E5" stroke="#5ABDC9" strokeWidth="1"/>
//   <rect x="225" y="360" width="20" height="35" rx="8" fill="#70D4E5" stroke="#5ABDC9" strokeWidth="1"/>
//   {/* Backpack/jetpack */}
//   <rect x="172" y="300" width="20" height="45" rx="6" fill="#7DE8F5" stroke="#70D4E5" strokeWidth="1"/>
//   <circle cx="182" cy="310" r="3" fill="#2ECBFF" opacity="0.8"/>
//   <circle cx="182" cy="325" r="3" fill="#2ECBFF" opacity="0.6"/>
//   {/* Jetpack flame */}
//   <path d="M175 345 Q178 370 182 385 Q186 370 189 345 Z" fill="url(#hFlame)" opacity="0.7"/>
//   <path d="M178 345 Q180 362 182 372 Q184 362 186 345 Z" fill="#98F5FF" opacity="0.5"/>
//   {/* Helmet */}
//   <circle cx="220" cy="270" r="50" fill="rgba(197,250,255,0.15)" stroke="rgba(152,245,255,0.5)" strokeWidth="2"/>
//   {/* Visor */}
//   <ellipse cx="220" cy="268" rx="38" ry="36" fill="url(#hVisor)" opacity="0.85"/>
//   {/* Visor reflection */}
//   <path d="M195 250 Q205 240 225 245" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
//   {/* Dog face inside visor */}
//   <ellipse cx="220" cy="272" rx="25" ry="22" fill="#C5FAFF"/>
//   {/* Ears poking inside helmet */}
//   <path d="M200 255 Q193 240 207 248 Z" fill="#7BB8C4"/>
//   <path d="M240 255 Q247 240 233 248 Z" fill="#7BB8C4"/>
//   {/* Eyes - wonky */}
//   <circle cx="210" cy="265" r="5" fill="#fff"/><circle cx="212" cy="267" r="2" fill="#111"/>
//   <circle cx="232" cy="268" r="6" fill="#fff"/><circle cx="230" cy="270" r="2" fill="#111"/>
//   {/* Nose */}
//   <ellipse cx="220" cy="280" rx="3.5" ry="3" fill="#111"/>
//   {/* Mouth & tongue */}
//   <path d="M210 288 Q220 296 230 288" stroke="#111" strokeWidth="1.2" fill="none"/>
//   <path d="M220 288 Q223 295 221 300 Q218 297 220 289 Z" fill="#FF69B4"/>
//   {/* Ugly spots */}
//   <circle cx="207" cy="275" r="1.5" fill="#5E9BA8" opacity="0.6"/>
//   <circle cx="233" cy="278" r="1" fill="#5E9BA8" opacity="0.6"/>
//   {/* Arms */}
//   <path d="M165 310 Q140 320 130 340" stroke="#70D4E5" strokeWidth="10" fill="none" strokeLinecap="round"/>
//   <circle cx="128" cy="342" r="8" fill="#7DE8F5" stroke="#70D4E5" strokeWidth="1"/>
//   <path d="M275 310 Q300 320 310 340" stroke="#70D4E5" strokeWidth="10" fill="none" strokeLinecap="round"/>
//   <circle cx="312" cy="342" r="8" fill="#7DE8F5" stroke="#70D4E5" strokeWidth="1"/>
//   {/* Waving hand holding coin */}
//   <circle cx="128" cy="342" r="14" fill="rgba(152,245,255,0.2)" stroke="#98F5FF" strokeWidth="1.5"/>
//   <text x="128" y="347" textAnchor="middle" fill="#98F5FF" fontSize="10" fontWeight="800" fontFamily="Inter">$</text>
//   {/* Orbit ring around dog */}
//   <ellipse cx="220" cy="320" rx="120" ry="30" fill="none" stroke="rgba(152,245,255,0.12)" strokeWidth="1" strokeDasharray="6 4"/>
//   {/* Small orbiting token */}
//   <circle cx="340" cy="315" r="8" fill="rgba(152,245,255,0.25)" stroke="#98F5FF" strokeWidth="1"/>
//   <text x="340" y="318" textAnchor="middle" fill="#98F5FF" fontSize="7" fontWeight="700">U</text>
//   {/* Nebula clouds */}
//   <ellipse cx="80" cy="180" rx="50" ry="20" fill="rgba(184,169,255,0.06)"/>
//   <ellipse cx="440" cy="220" rx="40" ry="15" fill="rgba(255,184,217,0.05)"/>
// </svg>
/* ---- Feature Section Graphics ---- */ const SupplyGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/9c333066-512c-473d-8380-6927d6d1d4d0/vQ9x5gQ103.lottie",
            loop: true,
            autoplay: true,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 227,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = SupplyGraphic;
const ZeroTaxGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/e06b9777-6d65-4f27-a06f-40e15998797f/fQ9x5gQ103.lottie",
            loop: true,
            autoplay: true,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 244,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = ZeroTaxGraphic;
const CommunityGraphicSmall = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/79010375-7f28-4394-a130-9b882f059293/c06g9pQ103.lottie",
            loop: true,
            autoplay: true,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 261,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = CommunityGraphicSmall;
/* ---- Stats Section Illustration ---- */ const StatsGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/ebbf6774-6014-41d3-a442-9f37c35a828e/M5pW3gQ103.lottie",
            loop: true,
            autoplay: true,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 280,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = StatsGraphic;
/* ---- Floating Geometric Decorations ---- */ const FloatingDecorations = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                [
                    [
                        8,
                        15,
                        40,
                        25
                    ],
                    [
                        85,
                        25,
                        30,
                        35
                    ],
                    [
                        12,
                        70,
                        35,
                        20
                    ],
                    [
                        90,
                        65,
                        28,
                        40
                    ],
                    [
                        45,
                        85,
                        32,
                        30
                    ]
                ].map(_temp),
                [
                    [
                        20,
                        40,
                        24,
                        18
                    ],
                    [
                        75,
                        50,
                        20,
                        22
                    ],
                    [
                        55,
                        20,
                        22,
                        28
                    ]
                ].map(_temp2),
                [
                    [
                        30,
                        60,
                        16
                    ],
                    [
                        70,
                        30,
                        12
                    ],
                    [
                        15,
                        85,
                        10
                    ],
                    [
                        88,
                        80,
                        14
                    ],
                    [
                        50,
                        10,
                        8
                    ]
                ].map(_temp3)
            ]
        }, void 0, true);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c5 = FloatingDecorations;
/* ---- Liquid Wave Divider ---- */ const LiquidWaveDivider = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full h-20 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                src: "https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json",
                loop: true,
                autoplay: true,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 318,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 318,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c6 = LiquidWaveDivider;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19f83f331d4c288d104ac485f450fa0f3cf767edc56efb28cc24a1755c40d610";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aurora-bg absolute inset-0 pointer-events-none z-0"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 337,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$MeshBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "warm"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 338,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingDecorations, {}, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 339,
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
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "Don't Just HODL. Get ULYG.",
            el: "h1",
            className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 gradient-text-gold text-glow leading-[0.95]"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 352,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "The Meme Coin That Embraces Chaos",
            el: "div",
            className: "text-2xl md:text-3xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 353,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            className: "text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed",
            variants: itemVariants,
            children: "Tired of cute dogs? Sick of perfect logos? ULGD is the meme coin for the rest of us. Ugly and proud."
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 354,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/how-to-buy",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                className: "btn-premium",
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                children: "Get ULYG Now"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 365,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 365,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            borderColor: "rgba(92,224,255,0.4)",
            color: "#98F5FF"
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2",
            variants: containerVariants,
            children: [
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: itemVariants,
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/whitepaper",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                className: "px-8 py-3.5 rounded-full text-lg font-bold border-2 transition-all duration-300",
                                style: t7,
                                onMouseEnter: _HomeMotionButtonOnMouseEnter,
                                onMouseLeave: _HomeMotionButtonOnMouseLeave,
                                whileHover: {
                                    scale: 1.05,
                                    borderColor: "rgba(152,245,255,0.6)"
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: "The Ulyg Paper"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 260
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                            lineNumber: 386,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 386,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 386,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t11;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            opacity: 0,
            scale: 0.8,
            y: 20
        };
        t10 = {
            opacity: 1,
            scale: 1,
            y: 0
        };
        t11 = {
            duration: 1.2,
            delay: 0.8,
            type: "spring",
            stiffness: 60
        };
        $[10] = t10;
        $[11] = t11;
        $[12] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-12 max-w-7xl mx-auto gap-4",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0",
                    initial: t9,
                    animate: t10,
                    transition: t11,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-lg",
                        animate: {
                            y: [
                                0,
                                -12,
                                0
                            ]
                        },
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroGraphic, {}, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                            lineNumber: 433,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                        lineNumber: 426,
                        columnNumber: 281
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 426,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-black tracking-tighter gradient-text-gold mb-4",
                        children: "Why ULGD?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                        lineNumber: 440,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-lg max-w-2xl mx-auto",
                        children: "Built different. Built ugly. Built to last."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                        lineNumber: 440,
                        columnNumber: 167
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 440,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 py-20 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: [
                            {
                                graphic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplyGraphic, {}, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                    lineNumber: 448,
                                    columnNumber: 22
                                }, this),
                                title: "1 Billion Supply",
                                desc: "Fixed, finite, and fair. No minting, no surprises. Every token accounted for."
                            },
                            {
                                graphic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZeroTaxGraphic, {}, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 22
                                }, this),
                                title: "Zero Tax",
                                desc: "0% buy and sell tax. What you trade is what you get. No hidden fees."
                            },
                            {
                                graphic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommunityGraphicSmall, {}, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 22
                                }, this),
                                title: "Community First",
                                desc: "40% to community treasury. Built by the pack, for the pack."
                            }
                        ].map(_HomeAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                        lineNumber: 447,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 447,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: -40
            },
            whileInView: {
                opacity: 1,
                x: 0
            },
            viewport: {
                once: true
            },
            transition: {
                duration: 0.8
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsGraphic, {}, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 476,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 466,
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
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            x: 40
        };
        t17 = {
            opacity: 1,
            x: 0
        };
        t18 = {
            once: true
        };
        t19 = {
            duration: 0.8,
            delay: 0.2
        };
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
        $[20] = t19;
    } else {
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
        t19 = $[20];
    }
    let t20;
    let t21;
    let t22;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#98F5FF",
                background: "rgba(152,245,255,0.1)",
                border: "1px solid rgba(152,245,255,0.2)"
            },
            children: "UGLYNOMICS"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold gradient-text-gold mb-4",
            children: "The Ugly Truth in Numbers"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 leading-relaxed mb-6",
            children: "Our tokenomics are designed for long-term growth. Fair distribution, zero tax, and a community treasury that fuels the entire ecosystem."
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[21] = t20;
        $[22] = t21;
        $[23] = t22;
    } else {
        t20 = $[21];
        t21 = $[22];
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 py-16 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: t16,
                            whileInView: t17,
                            viewport: t18,
                            transition: t19,
                            children: [
                                t20,
                                t21,
                                t22,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        {
                                            val: "1B",
                                            label: "Total Supply"
                                        },
                                        {
                                            val: "0%",
                                            label: "Tax Rate"
                                        },
                                        {
                                            val: "40%",
                                            label: "Community"
                                        },
                                        {
                                            val: "ERC-20",
                                            label: "Standard"
                                        }
                                    ].map(_HomeAnonymous2)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 254
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                            lineNumber: 532,
                            columnNumber: 163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 532,
                    columnNumber: 88
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 532,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    let t25;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-5xl font-black tracking-tighter gradient-text-gold mb-6",
            children: "Ready to Get Ugly?"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-lg mb-10 max-w-xl mx-auto",
            children: "Join the most authentic meme coin community and embrace the chaos."
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        $[25] = t24;
        $[26] = t25;
    } else {
        t24 = $[25];
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/how-to-buy",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                className: "btn-premium",
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                children: "Buy ULGD"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 562,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            borderColor: "rgba(184,169,255,0.4)",
            color: "#B8A9FF"
        };
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 py-20 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [
                        t24,
                        t25,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: [
                                t26,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/community",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        className: "px-8 py-3.5 rounded-full text-lg font-bold border-2 transition-all duration-300",
                                        style: t27,
                                        onMouseEnter: _HomeMotionButtonOnMouseEnter2,
                                        onMouseLeave: _HomeMotionButtonOnMouseLeave2,
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: "Join the Pack"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 210
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                                    lineNumber: 583,
                                    columnNumber: 186
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                            lineNumber: 583,
                            columnNumber: 128
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 583,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 583,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative bg-black text-white overflow-hidden",
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            children: [
                t0,
                t1,
                t2,
                t12,
                t14,
                t23,
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-gradient-to-r from-transparent to-transparent",
                    style: {
                        backgroundImage: "linear-gradient(to right, transparent, rgba(152,245,255,0.2), transparent)"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 594,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    return t29;
}
_c7 = Home;
function _HomeMotionButtonOnMouseLeave2(e_2) {
    e_2.currentTarget.style.background = "transparent";
}
function _HomeMotionButtonOnMouseEnter2(e_1) {
    e_1.currentTarget.style.background = "rgba(184,169,255,0.1)";
}
function _HomeAnonymous2(stat, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "card-premium neon-border rounded-xl p-4 text-center relative overflow-hidden",
        initial: {
            opacity: 0,
            scale: 0.9
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
        viewport: {
            once: true
        },
        transition: {
            delay: i_0 * 0.1,
            duration: 0.4
        },
        whileHover: {
            scale: 1.05
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl font-bold",
                style: {
                    color: "#98F5FF"
                },
                children: stat.val
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 623,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500 mt-1",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 625,
                columnNumber: 24
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
        lineNumber: 610,
        columnNumber: 10
    }, this);
}
function _HomeAnonymous(feat, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card-premium holo-shine tilt-card rounded-2xl p-8 text-center relative overflow-hidden",
            whileHover: {
                y: -8,
                transition: {
                    type: "spring",
                    stiffness: 300
                }
            },
            initial: {
                opacity: 0,
                y: 40
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: true
            },
            transition: {
                delay: i * 0.15,
                duration: 0.6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-28 h-28 mx-auto mb-6",
                    animate: {
                        y: [
                            0,
                            -5,
                            0
                        ]
                    },
                    transition: {
                        duration: 4 + i,
                        repeat: Infinity,
                        repeatType: "reverse"
                    },
                    children: feat.graphic
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 645,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold mb-3",
                    style: {
                        color: "#98F5FF"
                    },
                    children: feat.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 651,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm leading-relaxed",
                    children: feat.desc
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                    lineNumber: 653,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 628,
            columnNumber: 36
        }, this)
    }, i, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
        lineNumber: 628,
        columnNumber: 10
    }, this);
}
function _HomeMotionButtonOnMouseLeave(e_0) {
    e_0.currentTarget.style.background = "transparent";
}
function _HomeMotionButtonOnMouseEnter(e) {
    e.currentTarget.style.background = "rgba(152,245,255,0.1)";
}
function _temp(t0, i) {
    const [left, top, size, dur] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute pointer-events-none z-0",
        style: {
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size
        },
        animate: {
            y: [
                0,
                -20,
                0
            ],
            rotate: [
                0,
                180,
                360
            ],
            opacity: [
                0.05,
                0.12,
                0.05
            ]
        },
        transition: {
            duration: dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                src: "https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json",
                loop: true,
                autoplay: true,
                className: "w-full h-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
                lineNumber: 677,
                columnNumber: 6
            }, this),
            "        "
        ]
    }, `hex-${i}`, true, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
        lineNumber: 663,
        columnNumber: 10
    }, this);
}
function _temp2(t0, i_0) {
    const [left_0, top_0, size_0, dur_0] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute pointer-events-none z-0",
        style: {
            left: `${left_0}%`,
            top: `${top_0}%`,
            width: size_0,
            height: size_0
        },
        animate: {
            y: [
                0,
                15,
                0
            ],
            rotate: [
                45,
                90,
                45
            ],
            scale: [
                1,
                1.1,
                1
            ]
        },
        transition: {
            duration: dur_0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i_0 * 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/e06b9777-6d65-4f27-a06f-40e15998797f/fQ9x5gQ103.lottie",
            loop: true,
            autoplay: true,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 695,
            columnNumber: 6
        }, this)
    }, `dia-${i_0}`, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
        lineNumber: 681,
        columnNumber: 10
    }, this);
}
function _temp3(t0, i_1) {
    const [left_1, top_1, size_1] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute rounded-full pointer-events-none z-0",
        style: {
            left: `${left_1}%`,
            top: `${top_1}%`,
            width: size_1,
            height: size_1,
            background: i_1 % 2 === 0 ? "rgba(152,245,255,0.06)" : "rgba(184,169,255,0.05)",
            border: "1px solid rgba(152,245,255,0.1)"
        },
        animate: {
            y: [
                0,
                -25 - i_1 * 5,
                0
            ],
            x: [
                0,
                i_1 % 2 === 0 ? 10 : -10,
                0
            ],
            opacity: [
                0.3,
                0.6,
                0.3
            ]
        },
        transition: {
            duration: 8 + i_1 * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i_1 * 0.8
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
            src: "https://lottie.host/79010375-7f28-4394-a130-9b882f059293/c06g9pQ103.lottie",
            loop: true,
            autoplay: true,
            className: "w-full h-full rounded-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
            lineNumber: 715,
            columnNumber: 6
        }, this)
    }, `circ-${i_1}`, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/page.tsx",
        lineNumber: 699,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "HeroGraphic");
__turbopack_context__.k.register(_c1, "SupplyGraphic");
__turbopack_context__.k.register(_c2, "ZeroTaxGraphic");
__turbopack_context__.k.register(_c3, "CommunityGraphicSmall");
__turbopack_context__.k.register(_c4, "StatsGraphic");
__turbopack_context__.k.register(_c5, "FloatingDecorations");
__turbopack_context__.k.register(_c6, "LiquidWaveDivider");
__turbopack_context__.k.register(_c7, "Home");
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

//# sourceMappingURL=Desktop_meme-coin-website_94340a7b._.js.map