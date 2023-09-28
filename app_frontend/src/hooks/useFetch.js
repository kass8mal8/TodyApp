import { useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    const fetchData = async() => {
        try {
            const res = await fetch(url)
            const response = await res.json()

            if (response.status !== 200) {
                setError(response.message)
            }
            setData(response)

        } catch (error) {
            setError(error.message)
        }
    }
    fetchData()

    return { data, error }
}

export default useFetch