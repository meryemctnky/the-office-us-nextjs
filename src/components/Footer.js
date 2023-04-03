import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='container mx-auto my-4 bottom 0'>
      <div className='flex flex-col justify-between sm:flex-row py-3 my-1'>
        <p className='text-lg text-success'>&copy; 2023 Meryem Çetinkaya</p>
        <ul className='flex list-none mt-2 sm:mt-0'>
          <li className='ml-3'>
            <a
              href='https://github.com/meryemctnky'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub className='text-success text-2xl' />
            </a>
          </li>
          <li className='ml-3'>
            <a
              href='https://www.linkedin.com/in/meryem-cetinkaya/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin className='text-success text-2xl' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
