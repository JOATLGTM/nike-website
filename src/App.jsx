import {
	Hero,
	PopularProducts,
	CustomerReviews,
	Footer,
	Services,
	Subscribe,
	SuperQuality,
	SpecialOffer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
	return (
		<main className="relative">
			<Nav />
			<section className="xl:padding-1 wide:padding-r padding-b ">
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding-x py-10">
				<SuperQuality />
			</section>
			<section className="padding">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="padding bg-pale-blue">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="padding bg-black padding-x padding-t pb-8">
				<Footer />
			</section>
		</main>
	);
};

export default App;
