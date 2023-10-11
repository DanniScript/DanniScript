<script lang="ts">
	import { cn } from '$lib/utils'
	import { icons } from '$lib/utils/icons'
	import type { IconName } from '$lib/utils'

	export let icon: IconName
	let classes = ''
	export { classes as class }
</script>

<svg class={cn('h-[3.75rem] w-[3.75rem] text-gray-700', classes)} viewBox="0 0 60 60" fill="none">
	<path fill-rule="evenodd" clip-rule="evenodd" d={icons[icon]} fill="currentColor" />
</svg>
