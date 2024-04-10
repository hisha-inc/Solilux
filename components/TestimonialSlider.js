// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Анна Новикова',
    position: 'Фотограф',
    message:
      'Разработали для нашей фотостудии отличный сайт. Работаем вместе не первый год. Ребята молодцы!',
  },
  {
    image: '/t-avt-4.png',
    name: 'Виктория',
    position: 'Администратор',
    message:
      'Написали для нашей кафешки бота для проведения акций и мероприятий. Работает :)',
  },
  {
    image: '/t-avt-3.png',
    name: 'Александр',
    position: 'Предприниматель',
    message:
      'За неделю смогли создать для нас телеграм бота и сайт. При малейших сбоях всегда готовы помочь нам, радует. Рекомендую!',
  },
];

// import swiper reaact component
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//  import required modules
import {Navigation, Pagination} from 'swiper'

// icons
import {FaQuoteLeft} from 'react-icons/fa';

// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}      
      pagination={{
        clickable: true
      }}
      modules={[ Navigation, Pagination ]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((person, index)=> {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt=''/>
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight
                  tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20
                  mx-auto md:mx-0'/>
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;


