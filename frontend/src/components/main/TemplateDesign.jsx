import React from 'react';

const TemplateDesign = ({type}) => {
    return (
        <>
            {
                [1,2,3,4].map((design,i) => 
                    <div className={`group w-full rounded-md overflow-hidden bg-[#ffffff] cursor-pointer`}>
                        <img className='w-full h-full' src="http://localhost:5173/images/banner/1.jpg" alt="" />
                    </div>
                )
            }
        </>
    );
};

export default TemplateDesign;