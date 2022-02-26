import axios from 'axios';

export const baseUrl="https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
   const {data} =await axios.get((url),{

    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '33efbce20amshe13a0191b376486p14f9a0jsn1595b2da82dd'
      }


   })
   return data;
}