import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className=" bg-white  shadow-blue-100 shadow-sm">
			{/* inside wrapper */}
			<div className="flex items-center justify-between px-8 py-3 sticky top-0 max-w-screen-2xl m-auto ">
				{/* logo */}
				<Link
					to={"/"}
					className="font-bold text-[29px] font-cabin no-underline bg-logo-gradient text-transparent bg-clip-text ">
					Heliverse
				</Link>

				<div></div>
			</div>
		</div>
	);
};

export default Navbar;
