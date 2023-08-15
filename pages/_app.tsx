import NavBar from "../components/NavBar";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	
		return <>
<section  className="z-[1000] sticky w-full overflow-hidden top-0 " >
<NavBar  />

</section>
<section className="z-0" >
<Component {...pageProps} />
    
    </section>    </>
	
}

export default MyApp;
