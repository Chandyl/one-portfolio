import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
	return (
		<div name="contact" className="w-full h-auto bg-gray-300">
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-800">
				<div>
					<p className="text-4xl text-gray-800 font-bold border-b-4 border-purple-700 p-2 inline">
						Contact
					</p>
					<p className="py-6">Get In Touch</p>
				</div>
				<div className="grid lg:grid-cols-5 gap-4">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-purple-400 rounded-xl p-4">
						<div className="lg:p-4 h-full ">
							<div>
								<img
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_960_720.jpg"
									alt="/"
								/>
							</div>
							<div>
								<h2 className="py-2 text-gray">Stacee Williams</h2>
								<p className="text-gray">
									I am currently doing some freelance work while looking for a
									full-time position .
								</p>
							</div>
							<div>
								<p className="uppercase pt-16 text-purple">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									<div className="rounded-full shadow-lg shadow-purple-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-300">
										<a href="https://www.linkedin.com/in/staceewills/">
											<FaLinkedinIn />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-purple-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-300">
										<a href="https://github.com/Chandyl">
											<FaGithub />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-purple-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-300">
										<a href="mailto:marieclapp@gmail.com">
											<AiOutlineMail />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-purple-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form
								action="https://formeezy.com/api/v1/forms/6288455b0efd5c00093cab73/submissions"
								method="POST"
							>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2 text-gray">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2 text-gray">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2 text-gray">
										Email
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2 text-gray">
										Subject
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2 text-gray">
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										rows="6"
									></textarea>
								</div>
								<button className="w-full p-4 text-gray mt-4 cursor-pointer hover:scale-110 ease-in duration-300">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
