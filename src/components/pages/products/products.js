import React, { useContext, useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import { UserContext } from "../../../App";

const Products = () => {
  const [data, setData] = useState([]);
  const { uid } = useContext(UserContext);

  useEffect(() => {
    fetch("/api/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data.length) 
    return 
  <section className="bg-white py-20 dark:bg-dark">
  <div className="container">
    <div className="flex flex-wrap items-center gap-4">
      <button className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white">
        <span>
          <svg
            className="animate-spin"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.5"
              cx="10"
              cy="10"
              r="9"
              stroke="white"
              stroke-width="2"
            />
            <mask id="path-2-inside-1_2527_20936" fill="white">
              <path d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z" />
            </mask>
            <path
              d="M18.4713 13.0345C18.9921 13.221 19.5707 12.9508 19.7043 12.414C20.0052 11.2042 20.078 9.94582 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6285 0.597723 12.4262 0.219019 11.1884 0.0708647C10.6392 0.00512742 10.1811 0.450137 10.1706 1.00319C10.1601 1.55625 10.6018 2.00666 11.1492 2.08616C12.0689 2.21971 12.9609 2.51295 13.7841 2.95511C14.9023 3.55575 15.8615 4.41394 16.5823 5.45872C17.3031 6.50351 17.7649 7.70487 17.9294 8.96348C18.0505 9.89002 18.008 10.828 17.8063 11.7352C17.6863 12.2751 17.9506 12.848 18.4713 13.0345Z"
              stroke="white"
              stroke-width="4"
              mask="url(#path-2-inside-1_2527_20936)"
            />
          </svg>
        </span>
        Loading...
      </button>

      <button className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border border-stroke bg-transparent px-6 py-3 text-base font-medium text-dark dark:border-dark-3 dark:text-white">
        <span>
          <svg
            className="animate-spin"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="#E5E7EB"
              stroke-width="2"
            />
            <mask id="path-2-inside-1_2527_20940" fill="white">
              <path d="M18.4736 13.0353C18.9931 13.2214 19.5703 12.9518 19.7037 12.4163C20.0051 11.2058 20.0781 9.94661 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6278 0.597345 12.4247 0.218536 11.186 0.0705813C10.6381 0.0051315 10.1811 0.449069 10.1707 1.00081C10.1602 1.55254 10.6008 2.0019 11.147 2.08101C12.0682 2.21444 12.9618 2.508 13.7863 2.95091C14.9052 3.5519 15.865 4.4106 16.5862 5.45601C17.3075 6.50142 17.7695 7.7035 17.9341 8.96286C18.0554 9.89095 18.0127 10.8305 17.8103 11.7391C17.6904 12.2778 17.9541 12.8492 18.4736 13.0353Z" />
            </mask>
            <path
              d="M18.4736 13.0353C18.9931 13.2214 19.5703 12.9518 19.7037 12.4163C20.0051 11.2058 20.0781 9.94661 19.9156 8.70384C19.7099 7.12996 19.1325 5.62766 18.2311 4.32117C17.3297 3.01467 16.1303 1.94151 14.7319 1.19042C13.6278 0.597345 12.4247 0.218536 11.186 0.0705813C10.6381 0.0051315 10.1811 0.449069 10.1707 1.00081C10.1602 1.55254 10.6008 2.0019 11.147 2.08101C12.0682 2.21444 12.9618 2.508 13.7863 2.95091C14.9052 3.5519 15.865 4.4106 16.5862 5.45601C17.3075 6.50142 17.7695 7.7035 17.9341 8.96286C18.0554 9.89095 18.0127 10.8305 17.8103 11.7391C17.6904 12.2778 17.9541 12.8492 18.4736 13.0353Z"
              stroke="#3758F9"
              stroke-width="4"
              mask="url(#path-2-inside-1_2527_20940)"
            />
          </svg>
        </span>
        Loading...
      </button>
    </div>
  </div>
</section>  
  ;

  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((product) => (
              <SingleCard
                key={product.id} // Assuming each product has a unique ID
                image={product.image}
                CardTitle={product.title}
                titleHref={`/product/${product.id}`} // Assuming there's a dynamic route for each product
                CardDescription={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
