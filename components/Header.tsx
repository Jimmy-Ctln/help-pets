import Link from 'next/link';
import logo from '@/public/assets/logo.svg';
import Image from 'next/image';

export default function Header() {
  const navigation = [
    { section: 'Accueil', href: '/' },
    { section: 'Se connecter', href: '/login' },
  ];

  return (
    <header className="w-full mt-2">
      <div className="border rounded-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-end">
            <Image src={logo} alt="logo" width={30} height={'30'} />
            <h2 className="text-xl font-bold gap-2">Help Pets</h2>
          </div>
          <nav aria-label="Navigation principale">
            <ul className="flex list-none gap-2">
              {navigation.map((nav, index) => (
                <li key={index}>
                  <Link href={nav.href} className="cursor-pointer">
                    {nav.section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
