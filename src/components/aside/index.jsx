const Aside = () => {
	const sections = [
		{ title: "vinos", url: "https://images.hola.com/imagenes/cocina/escuela/200907079224/temperatura/vinos/enologia/0-876-296/temperatura-adobe-t.jpg?tx=w_680" },
		{ title: "cerveza", url: "https://www.semana.com/resizer/3DM41AQXkz19Z5XjWj_Bunslvxo=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/IWJVUOOM75CFHCZJOXA7GJKDVE.jpg" },
		{ title: "Vodka", url: "https://insiderlatam.com/wp-content/uploads/2021/10/absolut-2.jpg" },
		{ title: "Espumantes", url: "https://www.clarin.com/img/2020/12/19/6D7jY5uKR_360x240__1.jpg" },
		{ title: "Aperitivos", url: "https://cdn.shopify.com/s/files/1/0567/2907/5873/products/fernet1.png?v=1643209303&width=1445" },
		{ title: "Otros", url: "https://buenavibra.es/wp-content/uploads/2016/12/chizitos-1_opt.jpg" }
	]
	return (
		<>
			<aside className="aside">
				{
					sections.map((section, index) =>
						<div key={index} className="aside__section">
							<img className="aside__section__img" src={section.url} alt="putaas"></img>
							<div className="aside__section__container">
							</div>
							<h1 className="aside__section__title">{section.title}</h1>

						</div>
					)
				}
			</aside>
		</>
	)
}

export default Aside