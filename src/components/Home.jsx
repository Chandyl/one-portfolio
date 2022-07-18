import React from "react";
import selfie from "../assets/selfie.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div name="home" className="h-screen w-full  bg-gray-300">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-6xl pt-24 font-bold py-7 text-white">
						Hello,
					</h2>
					<h2 className="text-4xl sm:text-5xl pr-12 font-bold text-white">
						I'm Stacee Williams
					</h2>
					<p className="text-gray-500 py-7 max-w-md">
					Passionate about helping people solve technical problems and refining my front end web development skills, I am a life-long learner and when I am not glued to the computer screen, I like to spend time cooking, shopping and trying DIY projects. 
					</p>

					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-800 to-gray-400 cursor-pointer"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={selfie}
						alt="selfie"
						className="rounded-2xl my-8 mx-auto w-2/3  md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
