import Pageillustration from "@/components/Pageillustration";

export default function AuthLayout({
    children,
}:{
    children:React.ReactNode
}){
    return(
        <main className="grow">
            <Pageillustration/>
            {children}

        </main>
    )
}