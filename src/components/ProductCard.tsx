import { Link } from "react-router-dom"

interface Props {
    title: string,
    description: string,
    image: string
    id: number
}
export default function ({ id, title, image, description }: Props) {
    return (
        <>
            <div className="card">
                <Link to={`/products/${id}`}>
                    <img src={image} alt="" className="card-thumbnail" />
                </Link>
                <div className="card-body px-3 py-4">
                    <h3 className="card-title mb-2 text-2xl font-bold text-black">
                        <Link to={`/products/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}