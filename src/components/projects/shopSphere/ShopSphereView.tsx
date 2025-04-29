import { ProductCard } from './ProductCard';
import { ShopSphereNavbar } from './ShopSphereNavbar';

const mockProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Premium noise-cancelling wireless headphones',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Track your fitness and stay connected',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const ShopSphereView = () => {
  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
  };

  return (
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark transition-colors duration-200">
        <ShopSphereNavbar />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-primary-dark dark:text-primary-light mb-8">
            Featured Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </main>
      </div>
  );
};

export default ShopSphereView;