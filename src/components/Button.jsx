import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "font-medium transition-colors duration-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50",
    tertiary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    success: "bg-green-600 hover:bg-green-700 text-white",
  };

  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-6",
    lg: "py-3 px-8 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant] || variantStyles.primary}
        ${sizeStyles[size] || sizeStyles.md}
        ${widthStyle}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
