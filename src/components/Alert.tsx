interface Props {
    type: "danger" | "success"
    children?: any 
}
export default function({type, children}: Props) {
    const bg = type == 'danger' ? 'bg-red-600' : 'bg-green-600'
    return (
        <div className={`alert text-white p-3 mb-3 rounded-sm ${bg}`}>
            {children}
        </div>
    )
}