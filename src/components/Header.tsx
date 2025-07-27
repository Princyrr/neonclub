import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Quem Somos' },
    { id: 'contact', label: 'Contato' }
  ];

  const handleMenuClick = (id: string) => {
    setCurrentPage(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    handleMenuClick('home');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-[0_4px_20px_#a855f7]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo com clique */}
          <div
            className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="NEON CLUB Logo"
              className="h-20 object-contain"
            />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
