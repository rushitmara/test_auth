import { CardContent } from "@/ui/shadcn/card";
import Register from "@/ui/components/form/auth/register";
import { Header, Footer } from "@/ui/components/form/auth/parts";

export default function Page() {
    return (
        <>
            <Header title="Register" />
            <CardContent>
                <Register />
            </CardContent>
            <Footer
                desc={{ p: "Already have an account?", link: "Login now!" }}
                href="/login"
            />
        </>
    );
}
