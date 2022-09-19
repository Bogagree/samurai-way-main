import React, {ChangeEvent, useEffect, useState} from 'react';

type StatusFunctionalPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

export const ProfileStatusFunctional: React.FC<StatusFunctionalPropsType> = (props) => {

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusTC(status)
    };

    const activateEditMode = () => {
        setEditMode(true)
    };

    return (
        <div>{editMode
            ? <div>
                <input
                    type="text"
                    value={status}
                    onChange={onStatusChange}
                    onBlur={deActivateEditMode}
                    autoFocus
                />
            </div>
            : <div
                onDoubleClick={activateEditMode}
                style={{fontWeight: 'bold'}}
            >Статус functional: <span style={{fontWeight: 'normal'}}> {status}</span>
            </div>}
        </div>
    )
}