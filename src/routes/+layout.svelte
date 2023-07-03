<script>
	import '../reset.scss';
	import '../global.scss';
	import Navbar from '$lib/Navbar.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

</script>

<Navbar slot="navbar" />
<slot></slot>
