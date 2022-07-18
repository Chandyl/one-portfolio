import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-gray-300 text-gray-800">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-">
					<p className="text-4xl font-bold inline  border-b-4 border-purple-700">
						About
					</p>
					<p className="text-xl text-gray-800 mt-5">
						I am not your normal developer.
					</p>
				</div>

				<p className="py-2 text-gray-800">
					I decided I needed a fresh change in my career after 15 plus years of working and
					owning my own hair salon. I have always had a knack for technology and working
		      with computers. In 2018, I took an HTML/CSS course and it was then I
					discovered my love for programming. Fascinated with how intricate
					programming can be, I was quickly drawn to learning more. I started
					learning JavaScript and was even more enthused with making websites
					interactive. I started going to school full-time, working on a business support degree
					and taking programming courses.	I have graduated and looking for a full-time customer support position.  
				</p>

				<p className="py-2 text-gray-800">
				 Being a hair stylist for many years has taught me a unique set of skills. I want to use those skills with my technology proficiency to provide excellent customer support. I am still committed to learning programming, but still have plenty to learn. </p>

				<p className="py-2 text-gray-800">
				  I believe that a person should work on developing their
					professional skills and learning new things all the time. Personally,
					I am motivated by continuous improvement and personal growth. It is
					never to late to learn whatever may spark your interests.
				</p>
			</div>
		</div>
	);
};

export default About;
