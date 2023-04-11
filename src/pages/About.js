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
                <p>J'ai profité de la période de confinement pour définir mon projet de reconversion
                    professionnel dans le domaine de développement web, qui m'intéressait depuis 
                    de nombreuses années.
                </p>
                <p>Pas à pas, j’ai commencé à approfondir mes connaissances en suivant des tutoriels sur
                    <a href="https://www.youtube.com/results?search_query=d%C3%A9veloppement+frontend" 
                        target="_blank" rel="noopener noreferrer" > YouTube, </a>   
                    <a href="https://www.udemy.com/courses/search/?q=front+end&src=sac&kw=front"
                    target="_blank" rel="noopener noreferrer">Udemy, </a> 
                    <a href="https://www.ecole-du-web.net/" target="_blank" rel="noopener noreferrer">
                    École du web </a> concernant différants langages de programmation
                    et ensuite j'ai suivi le parcours <strong>"Développeur Web", </strong> plus structuré, chez {" "}
                    <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer">
                    OpenClassrooms.</a> 
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