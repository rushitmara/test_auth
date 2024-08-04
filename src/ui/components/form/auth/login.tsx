"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { username, password } from "@/lib/validation/auth";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/ui/shadcn/form";
import { Input } from "@/ui/shadcn/input";
import AuthForm from "./form";

const schema = z.object({
    username,
    password,
});

export default function Login() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            password: "",
        },
    });
    const onSubmit = (values: z.infer<typeof schema>) => {
        console.log(values);
    };
    return (
        <>
            <AuthForm form={form} name="login" onSubmit={onSubmit}>
                {/* username */}
                <FormField
                    name="username"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="bob_builder777"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* password */}
                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </AuthForm>
        </>
    );
}
