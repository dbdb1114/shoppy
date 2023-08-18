import { useQuery } from "@tanstack/react-query"
import { useApiContext } from "../../context/ApiContext";
import ProductsCard from "../../component/ProductsCard";

export default function Main () {
    
    const {api} = useApiContext();
    const {isLoading, error, data : mainProductsList}
        = useQuery(['mainProducts'],()=> api.productList(true));
    
    console.log(mainProductsList)
    console.log(123)
    return(
        <div className="bg-[url('../public/image/mainBanner.jpg')] h-96 bg-center ">
            <div className="w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                <p className="text-5xl">Shop With Us</p>
                <p className="text-2xl">Best Products, High Quality</p>
            </div>
            <p className="text-mainColor font-bold text-center text-4xl pb-5 my-10 border-b-rose-400 border-b-2">Best Product</p>
            <div className="flex flex-row w-full gap-5 mt-10">
                {isLoading ?'':''}
                {error ? '' : ''}
                {mainProductsList && mainProductsList.map((item,idx)=>{
                    return <ProductsCard item={item}/>
                }) }
            </div>
        </div>
    )
}