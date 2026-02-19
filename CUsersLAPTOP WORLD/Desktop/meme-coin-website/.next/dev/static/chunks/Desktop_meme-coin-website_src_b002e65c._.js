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
"use client";
;
;
;
;
;
;
/* ---- Origin Story: Dog emerging from code/blockchain ---- */ const OriginGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
            id: "aGlow",
            cx: "50%",
            cy: "45%",
            r: "50%",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "0%",
                    stopColor: "rgba(152,245,255,0.25)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 20,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "100%",
                    stopColor: "transparent"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 20,
                    columnNumber: 118
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
            id: "aPortal",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "0%",
                    stopColor: "#98F5FF"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 27,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "50%",
                    stopColor: "#B8A9FF"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 27,
                    columnNumber: 107
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "100%",
                    stopColor: "#FFB8D9"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 27,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "aSoft",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "4",
                            result: "b"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 39,
                            columnNumber: 43
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "b"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 98
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "SourceGraphic"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 120
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 39,
                            columnNumber: 89
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 39,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "220",
            cy: "220",
            r: "200",
            fill: "url(#aGlow)"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            cx: "220",
            cy: "220",
            rx: "160",
            ry: "160",
            fill: "none",
            stroke: "url(#aPortal)",
            strokeWidth: "2",
            opacity: "0.2"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            cx: "220",
            cy: "220",
            rx: "130",
            ry: "130",
            fill: "none",
            stroke: "url(#aPortal)",
            strokeWidth: "1.5",
            opacity: "0.15",
            strokeDasharray: "8 6"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            cx: "220",
            cy: "220",
            rx: "100",
            ry: "100",
            fill: "none",
            stroke: "rgba(152,245,255,0.12)",
            strokeWidth: "1",
            strokeDasharray: "4 8"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = [
            [
                "01",
                80,
                90
            ],
            [
                "10",
                350,
                100
            ],
            [
                "11",
                70,
                320
            ],
            [
                "00",
                360,
                310
            ],
            [
                "{}",
                140,
                60
            ],
            [
                ";",
                310,
                55
            ],
            [
                "=>",
                100,
                370
            ],
            [
                "fn",
                340,
                370
            ]
        ].map(_temp);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 440 440",
            className: "w-full h-full",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(155,130) scale(1.3)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "58",
                            rx: "42",
                            ry: "48",
                            fill: "#C5FAFF",
                            stroke: "#7BB8C4",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 167
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 28 Q5 5 30 18 Z",
                            fill: "#7BB8C4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 260
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M82 28 Q95 5 70 18 Z",
                            fill: "#7BB8C4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 307
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "35",
                            cy: "48",
                            r: "8",
                            fill: "#fff",
                            stroke: "#333",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 355
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "38",
                            cy: "50",
                            r: "3",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 429
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "65",
                            cy: "52",
                            r: "9",
                            fill: "#fff",
                            stroke: "#333",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 473
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "63",
                            cy: "54",
                            r: "3",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 547
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M28 38 Q35 33 42 36",
                            fill: "none",
                            stroke: "#5E9BA8",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 591
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "68",
                            rx: "6",
                            ry: "4.5",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 670
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M30 85 Q50 100 70 85",
                            stroke: "#111",
                            strokeWidth: "1.8",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 725
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M50 85 Q54 95 52 102 Q47 98 50 87 Z",
                            fill: "#FF69B4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 802
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "38",
                            cy: "62",
                            r: "2",
                            fill: "#5E9BA8",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 865
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "62",
                            cy: "67",
                            r: "1.5",
                            fill: "#5E9BA8",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 926
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "28",
                            cy: "72",
                            r: "1",
                            fill: "#5E9BA8",
                            opacity: "0.4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 61,
                            columnNumber: 989
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 61,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0)),
                [
                    0,
                    45,
                    90,
                    135,
                    180,
                    225,
                    270,
                    315
                ].map(_temp2),
                [
                    [
                        120,
                        140,
                        "#98F5FF"
                    ],
                    [
                        330,
                        150,
                        "#B8A9FF"
                    ],
                    [
                        100,
                        300,
                        "#FFB8D9"
                    ],
                    [
                        340,
                        290,
                        "#98F5FF"
                    ],
                    [
                        200,
                        60,
                        "#B8A9FF"
                    ],
                    [
                        260,
                        380,
                        "#FFB8D9"
                    ]
                ].map(_temp3)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
};
_c = OriginGraphic;
/* ---- Pack/Community Illustration ---- */ const PackGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                id: "pGlow",
                cx: "50%",
                cy: "50%",
                r: "50%",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "rgba(152,245,255,0.15)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 81,
                        columnNumber: 69
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 81,
                        columnNumber: 124
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 81,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "150",
            cy: "120",
            r: "110",
            fill: "url(#pGlow)"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 300 240",
            className: "w-full h-full",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(115,55) scale(0.7)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "55",
                            rx: "38",
                            ry: "42",
                            fill: "#C5FAFF",
                            stroke: "#7BB8C4",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 150
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "37",
                            cy: "48",
                            r: "5",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 241
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "39",
                            cy: "49",
                            r: "2",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 285
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "63",
                            cy: "50",
                            r: "6",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 329
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "61",
                            cy: "51",
                            r: "2",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 373
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "63",
                            rx: "4",
                            ry: "3",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 417
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M38 72 Q50 80 62 72",
                            stroke: "#111",
                            strokeWidth: "1",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 91,
                            columnNumber: 470
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 91,
                    columnNumber: 106
                }, ("TURBOPACK compile-time value", void 0)),
                [
                    [
                        55,
                        130,
                        0.45,
                        "#C4A882"
                    ],
                    [
                        240,
                        135,
                        0.4,
                        "#B8956A"
                    ],
                    [
                        105,
                        185,
                        0.35,
                        "#D4C4A8"
                    ],
                    [
                        195,
                        185,
                        0.35,
                        "#C09060"
                    ]
                ].map(_temp4),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "150",
                    y1: "100",
                    x2: "75",
                    y2: "140",
                    stroke: "rgba(152,245,255,0.15)",
                    strokeWidth: "1",
                    strokeDasharray: "3 3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 91,
                    columnNumber: 676
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "150",
                    y1: "100",
                    x2: "225",
                    y2: "140",
                    stroke: "rgba(152,245,255,0.15)",
                    strokeWidth: "1",
                    strokeDasharray: "3 3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 91,
                    columnNumber: 789
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "150",
                    y1: "100",
                    x2: "115",
                    y2: "190",
                    stroke: "rgba(184,169,255,0.1)",
                    strokeWidth: "1",
                    strokeDasharray: "3 3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 91,
                    columnNumber: 903
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "150",
                    y1: "100",
                    x2: "190",
                    y2: "190",
                    stroke: "rgba(184,169,255,0.1)",
                    strokeWidth: "1",
                    strokeDasharray: "3 3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 91,
                    columnNumber: 1016
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M148 30 C145 25 138 25 138 32 C138 38 148 44 148 44 C148 44 158 38 158 32 C158 25 151 25 148 30Z",
                    fill: "rgba(255,184,217,0.25)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 91,
                    columnNumber: 1129
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c1 = PackGraphic;
/* ---- Authenticity/Mirror Illustration ---- */ const AuthenticGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                id: "auGlow",
                cx: "50%",
                cy: "50%",
                r: "50%",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "rgba(184,169,255,0.15)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 112,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 112,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 112,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "150",
            cy: "120",
            r: "110",
            fill: "url(#auGlow)"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "90",
            y: "30",
            width: "120",
            height: "160",
            rx: "60",
            fill: "rgba(17,17,24,0.6)",
            stroke: "rgba(184,169,255,0.3)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
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
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            opacity: "0.3",
            transform: "translate(115,60) scale(0.55)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "50",
                    cy: "55",
                    rx: "40",
                    ry: "45",
                    fill: "#E8D5B0"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "37",
                    cy: "48",
                    r: "6",
                    fill: "#fff"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 127
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "37",
                    cy: "48",
                    r: "2.5",
                    fill: "#333"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 171
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "63",
                    cy: "48",
                    r: "6",
                    fill: "#fff"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "63",
                    cy: "48",
                    r: "2.5",
                    fill: "#333"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 261
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "50",
                    cy: "65",
                    rx: "4",
                    ry: "3",
                    fill: "#333"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 307
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M38 75 Q50 82 62 75",
                    stroke: "#333",
                    strokeWidth: "1.2",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 127,
                    columnNumber: 360
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "110",
            y1: "50",
            x2: "190",
            y2: "170",
            stroke: "rgba(184,169,255,0.4)",
            strokeWidth: "3",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "190",
            y1: "50",
            x2: "110",
            y2: "170",
            stroke: "rgba(184,169,255,0.4)",
            strokeWidth: "3",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
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
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 300 240",
            className: "w-full h-full",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t0,
                t1,
                t2,
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(40,140) scale(0.5)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "55",
                            rx: "38",
                            ry: "42",
                            fill: "#C5FAFF",
                            stroke: "#7BB8C4",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 166
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 28 Q5 5 30 18 Z",
                            fill: "#7BB8C4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 259
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M82 28 Q95 5 70 18 Z",
                            fill: "#7BB8C4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 306
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "35",
                            cy: "48",
                            r: "6",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 354
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "37",
                            cy: "50",
                            r: "2.5",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 398
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "65",
                            cy: "52",
                            r: "7",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 444
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "63",
                            cy: "54",
                            r: "2.5",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 488
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "68",
                            rx: "5",
                            ry: "4",
                            fill: "#111"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 534
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M33 82 Q50 94 67 82",
                            stroke: "#111",
                            strokeWidth: "1.5",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 587
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M50 82 Q54 92 52 98 Q47 95 50 84 Z",
                            fill: "#FF69B4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 140,
                            columnNumber: 663
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 140,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M50 140 L53 133 L56 140 L53 147 Z",
                    fill: "rgba(152,245,255,0.4)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 140,
                    columnNumber: 729
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M80 160 L82 155 L84 160 L82 165 Z",
                    fill: "rgba(184,169,255,0.3)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 140,
                    columnNumber: 804
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "150",
                    y: "220",
                    textAnchor: "middle",
                    fill: "rgba(184,169,255,0.4)",
                    fontSize: "10",
                    fontFamily: "Inter",
                    fontWeight: "600",
                    children: "BE AUTHENTIC"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 140,
                    columnNumber: 879
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
};
_c2 = AuthenticGraphic;
/* ---- Rocket/Growth Illustration ---- */ const GrowthGraphic = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
            id: "grGlow",
            cx: "50%",
            cy: "50%",
            r: "50%",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "0%",
                    stopColor: "rgba(255,184,217,0.15)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 159,
                    columnNumber: 64
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "100%",
                    stopColor: "transparent"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 159,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "grFlame",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#2ECBFF"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 174,
                            columnNumber: 77
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#B8A9FF"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 174,
                            columnNumber: 117
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 174,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "150",
            cy: "120",
            r: "110",
            fill: "url(#grGlow)"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M40 200 Q80 180 120 150 Q160 120 200 70",
            fill: "none",
            stroke: "rgba(152,245,255,0.2)",
            strokeWidth: "2",
            strokeDasharray: "6 4"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "80",
            cy: "180",
            r: "5",
            fill: "rgba(152,245,255,0.2)",
            stroke: "#98F5FF",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: "80",
            y: "183",
            textAnchor: "middle",
            fill: "#98F5FF",
            fontSize: "5",
            children: "1"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "150",
            r: "5",
            fill: "rgba(152,245,255,0.25)",
            stroke: "#98F5FF",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: "120",
            y: "153",
            textAnchor: "middle",
            fill: "#98F5FF",
            fontSize: "5",
            children: "2"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 180,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "160",
            cy: "120",
            r: "5",
            fill: "rgba(152,245,255,0.3)",
            stroke: "#98F5FF",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 181,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: "160",
            y: "123",
            textAnchor: "middle",
            fill: "#98F5FF",
            fontSize: "5",
            children: "3"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 300 240",
            className: "w-full h-full",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t1,
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(185,30) rotate(30) scale(0.7)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M25 10 C25 10 15 30 15 55 L35 55 C35 30 25 10 25 10 Z",
                            fill: "#98F5FF",
                            stroke: "#70D4E5",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 205,
                            columnNumber: 190
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "25",
                            cy: "35",
                            r: "6",
                            fill: "rgba(152,245,255,0.7)",
                            stroke: "#98F5FF",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 205,
                            columnNumber: 304
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 45 L8 58 L15 52 Z",
                            fill: "#B8A9FF"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 205,
                            columnNumber: 398
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M35 45 L42 58 L35 52 Z",
                            fill: "#B8A9FF"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 205,
                            columnNumber: 447
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 55 Q25 70 32 55 Z",
                            fill: "url(#grFlame)",
                            opacity: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 205,
                            columnNumber: 497
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "220",
                    cy: "50",
                    r: "2",
                    fill: "#98F5FF",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 570
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "240",
                    cy: "35",
                    r: "1.5",
                    fill: "#B8A9FF",
                    opacity: "0.5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 632
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "250",
                    cy: "60",
                    r: "2",
                    fill: "#FFB8D9",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 696
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "260",
                    cy: "45",
                    r: "18",
                    fill: "rgba(197,250,255,0.1)",
                    stroke: "rgba(255,255,255,0.1)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 758
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "255",
                    cy: "40",
                    r: "3",
                    fill: "rgba(255,255,255,0.03)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 868
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "265",
                    cy: "48",
                    r: "2",
                    fill: "rgba(255,255,255,0.02)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 931
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "150",
                    y: "225",
                    textAnchor: "middle",
                    fill: "rgba(255,184,217,0.4)",
                    fontSize: "10",
                    fontFamily: "Inter",
                    fontWeight: "600",
                    children: "ENJOY THE RIDE"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 205,
                    columnNumber: 994
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
};
_c3 = GrowthGraphic;
function AboutPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "195e729182aebd7f22cecb8224fa2e3bbc0b17b04efba6f5b09c1330548d84fb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$MeshBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "purple"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 lg:py-28 relative z-10 px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "The Legend of Ulyg Dog",
                    el: "h1",
                    className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 229,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "Authentic Meme Coin Revolution",
                    el: "div",
                    className: "text-xl md:text-2xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 229,
                    columnNumber: 234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 229,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            x: -40
        };
        t3 = {
            opacity: 1,
            x: 0
        };
        t4 = {
            once: true
        };
        t5 = {
            duration: 0.8
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            whileInView: t3,
            viewport: t4,
            transition: t5,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6",
                    style: {
                        color: "#98F5FF",
                        background: "rgba(152,245,255,0.1)",
                        border: "1px solid rgba(152,245,255,0.2)"
                    },
                    children: "ORIGIN STORY"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 265,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-6 gradient-text-gold",
                    children: "From a Glitch to a Galaxy"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 269,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed mb-4",
                    children: "Born in the deepest corners of the mempool, Ulyg Dog was not coded -- he was manifested. A happy accident of stray packets and forgotten code that resulted in something so perfectly imperfect, it could only be destined for the moon."
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 269,
                    columnNumber: 129
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed",
                    children: "While other coins chased trends with slick logos, Ulyg Dog embraced his flaws. His crooked smile, his mismatched ears, his complete disregard for conventional aesthetics -- these became his badges of honor."
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 269,
                    columnNumber: 415
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 265,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            scale: 0.85
        };
        t8 = {
            opacity: 1,
            scale: 1
        };
        t9 = {
            once: true
        };
        t10 = {
            duration: 1,
            delay: 0.2
        };
        $[8] = t10;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "grid md:grid-cols-2 gap-12 items-center mb-28",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex justify-center",
                    initial: t7,
                    whileInView: t8,
                    viewport: t9,
                    transition: t10,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-sm",
                        animate: {
                            rotate: [
                                0,
                                2,
                                -2,
                                0
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OriginGraphic, {}, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 312,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 306,
                        columnNumber: 196
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 306,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "The Ulyg Dogma",
                    el: "h2",
                    className: "text-3xl md:text-5xl font-bold tracking-tighter gradient-text-gold"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 319,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mt-4 max-w-xl mx-auto",
                    children: "Three pillars that define the ULGD movement"
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 319,
                    columnNumber: 171
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            opacity: 0,
            x: -30
        };
        t14 = {
            opacity: 1,
            x: 0
        };
        t15 = {
            once: true
        };
        t16 = {
            duration: 0.7
        };
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
    } else {
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "order-2 md:order-1",
            initial: t13,
            whileInView: t14,
            viewport: t15,
            transition: t16,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full max-w-xs mx-auto",
                animate: {
                    y: [
                        0,
                        -8,
                        0
                    ]
                },
                transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackGraphic, {}, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 361,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 355,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    let t19;
    let t20;
    let t21;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            opacity: 0,
            x: 30
        };
        t19 = {
            opacity: 1,
            x: 0
        };
        t20 = {
            once: true
        };
        t21 = {
            duration: 0.7
        };
        $[19] = t18;
        $[20] = t19;
        $[21] = t20;
        $[22] = t21;
    } else {
        t18 = $[19];
        t19 = $[20];
        t20 = $[21];
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#98F5FF",
                background: "rgba(152,245,255,0.1)",
                border: "1px solid rgba(152,245,255,0.2)"
            },
            children: "PILLAR 01"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "order-1 md:order-2",
                    initial: t18,
                    whileInView: t19,
                    viewport: t20,
                    transition: t21,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-premium rounded-2xl p-8",
                        children: [
                            t22,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                style: {
                                    color: "#98F5FF"
                                },
                                children: "A Pack, Not an Army"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                lineNumber: 408,
                                columnNumber: 244
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 leading-relaxed",
                                children: "We are a wonderfully weird, fiercely loyal pack of strays, artists, and degens who believe in the unifying power of the meme. Strength in numbers, character in imperfection."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                lineNumber: 410,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 408,
                        columnNumber: 193
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 408,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    let t25;
    let t26;
    let t27;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            opacity: 0,
            x: -30
        };
        t25 = {
            opacity: 1,
            x: 0
        };
        t26 = {
            once: true
        };
        t27 = {
            duration: 0.7
        };
        $[25] = t24;
        $[26] = t25;
        $[27] = t26;
        $[28] = t27;
    } else {
        t24 = $[25];
        t25 = $[26];
        t26 = $[27];
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#B8A9FF",
                background: "rgba(184,169,255,0.1)",
                border: "1px solid rgba(184,169,255,0.2)"
            },
            children: "PILLAR 02"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t24,
            whileInView: t25,
            viewport: t26,
            transition: t27,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-premium rounded-2xl p-8",
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        style: {
                            color: "#B8A9FF"
                        },
                        children: "Ugly is Authentic"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 457,
                        columnNumber: 138
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 leading-relaxed",
                        children: "Perfection is boring and often fake. We celebrate the glitches, the quirks, and the happy accidents. No filters, no pretense. Ugliness is a mark of character."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 459,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 457,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 457,
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
            x: 30
        };
        t31 = {
            opacity: 1,
            x: 0
        };
        t32 = {
            once: true
        };
        t33 = {
            duration: 0.7
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
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex justify-center",
                    initial: t30,
                    whileInView: t31,
                    viewport: t32,
                    transition: t33,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-xs",
                        animate: {
                            y: [
                                0,
                                -8,
                                0
                            ]
                        },
                        transition: {
                            duration: 5.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthenticGraphic, {}, void 0, false, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 502,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                        lineNumber: 495,
                        columnNumber: 194
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 495,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        $[35] = t34;
    } else {
        t34 = $[35];
    }
    let t35;
    let t36;
    let t37;
    let t38;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            opacity: 0,
            x: -30
        };
        t36 = {
            opacity: 1,
            x: 0
        };
        t37 = {
            once: true
        };
        t38 = {
            duration: 0.7
        };
        $[36] = t35;
        $[37] = t36;
        $[38] = t37;
        $[39] = t38;
    } else {
        t35 = $[36];
        t36 = $[37];
        t37 = $[38];
        t38 = $[39];
    }
    let t39;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "order-2 md:order-1",
            initial: t35,
            whileInView: t36,
            viewport: t37,
            transition: t38,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full max-w-xs mx-auto",
                animate: {
                    y: [
                        0,
                        -8,
                        0
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthGraphic, {}, void 0, false, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 545,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 538,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 538,
            columnNumber: 11
        }, this);
        $[40] = t39;
    } else {
        t39 = $[40];
    }
    let t40;
    let t41;
    let t42;
    let t43;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = {
            opacity: 0,
            x: 30
        };
        t41 = {
            opacity: 1,
            x: 0
        };
        t42 = {
            once: true
        };
        t43 = {
            duration: 0.7
        };
        $[41] = t40;
        $[42] = t41;
        $[43] = t42;
        $[44] = t43;
    } else {
        t40 = $[41];
        t41 = $[42];
        t42 = $[43];
        t43 = $[44];
    }
    let t44;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
            style: {
                color: "#FFB8D9",
                background: "rgba(255,184,217,0.1)",
                border: "1px solid rgba(255,184,217,0.2)"
            },
            children: "PILLAR 03"
        }, void 0, false, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, this);
        $[45] = t44;
    } else {
        t44 = $[45];
    }
    let t45;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black text-white min-h-screen relative overflow-hidden",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 lg:px-8 pb-20 max-w-6xl relative z-10",
                    children: [
                        t11,
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-20",
                            children: [
                                t23,
                                t34,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$src$2f$components$2f$AnimatedOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "grid md:grid-cols-2 gap-12 items-center",
                                    children: [
                                        t39,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "order-1 md:order-2",
                                            initial: t40,
                                            whileInView: t41,
                                            viewport: t42,
                                            transition: t43,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-premium rounded-2xl p-8",
                                                children: [
                                                    t44,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold mb-4",
                                                        style: {
                                                            color: "#FFB8D9"
                                                        },
                                                        children: "Enjoy the Ride"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 453
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 leading-relaxed",
                                                        children: "We are aiming for the stars, but we are not in a frantic rush. Building a real community and a token with lasting value, one ugly step at a time."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 402
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 295
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                                    lineNumber: 592,
                                    columnNumber: 220
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                            lineNumber: 592,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                    lineNumber: 592,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[46] = t45;
    } else {
        t45 = $[46];
    }
    return t45;
}
_c4 = AboutPage;
function _temp(t0, i) {
    const [txt, x, y] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
        x: Number(x),
        y: Number(y),
        fill: `rgba(${i % 2 === 0 ? "152,245,255" : "184,169,255"},${0.15 + i * 0.02})`,
        fontSize: "10",
        fontFamily: "monospace",
        children: String(txt)
    }, i, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
        lineNumber: 603,
        columnNumber: 10
    }, this);
}
function _temp2(angle, i_0) {
    const rad = angle * Math.PI / 180;
    const x1 = 220 + 80 * Math.cos(rad);
    const y1 = 220 + 80 * Math.sin(rad);
    const x2 = 220 + 110 * Math.cos(rad);
    const y2 = 220 + 110 * Math.sin(rad);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: i_0 % 2 === 0 ? "rgba(152,245,255,0.2)" : "rgba(184,169,255,0.15)",
        strokeWidth: "2",
        strokeLinecap: "round"
    }, i_0, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
        lineNumber: 611,
        columnNumber: 10
    }, this);
}
function _temp3(t0, i_1) {
    const [x_0, y_0, c] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
        cx: Number(x_0),
        cy: Number(y_0),
        r: 2 + i_1 % 3,
        fill: String(c),
        opacity: 0.2 + i_1 * 0.03
    }, `sp${i_1}`, false, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
        lineNumber: 615,
        columnNumber: 10
    }, this);
}
function _temp4(t0, i) {
    const [x, y, s, c] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${Number(x) - 18 * Number(s)},${Number(y) - 20 * Number(s)}) scale(${s})`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "50",
                cy: "55",
                rx: "35",
                ry: "40",
                fill: String(c),
                stroke: "#5E9BA8",
                strokeWidth: "1",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 619,
                columnNumber: 118
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "38",
                cy: "48",
                r: "4",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 619,
                columnNumber: 225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "39",
                cy: "49",
                r: "1.5",
                fill: "#111"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 619,
                columnNumber: 269
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "62",
                cy: "50",
                r: "5",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 619,
                columnNumber: 315
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "61",
                cy: "51",
                r: "1.5",
                fill: "#111"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 619,
                columnNumber: 359
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$meme$2d$coin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "50",
                cy: "62",
                rx: "3",
                ry: "2.5",
                fill: "#111"
            }, void 0, false, {
                fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
                lineNumber: 619,
                columnNumber: 405
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/Desktop/meme-coin-website/src/app/about/page.tsx",
        lineNumber: 619,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "OriginGraphic");
__turbopack_context__.k.register(_c1, "PackGraphic");
__turbopack_context__.k.register(_c2, "AuthenticGraphic");
__turbopack_context__.k.register(_c3, "GrowthGraphic");
__turbopack_context__.k.register(_c4, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_meme-coin-website_src_b002e65c._.js.map