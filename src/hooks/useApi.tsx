import { useEffect, useReducer } from 'react';
import { API } from "aws-amplify";
import { isEmpty } from '../utils/isEmpty';

const REDUCER_ACTION_TYPE = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
}

type Action<T> = {
  type: string,
  payload?: T
}

type State<T> = {
  data: T,
  isLoading: boolean,
  isError: boolean
}

const dataFetchReducer = <T,>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.PENDING: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case REDUCER_ACTION_TYPE.SUCCESS: {
      if (!action.payload) {
        throw new Error('action.payload missing in SUCCESS action')
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    }
    case REDUCER_ACTION_TYPE.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
}

export type ApiInfoType = {
  api: string,
  path: string,
  params: { readonly [key: string]: any; }
}
const useApi = <T,>({ api, path, params }: ApiInfoType, initData: T): State<T> => {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(dataFetchReducer, {
    data: initData,
    isLoading: false,
    isError: false
  })

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: REDUCER_ACTION_TYPE.PENDING })
      try {
        const param = { body: params }
        const result: T = await API.post(api, path, param);
        if (!didCancel) {
          dispatch({
            type: REDUCER_ACTION_TYPE.SUCCESS,
            payload: result
          })
        }

      } catch (err) {
        if (!didCancel) {
          dispatch({ type: REDUCER_ACTION_TYPE.FAILURE })
        }
      }
    }

    if (isEmpty(initData)) {
      fetchData();
    }

    return () => {
      didCancel = true
    }
  }, [])

  return state
};

export default useApi;