import { profileUrl } from "./constants.js";

export async function getUserProfile() {
    const accessToken = localStorage.getItem('accessToken');
    const name = localStorage.getItem('userName');
    const response = await fetch(`${profileUrl}/${name}`, {
        method: 'get',
        headers: {
            Accept: "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
    },
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data;
};