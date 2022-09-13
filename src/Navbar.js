import { useState } from 'react'
import { Button } from './Button'
import { Menu } from 'react-feather'
import { X } from 'react-feather'
import { UserPlus } from 'react-feather'
import { LogIn } from 'react-feather'

export const Navbar = () => {
	const links = [
		{ name: 'Home', link: '/' },
		{ name: 'Pets', link: '/' },
		{ name: 'Lojas', link: '/' },
		{ name: 'Criadores', link: '/' }
	]

	const [open, setOpen] = useState(false)

	return (
		<nav className="w-screen">
			<div className="w-full bg-fuchsia-800 h-4"></div>
			<div className="bg-white max-w-6xl w-full flex flex-col justify-center gap-5 p-5 md:m-auto md:flex-row">
				<h2 className="text-6xl font-bold cursor-pointer">MYPET</h2>
				{!open && (
					<Menu
						size={40}
						onClick={() => {
							setOpen(!open)
							console.log(open)
						}}
						className="absolute right-12 top-12 cursor-pointer md:hidden z-[2]"
					/>
				)}
				{open && (
					<X
						size={40}
						onClick={() => {
							setOpen(!open)
							console.log(open)
						}}
						className="absolute right-12 top-12 cursor-pointer md:hidden z-[2]"
					/>
				)}
				<div
					className={`flex flex-col absolute bg-white md:static md:z-auto left-0 top-0 w-full transition-all duration-500 ease-in ${
						open ? 'left-0 opacity-100' : 'left-[-600px]'
					} opacity-0 md:opacity-100 shadow-xl md:shadow-none md:flex-row`}
				>
					<ul className="flex flex-col md:flex-row md:justify-center md:items-center gap-7 ml-7 md:ml-3">
						{links.map(item => (
							<li key={item.id} className="md:my-0 my-7">
								<a
									href={item.link}
									className="text-lg font-semibold text-gray-500 hover:text-gray-700"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
					<div className="flex md:justify-between items-center gap-5 md:gap-3 px-7 mb-4 md:mb-0">
						<Button>
							<UserPlus />
							CADASTRE-SE
						</Button>
						<Button>
							<LogIn />
							LOGIN
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
