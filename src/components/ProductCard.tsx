interface Props {
    title: string,
    description: string, 
    image: string
}
export default function({ title, image, description}: Props) {
    return (
        <>
            <div className="card">
                <img src={image} alt="" className="card-thumbnail"/>
                <div className="card-body px-3 py-4">
                    <h3 className="card-title mb-2 text-2xl font-bold text-black">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}