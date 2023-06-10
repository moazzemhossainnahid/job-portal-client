import Articles from '../components/HomePage/Articles'
import FindJob from '../components/HomePage/FindJob'
import HeroSection from '../components/HomePage/HeroSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Articles />
      <FindJob />
    </div>
  )
}
