import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const updateScrollProgress = () => {
        const mainContentWrapper = document.getElementById("main-content-wrapper");
        if (mainContentWrapper) {
            const scrollPx = mainContentWrapper.scrollTop;
            const contentHeight = mainContentWrapper.scrollHeight - mainContentWrapper.clientHeight;
            const scrolled = (scrollPx / contentHeight) * 100;
            setScrollProgress(scrolled);
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            updateScrollProgress();
        };
        const mainContentWrapper = document.getElementById("main-content-wrapper");
        if (mainContentWrapper) {
            mainContentWrapper.addEventListener("scroll", handleScroll);
            return () => {
                mainContentWrapper.removeEventListener("scroll", handleScroll);
                setScrollProgress(0);
                mainContentWrapper.scrollTo(0, 0);
            };
        }
    }, [location.pathname]); // Reset scrollProgress when the route changes
    const topbarSec = document.querySelector(".topbar-sec");
    if (topbarSec) {
        const topbarSecHeight = topbarSec.offsetHeight;
    }
    else {
    }
    const progressBarStyle = {
        position: "absolute",
        top: topbarSec?.offsetHeight,
        left: 0,
        width: `${scrollProgress}%`,
        height: "6px",
        backgroundColor: "#892fc0",
        zIndex: 1 * 999999999999,
        borderTopRightRadius: scrollProgress === 100 ? 0 : 50,
        borderBottomRightRadius: scrollProgress === 100 ? 0 : 50,
        opacity: scrollProgress / 30,
        transition: "all .05s ease-in-out",
    };
    return _jsx("div", { className: "progressBar", style: progressBarStyle });
};
export default ScrollProgressBar;
