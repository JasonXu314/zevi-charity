<script lang="ts" module>
	function uniformUnit(): number {
		return Math.random() * 2 - 1;
	}
</script>

<script lang="ts">
	const { img }: { img: string } = $props();

	let lx = $state(0),
		ly = $state(0),
		cx = $state(0),
		cy = $state(0),
		rx = $state(0),
		ry = $state(0);

	$effect(() => {
		let af: number | null = null;

		let x = 0,
			y = 0;

		const varyL = () => {
			af = requestAnimationFrame(varyL);

			x += uniformUnit() * 0.05;
			y += uniformUnit() * 0.05;

			if (x >= 0.5) x = 0.5;
			if (x <= -0.5) x = -0.5;
			if (y >= 0.5) y = 0.5;
			if (y <= -0.5) y = -0.5;

			lx = x;
			ly = y;
		};

		varyL();

		return () => {
			if (af !== null) cancelAnimationFrame(af);
		};
	});

	$effect(() => {
		let af: number | null = null;

		let x = 0,
			y = 0;

		const varyL = () => {
			af = requestAnimationFrame(varyL);

			x += uniformUnit() * 0.05;
			y += uniformUnit() * 0.05;

			if (x >= 0.5) x = 0.5;
			if (x <= -0.5) x = -0.5;
			if (y >= 0.5) y = 0.5;
			if (y <= -0.5) y = -0.5;

			cx = x;
			cy = y;
		};

		varyL();

		return () => {
			if (af !== null) cancelAnimationFrame(af);
		};
	});

	$effect(() => {
		let af: number | null = null;

		let x = 0,
			y = 0;

		const varyL = () => {
			af = requestAnimationFrame(varyL);

			x += uniformUnit() * 0.05;
			y += uniformUnit() * 0.05;

			if (x >= 0) x = 0;
			if (x <= -0.5) x = -0.5;
			if (y >= 0.5) y = 0.5;
			if (y <= -0.5) y = -0.5;

			rx = x;
			ry = y;
		};

		varyL();

		return () => {
			if (af !== null) cancelAnimationFrame(af);
		};
	});
</script>

<div>
	<svg viewBox="0 0 32 48" overflow="visible">
		<defs>
			<filter id="glow" filterUnits="userSpaceOnUse">
				<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5" />
				<feMerge>
					<feMergeNode in="blur5" />
				</feMerge>
			</filter>
		</defs>

		<path
			fill="orange"
			d="M {24 + rx} {ry} C {12 + rx * 2} {16 + ry * 2} {32 + rx} {20 + ry} 32 32 A 16 16 0 0 1 0 32 C 0 20 8 12 {16 + lx} {7 + ly} C 18 5.5 {18.5 +
				lx} {4 + ly} {19 + lx} {2 + ly} Q {20 + cx} {3.5 + cy} {19.5 + cx} {5 + cy} Q {20 + rx} {3.5 + ry} {24 + rx} {ry}"
		></path>
	</svg>
	<img src={img} alt="image" height={180} />
</div>

<style lang="scss">
	div {
		position: relative;

		svg {
			margin-top: -24px;
			overflow: visible;
			height: 320px;
			flex-shrink: 0;
			box-shadow: 0px -0px 10000px transparent;

			path {
				mask-mode: alpha;
				mask-image: linear-gradient(rgba(0, 0, 0, 0.3), 20%, rgba(0, 0, 0, 0.8));
				filter: url(#glow);
			}
		}

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
