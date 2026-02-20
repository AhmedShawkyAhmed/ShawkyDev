"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code, Menu } from 'lucide-react';
import { NAV_LINKS, PROFILE_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

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
          className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'border-border bg-background/80 backdrop-blur-md' : 'border-transparent bg-background'}`}>
      <div className="container flex h-16 items-center">
        <Link href="/" prefetch={false} className="mr-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">ShawkyDev</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" prefetch={false} className="flex items-center gap-2 text-lg font-semibold">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="sr-only">ShawkyDev</span>
                </Link>
                {navItems}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
