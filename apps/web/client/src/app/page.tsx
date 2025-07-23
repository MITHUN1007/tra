import { Hero } from './_components/hero';
import { TopBar } from './_components/top-bar';

export default function Main() {
    return (
        <div className="min-h-screen bg-background relative">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full h-16 bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
                <TopBar />
            </div>
            
            {/* Hero Section */}
            <div className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-background-brand/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-foreground-brand/10 rounded-full blur-3xl"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 w-full">
                    <Hero />
                </div>
            </div>
        </div>
    );
}
