"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const [menuItems, setMenuItems] = React.useState(["Leaderboard"]);
  React.useEffect(() => {
    const data = localStorage.getItem("loggedIn")
    setIsLoggedIn(JSON.parse(data))
    if (data) {
      setMenuItems(["Profile", "Leaderboard", "Certifications", "Calendar"]);
    } else {
      setMenuItems(["Leaderboard"]);
    }
  }, []);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/" className="font-bold">
            CTRL-R{" "}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {isLoggedIn ? (
          <>
            <NavbarItem>
              <Link color="foreground" href="./certifications">
                Certifications
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="./leaderboard" aria-current="page">
                Leaderboard
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="./calendar">
                Calendar
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="./userProfile">
                Profile
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" className="text-red-600" onClick={(e) => {
                e.preventDefault()
                setIsLoggedIn(false)
                localStorage.setItem('loggedIn', false)
              }}>
                Log Out
              </Link>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem isActive>
              <Link href="./leaderboard" aria-current="page">
                Leaderboard
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      {isLoggedIn ? (
        <NavbarContent justify="end">
          <Avatar src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" />
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/signIn">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="./signUp" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
