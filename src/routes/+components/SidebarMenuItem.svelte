<script lang="ts">
	import { cn } from '$lib/utils'
	import type { IconName } from '$lib/utils'
	import { page } from '$app/stores'

	import { Icon } from '$components/icons'

	export let href: string
	export let icon: IconName

	let isActive = false
	$: isActive = href === $page.url.pathname
</script>

<a
	{href}
	class={cn(
		'pressable flex h-[3rem] w-full items-center gap-[0.5rem] rounded-[0.5rem] px-[0.875rem] outline outline-[0.0625rem]',
		'hover:bg-gray-200/60 active:bg-gray-100',
		`${
			isActive
				? 'bg-gray-100 outline-gray-300 hover:outline-gray-300'
				: 'bg-[none] outline-[transparent] hover:outline-gray-300'
		}`
	)}
>
	<Icon {icon} class="h-[1.25rem] w-[1.25rem]" />
	<span>
		<slot />
	</span>
</a>
