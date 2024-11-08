"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './portfolio.module.css';

type BubbleKey = 'princip' | 'portfolio' | 'we' | 'react' | 'js' | 'pokedex' | 'AmaGames' | 'jeu1' | 'jeu2' | 'jeu3';

type Bubble = {
  name: string;
  subBubbles?: BubbleKey[];
  link?: string;
};

const Portfolio = () => {
  const [activeBubble, setActiveBubble] = useState<BubbleKey | null>(null);

  // Définition des bulles et des sous-bulles
  const bubbles: Record<BubbleKey, Bubble> = {
    princip: { name: 'Cliquez ici', subBubbles: ['portfolio', 'AmaGames'] },
    portfolio: { name: 'Portfolio', subBubbles: ['we'] },
    AmaGames: { name: 'Ama\nGames', subBubbles: ['jeu1', 'jeu2', 'jeu3'] },
    jeu1: { name: 'Jeu 1', subBubbles: [] },
    jeu2: { name: 'Jeu 2', subBubbles: [] },
    jeu3: { name: 'Jeu 3', subBubbles: [] },
    we: { name: 'WE', subBubbles: ['react', 'js', 'pokedex'] },
    react: { name: 'React', link: 'https://wetpreact.amadev.fr' },
    js: { name: 'JS', link: 'https://wejs.amadev.fr' },
    pokedex: { name: 'Pokedex', link: 'https://pokedex.amadev.fr' },
  };

  // Variants pour l'animation des bulles
  const explosionVariants = {
    initial: { opacity: 0, scale: 0.5, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 10 } },
    exit: { opacity: 0, scale: 0.5, y: -50, transition: { duration: 0.3 } },
  };

  // Fonction de gestion du clic sur une bulle
  const handleBubbleClick = (bubbleKey: BubbleKey) => {
    const bubble = bubbles[bubbleKey];
    if (bubble.link) {
      window.location.href = bubble.link;
    } else {
      setActiveBubble(bubbleKey);
    }
  };

  return (
    <div className={styles.mainContent}>
      {/* Affichage de la bulle principale */}
      {!activeBubble && (
        <>
          <motion.div
            className={styles.bubble}
            onClick={() => handleBubbleClick('princip')}
            variants={explosionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {bubbles.princip.name}
          </motion.div>
          
        </>
      )}

      {/* Affichage des sous-bulles pour une bulle active */}
      <AnimatePresence>
        {activeBubble && (
          <motion.div
            key={activeBubble}
            className={styles.bubblesContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={explosionVariants}
          >
            {bubbles[activeBubble]?.subBubbles?.map((subBubble) => (
              <motion.div
                key={subBubble}
                className={styles.subBubble}
                onClick={() => handleBubbleClick(subBubble)}
                variants={explosionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {bubbles[subBubble]?.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de retour */}
      {activeBubble && (
        <motion.div
          className={styles.backButton}
          onClick={() => setActiveBubble(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Retour
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
