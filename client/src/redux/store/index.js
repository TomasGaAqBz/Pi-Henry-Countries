import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer/index';

// Configura el middleware de Redux Thunk y la extensión de Redux DevTools para la tienda Redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Crea la tienda Redux con el combinador de reducers, middleware y la extensión DevTools
const store = createStore(
    reducer, // Combinador de reducers que contiene el estado de la aplicación
    composeEnhancer(applyMiddleware(thunkMiddleware)) // Aplica middleware Redux Thunk y utiliza la extensión DevTools si está disponible
); 

export default store;