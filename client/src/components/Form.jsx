import "./Form.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../Redux/Actions.js";

export default function Form() {
  const dispatch = useDispatch();

  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    summary: "",
    score: "",
    healthScore: "",
    instructions: "",
    image: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const dietsMap = useSelector((store) => store.diets);

  function HandleChange(event) {
    setRecipeInfo({
      ...recipeInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createRecipe(recipeInfo));
    alert("Recipe added");
  }

  function HandleDiets(event) {
    setRecipeInfo({
      ...recipeInfo,
      [event.target.name]: Array.from(event.target.selectedOptions).map(
        (p) => p.value
      ),
    });
  }

  return (
    <div className="Create_createContainer">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="Create_Form">
          <label>Title : </label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={recipeInfo.name}
            onChange={HandleChange}
            required
          />
        </div>
        <div className="Create_Form">
          <label>Summary : </label>
          <textarea
            placeholder="About by recipe..."
            type="text"
            name="summary"
            value={recipeInfo.summary}
            onChange={HandleChange}
            required
          />
        </div>
        <div className="Create_Form">
          <label>Score : </label>
          <input
            placeholder="0-100"
            type="number"
            min="0"
            max="100"
            name="score"
            value={recipeInfo.score}
            onChange={HandleChange}
            required
          />
        </div>
        <div className="Create_Form">
          <label>Healthscore : </label>
          <input
            placeholder="0-100"
            type="number"
            min="0"
            max="100"
            name="healthScore"
            value={recipeInfo.healthScore}
            onChange={HandleChange}
            required
          />
        </div>
        <div className="Create_Form">
          <label>Instructions : </label>
          <textarea
            placeholder="Step by Step..."
            type="text"
            name="instructions"
            value={recipeInfo.instructions}
            onChange={HandleChange}
            required
          />
        </div>
        <div className="Create_Form">
          <label>Image : </label>
          <input
            placeholder="Url..."
            type="url"
            name="image"
            value={recipeInfo.image}
            onChange={HandleChange}
            required
          />
        </div>
        <div className="Create_Form">
          <label>Diets : </label>
          <select
            name="diets"
            onChange={HandleDiets}
            multiple="multiple"
            required
          >
            {dietsMap.map((r) => {
              return <option value={r.id}>{r.name}</option>;
            })}
          </select>
        </div>
        <div className="Create_SubmitForm">
          <input type="submit" value="CREATE" />
        </div>
      </form>
    </div>
  );
}
