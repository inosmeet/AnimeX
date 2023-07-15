import React, { createContext, useEffect, useState, useRef, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const isCurrent = useRef(true);
    
    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    })
    useEffect(async () => {
        const response = await axios.get("/auth/user", { withCredentials: true }).catch(err => {
          console.log("Not authenticatedd properly", err);
        });
        if(response && response.data){
          setUser(response.data[0]);
        //   console.log("User: ", response.data[0]);
        }

    }, [setUser]);
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

    

    
}
// export default React.memo(UserProvider);
export default UserProvider;

// implementation of useContext is not completed yet.