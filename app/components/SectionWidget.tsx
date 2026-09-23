import { LevelContext } from "../libs/LevelContext";

const SectionWiget = ({ level, children }: { level: number, children: React.ReactNode }) => {
    return <>
        <section className="bg-red-500 m-5 p-5 border-2">
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
    </>
}

export default SectionWiget;