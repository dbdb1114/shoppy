

export default function ProductsCard({item}) {
    const {productsId,productsTitle, productsUrl, sex, price} = item
    

    return (
        <div className="flex flex-col ">
            <img src={productsUrl} className="inline-block"/>
            <div className="flex flex-row justify-between">
                <div>
                    <p>{productsTitle}</p>
                    <p className="text-slate-600">{sex}</p>
                </div>
                <p>{price.split('').map((item,idx)=> idx % 3 == 2 ? ','+item : item )} W</p>
            </div>
        </div>
    )
}