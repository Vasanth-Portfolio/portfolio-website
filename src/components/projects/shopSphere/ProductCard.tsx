import React from "react";
import Button from "../../reusable/Button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  onAddToCart?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  description,
  onAddToCart,
}) => {
  return (
    <div className="bg-primary-light dark:bg-primary-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-primary-dark dark:text-primary-light mb-2">
          {name}
        </h3>
        {description && (
          <p className="font-general-regular text-sm text-ternary-dark dark:text-ternary-light mb-3">
            {description}
          </p>
        )}
        <div className="flex justify-between items-center">
          <span className="font-heading font-bold text-accent-light dark:text-accent-dark">
            ${price.toFixed(2)}
          </span>

          <Button
            title="Add to Cart"
            onClick={() => onAddToCart?.(id)}
            aria-label="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};
