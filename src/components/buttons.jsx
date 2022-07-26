import React from 'react'


function Buttons(){
    var styles;
    const getStyles = (item) => {
        switch(item){
            case 'AFFORDABLE':
                styles ="bg-white px-7  w-[84%] md:w-[14%] mx-auto md:mx-0  text-[1rem] font-semibold bg-[#0dc434] hover:bg-white hover:text-[#0dc434] py-3 md:py-2 text-white  rounded-full";
                break;
            default:
                styles ="bg-white px-7 w-[84%] md:w-[14%] mx-auto md-mx-0 font-semibold text-[1rem] hover:bg-[#0dc434] hover:text-white text-[#0dc434] py-3 md:py-2 rounded-full";
                break;
        }  
        return styles;

        
    }

    const buttonContents = ['AFFORDABLE', 'EMPLOYABLE', 'EXPERTIZE', 'MODERN'];
    return (
        <div className="  my-[5%] container  mx-auto inline-flex flex-col justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-7 text-[2rem] md:text-[0.40rem]">
            {buttonContents.map((button, index) => (
                <button className={getStyles(button)} key={index}>{button}</button>
            ))}
        </div>
    )
}
export default Buttons