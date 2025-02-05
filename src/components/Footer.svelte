<script lang="ts">
	import { page } from '$app/state';
	import HelpIcon from './icons/HelpIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import MessageIcon from './icons/MessageIcon.svelte';

	function isActive(path: string, exact = false) {
		return page.url.pathname === path || (!exact && page.url.pathname.startsWith(path));
	}
</script>

<footer class="mt-4 grid h-[81px] grid-cols-3 rounded-lg border-t border-[#15171B] bg-[#0B0B0F]">
	<a href="/" class="group flex flex-col items-center justify-center">
		<HomeIcon
			className="{isActive('/') ? 'fill-[#24FFBC]' : 'fill-[#F5F5F5]'} group-hover:fill-[#24FFBC]"
		/>
		<span
			class="{isActive('/')
				? 'font-semibold text-[#24FFBC]'
				: 'font-normal text-[#F5F5F5]'} font-inter mt-2 text-sm leading-[21px] group-hover:font-semibold group-hover:text-[#24FFBC]"
			>Home</span
		>
	</a>
	<a href="/" class="group flex flex-col items-center justify-center">
		<MessageIcon
			className="{isActive('/messages')
				? 'fill-[#24FFBC]'
				: 'fill-[#F5F5F5]'} group-hover:fill-[#24FFBC]"
		/>
		<span
			class="{isActive('/messages')
				? 'font-semibold text-[#24FFBC]'
				: 'font-normal text-[#F5F5F5]'} font-inter mt-2 text-sm leading-[21px] group-hover:font-semibold group-hover:text-[#24FFBC]"
			>Messages</span
		>
	</a>
	<a href="/" class="group flex flex-col items-center justify-center">
		<HelpIcon
			className="{isActive('/help')
				? 'stroke-[#24FFBC]'
				: 'stroke-[#F5F5F5]'} group-hover:stroke-[#24FFBC]"
		/>
		<span
			class="{isActive('/help')
				? 'font-semibold text-[#24FFBC]'
				: 'font-normal text-[#F5F5F5]'} font-inter mt-2 text-sm leading-[21px] group-hover:font-semibold group-hover:text-[#24FFBC]"
			>Help</span
		>
	</a>
</footer>
