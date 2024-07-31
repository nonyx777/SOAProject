// api.js
import axios from 'axios';

export const updateCredential = async (username, password) => {
    try {
        const response = await axios.post(
            'http://0.0.0.0:8002/update/', // Make sure this URL is correct and accessible
            {
                username : username,
                password : password,
            },
            {
                headers: {
                    'Content-Type': 'application/json', // Headers should be in the config object, not the data
                },
            }
        );

        console.log(username, password);

        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.detail || 'Failed to update credentials';
        throw new Error(errorMessage);
    }
};
