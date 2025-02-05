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

<div class="bg-dark border-default rounded-lg+ mt-3 border p-[7px]">
	<div class="bg-default flex items-center justify-between rounded-lg pr-3">
		<input
			type="text"
			class="font-inter text-default placeholder:text-default w-full bg-transparent px-3 py-2.5 text-sm font-semibold focus:outline-none"
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
							class="hover:bg-primary group flex items-center justify-between rounded-lg px-3 py-2.5"
						>
							<span class="font-inter text-default group-hover:text-dark text-sm font-normal"
								>{item.name}</span
							>
							<ArrowIcon className="fill-primary group-hover:fill-dark" />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
