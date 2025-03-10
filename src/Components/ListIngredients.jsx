export default function ListIngredients(props){
    const listIngredientItems = props.listIngredients.map(listIngredient => {
        return <li key={listIngredient}>{listIngredient}</li>
    })
    return(
        <section className="ingredients-on-hand">
            <h3 className="ingredients-title">Ingredients on hand:</h3>
            <ul className="ingredients-list">
                {listIngredientItems}
            </ul> 
            {props.listIngredients.length >3 ?
            
                <div className="ready-container">   
                    <div className="get-a-recipe">
                        <div>
                        <h3>Ready for a recipe</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                        </div>
                        <button className="get-a-recipe-button" onClick={props.handleButtonClick} >Get a Recipe</button>
                    </div>
                </div>
                : null}
          </section>
             
    )
}

      

      
            