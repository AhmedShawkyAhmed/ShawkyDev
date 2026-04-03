"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { NAV_LINKS, PROFILE_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/logo.png`;
  const { email } = PROFILE_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = 'about';

      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      {NAV_LINKS.map(link => (
        <Link key={link.href} href={link.href}
          className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${activeSection === link.href.substring(1) ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-4'}`}>
      <div className="container">
        <div className={`surface-panel flex h-16 items-center rounded-full px-4 transition-all duration-300 ${isScrolled ? 'bg-card/90' : 'bg-card/75'}`}>
        <Link href="/" prefetch={false} className="mr-auto flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/70">
            <Image src={logoSrc} alt="ShawkyDev" width={26} height={26} className="h-6 w-6 object-contain" />
          </div>
          <span className="hidden font-headline text-lg font-bold text-foreground sm:block">ShawkyDev</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-background/45 p-1 md:flex">
          {navItems}
        </nav>
        <div className="ml-3 flex items-center justify-end gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href={`mailto:${email}`}>Let&apos;s Talk</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border/80 bg-card/95">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" prefetch={false} className="flex items-center gap-2 text-lg font-semibold">
                  <Image src={logoSrc} alt="ShawkyDev" width={32} height={32} className="h-8 w-8 object-contain" />
                  <span>ShawkyDev</span>
                </Link>
                {navItems}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}
