import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {	
	return (
		<div className="bg-banner-gradient">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<ScrollToTop />
		</div>
	);
};

export default Main;
