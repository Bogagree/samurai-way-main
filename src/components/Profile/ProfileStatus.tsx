import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusTC(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('component updated')
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        Статус: <span
                        style={{fontWeight: 'bold'}}
                        onDoubleClick={this.activateEditMode}>
                        {this.props.status || '-----'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            type="text"
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            onBlur={this.deActivateEditMode}
                            autoFocus
                        />
                    </div>}
            </div>)
    }
}

export default ProfileStatus