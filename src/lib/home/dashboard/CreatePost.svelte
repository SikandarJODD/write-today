<script lang="ts">
	import { Send } from 'lucide-svelte';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Card, CardContent, CardFooter } from '$components/ui/card';
	
	let isPosted = 'Post';
	let text = '';
	let insertPost = () => {
		text = '';
		console.log('insertPost');
	};
</script>

<Card class="w-full mx-auto  md:mx-0 md:w-[60%]  md:border-slate-600">
	<form on:submit|preventDefault={insertPost}>
		<CardContent class="p-0 md:pb-5 mt-1 md:px-2 md:gap-4">
			<div class="w-[100%] md:gap-1.5">
				<Input
					bind:value={text}
					type="text"
					id="content"
					placeholder="What is Happening ....."
					class="border-none outline-none "
				/>
			</div>
		</CardContent>
		<CardFooter class="relative flex justify-end">
			<Button size="sm" type="submit" disabled={text.length === 0}>
				<Send class="mr-2" strokeWidth="1.4px" size="18" />
				Post
			</Button>
		</CardFooter>
	</form>
</Card>
