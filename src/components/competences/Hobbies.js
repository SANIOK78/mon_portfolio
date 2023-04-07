import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts </h3>
            <ul>
                <li className='hobby'>
                    <i className='fab fa-react'></i>
                    <span>Développement Web</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-laptop"></i>
                    <span>Informatique</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <span>Randonnées</span>
                </li>

            </ul>
        </div>
    );
};

export default Hobbies;