import ReactDOM from 'react-dom/client';
// import GuestList from './State/guestList';
// import UserSearch from './State/userSearch';
// import UserSearch1 from './Refs/userSearch';
import { Provider } from 'react-redux';
import {store} from './ReduxState';
import RepositoriesList from './components/RepositoriesList';

const App = () => {
  // return (
  //   <div>
  //     <GuestList/>
  //     <UserSearch1/>
  //   </div>
  // );
  return (
        <Provider store={store}>
            <div>
                <h1>Search for the react Package</h1>
                <RepositoriesList />
            </div>
        </Provider>
        
    ); 
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);