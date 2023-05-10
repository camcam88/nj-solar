
import React, {createContext, useState, useContext} from 'react';

const SystemContext = createContext();
const SystemUpdateContext = createContext();

export function useForm() {
    return useContext(SystemContext)
}
export function useFormUpdate() {
    return useContext(SystemUpdateContext)
}


export function SystemProvider({children}) {
    const [systemState, setSystemState] = useState('test')
    
    function changeSystem(system){
        setSystemState(system)
    }
    return (
        <SystemContext.Provider value={systemState}>
            <SystemUpdateContext.Provider value={changeSystem}>
                {children}
            </SystemUpdateContext.Provider>
        </SystemContext.Provider>
    )
}
