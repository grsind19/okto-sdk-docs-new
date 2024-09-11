'use client';

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Chip, Switch, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ChevronDown } from 'lucide-react';
import { VscGithub } from "react-icons/vsc";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "next-themes";

const poppins = Poppins({ subsets: ['latin'], weight: '500', display: 'swap' });

export default function NavbarComponent() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (isSelected: boolean) => {
    setTheme(isSelected ? 'dark' : 'light');
  };

  const navItems = [
    { href: "/docs/introduction-to-okto", label: "Intro", subpath: '/okto-universe' },
    { href: "/showcase", label: "Showcase", subpath: '' },
  ];

  const sdkOptions = [
    { href: "/docs/react-sdk", label: "React", subpath: '/getting-started/overview-okto-react' },
    { href: "https://sdk-docs.okto.tech/sdk-reference/react-native/setTheme", label: "React Native", subpath: '' },
    { href: "https://sdk-docs.okto.tech/sdk-reference/flutter/setup", label: "Flutter", subpath: '' },
    { href: "/api-docs", label: "API", subpath: '' },
  ];

  const getFrameworkLabel = () => {
    if (pathname.startsWith('/docs/react-sdk')) return 'React';
    if (pathname.startsWith('/docs/react-native-sdk')) return 'React Native';
    if (pathname.startsWith('/docs/flutter-sdk')) return 'Flutter';
    if (pathname.startsWith('/docs/api-docs')) return 'API';
    return 'Frameworks';
  };

  useEffect(() => {
    const updateActiveItem = () => {
      const activeNavItem = [...navItems, ...sdkOptions].find(item => pathname.startsWith(item.href));
      setActiveItem(activeNavItem ? activeNavItem.href : "");
    };

    updateActiveItem();
  }, [pathname]);

  const isFrameworkSelected = sdkOptions.some(option => pathname.startsWith(option.href));

  return (
    <Navbar isBordered className="nav-spacing">
      <NavbarBrand className={`${poppins.className} gap-20 flex items-center`}>
        <Link href="/" color="foreground" className="no-underline">
          <NavbarItem className="flex gap-2 items-center">
            <Image src="/logo/okto-icon.png" alt="Okto Logo" width={35} height={35} />
            <p className="text-3xl">okto</p>
            <Chip size="sm" className="bg-[#F5F6FE] text-[#5166EE]">
              Docs
            </Chip>
          </NavbarItem>
        </Link>
        <NavbarContent className="hidden sm:flex gap-8" justify="start">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={`${item.href}${item.subpath}`}
                color="foreground"
                className={`text-md ${pathname.startsWith(item.href)
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
                  } pb-1`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md ${isFrameworkSelected
                  ? "text-blue-600"
                  : ""
                  } pb-1`} // Apply styles when a framework is selected
                variant="light"
                radius="sm"
                endContent={<ChevronDown />}
              >
                {getFrameworkLabel()}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Framework options" items={sdkOptions}>
              {(item) => (
                <DropdownItem
                  key={item.label}
                  href={`${item.href}${item.subpath}`}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            onChange={(e) => handleThemeChange(e.target.checked)}
            size="sm"
            color="primary"
            className="justify-end"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }
          />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} isIconOnly href="https://x.com/okto_web3" variant="light" className="flex items-center">
            <FaXTwitter size={"2rem"} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} isIconOnly href="https://discord.com/invite/okto-916349620383252511" variant="light" className="flex items-center">
            <AiOutlineDiscord size={"2rem"} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} isIconOnly href="https://github.com/okto-hq/" variant="light" className="flex items-center">
            <VscGithub size={"2rem"} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="bordered"
            radius="full"
            className="font-semibold"
            endContent={<MdOutlineArrowOutward size={".9rem"} />}
          >
            Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://forms.gle/Q2oAWZ979cgxwjzZ6"
            variant="bordered"
            radius="full"
            className="font-semibold"
            endContent={<MdOutlineArrowOutward size={".9rem"} />}
          >
            Dashboard
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

const MoonIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" />
  </svg>
);

const SunIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
  </svg>
);