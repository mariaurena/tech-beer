import { mount } from 'auth/AuthApp'
import { useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const AuthApp = ({ onNavigate }) => {
    
    const ref = useRef(null)
    const navigate = useNavigate()


    useEffect(() => {

        mount(ref.current, {
            onNavigate: () => {
                onNavigate()
                navigate('/catalogo')
            }

        }) 
        
    }, [])


    return <div ref={ref} />
}


export default AuthApp