

const Button = ({ text, fullWidth }) => {
    return (
        <div>
            <button
                className={`${
                    fullWidth ? 'w-full' : 'w-auto'
                } bg-[#FEBF00] text-[#0A1425] py-3 px-4 text-sm lg:text-[16px] lg:px-6 font-roboto font-heavy uppercase`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
