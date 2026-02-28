<script lang="ts">
	import type { IconProps } from '@lucide/svelte';
	import type { Component } from 'svelte';

	const { icon: Icon, number, label, description }: { icon: Component<IconProps>; number: string; label: string; description: string } = $props();
</script>

<div
	class="group relative p-6 md:p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-plaque transition-all duration-500 hover:-translate-y-1"
>
	<div class="flex flex-col items-center text-center gap-4">
		<div class="w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
			<Icon class="w-8 h-8 text-primary-foreground" />
		</div>
		<div>
			<p class="font-serif text-4xl md:text-5xl font-bold text-gold">{number}</p>
			<p class="font-semibold text-foreground text-lg mt-1">{label}</p>
		</div>
		<p class="text-muted-foreground text-sm leading-relaxed">
			{description}
		</p>
	</div>
</div>
