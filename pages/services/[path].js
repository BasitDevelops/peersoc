"use client";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import { FaRegDotCircle } from "react-icons/fa";
import { complete_services_data } from "@/data/complete_services_data";
import { usePathname } from "next/navigation";
import ServiceDetails from "../services-details";

export async function generateMetadata({ params }) {
  const p = await params;

  const post = complete_services_data?.find(
    (service) => service?.path === p?.path
  );

  return post
    ? {
        title: post.main_title,
        description: post.desc_1,
        openGraph: {
          title: post.main_title,
          description: post.desc_1,
          url: `https://peersoc-iota.vercel.app${post.path}`,
          images: [{ url: post.main_img }],
        },
      }
    : { title: "Post Not Found", description: "No content available." };
}

export async function generateStaticParams() {
  return complete_services_data.map((service) => service?.path);
}

const page = () => {
  return (
    <>
      <ServiceDetails />
    </>
  );
};

export default page;
