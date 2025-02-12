import React, { useCallback, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        width: '',
        height: ''
    });

    const inputHandle = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, slidesToScroll: 1 }, [Autoplay({ delay: 9000 })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const create = () => {
        navigate('/design/create', {
            state:{
                type:'create',
                width: state.width,
                height: state.height
            }
        })
    }

    return (
        <div className='pt-1 pl-3'>
            <div className='w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>

                <button onClick={() => setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#344334] absolute top-3 right-3'>
                    Custom Size
                </button>

                <form onSubmit={create} className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-30'} transition-all duration-500`}>
                    <div className='grid grid-cols-2 pb-4 gap-3'>
                        <div className='flex gap-2 justify-center items-start flex-col'>
                            <label htmlFor='width'>Width</label>
                            <input onChange={inputHandle} value={state.width} type='number' name='width' id='width' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' />
                        </div>
                        <div className='flex gap-2 justify-center items-start flex-col'>
                            <label htmlFor='height'>Height</label>
                            <input onChange={inputHandle} value={state.height} type='number' name='height' id='height' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' />
                        </div>
                    </div>
                    <button className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#344334] w-full'>
                        Create New Design
                    </button>
                </form>

                <div>
                    <h2 className='text-3xl pb-10 pt-6 font-semibold text-white'>What will you design Today?</h2>
                </div>
            </div>

            <div>
                <h2 className='text-xl py-6 font-semibold text-white'>Your Recent Designs</h2>

                <div className="embla relative">
                    <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex gap-3">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, i) => (
                                <div key={i} className='relative group embla__slide flex-shrink-0 w-[calc(20%-12px)]'>
                                    <Link className='w-full h-full block bg-slate-100 p-4 rounded-md'>
                                        <img className='w-full h-full rounded-md overflow-hidden' src='http://localhost:5173/images/banner/1.jpg' alt='' />
                                    </Link>
                                    <div className='absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-500 group-hover:block'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="embla__prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#8b3dffad] text-white px-4 py-2 rounded-full" onClick={scrollPrev}>
                    <ChevronLeft className="w-2 h-2" />
                    </button>
                    <button className="embla__next absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#8b3dffad] text-white px-4 py-2 rounded-full" onClick={scrollNext}>
                    <ChevronRight className="w-2 h-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;