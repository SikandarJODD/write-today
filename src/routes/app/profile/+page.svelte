<script lang="ts">
	import ProfileCard from '$lib/home/dashboard/ProfileCard.svelte';
	import { onMount } from 'svelte';
	let userData: { currentSession: { user: { email: any } } };
	onMount(async () => {
		if (localStorage.length > 0 && localStorage.getItem('supabase.auth.token') !== null) {
			userData = JSON.parse(localStorage.getItem('supabase.auth.token'));
			userData = userData?.currentSession?.user;
		}

	});
</script>

<ProfileCard email={userData?.email} />
