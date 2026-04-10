import ExhibitCard from "../components/ExhibitCard";
import exhibitions from "../data/exhibitions.json";

export default function HomePage() {
	return (
		<main>
			<Navigation />
			<section className="hero">
				<h1>Botanical Garden Aarhus</h1>
				<p className="hero__tagline">Learn about exotic plants.</p>
			</section>

            <section className="description">
                <p>The Botanical Garden in Aarhus is one of the largest and oldest parks in Aarhus, and at the same time one of the most visited oases in the city center. Here you can experience all kinds of plants right in the city center, and the garden offers a wealth of exciting experiences for all senses, regardless of whether you are looking for peace and quiet or fun and activity.</p>
			</section>

			<section className="featured">
				<h2>Featured</h2>
				<div className="featured__grid">
					{exhibitions.map((exhibit) => (
						<ExhibitCard key={exhibit.id} exhibit={exhibit} />
					))}
				</div>
            </section>
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
