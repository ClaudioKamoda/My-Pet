import logo from './logo.png'
import paw from './paw.png'

const Card = () => {
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
					PetHostel
				</h2>
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
				<p className="mb-3 font-normal text-gray-700">
					No nosso Hotel Canino seu cão encontra todo o conforto e
					cuidado que ele merece, acompanhado o tempo todo pela nossa
					equipe de profissionais.
				</p>
				<p className="mb-3 font-bold text-black">
					Av. dos Bandeirantes, 101 Centro - São José dos Campos - SP
				</p>
				<a
					href="/"
					className="inline-flex items-center py-2 px-9 text-sm font-medium text-center border border-fuchsia-700 text-fuchsia-700 bg-white rounded-lg hover:bg-fuchsia-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-fuchsia-300 transition"
				>
					MAIS INFORMAÇÕES
				</a>
			</div>
		</div>
	)
}

export default Card
