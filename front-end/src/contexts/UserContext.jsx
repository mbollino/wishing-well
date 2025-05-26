import { createContext, useState } from 'react';

const UserContext = createContext();

const getUserFromToken = (token) => {
    if (!token) return null

    try {
        const payload = token.split('.')[1]
        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
        const decodedPayload = JSON.parse(atob(base64))
        return decodedPayload
    } catch (err) {
        console.error("Invalid token", err)
        return null
    }
};

function UserProvider({ children }) {
    const [user, setUser] = useState(getUserFromToken());

    const value = { user, setUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };