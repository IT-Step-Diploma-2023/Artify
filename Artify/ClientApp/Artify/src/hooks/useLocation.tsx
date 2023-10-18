const separator = "_";

const useLocation = () => {

    const getCountry = (location: string): string => {
        // if(location === undefined) return "";
        if (location && location.indexOf(separator) !== 0)
            return location.split(separator)[0];
        return "";
    }

    const getAddress = (location: string): string => {
        // if(location === undefined) return "";
        if (location && location.indexOf(separator) !== -1)
            return location.split(separator)[1];
        return location;
    }

    const setLocation = (city: string, address: string): string => {
        return city + separator + address;
    }

    return { getCountry, getAddress, setLocation };

}

export default useLocation;
