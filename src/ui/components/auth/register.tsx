"use client";

import { Input } from "@/ui/shadcn/input";
import { z } from "zod";
import {
    username,
    email,
    password,
    confirmPassword,
} from "@/lib/validation/auth";

export const schema = z.object({
    username,
    email,
    password,
    confirmPassword,
});

export function Register() {
    return (
        <>
            <Input />
        </>
    );
}
