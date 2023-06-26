<script>
	import './projectTileModule.scss';
	import Fa from 'svelte-fa';
	import { faPlay, faDatabase } from '@fortawesome/free-solid-svg-icons';
	export let props;
	const { live_url, image_url, repo_url, title, summary } = props;

</script>

<div class="projectTile">
	<div>
		<div>
			<a href={live_url}>
				<img src={image_url} alt="{title} thumbnail" class="projectThumbnail" />
			</a>

			<div>
				<div>
					<a href={live_url}>
						<Fa icon={faPlay} />
					</a>
					<p>Live</p>
				</div>
				<div>
					<a href={repo_url}>
						<Fa icon={faDatabase} />
					</a>
					<p>Repo</p>
				</div>
			</div>
		</div>

		<div>
			<h3>{title}</h3>
			<pre>{summary}</pre>
		</div>
	</div>
</div>
