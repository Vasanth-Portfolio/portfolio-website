import Button from "../../reusable/Button";

export const ShopSphereNavbar = () => {

  return (
    <nav className="bg-primary-light dark:bg-primary-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="font-heading text-xl font-bold text-accent-light dark:text-accent-dark">
              ShopSphere
            </span>
          </div>
          <div className="flex items-center space-x-4">
           
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};