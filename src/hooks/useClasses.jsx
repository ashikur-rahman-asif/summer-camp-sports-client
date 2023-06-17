import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {
        data: classes = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axios.get(`https://12-server-virid.vercel.app/classes`);
            return response.data;
        },
    });
    return [classes, refetch, isLoading];
};

export default useClasses;
