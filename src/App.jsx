import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import React, { useState } from 'react';
import Quiz from "./Pages/Quiz/Quiz";
import axios from "axios";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  return (
   
    <BrowserRouter>
    <div className="min-h-[90vh] background-app m-[5px] p-[5px]" >
      <Header />
      <Routes>
        <Route path="/" exact element={<Home name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}/>}/>
        <Route path="/quiz" exact element={<Quiz
               name={name}
               questions={questions}
               score={score}
               setScore={setScore}
               setQuestions={setQuestions} 
        />}/>
        <Route path="/result" exact element={<Result name={name} score={score} />}/>
          

      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
