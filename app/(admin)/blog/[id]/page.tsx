// Cara pertama: server components
// export default async function BlogDetail({
//     params,
// }: {
//     params: Promise<{ id: string }>
// }) {
//     const id = (await params).id

//     return <div>Blog Detail Page {id}</div>
// }

// Cara kedua: client components 
// "use client"
// import { useParams } from "next/navigation"

// export default function BlogDetail() {
//     const params = useParams()

//     return <div>Blog Detail Page {params.id}</div>
// }

// Cara ketiga: client components, search params
"use client"
import { useParams, useSearchParams } from "next/navigation"

export default function BlogDetail() {
    const params = useParams()
    const search = useSearchParams()
    const query = Object.fromEntries(search.entries())

    return <div>Blog Detail Page {`dynamic: ${params.id}, user: ${query.user}, age: ${query.age}`}</div>
}