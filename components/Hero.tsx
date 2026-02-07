"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SITE_CONFIG } from "@/lib/constants/site";
import PrismaticBurst from './PrismaticBurst';
import RollingText from "./RollingText";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
            <div className="absolute w-full h-full">
                <PrismaticBurst
                    animationType="rotate3d"
                    intensity={3}
                    speed={0.3}
                    distort={0}
                    paused={false}
                    offset={{ x: -20, y: 0 }}
                    mixBlendMode="soft-light"
                    colors={['#8c5cff', '#1e293b', '#79c0ff']}
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
                    className="relative mb-8"
                >
                    <Image
                        src="/logo_full_text_white.svg"
                        alt={SITE_CONFIG.name}
                        width={280}
                        height={70}
                        priority
                        className="relative z-10"
                        style={{ filter: "drop-shadow(0 0 10px color-mix(in srgb, var(--primary), transparent 60%))" }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-12 max-w-lg font-mono text-lg tracking-tight text-muted-foreground"
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
                        className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-porcelain)]"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
