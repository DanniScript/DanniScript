<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'

	export let href: string

	let isActive = false
	$: isActive = href === $page.url.pathname
</script>

<a
	class={cn(
		'pressable h-[2rem] px-[0.875rem] hover:underline',
		`${isActive ? 'underline' : 'no-underline'}`
	)}
	{href}
>
	<slot />
</a>
