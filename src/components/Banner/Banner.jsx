import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-16 rounded-lg mt-4 mb-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className='space-y-10'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-green-600 text-white">view The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;