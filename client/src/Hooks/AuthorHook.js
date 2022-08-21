import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor } from '../Api/AuthorApi';

export const useAuthors = () => {
    
    return useQuery(['getAllAuthors'], getAllAuthors);
}

export const useAuthor = (id) => {
    return useQuery(['getAuthor', id], () => getAuthor(id), { staleTime: 0 });

}

export const useCreateAuthor = () => {
    const queryClient = useQueryClient();
    return useMutation(createAuthor, {
        onSuccess: () => queryClient.invalidateQueries(['getAllAuthors'])
    });
}

export const useUpdateAuthor = () => {
    const queryClient = useQueryClient();
    return useMutation(updateAuthor, { 
        onSuccess: () => queryClient.invalidateQueries(['getAllAuthors'])
     })
}

export const useDeleteAuthor = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteAuthor, {
        onSuccess: () => queryClient.invalidateQueries(['getAllAuthors'])
    });
}