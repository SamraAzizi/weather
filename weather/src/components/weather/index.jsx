
import { useState } from "react"
import Search from "../search"


export default function Weather(){
    const [search, setSearch] = useState('');


    async function handleSearch(){

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
