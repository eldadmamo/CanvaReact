import React from 'react';

const Images = ({add_image,images}) => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                images.map((item, i) => 
                <div onClick={() => add_image(item.image_url)} key={i} className='w-full h-[90px] overflow-hidden rounded-md cursor-pointer'>
                    <img className='w-full h-full' src={item.image_url} alt=''/>
                </div>
                
                )
            }
        </div>
    );
};

export default Images;