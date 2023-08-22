import React, { useEffect } from 'react'
import { useState } from "react";
import { SelectOption } from './SelectOption';
import Product from '../dto/Product';

export default function ProductDetailCard({productId, inventory, isCart, cartSize, cartEa, cartObj, setCartObj, cartIdx}) {

 
    const [ selectedSize, setSelectedSize ] = useState('x');

    const sizeOptHandller = (e) => { setSelectedSize(e.target.value) };
    const [ea, setEa] = useState(Number(cartEa) || 1);
    const [dpPrice,setDpPrice] = useState(0);

    // const { isLoading, error, data: inventory } 
    // = !inventory ? useQuery([`product${productId}_inventory`],()=> api.productInventory(productId)) : '';
    
    const product = 
    isCart ? new Product(productId,cartSize,cartEa,cartEa * cartObj.price )
    : new Product(productId,undefined,1);

    useEffect(()=>{
        product.setEa(ea);
        product.setPrice(Number(ea) * product.getPrice());
        if(isCart){
            const temp = [...cartObj];
            temp[cartIdx] = {...product};
            isCart&&setCartObj(temp);
        } else {
            setDpPrice(product.getPrice())
            product.setSize(selectedSize);
        }
    },[selectedSize,ea])

    if ( !!inventory ) {

        const { productId, productTitle, description, productUrl, sex, price } = inventory;
        product.setPrice(price * product.getEa());
    
        return (
            <div className="flex md:flex-row flex-col gap-5 border-b border-mainColor py-4">
                <img className={!isCart?`inline-block md:w-1/2 w-full`:'inline-block w-60'} src={productUrl}/>
                <div className={!isCart?"md:w-1/2 w-full":"flex flex-row w-full items-center justify-between"}>
                    
                    <div className={!isCart?"border-slate-300 border-b-2 pb-2":""}>
                        <p className={!isCart ? "text-4xl font-bold" : "text-2xl font-bold "}>{productTitle}</p>
                        <p className='text-mainColor text-xl font-bold'>{cartSize}</p>
                        <p className={!isCart ? "text-3xl font-bold" : "text-1xl font-bold "}>₩{price}</p>
                    </div>
                    
                    {!isCart?<p className="text-xl mt-2 my-5">{description}</p>: ''}
                    <SelectOption inventory = {inventory} sizeOptHandller={sizeOptHandller} ea={ea} setEa={setEa} isCart={isCart}/>
                    {
                    !isCart &&
                        <div className=" mt-20">
                            <div className='flex flex-row gap-5 justify-end'><p className='text-black font-bold text-xl'> 상품가격 :</p><p className='w-32 text-end pr-10 text-mainColor text-2xl font-bold'> {dpPrice.toLocaleString()}₩</p></div>
                            <div className='flex flex-row gap-5 justify-end'><p className='text-black font-bold text-xl'> 배송료 :</p><p className='w-32 text-end pr-10 text-mainColor text-2xl font-bold'> 2,500₩</p></div>
                            <div className='flex flex-row gap-5 justify-end'><p className='text-black font-bold text-xl'> 총 가격 :</p><p className='w-32 text-end pr-10 text-mainColor text-2xl font-bold'> {(dpPrice + 2500).toLocaleString()}₩</p> </div>
                            <div className="flex flex-row gap-4 mt-2">
                                <button className={buttonStyle} >구매하기</button>
                                <button className={buttonStyle} >장바구니</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


const buttonStyle = "bg-mainColor hover:opacity-90 bg-opacity-90 text-white text-xl w-1/2 h-16 "