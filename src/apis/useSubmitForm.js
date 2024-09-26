import { useMutation } from '@tanstack/react-query'
import axios from 'axios';


export const useSubmitForm = () => useMutation({
    mutationFn: ({ name, contactNumber, emailAddress, rating, comments }) => axios.post('https://canary-backend.onrender.com/submit', { name, contactNumber, emailAddress, rating, comments })
})


