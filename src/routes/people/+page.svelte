<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
</script>

<main>
	<Navbar />

	<div class="body">
		<img src="zevi.png" alt="Face" />

		<p class="description">
			Rabbi Zevi Wineberg is a notable cornerstone of the Tzfat English-speaking community. Originally serving as a Rabbi in positions across North
			America and Europe, he recently settled down in the city of Tzfat. During his time in Tzfat, he has ministered as a Rabbi, created Jewish learning
			programs, authored numerous books, and fascilitated the distribution of donations and aid to those in need. He aims to direct his quickly expanding
			charity network to often overlooked towns that have been impacted by the ongoing war.
		</p>
	</div>
</main>

<style lang="scss">
	main {
		height: 100%;
		color: white;
		background: #1f1f1f;
		overflow-x: hidden;

		.body {
			padding: 2rem 4rem;
			display: flex;
			flex-direction: row;
			gap: 2rem;
			align-items: center;

			.description {
				font-size: large;
			}
		}
	}
</style>
