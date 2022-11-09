import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/person1.jpg'
import IMG2 from '../../assets/person2.jpg'
import IMG3 from '../../assets/person3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const data = [
  {
    id: 1,
    name: 'John Doe',
    image: IMG1,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure. Deserunt, blanditiis. Unde dignissimos, suscipit placeat tempora officiis rerum aut sapiente voluptatibus aspernatur inventore odit itaque reprehenderit fuga voluptatum laudantium.',
  },
  {
    id: 2,
    name: 'Alex Nguyen',
    image: IMG2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure. Deserunt, blanditiis. Unde dignissimos, suscipit placeat tempora officiis rerum aut sapiente voluptatibus aspernatur inventore odit itaque reprehenderit fuga voluptatum laudantium.',
  },
  {
    id: 3,
    name: 'Tim Crook',
    image: IMG3,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure. Deserunt, blanditiis. Unde dignissimos, suscipit placeat tempora officiis rerum aut sapiente voluptatibus aspernatur inventore odit itaque reprehenderit fuga voluptatum laudantium.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What's The Client Says</h5>
      <h2>Tesimonials</h2>

      <Swiper
      className="container testimonial__container"
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >           
          {data.map(({id, name, image, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
              <div className="client__photo">
                <img src={image} alt="Client Feedback" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  )
}

export default Testimonials