// // fonts
// import {Sora} from '@next/font/google'

// const sora = Sora({
//   subsets: ['latin'],
//   variable: '--font-sora',
//   weight: ['100','200','300','400','500','600','700','800'],
// })

//components
import Nav from '../components/Nav'

const Layout = ({children}) => {
  return <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
    <link rel='icon' href='/favicon.ico' />
    <Nav />
    {children}
  </div>;
};

export default Layout;
