import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  ariaLabel,
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) => {
  // Base classes
  const baseClasses = "font-general-regular rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";
  
  // Variant classes
  const variantClasses = {
    primary: "bg-accent-light dark:bg-accent-dark text-white hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 focus:ring-accent-light/50 dark:focus:ring-accent-dark/50 shadow-sm",
    secondary: "bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light hover:bg-opacity-90 focus:ring-secondary-light/50 dark:focus:ring-secondary-dark/50",
    outline: "border border-ternary-light dark:border-ternary-dark text-primary-dark dark:text-primary-light hover:bg-secondary-light dark:hover:bg-secondary-dark focus:ring-ternary-light/50 dark:focus:ring-ternary-dark/50 bg-transparent",
    ghost: "text-primary-dark dark:text-primary-light hover:bg-secondary-light dark:hover:bg-secondary-dark focus:ring-ternary-light/50 dark:focus:ring-ternary-dark/50 bg-transparent",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;