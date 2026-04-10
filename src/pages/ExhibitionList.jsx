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
			<ul className="page-nav__list">
				<li><a href="/">Home</a></li>
				<li><a href="/exhibitions">Exhibitions</a></li>
			</ul>
		</nav>
	);
}
