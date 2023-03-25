import {createContext} from 'react';
import {useContext} from 'react';

export const ClientContext = createContext({
    client: null,
})

export const useClient = () => {
    const client = useContext(ClientContext)
    return client
}