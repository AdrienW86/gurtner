import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Description from '@/components/Description/Description'
import PhoneButton from '@/components/PhoneButton/PhoneButton'
import styles from './page.module.css'

export const metadata = {
  title: 'Entreprise Gurtner - Couvreur à Nantes & Loire-Atlantique',
  description: 'Entreprise Gurtner est votre spécialiste en couverture, rénovation et entretien de toitures à Nantes et alentours. Qualité, réactivité et savoir-faire dans la Loire-Atlantique.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Equipment />
      <Description />
    </main>
  )
}
