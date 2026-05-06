"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

export default function ScrollReveal({
    children,
    width = "fit-content",
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = (): { hidden: Variant; visible: Variant } => {
        const distance = 50;
        let initial = {};

        switch (direction) {
            case "up":
                initial = { y: distance };
                break;
            case "down":
                initial = { y: -distance };
                break;
            case "left":
                initial = { x: distance };
                break;
            case "right":
                initial = { x: -distance };
                break;
        }

        return {
            hidden: { opacity: 0, ...initial },
            visible: { opacity: 1, x: 0, y: 0 },
        };
    };

    return (
        <div ref={ref} style={{ width }} className={cn("relative overflow-hidden", className)}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
