import { useMutation } from '@tanstack/react-query'
import axios from 'axios';


export const useSubmitForm = () => useMutation({
    mutationFn: ({ name, contactNumber, emailAddress, rating, comments }) => axios.post('http://localhost:3000/submit', { name, contactNumber, emailAddress, rating, comments })
})


