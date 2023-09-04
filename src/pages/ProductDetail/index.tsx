import Button from "@/components/Button"
import { Product } from "@/types/product"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function() {
    const [product, setProduct] = useState<Product|null>(null)
    let { productId } = useParams()

    const fetchProduct = () => {
        axios.get('/products/' + productId)
            .then(res => {
                setProduct(res.data)
            })
    }

    useEffect(() => fetchProduct(), [])

    return (
        <>
            <div className="page">
                <div className="container mx-auto">
                    {product && (
                        <section className="products">
                            <div className="section-body">
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                                    <div className="product-images col-span-2">
                                        <img src={product.thumbnail} alt="Thumbnail" className="w-full" />
                                    </div>
                                    <div className="summary bg-slate-100 p-10">
                                        <div className="category text-slate-500 text-sm mb-3">
                                            {product.brand} &rsaquo; {product.category}
                                        </div>
                                        <h2 className="section-title mb-8">
                                            {product.title}
                                        </h2>
                                        <p>{product.description}</p>
                                        <h3 className="price text-4xl mt-10 mb-5">${product.price}</h3>
                                        <Button full={true}>Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </>
    )
}