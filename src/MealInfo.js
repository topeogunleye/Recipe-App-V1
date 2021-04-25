import { useParams } from 'react-router';
import useFetchMealDbApi from './useFetchMealDbApi';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import SkeletonMealInfo from './skeletons/SkeletonMealInfo';

const MealInfo = () => {
  const { mealID } = useParams();
  const [ingredients, setIngredients] = useState('');
  const history = useHistory();

  const [{ data, isLoading, isError }, doFetch] = useFetchMealDbApi();

  useEffect(
    () =>
      doFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`),
    [doFetch, mealID, data]
  );

  function createIngredientsArray(meal) {
    const ingredientsData = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredientsData.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    setIngredients(ingredientsData);
  }

  console.log(ingredients);

  if (data && ingredients === '') {
    console.log(data);
    const meal = data.meals[0];
    createIngredientsArray(meal);
  }

  return (
    <div className="bg-gray-900 text-white relative">
      <div className="m-auto max-w-3xl flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <div id="single-meal">
          {isError && <div>Something went wrong ...</div>}
          {isLoading ? (
            [1,2,3,4,5].map((n) => <SkeletonMealInfo Key={n} theme="dark" />)
          ) : (
            ingredients &&
            data && (
              <div
                className="single-meal my-8 mx-auto w-3/4"
                key={data.meals[0].idMeal}
              >
                <h1>{data.meals[0].strMeal}</h1>
                <button
                  className="absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-white hover:text-black bg-gray-800 py-1 px-1 sm:py-2 sm:px-4"
                  onClick={() => {
                    history.go(-1);
                  }}
                >
                  &laquo; Go Back
                </button>
                <img
                  className="single-meal-img"
                  src={data.meals[0].strMealThumb}
                  alt={data.meals[0].strMeal}
                />
                <div className="single-meal-info">
                  <p>{data.meals[0].strCategory}</p>
                  <p>{data.meals[0].strArea}</p>
                </div>
                <div className="main">
                  <p className="single-meal-p">
                    {data.meals[0].strInstructions}
                  </p>
                  <h2>Ingredients</h2>
                  <ul className="single-meal-ul">
                    {ingredients.map((ing) => (
                      <li className="single-meal-ul-li" key={uuidv4()}>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
