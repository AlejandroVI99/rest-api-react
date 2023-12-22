import { useState, useEffect } from 'react'
import axios from 'axios'

export function Bonds() {

    const [bonds] = useState([])
    useEffect(() =>{
        axios.get('https://api.machines.dev/v1/apps/rest-api-test/api/v1/bonds')
        .then(resp => console.log(resp))
        .catch(resp => console.log(resp))
    }
    )

    return (
        <div>aki van los bonds</div>
    )
}