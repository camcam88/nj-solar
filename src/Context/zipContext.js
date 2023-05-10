import React, {createContext, useState, useContext} from 'react';


const ZipContext = createContext();
const ZipUpdateContext = createContext();

export function useZip() {
    return useContext(ZipContext)
}
export function useZipUpdate() {
    return useContext(ZipUpdateContext)
}


export function ZipProvider({children}) {
    const [zipState, setZipState] = useState(0);

    function changeZip (zip){
        setZipState(zip)
    }
    return (
        <ZipContext.Provider value={zipState}>
            <ZipUpdateContext.Provider value={changeZip}>
                {children}
            </ZipUpdateContext.Provider>
        </ZipContext.Provider>
    )
}
