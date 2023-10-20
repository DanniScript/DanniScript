<script lang="ts">
	import { cn } from '$lib/utils'

	let classes = ''
	export { classes as class }
</script>

<button
	type="button"
	class={cn(
		'pressable w-min whitespace-nowrap rounded-[0.5rem] bg-cyan-600 px-[1rem] py-[0.75rem] font-semibold text-cyan-900',
		'transition-transform duration-150 ease-out active:translate-x-[0.15rem] active:translate-y-[0.15rem]',
		classes
	)}
>
	<slot>Button</slot>
</button>
