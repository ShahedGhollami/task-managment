import Axios from "axios";
const handleError = (err) => {
    if (err) {
        let error = [];
        switch (err.status) {           
            case 404:
                error.push(`${err.statusText}-${err.data}`);
                break
            case (500):
                if (err.data) {
                    error.push(err.data)
                } else {
                    error.push("Unexpected Error!");
                }
                break
            case undefined:
                if (err.toString().includes('Network Error')) {
                    error.push("Network Error!");
                }
                break
            default:
                error.push("Unexpected Error!");
        }
        return error;
    }
};
Axios.interceptors.request.use(request => {
    request.baseURL = `https://61cd783e7067f600179c5aa8.mockapi.io/api/`
    request.headers = {
        'Content-Type': 'application/json'    
    }
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
    return response;
}, error => {   
    let message = handleError(error?.response);
    console.log(message);
    return Promise.reject(error);
});
const fetchJSON = (url, options = {}) => {
    options.url = url;
    return Axios(options)
        .then(response => {
            if (!response.status == 200) {
                throw response;
            }
            return response.data;
        })
        .catch(error => {
            throw error.response;
        });
};
const optionPost = (body) => {
    return { data: JSON.stringify(body), method: 'POST' };
}
const optionGet = (body=null) => {
    return { params: body, method: 'GET' };
}
const listUrl = { 
    ContactUsForm: `ContactUsForm`,  
    ContactUs: `ContactUs`,
}
export { listUrl, handleError, fetchJSON, optionPost, optionGet };