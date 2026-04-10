import ExhibitCard from "../components/ExhibitCard";
import exhibitions from "../data/exhibitions.json";

export default function ExhibitionList() {
	return (
		<main>
			<Navigation />
			<h1>Exhibitions</h1>
			<div className="featured__grid">
				{exhibitions.map((exhibit) => (
					<ExhibitCard key={exhibit.id} exhibit={exhibit} />
				))}
			</div>
		</main>
	);
}

function Navigation() {
	return (
		<nav className="page-nav">
			<a className="page-nav__brand" href="/">Botanical Garden Aarhus</a>
			<form className="page-nav__search" role="search">
				<input
					type="search"
					name="q"
					placeholder="Search plants..."
					aria-label="Search"
				/>
			</form>
			<ul className="page-nav__list">
				<li><a href="/">Home</a></li>
				<li><a href="/exhibitions">Exhibitions</a></li>
				<li><a href="https://www.youtube.com/shorts/Rop777mcZ1U" target="_blank" rel="noreferrer">PLANT OF THE DAY</a></li>
			</ul>
		</nav>
	);
}
