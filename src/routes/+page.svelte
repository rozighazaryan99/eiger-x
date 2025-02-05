<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import SearchDropdown from '../components/HelpSearch.svelte';
	import SendMessage from '../components/SendMessage.svelte';
</script>

<Header />
<main class="flex-1 overflow-y-auto">
	<SendMessage />
	<SearchDropdown />
</main>
<Footer />
