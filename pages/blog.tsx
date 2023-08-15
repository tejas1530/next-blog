import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { GetServerSideProps } from "next";

type Props = {};
interface types {
	userId: number;
	id: number;
	title: string;
	body: string;
	slug: string;
}

const Blog = ({ jsonData }: { jsonData: types[] }) => {
	const [blog, setBlog] = React.useState<types[]>(jsonData);
	
	return (
		<section className="flex  flex-col items-center z-0 ">
			<h1 className="font-bold py-3 font-serif text-center text-3xl md:text-5xl  ">
				Blog
			</h1>
			<div className="h-screen w-screen py-2   flex flex-col items-center  ">
				{/* {jsonData.map((data) => (
					<BlogCard key={data.id} data={data} />
				))} */}
				{blog.map((data)=>(
					<BlogCard key={data.id} data={data} />
				))}
			</div>
		</section>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch("http://localhost:3000/api/blog");

	const jsonData: types[] = await response.json();
	// setBlog(jsonData)

	return {
		props: {
			jsonData,
		},
	};
};

export default Blog;
