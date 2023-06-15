import React, {createContext, useState, useContext} from 'react';

import PPW from './ppw';

const PpwContext = createContext();
const MinKContext = createContext();
const PriceUpdateContext = createContext();
const annualUsageContext = createContext();
const ExposureContext = createContext();
const ExpsoureUpdateContext = createContext();
const ReturnPPWContext = createContext();
const PriceContext = createContext();


export function usePPW() {
    return useContext(PpwContext)
}
export function usePriceUpdate() {
    return useContext(PriceUpdateContext)
}
export function useMinWat() {
    return useContext(MinKContext)
}
export function useSetUsage() {
    return useContext(annualUsageContext)
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
    const [minKWattsState, setMinKWattsState] = useState(0);
    const [priceState, setPriceState] = useState(0);
    const [exposureState, setExposureState] = useState(1);
    const [unitSize, setUnitSize] = useState(0);
    const [annualUsage, setannualUsage] = useState();

    // calulate the annual usage based on the monthly bill
    function setUsuage(number){
        console.log("number: ", number);
        // annual consumption = (number / .175) X 12
        const annualConsumption = (number / .175) * 12
        console.log("annualConsumption: ", annualConsumption);
        setannualUsage(annualConsumption)
    }

    // search through the object using the key and return the value
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

    // use the search function on the PPW object to find the PPW based on the minimum k watts needed 
    // and the panel system name
    function returnPPW(system){
        // a const that's assigned the last three digits of the system name 
        const systemWatts = system.slice(-3)
        console.log("systemWatts: ", systemWatts);
        // to find the number of panels needed we divide the annual usage by system watts,
        console.log("annualUsage: ", annualUsage);
        const numberOfPanels = Math.ceil(annualUsage/systemWatts)
        console.log("numberOfPanels: ", numberOfPanels);

        // then we multiply that by the system watts to get the total watts needed
        const totalWatts = numberOfPanels * systemWatts

        // then we divide that by 1000 to get the total kilowatts needed and round to the nearest whole number. this number cannot be smaller than 4 or larger than 25
        const totalKWatts = Math.min(Math.max(Math.round(totalWatts/1000), 4), 25)

        // then we set the unit size to the total kilowatts
        setUnitSize(totalWatts)
        setMinKWattsState(totalKWatts)
        //  then we only return the ppw based on the system name and total kilowatts needed if kilowatts is not undefined
        return totalKWatts && search(system, PPW[totalKWatts]);
    }

    function changePrice(system){
        setPpwState(search(system, PPW[minKWattsState]))
        console.log('PPW: ', search(system, PPW[minKWattsState]));
        let Totat = search(system, PPW[minKWattsState]) * unitSize
        console.log('minKWattsState: ', minKWattsState);
        console.log('unitSize: ', unitSize);
        console.log("Totat: ", Totat);
        let Srecs = unitSize/1000 * 85 *15
        console.log("Srecs: ", Srecs);

        let discount =  Totat * .7
        console.log("discount: ", discount);

        let SrecsPrice = discount - Srecs
        console.log("SrecsPrice: ", SrecsPrice);

        let commas = Math.trunc(SrecsPrice).toLocaleString("en-US");
        console.log("commas: ", commas);
    
        setPriceState(commas)
    }

    function chageExposure (exposure){
        setExposureState(exposure)
    }
    return (
        <PpwContext.Provider value={ppwState}>
            <PriceUpdateContext.Provider value={changePrice}>
                <ReturnPPWContext.Provider value={returnPPW}>
                    <MinKContext.Provider value={minKWattsState}>
                        <annualUsageContext.Provider value={setUsuage}>
                            <ExposureContext.Provider value={exposureState}>
                                <ExpsoureUpdateContext.Provider value={chageExposure}>
                                    <PriceContext.Provider value={priceState}>
                                    {children}
                                    </PriceContext.Provider>
                                </ExpsoureUpdateContext.Provider>
                            </ExposureContext.Provider>
                        </annualUsageContext.Provider>
                    </MinKContext.Provider>
                </ReturnPPWContext.Provider>
            </PriceUpdateContext.Provider>
        </PpwContext.Provider>
    )
}
