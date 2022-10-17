import React from 'react';
import errorImage from '../../../../assets/images/error-image.jpg'

export const Sprites = (sprites) => {
	return (
		<div className='subtitle'>
			{sprites.sprites.map((value: string,index) => (
				<img
					key={index}
				 	className='sprites-size'
					src={value ? value : errorImage}
					width={50}
					height={50}
					alt=''
				/>
			))}
		</div>
	);
};
