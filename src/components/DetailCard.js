import logo from '../images/logo.png'
import { Rating } from './Rating.js'
import { Button } from './Button.js'

export const DetailCard = ({ info }) => {
	return (
		<div className="flex flex-col gap-4">
			<img src={logo} alt="logo da loja" />
			<h2>{info.name}</h2>
			<Rating />
			<p className="font-bold text-black">
				{`${info.address.street}, ${info.address.number}`}
				<br />
				{`${info.address.neighbourhood} - ${info.address.city} - ${info.address.UF}`}
			</p>
			<Button className="w-full h-6">CONTATO</Button>
		</div>
	)
}
