import React from 'react';

const Images = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((img,i) => 
                <div key={i} className='w-full h-[90px] overflow-hidden rounded-md cursor-pointer'>
                    <img className='w-full h-full' src='http://localhost:5173/images/banner/1.jpg' alt=''/>
                </div>
                )
            }
        </div>
    );
};

export default Images;