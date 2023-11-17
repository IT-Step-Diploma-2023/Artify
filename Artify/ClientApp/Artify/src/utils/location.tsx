const separator = "_";

export const getCountry = (location: string): string => {
    // if(location === undefined) return "";
    if (location && location.indexOf(separator) !== 0)
        return location.split(separator)[0];
    return "";
}

export const getAddress = (location: string): string => {
    // if(location === undefined) return "";
    if (location && location.indexOf(separator) !== -1)
        return location.split(separator)[1];
    return location;
}

export const setLocation = (city: string, address: string): string => {
    return city + separator + address;
}



