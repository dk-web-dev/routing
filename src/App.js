import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Home from './component/Header/Home';
import Service from './component/Header/Service';
import Useparam from './component/Header/Useparam';
import About from './component/Header/About';
import Contact from './component/Header/Contact';
import Scss from './component/Header/Scss';
import Nofound from './component/Header/Nofound';

import Search from './component/Livesearch/Search';




const App = () => {
    return (
          <>
            <Navbar />
            <br/>
            <div>
             <Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/Service" 
                      render={
                        ()=>{return <Service name="Service page"/>}
                        } />
                 <Route path="/Useparam/:movie/:id" component={Useparam} />       
                 <Route path="/About" component={About} />
                 <Route path="/Contact" component={Contact} />
                 <Route path="/Search" component={Search} />
                 <Route path="/Scss" component={Scss} />
                 <Route component={Nofound} />
                 {/* <Redirect to="/" /> */}
             </Switch>
            </div>
          </>
    )
}

export default App;
