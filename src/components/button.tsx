const Button = ({ type, onClick, children }: {
    type: "primary" | "light",
    onClick: () => void,
    children: React.ReactNode
}) => <>
    <button onClick={onClick}>
        {children}
    </button>
    <style jsx>{`
        button {
            background-color: var(--${type || "primary"}-1);
            color: var(--font-color-1);
            border: 0;
            padding: 10px 20px;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 16px;
        }
        button:hover,
        button:focus {
            background-color: var(--${type || "primary"}-2);
        }
    `}</style>
</>;

export default Button;