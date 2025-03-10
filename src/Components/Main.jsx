import react from 'react';
import ListIngredients from './ListIngredients'
import Recipe from './Recipe'

import { genAI } from "../util/geminiAPI.js";
export default function Main(){
    const [listIngredients, setListIngredients] = react.useState([]);
    const [recipe, setRecipe] = react.useState("");
    
    function submitEventHandler(formData){
        const newIngredient = formData.get("ingredient");
        setListIngredients( preListIng =>  [...preListIng, newIngredient])
    }
    const handleRecipe = async (e) => {
        e.preventDefault();
        const geminiQuery =
      "You are an assistant that recommends recipes based on the ingredients you have on hand. You have the following ingredients: "+listIngredients.join(", ")+". Please recommend a recipe.The recipe can include additional ingredients that are not listed., but try to not add too many extra ingredients. Format your response in markdown to make it easier to render in web pages.";
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(geminiQuery);
        const response = await result.response;
        const recipeMarkDown = response.text();
        setRecipe(recipeMarkDown)
      };  
    return(
        <main>
            <form className="add-ingredient-from" action={submitEventHandler}>
                <input type="text" placeholder="eg. Oregano" aria-label="Add ingredient" name="ingredient"  />
                <button>Add ingredient</button>
            </form>
            {listIngredients.length >0 ?
             <ListIngredients listIngredients={listIngredients}  handleButtonClick={handleRecipe} />     
            : null}
            {recipe ? <Recipe recipe={recipe} />:null}
        </main>
    )
}

