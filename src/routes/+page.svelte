<script lang="ts">
	import { ArrowRight, Award, Heart, Store, Users, Utensils } from '@lucide/svelte';
	import Button from '../components/Button.svelte';
	import DonorPlaque from '../components/DonorPlaque.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import ImpactCard from '../components/ImpactCard.svelte';

	let video: HTMLVideoElement | null = $state(null);

	function play() {
		if (video) {
			video.play();
		}
	}

	const impactData = [
		{
			icon: Users,
			number: '300+',
			label: 'Families Supported',
			description: 'Providing essential support to over 300 families in Tsfat who are in need.'
		},
		{
			icon: Utensils,
			number: 'Weekly',
			label: 'Shabbos Meals',
			description: 'Ensuring every family can celebrate Shabbos with dignity and joy.'
		},
		{
			icon: Store,
			number: 'Local',
			label: 'Business Support',
			description: 'Supporting local businesses affected by the downturn from the ongoing conflict.'
		}
	];

	const donors = [
		{
			name: 'The Pack-Devinki Family',
			dedication: 'For their generous and continued support of Tsfat families',
			tier: 'gold'
		},
		{
			name: 'The Seaman Family',
			dedication: 'In recognition of their compassion and commitment to our community',
			tier: 'gold'
		},
		{
			name: 'The Shragowitz Family',
			tier: 'gold'
		},
		{
			name: 'Chaya Masha Hleap',
			tier: 'gold'
		},
		{
			name: 'Dr. and Mrs Noveck',
			tier: 'gold'
		},
		{
			name: 'Jerry Shapiro',
			tier: 'gold'
		}
	] as const;
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1">
		<section class="relative py-20 md:py-32 overflow-hidden">
			<div class="absolute inset-0">
				<video
					class="w-full h-full object-cover"
					bind:this={video}
					src="https://www.pexels.com/download/video/30192866/"
					onloadeddata={play}
					loop
					muted
				></video>
				<div class="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60"></div>
			</div>

			<div class="container mx-auto px-4 relative z-10">
				<div class="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium backdrop-blur-sm">
						<Heart class="w-4 h-4" />
						<span>Together We Give</span>
					</div>

					<h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
						Supporting Tsfat Families
						<span class="block text-gold">In Their Time of Need</span>
					</h1>

					<p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
						Together with our partners, we provide food, Shabbos meals, and vouchers for over 300 families while supporting local businesses
						affected by challenging times.
					</p>

					<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
						<a href="/donate" target="_blank" rel="noopener noreferrer">
							<Button variant="hero" size="xl">
								<Heart class="w-5 h-5" />
								Make a Donation
							</Button>
						</a>
						<a href="#donors">
							<Button variant="heroOutline" size="xl">
								View Our Donors
								<ArrowRight class="w-5 h-5" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 md:py-24 bg-background">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12 md:mb-16">
					<h2 class="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
					<p class="text-muted-foreground max-w-xl mx-auto">Every donation makes a real difference in the lives of Tsfat families.</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{#each impactData as item, i}
						<div class="opacity-0 animate-fade-in-up" style="animation-delay: {i * 150}ms; animation-fill-mode: forwards">
							<ImpactCard {...item} />
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="py-16 md:py-24 bg-background">
			<div class="container mx-auto px-4">
				<div class="max-w-5xl mx-auto">
					<div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
						<div class="space-y-6">
							<h2 class="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
							<div class="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									In the ancient city of Tsfat, hundreds of families face daily challenges. From providing nourishing Shabbos meals to
									offering vouchers for essential needs, we work tirelessly to ensure no family is left behind.
								</p>
								<p>
									We also support local businesses that have been affected by the ongoing conflict in Israel, helping to strengthen the
									community from within.
								</p>
								<p>With your help, we can continue to bring hope, dignity, and sustenance to those who need it most.</p>
							</div>
							<a href="/donate" target="_blank" rel="noopener noreferrer">
								<Button variant="hero" size="lg">
									Join Our Mission
									<ArrowRight class="w-4 h-4" />
								</Button>
							</a>
						</div>

						<div class="relative">
							<div
								class="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-navy/10 flex items-center justify-center shadow-plaque border border-gold/20"
							>
								<div class="text-center p-8">
									<Heart class="w-20 h-20 text-gold mx-auto mb-4" />
									<p class="font-serif text-2xl font-semibold text-foreground">
										"For anybody who preserves a single life it is counted as if he preserved an entire world."
									</p>
									<p class="text-muted-foreground mt-2 text-sm">— Sanhedrin Ch.4, Talmud Yerushalmi</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="donors" class="py-16 md:py-24 bg-muted">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl mx-auto">
					<div class="text-center mb-12">
						<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
							<Award class="w-4 h-4" />
							<span>Our Supporters</span>
						</div>
						<h2 class="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Honoring Our Donors</h2>
						<p class="text-muted-foreground max-w-xl mx-auto">
							We are deeply grateful to the generous families and individuals whose contributions make our work possible.
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
						{#each donors as donor, i}
							<div class="opacity-0" style="animation: scale-in 0.5s ease-out forwards; animation-delay: {i * 200}ms">
								<DonorPlaque {...donor} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 md:py-24 bg-navy">
			<div class="container mx-auto px-4 text-center">
				<div class="max-w-2xl mx-auto space-y-6">
					<h2 class="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground">Every Gift Makes a Difference</h2>
					<p class="text-secondary-foreground/80 text-lg">Your generosity helps us provide food, support, and hope to families in Tsfat.</p>
					<a href="/donate" target="_blank" rel="noopener noreferrer">
						<Button variant="hero" size="xl" class="mt-4">
							<Heart class="w-5 h-5" />
							Donate Today
						</Button>
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
