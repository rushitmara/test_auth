import { Card } from "@/ui/shadcn/card";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <Card className="p-4">{children}</Card>
        </div>
    );
}
