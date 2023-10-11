<script lang="ts">
	import { cn } from '$lib/utils'
	import { fly } from 'svelte/transition'

	import { Tile } from './+components'
</script>

<div in:fly={{ x: -100, duration: 300 }} class="max-w-[40rem] p-[3rem] text-[1.125rem]">
	<p>Hola 👋, I’m Daniel.</p>

	<p class="mt-[1.5rem]">
		Currently I'm studying <strong class="font-medium text-green-800">Computer Engineering</strong>
		at ESPOL in Ecuador. I enjoy exploring and experimenting with
		<strong class="font-medium text-blue-800">web development</strong> and that also involves
		<strong class="font-medium text-purple-800">design</strong>.
	</p>

	<p class="mt-[1.5rem]">I've had hands-on experience with:</p>

	<div class="@container">
		<div
			class={cn(
				'mt-[2rem] grid gap-[1.125rem]',
				'@[16.125rem]:grid-cols-[7.5rem_7.5rem]',
				'@[24.75rem]:grid-cols-[7.5rem_7.5rem_7.5rem]',
				'@[33.375rem]:grid-cols-[7.5rem_7.5rem_7.5rem_7.5rem]'
			)}
		>
			<Tile title="Figma" />
			<Tile title="SvelteKit" />
			<Tile title="Next.js" />
			<Tile title="Tailwindcss" />
			<Tile title="Supabase" />
			<Tile title="Sanity" />
			<Tile title="Wordpress" class="opacity-50" />
			<Tile title="Bootstrap" class="opacity-50" />
		</div>
	</div>
</div>
