import {AiOutlinePlusSquare,AiOutlineMinusSquare} from "react-icons/ai"

export const SelectOption = ({inventory,sizeOptHandller,setEa,ea,isCart}) => {
    
    const {stock,size} = inventory;
    const eaInputHandller = (e) =>  e.target.value <= Number(stock) ? setEa(Number(e.target.value)) : setEa(Number(stock))

    return (
        <div className="flex gap-4 flex-col">
            {stock != 0 && !isCart ?
            <div className="flex flex-row items-center gap-2 ">
                <>
                    <p className="w-16 text-mainColor font-bold text-xl">옵션 :</p>
                    <select className="w-4/5 h-11 border-slate-200 border-2 hover:border-mainColor" onChange={(e)=>sizeOptHandller(e)}>
                        <option>사이즈를 선택해주세요.</option>
                        {size.map((item,idx)=><option key={item+'_'+idx}>{item.toUpperCase()}</option>)}
                    </select>
                </>
            </div> : ''
            }
            <div className={isCart?"flex flex-row items-center gap-2":"flex flex-col"}>
                {stock != 0 ? 
                <div className={isCart?"flex flex-row items-center":"flex flex-row gap-2"}>
                    <p className="w-16 text-mainColor font-bold text-xl">수량 :</p>
                    <input className="hover:border-mainColor w-1/3 h-11 pl-2 border-slate-200 border-2 focus:border-mainColor" onChange={(e)=>eaInputHandller(e)} type="number" value={ea}/>
                    <div className={"flex flex-row"}>
                        <button className="hover:opacity-80" onClick={()=> ea < stock ?  setEa((prev) => prev+1) : ''} ><AiOutlinePlusSquare className="hover:cursor-pointer hover:text-black" color="darkslategrey" size={45}/></button>
                        <button className="hover:opacity-80" onClick={()=> ea > 1 ? setEa((prev) => prev-1):''}><AiOutlineMinusSquare className="hover:cursor-pointer hover:text-black" color="darkslategrey" size={45}/></button>
                    </div>
                </div>
                : <p>품절입니다.</p>
                }
                <p className={isCart?" mt-2 text-slate-600": "w-full text-start mt-2 text-slate-600"}>남은 수량 : {inventory.stock}</p>
            </div>
        </div>
    );
};
