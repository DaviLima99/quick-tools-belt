interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    variant: keyof typeof variants
}

const variants = {
    default: "bg-violet-700 hover:bg-violet-800",
    outline: "bg-violet-400 text-black hover:bg-violet-600",
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