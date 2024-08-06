import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const maps = () => {
    const defaultProps = {
        center: {
          lat: 7.019529,
          lng: 79.9,
        },
        zoom: 12,
      };

  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-6/12">
        <span className="block mb-4 text-lg font-semibold text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
              Make your customers happy by giving services.
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less.
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <a
              href="javascript:void(0)"
              className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
            >
              Get Started
            </a>
        </div>

        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
         
    
            <div style={{ height: "40vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_API_KEY,
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={7.019529}
                  lng={79.9}
                  text={process.env.REACT_APP_PLACE_NAME}
                />
              </GoogleMapReact>
          

          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default maps;