// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
} from 'react-icons/hi2';

import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";


// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome />, target: "", },
  { name: 'About', path: '/about', icon: <HiUser />, target: "", },
  { name: 'Services', path: '/services', icon: <HiRectangleGroup />, target: "", },
  { name: 'Projects', path: '/work', icon: <HiViewColumns />, target: "", },
  {
    name: 'Testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
    target: "",
  },
  {
    name: 'Price',
    path: '/price-list.png',
    icon: <IoIosPricetags/>,
    target: "_blank",    
  },
  // social
  {
    name: 'WhatsApp',
    path: 'whatsapp://send?phone=79959836663',
    icon: <TbBrandWhatsapp/>,
    target: "_blank",    
  },
  {
    name: 'Telegram',
    path: 'https://t.me/HiShaINC',
    icon: <TbBrandTelegram/>,
    target: "_blank", 
  },
];

// next Link
import Link from 'next/link';

// next nav
import { usePathname } from 'next/navigation'; 

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max 
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div 
        className='flex w-full xl:flex-col items-center justify-between 
        xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 
        bg-white/10 
        backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'
      >
        {navData.map((link, index) => {  
          return (
            <Link 
              className={"relative flex item-center group hover:text-accent transition-all duration-300"}  
              href={link.path} 
              key={link.path}
              target={link.target}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex  text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semihold capitalize'>
                    {link.name}
                  </div>
                  {/* triangle */} 
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] boerder-r-0 absolute -right-2'></div>
                </div>
              </div>

              {/* icon */}
              
              <div className={link.path === pathname && 'text-accent'}>{link.icon}</div>
            </Link>            
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
