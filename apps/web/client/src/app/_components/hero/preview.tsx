'use client';

import { Icons } from '@onlook/ui/icons';
import { cn } from '@onlook/ui/utils';
import { motion } from 'framer-motion';

export function Preview() {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <div className="relative w-[500px] h-[350px]">
                {/* Browser Frame */}
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-background-secondary border-b border-border">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-background rounded px-2 py-1 text-micro text-foreground-secondary">
                                localhost:3000
                            </div>
                        </div>
                        <div className="w-12"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6 space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                            <motion.div 
                                className="w-20 h-3 bg-foreground-brand rounded"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            />
                            <motion.div 
                                className="w-32 h-6 bg-foreground rounded"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            />
                        </div>
                        
                        {/* Content Blocks */}
                        <div className="space-y-3">
                            <motion.div 
                                className="flex gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="w-16 h-16 bg-background-brand rounded"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="w-24 h-3 bg-foreground-secondary rounded"></div>
                                    <div className="w-full h-2 bg-foreground-tertiary rounded"></div>
                                    <div className="w-3/4 h-2 bg-foreground-tertiary rounded"></div>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="w-16 h-16 bg-background-positive rounded"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="w-20 h-3 bg-foreground-secondary rounded"></div>
                                    <div className="w-full h-2 bg-foreground-tertiary rounded"></div>
                                    <div className="w-2/3 h-2 bg-foreground-tertiary rounded"></div>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Bottom Button */}
                        <motion.div 
                            className="pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                        >
                            <div className="w-24 h-8 bg-foreground-brand rounded flex items-center justify-center">
                                <div className="w-4 h-2 bg-background rounded"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Code Editor Overlay */}
                <motion.div 
                    className={cn(
                        "absolute top-4 right-4 w-48 h-32 bg-background-secondary border border-border rounded shadow-lg",
                        "opacity-90"
                    )}
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 0.9, scale: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="p-3 space-y-2">
                        <div className="flex items-center gap-2">
                            <Icons.Code className="w-3 h-3 text-foreground-brand" />
                            <div className="text-micro text-foreground-secondary">Component.tsx</div>
                        </div>
                        <div className="space-y-1 text-micro font-mono">
                            <div className="text-purple-400">{'<div'}</div>
                            <div className="pl-2 text-blue-400">className="flex"</div>
                            <div className="text-purple-400">{'>'}</div>
                            <div className="pl-2 text-foreground">Hello World</div>
                            <div className="text-purple-400">{'</div>'}</div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                    className="absolute -top-2 -left-2 w-4 h-4 bg-foreground-brand rounded-full"
                    animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div 
                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-background-positive rounded"
                    animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
}
