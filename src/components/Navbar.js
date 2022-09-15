import { useState } from 'react'
import { Button } from './Button'
import { Menu } from 'react-feather'
import { X } from 'react-feather'
import { UserPlus } from 'react-feather'
import { LogIn } from 'react-feather'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	const links = [
		{ name: 'Home', link: '/Home' },
		{ name: 'Pets', link: '/Pets' },
		{ name: 'Lojas', link: '/Lojas' },
		{ name: 'Criadores', link: '/Criadores' }
	]

	const [open, setOpen] = useState(false)
	let activeStyle = {
		color: 'rgb(134, 25, 143)'
	}

	return (
		<header className="w-screen">
			<div className="w-full bg-fuchsia-800 h-4"></div>
			<nav className="bg-white w-full">
				<div className="max-w-6xl w-full flex flex-col justify-center gap-5 p-5 lg:m-auto lg:flex-row">
					<h2 className="text-6xl font-bold cursor-pointer w-fit">
						MYPET
					</h2>
					{!open && (
						<Menu
							size={40}
							onClick={() => {
								setOpen(!open)
							}}
							className="absolute right-12 top-12 cursor-pointer lg:hidden z-[2]"
						/>
					)}
					{open && (
						<X
							size={40}
							onClick={() => {
								setOpen(!open)
								console.log(open)
							}}
							className="absolute right-12 top-12 cursor-pointer lg:hidden z-[2]"
						/>
					)}
					<div
						className={`flex flex-col absolute bg-white lg:static lg:z-auto left-0 top-0 w-full transition-all duration-500 ease-in ${
							open
								? 'left-0 opacity-100'
								: 'left-[-600px] opacity-0'
						} lg:opacity-100 shadow-xl lg:shadow-none lg:flex-row lg:justify-between`}
					>
						<ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-7 ml-7 my-7 lg:ml-3">
							{links.map(item => (
								<li key={item.name}>
									<NavLink
										to={item.link}
										className="text-lg font-semibold text-gray-500 hover:text-gray-700"
										style={({ isActive }) =>
											isActive ? activeStyle : undefined
										}
									>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
						<div className="flex lg:justify-between items-center gap-5 lg:gap-3 px-7 mb-4 lg:mb-0">
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
		</header>
	)
}
