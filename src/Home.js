import { SearchIcon, RefreshIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';
import useFetchMealDbApi from './useFetchMealDbApi';
import { Link } from 'react-router-dom';
import SkeletonElement from './skeletons/SkeletonElement';
import SkeletonHome from './skeletons/SkeletonHome';

const Home = () => {
  const [query, setQuery] = useState('');
  const [
    { data, isLoading, isError },
    doFetch,
  ] = useFetchMealDbApi(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken',
    { meals: [] }
  );

  return (
    <Fragment>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="m-auto max-w-3xl flex flex-col items-center justify-center text-center">
          <h1 className="font-black text-2xl">Meal Finder</h1>
          <div className="flex mt-2">
            <form
              className="flex"
              onSubmit={(event) => {
                doFetch(
                  `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
                );

                event.preventDefault();
              }}
            >
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="border rounded-l sm:w-full text-black"
              />
              <button className="search-btn border rounded-r" type="submit">
                <SearchIcon className="h-5 w-5 text-gray-900" />
              </button>
            </form>
            <Link to={'/RandomMeal/'}>
              <button
                className="random-btn border rounded cursor-pointer ml-2.5"
                id="random"
                onCLick={(event) => {
                  doFetch(
                    `https://www.themealdb.com/api/json/v1/1/random.php `
                  );
                  event.preventDefault();
                }}
              >
                <RefreshIcon className="h-5 w-5 text-gray-900" />
              </button>
            </Link>
          </div>

          {isError && <div>Something went wrong ... </div>}
          {!data.meals && <div>There is no result. Try again!</div>}
          {/* {data.meals && <h1>{query}</h1> } */}
          {isLoading ? (
            // <div>Loading ...</div>
            [1, 2, 3, 4, 5].map((n) => <SkeletonHome Key={n} theme="dark" />)
          ) : (
            <div id="meals" className="meals">
              {data.meals &&
                data.meals.map((meal) => (
                  <div className="meal" key={meal.idMeal}>
                    <Link to={`/MealInfo/${meal.idMeal}`}>
                      <img
                        className="meal-img"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                      />
                      <div className="meal-info" data-mealid={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
