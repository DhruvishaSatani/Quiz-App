import React, { useState } from "react";
import quizImg from "../../assets/quiz.svg";
import { useNavigate } from "react-router-dom";
import { TextField,MenuItem ,Button} from "@material-ui/core";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../Components/ErroMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
          const [category, setCategory] = useState("");
          const [difficulty, setDifficulty] = useState("");
          const [error, setError] = useState(false);

          const navigate = useNavigate();


          const handleSubmit = () => {
                    if (!category || !difficulty || !name) {
                      setError(true);
                      return;
                    } else {
                      setError(false);
                      fetchQuestions(category, difficulty);
                      navigate("/quiz");
                    }
                  };
  return (
    <div className="flex justify-around content">
      <div className="  settings w-[45%] flex flex-col p-[10px] items-center font-medium ">
        <span className="text-4xl">Quiz Settings</span>

        <div className="w-full p-[20px] justify-evenly flex-[0.8] flex flex-col">
        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            className="mb-[25px]"
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            className="mb-[30px]"
          >{Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            className="mb-[30px]"
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img
        src={quizImg}
        alt=""
        className=" banner w-[55%] align-middle p-[8px]  mt-4"
      />
    </div>
  );
};

export default Home;
