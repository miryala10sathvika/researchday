// "use client";

// import React, { createContext, useState, useEffect, useContext } from "react";
// import { useRouter } from "next/navigation";

// // Create AuthContext
// const AuthContext = createContext();

// // AuthProvider component to wrap around your app
// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(null); // null indicates loading state
//     const router = useRouter();

//     useEffect(() => {
//         // Check if the user is logged in by checking the RF_Auth cookie
//         const token = document.cookie.split('; ').find(row => row.startsWith('RF_Auth='));

//         if (token) {
//             setIsAuthenticated(true);
//         } else {
//             setIsAuthenticated(false);
//             router.push("/api/login");
//         }
//     }, [router]);

//     // Render nothing or a loading indicator until authentication check completes
//     if (isAuthenticated === null) {
//         setIsAuthenticated(false); // Alternatively, return a loading spinner
//     }

//     return (
//         <AuthContext.Provider value={{ isAuthenticated }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Custom hook to use authentication context
// export const useAuth = () => useContext(AuthContext);
