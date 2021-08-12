import Card from "../components/Card";

const defaultEndpoint =
	"https://fakestoreapi.com/products/category/electronics";

export const getStaticProps = async () => {
	const res = await fetch(defaultEndpoint);
	const data = await res.json();

	return {
		props: {
			results: data,
		},
	};
};

export default function Main({ results }) {
	return (
		<div className="relative min-h-screen">
			{/* background color grid start */}
			<div className="absolute inset-0 origin-top-left transform -skew-y-12">
				<div className="grid min-h-screen grid-cols-10 grid-rows-6 bg-emerald-100 bg-gradient-to-br from-emerald-400 to-emerald-200 animate-gradient-to-br">
					<div className="col-span-2 row-start-3 opacity-50 bg-emerald-200"></div>
					<div className="col-span-2 col-start-9 row-start-5 opacity-50 bg-emerald-100"></div>
				</div>
			</div>

			<div className="container relative px-6 pb-6 mx-auto overflow-y-hidden top-24">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{results.map((result) => (
						<Card key={result.id} {...result} />
					))}
				</div>
				{/* background color grid end */}
				<div className="absolute inset-x-0 bottom-0 top-auto origin-bottom-right transform -skew-y-12 sm:hidden">
					<div className="grid min-h-screen grid-cols-10 grid-rows-6 bg-emerald-100 bg-gradient-to-br from-emerald-200 to-emerald-400 animate-gradient-to-br">
						<div className="col-span-2 row-start-3 opacity-50 bg-emerald-100"></div>
						<div className="col-span-2 col-start-9 row-start-5 opacity-50 bg-emerald-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
