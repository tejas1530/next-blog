import React from "react";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
	const links = [
		{
			to: "/",
			name: "Home",
		},
		{
			to: "/blog",
			name: "Blog",
		},
		{
			to: "/about",
			name: "About",
		},
		{
			to: "/contact",
			name: "Contact",
		},
	];
	return (
		<nav className="flex space-x-5 font-serif font-semibold md:space-x-20 md:text-xl py-6 border-b border-gray-400 w-full justify-center  ">
			{links.map((e) => (
				<Link key={e.name} href={e.to}>{e.name}</Link>
			))}
		</nav>
	);
};

export default NavBar;
