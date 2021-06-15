import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert) return null

    return (
        <div class={`alert alert-${alert.type || 'secondary'} fade show d-flex alert-dismissible justify-content-between`} role="alert">
            <strong>{alert.text}</strong>  
            <button type="button" onClick={() => hide()} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert