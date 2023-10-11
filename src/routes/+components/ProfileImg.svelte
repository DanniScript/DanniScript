<script lang="ts">
	import Img from '@zerodevx/svelte-img'
	export let src: string
</script>

<Img class="h-[3rem] w-[3rem] rounded-[0.5rem]" {src} alt="profile image" />
