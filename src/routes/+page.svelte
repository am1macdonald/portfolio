<script>
import Projects from "$lib/Project/Projects.svelte";
import Hero from "$lib/Hero.svelte";
import Footer from "$lib/Footer.svelte";
import Contact from "$lib/Contact.svelte";
import About from "$lib/About.svelte";
export let data;

$: projectData = data.projectData;
</script>

<header id="top">
	<Hero slot="hero" />
</header>

<main>
	<About slot="about" />
	<Projects slot="projects" projects={projectData} />
	<Contact slot="contact" /></main>

<Footer slot="footer" />

