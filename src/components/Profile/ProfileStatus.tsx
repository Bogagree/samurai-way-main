import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
}


const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        Статус: <span
                        style={{fontWeight: 'bold'}}
                        onDoubleClick={this.activateEditMode.bind(this)}>
                        {this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.status}
                               onChange={onChangeHandler}
                               onBlur={this.deActivateEditMode.bind(this)}
                               autoFocus
                        />
                    </div>}
            </div>)
    }
}

export default ProfileStatus