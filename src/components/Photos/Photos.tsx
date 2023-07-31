import React, {useEffect, useState} from "react";
import styles from './Photos.module.css'
import {getPhotosTC, PhotoType} from '../../redux/photos-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {Field, reduxForm} from 'redux-form';
import {DialogsFormDataType} from '../Dialogs/AddMessageForm';

type PropsType = {}

const EnterNumberForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'photoNumber'}
                placeholder={'Type photo number'}
                component='input'
                type='number'
                autoFocus
            />
            <button>change photo</button>
        </form>
    )
}

export const EnterPhotoNumberRedux = reduxForm<DialogsFormDataType>(
    {form: 'enterPhotoNumber'}
)(EnterNumberForm)

export const Photos = (props: PropsType) => {

    const [data, setData] = useState<any>()
    const [newPhoto, setNewPhoto] = useState(25)

    const photoFromRedux = useSelector<AppRootStateType, PhotoType>(state => state.photosPage.photo)
    const dispatch = useDispatch()


    const addNewPhotoNumber = (values: any) => {
        console.log('form submitted', values)
        setNewPhoto(values.photoNumber)
    }

    useEffect(() => {

        // @ts-ignore
        dispatch(getPhotosTC(newPhoto))
        setData(photoFromRedux)
    }, [newPhoto])

    return (
        <div className={styles.Photos}>
            <EnterPhotoNumberRedux onSubmit={addNewPhotoNumber}/>
            {data && <>
                <img src={data.photo.url}/>
                <h1>{data.photo.title}</h1>
            </>}
        </div>
    )
}

