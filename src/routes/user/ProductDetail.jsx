import { useParams } from "react-router-dom"


export default function ProductDetail() {
    
    const { productId } = useParams();
    console.log(productId)

    return (
        <h1>ProductDetail : {productId}</h1>
    )

}