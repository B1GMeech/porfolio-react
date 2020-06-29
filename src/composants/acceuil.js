import React from 'react';
import {Cell, Grid} from 'react-mdl';

class Acceuil extends React.Component{
    render(){
        return(
            <div>
                <Grid className="grid-style">
                    <Cell col={12}>
                        <img
                        src="geek.png"
                        alt="avatar"
                        className="img-style"
                        />
                         <div className="banner-style">
                            <h1><center><strong>Junior Front End Developper 💻</strong></center></h1>
                            <hr />
                            <p>Javascript | HTML/CSS | ReactJS | PHP | MySQL </p>
                            <div className="reseaux-sociaux">
                                <a href="https://github.com">
                                <i class="fab fa-github fa-5x" target="_blank"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/mrcorrea/">
                                <i class="fab fa-linkedin fa-5x" target="_blank"></i>
                                </a>
                                <a href="https://gitlab.com">
                                <i class="fab fa-gitlab fa-5x" target="_blank"></i>

                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
            )
    }
}
export default Acceuil;