<script>
	import { fly } from 'svelte/transition'
</script>

<div in:fly={{ x: -100, duration: 300 }} class="grid h-full w-full place-content-center">
	<button
		type="button"
		class="pressable rounded-[0.5rem] bg-cyan-600 px-[1rem] py-[0.75rem] font-semibold text-cyan-900"
	>
		Button
	</button>
</div>
