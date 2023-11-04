import React from "react";
import { authentication } from "@/firebaseConfig";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <Link color="foreground" href="/">
            CTRL-R{" "}
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {authentication.currentUser ? (
          <>
            <NavbarItem>
              <Link color="foreground" href="#">
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
              <Link color="foreground" href="#">
                Profile
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
      {authentication.currentUser ? (
        <NavbarContent justify="end">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
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
    </Navbar>
  );
}
