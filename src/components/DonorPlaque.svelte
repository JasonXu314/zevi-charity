<script lang="ts">
	import DavidStar from './DavidStar.svelte';

	const { name, message }: { name: string; message: string | null } = $props();
</script>

<div
	class="relative p-8 md:p-10 rounded-xl border-2 bg-gradient-to-br border-gold/40 from-[hsl(40,50%,96%)] to-[hsl(38,40%,88%)] shadow-plaque transition-all duration-500 hover:shadow-lg hover:scale-[1.02] animate-scale-in"
>
	<div class="absolute top-3 left-3 text-gold">
		<DavidStar />
	</div>
	<div class="absolute top-3 right-3 text-gold">
		<DavidStar />
	</div>
	<div class="absolute bottom-3 left-3 text-gold">
		<DavidStar />
	</div>
	<div class="absolute bottom-3 right-3 text-gold">
		<DavidStar />
	</div>

	<div class="text-center space-y-3">
		<p class="text-sm font-medium uppercase tracking-widest text-gold">In Honor Of</p>
		<h3 class="font-serif text-2xl md:text-3xl font-semibold text-foreground">
			{name}
		</h3>
		{#if message !== null}
			<p class="text-muted-foreground text-sm italic max-w-xs mx-auto">
				{message}
			</p>
		{/if}
		<div class="mx-auto">
			<div class="mx-auto w-16 h-0.5 bg-gold rounded-full"></div>
			<p class="text-xs text-muted-foreground uppercase tracking-wider pt-2 whitespace-nowrap">With Deepest Gratitude</p>
		</div>
	</div>
</div>
