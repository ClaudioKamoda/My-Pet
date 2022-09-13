import { Carousel } from 'flowbite-react'
import pets1 from '../images/pets1.jpg'
import pets2 from '../images/pets2.jpg'
import pets3 from '../images/pets3.jpg'

const ImageSlider = () => {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
			<Carousel>
				<img src={pets1} alt="Dogs" />
				<img src={pets2} alt="Dogs" />
				<img src={pets3} alt="Dogs" />
			</Carousel>
		</div>
	)
}

export default ImageSlider
