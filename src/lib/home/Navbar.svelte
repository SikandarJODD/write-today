<script>
	import Button from './../components/ui/button/Button.svelte';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { User } from 'lucide-svelte';
	import supabase from '$lib/db';
	import { goto } from '$app/navigation';
	import { isWorking } from '$lib/store';

	let isProfileOpen = false;
	let isMenuOpen = false;
	let profileNavs = [
		{
			name: 'Your Profile',
			href: '/app/profile'
		},
		{
			name: 'Settings',
			href: '#'
		}
	];
	let navs = [
		{
			name: 'Dashboard',
			href: '/'
		},
		{
			name: 'Team',
			href: '/team'
		}
	];
	$: isActive = $page.route.id;

	let handleSignOut = () => {
		supabase.auth.signOut();
		isWorking.set(false);
		isProfileOpen = false;
		goto('/');
	};
</script>

<nav class="bg-[#15344b] sticky top-0 backdrop-blur-sm z-30">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden" transition:fade>
				<!-- Mobile menu button-->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (isMenuOpen = !isMenuOpen)}
				>
					<span class="absolute -inset-0.5" />
					<span class="sr-only">Open main menu</span>

					<svg
						class="block h-6 w-6 {isMenuOpen
							? 'hidden'
							: 'block'} transition-all duration-400 ease-in"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>

					<svg
						class=" h-6 w-6 {isMenuOpen ? 'block' : 'hidden'} transition-all duration-400 ease-in"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a href="/">
						<img
							class="h-8 w-auto rounded-md"
							src="https://i.pinimg.com/564x/45/32/60/45326058a8c932bba76cef5e3e088c90.jpg "
							alt="Your Company"
						/>
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

						{#each navs as nav}
							<a
								href={nav.href}
								class="{isActive === nav.href
									? 'bg-gray-900 text-white'
									: 'text-gray-200'} hover:bg-gray-900/60 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>{nav.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				{#if !$isWorking}
					<Button href="/login" class="border border-cyan-500 hidden md:flex mr-2">
						<User size="18" strokeWidth="1.7px" class="mr-1" /> Sign In
					</Button>
				{/if}

				<!-- Profile dropdown -->
				<div class="relative ml-3">
					<div>
						<button
							type="button"
							class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							on:click={() => (isProfileOpen = !isProfileOpen)}
						>
							<span class="absolute -inset-1.5" />
							<span class="sr-only">Open user menu</span>
							<img
								class="h-8 w-8 rounded-full"
								src="https://i.pinimg.com/564x/09/81/8c/09818cb37cc57a59e67d6fcafd51e82d.jpg"
								alt="Profile Name"
							/>
						</button>
					</div>

					<!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
					<div
						class="{isProfileOpen
							? 'transition ease-out duration-100 opacity-100'
							: 'transform opacity-0 scale-95'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
					>
						<!-- Active: "bg-gray-100", Not Active: "" -->

						{#each profileNavs as item}
							<a
								on:click={() => (isProfileOpen = false)}
								href={item.href}
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none border-none"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">{item.name}</a
							>
						{/each}
						<button
							on:click={handleSignOut}
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none border-none w-full text-left"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-0">Logout</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div
		class="sm:hidden {isMenuOpen ? 'block' : 'hidden '}"
		id="mobile-menu"
		in:fly={{ y: 200, duration: 3000 }}
	>
		<div class="space-y-1 px-2 pb-3 pt-2" in:fly={{ y: 200, duration: 3000 }}>
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

			{#each navs as item}
				<a
					href={item.href}
					class="{isActive === item.href
						? 'bg-gray-900 text-white'
						: 'text-gray-300'}  hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
					>{item.name}</a
				>
			{/each}
		</div>
	</div>
</nav>
