import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Skills from "@/components/Skills/Skills"
import About from "@/components/About/About"
import React from "react"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <About />
    </div>
  ) // все компоненты сливать сюда
}

export default Home
