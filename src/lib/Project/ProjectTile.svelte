<script>
	import './projectTileModule.scss';
	import Fa from 'svelte-fa';
	import { faPlay, faDatabase } from '@fortawesome/free-solid-svg-icons';
	export let props;
	const { live, imageURL, repo, title, summaryText } = props;
</script>

<div class="projectTile">
	<div>
		<div>
			<a href={live}>
				<img src={imageURL} alt="thumbnail" class="projectThumbnail" />
			</a>

			<div>
				<div>
					<a href={live}>
						<Fa icon={faPlay} />
					</a>
					<p>Live</p>
				</div>
				<div>
					<a href={repo}>
						<Fa icon={faDatabase} />
					</a>
					<p>Repo</p>
				</div>
			</div>
		</div>

		<div>
			<h3>{title}</h3>
			<!--{marked.parse(summaryText)}-->
		</div>
	</div>
</div>
