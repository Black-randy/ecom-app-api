import React from "react";

const Dashboard = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              Dashboard
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
              Welcome to your dashboard. Here you can manage your account, view stats, and update settings.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Card 1 */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <DashboardCard
                title="Profile"
                description="View and edit your profile information."
                icon={ProfileIcon}
                link="/Profile"
              />
            </div>
            {/* Card 2 */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <DashboardCard
                title="Settings"
                description="View and manage your account settings."
                icon={SettingsIcon}
                link="/Settings"
              />
            </div>
            {/* Card 3 */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <DashboardCard
                title="Add Products"
                description="Add new products to your catalogue."
                icon={AnalyticsIcon}
                link="/Add-Products"
              />
            </div>
            {/* Card 4: Edit Products */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <DashboardCard
                title="Manage Products"
                description="Edit or remove products from your catalogue."
                icon={ManageProductsIcon}
                link="/edit-products"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

const DashboardCard = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2">
      <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary">
        <Icon />
      </div>
      <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
        {title}
      </h3>
      <p className="text-base text-body-color dark:text-dark-6">
        {description}
      </p>
      {link && (
        <a
          href={link}
          className="mt-4 inline-block text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
        >
          Go to {title}
        </a>
      )}
    </div>
  );
};

const ProfileIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 4.8C19.04 4.8 21.6 7.36 21.6 10.4C21.6 13.44 19.04 16 16 16C12.96 16 10.4 13.44 10.4 10.4C10.4 7.36 12.96 4.8 16 4.8ZM16 27.2C11.36 27.2 7.36 24.96 5.6 21.6C5.68 18.16 12 16.32 16 16.32C19.92 16.32 26.32 18.16 26.4 21.6C24.64 24.96 20.64 27.2 16 27.2Z"
      fill="currentColor"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 4.8H4C2.3 4.8 0.85 6.2 0.85 7.95V24.15C0.85 25.85 2.25 27.3 4 27.3H28C29.7 27.3 31.15 25.9 31.15 24.15V7.95C31.15 6.25 29.7 4.8 28 4.8ZM28 7.05C28.05 7.05 28.1 7.05 28.15 7.05L16 14.85L3.85 7.05C3.9 7.05 3.95 7.05 4 7.05H28ZM28 24.95H4C3.5 24.95 3.1 24.55 3.1 24.05V9.25L14.8 16.75C15.15 16.99 15.55 17.1 15.95 17.1C16.35 17.1 16.75 16.99 17.1 16.75L28.8 9.25V24.1C28.9 24.6 28.5 24.95 28 24.95Z"
      fill="currentColor"
    />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3C11.04 3 7 7.04 7 12C7 16.96 11.04 21 16 21C20.96 21 25 16.96 25 12C25 7.04 20.96 3 16 3ZM16 18C12.69 18 10 15.31 10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18Z"
      fill="currentColor"
    />
    <path
      d="M16 0C14.35 0 12.7 0.31 11.1 0.91C9.1 1.69 7.4 3.04 6.1 4.77C4.8 6.5 4 8.65 4 11C4 13.35 4.8 15.5 6.1 17.23C7.4 18.96 9.1 20.31 11.1 21.09C12.7 21.69 14.35 22 16 22C17.65 22 19.3 21.69 20.9 21.09C22.9 20.31 24.6 18.96 25.9 17.23C27.2 15.5 28 13.35 28 11C28 8.65 27.2 6.5 25.9 4.77C24.6 3.04 22.9 1.69 20.9 0.91C19.3 0.31 17.65 0 16 0ZM16 20C13.72 20 11.52 19.22 9.76 17.76C8 16.3 6.88 14.23 6.5 12C6.88 9.77 8 7.7 9.76 6.24C11.52 4.78 13.72 4 16 4C18.28 4 20.48 4.78 22.24 6.24C24 7.7 25.12 9.77 25.5 12C25.12 14.23 24 16.3 22.24 17.76C20.48 19.22 18.28 20 16 20Z"
      fill="currentColor"
    />
  </svg>
);

const ManageProductsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM23 16.7H16.7V23H15.3V16.7H9V15.3H15.3V9H16.7V15.3H23V16.7Z"
      fill="currentColor"
    />
  </svg>
);
