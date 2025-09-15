import Link from 'next/link';
import logo from '@/public/assets/logo.svg';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const navigation = [
    { section: 'Accueil', href: '/' },
    { section: 'Se connecter', href: '/login' },
  ];

  return (
    <header className="w-full mt-2">
      <div className="rounded-full border-2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-end">
            <Image src={logo} alt="logo" width={30} height={'30'} />
            <h2 className="text-xl font-bold gap-2">Help Pets</h2>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
