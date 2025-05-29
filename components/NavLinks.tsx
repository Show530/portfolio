'use client'
import {usePathname} from "next/navigation";
import {links} from "./Links";
// import styled from "styled-components";
import Link from "next/link";

export default function NavLinks() {
    const pathname = usePathname();

    return (
      <nav className="justify-center">
          <ul className="flex flex-row justify-evenly list-none text-center p-0 m-0">
              {
                  links.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                          <li
                              key={link.name}
                              className="w-1/2 bg-pink-200 rounded-md text-base sm:text-lg p-2 m-1 grid place-items-center"
                          >
                              <Link
                                  href={link.href}
                                  className={`no-underline flex items-center justify-center rounded-md transition-colors duration-200 
                                  ${
                                      isActive
                                          ? 'text-blue-900 font-semibold'
                                          : 'text-black hover:text-pink-600'
                                  }`}
                              >
                                  {link.name}
                              </Link>
                          </li>
              );})}
          </ul>
      </nav>
    );
}