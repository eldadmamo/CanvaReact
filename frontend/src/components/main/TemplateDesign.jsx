import React, { useEffect, useState } from 'react';
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom';

const TemplateDesign = ({type}) => {

    const navigate = useNavigate()
    const [templates, setTemplates] = useState([])

    useEffect(()=> {
        const get_templates = async () => {
            try{
                const {data} = await api.get('/api/templates')
                setTemplates(data.templates)

            }catch(error){
                console.log(error)
            }
        }
        get_templates()
    },[])

    const add_template = async (id) => {
        try{
            const {data} = await api.get(`/api/add-user-template/${id}`)
            navigate(`design/${data.design?._id}/edit`) 
            setTemplates(data.templates)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <div className={`grid gap-2 ${type ? 'grid-cols-2': 'grid-cols-4 mt-5'}`}>
                {
                    templates.map((design,i) => 
                    <div onClick={() => add_template(design._id)} className={`realtive cursor-pointer group w-full ${type ? 'h-[100px]' : 'h-[170px] px-4'}`}>
                        <div className={`w-full h-full block bg-slate-400 rounded-md ${type ? '' : 'p-4'}`}>
                            <img className='w-full h-full rounded-md overflow-hidden' src={design.image_url}  />
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
};

export default TemplateDesign;