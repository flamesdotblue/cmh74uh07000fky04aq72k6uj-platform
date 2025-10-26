import React from 'react';
import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center ring-1 ring-white/15">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white/90">SkyRent</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="mailto:sales@skyrent.app">sales@skyrent.app</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} SkyRent, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
