import { registerUrl } from "../constants";

export async function register(name, email, password, role) {
    const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            venueManager: role === 'manager',
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }
    return data;
};