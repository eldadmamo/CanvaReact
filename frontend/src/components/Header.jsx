import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
            <div className='flex justify-between px-10 items-center text-gray-400 h-full'>
                
                <Link to='/'>
                  <img src='https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg' alt='' />
                </Link>
                <span className='text-xl'>Easy Canva</span>
                <div className='flex justify-center items-center gap-2 text-gray-400'>
                    <button className='px-3 py-[6px] outline-none bg-[#7482f6] rounded-md'>Save</button>
                    <button className='px-3 py-[6px] outline-none bg-[#a855f7] rounded-md'>Download</button>
                </div>

            </div>
        </div>
    );
};

export default Header;