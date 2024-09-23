import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

export const useFetchFeedback = () => {

    return useQuery({
        queryFn: () => axios.get('http://localhost:3000/feedbacks'),
        queryKey: ["FEEDBACKS"],
        select: (response) => response.data
    })
}