import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Skills from "@/components/Skills/Skills"
import About from "@/components/About/About"
import React from "react"
import Pricing from "@/components/Pricing/Pricing"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Pricing />
    </div>
  ) // все компоненты сливать сюда
}

export default Home
