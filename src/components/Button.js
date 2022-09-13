export const Button = props => {
	return (
		<button className="rounded-md bg-fuchsia-700 text-xs text-white py-2 px-4 hover:bg-fuchsia-900 flex justify-center items-center gap-2">
			{props.children}
		</button>
	)
}
