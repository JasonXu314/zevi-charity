<script lang="ts">
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1">
		<section class="py-16 md:py-24 bg-navy">
			<div class="container mx-auto px-4">
				<h1 class="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground text-center mb-12">People</h1>
				<div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
					<div class="md:w-2/5 shrink-0">
						<img src="zevi.png" alt="Rabbi Zevi Wineberg" class="w-full rounded-lg shadow-gold" />
					</div>
					<div class="md:w-3/5 flex flex-col justify-center">
						<p class="text-secondary-foreground/90 leading-relaxed text-base md:text-lg">
							Rabbi Zevi Wineberg is a notable cornerstone of the Tzfat English-speaking community. Originally serving as a Rabbi in positions
							across North America and Europe, he recently settled down in the city of Tzfat. During his time in Tzfat, he has ministered as a
							Rabbi, created Jewish learning programs, authored numerous books, and fascilitated the distribution of donations and aid to those
							in need. He aims to direct his quickly expanding charity network to often overlooked towns that have been impacted by the ongoing
							war.
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
