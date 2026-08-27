import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-ink)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[color:var(--color-accent)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-accent-strong)]",
        ghost: "border border-[color:var(--color-hairline)] text-[color:var(--color-text-on-dark)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]",
        outline: "border border-[color:var(--color-steel-line)] text-[color:var(--color-text-on-light)] hover:border-[color:var(--color-accent)]",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-14 px-7 text-base",
        sm: "h-9 px-3.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
