const Error = ({ message }) => {
  return (
    <div className='container mx-auto my-4 min-h-[80vh]'>
      <div className='bg-danger text-light p-4 rounded-md shadow-md'>
        Error: {message}
      </div>
    </div>
  );
};

export default Error;
