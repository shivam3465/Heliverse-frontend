import React from "react";
import FilterBox from "./FilterBox/FilterBox";

const FiltersAndCreateTeamHeader = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex-2">
				<div>Add Filter</div>
				<div className="flex justify-between items-center">
					<FilterBox />
					<FilterBox />
					<FilterBox />
				</div>
			</div>
			<div className="flex-1">a</div>
		</div>
	);
};

export default FiltersAndCreateTeamHeader;
