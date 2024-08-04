"use client";

import { Button } from "@/ui/shadcn/button";

export default function SubmitBtn({ name }: { name: string }) {
    return <Button className="bg-yellow-600">{name}</Button>;
}
