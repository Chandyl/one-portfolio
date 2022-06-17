import React from "react";
import breakingbad from "../assets/breakingbad.png";
import crypto from "../assets/crypto.png";
import moment from "../assets/moment.png";
import stytch from "../assets/stytch.png";

const Portfolio = () => {
	return (
		<div
			name="portfolio"
			className="bg-gray-300 w-full text-gray-800 md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-purple-700">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					<div
						style={{ backgroundImage: `url(${stytch})` }}
						className="shadow-lg shadow-[#5f3366] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className=" text-center text-md font-bold text-gray-300 tracking-wider pl-6 pt-2 ml-6">
								AirTravel HTML/CSS only
							</span>
							<div className="pt-8 text-center">
								<a href="https://chandyl.github.io/travels/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Chandyl/travels">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${moment})` }}
						className="shadow-lg shadow-[#5f3366] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-center text-sm font-bold text-gray-200 tracking-wider pl-6 pt-5 ml-2">
								Momentum clone
							</span>
							<div className="pt-8 text-center">
								<a href="https://chandyl.github.io/momentum-clone/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Chandyl/momentum-clone">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${crypto})` }}
						className="shadow-lg shadow-[#5f3366] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-center pl-6 ml-6 text-sm font-bold text-gray-300 ">
								Crypto Prices
								<p className="React and Axios">React and Axios</p>
							</span>
							<div className="pt-8 text-center">
								<a href="https://chandyl.github.io/my-crypto-project/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="https://github.com/Chandyl/my-crypto-project">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${breakingbad})` }}
						className="shadow-lg shadow-[#5f3366] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-5 group-hover:opacity-100">
							<span className="text-center pl-4 ml-2 text-sm font-bold text-gray-300 tracking-wider">
								Breaking Bad Cast
								<p className="React and Axios">React and Axios</p>
							</span>
							<div className="pt-8 text-center">
								<a href="https://chandyl.github.io/breaking-bad-cast/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#f1faee] font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Chandyl/breaking-bad-cast">
									<button className="text-center rounded-lg px-4 py-3 m-2  bg-gray-400 text-[#f1faee] font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
