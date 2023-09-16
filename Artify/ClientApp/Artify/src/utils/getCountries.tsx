/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
interface Record {
    country: string,
    region: string
}

export const countriesData = await fetch('https://api.first.org/data/v1/countries')
    .then((response) => {
        if (response.status === 200) return response.json();
    })
    .catch((error) => {
        console.error("Error: ", error);
    });



export const countriesNames: string[] = []
Object.values(countriesData.data).forEach((c) => {
    countriesNames.push((c as Record).country);
});