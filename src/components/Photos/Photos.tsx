import React, {useEffect, useState} from "react";
import styles from './Photos.module.css'

type PropsType = {}

export const Photos = (props: PropsType) => {

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
        <div className={styles.Photos}>
            {data && <>
                <img src={data.photo.url}/>
                <h1>{data.photo.title}</h1>
            </>}
        </div>
    )
}