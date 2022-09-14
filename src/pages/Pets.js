import stores from '../ListOfStores'
import { Card } from '../components/Card.js'
import { PageTitle } from '../components/PageTitle.js'

export const Pets = () => {
	return (
		<>
			<PageTitle>Pesquisa de Pets</PageTitle>
			<div className="min-h-screen h-fit w-screen flex flex-col gap-3 justify-center items-center p-6">
				{stores.map(item => (
					<Card key={item.id} data={item} />
				))}
			</div>
		</>
	)
}
