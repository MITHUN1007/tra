import { Create } from './create';
import { Preview } from './preview';

export function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
                <div className="order-2 lg:order-1">
                    <Preview />
                </div>
                <div className="order-1 lg:order-2">
                    <Create />
                </div>
            </div>
        </div>
    );
}
