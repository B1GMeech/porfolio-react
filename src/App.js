import React from 'react';
import './App.css';
import Main from './composants/main';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-style" title="ALY CORREA" scroll>
            <Navigation>
                < Link to="cv">CV</Link>
                < Link to="projets">Projets</Link>
                < Link to="contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                 < Link to="">Home</Link>
                < Link to="cv">CV</Link>
                < Link to="projets">Projets</Link>
                < Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>  );
}

export default App;
