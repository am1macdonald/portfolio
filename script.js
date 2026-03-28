document.addEventListener("DOMContentLoaded", () => {
	fetch("projects.json")
		.then((res) => res.json())
		.then((projects) => {
			const grid = document.getElementById("projects");
			projects.filter((p) => p.render !== false).forEach((p) => {
				const tile = document.createElement("div");
				tile.className = "projectTile";
				tile.innerHTML = `
						<div class="tileMedia">
							<a href="${p.live_url}">
								<img src="${p.image_url}" alt="${p.title} thumbnail" class="projectThumbnail" />
							</a>
							<div class="tileLinks">
								<div>
									<a href="${p.live_url}"><i class="fa-solid fa-play"></i></a>
									<p>Live</p>
								</div>
								<div>
									<a href="${p.repo_url}"><i class="fa-solid fa-database"></i></a>
									<p>Repo</p>
								</div>
							</div>
						</div>
						<div class="tileInfo">
							<h3>${p.title}</h3>
							<pre>${p.summary}</pre>
						</div>`;
				grid.appendChild(tile);
			});
		});
});
