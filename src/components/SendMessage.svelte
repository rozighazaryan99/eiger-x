<script lang="ts">
	import SendIcon from './icons/SendIcon.svelte';
</script>

<div class="mt-[80px]">
	<div class="pl-5">
		<h2 class="color-white font-sf text-[32px] font-bold leading-[38px] opacity-70">Hello there</h2>
		<h2 class="color-white font-sf text-[32px] font-bold leading-[38px]">How can we help?</h2>
	</div>
	<a
		href="https://www.eigerx.com/#contact"
		target="_blank"
		class="mt-4 flex items-center justify-between rounded-[10px] border border-primary bg-default px-5 py-4 duration-300 hover:bg-dark"
	>
		<div class="flex flex-col">
			<h6 class="font-inter text-sm font-semibold text-default">Send us a message</h6>
			<span class="font-inter text-sm font-normal text-[#83838D]"
				>We typically reply within a day</span
			>
		</div>
		<SendIcon />
	</a>
</div>
