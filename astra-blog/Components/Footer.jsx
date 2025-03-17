import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center items-center border-t border-black p-4">
        <h1 className="text-lg font-bold">Company Logo</h1>
        <div className="flex flex-row justify-around items-center p-2">
          <p className="mx-2 hover:bg-blue-500">
          <Link href='/'>
                Home
              </Link>
          </p>
          <p className="mx-2 hover:bg-blue-500">
          <Link href='/about'>
                About
              </Link>
          </p>
          <p className="mx-2 hover:bg-blue-500">
          <Link href='/article'>
                Articles
              </Link>
          </p>
          <p className="mx-2 hover:bg-blue-500">
          <Link href='/admin'>
                Admin
              </Link>
          </p>
        </div>
        <div className="flex flex-row justify-around items-center p-2">
          <Image
            src="/assets/email.png"
            alt="Email"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/telephone-call.png"
            alt="Telephone"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/facebook.png"
            alt="Facebook"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/instagram.png"
            alt="Instagram"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/tiktok.png"
            alt="Tiktok"
            width={20}
            height={20}
            className="mx-2"
          />
          <Image
            src="/assets/youtube.png"
            alt="Youtube"
            width={20}
            height={20}
            className="mx-2"
          />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center h-min-content bg-black">
          <p className="text-white">
            © 2021 Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
