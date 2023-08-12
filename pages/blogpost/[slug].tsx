import React from "react";
import { useRouter } from "next/router";

type Props = {};

const slug = (props: Props) => {
	const router = useRouter();
  const {slug}=router.query
	return <>
		<h1>this is {slug}</h1>
	</>;
};

export default slug;
