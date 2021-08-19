import { useState } from "react";
import Image from "next/image";

export default function ProductDetail({ title, price, description, image }) {
	const [count, setCount] = useState(1);
	const handleCount = (value) =>
		!(count === 0 && value === -1) ? setCount(count + value) : count;
	return (
		<div className="container relative px-6 pb-6 mx-auto top-24">
			<div className="md:flex md:items-center">
				<div className="w-full h-64 md:w-1/2 lg:h-96">
					<div className="relative object-cover w-full h-full max-w-lg mx-auto rounded-md">
						<Image src={image} layout="fill" objectFit="contain" alt={title} />
					</div>
				</div>
				<div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
					<h3 className="text-lg text-gray-700 uppercase">{title}</h3>
					<span className="mt-3 text-gray-500">${price}</span>
					<hr className="my-3" />
					<div className="mt-2">
						<label className="text-sm text-gray-700" htmlFor="count">
							Count:
						</label>
						<div className="flex items-center mt-1">
							<button
								onClick={() => handleCount(1)}
								className="text-gray-500 focus:outline-none focus:text-gray-600"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
							<span className="mx-2 text-lg text-gray-700">{count}</span>
							<button
								onClick={() => handleCount(-1)}
								className="text-gray-500 focus:outline-none focus:text-gray-600"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</div>
					<div className="flex items-center mt-6">
						<button className="px-8 py-2 text-sm font-medium text-white rounded bg-violet-400 hover:bg-violet-600 focus:outline-none focus:bg-violet-600">
							Order Now
						</button>
						<button className="p-2 mx-2 text-gray-600 border rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
							<svg
								className="w-5 h-5"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className="mt-16 md:w-2/3">
				<h3 className="text-2xl font-medium text-gray-600">Description</h3>
				<p className="mt-1 text-gray-600">{description}</p>
			</div>
		</div>
	);
}
