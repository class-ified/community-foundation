import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Line from "@/components/Line";

const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon_id: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com', icon_id: 'instagram' },
  { name: 'Twitter', url: 'https://www.twitter.com', icon_id: 'twitter' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon_id: 'linkedin' },
  { name: 'YouTube', url: 'https://www.youtube.com', icon_id: 'youtube' },
] as const;

const nav_links = [
  'FAQs',
  'Contact Us',
  'Careers',
  'News & Updates',
  'Get Involved',
] as const;

const legal_links = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
] as const;

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[82rem] py-[5rem] mx-auto flex flex-col gap-[5rem]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-medium">Join our newsletter</h2>
            <p className="font-normal text-base">
              Get Updates on events, causes, achievements and blogs.
            </p>
          </div>

          <div>
            <form className="mb-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="newsletter-email"
                name="newsletter-email"
                className="flex-grow p-3 bg-gray-90 text-gray-100 mr-4 w-[16.5rem]"
                placeholder="Enter your email"
                aria-describedby="email-description"
              />
              <Button
                bgColor="bg-green-medium"
                textColor="text-white"
                width="w-[118px]"
                height="h-[48px]"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
            <p id="email-description" className="text-xs font-normal">
              By subscribing you agree to with our{' '}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <Line bgColor="bg-black" />

        <div className="flex justify-between">
          <address className="not-italic flex flex-col justify-between text-sm">
            <div>
              <p className="font-semibold">Address:</p>
              <p className="font-normal">
                Level 1, 12 Peters St, Sydney NSW 2000
              </p>
            </div>

            <div>
              <p className="font-semibold">Contact:</p>
              <a href="tel:1800 123 4567" className="underline block p-1">
                1800 123 4567
              </a>
              <a
                href="mailto:info@communityfoundation.com"
                className="underline p-1"
              >
                info@communityfoundation.com
              </a>
            </div>

            <div className="flex space-x-4 mt-4">
              {socials.map((social) => (
                <a key={social.name} aria-label={social.name} href={social.url}>
                  <Icon id={social.icon_id} size={25} />
                </a>
              ))}
            </div>
          </address>

          <nav aria-label="Footer Navigation" className="w-[15.25rem]">
            <ul className="flex flex-col gap-4">
              {nav_links.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-dark text-base font-medium hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <Line bgColor="bg-black" />
          <div className="flex justify-center mt-4 gap-4 items-baseline">
            <p className="text-sm text-black font-normal">
              © 2024 Community Foundation. All rights reserved.
            </p>
            <nav aria-label="Legal Links">
              <ul className="flex space-x-4">
                {legal_links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-black font-normal underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
