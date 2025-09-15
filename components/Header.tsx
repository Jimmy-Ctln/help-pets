import Link from 'next/link';
import logo from '@/public/assets/logo.svg';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Home, LogIn } from 'lucide-react';

export default function Header() {
  const navigationMenuItems = [
    { title: 'Accueil', href: '/', icon: Home },
    { title: 'Se connecter', href: '/login', icon: LogIn },
  ];

  return (
    <header className="w-full mt-4 px-20">
      <div className="rounded-full border-2 p-4">
        <div className="flex items-center justify-between">
          <Link href={'/'} className="flex gap-2 items-center">
            <Image src={logo} className="object-cover" alt="logo" width={50} height={50} />
            <h3 className="text-xl font-bold gap-2">Main dans la Patte</h3>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navigationMenuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href={item.href} className="flex-row items-center gap-2.5">
                      <item.icon className="h-5 w-5 shrink-0" />
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link className="flex gap-2" href={'/profile'}>
                      <User className="h-4 w-4" />
                      Profil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="h-4 w-4" /> Se deconnecter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
