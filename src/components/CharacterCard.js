import Link from 'next/link';
import Image from 'next/image';

const CharacterCard = (props) => {
  const { char_id, name, img } = props;
  return (
    <div className='max-w-sm hover:scale-105 transition-all duration-600'>
      <div className='bg-primary rounded-lg overflow-hidden shadow-md'>
        <div className='relative h-screen max-h-[50vh] block'>
          <Link href={`/characters/${char_id}`}>
            <Image
              src={img}
              alt={`${name} Image`}
              fill
              object-fit='cover'
              className='object-top object-cover'
            />
          </Link>
        </div>
        <div className='p-3'>
          <Link href={`/characters/${char_id}`}>
            <h5 className='mb-2 text-xl font-medium tracking-tight text-light'>
              {name}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
