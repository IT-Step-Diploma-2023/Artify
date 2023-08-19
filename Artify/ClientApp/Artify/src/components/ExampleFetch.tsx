import { FunctionComponent, useEffect, useState } from "react";
import Card from "./UI/Card";
import CardContainer from "./UI/CardContainer";
import Button from "./UI/Button";
import { useTranslation } from 'react-i18next';


interface Record {
    temperatureC: number;
    summary: string;
    date: string;
}

interface Lngs {
    ua: string
    en: string
}

// interface

const lngs: Lngs = {
    ua: 'UA',
    en: 'EN'
}

const ExampleFetch: FunctionComponent = () => {
    const [records, setRecords] = useState<Record[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>("");

    const handleFetchData = () => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError("");
            const response = await fetch('api/WeatherForecast');
            if (!response.ok) {
                throw new Error();
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const fetchedRecords: Record[] = await response.json();
            setRecords(fetchedRecords);
            setIsLoading(false);

        }
        fetchData().catch(() => {
            setIsError("Something went wrong!");
        });
    }

    const { t, i18n } = useTranslation();

    useEffect(() => {
        handleFetchData();
    }, [])

    let content;
    if (!isLoading && !isError) {
        content =
            <CardContainer>
                {records.map((item) => (
                    <Card title={item.date}> {item.temperatureC} {item.summary}</Card>))}
            </CardContainer>
    } else if (isLoading && !isError) {
        content = <h1 style={{ "color": "orange", "textAlign": "center" }}>Loading...</h1>
    } else {
        content =
            <h1 style={{ "color": "red", "textAlign": "center" }}>Something went wrong. Ensure that backend server is
                running on port 3000</h1>
    }
    return <>
        <div>
            <Button onClick={handleFetchData}>{t('buttonFetch')}</Button>
        </div>
        <div>
            {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => void i18n.changeLanguage(lng)}>
                    {lng === 'ua' ? lngs.ua : lngs.en}
                </button>
            ))}
        </div>
        {content}
    </>
}
export default ExampleFetch;
