"use client";
import React from "react";
import { authentication } from "../firebaseConfig";
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
import { authentication } from "../@/firebaseConfig";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [menuItems, setMenuItems] = React.useState(["Leaderboard"]);
  React.useEffect(() => {
    if (authentication.currentUser) {
      setMenuItems(["Profile", "Leaderboard", "Certifications", "Calendar"]);
    } else {
      setMenuItems(["Leaderboard"]);
    }
  }, [authentication.currentUser]);

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
        {authentication.currentUser ? (
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

// import React from "react";
// import { authentication } from "../@/firebaseConfig";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Avatar,
//   Button,
// } from "@nextui-org/react";

// export default function Nav() {
//   return (
//     <Navbar>
//       <NavbarBrand>
//         <p className="font-bold text-inherit">
//           <Link color="foreground" href="/">
//             CTRL-R{" "}
//           </Link>
//         </p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         {authentication.currentUser ? (
//           <>
//             <NavbarItem>
//               <Link color="foreground" href="#">
//                 Certifications
//               </Link>
//             </NavbarItem>
//             <NavbarItem isActive>
//               <Link href="./leaderboard" aria-current="page">
//                 Leaderboard
//               </Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Link color="foreground" href="./calendar">
//                 Calendar
//               </Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Link color="foreground" href="#">
//                 Profile
//               </Link>
//             </NavbarItem>
//           </>
//         ) : (
//           <>
//             <NavbarItem isActive>
//               <Link href="./leaderboard" aria-current="page">
//                 Leaderboard
//               </Link>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>
//       {authentication.currentUser ? (
//         <NavbarContent justify="end">
//             <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
//         </NavbarContent>
//       ) : (
//         <NavbarContent justify="end">
//           <NavbarItem className="hidden lg:flex">
//             <Link href="/signIn">Login</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Button as={Link} color="primary" href="./signUp" variant="flat">
//               Sign Up
//             </Button>
//           </NavbarItem>
//         </NavbarContent>
//       )}
//     </Navbar>
//   );
// }
