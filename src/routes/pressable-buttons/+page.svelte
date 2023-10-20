<script>
	import { fly } from 'svelte/transition'
	import { Button, PressButton } from '$components/buttons'
</script>

<div in:fly={{ x: -100, duration: 300 }} class="grid h-full w-full place-content-center gap-[1rem]">
	<Button class="bg-cyan-600 text-cyan-900">Press me!</Button>

	<PressButton>Another Button</PressButton>
</div>
