import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, tags, category, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl p-5 border border-gray-300">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-4">
          {tags.map((tag, index) => (
            <button key={index} className="btn btn-xs bg-green-200 text-green-600">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>by : {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
