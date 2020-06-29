import React from 'react';
import {Tabs,Tab, Card, CardTitle, CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';


class Projet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab : 0
        }
    }
    afficherProjet(){
        if (this.state.activeTab === 0){
            return(
                    <div style={{padding : 'right', display : 'block'}} className ='projetreact'>
                        <center><Card>
                            <CardTitle style={{background : 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5PLgj4f2SCYpfdSfxUt8aAHaEK%26pid%3DApi&f=1)'  ,
                                            backgroundPosition : 'left' ,
                                            backgroundSize : 'cover' ,
                                            backgroundColor : '#fff' ,
                                            height : '200px',
                                             class : 'center'}}> 
                                            
                            </CardTitle>    
                                <CardText>
                                    <p>Qu'est-ce que react?
                                        React est une bibliothèque d'interface utilisateur développée sur Facebook pour faciliter la création de composants interactifs, stateful et réutilisables de l'interface utilisateur. Il est utilisé sur Facebook dans la production, et Instagram.com est entièrement écrit en React.

                                        <br></br>L'un de ses points de vente unique est que non seulement il fonctionne sur le côté client, mais il peut également être rendus côté serveur, et ils peuvent travailler ensemble inter-opérationnel.

                                        <br></br>Il utilise également un concept appelé le DOM virtuel qui sélectivement rend des sous-arbres de nœuds basés sur des changements d'état. Il effectue le moins de manipulation de DOM possible pour maintenir vos composants à jour.</p>
                                            <img src="portfolioo.png" alt="portfolio" className="portfolio"></img>
                                </CardText>
                            <CardActions border>
                                <Button colored>CONTACT</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name ="share"></IconButton>
                            </CardMenu>
                        </Card></center>
                    </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <h1>Projet HTML/CSS</h1>
            )
        } else if (this.state.activeTab === 2){
            return(
                <h1> Projets Wordpress </h1>
            )
        }  
    }
    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState ({activeTab : tabId})}>
                <Tab>ReactJS <i class="fab fa-react"></i></Tab>
                <Tab>HTML/CSS <i class="fab fa-html5"></i></Tab>
                <Tab>Wordpress <i class="fab fa-wordpress"></i></Tab>
                </Tabs>   
                <section>
                    {this.afficherProjet()}
                </section> 
            </div>                
        )
    }
}
export default Projet;