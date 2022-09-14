import ImageSlider from './ImageSlider'
import PetIcon from './PetIcon'

export const DetailContainer = () => {
	return (
		<section className="bg-white p-8 rounded-lg shadow-sm">
			<ImageSlider />
			<h2 className="text-fuchsia-700 font-bold text-xl mt-8">
				Sobre nós
			</h2>
			<p className="mb-3 font-semibold text-gray-700">
				No nosso Hotel Canino seu cão encontra todo o conforto e cuidado
				que ele merece, acompanhado o tempo todo pela nossa equipe de
				profissionais.
			</p>
			<h2 className="text-fuchsia-700 font-bold text-xl mt-8">
				Aceitamos
			</h2>
			<div className="flex gap-3 py-4">
				<PetIcon type="dog" />
				<PetIcon type="lizard" />
			</div>
		</section>
	)
}
