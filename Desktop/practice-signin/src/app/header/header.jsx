import React from "react";
import { Button } from "@/components/ui/button"; 
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-secondary">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo Section */}
        <Link href="/" className="text-primary font-bold text-lg">
          Logo
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-primary hover:text-accent">
            Home
          </Link>
          <Link href="/products" className="text-primary hover:text-accent">
            Products
          </Link>
          <Link href="/about" className="text-primary hover:text-accent">
            About Us
          </Link>
          <Link href="/contact" className="text-primary hover:text-accent">
            Contact Us
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-primary border-primary">
            Login
          </Button>
          <Button variant="default" className="bg-accent text-primary">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-primary focus:outline-none"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
