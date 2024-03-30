export function Input(props: { type: string, label?: string, placeholder?: string, onChange: (e: any) => void, value : string}) {
    const { type, label, placeholder, onChange, value } = props;
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-xs ">{label}</label>}
            <input
                value={value}
                onChange={onChange}
                className={`border-2 py-1 px-2 border-primaryBorder rounded-md text-sm placeholder-gray-500 outline-none `}
                placeholder={placeholder}
                type={type}
            />
        </div>
    )
}