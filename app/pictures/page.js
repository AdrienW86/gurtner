import Gallery from '@/components/Gallery/Gallery'
import styles from '../page.module.css'

export const metadata = {
  title: 'Galerie de réalisations - Entreprise Gurtner à Nantes',
  description: 'Découvrez les chantiers réalisés par Entreprise Gurtner à Nantes : nettoyage, rénovation, pose de toitures dans la Loire-Atlantique.',
};

export default function Pictures() {
  return (
    <main className={styles.main}>
      <Gallery />     
    </main>
  )
}
