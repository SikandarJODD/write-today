<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { Pen } from 'lucide-svelte';
	import { imgsData, imgno, userDesc, username } from '$lib/store';
	let isMenuOpen = true;
	let isProfileOpen = false;
	$: {
		if (isProfileOpen) {
			setTimeout(() => {
				isProfileOpen = false;
			}, 3000);
		}
	}
	let profileNavs = [
		{
			name: 'Your Profile',
			href: '/app/profile'
		},
		{
			name: 'Logout',
			href: '/'
		}
	];
	let sideNavs = [
		{
			name: 'Dashboard',
			href: '/app/dashboard',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
		},
		{
			name: 'Posts',
			href: '/app/posts',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`
		}
	];
	$: isActive = $page.route.id;

	// Let Profiles

	$: console.log($imgno, $username, $userDesc, 'wo');
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
		<!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
		<div
			class=" {isMenuOpen
				? 'transition-opacity ease-linear duration-300 opacity-0 '
				: 'opacity-100 transition-opacity ease-linear duration-300 fixed inset-0 '} fixed top-0 -z-10 bg-gray-900/80"
		/>

		<div
			class="{isMenuOpen
				? ' opacity-0 hidden'
				: ' opacity-100 fixed inset-0'}  fixed top-0 flex -z-10"
		>
			<div
				class="{isMenuOpen
					? 'transition ease-in-out duration-300 transform -translate-x-full'
					: 'transition ease-in-out duration-300 transform translate-x-0'} relative mr-16 flex w-full max-w-xs flex-1"
			>
				<!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
				<div
					class="{isMenuOpen
						? 'ease-in-out duration-300 opacity-0 '
						: ' opacity-100 ease-in-out duration-300'} absolute left-full top-0 flex w-16 justify-center pt-5"
				>
					<button
						type="button"
						class="-m-2.5 p-2.5 border-none outline-none"
						on:click={() => {
							isMenuOpen = !isMenuOpen;
							console.log('Clicked');
						}}
					>
						<span class="sr-only">Close sidebar</span>
						<svg
							class="h-6 w-6 text-white"
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

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
					<div
						class="flex h-16 shrink-0 items-center gap-3 bg-gray-200/80 justify-center rounded-xl mt-2"
					>
						<img
							class="h-10 w-auto rounded-full"
							src="https://i.pinimg.com/564x/f1/b9/49/f1b949ff0694ee4d2c7c219c5237d6be.jpg"
							alt="Your Company"
						/>
						<h1 class="text-lg font-mono">Write Your Today</h1>
					</div>
					<nav class="flex flex-1 flex-col">
						<ul role="list" class="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" class="-mx-2 space-y-1">
									<!-- <li>
										Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
										<a
											href="#"
											class="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<svg
												class="h-6 w-6 shrink-0 text-indigo-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
												/>
											</svg>
											Dashboard
										</a>
									</li>
									<li>
										<a
											href="#"
											class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<svg
												class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
												/>
											</svg>
											Team
										</a>
									</li> -->
									{#each sideNavs as item}
										<li>
											<a
												on:click={() => (isMenuOpen = true)}
												href={item.href}
												class=" {isActive === item.href
													? 'text-blue-500 '
													: 'text-gray-500'} hover:text-blue-500 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											>
												{@html item.icon}
												{item.name}
											</a>
										</li>
									{/each}
								</ul>
							</li>
							<li>
								<div class="text-xs font-semibold leading-6 text-gray-400">Following</div>
								<ul role="list" class="-mx-2 mt-2 space-y-1">
									<li>
										<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
										<a
											href="#"
											class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<span
												class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
												>H</span
											>
											<span class="truncate">Svelte</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<span
												class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
												>T</span
											>
											<span class="truncate">SvelteKit</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<span
												class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
												>W</span
											>
											<span class="truncate">Supabase</span>
										</a>
									</li>
								</ul>
							</li>
							<li class="mt-auto">
								<a
									href="/app/create"
									class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white bg-gray-900 items-center justify-center mx-2"
									on:click={() => (isMenuOpen = true)}
								>
									<Pen strokeWidth="1.5px" size="18" />
									Create Post
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div
			class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
		>
			<div class="flex h-16 shrink-0 items-center gap-3 cursor-pointer">
				<img
					class="h-12 rounded-full w-auto"
					src="https://i.pinimg.com/564x/f1/b9/49/f1b949ff0694ee4d2c7c219c5237d6be.jpg"
					alt="Your Company"
				/>
				<h1 class="font-mono md:text-xl">Write Now...</h1>
			</div>
			<nav class="flex flex-1 flex-col">
				<ul role="list" class="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" class="-mx-2 space-y-1">
							{#each sideNavs as item}
								<li>
									<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
									<a
										href={item.href}
										class="hover:bg-gray-100 hover:text-gray-800 bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold {isActive ===
										item.href
											? 'text-blue-500'
											: 'text-gray-700/70'}"
									>
										{@html item.icon}
										{item.name}
									</a>
								</li>
							{/each}
							<!-- <li>
								 Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" 
								<a
									href="#"
									class="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
									<svg
										class="h-6 w-6 shrink-0 text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#"
									class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
									<svg
										class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
										/>
									</svg>
									Team
								</a>
							</li> -->
						</ul>
					</li>
					<li>
						<div class="text-xs font-semibold leading-6 text-gray-400">Following</div>
						<ul role="list" class="-mx-2 mt-2 space-y-1">
							<li>
								<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
								<a
									href="#"
									class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
									<span
										class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
										>S</span
									>
									<span class="truncate">Svelte</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
									<span
										class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
										>S</span
									>
									<span class="truncate">SvelteKit</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
									<span
										class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
										>S</span
									>
									<span class="truncate">Supabase</span>
								</a>
							</li>
						</ul>
					</li>
					<li class="mt-auto">
						<a
							href="/app/create"
							class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-bold leading-6 text-zinc-800 hover:bg-gray-900 hover:text-white border border-slate-500 bg-gray-200 justify-center items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-pen"
								><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg
							>
							Create Post
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div class="lg:pl-72">
		<div
			class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
			in:fade
		>
			<button
				type="button"
				class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
				on:click={() => (isMenuOpen = !isMenuOpen)}
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="h-6 w-6"
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
			</button>

			<!-- Separator -->
			<div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

			<div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
				<form class="relative flex flex-1" action="#" method="GET">
					<label for="search-field" class="sr-only">Search</label>
					<svg
						class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clip-rule="evenodd"
						/>
					</svg>
					<input
						id="search-field"
						class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm outline-none"
						placeholder="Search..."
						type="search"
						name="search"
					/>
				</form>
				<div class="flex items-center gap-x-4 lg:gap-x-6">
					<button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
						<span class="sr-only">View notifications</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
							/>
						</svg>
					</button>

					<!-- Separator -->
					<div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

					<!-- Profile dropdown -->
					<div class="relative">
						<button
							type="button"
							class="-m-1.5 flex items-center p-1.5 outline-none border-none group z-50"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							on:click={() => {
								isProfileOpen = !isProfileOpen;
								console.log('Clickeddd');
							}}
						>
							<span class="sr-only">Open user menu</span>
							<img
								class="h-10 w-10 rounded-full bg-gray-50 ring-1 ring-gray-400"
								src={$imgsData[$imgno].src ||
									'https://i.pinimg.com/564x/9b/fd/d5/9bfdd53be19cb460e83cbfd735f88516.jpg'}
								alt=""
							/>
							<span class="hidden lg:flex lg:items-center">
								<span
									class="ml-4 text-sm font-semibold leading-6 text-gray-700 font-mono md:text-[18px] md:font-light group-hover:text-gray-900"
									aria-hidden="true"
									>{$username || 'Lofi'}
								</span>
								<svg
									class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</button>

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
								? 'transition ease-out duration-100 transform opacity-100 scale-100'
								: ' hidden transform opacity-0 scale-95'}  absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-50", Not Active: "" -->
							{#each profileNavs as item}
								<a
									href={item.href}
									class="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-100/80 outline-none"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">{item.name}</a
								>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>

		<main class="py-10">
			<div class="px-4 sm:px-6 lg:px-8">
				<!-- Your content -->
				<slot />
			</div>
		</main>
	</div>
</div>
