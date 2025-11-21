export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-400 text-indigo-600 shadow-sm focus:ring-indigo-50 bg-gray-200" +
                className
            }
        />
    );
}
