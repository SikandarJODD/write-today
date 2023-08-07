<script lang="ts">
	import PopMessage from './../PopMessage.svelte';
	import { Send } from 'lucide-svelte';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Card, CardContent, CardFooter } from '$components/ui/card';
	import supabase from '$lib/db';
	import { userEmail, username,imgno } from '$lib/store';

	console.log(new Date());
	$: console.log($userEmail, 'eorking');

	let text = '';
	$: email = $userEmail;
	$: isTrue = false;
	let insertPost = async () => {
		console.log(text, email);

		try {
			const { data, error } = await supabase.from('Posts').insert([
				{
					context: text,
					email: email,
					username: $username,
					img: $imgno,
				}
			]);
		} catch (e) {
			console.log(e);
		} finally {
			text = '';
			isTrue = true;
			setTimeout(() => {
				isTrue = false;
			}, 1900);
		}
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
<PopMessage
	isPopUpOpen={isTrue}
	titlemsg="Posted Successfully"
	msg="Check Dashboard to see your post"
	icon="post"
/>
