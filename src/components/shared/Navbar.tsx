import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function Navbar() {
    return (
      <NavigationMenu className="w-full border-b !max-w-full" viewport={false}>
  <NavigationMenuList className="w-full flex justify-between items-center px-4">

    {/* Left: Logo */}
    <div className="flex items-center gap-4">
      <NavigationMenuItem>
        <NavigationMenuLink>
          Logo
        </NavigationMenuLink>
      </NavigationMenuItem>
    </div>

    {/* Center: Services */}
    <div className="flex items-center gap-4">
      <NavigationMenuItem>
        <NavigationMenuLink>Service 1</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Service 2</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Service 3</NavigationMenuLink>
      </NavigationMenuItem>
    </div>

    {/* Right: Logout + Dropdown */}
    <div className="flex items-center gap-4">
      <Button>Logout</Button>
      <NavigationMenuItem>
        <NavigationMenuTrigger>About</NavigationMenuTrigger>
        <NavigationMenuContent className="p-4 grid gap-2">
          <NavigationMenuLink href="/about">Our Story</NavigationMenuLink>
          <NavigationMenuLink href="/about">Our Mission</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </div>

  </NavigationMenuList>
</NavigationMenu>



    )
}


