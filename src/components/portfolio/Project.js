import React, {useState} from 'react';

// recuperation de props 
const Project = ( {element} ) => {
    console.log(element)
    
    // recup chaque propriété via destructuring 
    const { name, languagesIcons, source, info, picture, site } = element;
    // géstion affichage "infos" au click sur "+"
    const [showInfos, setShowInfos] = useState(false);

    const handleInfo = () => {
        setShowInfos( !showInfos );
    }

    return (     
        <div className='project' >

            {/*  Parametrage du "rendu" de notre carte */}
            <div className="icons">
                {
                    languagesIcons.map((icon, index) => {
                        return <i className={icon} key={index} ></i>                       
                    })
                }
            </div>

            <h3>{name}</h3>
            <div className="img">
                <img src={picture} alt="carte projet" onClick={handleInfo} />
            </div>

            <span className="infos" onClick={handleInfo} >
                <i className='fas fa-plus-circle'></i>
            </span>

            {/* Affichage du "Pop-Up"  */}
            {
                showInfos && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>

                                <div className="button" onClick={handleInfo} >
                                    Retour sur la page
                                </div>
                            </div>

                            <p className="text">{info}</p>

                            <div className="sourceCode">
                                <a href={source} target="_blank"
                                    rel="noopener noreferrer" className='button'
                                >
                                    Code source
                                </a>
                                <a href={site} target="_blank"
                                    rel="noopener noreferrer" className='button'
                                >
                                    Voir projet
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Project;