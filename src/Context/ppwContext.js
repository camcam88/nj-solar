import React, {createContext, useState, useContext} from 'react';

const PpwContext = createContext();
const MinKContext = createContext();
const PpwUpdateContext = createContext();
const MinKUpdateContext = createContext();
const ExposureContext = createContext();
const ExpsoureUpdateContext = createContext();
const ReturnPPWContext = createContext();
const PriceContext = createContext();


export function usePPW() {
    return useContext(PpwContext)
}
export function usePPWUpdate() {
    return useContext(PpwUpdateContext)
}
export function useMinWat() {
    return useContext(MinKContext)
}
export function useMinKUpdate() {
    return useContext(MinKUpdateContext)
}

export function useExposure() {
    return useContext(ExposureContext)
}

export function useExposureUpdate() {
    return useContext(ExpsoureUpdateContext)
}
export function useReturnPPW() {
    return useContext(ReturnPPWContext)
}
export function usePrice() {
    return useContext(PriceContext)
}

export function PpwProvider({children}) {
    const [ppwState, setPpwState] = useState(0);
    const [minWattsState, setMinWattsState] = useState(4);
    const [priceState, setPriceState] = useState(0);
    const [exposureState, setExposureState] = useState(1);
    const [unitSize, setUnitSize] = useState(0);

    const PPW = {
        4: {
            qcell: 3.46,
            solaria: 3.46,
            trina:3.42,
            rec:3.79,
        },
        5: {
            qcell: 3.06,
            solaria: 3.06,
            trina:3.02,
            rec:3.79,
        },
        6: {
            qcell: 3.04,
            solaria: 2.96,
            trina:2.92,
            rec:3.79,
        },
        7: {
            qcell: 2.94,
            solaria: 2.86,
            trina:2.82,
            rec:3.19,
        },
        8: {
            qcell: 2.89,
            solaria: 2.81,
            trina:2.77,
            rec:3.14,
        },
        9: {
            qcell: 2.84,
            solaria: 2.76,
            trina:2.72,
            rec:3.09,
        },
        10: {
            qcell: 2.79,
            solaria: 2.71,
            trina:2.67,
            rec:3.04,
        },
        11: {
            qcell: 2.77,
            solaria: 2.69,
            trina:2.65,
            rec:3.02,
        },
        12: {
            qcell: 2.74,
            solaria: 2.66,
            trina:2.62,
            rec:2.99,
        },
        13: {
            qcell: 2.70,
            solaria: 2.62,
            trina:2.58,
            rec:2.95,
        },
        14: {
            qcell: 2.64,
            solaria: 2.60,
            trina:2.56,
            rec:2.93,
        },
        15: {
            qcell: 2.66,
            solaria: 2.58,
            trina:2.54,
            rec:2.91,
        },
        16: {
            qcell: 2.63,
            solaria: 2.55,
            trina:2.51,
            rec:2.88,
        },
        17: {
            qcell: 2.60,
            solaria: 2.52,
            trina:2.51,
            rec:2.85,
        },
        18: {
            qcell: 2.58,
            solaria: 2.50,
            trina:2.61,
            rec:2.83,
        },
    }

    function search(nameKey, obj) {
        if (obj.hasOwnProperty(nameKey)) {
        return obj[nameKey];
        } else {
        var res = Object.keys(obj).filter(function(k) {
            return (k.toLowerCase().indexOf(nameKey.toLowerCase()) > -1) || (nameKey.toLowerCase().indexOf(k.toLowerCase()) > -1);
        });
        return res ? obj[res] : false;
        }
    }
    function returnPPW(system){
        console.log("system: ", system);
        console.log("minWattsState: ", minWattsState);

        return search(system, PPW[minWattsState]);
    }

    function changePPW(system){
        setPpwState(search(system, PPW[minWattsState]))
        let Totat = search(system, PPW[minWattsState]) * unitSize
        let Srecs = unitSize/1000 * 85 *15
        let discount =  Totat * .7
        let SrecsPrice = discount - Srecs
        let commas = Math.trunc(SrecsPrice).toLocaleString("en-US");
        setPriceState(commas)
    }

    function changeWatts(number){
        const k = Math.trunc(number/1000)
        let num = 0
        if(k < 4){
            num = 4
        }
        if (k > 18){
            num = 18
        }
        if (k > 4 && k < 18){num = k;}

        setMinWattsState(num)
        setUnitSize(number)
    }

    function chageExposure (exposure){
        setExposureState(exposure)
    }
    return (
        <PpwContext.Provider value={ppwState}>
            <PpwUpdateContext.Provider value={changePPW}>
                <ReturnPPWContext.Provider value={returnPPW}>
                    <MinKContext.Provider value={minWattsState}>
                        <MinKUpdateContext.Provider value={changeWatts}>
                            <ExposureContext.Provider value={exposureState}>
                                <ExpsoureUpdateContext.Provider value={chageExposure}>
                                    <PriceContext.Provider value={priceState}>
                                    {children}
                                    </PriceContext.Provider>
                                </ExpsoureUpdateContext.Provider>
                            </ExposureContext.Provider>
                        </MinKUpdateContext.Provider>
                    </MinKContext.Provider>
                </ReturnPPWContext.Provider>
            </PpwUpdateContext.Provider>
        </PpwContext.Provider>
    )
}
