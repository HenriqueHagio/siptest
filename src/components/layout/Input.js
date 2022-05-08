import vector from '../../img/Vector.png'
import styles from './Input.module.css'

function Input(){
    return (
        <form className={styles.form_control} >
        <label>
          <img src={vector}/> 
          <input type="text" name="name"  placeholder="  Pesquisar"  />
          
        </label>
      </form>
    )
}

export default Input