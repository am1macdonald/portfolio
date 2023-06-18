<section id="about" class="aboutSection">
	<div>
		<h2>About me</h2>

		<p>I'm a full-stack developer located in Toronto.</p>

		<p>
			As a full-stack developer with a year of experience in the field, I am passionate about web
			development and eager to continue learning and growing in my career. My background in
			industrial automation and railway signalling has given me a strong foundation in
			problem-solving and logical thinking, which I apply to my work as a developer. I have built
			many projects using technologies such as HTML, CSS, JavaScript, Angular, React, and
			Test-driven Development. I am always looking for new challenges and opportunities in the field
			of software development, and I am excited to see what the future holds.
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
