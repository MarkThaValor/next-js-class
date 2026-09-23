"use client";
import { useContext } from "react";
import { LevelContext } from "../libs/LevelContext";


const Heading = ({ children }: { children: React.ReactNode }) => {
    const level = useContext(LevelContext);

    switch (level) {
        case 1: return <h1 className="text-black">{children}</h1>;
        case 2: return <h2 className="text-white">{children}</h2>;
        case 3: return <h3 className="text-emerald-500">{children}</h3>;
        case 4: return <h4 className="text-rose-500">{children}</h4>;
        case 5: return <h5 className="text-fuchsia-500">{children}</h5>;
        case 6: return <h6 className="text-orange-500">{children}</h6>;
        default: return <p>{children}</p>;
    }
}

export default Heading;