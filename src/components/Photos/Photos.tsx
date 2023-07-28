import React, {useEffect, useState} from "react";
import styles from './Photos.module.css'
import {getPhotosTC, PhotoType} from '../../redux/photos-reducer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';

type PropsType = {}

export const Photos = (props: PropsType) => {

    const [data, setData] = useState<any>()

    const photoFromRedux = useSelector<AppRootStateType, PhotoType>(state => state.photosPage.photo)

    console.log('data', photoFromRedux)

    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/photos/5')
            .then((response) => response.json())
            .then((data: any) => {
                setData(data)
            })

        getPhotosTC(2)
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