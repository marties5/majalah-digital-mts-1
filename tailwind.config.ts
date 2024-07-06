import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors: { 
      white: '#ffffff',
      black:'#151515',
      gray:{
        100:'#EEEEEE',
        200:'#DDDDDD',
        DEFAULT:'#C5C5C5',
        400:'#848282',
        500:'#646363'
      },
      primary:{
        50:'#D9F8C4',
        100:'#B6E2A1',
        200:'#A3DA8D',
        300:'#7FB77E',
        400:'#519259',
        500:'#41644A',
        DEFAULT:'#41644A'},
      secondary:'#F4CE14',
      accent:'#495E57',
      error:'#FC4100',
      succes:'#508D69',
      warning:'#FFA732',
      info:'#34B3F1',
      disabled:'#D9D9D9'
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config