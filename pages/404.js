export default function Custom404() {
	return (
		<div className="relative min-h-screen">
			{/* background color grid */}
			<div className="absolute inset-0 origin-top-left transform -skew-y-12">
				<div className="grid min-h-screen grid-cols-10 grid-rows-6 bg-red-100 bg-gradient-to-br from-red-400 to-red-200 animate-gradient-to-br">
					<div className="col-span-2 row-start-3 bg-red-200 opacity-50"></div>
					<div className="col-span-2 col-start-9 row-start-5 bg-red-100 opacity-50"></div>
				</div>
			</div>

			<div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
				<div className="relative z-20 py-3 sm:max-w-xl sm:mx-auto">
					<div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-red-400 to-red-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
					<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
						<div className="max-w-md mx-auto">
							<div className="divide-y divide-gray-200">
								<div className="py-6 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
									<div className="pt-4 text-base font-bold leading-6 sm:text-lg sm:leading-7">
										<h1>404 - Page Not Found</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
