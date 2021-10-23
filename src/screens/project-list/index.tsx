import {useEffect, useState} from "react";
import SearchPanel from "./SearchPanel";
import List from './List'
import axios from "axios";
import qs from 'qs'
import {cleanObject, useDebounce} from "@/utils";

export default function ProjectScreens() {
    const [params, setParams] = useState({
        userId: '',
        name: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const debounceValue = useDebounce(params, 200)
    const apiUrl = process.env.REACT_APP_API_URL

    useEffect(() => {
        axios(apiUrl+`/projectList?${qs.stringify(cleanObject(debounceValue))}`).then(response => {
            if (response.data) {
                setList(response.data)
            }
        })
    }, [debounceValue])

    useEffect(() => {
        axios(apiUrl+'/users').then(response => {
            if (response.data) {
                setUsers(response.data)
            }
        })
    }, [])

    return (
        <div>
            <SearchPanel params={params} setParams={setParams} users={users}/>
            <List list={list} users={users}/>
        </div>
    )
}
