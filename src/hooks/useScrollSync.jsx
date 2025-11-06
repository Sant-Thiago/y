import { useRef, useState } from "react";

export default function useScrollSync(navRef, sectionRefs, deps = []) {
    const originalTopRef = useRef(0);
    const isFixedRef = useRef(false);
    const [isFixed, setIsFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const updateOriginalTop = () => nav.getBoundingClientRect().top + window.scrollY;
        originalTopRef.current = updateOriginalTop();
        setNavHeight(nav.offsetHeight);

        const handleScroll = () => {
        const scrollY = window.scrollY;
        const shouldFix = scrollY >= originalTopRef.current;

        if (shouldFix !== isFixedRef.current) {
            isFixedRef.current = shouldFix;
            setIsFixed(shouldFix);
        }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => (originalTopRef.current = updateOriginalTop()));

        return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", () => (originalTopRef.current = updateOriginalTop()));
        };
    }, deps);

    return { isFixed, navHeight };
}