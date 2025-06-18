import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Nettoyage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Nettoyage de toiture professionnel avec Entreprise Gurtner dans la Loire-Atlantique
      </h1>

      <p className={styles.intro}>
        Entreprise Gurtner est votre expert en nettoyage de toiture à Nantes et dans 
        tout le département de la Loire-Atlantique (44). Nous intervenons pour éliminer 
        salissures, mousses, lichens et débris afin de préserver l’intégrité et l’esthétique 
        de votre toiture.
      </p>

      <SectionImage
        src="/image9.avif"
        alt="Nettoyage professionnel de toiture à Nantes"
      />

      <h2 className={styles.h2}>1. Évaluation précise de l’état de votre toiture</h2>
      <p className={styles.p}>
        Nos couvreurs effectuent une inspection détaillée pour identifier les zones 
        encrassées et les éléments endommagés. Cette évaluation permet d’adapter la 
        méthode de nettoyage à votre type de toiture et à son degré d’encrassement.
      </p>

      <h2 className={styles.h2}>2. Nettoyage efficace avec des produits et techniques adaptés</h2>
      <p className={styles.p}>
        Nous utilisons des techniques professionnelles 
        (nettoyage haute pression, brossage manuel) et des produits écologiques 
        spécialement conçus pour éliminer mousses, algues et saletés sans abîmer vos 
        tuiles ou ardoises.
      </p>

      <h2 className={styles.h2}>3. Traitement préventif pour protéger votre toiture</h2>
      <p className={styles.p}>
        Après le nettoyage, nous appliquons un traitement préventif anti-mousse et 
        hydrofuge afin de limiter la réapparition des salissures et protéger votre 
        toiture des agressions climatiques et de l’humidité.
      </p>

      <h2 className={styles.h2}>4. Conseils d’entretien pour une toiture durable</h2>
      <p className={styles.p}>
        Entreprise Gurtner vous accompagne en vous proposant des conseils d’entretien simples 
        et efficaces, ainsi que des contrats de maintenance pour assurer la longévité et la 
        performance de votre toiture.
      </p>

      <p className={styles.intro}>
        Confiez le nettoyage de votre toiture à Entreprise Gurtner, votre partenaire 
        de confiance dans la Loire-Atlantique. Contactez-nous pour un devis gratuit 
        et redonnez à votre toiture toute sa propreté et sa résistance.
      </p>
    </section>
  )
}