import { Fahkwang } from "next/font/google";

import Button from "./Button";

const fahkwang = Fahkwang({ weight: ['700'], subsets: ['latin'] });

const nav_links = [
  { name: 'About Us', id: 'about' },
  { name: 'Events', id: 'events' },
  { name: 'Become a Volunteer', id: 'volunteer' },
  { name: 'Our Supporters', id: 'supporters' },
] as const;

const Navigation = () => {
  return (
    <nav
      aria-label="Main Navigation"
      className=" bg-black flex justify-center py-10"
    >
      <div className="w-full max-w-contentBody flex justify-between items-center bg-black ">
        <a
          href="#hero-section"
          className={`${fahkwang.className} text-green-light font-bold text-[1.3125rem]`}
          aria-label="Community Foundation Logo"
        >
          Community Foundation
        </a>
        <div className="flex justify-between items-center">
          <ul className="list-none flex items-center gap-5">
            {nav_links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}-section`}
                  aria-label={`Scroll to ${link.name} section`}
                  className="text-white hover:text-green-light font-normal text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Button
            bgColor="bg-green-light"
            textColor="text-gray-dark"
            width="w-[118px]"
            height="h-[48px]"
            className="ml-5"
          >
            Donate
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
