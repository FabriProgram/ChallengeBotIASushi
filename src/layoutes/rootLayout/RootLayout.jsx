import { Link, Outlet } from "react-router";
import './rootLayout.css'
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("No se encuentra la clave de la aplicacion -Clerk-")
}

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="rootLayout">
            <header>
                <Link to="/" className="logo">
                <img src="/logo.png" alt=""/>
                <span>LAMA AI</span>
                </Link>
                <div className="user">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
        </ClerkProvider>
    )
}

export default RootLayout