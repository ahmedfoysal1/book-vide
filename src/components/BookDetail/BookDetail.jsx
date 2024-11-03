import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  const {image,bookName,author,category,review} = book;
  const handleMarkAsRead = (id) =>{

    addToStoredReadList(id);
        
    /**
     *1. understand what to store or save => bookId
     2.where to store: database
     3.array,list,collection:
     4.chceck: if the book already in the read list 
     5.if not in the read list then add to the read list
     6.if yes do not add to the list 

     */

  }

  return (
    <div className="hero bg-base-200 gap-6">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="rounded-lg h-[564px]"
        />
        <div>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p>by : {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p className="font-bold">Review : <span className="font-semibold text-gray-400">{review}</span></p>
          <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-accent btn-outline">Mark As Read</button>
          <button className="btn btn-accent ml-2">Add To WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
