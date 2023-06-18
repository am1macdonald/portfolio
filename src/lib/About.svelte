<section id="about" class="aboutSection">
	<div>
		<h2>About me</h2>

		<p>I'm a front-end developer located in Toronto.</p>

		<p>
			Coming from a background in railway signalling, I am applying the critical thinking and
			analytical skills I've honed from years of troubleshooting relay logic systems to producing
			high-quality web pages and applications.
		</p>
	</div>
</section>

<style lang="scss">
	.aboutSection {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 2vw;

		div {
			max-width: 90vw;
			padding: 2vw;
			h2 {
				font-size: clamp(1.5em, 5vw, 2.5em);
				margin-bottom: 3vh;
			}
			p:first-of-type {
				margin-bottom: 1vh;
			}
			p {
				text-align: justify;

				line-height: 1.4em;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		.aboutSection {
			margin: 0;
			padding: 0;
		}
	}
</style>
