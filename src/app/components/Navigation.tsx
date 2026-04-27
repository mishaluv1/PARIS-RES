import { Menu, X } from 'lucide-react';
import { useState } from 'react';


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);

  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-sm bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className='m-1' width={'80px'} src="https://www.image2url.com/r2/default/images/1777305686038-fc691d77-488b-46ba-a74d-823723449288.png" alt="" />
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
