// components
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import TopLeftImg from '../../components/TopLeftImg'


// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Work = () => {
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
              className='h2 xl:mt-8'
            >
              Наши <span className='text-accent'>работы.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Мы создаём интуитивно понятные и функциональные сайты, которые помогут Вам выделиться и подчеркнуть индивидуальный стиль.<br/><br/>
              <span className='text-accent'>Контент,</span> который Заставит Мир Остановиться.<br/>
              Цепляющие текста - истории, которые хочется читать. Вкупе с иллюстрациями, слова перенесут ваших клиентов в мир вашего бренда.<br/><br/>
              Каждый <span className='text-accent'>штрих,</span> - это шаг к уникальности, <br/>каждый <span className='text-accent'>цвет</span> - это слово в рассказе о вашем бизнесе.
              
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
            <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  );
};

export default Work;
