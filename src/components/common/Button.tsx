import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'demonstracao';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-150';

    const variantStyles = {
        primary: 'bg-brand-primary hover:bg-orange-600 text-white focus:ring-brand-primary',
        secondary: 'bg-brand-secondary hover:bg-blue-700 text-white focus:ring-brand-secondary',
        outline: 'bg-transparent hover:bg-gray-100 text-brand-primary border border-brand-primary focus:ring-brand-primary',
        demonstracao: 'bg-orange-500 hover:bg-black text-white border border-brand-primary focus:ring-brand-primary',
    };

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-7 py-3 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;