import type { NextPage } from "next";
import Head from "next/head";
import Gome from "./home";
// import styles from '../styles/Home.module.css'
// import { link } from 'fs'

const Home: NextPage = () => {
	return (
		<div className="z-0  " >
			<Head>
				<title>Next Blog</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Gome/>
		</div>
	);
};

export default Home;
