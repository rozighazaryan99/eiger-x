<script lang="ts">
	import SendIcon from './icons/SendIcon.svelte';
</script>

<div class="mt-20">
	<div class="pl-5">
		<h2 class="color-white font-sf text-3.5xl font-bold opacity-70">Hello there</h2>
		<h2 class="color-white font-sf text-3.5xl font-bold">How can we help?</h2>
	</div>
	<a
		href="https://www.eigerx.com/#contact"
		target="_blank"
		class="rounded-lg+ border-primary bg-default hover:bg-dark mt-4 flex items-center justify-between border px-5 py-4 duration-300"
	>
		<div class="flex flex-col">
			<h6 class="font-inter text-default text-sm font-semibold">Send us a message</h6>
			<span class="font-inter text-secondary text-sm font-normal"
				>We typically reply within a day</span
			>
		</div>
		<SendIcon />
	</a>
</div>
