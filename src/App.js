import { Footer } from './Footer.js'
import Card from './Card.js'
import { Navbar } from './Navbar.js'

function App() {
	return (
		<div className="bg-gray-200 min-h-screen h-fit w-screen">
			<Navbar />
			<Card />
			<Footer />
		</div>
	)
}

export default App
