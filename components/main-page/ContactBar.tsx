import { Box } from '@mui/material'
import styles from "@styles/Home.module.css"; // Import your CSS file

export default function ContactBar() {
  return (
    <Box style={{zIndex:'1'}}>
      <Box className={styles.tickerWrap}>
        <Box className={styles.ticker}>
          <Box className={styles.tickerItem}>#creativity #art #photography #shooting</Box>
          <Box className={styles.tickerItem}>#weddings #studio #album #ads</Box>
          <Box className={styles.tickerItem}>#product #reels #posts #social_media</Box>
          <Box className={styles.tickerItem}>#camera #stab #lens #lumiére</Box>
        </Box>
      </Box>
    </Box>
  )
}

