import paw from '../images/paw.png'

export const Rating = ({ className }) => {
	return (
		<div className={`flex gap-1 ${className}`}>
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
