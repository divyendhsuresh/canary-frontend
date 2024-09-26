import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

export const useFetchFeedback = () => {

    return useQuery({
        queryFn: () => axios.get('https://canary-backend.onrender.com/feedbacks'),
        queryKey: ["FEEDBACKS"],
        select: (response) => response.data
    })
}