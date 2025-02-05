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
				? 'font-semibold text-primary'
				: 'text-default font-normal'} font-inter mt-2 text-sm leading-[21px] group-hover:font-semibold group-hover:text-primary"
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
				? 'font-semibold text-primary'
				: 'text-default font-normal'} font-inter mt-2 text-sm leading-[21px] group-hover:font-semibold group-hover:text-primary"
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
				? 'font-semibold text-primary'
				: 'text-default font-normal'} font-inter mt-2 text-sm leading-[21px] group-hover:font-semibold group-hover:text-primary"
			>Help</span
		>
	</a>
</footer>
