import { CardFooter, CardHeader, CardTitle } from "@/ui/shadcn/card";
import Link from "next/link";

export function Footer({
    desc,
    href,
}: {
    desc: { p: string; link: string };
    href: string;
}) {
    return (
        <CardFooter>
            {desc.p}
            <Link href={href} className="ml-2">
                {desc.link}
            </Link>
        </CardFooter>
    );
}

export function Header({ title }: { title: string }) {
    return (
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
    );
}
