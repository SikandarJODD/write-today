<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { Button } from '$components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { MailCheck } from 'lucide-svelte';
	import { Alert, AlertDescription, AlertTitle } from '$components/ui/alert';

	import supabase from '$lib/db';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let username = '';
	let isPopUpOpen = false;

	let signUpUser = async () => {
		try {
			const { user, session, error } = await supabase.auth.signUp({
				email: email,
				password: password
			});
			let ispresent = await supabase.from('Profiles').select('email').eq('email', email);
			if (ispresent.data?.length === 0) {
				await supabase.from('Profiles').insert([{ email: email, img: 1, name: username, desc: '' }]);
			}
		} catch (error) {
			console.log(error);
		} finally {
			isPopUpOpen = true;
			setTimeout(() => {
				isPopUpOpen = false;
				goto('/login');
			}, 800);
			email = '';
			password = '';
		}
	};
</script>

<Card
	class="md:max-w-sm mx-auto items-center md:mt-32 md:shadow-lg md:shadow-slate-400/60 border-slate-300"
>
	<CardHeader class="space-y-1">
		<CardTitle class="text-2xl text-center mb-1">Create Account</CardTitle>
		<CardDescription class="text-center"
			><span class="text-blue-600">Write Now</span></CardDescription
		>
	</CardHeader>
	<form on:submit|preventDefault={signUpUser}>
		<CardContent class="grid gap-4">
			<div class="grid gap-2">
				<Label for="username">Username</Label>
				<Input id="username" type="text" placeholder="Johan Libert" bind:value={username} />
			</div>
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="name@example.com"
					bind:value={email}
					autocomplete="on"
				/>
			</div>
			<div class="grid gap-2">
				<Label for="password">Password</Label>
				<Input
					id="password"
					type="password"
					placeholder="Your Password"
					bind:value={password}
					autocomplete="off"
				/>
			</div>
		</CardContent>
		<CardFooter>
			<Button
				class="w-full active:scale-95 transition-all duration-200"
				disabled={email.length === 0 || password.length < 6}
				type="submit">Create Free Account</Button
			>
		</CardFooter>
	</form>
	<div class="flex justify-center text-slate-500 pb-4 text-md">
		<p>Already have an Account <a href="/login" class="underline text-blue-500">Login</a></p>
	</div>
</Card>

{#if isPopUpOpen}
	<!-- content here -->
	<div
		in:fly={{ x: 40, duration: 600 }}
		class="absolute right-10 bottom-10 w-80 border border-slate-500 rounded-lg"
	>
		<Alert>
			<MailCheck strokeWidth="1.6px" color="#0051FFFF" />
			<AlertTitle>Check Your Email</AlertTitle>
			<AlertDescription>You have Signup Successfully....</AlertDescription>
		</Alert>
	</div>
{/if}
