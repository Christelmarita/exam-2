import { loginUrl } from "../constants";

export async function login(email, password) {
    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    localStorage.setItem('accessToken', data.data.accessToken);
    localStorage.setItem('userName', data.data.name);
    return data;
}