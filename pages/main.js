import Image from "next/image";

const defaultEndpoint = "https://fakestoreapi.com/products";

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
			{/* background color grid */}
			<div className="absolute inset-0 origin-top-left transform -skew-y-12">
				<div className="grid min-h-screen grid-cols-10 grid-rows-6 bg-emerald-100 bg-gradient-to-br from-emerald-400 to-emerald-200 animate-gradient-to-br">
					<div className="col-span-2 row-start-3 opacity-50 bg-emerald-200"></div>
					<div className="col-span-2 col-start-9 row-start-5 opacity-50 bg-emerald-100"></div>
				</div>
			</div>

			{results.map((result) => (
				<div key={result.id} className="relative w-48 h-60">
					<Image src={result.image} layout="fill" alt="Product image" />
				</div>
			))}
		</div>
	);
}
