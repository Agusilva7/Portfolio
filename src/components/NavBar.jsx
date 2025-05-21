'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Instalar lucide-react o usar íconos alternativos

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#282828] text-white w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Agustin Silva
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-[19px]">
          <Link href="/proyectos" className="hover:text-gray-400">
            Proyectos
          </Link>
          <Link href="/sobre-mi" className="hover:text-gray-400">
            Sobre mí
          </Link>
          <Link href="/contacto" className="hover:text-gray-400">
            Contacto
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-[#282828]">
          <Link href="/proyectos" onClick={() => setOpen(false)}>
            Proyectos
          </Link>
          <Link href="/sobre-mi" onClick={() => setOpen(false)}>
            Sobre mí
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}
