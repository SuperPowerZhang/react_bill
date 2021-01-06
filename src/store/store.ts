import {createStore} from 'redux'

import tagsReducer from "./reducer";

// @ts-ignore
let store=createStore(tagsReducer);

export  {store};
