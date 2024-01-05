import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Recommended from "../../Recommended/Recommended";
import Books from "../../Books/Books";
import Card from "../../components/Card";
import "../../index.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [listBooks, setListBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    async function get_all_books() {
      setIsLoading(true);
      try {
        const response = await axios.get("https://manga-auction-9db7091543c4.herokuapp.com/manga/");
        console.log(response.data.data);
        if (response !== null) {
          setListBooks(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    get_all_books();
  }, []);

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = listBooks.filter(
    (book) => book.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(selected, query) {
    let filteredBooks = listBooks;

    // Filtering Input Items
    if (query) {
      filteredBooks = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredBooks = filteredBooks.filter(
        ({ genre, category, price, title }) =>
          genre.includes(selected) ||
          category === selected ||
          price === selected ||
          title === selected
      );
    }

    return filteredBooks.map(({ id, img, title, price }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        price={price}
        onTap={() => {
          navigator(`/${id}`);
        }}
      />
    ));
  }

  const result = filteredData(selectedCategory, query);

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Recommended handleClick={handleClick} />
      <Books result={result} />
    </>
  );
}

export default Home;
