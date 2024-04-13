import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router'
import Head from "next/head";


//frame motion
import {AnimatePresence, motion} from 'framer-motion'

import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (  
    <Layout> 
      <SpeedInsights/>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          {/* add favicon */}
          <Head>
            <title>Solilux</title>

            {/*  */}
            <meta name='description' content='Solilux - ваш надёжный партнер в создании веб-сайтов, телеграмм-ботов, арт-работ и текстового контента.'/>

            <meta name="keywords" content="создание сайтов, телеграмм боты, арт, текст, веб-разработка"/>

            {/*  */}
            <meta http-equiv='Content-Language' content='ru'/>

            {/*  */}
            <meta name='canonical' href='https://solilux.vercel.app/'/>

            <meta property="og:title" content="Красивые истории рождают уникальный дизайн."/>
            <meta property="og:description" content="Solilux предлагает вам профессиональные услуги по созданию сайтов, телеграмм ботов, арт-работ и текстового контента." />
            <meta property="og:image" content="/avatar-2.png" />
            <meta property='og:url' content='https://solilux.vercel.app/'/>
            <meta property='og:type' content='website'/>

            {/*  */}
            <link rel="shortcut icon" href="/favicon.ico" />

            {/* twitter Card */}
            <meta name='twitter:title' content='Solilux - создание сайтов и телеграмм ботов.'/>
            <meta name='twitter:description' content='Solilux предлагает вам профессиональные услуги по созданию сайтов, телеграмм ботов, арт-работ и текстового контента.'/>
            <meta name="twitter:image" content="/avatar-2.png" />
            <meta name='twitter:card' content='summary_large_image'/>
          </Head>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>  
    </Layout>
  );
}

export default MyApp;
