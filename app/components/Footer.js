"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { display } = useTheme();

  return (
    <footer
      className={` ${
        display ? "bg-gray-100 text-gray-600" : "bg-gray-800 text-white"
      } py-8`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© 2024 Sanket Visuals. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            target="_blank"
            className="hover:text-primary transition-colors"
            href="https://github.com/freelancerhubpro348-jpg"
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            className="hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/sanket-vishnoi-b820342b3/"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            className="hover:text-primary transition-colors"
            href="https://x.com/freelancerhub34"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
