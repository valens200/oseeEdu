import React from 'react'


function Buttons(){
    var styles;
    const getStyles = (item) => {
        switch(item){
            case 'AFFORDABLE':
                styles ="bg-white px-7 font-semibold bg-[#0dc434] hover:bg-white hover:text-[#0dc434] py-3 md:py-2 text-white  rounded-full";
                break;
            default:
                styles ="bg-white px-7 font-semibold hover:bg-[#0dc434] hover:text-white text-[#0dc434] py-3 md:py-2 rounded-full";
                break;
        }  
        return styles;

        
    }

    const buttonContents = ['AFFORDABLE', 'EMPLOYABLE', 'EXPERTIZE', 'MODERN'];
    return (
        <div className=" -translate-y-9 container  mx-auto inline-flex flex-col justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-7 text-[0.60rem] md:text-[0.40rem]">
            {buttonContents.map((button, index) => (
                <button className={getStyles(button)} key={index}>{button}</button>
            ))}
        </div>
    )
}
export default Buttons