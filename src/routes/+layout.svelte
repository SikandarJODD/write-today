<script>
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	import supabase from '$lib/db';
	
</script>

<Navbar  />
<slot />
