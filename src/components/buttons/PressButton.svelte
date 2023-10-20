<script lang="ts">
	import { cn } from '$lib/utils'
</script>

<div class="relative w-min">
	<div
		class="absolute left-[0.25rem] top-[0.25rem] h-full w-full rounded-[0.5rem] bg-cyan-900"
	></div>
	<button
		type="button"
		class={cn(
			'relative whitespace-nowrap rounded-[0.5rem] bg-cyan-600 px-[1rem] py-[0.75rem] font-semibold text-cyan-900',
			'transition-transform duration-150 ease-out active:translate-x-[0.25rem] active:translate-y-[0.25rem]'
		)}
	>
		<slot>Button</slot>
	</button>
</div>
