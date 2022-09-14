import { useParams } from 'react-router-dom'
import stores from '../ListOfStores'
import { Map } from '../components/Map.js'
import { DetailContainer } from '../components/DetailContainer.js'
import { DetailCard } from '../components/DetailCard.js'
import { PageTitle } from '../components/PageTitle.js'

export const PetInfoPage = () => {
	const params = useParams()
	const currentStore = stores.find(item => item.id === params.PetInfoId)

	return (
		<>
			<PageTitle>Detalhes do Local</PageTitle>
			<div className="flex justify-center item-center py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-0">
				<div className="flex flex-col-reverse md:flex-row max-w-6xl gap-4 w-full">
					<div className="flex flex-col gap-4 w-full md:w-3/5">
						<DetailContainer />
						<Map />
					</div>
					<div className="flex flex-col w-full md:w-2/5">
						<DetailCard info={currentStore} />
					</div>
				</div>
			</div>
		</>
	)
}
