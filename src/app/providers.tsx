'use client'

import {NextUIProvider} from '@nextui-org/react'
import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import React from "react";

export function Providers({children}: { children: React.ReactNode }) {
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Inicio",
        "Importancia",
        "Instrucciones"
    ];
      
  return (
    
    <NextUIProvider>
        <Navbar onMenuOpenChange={setIsMenuOpen} className='h-[100px]' isBordered={true}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir Menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Importancia
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Intrucciones
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className=''>
            <NavbarBrand>
                <Image 
                    src='https://falulu45.github.io/tecnicas-inhalatorias/logo-cpa.png'
                    alt='Logo Cesfam Pampa Alegre Osorno'
                    className='w-[60px] h-[60px]'
                />
            </NavbarBrand>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu className=' pt-[40px]' id='navbar-unique'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color={"foreground"}
                className="w-full"
                href={`#${item.toLowerCase()}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
    </Navbar>
      {children}
    </NextUIProvider>
  )
}