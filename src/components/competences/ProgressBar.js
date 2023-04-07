import React from 'react';

// récup des props depuis "Language.js"
const ProgressBar = (props) => {

    // console.log(props);

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>

            <div className="years">
                <span>Années d'experience</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    props.langue.map((item) => {
                     
                        let expYears = 2 ;                     
                        let progressBar = (item.exp / expYears) * 100 +"%";  
                                         
                        return (
                            <div key={item.id} className='languageListe' >
                                <li>{item.value}</li>
                                
                                <div className="progressBar" 
                                    style={{width: progressBar}}
                                > </div>                               
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;