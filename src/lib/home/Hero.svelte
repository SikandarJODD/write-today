<script>
	import Button from '$lib/components/ui/button/Button.svelte';
</script>

<div class="px-1">
	<div
		class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		aria-hidden="true"
	>
		<div
			class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div class="mx-auto max-w-2xl py-16 sm:py-28 lg:pt-40">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<div
				class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
			>
				Today never comes again <a href="#" class="font-semibold text-indigo-600 capitalize"
					><span class="absolute inset-0 c" aria-hidden="true" />write your today
					<span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</div>
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				<span class="block xl:inline">Journaling made easy.</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Journaling is a great way to reflect on your day and organize your thoughts. It can also
				help you understand yourself better.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button>Dashboard</Button>
				<Button variant="outline" class="border-slate-700">LogIn</Button>
			</div>
		</div>
	</div>
</div>
