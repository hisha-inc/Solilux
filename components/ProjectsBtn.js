// next image
import Image from 'next/image';

//next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return <div className='mx-auto xl:ms-0'>
    <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
      <Image 
        src={'/rounded-text-ru.png'} 
        width={141} 
        height={148} 
        alt='' 
        className='animate-spin-slow w-full h-full max-w-[160px] max-h-[160px]' />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-500'/>
    </Link>
  </div>;
};

export default ProjectsBtn;
