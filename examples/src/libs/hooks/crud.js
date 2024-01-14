import { useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const useCrud = (initialData) => {
    const [data, setData] = useState(initialData);

    const remove = id => {
        setData(draft => {
            const newData = draft.filter(e => e.id !== id);
            console.log('new data : ', newData);
            return newData;
        });
    };

    const create = entity => {
        setData(draft => draft.concat({ ...entity, id: uuidv4() }));
    }
    const update = entity => {
        setData(draft => draft.map(p => p.id === entity.id ? entity : p));
    }

    return { data, create, remove, update, setData };
}

const REMOVE = 'REMOVE';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';

function reducer(state, action) {
    console.log('%c Action', 'color: blue', action);
    console.log('%c Previous State', 'color: gray', state);
    const { type, payload } = action;
    let nextState = state;
    switch (type) {
        case REMOVE: {
            nextState = state.filter(e => e.id !== payload);
            break;
        }
        case CREATE: {
            nextState = state.concat({ ...payload, id: uuidv4() })
            break;
        }
        case UPDATE: {
            nextState = state.map(e => e.id === payload.id ? payload : e);
            break;
        }
        default: {
            console.warn('Unknown action: ' + type);
        }
    }
    console.log('%c Next State', 'color: green', nextState);
    return nextState;
}

export const useReducerCrud = (initialState) => {
    const [data, dispatch] = useReducer(reducer, initialState);
    const remove = id => {
        dispatch({ type: REMOVE, payload: id });
    };
    const create = entity => {
        dispatch({ type: CREATE, payload: entity });
    }
    const update = entity => {
        dispatch({ type: UPDATE, payload: entity });
    }
    return { data, create, remove, update, dispatch };
}


