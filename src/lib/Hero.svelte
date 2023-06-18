<script>
</script>

<section id="hero" class="heroDiv">
	<div>
		<h1>
			Adam
			<br />
			MacDonald
		</h1>
		<p>Front-End Web Developer</p>
		<p>
			JavaScript | TypeScript | Angular | HTML5 | CSS | Bootstrap | React | Webpack | Git | GitHub |
			AWS | Scala
		</p>
	</div>
	<div class="shapeContainer">
		<div class="clipFront" />
		<div class="clipBack" />
	</div>
</section>

<style lang="scss">
	// colours
	$blackish: #201e1f;
	$whitish: #dcdde1;
	$dark-blue: #5339b8;
	$light-blue: #6f67f0;

	.heroDiv {
		display: flex;
		justify-content: space-around;
		align-items: center;

		& * {
			padding: 2vh 2vw;
		}
		h1 {
			border-top: 6px solid #dcdde1;
			font-size: clamp(1.6em, 6vw, 3.5em);
		}
		p {
			border-top: 2px solid #dcdde1;
			line-height: 1.3rem;
		}
	}
	.shapeContainer {
		position: relative;
		width: 550px;
	}
	.clipFront {
		width: 100%;
		height: 50vh;
		clip-path: polygon(50% 5%, 65% 15%, 95% 90%, 70% 80%, 50% 30%, 30% 80%, 5% 90%, 35% 15%);

		background-color: $light-blue;
		box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.726);
	}

	.clipBack {
		z-index: -1;
		position: absolute;

		top: 0;
		right: 0;
		width: 100%;
		height: 50vh;
		clip-path: polygon(
			50% 50%,
			65% 5%,
			90% 25%,
			95% 80%,
			75% 100%,
			75% 35%,
			50% 80%,
			25% 35%,
			25% 100%,
			5% 80%,
			10% 25%,
			35% 5%
		);
		background-color: $dark-blue;
		box-shadow: #05050575;
	}

	@media only screen and (max-width: 1100px) {
		.shapeContainer {
			display: none;
		}
	}
</style>
