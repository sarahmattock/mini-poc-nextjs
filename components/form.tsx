
import Link from "next/link";
import React from "react";
import { useSelector } from 'react-redux'

const useForm = () => {
    const state = useSelector((state) => state)
    return { ...state };
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
            <div>
                <Link href="/">
                    <a>Back Home</a>
                </Link>
            </div>

        </div>
    )
}

export default Form
