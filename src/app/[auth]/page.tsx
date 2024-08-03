import {
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/ui/shadcn/card";
import { Login, Register } from "@/ui/auth";

export default function Page({ params }: { params: { slug: string } }) {
    const isLogin = params.slug === "login";
    return (
        <>
            <CardHeader>
                <CardTitle>{isLogin ? "Login" : "Register"}</CardTitle>
            </CardHeader>
            <CardContent>{isLogin ? <Login /> : <Register />}</CardContent>
            <CardFooter></CardFooter>
        </>
    );
}
