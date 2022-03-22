import React from "react"
import WarningIcon from '../../assets/images/Vector.png'
import CloseIcon from '../../assets/images/close.png'

type AlertProps={
    // handleClick:(event: React.MouseEvent<HTMLImageElement>)=>void
    message:string
    setCloseAlert:any
    title:string
}

 export const Alert:React.FC<AlertProps>=(
     {
         message,
         setCloseAlert,
         title
        }
    )=>{
  
    return(
        <div className=" flex flex-col md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px] w-5/6 m-2 h-[100px] md:h-[88px] lg:h-[88px] xl:h-[88px] 2xl:h-[88px] bg-[#2E3849] rounded-[3px] px-4 py-5">
           <div className="h-6 w-full flex flex-row items-center">
            <img alt='icon' src={WarningIcon} className='h-5 w-5 top-[1.89px] left-[2px] ml-[18px]' />
            <p className="h-6 w-[296px] static font-medium text-base leading-5 flex items-center tracking-[-0.18px] text-white ml-[14px]">
                {title}
            </p>

            <button onClick={()=>{setCloseAlert(false)}}>
                <img alt='icon' src={CloseIcon} className='h-[8.76px] w-[8.76px] top-[27.54px]' />
            </button>
           </div>

           <p className="static h-5 top-7 font-normal text-sm tracking-[-0.09px] text-white flex-none order-1 self-stretch grow-0 ml-[52px]">
           {message}
           </p>
           
        </div>
    )
}

export default Alert;