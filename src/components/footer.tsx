import { PROFILE_DATA } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} {PROFILE_DATA.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
