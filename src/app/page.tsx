import Image from 'next/image'
import   HeroBody  from '@/components/Landing/HeroBody'

export default function Page() {
  return (
    <main className=" h-full">

    <div class="min-h-screen p-6 md:px-12 bg-gradient-to-r from-light-alterna to-light-accent">
  <div class="p-8 ">
    <HeroBody/>
  </div>
</div>

    </main>
  )
}
