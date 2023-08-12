import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

type Props = {
  
};
interface types {
	userId: number;
	id: number;
	title: string;
	body: string;
  slug:string
}

const Blog = (props: Props) => {
	const [blog, setBlog] = React.useState<types[]>([]);
	React.useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("http://localhost:3000/api/blog");

				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const jsonData: types[] = await response.json();
				setBlog(jsonData);
				// console.log(jsonData);
			} catch (error) {
				console.error("Error:", error);
			}
		}
		// console.log(data);
		fetchData();
	}, []); // Empty dependency array to ensure the effect runs only once

	return (
		<section className="flex  flex-col items-center ">
			<h1 className="font-bold py-3 font-serif text-center text-3xl md:text-5xl  ">
				Blog
			</h1>
			<div className="h-screen w-screen py-2   flex flex-col items-center  ">
				{
      blog.map((data)=>(
        <BlogCard key={data.id} data={data} />
      ))
     }
				{/* <BlogCard /> */}
			</div>
		</section>
	);
};

export default Blog;
