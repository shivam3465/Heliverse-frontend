import React from "react";

const SearchBar = () => {
	return (
		<div className="flex items-center justify-center py-[4rem] text-[18px] w-full border-2">
			<input
				type="text"
				placeholder="Search for user "
				className="outline-none border-[2px] border-blue-200 w-full max-w-[30rem] p-2 rounded-md"
			/>
		</div>
	);
};

export default SearchBar;
