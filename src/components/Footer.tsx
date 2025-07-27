import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/logo.png'; // ajuste o caminho conforme sua estrutura

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo */}
              <img 
                src={logo} 
                alt="NEON CLUB Logo" 
                className="h-20 object-contain"
              />
             
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A experiência noturna mais intensa da cidade. Música eletrônica, 
              drinks exclusivos e uma atmosfera única há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Reservas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Eventos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Lista VIP</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Galeria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Parcerias</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>Avenida conselheiro rosa e silva, 172</p>
              <p>Espinheiro - Recife-PE</p>
              <p>+55 (81) 98811-5840</p>
              <p>Princyrpiress@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NEON CLUB. Feito por Priscila Ramonna. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
