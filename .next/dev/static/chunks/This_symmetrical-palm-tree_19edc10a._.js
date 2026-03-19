(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/This/symmetrical-palm-tree/components/smooth-scroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScroll",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$15_$40$nuxt$2b$kit$40$4$2e$4$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/lenis@1.3.15_@nuxt+kit@4.4.2_react@19.2.0/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/gsap@3.14.1/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/gsap@3.14.1/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function SmoothScroll({ children }) {
    _s();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$15_$40$nuxt$2b$kit$40$4$2e$4$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                orientation: "vertical",
                smoothWheel: true
            });
            lenisRef.current = lenis;
            // Connect Lenis to GSAP ScrollTrigger
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add({
                "SmoothScroll.useEffect": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["SmoothScroll.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                    __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(lenis.raf);
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(SmoothScroll, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/This/symmetrical-palm-tree/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "getRoleDisplayName",
    ()=>getRoleDisplayName,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check for existing session
            const storedUser = localStorage.getItem("buildsync_user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const signIn = async (email, password)=>{
        // Demo authentication - in production, this would call an API
        const storedUsers = JSON.parse(localStorage.getItem("buildsync_users") || "[]");
        const foundUser = storedUsers.find((u)=>u.email === email && u.password === password);
        if (foundUser) {
            const { password: _, ...userWithoutPassword } = foundUser;
            setUser(userWithoutPassword);
            localStorage.setItem("buildsync_user", JSON.stringify(userWithoutPassword));
            return {
                success: true
            };
        }
        return {
            success: false,
            error: "Invalid email or password"
        };
    };
    const signUp = async (data)=>{
        const storedUsers = JSON.parse(localStorage.getItem("buildsync_users") || "[]");
        // Check if user already exists
        if (storedUsers.some((u)=>u.email === data.email)) {
            return {
                success: false,
                error: "An account with this email already exists"
            };
        }
        const newUser = {
            id: crypto.randomUUID(),
            email: data.email,
            password: data.password,
            name: data.name,
            role: data.role,
            company: data.company
        };
        storedUsers.push(newUser);
        localStorage.setItem("buildsync_users", JSON.stringify(storedUsers));
        const { password: _, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem("buildsync_user", JSON.stringify(userWithoutPassword));
        return {
            success: true
        };
    };
    const signOut = ()=>{
        setUser(null);
        localStorage.removeItem("buildsync_user");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            signIn,
            signUp,
            signOut
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/This/symmetrical-palm-tree/lib/auth-context.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function getRoleDisplayName(role) {
    const names = {
        facility_manager: "Facility Manager",
        building_owner: "Building Owner",
        property_manager: "Property Manager",
        resident: "Resident",
        tenant: "Tenant"
    };
    return names[role];
}
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/This/symmetrical-palm-tree/lib/theme-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/This/symmetrical-palm-tree/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// Provide default values so context works even before provider mounts
const defaultContext = {
    theme: "dark",
    toggleTheme: ()=>{},
    setTheme: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultContext);
function ThemeProvider({ children }) {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            // Check localStorage first, then system preference
            const stored = localStorage.getItem("theme");
            if (stored) {
                setThemeState(stored);
                document.documentElement.classList.toggle("dark", stored === "dark");
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const initialTheme = prefersDark ? "dark" : "light";
                setThemeState(initialTheme);
                document.documentElement.classList.toggle("dark", prefersDark);
            }
        }
    }["ThemeProvider.useEffect"], []);
    const setTheme = (newTheme)=>{
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/This/symmetrical-palm-tree/lib/theme-context.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "NFMsp+nHMpEO8VRJ4qOPo+gS3EQ=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$This$2f$symmetrical$2d$palm$2d$tree$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=This_symmetrical-palm-tree_19edc10a._.js.map