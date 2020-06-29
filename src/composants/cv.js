import React from 'react';
import button from 'react-mdl';



class Cv extends React.Component{
    render(){
        return(
            <div className='cv-body'>
            <br></br><h1>Télécharger CV 🧾 </h1>
            <br></br><img src ="cv.png" alt="CV" className='cv-style'/>
            <hr /><a href="CV-1.pdf" download="Resume">Download Resume</a></div>
        )
    }
}
export default Cv;
