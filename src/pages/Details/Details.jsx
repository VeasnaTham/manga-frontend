import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const [items, setItems] = useState("");
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [bid, setBid] = useState(""); // Initialize bid state with an empty string

  // Fetch book details based on the id parameter
  async function fetchBookDetails() {
    try {
      const response = await axios.get(`https://manga-auction-9db7091543c4.herokuapp.com/manga/mangas/${id}`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function setUpdateDetails() {
    try {
      const updateResponse = await axios.put(`https://manga-auction-9db7091543c4.herokuapp.com/manga/mangas/update_manga/${id}?bid=${bid}`);
      
      console.log(updateResponse);

      if (updateResponse.status === 200) {
        alert("Bid Successfully");
        fetchBookDetails();
      } else if (updateResponse.status === 422 && updateResponse.data.errors) {
        // Handle validation errors
        console.log(updateResponse.data.errors);
        // Optionally, display the validation errors to the user
      } else {
        // Handle other error scenarios
        console.error("Unexpected error:", updateResponse);
      }
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    fetchBookDetails();
  }, []);

  if (isLoading) {
    return (
      <section className="card-container">
        {/* Loading spinner */}
      </section>
    );
  }

  return (
    <>
      <section className="card-container">
        <div className="content-detail ml-72 mt-16">
          <div className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src={items.img}
              alt={items.title}
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div className="title font-bold">{items.title}</div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Category: {items.category}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Genre: {items.genre.join(" / ")}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Price: {bid > 0 && bid > items.price ? items.bid : items.price}

                
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Time Left: {items.time}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Description: {items.description}
              </p>
              <div className="form-control w-96">
                <input
                  type="text"
                  name="input"
                  placeholder="Enter your Bid"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  className="btn w-80 mt-4"
                  onClick={(e) => {
                    setUpdateDetails();
                    setBid(e.target.value);
                  }}
                  
                >
                  Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
