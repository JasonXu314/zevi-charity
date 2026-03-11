<script lang="ts">
	import { Heart, Quote } from '@lucide/svelte';
	import Button from '../../components/Button.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';

	const DONATE_URL = 'https://donate.stripe.com/8x2aEW3QL2Z2eOz2o00ZW00';

	const testimonials = [
		{
			quote: 'Thanks - Your gift was truly a mitzvah. We were able to afford Yom Tov with dignity. It lifted a heavy burden from my family, and I pray Hashem repays you with endless blessing.',
			attribution: 'Couple who lost job'
		},
		{
			quote: "Thanks so much for your generous help. It gave us real breathing room. It made a huge difference for me and my family, and I'll always be grateful.",
			attribution: 'Father of 8'
		},
		{
			quote: 'THANKS SO MUCH! Your assistance came when we REALLY needed it most. Your generosity gave us both relief and peace of mind—thank you from the bottom of our heart💛.',
			attribution: 'Mother (widow) of 7'
		},
		{
			quote: 'Dear Adina, Thank you so much for a beautiful Shabbos!!! The Friday night dinner in your Bais Chabad home together w/ Zevi was just Amazing!! Loved Kabbalat Shabbat @ AQM. You & Zevi are awesome team together! Kol Hakavod.',
			attribution: 'Shabbos Guest'
		},
		{
			quote: "You were Hashem's messenger in easing our struggles. May you be blessed many times over for your kindness.",
			attribution: 'Artist struggling due to tourism decline'
		},
		{
			quote: "Your support with the bills gave me peace of mind and let me focus on my family. I'm truly thankful.",
			attribution: 'Family of four'
		},
		{
			quote: "Your help lifted a weight off our shoulders. It wasn't just financial support—it was hope and reassurance.",
			attribution: 'Rabbi needing support for Pesach'
		}
	];
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1">
		<section class="py-16 md:py-24 bg-navy relative overflow-hidden">
			<div class="absolute inset-0 opacity-10">
				<div class="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
			</div>
			<div class="container mx-auto px-4 relative z-10 text-center">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
					<Heart class="w-4 h-4" />
					<span>Real Stories, Real Impact</span>
				</div>
				<h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
					Voices of <span class="text-gold">Gratitude</span>
				</h1>
				<p class="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
					Hear from the families and individuals whose lives have been touched by the generosity of our donors.
				</p>
			</div>
		</section>

		<section class="py-16 md:py-24 bg-background">
			<div class="container mx-auto px-4">
				<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{#each testimonials as t, i}
						<div
							class="group relative p-6 md:p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-plaque transition-all duration-500 hover:-translate-y-1 opacity-0"
							style="animation: scale-in 0.5s ease-out forwards; animation-delay: {i * 100}ms"
						>
							<Quote class="w-8 h-8 text-gold/30 mb-4" />
							<blockquote class="text-foreground leading-relaxed mb-4 italic">
								"{t.quote}"
							</blockquote>
							<div class="flex items-center gap-3">
								<div class="w-8 h-0.5 gradient-gold rounded-full"></div>
								<p class="text-sm font-semibold text-gold">
									— {t.attribution}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="py-16 md:py-24 bg-navy">
			<div class="container mx-auto px-4 text-center">
				<div class="max-w-2xl mx-auto space-y-6">
					<h2 class="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground">Be Part of These Stories</h2>
					<p class="text-secondary-foreground/80 text-lg">Your generosity creates moments of hope and dignity for families in Tsfat.</p>
					<a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
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
