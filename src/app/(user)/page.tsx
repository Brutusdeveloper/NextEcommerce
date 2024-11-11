import Image from "next/image";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import Facilities from "@/components/Facilities";

export default function Home() {
  return (
    <Container className="py-10">
        <Banner/>
        <Facilities/>
    </Container>

  );
}
