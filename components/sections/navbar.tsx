"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig, whatsappUrl } from "@/data/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
        <SiteLogo />
        <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonVariants({ className: "h-12 rounded-none px-5 font-bold" })}>
            Aula experimental <ArrowUpRight />
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button type="button" aria-label="Abrir menu" className="grid size-12 place-items-center border bg-background transition-colors hover:bg-muted lg:hidden">
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-none rounded-none border-l bg-muted p-0 sm:max-w-md">
            <SheetHeader className="border-b p-6 text-left">
              <SheetTitle><SiteLogo /></SheetTitle>
              <SheetDescription>Navegue pela página da Ed Fitness.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Navegação móvel" className="flex flex-col px-6 py-4">
              {siteConfig.navigation.map((item) => (
                <SheetClose key={item.href} asChild><a href={item.href} className="border-b py-5 font-display text-2xl font-bold uppercase">{item.label}</a></SheetClose>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonVariants({ className: "mt-7 h-12 rounded-none font-bold" })}>
                Falar com a recepção <ArrowUpRight />
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
