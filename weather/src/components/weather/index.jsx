
import { useEffect, useState } from "react"
import Search from "../search"


export default function Weather(){
    const [search, setSearch] = useState('');
    const [ loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param){
        setLoading(true)

        try{
            const response = await fetch();
            const data = await response.json();
            if(data){
                setWeatherData(data)
                setLoading(false)
            }

        }catch(e){
            setLoading(false)
            console.log(e)
        }

    }


    function handleSearch(){
        fetchWeatherData(search)

    }

    function getCurrentDate(){
        return new Data().toLocalDateString('en-us',{})

    }


    useEffect(()=>{
        fetchWeatherData(`banglaore`)

    },[])
    console.log(weatherData);

    return <div>
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        
        />
        {
            loading ? <div>Loading...</div>:
            <div>
                <div className="city-name">
                    <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span> </h2>
                </div>
                <div className="date">

                    <span>{getCurrentDate()}</span>

                </div>

            </div>
        }
        Weather
    </div>
}
