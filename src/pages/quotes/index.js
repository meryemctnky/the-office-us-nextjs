import Head from 'next/head';
import Error from '../../components/Error';
import { getQuotes } from '../../services/services';

const Quotes = ({ quotes, error }) => {
  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <Head>
        <title>The Office US | Quotes</title>
        <link rel='icon' href='/icon.ico' />
      </Head>

      <div className='container mx-auto my-4'>
        <h1 className='text-light text-xl leading-tight mb-4'>Quotes</h1>
        <ul className='text-light'>
          {quotes &&
            quotes.map((quote) => (
              <li
                className='mb-3 text-lg font-medium leading-6 hover:text-success'
                key={quote.quote_id}
              >
                <q>{quote.quote}</q> -{' '}
                <span className='font-bold'>{quote.author}</span>{' '}
                <span>({quote.season})</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Quotes;

export async function getStaticProps() {
  try {
    const quotes = await getQuotes();

    return {
      props: {
        quotes,
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
