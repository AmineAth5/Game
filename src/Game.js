import React, { useEffect, useState } from "react";

export default function Game(props) {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [choosedColors, setChoosedColors] = useState([]);
  const [shuffledArray, setShuffledArray] = useState(props.stage.colors);

  // function that shuffles the elements
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  useEffect(() => {
    nextLevel();
  }, [highScore]);
  const shuffledColors = shuffleArray(Object.entries(props.stage.colors));

  function divClicked(selectedColor) {
    let levelColorsArray = shuffledColors.map((color) => color[0]);

    // Check if the color is not already chosen so we can push it
    if (!choosedColors.includes(selectedColor)) {
      choosedColors.push(selectedColor);
      if (props.stage.difficulty === "Easy") {
        setScore((prevScore) => prevScore + 1);
      } else if (props.stage.difficulty === "Medium") {
        setScore((prevScore) => prevScore + 2);
      } else if (props.stage.difficulty === "Hard") {
        setScore((prevScore) => prevScore + 3);
      } else if (props.stage.difficulty === "Super") {
        setScore((prevScore) => prevScore + 4);
      } else if (props.stage.difficulty === "Insane") {
        setScore((prevScore) => prevScore + 5);
      } else if (props.stage.difficulty === "Legendary") {
        setScore((prevScore) => prevScore + 6);
      }

      // Check if all colors are chosen
      if (choosedColors.length === levelColorsArray.length) {
        // Check if all chosen colors match level colors
        const allColorsChosen = choosedColors.every((color) =>
          levelColorsArray.includes(color)
        );

        if (allColorsChosen) {
          //win case, so we go to next level
          nextLevel();
          setChoosedColors([]);
        } else {
          alert("had cas 3mrha ktji");
        }
      }
    } else {
      setCounter(0);
      props.funcNiv(0);
      setChoosedColors([]);
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      alert("Oops ☹!, You clicked the same color twice, Hard luck 😥.");
    }

    setShuffledArray(shuffledColors);
    console.log(levelColorsArray.sort());
    console.log(choosedColors.sort());
  }

  function nextLevel() {
    if (counter < props.stages.length) {
      setCounter((prevCount) => prevCount + 1);
      props.funcNiv(counter);
    } else {
      alert("Congratulations 🎉!, You finished the game .");
    }
  }

  return (
    <div>
      <h1 className="Game--Title">Memorise The Colors !</h1>
      <p className="Level--Counter">Level : {props.niv + 1}</p>
      <p className="Difficulty">{props.stage.difficulty}</p>
      <p className="Score--Counter">
        Score : <b>{score}</b> Your Highest Score : <b>{highScore}</b>
      </p>

      <article className="colors--container" id="parent">
        {shuffledColors.map(([colorName, colorHash], index) => (
          <div
            className="color--div"
            onClick={(event) => {
              divClicked(colorName, event.target);
            }}
            id={colorName}
            key={colorName}
            style={{ backgroundColor: colorHash, padding: "10px" }}
          >
            <p className="Color--Name">{colorName}</p>
          </div>
        ))}
      </article>
      {/* <button onClick={nextLevel}>next level</button> */}
    </div>
  );
}
