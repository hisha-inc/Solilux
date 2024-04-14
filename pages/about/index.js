import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'Навыки',
    info: [
      {
        title: 'Web Development',
        icons: [
          {id:1, ico: <FaHtml5/>},
          {id:2, ico: <FaCss3/>},
          {id:3, ico: <FaJs/>},
          {id:4, ico: <FaReact/>},
          {id:5, ico: <SiNextdotjs/>},
          {id:6, ico: <SiFramer/>},
          {id:7, ico: <FaWordpress/>},
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [{id:1, ico: <FaFigma />}, {id:1, ico: <SiAdobexd />}, {id:1, ico: <SiAdobephotoshop />}],
      },
    ],
  },
  {
    title: 'Специалисты',
    info: [
      {
        title: 'Front-End',
        stage: 'разработчики',
      },
      {
        title: 'Back-End',
        stage: 'разработчики',
      },
      {
        title: 'UI/UX',
        stage: 'дизайнер',
      },
      {
        title: 'SEO',
        stage: 'специалист',
      },
      {
        title: 'Иллюстраторы',
        stage: 'художник',
      },
      {
        title: 'Копирайтер',
        stage: 'маркетолог',
      },
    ],
  },
  {
    title: 'Опыт',
    info: [
      {
        title: 'Front-End - разработчики',
        stage: '5+',
      },
      {
        title: 'Back-End - разработчики',
        stage: '2+',
      },
      {
        title: 'UI/UX - специалист',
        stage: '2+',
      },
      {
        title: 'Иллюстраторы / Художник',
        stage: '3+',
      },
      {
        title: 'Копирайтер / Маркетолог',
        stage: '3+',
      },
    ],
  },
  {
    title: 'Образование',
    info: [
      {
        title: 'ЯрГУ им. П.Г.Демидова',
        stage: 'Математический факультет',
      },
      {
        title: 'МГУ М.В.Ломоносова',
        stage: 'Факультет ВМК',
      },
      {
        title: 'ЯГТУ',
        stage: 'Программная инженерия',
      },
      {
        title: 'ЯГТУ',
        stage: 'Маркетинг',
      },
      {
        title: 'ИГЭУ',
        stage: 'ИВТ',
      },
    ],
  },
];

// components
import Circles from '../../components/Circles';
import TopLeftImg from '../../components/TopLeftImg';
import Avatar from '../../components/Avatar';

// frame motion
import {motion} from 'framer-motion' 
import {fadeIn} from '../../variants'

//counter
import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0);
  return ( 
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <TopLeftImg/>
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar/>
      </motion.div>  
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Красивые <span className="text-accent">истории</span> рождают уникальный дизайн.
            </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            // md:flex md:max-w-xl xl:max-w-none
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"   
          >
            🔸 Создание индивидуального сайта.<br/>
            🔸 Разработка удобных и функциональных телеграмм-ботов.<br/>
            🔸 Поддержка продуктов для обеспечения их безупречной работы.<br/>
            🔸 Напишем вам любые тексты для блогов, рекламы или сайта.<br/>
            🔸 Создадим для вас арты и иллюстрации.

          </motion.p>
          {/* counteres */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={10}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Лет работы</div>
              </div>
              {/* cliets */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={99} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Довольные клиенты</div>
              </div>
              {/* projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={150} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Выполненных заказов</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="hidden md:flex md:max-w-xl xl:max-w-none flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className={index === itemIndex ? ("text-accent cursor-pointer capitalize xl:text-lg relative after:w-[100%] after:duration-300 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 hover:text-accent transition-all duration-300") : ("cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-accent transition-all duration-300")}
                  onClick={()=> setIndex(itemIndex)}                  
                >
                  <div >{item.title}</div>
                </div>
              )
            })}
          </div>

          <div className="hidden md:flex md:max-w-xl xl:max-w-none py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={icon.id}>
                          <div className="text-2xl text-white hover:text-accent hover:duration-300 transition-all">
                            {icon.ico}
                          </div>
                        </div>) 
                    })}
                  </div>                  
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>      
  );
};

export default About;
