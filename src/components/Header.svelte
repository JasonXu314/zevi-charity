<script lang="ts">
	import { Heart, Menu, X } from '@lucide/svelte';
	import Button from './Button.svelte';

	let mobileMenuOpen: boolean = $state(false);

	function scrollToSection(sectionId: string): void {
		mobileMenuOpen = false;

		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header class="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16 md:h-20">
			<a href="/" class="flex items-center gap-2 group">
				<div class="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
					<Heart class="w-5 h-5 text-primary-foreground" />
				</div>
				<div>
					<h1 class="font-serif text-xl font-bold text-foreground leading-tight">Geulah Center Chabad Tzfat</h1>
				</div>
			</a>

			<nav class="hidden md:flex items-center gap-8">
				<a href="/" class="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Home</a>
				<a href="/impact" class="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Impact</a>
				<a href="/people" class="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">People</a>
				<button
					onclick={() => scrollToSection('donors')}
					class="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
				>
					Our Donors
				</button>
			</nav>

			<div class="hidden md:block">
				<a href="/donate">
					<Button variant="hero" size="lg">
						<Heart class="w-4 h-4" />
						Donate Now
					</Button>
				</a>
			</div>

			<button class="md:hidden p-2" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}>
				{#if mobileMenuOpen}
					<X class="w-6 h-6 text-foreground" />
				{:else}
					<Menu class="w-6 h-6 text-foreground" />
				{/if}
			</button>
		</div>

		{#if mobileMenuOpen}
			<nav class="md:hidden py-4 border-t border-border animate-fade-in">
				<div class="flex flex-col gap-2">
					<a
						href="/"
						onclick={() => (mobileMenuOpen = false)}
						class="px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:bg-muted cursor-pointer"
					>
						Home
					</a>
					<a
						href="/people"
						onclick={() => (mobileMenuOpen = false)}
						class="px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:bg-muted cursor-pointer"
					>
						People
					</a>
					<button
						onclick={() => scrollToSection('donors')}
						class="px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:bg-muted text-left cursor-pointer"
					>
						Our Donors
					</button>
					<a href="/donate" onclick={() => (mobileMenuOpen = false)} class="mt-2">
						<Button variant="hero" class="w-full cursor-pointer">
							<Heart class="w-4 h-4" />
							Donate Now
						</Button>
					</a>
				</div>
			</nav>
		{/if}
	</div>
</header>
