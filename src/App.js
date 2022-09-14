import { Footer } from './components/Footer.js'
import { Navbar } from './components/Navbar.js'
import { Home } from './pages/Home.js'
import { Pets } from './pages/Pets.js'
import { Lojas } from './pages/Lojas.js'
import { Criadores } from './pages/Criadores.js'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PetInfoPage } from './pages/PetInfoPage.js'

function App() {
	return (
		<div className="bg-gray-200 min-h-screen h-fit w-screen">
			<Navbar />
			<Routes>
				<Route path="/" element={<Navigate to="/Home" />} exact />
				<Route path="/Home" element={<Home />} />
				<Route path="/Pets/:PetInfoId" element={<PetInfoPage />} />
				<Route path="/Pets" element={<Pets />} />
				<Route path="/Lojas" element={<Lojas />} />
				<Route path="/Criadores" element={<Criadores />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
