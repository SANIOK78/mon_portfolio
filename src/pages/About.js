import React from 'react';
import Navigation from '../components/Navigation';
import ImgCompetence from '../media/competence.png';

const About = () => {

    return (
        <div className='about'>

            <Navigation /> 

            <div className="aboutContent">
              
                <h1>À Propos...</h1>
                
                <p>Salut ! Je m'appelle {" "}
                    <a href="https://www.linkedin.com/in/alexandru-ghilev-05a27619b/" 
                            target="_blank" rel="noopener noreferrer" 
                    >
                        Alexandru Ghilev {" "}
                    </a> 
                    et je suis développeur front-end junior.
                </p>
                <hr />
                <p>Auparavant, j'ai effectué plusieurs années dans le secteur de transport
                    de voyageurs, ce que m'a permis d'acquérir de très bonnes compétences telles  
                    que gestion de stress, relation client, sens de service et responsabilité.
                </p>
                <p>
                    J'ai profité de la période de confinement pour approfondir mes connaissances
                    dans le domaine de développement web, domaine qui m'intéressait depuis 
                    de nombreuses années.
                </p>
                <p>J'ai suivi des tutoriels sur YouTube, des cours sur la plateforme en line
                    Udemy et ensuite le parcours « Développeur Web » chez OpenClassrooms.
                </p>
                <hr />
                <p>Conscient du chemin à parcourir pour monter en compétence, je continue 
                    d'apprendre pour améliorer mes connaissances acquises dans ces langages :
                </p>
                
                <img src={ImgCompetence} alt="logo competences" />
                
                   
            </div>
            
        </div>
    );
};

export default About;