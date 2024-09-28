import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, history]);

  return (
    <div className=" h-[60vh] result flex  flex-col items-center justify-center">
      <span className="text-2xl font-semibold">Final Score : {score}</span>
      <Button
        variant="contained"
        color="#212121"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;