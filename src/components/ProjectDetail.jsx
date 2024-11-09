import React from 'react';
import arrow from "../assets/icons/icon-arrow.svg";
import { useParams, useNavigate } from 'react-router-dom';
import { useGetDataQuery } from '../services/dataApi';
import seraph from '../assets/portfolio/desktop/image-seraph.jpg';
import eebox from '../assets/portfolio/desktop/image-eebox.jpg';
import federal from '../assets/portfolio/desktop/image-federal.jpg';
import delSol from '../assets/portfolio/desktop/image-del-sol.jpg';
import prototype from '../assets/portfolio/desktop/image-prototype.jpg';
import tower228b from '../assets/portfolio/desktop/image-228b.jpg';
import edelweiss from '../assets/portfolio/desktop/image-edelweiss.jpg';
import netcry from '../assets/portfolio/desktop/image-netcry.jpg';
import hypers from '../assets/portfolio/desktop/image-hypers.jpg'; 
import sxiv from '../assets/portfolio/desktop/image-sxiv.jpg';
import trinity from '../assets/portfolio/desktop/image-trinity.jpg';
import paramour from '../assets/portfolio/desktop/image-paramour.jpg';

const imageMap = {
    "Seraph Station": seraph,
    "Eebox Building": eebox,
    "Federal II Tower": federal,
    "Project Del Sol": delSol,
    "Le Prototype": prototype,
    "228B Tower": tower228b,
    "Grand Edelweiss Hotel": edelweiss,
    "Netcry Tower": netcry,
    "Hypers": hypers,
    "SXIV": sxiv,
    "Trinity Bank Tower": trinity,
    "Project Paramour": paramour,
};
const ProjectDetail = () => {
    const navigate = useNavigate();
    const {projectId} = useParams();
    const { data, error, isLoading } = useGetDataQuery();
    const handleBackClick = () => {
        navigate(-1);
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || !data.portfolio) return <div>No data available</div>;
    const project = data.portfolio[projectId - 1];
    return (
        <div className='detail'>
            <img className="zoom" src={imageMap[project.name]} />
            <div className='zoom-text'>
                <h1 className='detail-name'>{project.name}</h1>
                <h2 className='detail-date'>{project.date}</h2>
                <button onClick={handleBackClick} className='button'>Back <img className="arrow" src={arrow} /></button>
            </div>
        </div>
    );
}
export default ProjectDetail;