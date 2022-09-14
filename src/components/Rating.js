import paw from '../images/paw.png'

export const Rating = () => {
	return (
		<div className="my-2 flex gap-1 pb-4">
			<img className="w-5 h-5" src={paw} alt="animal paw" />
			<img className="w-5 h-5" src={paw} alt="animal paw" />
			<img className="w-5 h-5" src={paw} alt="animal paw" />
			<img className="w-5 h-5" src={paw} alt="animal paw" />
			<img
				className="w-5 h-5 filter grayscale"
				src={paw}
				alt="animal paw"
			/>
		</div>
	)
}
