<script lang="ts">
	import { Star } from '@lucide/svelte';

	const { name, dedication, tier }: { name: string; dedication?: string; tier: 'gold' | 'silver' | 'bronze' } = $props();

	const tierStyles = {
		gold: 'border-gold/40 from-[hsl(40,50%,96%)] to-[hsl(38,40%,88%)]',
		silver: 'border-muted-foreground/30 from-[hsl(0,0%,96%)] to-[hsl(0,0%,90%)]',
		bronze: 'border-[hsl(25,40%,50%)]/30 from-[hsl(30,30%,95%)] to-[hsl(25,25%,88%)]'
	};

	const accentStyles = {
		gold: 'text-gold',
		silver: 'text-muted-foreground',
		bronze: 'text-[hsl(25,40%,45%)]'
	};
</script>

<div
	class="relative p-8 md:p-10 rounded-xl border-2 bg-gradient-to-br {tierStyles[
		tier
	]} shadow-plaque transition-all duration-500 hover:shadow-lg hover:scale-[1.02] animate-scale-in"
>
	<div class="absolute top-3 left-3 {accentStyles[tier]}">
		<Star class="w-4 h-4 fill-current" />
	</div>
	<div class="absolute top-3 right-3 {accentStyles[tier]}">
		<Star class="w-4 h-4 fill-current" />
	</div>
	<div class="absolute bottom-3 left-3 {accentStyles[tier]}">
		<Star class="w-4 h-4 fill-current" />
	</div>
	<div class="absolute bottom-3 right-3 {accentStyles[tier]}">
		<Star class="w-4 h-4 fill-current" />
	</div>

	<div class="text-center space-y-3">
		<p class="text-sm font-medium uppercase tracking-widest {accentStyles[tier]}">In Honor Of</p>
		<h3 class="font-serif text-2xl md:text-3xl font-semibold text-foreground">
			{name}
		</h3>
		{#if dedication !== ''}
			<p class="text-muted-foreground text-sm italic max-w-xs mx-auto">
				{dedication}
			</p>
		{/if}
		<div class="w-16 h-0.5 mx-auto {tier === 'gold' ? 'bg-gold' : tier === 'silver' ? 'bg-muted-foreground/50' : 'bg-[hsl(25,40%,50%)]'} rounded-full">
			<p class="text-xs text-muted-foreground uppercase tracking-wider pt-2">With Deepest Gratitude</p>
		</div>
	</div>
</div>
