import {AiOutlinePlusSquare,AiOutlineMinusSquare} from "react-icons/ai"

export const SelectOption = ({inventory,sizeOptHandller,setEa,ea}) => {
    
    const {stock,size} = inventory;
    const eaInputHandller = (e) =>  e.target.value <= Number(stock) ? setEa(Number(e.target.value)) : setEa(Number(stock))

    return (
        <div className="flex gap-4 flex-col">
        <div className="flex flex-row items-center gap-2 ">
            <p className="w-16 text-mainColor font-bold text-xl">옵션 :</p>
            {stock != 0 ? 
            <select className="w-4/5 h-11 border-slate-200 border-2 hover:border-mainColor" onChange={(e)=>sizeOptHandller(e)}>
                <option>사이즈를 선택해주세요.</option>
                {size.map((item,idx)=><option key={item+'_'+idx}>{item.toUpperCase()}</option>)}
            </select>
            : <p>품절입니다.</p>
            }
        </div>
        <div className="flex flex-row items-center gap-2">
            <p className="w-16 text-mainColor font-bold text-xl">수량 :</p>
            {stock != 0 ? 
            <>
                <input className="hover:border-mainColor w-1/3 h-11 pl-2 border-slate-200 border-2 focus:border-mainColor" onChange={(e)=>eaInputHandller(e)} type="number" value={ea}/>
                <AiOutlinePlusSquare onClick={()=> ea < stock ?  setEa((prev) => prev+1) : ''} className="hover:cursor-pointer hover:text-black" color="darkslategrey" size={45}/>
                <AiOutlineMinusSquare onClick={()=>ea > 0 ? setEa((prev) => prev-1):''} className="hover:cursor-pointer hover:text-black" color="darkslategrey" size={45}/>
            </>
            : ''
            }
        </div>
        </div>
    );
};
