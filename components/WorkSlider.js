// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/yeseninwinebar.ru.png',
          link: 'https://yeseninwinebar.ru/',
        },
        {
          title: 'title',
          path: '/travel.png',
          link: '/travel-agency.jpg',
        },
        {
          title: 'title',
          path: '/dacha-loft.png',
          link: 'https://dacha-loft.ru/',
        },
        {
          title: 'title',
          path: '/msk_lubyanka.png',
          link: 'https://mskofficial.ru/msk_lubyanka',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/lemon-launge.png',
          link: '/lemon.png',
        },
        {
          title: 'title',
          path: '/TuoTown-shop.png',
          link: '/TuoTown.png',
        },
        {
          title: 'title',
          path: '/Leader-Classic.png',
          link: '/LeaderClassic.png',
        },
        {
          title: 'title',
          path: '/Aladin-launge.png',
          link: 'Aladin.png',
        },
      ],
    },
  ],
};

// import swiper reaact component
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//  import required modules
import {Pagination} from 'swiper'

// icons
import {BsArrowRight} from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}      
      pagination={{
        clickable: true
      }}
      modules={[ Pagination ]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index)=> {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (                                   
                  <div className='relative rounded-lg overflow-hidden flex
                  items-center justify-center group' key={index}>
                    
                    <div className='flex items-center justify-center relative 
                    overflow-hidden group'>
                      {/* image */}
                      {/* Link */}
                      <a href={image.link} target="_blank"><Image src={image.path} width={500} height={300} alt='' title=''/>
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent
                        via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 
                        transition-all duration-700'></div>
                      </a>
                      {/* title */}
                      
                      <div className='absolute bottom-0 translate-y-full 
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300'>
                        <a href={image.link} target="_blank">
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* part 1 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150'>PROJECT</div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] 
                          group-hover:translate-y-0 transition-all duration-300
                          delay-200'><BsArrowRight/></div>
                        </div>
                        </a>
                      </div>
                      
                    </div>
                  </div>
                )
                })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

