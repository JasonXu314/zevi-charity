<script lang="ts">
	import Flame from '../components/Flame.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<main>
	<Navbar />

	<div class="video-row">
		<video src="/video.mp4" width="400" controls>
			<source src="/video.mp4" type="mp4" />
		</video>
	</div>

	<section>
		<Flame img="food.jpeg" />
		<span class="text">Geula Charity brings together a network of donors to provide food for widows of the north.</span>
	</section>
	<section>
		<Flame img="support.jpeg" />
		<span class="text">We provide food for families struggling financially in order that no soul in Israel should go hungry.</span>
	</section>
	<section>
		<Flame img="support2.jpeg" />
		<span class="text"
			>We assist businesses negatively impacted by the more than two year long War of Iron Swords (October 7th, 2023 &#8212; present).</span
		>
	</section>
	<section>
		<Flame img="" />
		<span class="text">We are researching forming a new program to provide supervised interest-free loans to those who need them.</span>
	</section>
	<section>
		<Flame img="shabbat.png" />
		<span class="text">We organize Shabbat (Sabbath) meals that bring light and warmth to the northern Israeli community.</span>
	</section>
</main>

<style lang="scss">
	main {
		height: 100%;
		color: white;
		background: #1f1f1f;
		overflow-x: hidden;

		.video-row {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}

		section {
			display: flex;
			flex-direction: row;
			margin: 2em 4em;
			gap: 2em;
			flex-basis: content;
			align-items: center;

			.text {
				font-size: 32px;
			}
		}
	}
</style>
