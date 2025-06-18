import Banner from '@/components/Banner/Banner'
import Remplacement from '@/components/Remplacement/Remplacement'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Remplacement de toiture à Nantes - Entreprise Gurtner',
  description: 'Votre toiture est trop endommagée ? Faites appel à Entreprise Gurtner pour un remplacement complet de couverture à Nantes et dans le 44.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Remplacement /> 
    </main>
  )
}
