
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from '../components/firebase/firebase.init';



initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

  
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //Create user with email and password
    const registerWithEmail = ( email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const newUser = {email, displayName: name};
            setUser(newUser);
            setAuthError('');
        // user info sand to database
            saveUser(email, name, 'POST');
        // Update user name and send to firebase
         updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
        
          });
          navigate('/');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( () => setIsLoading(false));
    }

    const signInWithEmail = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const destination = location?.state?.from || '/';
            navigate(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( () => setIsLoading(false));
    }

    // Google Login
    const googleSignIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT');
          const destination = location?.state?.from || '/';
          navigate(destination);
          setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally( () => setIsLoading(false));
    }
// Observe user state
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    }, [])

    // find Admin
     useEffect(() => {
        fetch(`https://secure-crag-84125.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])
 // user save in database
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://secure-crag-84125.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( () => setIsLoading(false));
    }

    return {
        user,
        admin,
        registerWithEmail,
        signInWithEmail,
        googleSignIn,
        isLoading,
        authError,
        logOut,

    };
};

export default useFirebase;