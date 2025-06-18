import React from 'react'
import styles from "./equipment.module.css"

export default function Equipment() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Spécialiste en rénovation et entretien de toiture</h1>
      <div className={styles.column}>
        Chez <span className={styles.span}>Entreprise Gurtner</span>, nous réalisons des 
        travaux complets de rénovation de toiture dans la Loire-Atlantique : 
        nettoyage de toit, traitement hydrofuge, réparation de fuites, remplacement 
        de tuiles et entretien préventif pour assurer la longévité de votre couverture.
      </div>
    </section>
  )
}

