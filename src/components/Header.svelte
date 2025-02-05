<script lang="ts">
	import { Avatar1, Avatar2, Avatar3 } from '$lib';
</script>

<header class="flex items-baseline justify-between p-5">
	<img src="/images/logo.png" alt="Logo" class="h-8" />
	<div class="flex">
		<div
			class="z-20 -mr-1.5 h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-[#0B0B0F] p-0.5"
		>
			<img src={Avatar1} alt="Avatar 1" class="rounded-full" />
		</div>
		<div
			class="z-10 -mr-1.5 h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-[#0B0B0F] p-0.5 hover:z-30"
		>
			<img src={Avatar2} alt="Avatar 2" class="rounded-full" />
		</div>
		<div class="z-0 h-10 w-10 cursor-pointer overflow-hidden rounded-full p-0.5 hover:z-30">
			<img src={Avatar3} alt="Avatar 3" class="rounded-full" />
		</div>
	</div>
</header>
