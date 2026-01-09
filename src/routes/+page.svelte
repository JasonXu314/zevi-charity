<script lang="ts">
	import Flame from '../components/Flame.svelte';
	import Navbar from '../components/Navbar.svelte';

	let video: HTMLVideoElement | null = $state(null);

	function play() {
		if (video) {
			video.play();
		}
	}
</script>

<main>
	<Navbar />

	<div class="video-row">
		<video bind:this={video} src="https://www.pexels.com/download/video/3881018" onloadeddata={play} loop muted />
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
			width: 100vw;
			height: 500px;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			align-items: center;

			video {
				width: 100%;
			}
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
