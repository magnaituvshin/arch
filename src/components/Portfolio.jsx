import React from "react";
import { useGetDataQuery } from '../services/dataApi';
import {Link} from "react-router-dom";
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
const Portfolio = () => {
    const { data, error, isLoading } = useGetDataQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || !data.portfolio) return <div>No data available</div>;
    return (
        <div className="portfolio-container">
            {data.portfolio.map((item, index) => (
                <Link key={item.name} className="link-portfolio" to={`/portfolio/${index+1}`}>
                    <div className="card" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),  url(${imageMap[item.name]})`}}>
                        <div className="card-inner">
                            <h3 className="portfolio-name">{data.portfolio[index].name}</h3>
                            <p className="portfolio-time">{data.portfolio[index].date}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default Portfolio;