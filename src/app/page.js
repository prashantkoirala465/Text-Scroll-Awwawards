'use client';
import Character from '@/components/Character';

const paragraph = "UI/UX design principles are crucial for creating user-friendly and effective digital experiences. One of the core principles is simplicity, where designers aim to reduce unnecessary elements and focus on a clean, intuitive interface."

export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main>
        <div style={{height:"100vh", color: "white", alignContent:"center", paddingLeft:"40rem", fontSize: "100px"}}>Scroll below</div>
        <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div>
    </main>
  )
}