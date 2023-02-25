import React from 'react';

const CardProperty = ({ picture, zone, title, price, description }) => {
	return (
		<article className="Cardproperty">
			<div className="Cardproperty__container">
				<img
					src={picture}
					className="Cardproperty__container__img"
					alt='imagen'
				/>
			</div>
			<div className="Cardp roperty__main">
				<div className="Cardproperty__main__header">
					<p className="Cardproperty__main__header__zone">{zone}</p>
					<p className="Cardproperty__main__header__title">{title}</p>
					<p className="Cardproperty__main__header__price">{price}</p>
					<p className="Cardproperty__main__header__description">{description}</p>
				</div>
			</div>

		</article>
	);
};
export default CardProperty;
