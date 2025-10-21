<script lang="ts">
	import Flame from '../components/Flame.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<main>
	<Navbar />

	<div class="video-row">
		<video src="/video.mp4" width="400">
			<source src="/video.mp4" type="mp4" />
		</video>
	</div>

	<section>
		<Flame />
		<span>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, ipsum! Voluptatibus quas, veritatis iusto aspernatur consequatur quam tenetur et
			illum alias adipisci earum vel impedit minima dolores, dignissimos magnam ex laboriosam corporis quasi temporibus autem ad itaque! Blanditiis
			numquam nulla eveniet quae labore, repellat, quod cum exercitationem error, tempore dignissimos.
		</span>
	</section>
	<section>
		<Flame />
		<span>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, ipsum! Voluptatibus quas, veritatis iusto aspernatur consequatur quam tenetur et
			illum alias adipisci earum vel impedit minima dolores, dignissimos magnam ex laboriosam corporis quasi temporibus autem ad itaque! Blanditiis
			numquam nulla eveniet quae labore, repellat, quod cum exercitationem error, tempore dignissimos.
		</span>
	</section>
	<section>
		<Flame />
		<span>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, ipsum! Voluptatibus quas, veritatis iusto aspernatur consequatur quam tenetur et
			illum alias adipisci earum vel impedit minima dolores, dignissimos magnam ex laboriosam corporis quasi temporibus autem ad itaque! Blanditiis
			numquam nulla eveniet quae labore, repellat, quod cum exercitationem error, tempore dignissimos.
		</span>
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

			.video {
				height: 422px;
				width: 750px;
				background: blue;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				div {
					text-align: center;
				}
			}
		}

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
