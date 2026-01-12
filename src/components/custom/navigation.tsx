"use client";

import Link from "next/link";
import { BookOpen, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 right-4 z-50 flex gap-2">
      {pathname !== "/" && (
        <Link href="/">
          <Button
            size="sm"
            className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 text-white shadow-lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Landing Page
          </Button>
        </Link>
      )}
      {pathname !== "/curso" && (
        <Link href="/curso">
          <Button
            size="sm"
            className="bg-orange-600/90 backdrop-blur-sm border border-orange-500 hover:bg-orange-700 text-white shadow-lg"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Ver Curso Completo
          </Button>
        </Link>
      )}
    </nav>
  );
}
