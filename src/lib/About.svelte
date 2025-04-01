<section id="about" class="aboutSection">
	<div>
		<h2>About me</h2>
		<p>
                        I'm Adam MacDonald, a Senior Full-Stack Developer with 2+ years of professional experience
			who has found my true calling in back-end and infrastructure engineering. With expertise in JavaScript,
			Scala, and Go, I specialize in building scalable server-side systems, optimizing database architectures, 
			and implementing DevOps solutions including Docker containerization and CI/CD pipelines.
		</p>
		<br>
		<p>
			At Urbint (formerly ComPeters Inc.), I've enhanced GeoServer configurations, optimized PostGIS database schemas,
			and developed efficient Node.js server routes—reducing map loading times from 90 seconds to under 10 and designing 
			flexible search systems that support ~50 customizable parameters. I'm now seeking opportunities to leverage my
			technical expertise in back-end engineering and infrastructure management roles where I can continue building reliable,
			scalable systems.
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
