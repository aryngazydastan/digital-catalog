import ReactDOM from 'react-dom';
import './index.css';
import createRoutes from './Routes';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const routes = createRoutes();

//ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Orders />, document.getElementById('root'));

ReactDOM.render(
    routes,
    document.getElementById('root')
    // <div>
    // <App />
    // <Orders /> 
    // </div>, 
    // document.body  
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
