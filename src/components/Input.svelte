<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface InputProps extends HTMLAttributes<HTMLInputElement> {
		value?: string;
		label?: string;
		required?: boolean;
	}

	let { value = $bindable(''), label, required = false, ...rest }: InputProps = $props();
</script>

<label>
	{label}
	{#if required}
		<small class="text-red-600">*</small>
	{/if}
	<input
		class="block w-full h-12 px-4 text-base border border-input rounded-md text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none"
		{required}
		bind:value
		{...rest}
	/>
</label>
