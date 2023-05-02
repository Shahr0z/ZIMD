// import axios, { formToJSON } from 'axios';
// import { useEffect, useState } from 'react';

// export function ApiService({ url = 'https://reactnative.dev/movies.json', method = 'GET', data = null, contentType = 'application/json' }) {
//     const [responseJson, setResponseJson] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     async function fetchData() {
//         try {
//             const headers = {
//                 Accept: 'application/json',
//                 'Content-Type': contentType,
//             };

//             const config = {
//                 url: url,
//                 method: method,
//                 headers: headers,
//                 // data: method !== 'GET' ? data : null,
//             };

//             const response = await axios(config);
//             console.log('Api response', formToJSON(response));
//             setResponseJson(response);
//             setLoading(false);
//         } catch (err) {
//             setError(err);
//             setLoading(false);
//         }
//     }

//     useEffect(() => { fetchData() }, []);

//     return [responseJson, error, loading];
// }

// const [responseJson, error, loading] = ApiService({ method: 'GET' });