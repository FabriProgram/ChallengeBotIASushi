import './AltaCuenta.css'
import { SignUp } from '@clerk/clerk-react'

const AltaCuenta = () => {
    return (
        <div className="AltaCuenta">
            <SignUp path="/sign-up" signInUrl="/sign-in" />
        </div>
    )
} 

export default AltaCuenta