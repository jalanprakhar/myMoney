import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, username) => {
        setError(null);
        setIsPending(true);


        try {
            //signup

            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('Could not complete signup');
            }
            //add display name
            await res.user.updateProfile({ displayName: username })

            //dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })
            if (!isCancelled) {
                setIsPending(false);
                setError(null)
            }

        } catch (e) {
            if (!isCancelled) {
                setError(e.message);
                setIsPending(false);
            }
        }
    }
    useEffect(() => {
        return () => setIsCancelled(false)
    })

    return { error, isPending, signup }
}