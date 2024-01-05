import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Listings() {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [img, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [time, setTime] = useState(null);
  const navigate = useNavigate();

  function getCheckBox() {
    let arr = [];
    let checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value);
    }
    return arr;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      'title': title,
      'category': category,
      'genre': getCheckBox(),
      'price': price,
      'img': img,
      'description': description,
      'time': time
    }
    try{
      const response = await axios.post('https://manga-auction-9db7091543c4.herokuapp.com/manga/mangas/', body);
      if (response !== null){
        alert("Auction created successfully");
        navigate("/")
      }
    }
    catch (error){
      console.error(error);
    }
  }



  return (
    <section className="card-container">
      <div className="w-full max-w-4xl p-4 ml-72 h-full bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="title font-bold mb-16">
          Enter your Manga's Informations
        </div>
        <div className="form-control w-full mb-12 ml-16">
          <input
            type="text"
            placeholder="Enter The Book's Title"
            value={title}
            className="input input-bordered w-full max-w-2xl"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full mb-12 ml-16">
          <input
            type="text"
            placeholder="Enter The Book's Category"
            value={category}
            className="input input-bordered w-full max-w-2xl"
            onChange={(e) => {
              e.preventDefault();
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="w-full ml-16">
          <div className="content font-bold">Genre</div>
          <div>
            <div class="items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value="Action"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Action
              </label>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Adventure"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Adventure
                </label>
              </div>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Fantasy"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Fantasy
                </label>
              </div>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Horror"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Horror
                </label>
              </div>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Isekai"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Isekai
                </label>
              </div>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Medical"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Medical
                </label>
              </div>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Romance"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Romance
                </label>
              </div>
              <div class="items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Sci-Fi"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sci-Fi
                </label>
              </div>
              <div class="items-center mb-12">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="Supernatural"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Supernatural
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-control w-full mb-12 ml-16">
          <input
            type="text"
            placeholder="Enter The Initial Price"
            value={price}
            className="input input-bordered w-full max-w-2xl"
            onChange={(e) => {
              e.preventDefault();
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full mb-12 ml-16">
          <input
            type="text"
            placeholder="Enter The Book's Link to Image"
            value={img}
            className="input input-bordered w-full max-w-2xl"
            onChange={(e) => {
              e.preventDefault();
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full mb-12 ml-16">
          <input
            type="text"
            placeholder="Enter the Description..."
            value={description}
            className="input input-bordered w-full max-w-2xl"
            onChange={(e) => {
              e.preventDefault();
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full mb-12 ml-16">
          <input
            type="text"
            placeholder="Enter the Duration of the Auction in Hours"
            value={time}
            className="input input-bordered w-full max-w-2xl"
            onChange={(e) => {
              e.preventDefault();
              setTime(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            onSubmit(e);
            getCheckBox();
          }}
          className="w-96 ml-56 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create Auction
        </button>
      </div>
    </section>
  );
}
export default Listings;
