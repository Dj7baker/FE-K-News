import { ColorRing } from "react-loader-spinner";

function Loading() {
	return (
		<div className="loading">
			<ColorRing
				visible={true}
				height="80"
				width="80"
				ariaLabel="blocks-loading"
				wrapperStyle={{}}
				wrapperClass="blocks-wrapper"
				colors={["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"]}
			/>
		</div>
	);
}

export default Loading;
