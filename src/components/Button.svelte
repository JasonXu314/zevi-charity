<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils';

	const buttonVariants = cva(
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0, cursor-pointer',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-gold',
					destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
					outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary underline-offset-4 hover:underline',
					hero: 'bg-gradient-to-r from-gold to-gold-dark text-primary-foreground font-semibold shadow-gold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
					heroOutline: 'border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-primary-foreground font-semibold',
					navy: 'bg-navy text-secondary-foreground hover:bg-navy-light shadow-soft'
				},
				size: {
					default: 'h-10 px-4 py-2',
					sm: 'h-9 rounded-md px-3',
					lg: 'h-12 rounded-md px-8 text-base',
					xl: 'h-14 rounded-lg px-10 text-lg',
					icon: 'h-10 w-10'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

	const { variant, size, class: className, children, ...rest }: ButtonProps = $props();
</script>

<button class={cn(buttonVariants({ variant, size, className }))} {...rest}>
	{@render children?.()}
</button>
