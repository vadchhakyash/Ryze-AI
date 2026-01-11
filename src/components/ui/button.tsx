import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-lg",
                outline:
                    "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost:
                    "hover:bg-accent/10 hover:text-accent",
                link:
                    "text-primary underline-offset-4 hover:underline",
                // Ryze brand variants
                ryze:
                    "bg-gradient-to-r from-ryze-orange to-ryze-orange-light text-white shadow-glow hover:shadow-[0_0_50px_hsl(24_95%_53%/0.4)] active:scale-[0.98] font-bold",
                "ryze-outline":
                    "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white",
                "ryze-dark":
                    "bg-primary text-primary-foreground hover:bg-primary/80 border border-white/10",
                hero:
                    "bg-gradient-to-r from-ryze-orange to-ryze-orange-light text-white shadow-glow hover:shadow-[0_0_60px_hsl(24_95%_53%/0.5)] active:scale-[0.98] font-bold text-base",
                "hero-secondary":
                    "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 font-medium",
            },
            size: {
                default: "h-11 px-5 py-2",
                sm: "h-9 rounded-md px-4 text-xs",
                lg: "h-12 rounded-lg px-8 text-base",
                xl: "h-14 rounded-xl px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
