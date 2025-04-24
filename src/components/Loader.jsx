import { ClipLoader } from 'react-spinners'
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader />
    </div>
  )
}

export default Loader
