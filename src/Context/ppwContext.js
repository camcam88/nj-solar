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
const InstallPriceContext = createContext();
const BatterPriceContext = createContext();

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

export function useInstallPrice() {
    return useContext(InstallPriceContext)
}

export function useBatteryPrice() {
    return useContext(BatterPriceContext)
}

export function PpwProvider({children}) {
    const [ppwState, setPpwState] = useState(0);
    const [minKWattsState, setMinKWattsState] = useState(0);
    const [priceState, setPriceState] = useState(0);
    const [exposureState, setExposureState] = useState(1);
    const [unitSize, setUnitSize] = useState(0);
    const [annualUsage, setannualUsage] = useState();
    const [installPrice, setInstallPrice] = useState(0);
    const [batteryPrice, setBatteryPrice] = useState(0);


    // calulate the annual usage based on the monthly bill
    function setUsuage(number){
        // annual consumption = (number / .175) X 12
        const annualConsumption = (number / .175) * 12
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
        // a const that's assigned the last three digits of the system panel name. The end of the name is the number of watts the system produces
        const systemWatts = system.slice(-3)

        // to find the number of panels needed we multiplied the annual usage and the exposre variable, then divide by system watts, then round up to the nearest whole number
        const numberOfPanels = Math.ceil((annualUsage * exposureState)/systemWatts)

        // then we multiply that by the system watts to get the total watts needed
        const totalWatts = numberOfPanels * systemWatts

        // then we divide that by 1000 to get the total kilowatts needed and round to the nearest whole number. 
        // This number cannot be smaller than 4 or larger than 25
        const totalKWatts = Math.min(Math.max(Math.round(totalWatts/1000), 4), 25)

        // then we set the unit size to the total kilowatts
        setUnitSize(totalWatts)
        setMinKWattsState(totalKWatts)
        //  then we only return the ppw based on the system name and total kilowatts needed if kilowatts is not undefined
        return totalKWatts && search(system, PPW[totalKWatts]);
    }

    function changePrice(system){
        setPpwState(search(system, PPW[minKWattsState]))

        // total = the ppw * the unit size
        let Totat = search(system, PPW[minKWattsState]) * unitSize

        // Srecs = unit size in kilowatts * 85 * 15
        let Srecs = unitSize/1000 * 85 *15

        // discount
        let discount =  Totat * .7

        let SrecsPrice = discount - Srecs

        // format the price to have commas in us currency
        // let commas = Math.trunc(SrecsPrice).toLocaleString("en-US");
    
        setPriceState(SrecsPrice)
    }

    function chageExposure (exposure){
        setExposureState(exposure)
    }

    function setInstall(install){
        setInstallPrice(install)
        setPriceState(priceState + install)
    }

    function setBattery(battery){
        setBatteryPrice(battery)
        setPriceState(priceState + battery)
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
                                        <InstallPriceContext.Provider value={setInstall}>
                                            <BatterPriceContext.Provider value={setBattery}>
                                            {children}
                                            </BatterPriceContext.Provider>
                                        </InstallPriceContext.Provider>
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
