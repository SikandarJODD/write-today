<script>
	import { imgno, userDesc, username, userEmail, see } from '$lib/store.js';
	import { Label } from '$components/ui/label';
	import { CheckCircle } from 'lucide-svelte';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { imgsData } from '$lib/store';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';
	import { Avatar, AvatarImage } from '$components/ui/avatar';
	import supabase from '$lib/db';

	let proname = $username;
	let prodesc = $userDesc;
	let email = $userEmail;
	$: imgNo = $imgno;

	let updateData = async () => {
		if (email.length > 0) {
			await supabase.from('Profiles').update({ desc: prodesc, img: imgNo }).eq('email', email);
		}
		see();
	};
</script>

<Card class="w-full">
	<CardHeader>
		<CardTitle>Profile Card</CardTitle>
		<CardDescription>Update Your Profile...</CardDescription>
	</CardHeader>
	<CardContent class="grid gap-4">
		<div class="grid gap-2 md:w-64">
			<Label for="name">Name</Label>
			<Input id="name" type="text" placeholder="Your Name" bind:value={proname} disabled />
		</div>
		<div class="grid gap-2 md:w-64">
			<Label for="imgSrc">Select Profile Image</Label>
			<div class="flex">
				{#each $imgsData as item (item.id)}
					<button
						class="outline-none border-none"
						on:click={() => {
							imgNo = item.id - 1;
						}}
					>
						<Avatar
							class="w-14 h-14 mx-1 border-slate-500 border hover:border-slate-800 hover:scale-110 transition-all duration-150 "
						>
							<AvatarImage src={item.src} />
						</Avatar>
					</button>
				{/each}
			</div>
			<Label for="imgSrc">Selected Img {$imgno+1}</Label>
		</div>
		<div class="grid gap-2 md:w-2/3">
			<Label for="name">Description</Label>
			<Input id="name" type="text" placeholder="Your Description" bind:value={prodesc} />
		</div>
	</CardContent>
	<CardFooter>
		<Button
			size="sm"
			class="hover:bg-white hover:text-gray-800 border border-slate-600"
			on:click={updateData}
		>
			<CheckCircle class="mr-2 h-4 w-4 " />
			Update
		</Button>
	</CardFooter>
</Card>
