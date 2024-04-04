import { mount } from 'catalogo/CatalogoApp'
import { useRef, useEffect } from "react"

import MenuApp from './MenuApp'

const CatalogoApp = () => {

    const ref = useRef(null)


    useEffect(() => {

        mount(ref.current) 

    }, [])

    return (
        <>
            <MenuApp />
            <div ref={ref} />
        </>
    )
}

export default CatalogoApp
