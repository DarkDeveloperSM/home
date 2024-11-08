import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import './Recidencies.css'
import "swiper/css"
import "swiper/css/navigation"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Recidencies = () => {
	return (
		<section className='r-wrapper'>
			<div className='paddings innerWidth r-container'>
				<div className='r-head flexColStart'>
					<span className='orangeText'>Best Choices</span> 
					<span className='primaryText'>Popular Residencies</span>
				</div>
				{/* Swiper'da navigation moduli qo'shildi */}
				<Swiper {...sliderSettings} modules={[Navigation]} navigation>
					<SliderButtons />
					{
						data.map((card, i) => (
							<SwiperSlide key={i}>
								<div className='flexColStart r-card'>
									<img src={card.image} alt="home" />

									<span className='secondaryText r-price'>
										<span style={{color: 'orange'}}>$</span>
										<span>{card.price}</span>	
									</span>

									<span className='primaryText'>{card.name}</span>
									<span className='secondaryText'>{card.detail}</span>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	)
}

export default Recidencies

// SliderButtons komponentini o'zgartirish shart emas
const SliderButtons = () => {
	return (
		<div className='flexCenter r-buttons'>
			{/* Swiper navigation tugmalari */}
			<button className="swiper-button-prev">&lt;</button>
			<button className="swiper-button-next">&gt;</button>
		</div>
	)
}
