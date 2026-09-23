import React
    from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <main className="w-full flex">

            <aside className="bg-red-900 h-screen w-[200px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi obcaecati ab ipsum impedit unde. Aliquam rerum ducimus in facilis reprehenderit nulla, nihil excepturi. Adipisci autem vero libero optio quo.
            </aside>
            <div className="w-[80%] bg-rose-600">
                {children}
            </div>
        </main>

    </>
}

export default Layout;
