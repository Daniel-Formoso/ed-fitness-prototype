import Image from "next/image";
import { AtSign } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><div><SiteLogo /><p className="mt-3 text-xs text-muted-foreground">{siteConfig.tagline}.</p></div><a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Ed Fitness" className="grid size-11 place-items-center border"><AtSign className="size-5" /></a></div>
        <Separator className="my-7" />
        <div className="flex flex-col gap-5 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>{siteConfig.address.street}, {siteConfig.address.district} — {siteConfig.address.city}/{siteConfig.address.state}</p>
          <div className="flex flex-col items-start gap-4 self-start sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-4 lg:self-auto lg:flex-nowrap">
            <p>Protótipo comercial · {new Date().getFullYear()}</p>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2" aria-label="Desenvolvido por DF Labs">
              <span className="text-xs font-semibold tracking-[.12em] uppercase text-muted-foreground/80">Desenvolvido por</span>
              <Image src="/assets/df-labs-logo.png" alt="DF Labs — Daniel Formoso Desenvolvimento Web" width={2703} height={432} className="h-auto w-[104px] object-contain opacity-80 transition-opacity hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
