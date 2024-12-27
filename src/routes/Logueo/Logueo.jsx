import './Logueo.css'
import { SignIn } from '@clerk/clerk-react'

const Logueo = () => {
    return (
        <div className="Logueo">
            <SignIn path="/sign-in" signUpUrl="/sign-up" />
        </div>
    )
}

export default Logueo