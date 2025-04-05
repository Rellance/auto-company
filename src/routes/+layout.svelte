<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Hesader from '../components/Header.svelte';
	let { data, children } = $props();
	const ogUrl = `${data.currentDomain}/`;
</script>

<svelte:head>
	<meta property="og:url" content={ogUrl} />
	<meta property="og:image" content={`${ogUrl}/assets/logo-600x315.png`} />
</svelte:head>

<Hesader />
{@render children()}
<Footer />
