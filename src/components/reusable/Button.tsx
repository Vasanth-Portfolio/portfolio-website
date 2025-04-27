import { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  title,
  type = "button",
  ariaLabel,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
