<script lang="ts">
	import { onMount } from "svelte";

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
