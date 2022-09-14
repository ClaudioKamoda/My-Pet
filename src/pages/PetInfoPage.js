import { useParams } from 'react-router-dom'
import stores from '../ListOfStores'
import { Map } from '../components/Map.js'
import { DetailContainer } from '../components/DetailContainer.js'
import {DetailCard} from '../components/DetailCard.js'
import { PageTitle } from '../components/PageTitle.js'

export const PetInfoPage = () => {
	const params = useParams()
	const currentStore = stores.find(item => item.id === params.PetInfoId)

	return (
		<>
			<PageTitle>Detalhes do Local</PageTitle>
			<div className="flex flex-row wrap">
				<div className="flex flex-col gap-4 w-2/3">
					<DetailContainer />
					<Map />
				</div>
				<div className="flex flex-col gap-4 w-1/3">
          <DetailCard info={currentStore}/>
        </div>
			</div>
		</>
	)
}
