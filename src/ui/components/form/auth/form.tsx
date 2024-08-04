"use client";

import { Form } from "@/ui/shadcn/form";
import SubmitBtn from "./submitBtn";

export default function AuthForm({
    children,
    form,
    name,
    onSubmit,
}: {
    children: React.ReactNode;
    form: any;
    name: string;
    onSubmit: any;
}) {
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                {children}
                <SubmitBtn name={name} />
            </form>
        </Form>
    );
}
