import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-8 text-center mt-12 font-sans">
    <div className="mb-4">
      <span role="img" aria-label="paw">
        🐾
      </span>{' '}
      Fait avec amour pour les animaux
    </div>
    <div className="text-sm opacity-70">
      &copy; {new Date().getFullYear()} Pets. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
