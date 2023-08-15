import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

type Props = {};

interface BlogType {
	userId: number;
	id: number;
	title: string;
	body: string;
	slug: string;
}

const slug = ({ jsonData }: { jsonData: BlogType }) => {
	const [blog, setBlog] = React.useState<BlogType | null>(jsonData);

	// const router = useRouter();
	// React.useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const response = await fetch(
	// 				`http://localhost:3000/api/getblog?slug=${slug}`
	// 			);

	// 			if (!response.ok) {
	// 				throw new Error("Failed to fetch data");
	// 			}

	// 			const jsonData: BlogType = await response.json();
	// 			setBlog(jsonData);
	// 			console.log(jsonData);
	// 		} catch (error) {
	// 			console.error("Error:", error);
	// 		}
	// 	}
	// 	// console.log(data);
	// 	fetchData();
	// }, [router.isReady]); // Empty dependency array to ensure the effect runs only once

	console.log(blog);
	return (
		<>
			{blog && (
				<main className="w-screen flex justify-center items-center py-3 md:py-7 border-t border-gray-400">
					<div className="w-screen px-3 md:w-[50%] space-y-4 box-border">
						<div>
							<h1 className="text-2xl">{blog.title}</h1>
							<p className="text-l font-light">
								date day time {blog.userId}
							</p>
							<h3 className="text-xl">{blog.body}</h3>
							<ul className="list-disc ml-3 space-y-2">
								<li>dabkdaskhd</li>
								<li>skvksdbfkjsbfk</li>
								<li>skvksdbfkjsbfk</li>
							</ul>
						</div>
					</div>
				</main>
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug } = context.query;

	const response = await fetch(
		`http://localhost:3000/api/getblog?slug=${slug}`
	);

	const jsonData: BlogType = await response.json();

	return {
		props: {
			jsonData,
		},
	};
};

export default slug;
