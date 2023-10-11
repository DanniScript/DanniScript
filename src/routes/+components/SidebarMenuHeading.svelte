<script lang="ts">
	import { cn } from '$lib/utils'

	let className = ''
	export { className as class }
</script>

<h6 class={cn('text-[0.875rem] text-gray-400', className)}>
	<slot />
</h6>
