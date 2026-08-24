"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_BLUE = { r: 79, g: 82, b: 255 };

function isCloseToCursorBlue(color: string) {
    const match = color.match(/rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)(?:\D+([\d.]+))?/i);
    if (!match || (match[4] !== undefined && Number(match[4]) === 0)) return false;

    const [, red, green, blue] = match;
    const distance = Math.hypot(
        Number(red) - CURSOR_BLUE.r,
        Number(green) - CURSOR_BLUE.g,
        Number(blue) - CURSOR_BLUE.b,
    );

    return distance < 85;
}

function isPointerOnBlue(x: number, y: number) {
    let element = document.elementFromPoint(x, y) as HTMLElement | null;

    while (element) {
        const styles = window.getComputedStyle(element);
        const backgroundColors = [
            styles.backgroundColor,
            ...(styles.backgroundImage.match(/rgba?\([^)]*\)/gi) ?? []),
        ];

        if (backgroundColors.some(isCloseToCursorBlue)) return true;

        const backgroundColor = styles.backgroundColor;
        const alpha = backgroundColor.match(/rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/i);
        const isOpaqueBackground = backgroundColor !== "transparent" && (!alpha || Number(alpha[1]) > 0.35);
        if (isOpaqueBackground) return false;

        element = element.parentElement;
    }

    return false;
}

function getInitialPointerFine() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
}

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    const isOnBlueRef = useRef(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOnBlue, setIsOnBlue] = useState(false);
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
            const nextIsOnBlue = isPointerOnBlue(e.clientX, e.clientY);
            if (nextIsOnBlue !== isOnBlueRef.current) {
                isOnBlueRef.current = nextIsOnBlue;
                setIsOnBlue(nextIsOnBlue);
            }
            if (!isVisible) setIsVisible(true);
        };

        const animateCursor = () => {
            cursor.x += (mouse.x - cursor.x) * speed;
            cursor.y += (mouse.y - cursor.y) * speed;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
            }
            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0)`;
            }
            requestAnimationFrame(animateCursor);
        };

        const animationFrameId = requestAnimationFrame(animateCursor);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest(
                    'a, button, [role="button"], [data-cursor="link"], .cursor-pointer'
                )
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
                className="fixed top-0 left-0 rounded-full pointer-events-none z-9999 will-change-transform"
                style={{
                    transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
                    translate: "-50% -50%",
                    width: isHovered ? "48px" : "8px",
                    height: isHovered ? "48px" : "8px",
                    backgroundColor: isOnBlue
                        ? (isHovered ? "rgba(255, 45, 141, 0.5)" : "#ff2d8d")
                        : (isHovered ? "rgba(79, 82, 255, 0.35)" : "#4f52ff"),
                    boxShadow: isOnBlue ? "0 0 14px rgba(255, 45, 141, 0.45)" : "none",
                }}
            />

            <div
                ref={outlineRef}
                className="fixed top-0 left-0 size-10 rounded-full pointer-events-none z-9999 will-change-transform"
                style={{
                    border: `1px solid ${isOnBlue ? "#ff2d8d" : "#4f52ff"}`,
                    translate: "-50% -50%",
                    transition: "opacity 0.3s ease, border-color 0.3s ease",
                    opacity: isHovered ? "0" : "1",
                }}
            />
        </>
    );
}
