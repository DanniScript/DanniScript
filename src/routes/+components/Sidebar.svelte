<script lang="ts">
	import { cn } from '$lib/utils'

	let className = ''
	export { className as class }
</script>

<div class={cn('py-[1rem]', className)}>
	<slot />
</div>
