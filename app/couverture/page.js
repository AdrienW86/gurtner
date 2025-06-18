import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Couverture/Couverture'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Pose de toiture neuve à Nantes - Couvreurs Toiture 44',
  description: 'Entreprise Gurtner réalise la pose de toitures neuves à Nantes. Solutions sur mesure pour maisons neuves ou extensions dans la Loire-Atlantique.',
};

export default function page() {
  return (
   <main className={styles.main}>
      <Banner />
      <Menu />    
    </main>
  )
}
