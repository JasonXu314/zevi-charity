<script lang="ts">
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe, type Stripe } from '@stripe/stripe-js';
	import Button from '../../components/Button.svelte';
	import CurrencyInput from '../../components/CurrencyInput.svelte';
	import Header from '../../components/Header.svelte';
	import Input from '../../components/Input.svelte';

	let stripeDiv: HTMLDivElement | null = $state(null),
		stripe: Stripe | null = $state(null),
		amount: number = $state(0),
		paying: boolean = $state(false),
		email: string = $state(''),
		cancel: (() => void) | null = $state(null);

	function donate(evt: SubmitEvent): void {
		evt.preventDefault();

		fetch('/api/donate', { method: 'POST' })
			.then((res) => res.json())
			.then(({ secret }) => {
				if (stripe) {
					const elements = stripe.elements({
						clientSecret: secret,
						appearance: {
							theme: 'night',
							variables: {
								colorPrimary: '#7cd391',
								colorBackground: '#1f1f1f',
								colorText: 'white'
							}
						}
					});

					const paymentElement = elements.create('payment');
					paymentElement.mount(stripeDiv!);

					paying = true;
					cancel = () => {
						paymentElement.destroy();
					};
				}
			});
	}

	$effect(() => {
		loadStripe(PUBLIC_STRIPE_KEY).then((s) => {
			if (s) {
				stripe = s;
			}
		});
	});
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1">
		<h1>Under construction</h1>
		<form class="flex flex-col gap-4 w-2/5 m-auto" onsubmit={donate}>
			<Input label="Email" required bind:value={email} />
			<CurrencyInput label="Amount" required bind:value={amount} />
			<Input label="Name" />
			<label>
				Message
				<textarea class="block w-full border border-input rounded-md" rows={6}></textarea>
			</label>

			<Button>Donate</Button>
		</form>
	</main>
</div>

<div class="modal-bg" role="none" class:open={paying} onclick={cancel}>
	<div class="modal" bind:this={stripeDiv}></div>
</div>

<style lang="scss">
	@use 'sass:color';

	.modal-bg.open {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);

		.modal {
			width: 70%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: hsl(40 33% 98%);
			padding: 1rem 2rem;
		}
	}
</style>
