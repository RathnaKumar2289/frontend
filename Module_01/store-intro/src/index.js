import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import { createStore } from "redux";


function counterReducer(state=0,action){
  if(action.type==="INCREMENT"){

      if(action.payload){
          return state+action.payload;
      }else{
          return state+1;
      }
     
  }

  if(action.type==="DECREMENT"){

    if(action.payload){
        return state-action.payload;
    }else{
        return state-1;
    }
   
}
  return state;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(counterReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
