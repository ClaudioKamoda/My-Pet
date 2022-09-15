import { Button } from './Button'
import { useState } from 'react'
import { ChevronDown } from 'react-feather'

export const Search = () => {
	const [isActive, setIsActive] = useState(false)
	const dropdownContent = ['SP', 'RJ', 'MG']

	return (
		<form className="bg-white rounded-lg p-4 shadow-sm">
			<label for="keyword">Palavra-chave:</label>
			<input
				type="text"
				id="keyword"
				name="keyword"
				value=""
				className="border border-gray-400 rounded-md w-full"
			></input>
			<label for="city">Cidade:</label>
			<input
				type="text"
				id="city"
				name="city"
				value=""
				className="border border-gray-400 rounded-md w-full"
			></input>

			<div
				className="relative mb-8"
				onClick={() => {
					setIsActive(!isActive)
					console.log(isActive)
				}}
			>
				<p>UF:</p>
				<div className="flex justify-between items-center space-x-1 cursor-pointer border border-gray-400 rounded-md px-3 h-10">
					<span className="text-md">Selecione...</span>
					<ChevronDown />
				</div>

				<div
					className={`absolute mt-0 right-1 top-full min-w-max shadow rounded-b bg-white border border-gray-400 transition delay-75 ease-in-out z-10 ${
						isActive ? 'opacity-1' : 'opacity-0 hidden'
					}`}
				>
					<ul className="block text-right text-gray-900">
						{dropdownContent.map(item => (
							<li className="block px-3 py-2 hover:bg-gray-200 cursor-pointer">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>

			<Button className="w-full font-semibold py-3">PESQUISAR</Button>
		</form>
	)
}
