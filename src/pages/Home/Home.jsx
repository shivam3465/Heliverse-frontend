
import FiltersAndCreateTeamHeader from "../../components/FiltersAndCreateTeamHeaders/FiltersAndCreateTeamHeader";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
	const domains = {
		Sales: true,
		Finance: true,
		Marketing: true,
		IT: true,
		Management: true,
		"UI Designing": true,
		"Business Development": true,
	};

	return <div className="max-w-screen-2xl px-8 m-auto h-screen">
		{/* search bar  */}
		<SearchBar/>	

		{/* filters and create team button 	 */}		
		<FiltersAndCreateTeamHeader />
		
		{/* cards container  */}

		{/* a footer to with create team button in bottom left  */}

	</div>;
};

export default Home;
