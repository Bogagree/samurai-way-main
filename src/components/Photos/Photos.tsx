import React, {useEffect, useState} from "react";
import style from './Photos.module.css'

type NewsPropsType = {}

export const Photos = (props: NewsPropsType) => {

    const [data, setData] = useState<any>()

    console.log('data', data)

    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/photos/2')
            .then((response) => response.json())
            .then((data: any) => {
                setData(data)
            })
    }, [])

    return (
        <div>
            {data && <>
                <img src={data.photo.url}/>
                <h1>{data.photo.title}</h1>
            </>}
        </div>
    )
}