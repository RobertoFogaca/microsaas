'use client'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import Link from "next/link"

export default function AuthForm() {
    const form = useForm()
    const handleSubmit = form.handleSubmit(async (data) => {

        await signIn('nodemailer',
            {
                email: data.email,
                callbackUrl: '/auth',
                redirect: false
            }
        )
    })
    // signIn('nodemailer',
    //     {
    //         email: "robertofogacagocalves01@gmail.com",
    //         redirect: false
    //     }
    // )
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 md:px-6">
            <div className="w-full max-w-md space-y-4">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold"><Link href="#" className="font-extrabold text-lime-600">Sign in</Link> with a magic link</h1>
                    <p className="text-muted-foreground">Enter your email address and we'll send you a magic link to sign in.</p>
                </div>
                <Card>
                    <CardContent className="space-y-4">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="R@ftdata.com" {...form.register('email')} required />
                                <Label htmlFor="PassWord">Password</Label>
                                <Input id="email" type="password" placeholder="••••••••••" {...form.register('PassWord')} required />
                            </div>
                            <Button type="submit" className="w-full">
                                Send magic link
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="text-center text-sm text-muted-foreground">
                        <p>
                            By signing in, you agree to our{" "}
                            <Link href="#" className="underline text-blue-800" prefetch={false}>
                                Terms of Service
                            </Link> and{" "}
                            <Link href="#" className="underline text-blue-800" prefetch={false}>
                                Privacy Policy
                            </Link>.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}