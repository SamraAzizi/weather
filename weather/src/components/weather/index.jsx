
import { useState } from "react"
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

    return <div>
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        
        />
        Weather
    </div>
}
