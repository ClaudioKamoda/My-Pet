import appStore from './images/appStore.png'
import googlePlay from './images/googlePlay.png'
import payment from './images/payment.png'

export const Footer = () => {
	return (
		<footer>
			<section className="bg-fuchsia-600 w-screen p-5 sm:p-8 md:p-11 lg:p-14">
				<div className="max-w-6xl w-full m-auto">
					<div className="text-white text-5xl font-bold mb-8">
						MYPET
					</div>
					<div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:justify-between">
						<div className="text-white sm:w-1/2 w-full font-semibold text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In lorem ligula, rutrum in placerat ut,
							tincidunt vel odio. Proin ultrices nisl sit amet
							volutpat imperdiet. Praesent vehicula magna turpis,
							vel scelerisque enim blandit vel. Integer faucibus
							semper est a posuere. Orci varius natoque penatibus
							et magnis dis parturient montes, nascetur ridiculus
							mus.
						</div>
						<ul className="text-white text-3xl flex flex-col items-center sm:items-start gap-4">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Feedback</a>
							</li>
							<li>
								<a href="/">FAQ</a>
							</li>
							<li>
								<a href="/">Contato</a>
							</li>
						</ul>
						<div className="flex flex-col justify-center gap-5 items-center grow">
							<div className="flex justify-center gap-4 flex-wrap">
								<img
									className="h-12"
									src={appStore}
									alt="Download on App Store"
								/>
								<img
									className="h-12"
									src={googlePlay}
									alt="Get it on Google Play"
								/>
							</div>
							<p className="text-white font-semibold text-sm">
								FORMAS DE PAGAMENTO:
							</p>
							<img className="h-12" src={payment} alt="payment" />
						</div>
					</div>
				</div>
			</section>
			<section className="bg-fuchsia-700 w-screen h-fit text-white text-center py-6 text-sm">
				© Copyright 2022 MyPET - Todos os direitos reservados.
			</section>
		</footer>
	)
}
