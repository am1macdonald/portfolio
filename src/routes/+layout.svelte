<script>
	import '../reset.scss';
	import '../global.scss';
	import Hero from '$lib/Hero.svelte';
	import About from '$lib/About.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Contact from '$lib/Contact.svelte';
	import Projects from '$lib/Project/Projects.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
  import { invalidateAll } from "$app/navigation";

	inject({ mode: dev ? 'development' : 'production' });

  export let data;

  const {projectData} = data;
  invalidateAll();

</script>

<Navbar slot="navbar" />
<Hero slot="hero" />
<About slot="about" />
<Projects slot="projects" projects="{projectData}" />
<Contact slot="contact" />
<Footer slot="footer" />
