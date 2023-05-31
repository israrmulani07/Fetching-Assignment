import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Child } from './Child'

export const Assignment = () => {
    const [data, setData] = useState()

    const getData = async () => {
        const result = await axios.get("https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0")
        setData(result.data)
        // console.log(result)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <React.Fragment>
            <h1>Assignment</h1>
            <Child data={data} />
        </React.Fragment>
    )
}
