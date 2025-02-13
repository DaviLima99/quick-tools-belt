interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    variant: keyof typeof variants
}

const variants = {
    default: "bg-blue-500 hover:bg-blue-600",
    outline: "bg-gray-300 text-black hover:bg-gray-400",
};

const Button = ({ children, onClick, variant = "default" }: ButtonProps) => {
    const baseStyles = "px-4 py-2 rounded text-white";

    return (
        <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;