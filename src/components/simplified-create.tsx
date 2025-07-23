
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Textarea } from './ui/textarea';
import { Icons } from './icons';
import { cn } from './lib/utils';

export function Create() {
    const [inputValue, setInputValue] = useState('');
    const [isComposing, setIsComposing] = useState(false);
    const isInputInvalid = !inputValue || inputValue.trim().length < 10;

    const handleSubmit = async () => {
        if (isInputInvalid) {
            console.warn('Input is too short');
            return;
        }
        console.log('Creating project with:', inputValue);
        // Simplified implementation
    };

    const handleBlankSubmit = async () => {
        console.log('Creating blank project');
        // Simplified implementation
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col gap-4 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-normal leading-tight">
                    Code makes your designs real
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                    Onlook is an AI-powered visual editor for code that helps you prototype, design,
                    and ideate directly in your live application.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <Card className="w-full backdrop-blur-md bg-card/30 overflow-hidden gap-4 border-border/50">
                    <CardHeader className="text-start pb-2">
                        <h3 className="text-lg font-medium">{`Let's design a...`}</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3 rounded p-4 bg-muted/50">
                            <Textarea
                                className="min-h-[60px] border-0 shadow-none bg-transparent resize-none"
                                placeholder="Describe what you want to create..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onCompositionStart={() => setIsComposing(true)}
                                onCompositionEnd={() => setIsComposing(false)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
                                        e.preventDefault();
                                        handleSubmit();
                                    }
                                }}
                            />
                            <div className="flex flex-row w-full justify-between pt-0 pb-2">
                                <div className="flex flex-row justify-start gap-1.5">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-9 h-9"
                                    >
                                        <Icons.Image className="w-5 h-5" />
                                    </Button>
                                </div>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className={cn(
                                        'w-fit h-full py-2 px-2',
                                        isInputInvalid ? 'opacity-50' : 'bg-primary text-primary-foreground hover:bg-primary/90'
                                    )}
                                    disabled={isInputInvalid}
                                    onClick={handleSubmit}
                                >
                                    <Icons.ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Button
                    variant="outline"
                    className="w-fit mx-auto"
                    onClick={handleBlankSubmit}
                >
                    <Icons.File className="w-4 h-4 mr-2" /> Start with blank project
                </Button>
            </div>
        </div>
    );
}
