import {useState, useEffect} from "react";



export default httpClient => {
    const [error, setError] = useState(null);


    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null)
        return req
    });

    const resInterceptor = httpClient.interceptors.response.use(response => response, err => {
        setError(err)
    });


    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor); // remove duplicates from memory
            httpClient.interceptors.response.eject(resInterceptor); // remove duplicates from memory
        }
    }, [reqInterceptor, resInterceptor])



    const errorComfirmedHanlder = () => {
        setError(null)
    }

    return [error, errorComfirmedHanlder];
};