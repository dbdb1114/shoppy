import { useNavigate } from "react-router-dom"


export default function ProductCard({product}) {
    
    const {productId,productTitle, productUrl, sex, price} = product;
    const navigation = useNavigate();

    const productClickHandler = () => {
        navigation(`/product/detail/${productId}`,{state : {product}});
    }

    return (
        <div className="flex flex-col">
            <img src={productUrl} onClick={productClickHandler} className="inline-block hover:cursor-pointer "/>
            <div className="flex flex-row justify-between mt-2">
                <div>
                    <p onClick={productClickHandler}>{productTitle}</p>
                    <p className="text-slate-600">{sex}</p>
                </div>
                <p>{price.toLocaleString()} ₩</p>
            </div>
        </div>
    )
}