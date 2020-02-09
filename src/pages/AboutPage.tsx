import React from 'react';
import {useHistory} from "react-router-dom"

const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatibus ducimus magnam laboriosam, consequuntur dolorum architecto distinctio facilis animi expedita possimus aut reiciendis est eum vel itaque dolores voluptas explicabo.</p>
            <button className="btn" onClick={()=>history.push("/")}> Обратно к списку дела </button>
        </>
    );
}

export default AboutPage;
