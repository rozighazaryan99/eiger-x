<script lang="ts">
	import ArrowIcon from './icons/ArrowIcon.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';

	type Item = { id: number; name: string };

	let items: Item[] = [
		{ id: 1, name: 'In-game bonuses and free spins' },
		{ id: 2, name: 'Crypto deposit still not credited?' },
		{ id: 3, name: 'EigerX VIP program overview' },
		{ id: 4, name: 'Achievements and awards' }
	];

	let searchValue: string = '';
	let filteredItems: Item[] = items;

	$: filteredItems = searchValue
		? items.filter((item) => normalizeText(item.name).includes(normalizeText(searchValue)))
		: items;

	function normalizeText(text: string): string {
		return text.toLowerCase().replace(/[\s\-\_]+/g, '');
	}
</script>

<div class="mt-3 rounded-[10px] border border-[#15171B] bg-[#0B0B0F] p-[7px]">
	<div class="flex items-center justify-between rounded-lg bg-[#1B1E22] pr-3">
		<input
			type="text"
			class="font-inter w-full bg-transparent px-3 py-2.5 text-sm font-semibold leading-[21px] text-[#F5F5F5] placeholder:text-[#F5F5F5] focus:outline-none"
			placeholder="Search for help"
			bind:value={searchValue}
		/>
		<SearchIcon />
	</div>
	{#if filteredItems.length > 0}
		<div class="mt-2">
			<ul>
				{#each filteredItems as item}
					<li>
						<a
							href="/"
							class="group flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-[#24FFBC]"
						>
							<span
								class="font-inter text-sm font-normal leading-[21px] text-[#F5F5F5] group-hover:text-[#0B0B0F]"
								>{item.name}</span
							>
							<ArrowIcon className="fill-[#24FFBC] group-hover:fill-[#0B0B0F]" />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
