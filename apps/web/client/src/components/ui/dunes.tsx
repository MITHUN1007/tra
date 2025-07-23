'use client';

import { motion } from 'framer-motion';

export function Dunes() {
    return (
        <div className="hidden w-full lg:block md:block m-6 relative overflow-hidden">
            {/* Light mode gradient */}
            <motion.div 
                className="w-full h-full rounded-xl bg-gradient-to-br from-background-brand/20 via-background-secondary to-background-tertiary flex dark:hidden relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Floating geometric shapes */}
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-24 h-24 bg-background-brand/30 rounded-full blur-xl"
                    animate={{ 
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-foreground-brand/20 rounded-full blur-2xl"
                    animate={{ 
                        x: [0, 15, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 right-1/4 w-16 h-16 bg-background-positive/40 rounded-lg blur-lg"
                    animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
            
            {/* Dark mode gradient */}
            <motion.div 
                className="w-full h-full rounded-xl bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary hidden dark:flex relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Floating geometric shapes for dark mode */}
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-24 h-24 bg-background-brand/40 rounded-full blur-xl"
                    animate={{ 
                        y: [0, -20, 0],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-foreground-brand/30 rounded-full blur-2xl"
                    animate={{ 
                        x: [0, 15, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 right-1/4 w-16 h-16 bg-background-positive/50 rounded-lg blur-lg"
                    animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
}
