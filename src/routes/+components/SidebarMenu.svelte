<script lang="ts">
	import { cn } from '$lib/utils'

	let className = ''
	export { className as class }
</script>

<div class={cn('flex flex-col gap-[0.5rem] px-[1rem]', className)}>
	<slot />
</div>
