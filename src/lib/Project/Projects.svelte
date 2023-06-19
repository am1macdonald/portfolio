<script>
	import './projectTileModule.scss';
	import ProjectTile from '$lib/Project/ProjectTile.svelte';

	const projects = [];
</script>

<section class="projectSection">
	<h2>Projects</h2>
	<div id="projects" class="projectGrid">
		{#each projects as project}
			<ProjectTile props={project} />
		{/each}
	</div>
</section>
