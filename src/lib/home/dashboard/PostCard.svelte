<script>
	import { imgsData } from '$lib/store';
	import Avatar from '$components/ui/avatar/Avatar.svelte';
	import AvatarImage from '$components/ui/avatar/AvatarImage.svelte';
	export let context = '';
	export let username = '';
	export let img = 0;
</script>

<div
	class="flex w-fit rounded-lg border hover:border-slate-500 transition-all duration-200 bg-white m-2"
>
	<div
		class="flex items-start flex-col justify-start p-4 sm:p-6 gap-2 md:min-w-fit md:max-w-[600px]"
	>
		<div class="flex flex-col">
			<h2 class="text-md font-semibold text-gray-800">{context}</h2>
		</div>
		<div class="flex justify-between w-full items-center">
			<div class="flex items-center justify-end w-[100%]">
				<Avatar class="mr-1 h-7 w-7">
					<AvatarImage src={$imgsData[img].src} />
				</Avatar>
				<a class="font-light text-sm" href="/app/profile/{username}"> {username}</a>
			</div>
		</div>
	</div>
</div>
