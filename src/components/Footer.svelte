<script lang="ts">
	import { page } from '$app/state';
	import HelpIcon from './icons/HelpIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import MessageIcon from './icons/MessageIcon.svelte';

	function isActive(path: string, exact = false) {
		return page.url.pathname === path || (!exact && page.url.pathname.startsWith(path));
	}
</script>

<footer class="bg-dark border-default mt-4 grid h-[81px] grid-cols-3 rounded-lg border-t">
	<a href="/" class="group flex flex-col items-center justify-center">
		<HomeIcon
			className="{isActive('/') ? 'fill-primary' : 'fill-lightGray'} group-hover:fill-primary"
		/>
		<span
			class="{isActive('/')
				? 'text-primary font-semibold'
				: 'text-default font-normal'} font-inter group-hover:text-primary mt-2 text-sm group-hover:font-semibold"
			>Home</span
		>
	</a>
	<a href="/" class="group flex flex-col items-center justify-center">
		<MessageIcon
			className="{isActive('/messages')
				? 'fill-primary'
				: 'fill-lightGray'} group-hover:fill-primary"
		/>
		<span
			class="{isActive('/messages')
				? 'text-primary font-semibold'
				: 'text-default font-normal'} font-inter group-hover:text-primary mt-2 text-sm group-hover:font-semibold"
			>Messages</span
		>
	</a>
	<a href="/" class="group flex flex-col items-center justify-center">
		<HelpIcon
			className="{isActive('/help')
				? 'stroke-primary'
				: 'stroke-lightGray'} group-hover:stroke-primary"
		/>
		<span
			class="{isActive('/help')
				? 'text-primary font-semibold'
				: 'text-default font-normal'} font-inter group-hover:text-primary mt-2 text-sm group-hover:font-semibold"
			>Help</span
		>
	</a>
</footer>
