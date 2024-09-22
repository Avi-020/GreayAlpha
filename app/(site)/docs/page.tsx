import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatem nostrum non facere molestiae rem!</h1>
      </section>
      
    </>
  );
}
