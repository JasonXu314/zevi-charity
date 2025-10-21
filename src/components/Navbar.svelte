<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/impact">Impact</a>
		</li>
	</ul>
	<ul>
		<li>
			<a href="/donate">Donate</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		ul {
			display: flex;
			flex-direction: row;
			list-style: none;
			padding: 0;

			a {
				color: white;
				padding: 1em 2em;
				text-decoration: none;

				&:hover {
					background-color: #3f3f3f;
				}
			}
		}
	}
</style>
