import SectionWiget from "../components/SectionWidget";
import Heading from "../components/Heading";

export default function Test() {
    return <>
        <Heading>Home</Heading>
        <SectionWiget level={1}>
            <Heading>About</Heading>
            <Heading>History</Heading>
            <Heading>Vision</Heading>
            <Heading>Mission</Heading>
            <Heading>Contact</Heading>


            <SectionWiget level={2}>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
            </SectionWiget>


            <SectionWiget level={3}>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
                <Heading>Contact</Heading>
            </SectionWiget>

        </SectionWiget>
    </>
}