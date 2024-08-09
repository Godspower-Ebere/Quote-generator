import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const App = () => {
  const APIKEY = "ayAZZx8w4gn4UkMewdNJfw==3D6Biv7ZoemMZWu5";
  const category = useRef("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [list, setList] = useState("");

  // WHEN THE PAGE LOADS IT FETCH THE API

  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${list}`, {
        headers: {
          "X-Api-Key": APIKEY,
        },
      })
      .then((res) => {
        setQuote(res.data[0].quote);
        setAuthor(res.data[0].author);
      });
  }, []);
  // WHEN THE LIST CHANGE IT FETCH THE API
  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${list}`, {
        headers: {
          "X-Api-Key": APIKEY,
        },
      })
      .then((res) => {
        setQuote(res.data[0].quote);
        setAuthor(res.data[0].author);
      });
  }, [list]);

  // WHEN YOU CLICK ON THE BUTTON
  const next = () => {
    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${list}`, {
        headers: {
          "X-Api-Key": APIKEY,
        },
      })
      .then((res) => {
        setQuote(res.data[0].quote);
        setAuthor(res.data[0].author);
      });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-400">
      <div className="parent w-[95%] md:w-[50%] text-center h-full flex justify-center items-center flex-col">
        <select
          id="topics"
          name="topics"
          className="uppercase text-center font-bold text-xl p-3 bg-blue-500 text-white hover:text-black transition-all hover:bg-blue-100 mb-5 rounded-2xl"
          ref={category}
          onClick={() => setList(category.current.value)}
        >
          <option value="age">age</option>
          <option value="alone">alone</option>
          <option value="amazing">amazing</option>
          <option value="anger">anger</option>
          <option value="architecture">architecture</option>
          <option value="art">art</option>
          <option value="attitude">attitude</option>
          <option value="beauty">beauty</option>
          <option value="best">best</option>
          <option value="birthday">birthday</option>
          <option value="business">business</option>
          <option value="car">car</option>
          <option value="change">change</option>
          <option value="communication">communication</option>
          <option value="computers">computers</option>
          <option value="cool">cool</option>
          <option value="courage">courage</option>
          <option value="dad">dad</option>
          <option value="dating">dating</option>
          <option value="death">death</option>
          <option value="design">design</option>
          <option value="dreams">dreams</option>
          <option value="education">education</option>
          <option value="environmental">environmental</option>
          <option value="equality">equality</option>
          <option value="experience">experience</option>
          <option value="failure">failure</option>
          <option value="faith">faith</option>
          <option value="family">family</option>
          <option value="famous">famous</option>
          <option value="fear">fear</option>
          <option value="fitness">fitness</option>
          <option value="food">food</option>
          <option value="forgiveness">forgiveness</option>
          <option value="freedom">freedom</option>
          <option value="friendship">friendship</option>
          <option value="funny">funny</option>
          <option value="future">future</option>
          <option value="god">god</option>
          <option value="good">good</option>
          <option value="government">government</option>
          <option value="graduation">graduation</option>
          <option value="great">great</option>
          <option value="happiness">happiness</option>
          <option value="health">health</option>
          <option value="history">history</option>
          <option value="home">home</option>
          <option value="hope">hope</option>
          <option value="humor">humor</option>
          <option value="imagination">imagination</option>
          <option value="inspirational">inspirational</option>
          <option value="intelligence">intelligence</option>
          <option value="jealousy">jealousy</option>
          <option value="knowledge">knowledge</option>
          <option value="leadership">leadership</option>
          <option value="learning">learning</option>
          <option value="legal">legal</option>
          <option value="life">life</option>
          <option value="love">love</option>
          <option value="marriage">marriage</option>
          <option value="medical">medical</option>
          <option value="men">men</option>
          <option value="mom">mom</option>
          <option value="money">money</option>
          <option value="morning">morning</option>
          <option value="movies">movies</option>
          <option value="success">success</option>
        </select>

        <div className="px-3 cont w-full bg-[url('../bg.jpg')] h-[50%] bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center flex-col">
          {quote ? (
            <h1 className="font-bold text-xl">"{quote}"</h1>
          ) : (
            <h1 className="font-bold text-xl">
              Check your internet connection.
            </h1>
          )}
          <p className="italic text-xl mt-5">--{author}</p>
        </div>
        <button
          onClick={next}
          className="font-bold text-xl p-3 bg-blue-700 text-white transition-all hover:bg-blue-100 hover:text-black mt-5 rounded-2xl"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
