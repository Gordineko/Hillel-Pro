import api from '../../../api'
import {useEffect, useState} from 'react'

export default function useUsersList () {
    const[list,setList]=useState([])
    useEffect(() =>{
        api.get('users').then(({data}) => setList(data))
    },[]);


    function deleteUsers(id){
        api.delete('users/'+id).then(()=>{
            setList(list.filter((item)=>item.id!==id))
        })
    }
    return {list,deleteUsers}
}

