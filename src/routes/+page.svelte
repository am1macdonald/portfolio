<script lang="ts">
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";

	onMount(() => {
		invalidate(() => true);
	});
</script>

<header id="top">
	<slot name="hero" />
</header>

<main>
	<slot name="about" />
	<slot name="projects" />
	<slot name="contact" />
</main>

<slot name="footer" />
