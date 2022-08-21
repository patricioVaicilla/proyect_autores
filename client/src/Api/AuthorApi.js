import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const createAuthor = async author => {

    await axios.post(`${baseURL}/api/author/new`, author)
        .then(res => { console.log(res.data); return res.data; } )
        .catch(err =>  err );

}

export const getAllAuthors = async () => {
    
    var response;
    await axios.get(`${baseURL}/api/authors`)
        .then(res =>  response = res.data )
        .catch(err =>  response = err );

    return response;
}

export const getAuthor = async (id) => {

    var response;
    await axios.get(`${baseURL}/api/author/${id}/`)
        .then(res =>  response = res.data )
        .catch(err =>  response = err );
    return response;
}

export const updateAuthor = async (author) => {

    await axios.put(`${baseURL}/api/author/${author._id}`, author)
        .then(res => { console.log(res.data); return res.data; } )
        .catch(err =>  console.log(err) );
} 

export const deleteAuthor = async id => {

    await axios.delete(`${baseURL}/api/author/${id}`)
        .then(res => { console.log(res.data); return res.data; } )
        .catch(err =>  err );
}