import Head from 'next/head';
import Error from '../../components/Error';
import CharacterCard from '../../components/CharacterCard';
import { getCharacters } from '../../services/services';

const Characters = ({ characters, error }) => {
  if (error) {
    return <Error message={error} />;
  }
  return (
    <>
      <Head>
        <title>The Office US | Characters</title>
        <link rel='icon' href='/icon.ico' />
      </Head>

      <div className='container mx-auto my-4'>
        <h1 className='text-light text-xl leading-tight mb-4'>Characters</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {characters.map((character, index) => (
            <div className='col-span-1' key={index}>
              <CharacterCard {...character} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const characters = await getCharacters();

    return {
      props: {
        characters,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        characters: [],
        error: error.message,
      },
    };
  }
}

export default Characters;
