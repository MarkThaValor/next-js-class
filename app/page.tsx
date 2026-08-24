import Image from "next/image";
import Link from "next/link";

import ButtonWidget from "./components/ButtonWidget";

export default function Home() {
  return  <>

<div className="hidden">
<div className="bg-red-500 text-red-200"></div>
<div className="bg-yellow-500 text-yellow-200"></div>
<div className="bg-emerald-500 text-emerald-200"></div>
<div className="bg-amber-500 text-amber-200"></div>
<div className="bg-rose-500 text-rose-200"></div>
<div className="bg-blue-500 text-blue-200"></div>
</div>


    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
{/* <ButtonWidget title="Click me" color="red"/>
<ButtonWidget title="Click me" color="yellow"/>
<ButtonWidget title="Click me" color="emerald"/>
<ButtonWidget title="Click me" color="amber"/>
<ButtonWidget title="Click me" color="blue" /> */}

<Link href="/about">About</Link>

    </div>

    </>
  ;
}
