import React from 'react'

import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contenido de la página (CMS)</h1>
                <p>Soy un bebé artesano del cacio e pepe, V60 y la semiótica, con degustación de café de especialidad, canon paleo, eventos canónicos del nervio vago, relaciones parasociales, mochileros Wayfarer, estilo de vida locávoro y la filosofía de *I Think You Should Leave*, mientras protejo celosamente el café de hongos. Migas de mezcal, biocombustible, estética Portra, shoegaze, Y2K, deterioro cerebral por internet y terapia con ketamina. Minimalismo neutro, escalada en bloque y un estilo exageradamente genial. Abuela costera, corbata de ascot, fotomatón retro y tostador artesanal a medida. Realismo capitalista, pantalones de pierna ancha, cabello despeinado, familia, productos de la granja a la mesa, vino natural, tostador artesanal, desplazamiento compulsivo por redes, amaro, miembro de la escena alternativa y carneros. Conservas, paredes de musgo, escena alternativa y alimentación baja en carbohidratos.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="mujer y el buscador" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero