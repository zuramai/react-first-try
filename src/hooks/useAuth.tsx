import { useContext, useEffect, useState } from "react";

import {User} from '@/types/user'
import { createContext } from "react";

type AuthContextType = {
    user: User | null
    setUser: (u: User) => void
    clearUser: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({children}: {children: any}) {
    const [user, setData] = useState<User | null>(JSON.parse(localStorage.getItem('user') ?? "{}"))
    const setUser = (u: User) => {
        setData(u)
        localStorage.setItem('user', JSON.stringify(u))
    }
    const clearUser = () => {
        setData(null)
        localStorage.removeItem('user')
    }

    // Check if user logged in 
    useEffect(() => {
        if(localStorage.getItem('user')) {
            setData(JSON.parse(localStorage.getItem('user')!))
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            setUser, 
            clearUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)