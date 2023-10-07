import './IngredientList.css';
import React from 'react';

function IngredientList(props) {
    // Create the list items using map.
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            // Return the desired HTML for each ingredient.
            <li key={index} className={ingredient.prepared? 'prepared' : ''}>
                {ingredient.name}
            </li>
        );
    });

    // return the HTML for the Component.
    // ingredientListItems will be rendered as li elements.
    return (
        <sectioin>
        <h2>Ingredients</h2>
        <ul>
            {ingredientListItems}
        </ul>
        </sectioin>
    )
}

export default IngredientList;
