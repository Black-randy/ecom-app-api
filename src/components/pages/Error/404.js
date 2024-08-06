import React from "react";

const Error = () => {
  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">



             
                <div className="container mx-auto">
                  <div className="-mx-4 flex">
                    <div className="w-full px-4">
                      <div className="mx-auto max-w-[400px] text-center">
                        <h2 className="mb-2 text-[50px] font-bold leading-none text-dark sm:text-[80px] dark:text-white md:text-[100px]">
                          404
                        </h2>
                        <h4 className="mb-3 text-[22px] font-semibold leading-tight dark:text-white text-dark">
                          Oops! That page can’t be found
                        </h4>
                        <p className="mb-8 text-lg  dark:text-white text-dark">
                          The page you are looking for it maybe deleted
                        </p>
                        <a
                          href="home"
                          className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'  
                          >
                          Go To Home
                        </a>
                      </div>
                    </div>
                  </div>
                </div>





            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
