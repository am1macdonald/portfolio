<section id="about" class="aboutSection">
	<div>
		<h2>About me</h2>
		<p>
			As a full-stack developer based in Toronto, I leverage a deep passion for web development and
			an incessant thirst for knowledge to drive my career forward. My robust background in
			industrial automation and railway signalling has honed my problem-solving and logical thinking
			skills, proving instrumental in my success as a developer.
		</p>
		<br>
		<p>
			I have extensive experience working with various technologies such as HTML, CSS,
			JavaScript, Angular, and React. I have demonstrated my proficiency in these tools throughout
			my career by applying them across many successful projects.
		</p>
		<br>
		<p>
			Grounded in a solid commitment to excellence, I consistently seek to overcome new
			challenges and capitalize on opportunities within the dynamic landscape of software
			development. I look forward to harnessing my expertise and unwavering enthusiasm to contribute
			to future innovations in the field.
		</p>
	</div>
</section>

<style lang="scss">
	.aboutSection {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2vw;

		div {
			max-width: 90vw;
			padding: 2vw;
			h2 {
				font-size: clamp(1.5em, 5vw, 2.5em);
				margin-bottom: 3vh;
			}
			p {
				text-align: justify;
				line-height: 1.4em;
				letter-spacing: 0.02em;

				max-width: 600px;
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
