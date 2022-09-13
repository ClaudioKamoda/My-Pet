import dog from '../images/dogIcon.png'
import lizard from '../images/lizIcon.png'

const PetIcon = props => {
	return (
		<div className="flex justify-around rounded-full w-32 bg-green-200 shadow-sm p-2 items-center">
			{props.type === 'dog' && (
				<>
					<img className="w-6 h-6" src={dog} alt="dog icon" />
					<p className="text-green-800 font-semibold">Cães</p>
				</>
			)}
			{props.type === 'lizard' && (
				<>
					<img className="w-6 h-6" src={lizard} alt="lizard icon" />
					<p className="text-green-800 font-semibold">Répteis</p>
				</>
			)}
		</div>
	)
}

export default PetIcon
