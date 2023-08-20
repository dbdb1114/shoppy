import { useQuery } from "@tanstack/react-query"
import { useApiContext } from "../../context/ApiContext";
import ProductCard from "../../component/ProductCard";

export default function Main () {
    
    const {api} = useApiContext();
    const {isLoading, error, data : mainProductList}
        = useQuery(['mainProduct'],()=> api.productList(true));
    
    return(
        <div>
            <div className="bg-[url('../public/image/mainBanner.jpg')] h-96 bg-center ">
                <div className="w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                    <p className="text-5xl">Shop With Us</p>
                    <p className="text-2xl">Best Product, High Quality</p>
                </div>
            </div>
            <p className="text-mainColor font-bold text-center text-4xl pb-5 my-10 border-b-rose-400 border-b-2">Best Product</p>
            <div className="grid w-full gap-5 mt-10 px-3 md:px-8  mb-20 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                    {isLoading ?'':''}
                    {error ? '' : ''}
                    {mainProductList && mainProductList.map((item,idx)=>{
                        return <ProductCard key={idx+`${item.title}`} product={item}/>
                    }) }
            </div>
        </div>
    )
}