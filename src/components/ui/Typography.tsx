import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { Means } from '@/lib/fonts';
const typographyVariants = cva('text-foreground', {
    variants: {
        variant: {
            h1: 'text-[44px] leading-[48px] font-regular ' + Means.className,
            h1_small: 'text-[24px] leading-[34px] font-regular ' + Means.className,
            h2: 'text-[36px] leading-[45px]',
            h3: 'text-[28px] leading-[35px]',
            h4: 'text-[20px] leading-[25px]',
            p_large: 'text-[18px] leading-[24px]',
            p: 'text-[16px] leading-[24px]',
            p_small: 'text-[14px] leading-[24px]',
            p_bold: 'text-[16px] leading-[24px] font-medium',
            button: 'text-[14px] leading-[24px] font-medium',
            meta: 'text-[14px] leading-[24px] font-medium',
        },
    },
    defaultVariants: {
        variant: "p",
    },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
    NonNullable<VariantPropType['variant']>,
    string
> = {
    h1: 'h1',
    h1_small: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    p_large: 'p',
    p_bold: 'p',
    p_small: 'p',
    button: 'button',
    meta: 'div',
};

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
    asChild?: boolean;
    as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant, as, asChild, ...props }, ref) => {
        const Comp = asChild
            ? Slot
            : as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div';
        return (
            <Comp
                className={cn(typographyVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Typography.displayName = 'Typography';

export default Typography;