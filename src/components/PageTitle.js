export const PageTitle = props => {
	return (
		<div className="bg-fuchsia-800 w-screen h-fit p-7 flex justify-center items-center">
			<div className="max-w-6xl w-full">
				<h1 className="text-white text-4xl font-bold">
					{props.children}
				</h1>
			</div>
		</div>
	)
}
