<nav class="nav">
	<ul class="navlist">
		<li>
			<a href="#top">top</a>
		</li>
		<li>
			<a href="#about">about</a>
		</li>
		<li>
			<a href="#projects">projects</a>
		</li>
		<li>
			<a href="#contact">contact</a>
		</li>
		<!--		<li>-->
		<!--			<a href="#">blog</a>-->
		<!--		</li>-->
	</ul>
</nav>

<style lang="scss">
	.nav {
		position: fixed;
		z-index: 1000;

		display: flex;
		flex-direction: row;
		justify-content: right;
		align-items: center;

		width: 100vw;
		min-height: 5vh;

		padding: 0;
	}

	.navlist {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		height: 5vh;
		padding: 0 max(2.5vw, 25px);

		background: rgb(32, 30, 31);
		background: linear-gradient(
			90deg,
			rgba(32, 30, 31, 0) 0%,
			rgba(32, 30, 31, 0.2) 5%,
			rgba(32, 30, 31, 0.3) 15%,
			rgba(32, 30, 31, 0.5) 45%,
			rgba(32, 30, 31, 0.5) 100%
		);

		box-shadow: 1vw 2px 20px 1px #201e1f6d;
		li {
			a {
				text-decoration: none;
				color: #dcdde1;
			}
		}
	}

	@media only screen and (max-width: 450px) {
		.nav {
			justify-content: center;
			align-items: center;
		}
		.navlist {
			width: 100%;
			justify-content: space-around;
			padding: 1vw;
		}
	}
</style>
