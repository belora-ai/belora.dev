"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SITE_CONFIG } from "@/lib/constants/site";
import PrismaticBurst from './effects/PrismaticBurst';
import RollingText from "./effects/RollingText";
import { Container } from "./layout/Container";

export function Hero() {
    return (
        <Container noGutter className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6">
            <div className="absolute w-full h-full">
                <PrismaticBurst
                    animationType="rotate3d"
                    intensity={3}
                    speed={0.3}
                    distort={0}
                    paused={false}
                    offset={{ x: -20, y: 0 }}
                    mixBlendMode="soft-light"
                    colors={['#ffe0c2', '#393028', '#e54d2e']}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mb-4"
                >
                    <Image
                        src="/logo_full_text_white.svg"
                        alt={SITE_CONFIG.name}
                        width={250}
                        height={62.5}
                        priority
                        className="relative z-10"
                        style={{ filter: "drop-shadow(0 0 10px color-mix(in srgb, var(--primary), transparent 60%))" }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-10 max-w-lg font-mono text-xs md:text-sm lg:text-lg tracking-tight text-muted-foreground"
                >
                    {SITE_CONFIG.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative"
                >
                    <RollingText
                        text={SITE_CONFIG.status}
                        className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-primary select-none"
                    />
                </motion.div>
            </motion.div>
        </Container>
    );
}
