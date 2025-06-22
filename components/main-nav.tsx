'use client'

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {data.map((route) => {
        const href = `/category/${route.id}`;
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={{ pathname: href }}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default MainNav;
