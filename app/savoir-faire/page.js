import Banner from '@/components/Banner/Banner'
import About from '@/components/About/About'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Qui sommes-nous ? Entreprise Gurtner, experts en couverture dans la Loire-Atlantique',
  description: 'Découvrez Entreprise Gurtner, une équipe d’artisans couvreurs passionnés à Nantes. Qualité, fiabilité et savoir-faire au service de vos projets de toiture dans le 44.',
};

export default function page() {
  return (
     <main className={styles.main}>
      <Banner />
      <About />
    </main>
  )
}