<script lang="ts">
	import './projectTileModule.scss';
	import ProjectTile from '$lib/Project/ProjectTile.svelte';

	export let projects: Record<string, string>[] = [];
</script>

<section class="projectSection">
	<h2>Projects</h2>
	<div id="projects" class="projectGrid">
		{#each projects as project}
			<ProjectTile props={project} />
		{/each}
	</div>
</section>
