import stores from '../ListOfStores'
import { Card } from '../components/Card.js'
import { PageTitle } from '../components/PageTitle.js'
import { Pagination } from 'flowbite-react'
import { useState } from 'react'
import { Search } from '../components/Search'

export const Pets = () => {
	const [currentPage, setCurrentPage] = useState(1)
	let amountPerPage = 5
	let totalPages = Math.ceil(stores.length / amountPerPage)
	let currentStores = stores.slice(
		(currentPage - 1) * amountPerPage,
		currentPage * amountPerPage
	)

	const onPageChange = number => {
		setCurrentPage(number)
		currentStores =
			stores.slice[
				((currentPage - 1) * amountPerPage, currentPage * amountPerPage)
			]
	}

	return (
		<>
			<PageTitle>Pesquisa de Pets</PageTitle>
			<div className="flex justify-center w-full item-center py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-0">
				<div className="flex flex-col md:flex-row max-w-6xl gap-4 w-full">
					<div className="flex flex-col gap-4 w-full md:w-2/5">
						<Search />
					</div>
					<div className="min-h-screen h-fit w-screen flex flex-col gap-3 justify-start items-center md:px-6 md:3/5">
						{currentStores.map(item => (
							<Card key={item.id} data={item} />
						))}
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={onPageChange}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
