import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/authOptions/authOptions";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/')
    }

    return <>{children}</>
}