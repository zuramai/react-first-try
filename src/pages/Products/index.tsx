import ProductCard from "../../components/ProductCard";

export default function() {
    return (
        <>
            <div className="page">
                <div className="container mx-auto">
                    <section className="products">
                        <div className="section-header mb-8">
                            <h2 className="section-title mb-3">
                                Products
                            </h2>
                            <p>Nostrum repellendus tempore voluptate</p>
                        </div>
                        <div className="grid grid-cols-3">
                            <ProductCard />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}