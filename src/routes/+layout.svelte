<script>
	import { fade } from 'svelte/transition';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	export let data;
	$: isDashboard = data.path;
</script>

{#if isDashboard !== 'app'}
	<!-- if the route is not /app, show the navbar -->
	<div transition:fade >
		<Navbar />
	</div>
{/if}

<slot />
