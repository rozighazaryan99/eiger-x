<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="absolute -z-10 h-full w-full bg-primary">
	<div
		class="absolute top-0 -z-10 h-[55.114%] w-full bg-[url('/images/bg-linear.png')] bg-cover bg-no-repeat"
	></div>
	<div
		class="absolute bottom-0 -z-10 h-[45%] w-full bg-gradient-to-r from-[#211A1A] to-[#212127]"
	></div>
</div>
<div class="flex h-screen flex-col p-4 text-white">
	{@render children()}
</div>
