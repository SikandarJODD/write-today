<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	$: isDashboard = $page.route.id;
</script>

{#if isDashboard?.split('/')[1] !== 'app'}
	<!-- if the route is not /app, show the navbar -->
	<Navbar />
{/if}

<slot />
