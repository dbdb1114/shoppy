import { useLocation, useParams } from "react-router-dom"
import {IoIosArrowForward} from "react-icons/io"
import { useQuery } from "@tanstack/react-query";
import { useApiContext } from "../../context/ApiContext";
import { SelectOption } from "../../component/SelectOption";
import { useEffect, useState } from "react";

export default function ProductDetail() {
    
    const { productId } = useParams();
    const { state : {product} } = useLocation();
    const { productTitle, productUrl, sex, description, price } = product;
    const { api } = useApiContext();
    
    const [ selectedSize, setSelectedSize ] = useState('x');
    const sizeOptHandller = (e) => { setSelectedSize(e.target.value) };

    const [ ea, setEa ] = useState(0);
    console.log(ea);

    const { isLoading, error, data: inventory } 
    = useQuery(['inventory'],()=> api.productInventory(productId));
    
    return (
        <section className="border-t border-mainColor py-6 px-4">
            <p className="flex flex-row items-center mb-3"> <IoIosArrowForward/>{sex}</p>
            <div className="flex md:flex-row flex-col gap-5 ">
                <img className="inline-block md:w-1/2 w-full " src={productUrl}/>
                <div className="md:w-1/2 w-full">
                    <div className="border-slate-300 border-b-2 pb-2">
                        <p className="text-4xl font-bold">{productTitle}</p>
                        <p className="text-3xl font-bold">₩{price}</p>
                    </div>
                    <p className="text-xl mt-2 my-5">{description}</p>
                    {inventory && <SelectOption inventory = {inventory} sizeOptHandller={sizeOptHandller} ea={ea} setEa={setEa}/>}
                    {inventory && <p className="mt-2 text-slate-600">남은 수량 : {inventory.stock}</p>}
                    <div className="flex flex-row gap-4 mt-20">
                        <button className="bg-mainColor hover:opacity-90 bg-opacity-90 text-white text-xl w-1/2 h-16 " >구매하기</button>
                        <button className="bg-mainColor hover:opacity-90 bg-opacity-90 text-white text-xl w-1/2 h-16 " >장바구니</button>
                    </div>
                </div>
            </div>
        </section>
    );

}