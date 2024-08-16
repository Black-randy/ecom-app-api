import React from "react";
import GoogleMapReact from "google-map-react";

const MapMarker = ({ text }) => (
  <div className="bg-primary text-white p-2 rounded-lg shadow-lg">
    {text}
  </div>
);

const AboutUs = () => {
  const mapDefaults = {
    center: {
      lat: 7.2906, // Latitude for Kandy
      lng: 80.6337, // Longitude for Kandy
    },
    zoom: 14,
  };

  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <span className="block mb-4 text-lg font-semibold text-primary">
              About Willow Tree (Pvt) Ltd.
            </span>
            <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
              Crafting Unique & Personalized Spaces Since 1985
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Located in the heart of Kandy, Willow Tree (Pvt) Ltd. has been 
              transforming spaces for decades. Our team of expert designers 
              specializes in creating unique and personalized interiors that 
              reflect your style and preferences.
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              From custom furniture design to comprehensive interior 
              consultations, we are dedicated to helping you create the home 
              of your dreams. Explore our extensive portfolio and let us 
              bring your vision to life.
            </p>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
            >
              View Our Portfolio
            </a>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div style={{ height: "40vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_API_KEY,
                }}
                defaultCenter={mapDefaults.center}
                defaultZoom={mapDefaults.zoom}
              >
                <MapMarker
                  lat={7.2906}
                  lng={80.6337}
                  text="Willow Tree (Pvt) Ltd."
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
