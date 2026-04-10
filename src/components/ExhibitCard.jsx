import { Link } from "react-router-dom";

export default function ExhibitCard({ exhibit }) {
	return (
		<article className="featured__card">
			<img className="featured__image" src={exhibit.image} alt={exhibit.title} />
			<h3>{exhibit.title}</h3>
			<p className="featured__category">{exhibit.category}</p>
			<p className="featured__description">{exhibit.description}</p>
			<Link to={`/exhibitions/${exhibit.id}`} className="featured__link">
				Read more
			</Link>
		</article>
	);
}
