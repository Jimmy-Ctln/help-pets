import Link from 'next/link';
import logo from '@/public/assets/logo.svg';
import Image from 'next/image';
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
          <div className="flex gap-2 items-center">
            <Image src={logo} className="object-cover" alt="logo" width={50} height={50} />
            <h3 className="text-xl font-bold gap-2">
              <Link href={'/'}>Main dans la Patte</Link>
            </h3>
          </div>
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
