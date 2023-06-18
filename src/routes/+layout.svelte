<script>
	import '../reset.scss';
	import '../global.scss';
	import Hero from '$lib/Hero.svelte';
	import About from '$lib/About.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
</script>

<Navbar slot="navbar" />
<Hero slot="hero" />
<About slot="about" />
<Footer slot="footer" />
<Projects slot="projects" />
<Contact slot="contact" />
