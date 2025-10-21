<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
</script>

<main>
	<Navbar />

	<p>
		"Thanks - Your gift was truly a mitzvah. We were able to afford Yom Tov with dignity. It lifted a heavy burden from my family, and I pray Hashem repays
		you with endless blessing." Couple who lost job
	</p>
	<p>
		"Thanks so much for your generous help. It gave us real breathing room. It made a huge difference for me and my family, and I'll always be grateful."
		Father of 8
	</p>
	<p>
		"THANKS SO MUCH! Your assistance came when we REALLY needed it most. Your generosity gave us both relief and peace of mind—thank you from the bottom of
		our heart💛." Mother (widow) of 7
	</p>
	<p>
		Dear Adina, Thank you so much for a beautiful Shabbos!!! The Friday night dinner in your Bais Chabad home together w/ Zevi was just Amazing!! Loved
		Kabbalat Shabbat @ AQM. You & Zevi are awesome team together! Kol Hakavod.
	</p>
	<p>"You were Hashem's messenger in easing our struggles. May you be blessed many times over for your kindness." Artist struggling do to tourism decline</p>
	<p>"Your support with the bills gave me peace of mind and let me focus on my family. I'm truly thankful." Family of four</p>
	<p>"Your help lifted a weight off our shoulders. It wasn't just financial support—it was hope and reassurance." Rabbi needing support for Pesach</p>
</main>

<style lang="scss">
	main {
		height: 100%;
		color: white;
		background: #1f1f1f;
		overflow: hidden;

		section {
			display: flex;
			flex-direction: row;
			margin: 2em 4em;
			gap: 2em;
			flex-basis: content;
			align-items: center;
		}
	}
</style>
