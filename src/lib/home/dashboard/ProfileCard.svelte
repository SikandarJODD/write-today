<script>
	import { Label } from '$components/ui/label';
	import { CheckCircle } from 'lucide-svelte';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	import supabase from '$lib/db';
	import { goto } from '$app/navigation';

	let imgsData = [
		{
			src: 'https://i.pinimg.com/564x/68/b5/77/68b577ba7cb013903567b3537fd73747.jpg',
			id: 1
		},
		{
			src: 'https://i.pinimg.com/564x/cb/20/e9/cb20e993514992e6094139a4bac417c6.jpg',
			id: 2
		},
		{
			src: 'https://i.pinimg.com/564x/66/69/92/6669920f15a4b9593e2c52589fc93621.jpg',
			id: 3
		},
		{
			src: 'https://i.pinimg.com/564x/1a/11/cf/1a11cf9d73af1466b9d76fd38d4c33ab.jpg',
			id: 4
		},
		{
			src: 'https://i.pinimg.com/564x/4d/86/dd/4d86ddf13eda96c2cab1c79489925e2e.jpg',
			id: 5
		},
		{
			src: 'https://i.pinimg.com/564x/9b/fd/d5/9bfdd53be19cb460e83cbfd735f88516.jpg',
			id: 6
		}
	];
	export let proname = '';
	export let prodesc = '';
	export let email = '';
	$: imgNo = 0;
	let updateData = async () => {
		console.log(proname, prodesc, imgNo);
		if (email.length > 0) {
			await supabase
				.from('Profiles')
				.update({ name: proname, desc: prodesc, img: imgNo })
				.eq('email', email);
		}
		goto('/app/dashboard');
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
			<Input id="name" type="text" placeholder="Your Name" bind:value={proname} />
		</div>
		<div class="grid gap-2 md:w-64">
			<Label for="imgSrc">Select Profile Image</Label>
			<div class="flex">
				{#each imgsData as item (item.id)}
					<button
						class="outline-none border-none"
						on:click={() => {
							imgNo = item.id;
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
			<Label for="imgSrc">Selected Img {imgNo}</Label>
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
