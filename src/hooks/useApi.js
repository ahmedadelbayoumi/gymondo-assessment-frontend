import { useEffect, useReducer } from 'react';

import axios from 'services/axios';
import { useSetLoading } from 'context/Loading';
import useNotifications from 'hooks/useNotifications';

const apiReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INIT_REQUEST':
      return { ...state, error: null };
    case 'SET_RESPONSE':
      return { ...state, data: payload };
    case 'SET_ERROR':
      return { ...state, error: payload };
    case 'UPDATE_REQUEST':
      return { ...state, payload };
    default:
      return state;
  }
};

/**
 * useApi Hook
 *
 * A custom hook that uses axios to perform API calls,
 * it handles the global loading spinner and
 * displaying a notification with an error
 * message on API error.
 */
function useApi(url, method = 'get', initalPayload = null) {
  const setLoading = useSetLoading();
  const { notify } = useNotifications();

  const [{
    payload,
    data,
    error,
  }, dispatch] = useReducer(apiReducer, {
    payload: initalPayload,
    error: null,
    data: null,
  });

  const request = (params) => dispatch({ type: 'UPDATE_REQUEST', payload: params });

  useEffect(() => {
    setLoading(true);

    dispatch({ type: 'INIT_REQUEST' });

    axios[method](url, payload)
      .then(({ data: response }) => {
        dispatch({ type: 'SET_RESPONSE', payload: response });
      })
      .catch((err) => {
        const { response: { data: { message } } } = err;

        notify(message, 'error');
        dispatch({ type: 'SET_ERROR', payload: err });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, payload, setLoading, notify]);

  return [data, error, request];
}

export default useApi;
