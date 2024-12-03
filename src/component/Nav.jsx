import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <>
      <div className="w-[100%] bg-[#002228] ">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="bg-[#002228] max:w-[1440px]  mx-auto "
          maxWidth='xl'
        >
          <NavbarContent>
            <NavbarBrand>
              <figure>
                <img src="Logo.svg" alt="" className="w-[91px] h-[20px]" />
              </figure>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4 " justify="center">
            <NavbarItem>
              <Link color="foreground" href="#" className="text-white">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" className="text-white">
                Pricing
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-white ">
                Customers
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="#" className="text-white">
                Solutions
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden md:flex">
              <Button color="primary" variant="solid" className="rounded-full">
                <Link href="#" className="text-black ">
                  Book a Demo
                </Link>
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden  sm:flex">
              <Button color="white" variant="bordered" className="rounded-full">
                <Link href="#" className="text-white ">
                  Contact Us
                </Link>
              </Button>
            </NavbarItem>

            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-white"
            />
          </NavbarContent>
          <NavbarMenu className="bg-[#002228]">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-2xl pt-4 text-white"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
}
