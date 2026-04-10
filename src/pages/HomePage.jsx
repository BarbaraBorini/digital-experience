import ExhibitCard from "../components/ExhibitCard";
import exhibitions from "../data/exhibitions.json";

export default function HomePage() {
	return (
		<main>
			<Navigation />
            <img className="hero_image" src="../public/images/hero basic.png" alt="Botanical Garden Aarhus" />

            <section className="description">
                <p>The Botanical Garden in Aarhus is one of the largest and oldest parks in Aarhus, and at the same time one of the most visited oases in the city center. Here you can experience all kinds of plants right in the city center, and the garden offers a wealth of exciting experiences for all senses, regardless of whether you are looking for peace and quiet or fun and activity.</p>
			</section>

			<section className="featured">
				<h2>Our Gardens</h2>
				<p className="featured__subtitle">Fan-favorites</p>
				<div className="featured__grid">
					{exhibitions.map((exhibit) => (
						<ExhibitCard key={exhibit.id} exhibit={exhibit} />
					))}
				</div>
            </section>
            <Footer />
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
					placeholder="Search plants..."
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

function Footer() {
    return (
        <footer className="page-footer">
            <h3>Contact</h3>
            <p>Botanical Garden Aarhus</p>
            <p>Address: Mølleparken 1, 8000 Aarhus C</p>
            <p>Phone: +45 1234 5678</p>
            <p>Email: info@botanicalgardenaarhus.dk</p>
            <p>&copy; 2024 Botanical Garden Aarhus. All rights reserved.</p>
        </footer>
    );
}
