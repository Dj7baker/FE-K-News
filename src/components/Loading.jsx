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
				colors={["#575858", "#c7c8c8", "#f1f2f2", "#f8f9f9", "#ffffff"]}
			/>
		</div>
	);
}

export default Loading;
