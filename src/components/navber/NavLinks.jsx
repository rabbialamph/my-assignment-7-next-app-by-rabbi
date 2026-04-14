"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";

const NavLinks = () => {
  const pathname = usePathname();

  const linkClass = (path) => {
    const isActive =
      path === "/"
        ? pathname === "/"
        : pathname.startsWith(path);

    return `px-3 py-2 rounded-md ${
      isActive ? "bg-green-700 text-white" : ""
    }`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <li>
        <Link href="/" className={linkClass("/")}>
         <FaHome></FaHome> Home
        </Link>
      </li>

      <li>
        <Link href="/timeline" className={linkClass("/timeline")}>
         <RiTimeLine></RiTimeLine> Timeline
        </Link>
      </li>

      <li>
        <Link href="/stats" className={linkClass("/stats")}>
         <FaChartLine></FaChartLine> Stats
        </Link>
      </li>
    </div>
  );
};

export default NavLinks;