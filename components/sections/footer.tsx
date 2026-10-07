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
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>{siteConfig.address.street}, {siteConfig.address.district} — {siteConfig.address.city}/{siteConfig.address.state}</p>
          <p>Protótipo comercial · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
