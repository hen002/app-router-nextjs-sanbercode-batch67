import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Next.js app -About',
    description: 'Generated by create next app',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>
        <p>About Layout</p>
        {children}</div>
}