import React, { useEffect, useState } from 'react';
import Image from './Image'
import api from '../utils/api';

const BackgroundImages = ({type, setImage}) => {
    const [ images, setImages] = useState([])
    
    useEffect(()=> {
        const get_images = async () => {
            try{
                const {data} = await api.get('/api/design-images')
                setImages(data.images)
            }catch(error){
                console.log(error)
            }
        }
        get_images()
    },[])

    return (
        <Image setImage={setImage} type={type} images={images}/>
    );
};

export default BackgroundImages;