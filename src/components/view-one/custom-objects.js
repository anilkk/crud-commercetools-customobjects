// custom-objects.js
import React from 'react';
import Text from '@commercetools-uikit/text';
import { useAsyncDispatch, Sdk } from '@commercetools-frontend/sdk';
import { useShowApiErrorNotification } from '@commercetools-frontend/actions-global';
import * as globalActions from '@commercetools-frontend/actions-global';
import { getCustomObjects } from './actions';

const initialState = {
    isLoading: true,
    data: null,
    error: null,
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ok':
        return { isLoading: false, data: action.payload, error: null };
        case 'error':
        return { isLoading: false, data: null, error: action.payload };
        default:
        return state;
    }
};

const CustomObjects = props => (
    <Sdk.Get
    actionCreator={() => getCustomObjects()}
    render={({ isLoading, error, result }) => {
      if (isLoading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return <Text.Body >{`CustomObjects: ${JSON.stringify(result)}`}</Text.Body>;
    }}
  />
);

export default CustomObjects;