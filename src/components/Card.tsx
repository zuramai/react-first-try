interface Props {
    children: any
}
export default function({children}: Props) {
    return (
        <>
            <div className="card">
                {children}
            </div>
        </>
    )
}