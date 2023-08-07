<script>
	import { onMount } from 'svelte';
	import PostCard from './PostCard.svelte';
	import supabase from '$lib/db';
	/**
	 * @type {any[] | null}
	 */
	$: postData = [];
	onMount(async () => {
		let { data } = await supabase.from('Posts').select('username,context,created_at,img');
		postData = data;
	});
</script>

<div class="flex flex-wrap">
	{#each postData as item}
		<PostCard {...item} />
	{/each}
</div>
