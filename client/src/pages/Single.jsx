import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className='user'>
                <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className='info'>
                <span>Linlin</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className='edit'>
                <Link to={`/write?edit=2`}>
                    <img src={Edit} alt="" />
                </Link>
                <img src={Delete} alt="" />
            </div>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Switzerland, officially the Swiss Confederation, is a landlocked country
             located at the confluence of Western, Central and Southern Europe.[f][16]
             It is a federal republic composed of 26 cantons, with federal authorities based in Bern.[a][3][2]
            <br />
            <br />
            Switzerland is bordered by Italy to the south, France to the west, Germany to
            the north and Austria and Liechtenstein to the east. It is geographically divided 
            among the Swiss Plateau, the Alps and the Jura, spanning 41,285 km2 (15,940 sq mi) 
            with land area comprising 39,997 km2 (15,443 sq mi). The Alps occupy the greater 
            part of the territory.
            <br />
            <br />
            The Swiss population of approximately 8.7 million is concentrated mostly on the plateau,
            where the largest cities and economic centres are located, including Zürich, Geneva and Basel.
            These three cities are home to the headquarters or offices of international organisations
            such as the WTO, the WHO, the ILO, FIFA, and the United Nations's second-largest office.  
            </p>
        </div>
       <Menu />
    </div>
    );
};

export default Single