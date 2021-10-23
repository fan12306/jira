import React, {FormEvent} from "react";
import axios from "axios";
import qs from "qs";
import {cleanObject} from "../../utils";

interface ILogin {
    username: string
    password: string
}

export const LoginScreen = () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }

    const login = async (params: ILogin) => {
        const res = await axios({
            url: apiUrl+`/login`,
            method: "POST",
            data: JSON.stringify(params),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        console.log(res);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" id={"username"}>用户名</label>
            <input type="text"/>
        </div>
        <div>
            <label htmlFor="password" id={"password"}>密码</label>
            <input type="password"/>
        </div>
        <button type={"submit"}>登录</button>
    </form>
}