<script lang="ts">
	import { untrack } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface CurrencyInputProps extends HTMLAttributes<HTMLInputElement> {
		value?: number;
		label?: string;
		required?: boolean;
	}

	let { value = $bindable(0), label, required = false }: CurrencyInputProps = $props();

	let _value: string = $state('0.00');

	$effect(() => {
		const val = value.toFixed(2);

		if (untrack(() => _value) !== val) {
			_value = val;
		}
	});
</script>

<label class="relative">
	{label}
	{#if required}
		<small class="text-red-600">*</small>
	{/if}
	<input
		type="number"
		class="block w-full h-12 px-4 indent-4 text-base border border-input rounded-md text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none"
		step={0.01}
		{required}
		bind:value={_value}
		onchange={() => (value = Number(_value))}
	/>
	<span class="absolute left-0 bottom-3 pl-4">$</span>
</label>
