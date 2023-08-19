<script>
	import { page } from '$app/stores';

	$: console.log($page.params.pro);
</script>

<code>Hello {$page.params.pro} </code>
