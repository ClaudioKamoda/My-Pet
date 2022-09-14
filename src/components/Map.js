import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

export const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyAdNbiETkmpfw6PzdtUfk6YTafkNz79F4Q'
	})

	const center = {
		lat: -23.1558101,
		lng: -45.7935081
	}

	return (
		<div className="h-fit w-full p-6 shadow-lg bg-white rounded-lg">
			<div className="h-96 w-full">
				{isLoaded ? (
					<GoogleMap
						mapContainerStyle={{
							width: '100%',
							height: '100%'
						}}
						center={center}
						zoom={15}
					></GoogleMap>
				) : (
					<></>
				)}
			</div>
			<div className="flex justify-between items-center mt-6 gap-2">
				<p className="font-semibold text-black">
					Av. dos Bandeirantes, 101
					<br />
					Centro - São José dos Campos - SP
				</p>
				<a
					href="/"
					className="border border-fuchsia-700 bg-white rounded-lg font-bold text-fuchsia-700 flex justify-center items-center text-center grow-0 px-5 py-2 hover:text-white hover:bg-fuchsia-700 transition"
				>
					VER O MAPA
				</a>
			</div>
		</div>
	)
}
