"use client";

import { useEffect, useRef, useState } from "react";

function getInitialPointerFine() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
}

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isFinePointer, setIsFinePointer] = useState(getInitialPointerFine);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: fine)");
        const handleChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (!isFinePointer) return;

        const mouse = { x: 0, y: 0 };
        const cursor = { x: 0, y: 0 };
        const speed = 0.12;
        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const animateCursor = () => {
            cursor.x += (mouse.x - cursor.x) * speed;
            cursor.y += (mouse.y - cursor.y) * speed;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
            }
            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${cursor.x - 16}px, ${cursor.y - 16}px, 0)`;
            }
            requestAnimationFrame(animateCursor);
        };

        const animationFrameId = requestAnimationFrame(animateCursor);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible, isFinePointer]);

    if (!isFinePointer || !isVisible) return null;

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-9999 mix-blend-difference will-change-transform"
                style={{
                    transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
                    width: isHovered ? "32px" : "8px",
                    height: isHovered ? "32px" : "8px",
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "white",
                }}
            />

            <div
                ref={outlineRef}
                className="fixed top-0 left-0 size-8 border border-white rounded-full pointer-events-none z-9999 mix-blend-difference will-change-transform"
                style={{
                    transition: "opacity 0.3s ease",
                    opacity: isHovered ? "0" : "1",
                }}
            />
        </>
    );
}