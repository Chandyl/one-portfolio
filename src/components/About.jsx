import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-gray-300 text-gray-800">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-purple-700">
						About
					</p>
					<p className="text-xl text-gray-800 mt-5">
						I am not your normal developer
					</p>
				</div>

				<p className="py-2 text-gray-800">
					I decided to change my occupation after 15 plus years of working and
					owning my own hair salon. I still like doing hair and communicating
					with people, but I have always had a knack for technology and working
					with computers. In 2017, I took time off to care for family. In that
					time I decided to take a course on HTML/CSS and it was then I
					discovered my love for programming. Fascinated with how intricate
					programming can be, I was quickly drawn to learn more. I started
					learning JavaScript and was even more enthused with making websites
					interactive.
				</p>

				<p className="py-2 text-gray-800">
					At the start of the pandemic, I had planned to return to the salon but
					was not able to. I started going to school full time. I quickly
					realized I was ready for a fresh change in my career.
				</p>

				<p className="py-2 text-gray-800">
					I have learned many new things about programming but I am still
					wanting to learn more. I have graduated and looking for a full-time
					position. I believe that a person should work on developing their
					professional skills and learning new things all the time. Personally,
					I am motivated by continuous improvement and personal growth. It is
					never to late to learn whatever may spark your interests.
				</p>
			</div>
		</div>
	);
};

export default About;
