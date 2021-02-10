import {useRouteMatch , Route, Switch, Redirect} from 'react-router-dom';
// import cn from 'classnames';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFound from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

// import style from './style.module.css';
import {FireBaseContext} from './context/firebaseContext';
import Firebase from './service/firebase';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
          <Route path='/404' component={NotFound}/>
        <Route>
          <>
          <MenuHeader bgActive={!match.isExact}/>
          {/* <div className={cn(style.wrap, {
            [style.isHomePage]: match.isExact
          })}> */}
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/game' component={GamePage}/>
              <Route path='/about' component={AboutPage}/>
              <Route path='/contact' component={ContactPage}/>
              <Route render={() => (
                <Redirect to='404'/>
              )}/>
            </Switch>
          {/* </div> */}
          <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  )
};

export default App;