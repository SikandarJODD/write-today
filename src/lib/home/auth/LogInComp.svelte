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
	import { isLoggedIn } from '$lib/store';

	let email = '';
	let password = '';
	let isPopUpOpen = false;
	let isErrorText = 'You have Login Successfully';

	let loginUser = async () => {
		try {
			const { user, session, error } = await supabase.auth.signIn({
				email: email,
				password: password
			});
		} catch (error) {
			console.log(error);
		} finally {
			isLoggedIn.set(true);
			isPopUpOpen = true;
			setTimeout(() => {
				isPopUpOpen = false;
				goto('/app/dashboard');
			}, 1300);
			email = '';
			password = '';
		}
	};
</script>

<Card
	class="md:max-w-sm mx-auto items-center md:mt-32 md:shadow-lg md:shadow-slate-400/60 border-slate-300"
>
	<CardHeader class="space-y-1">
		<CardTitle class="text-2xl text-center mb-1">Login to Continue</CardTitle>
		<CardDescription class="text-center"
			><span class="text-blue-600">Write Now</span></CardDescription
		>
	</CardHeader>
	<CardContent class="grid gap-4">
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="name@example.com" bind:value={email} />
		</div>
		<div class="grid gap-2">
			<Label for="password">Password</Label>
			<Input id="password" type="password" placeholder="Password" bind:value={password} />
		</div>
	</CardContent>
	<CardFooter>
		<Button
			on:click={loginUser}
			class="w-full active:scale-95 transition-all duration-200"
			disabled={email.length === 0 && password.length < 6}>Free Login</Button
		>
	</CardFooter>
	<div class="flex justify-center text-slate-500 pb-4 text-md">
		<p>No Account <a href="/signup" class="underline text-blue-500">Sign Up</a></p>
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
			<AlertTitle>Logged In</AlertTitle>
			<AlertDescription>You have Login Successfully....</AlertDescription>
		</Alert>
	</div>
{/if}
