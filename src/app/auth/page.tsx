import AuthForm from "./_components/auth-form";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'log-in',
}

export default function Page() {
    return (
        <AuthForm />
    )
}