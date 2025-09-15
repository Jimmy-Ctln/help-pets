import Link from 'next/link';

export default function Header() {
  const navigation = [
    { section: 'Accueil', href: '/' },
    { section: 'Se connecter', href: '/login' },
  ];

  return (
    <header className="w-full mt-2">
      <div className="border rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span aria-label="Logo" role="img">
              🐾
            </span>
            Help Pets
          </h1>
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
