import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getCharacter, getCharacters } from '../../services/services';

const CharacterDetail = ({ character }) => {
  const { about, img, name } = character[Object.keys(character)[0]];

  return (
    <>
      <Head>
        <title>The Office US | {name}</title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <div className='container mx-auto my-4 min-h-[80vh]'>
        <div className='flex flex-col items-center bg-primary border border-primary rounded-lg  md:flex-row md:max-w-xl'>
          <Image
            src={img}
            width={600}
            height={600}
            className='h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            alt={`${name} Image`}
            loading={'lazy'}
          />

          <div className='flex flex-col justify-between leading-normal'>
            <h5 className='my-2 text-2xl font-medium tracking-tight text-light pl-5'>
              {name}
            </h5>
            <p className='mb-3 font-normal text-light pl-5'>{about}</p>
          </div>
        </div>
        <Link href='/characters'>
          <button
            type='button'
            className='inline-block bg-primary text-light font-medium py-2 px-4 rounded mt-3 hover:shadow-[0_4px_6px_-4px_#864CB0]'
          >
            Go back
          </button>
        </Link>
      </div>
    </>
  );
};

export default CharacterDetail;

export async function getStaticPaths() {
  const characters = await getCharacters();
  const paths = characters.map((character) => ({
    params: { char_id: character.char_id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const character = await getCharacter(params.char_id);
  return {
    props: {
      character,
    },
  };
}
