export default function({ title = "", description = 'Nostrum repellendus tempore voluptate'}) {
    return (
        <>
            <div className="card">
                <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
                <div className="card-body px-3 py-4">
                    <h3 className="card-title mb-2 text-2xl font-bold text-black">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}