<script lang="ts">
	import { PUBLIC_LOCATION, PUBLIC_STRIPE_KEY } from '$env/static/public';
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
		name: string = $state(''),
		message: string = $state(''),
		cancel: (() => void) | null = $state(null),
		confirm: (() => void) | null = $state(null);

	function donate(evt: SubmitEvent): void {
		evt.preventDefault();

		fetch('/api/donate', { method: 'POST', body: JSON.stringify({ amount }) })
			.then((res) => res.json())
			.then(({ clientSecret, id }) => {
				if (stripe) {
					const elements = stripe.elements({
						clientSecret,
						appearance: {
							theme: 'stripe',
							variables: {
								colorPrimary: 'hsl(38 80% 50%)',
								colorBackground: 'hsl(40 33% 98%)',
								colorText: 'black'
							}
						}
					});

					const paymentElement = elements.create('payment');
					paymentElement.mount(stripeDiv!);

					paying = true;
					cancel = () => {
						paymentElement.destroy();
						cancel = null;
						confirm = null;
						paying = false;
						fetch(`/api/donate?id=${id}`, { method: 'DELETE' });
					};
					confirm = () => {
						console.log('hi');
						stripe!.confirmPayment({
							elements,
							confirmParams: {
								return_url: `${PUBLIC_LOCATION}/api/return?name=${name}message=${message}`
							}
						});
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
			<Input label="Name" bind:value={name} />
			<label>
				Message
				<textarea class="block w-full border border-input rounded-md" rows={6} bind:value={message}></textarea>
			</label>

			<Button>Donate</Button>
		</form>

		<div class="flex flex-col w-2/5 m-auto mt-4">
			<p>
				Or, <a class="underline text-sky-600" target="_blank" rel="noopener noreferrer" href="https://donate.stripe.com/8x2aEW3QL2Z2eOz2o00ZW00">
					donate here
				</a>.
			</p>
		</div>
	</main>
</div>

<div class="modal-bg" role="none" class:open={paying} onclick={(evt) => evt.target === evt.currentTarget && cancel?.()}>
	<div class="modal flex flex-col gap-4">
		<div class="stripe" bind:this={stripeDiv}></div>
		{#if confirm !== null}
			<Button onclick={() => confirm?.()}>Confirm</Button>
		{/if}
	</div>
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
