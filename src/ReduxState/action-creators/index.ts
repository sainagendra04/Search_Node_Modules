import axios from 'axios';
import { ActionTypes } from '../action-types';
import { Action } from '../action';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string) => {
    return async (dispatch : Dispatch<Action> ) => {
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES
        });
        try {

            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',
                {
                    params:{
                        text : term
                    }
                }
            );

            const name = data.objects.map((results : any) => {
                return results.package.name;
            })
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload: name
            })
        } catch (err: any) {
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            });
        }
    }
}