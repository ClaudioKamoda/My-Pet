import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import {Rating} from './Rating.js'

export const Card = ({ data }) => {
	return (
		<div className="w-full max-w-4xl flex items-center flex-col sm:flex-row rounded-lg shadow-md bg-white">
			<div className="h-48 w-48 sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden">
				<img
					className="rounded-t-lg object-contain"
					src={logo}
					alt="logo"
				/>
			</div>
			<div className="p-5">
				<h2 className="mb-2 text-2xl font-bold tracking-tight text-fuchsia-700">
					{data.name}
				</h2>
				<Rating/>
				<p className="mb-3 font-normal text-gray-700">{data.about}</p>
				<p className="mb-3 font-bold text-black">
					{`${data.address.street}, ${data.address.number}`}
					<br />
					{`${data.address.neighbourhood} - ${data.address.city} - ${data.address.UF}`}
				</p>
				<Link
					to={`/Pets/${data.id}`}
					className="inline-flex items-center py-2 px-9 text-sm font-medium text-center border border-fuchsia-700 text-fuchsia-700 bg-white rounded-lg hover:bg-fuchsia-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-300 transition"
				>
					MAIS INFORMAÇÕES
				</Link>
			</div>
		</div>
	)
}
