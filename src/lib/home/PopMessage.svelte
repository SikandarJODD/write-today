<script>
	export let isPopUpOpen = false;
	import { fly, slide } from 'svelte/transition';
	import { Alert, AlertDescription, AlertTitle } from '$components/ui/alert';
	import { CheckCircle, MailCheck } from 'lucide-svelte';
	export let titlemsg = 'Logged In';
	export let msg = 'You have Login Successfully....';
	$: if (isPopUpOpen) {
		setTimeout(() => {
			isPopUpOpen = false;
		}, 1800);
	}
	export let icon = 'mail';
</script>

{#if isPopUpOpen}
	<!-- content here -->
	<div
		in:fly={{ x: 40, duration: 600 }}
		class="absolute right-10 bottom-10 w-80 border border-slate-500 rounded-lg"
	>
		<Alert>
			{#if icon === 'mail'}
				<!-- content here -->
				<MailCheck strokeWidth="1.6px" color="#0051FFFF" />
			{:else}
				<CheckCircle strokeWidth="1.6px" color="#003A6EFF" class="mr-3" size="20" />
			{/if}
			<AlertTitle>{titlemsg}</AlertTitle>
			<AlertDescription>{msg}</AlertDescription>
		</Alert>
	</div>
{/if}
