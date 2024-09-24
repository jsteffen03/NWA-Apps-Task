import React from 'react'

interface ButtonProps { // Button Prop Types for passed in button props
    variant?: 'default' | 'primary' | 'secondary' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    text?: React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    backgroundColor?: string;
    label: string;
}

function Button({ //Button props with default values if non passed in
    variant = 'default', 
    size = 'medium', 
    text, 
    onClick, 
    icon, 
    iconPosition = 'left'
}: ButtonProps) {

    //basic Tailwind 
    const baseStyle = 'inline-flex items-center justify-center font-semibold rounded focus:outline-none';

    // Changes the size based on the prop
    const sizeStyle = {
      small: 'px-2 py-1 text-xs',
      medium: 'px-4 py-2 text-base',
      large: 'px-10 py-5 text-lg',
    };
  
    // Changes the variant style based on prop
    const variantStyle = {
      default: 'bg-gray-200 text-black hover:bg-gray-300',
      primary: 'bg-primary text-white hover:bg-primary-dark',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark',
      outlined: 'border border-gray-300 text-black hover:bg-gray-100',
    };
  
    // Combines the styles to create the correct class for Tailwind 
    let combinedStyle = `${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]}`;
  
    return (
      <button className={combinedStyle} onClick={onClick}>
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {text}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </button>
    );
  };

export default Button