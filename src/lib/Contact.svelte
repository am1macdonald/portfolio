<script>
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
</script>

<section id="contact" class="contactSection">
	<div>
		<h3>Connect with me!</h3>
		<ul>
			<li>
				<a title="LinkedIn" href="https://www.linkedin.com/in/am1macdonald/">
					<Fa icon={faLinkedin} />
				</a>
			</li>
			<li>
				<a title="GitHub" href="https://github.com/am1macdonald">
					<Fa icon={faGithub} />
				</a>
			</li>
			<li>
				<a title="Twitter" href="https://twitter.com/xAMacDonaldx/with_replies">
					<Fa icon={faTwitter} />
				</a>
			</li>
			<li>
				<a title="Google form" href="https://forms.gle/DhZ2s6FkFkbwyF118">
					<Fa icon={faEnvelope} />
				</a>
			</li>
		</ul>
	</div>
</section>

<style lang="scss">
	// colours
	$blackish: #201e1f;
	$whitish: #dcdde1;
	$dark-blue: #5339b8;
	$light-blue: #6f67f0;

	.contactSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		ul {
			display: flex;
			gap: 5vw;
		}
		h3 {
			font-size: 1.3rem;
			padding: 1rem 0;
		}
		a {
			text-decoration: none;
			font-size: 3em;
			color: $whitish;
		}
	}
</style>
