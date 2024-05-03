// components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import TopLeftImg from '../../components/TopLeftImg'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex item-center'>
      <TopLeftImg />
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 
          xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-8 mx-auto'
            >
              Наши услуги<span className='text-accent'>.</span>
            </motion.h2>

            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto'
            >              
              Наше сообщество предлагает полный спектр услуг по созданию и развитию бренда.<br/><br/>
              Ознакомиться с актуальными ценами вы можете <a href='/price-list.png'><span className='text-accent'>тут</span></a>.
            </motion.p>                    
          </div>
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full xl:max-w-[65%]'
          >
            {/* slider */}
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  );
};

export default Services;
