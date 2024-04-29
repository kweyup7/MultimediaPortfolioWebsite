import Link from "next/link";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import profilePic from '../public/profilephoto.png'

const HomePage = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font medium">Paul Kweyu</h2>
        <h3 className="text-2xl py-2 font-burtons">Web Developer and designer.</h3>
        <p className="text-medium py-5 leading-8 text-gray-800">
          Freelancer providing services for web development and design content needs. Join me
          down below...
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <Link href="https://github.com/kweyup7"><AiFillGithub /></Link>
        <Link  href="https://www.linkedin.com/in/paul-kweyu-ba3b23278/"><AiFillLinkedin /></Link>
        <Link  href="https://www.instagram.com/paul.kweyu/"><AiFillInstagram /></Link>
      </div>
      <div className="relative mx-auto  w-80 h-80 mt-20 overflow-hidden">
        <Image src={profilePic}  className="rounded-full" />
      </div>
    </div>
  );
};

export default HomePage;
