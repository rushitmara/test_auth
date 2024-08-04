import { CardContent } from "@/ui/shadcn/card";
import Login from "@/ui/components/form/auth/login";
import { Footer, Header } from "@/ui/components/form/auth/parts";

export default function Page() {
    return (
        <>
            <Header title="Login" />
            <CardContent>
                <Login />
            </CardContent>
            <Footer
                desc={{
                    p: "Don't have an account yet?",
                    link: "Register now!",
                }}
                href="/register"
            />
        </>
    );
}
