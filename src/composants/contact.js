import React from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends React.Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2><center><br></br>Aly CORREA</center></h2>
                        <img src="geek.png" alt="avatar" className="img-style"/>
                        <p><br />Hello World !</p>
                        <p>J'ai 23 ans et je suis developpeur front junior depuis maintenant 2 ans. J'ai d'abord appris à me former seul et suivi des formations telles que Open Classroom. J'ai un parcours en Gestion, Finances et Pilotage de projet WEB avant de me reconvertir en dev 👨🏾‍💻</p>
                        <p>Je vous laisse mes coordonnées pour toute info complémentaires👉🏾</p>
                    </Cell>
                    <Cell col={6}>
                        <h2><br></br>CONTACT<i class="fas fa-address-card fa-2x"></i></h2>
                        <hr />
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'3em'}} className='contact-num'>
                                    <p><i class="fas fa-mobile fa-3x"></i>
                                        
                                        
                                        +33773021460</p>
                                            
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'3em'}}className='contact-mail'>
                                        <p><i class="fas fa-inbox fa-3x"></i>   
                                                    a1.correa@gmx.fr</p>

                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                 <ListItemContent style={{fontSize:'3em'}}className='contact-skype'>
                                        <p><i class="fab fa-skype fa-3x"></i>
                                        Aly.CORREA1017</p>

                                 </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;