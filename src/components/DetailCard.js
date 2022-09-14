import logo from '../images/logo.png'
import { Rating } from './Rating.js'
import { Button } from './Button.js'

export const DetailCard = ({ info }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-4 rounded-lg bg-white shadow-md p-5">
			<img src={logo} alt="logo da loja" />
			<h2 className="font-bold text-4xl text-fuchsia-700">{info.name}</h2>
			<Rating />
			<div className="font-bold text-black text-center">
				<p>{`${info.address.street}, ${info.address.number}`}</p>
				<p>
					{`${info.address.neighbourhood} - ${info.address.city} - ${info.address.UF}`}
				</p>
			</div>
			<Button className="w-full mb-4 text-base text-semibold py-4">
				CONTATO
			</Button>
		</div>
	)
}
