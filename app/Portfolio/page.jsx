import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
    <Navbar />
    <div className="text-center"> <h1 className="text-xl font-bold">SOME OF MY WORK</h1></div>
   
    <Link href="https://github.com/kweyup7" className="text-center shadow-lg p-10 rounded-xl mb-10">
  <Image src={"/web1.png"} width={1000} height={500} className="mx-auto mb-5" />
  <Image src={"/web2.png"} width={1000} height={500} className="mx-auto mb-5" />
  <Image src={"/web3.png"} width={1000} height={500} className="mx-auto mb-5" />
  <Image src={"/web4.png"} width={1000} height={500} className="mx-auto mb-5" />
  <Image src={"/web5.png"} width={1000} height={500} className="mx-auto mb-5" />
</Link>

    </>
  );
};

export default page;
