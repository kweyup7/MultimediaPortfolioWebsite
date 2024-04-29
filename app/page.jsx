import Cards from "@/Components/Cards";
import HomePage from "@/Components/HomePage";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Image from "next/image";
import Link from "next/link";
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <main className=" bg-white px-10 ">
      <section className=" min-h-screen">
<Navbar />
<HomePage />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Cards />
      </section>
    </main>
  );
}
