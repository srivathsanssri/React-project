import axios from "axios";

const API_URL='http://localhost:3003';

export const getAllDatas=()=>axios.get(`${API_URL}/LogInData`);

export const addnewuser=async(data)=> {
    try {
        const { data: existingdata}=await axios.get(`${API_URL}/LogInData`);
        const newi=Math.max(...existingdata.map((user)=>user.id),0);
        const NewData={
            ...data,
            id:newi+1
        }
        await axios.post(`${API_URL}/LogIndata`,NewData);
    }
    catch(error)
    {console.log(error)}
}