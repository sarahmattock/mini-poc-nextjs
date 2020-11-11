
import React from "react";
import { useSelector, shallowEqual } from 'react-redux'

const useForm = () => {
    return useSelector(
        (state) => ({
            email: state.email
        }),
        shallowEqual
    )
}

const Form = () => {
    const { email } = useForm()
    return (
        <div>
            <div>
                This is the Signup screen
        </div>
            <div>
                {email}
            </div>
        </div>
    )
}

export default Form
