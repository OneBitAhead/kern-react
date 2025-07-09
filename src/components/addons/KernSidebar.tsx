import { Link, useLocation } from "react-router-dom";
import styles from './KernSidebar.module.css';

type Items = {
  path: string;
  name: string;
  element:any;
  divider:string;
};


function KernSidebar({ items = []}:{ items: Items[]}){

  const location = useLocation();
  


  return (
    

        <nav role="navigation">
          <ul className={styles.list}>

            {items.map((item, index) => {

              if(item.divider) return (
                <li key={item.divider} className={styles.sidebarDivider} aria-hidden="true">
                    <span className={styles.dividerLabel}>{item.divider}</span>
                </li>
              )

           
              let classes = (location.pathname === item.path) ? `${styles.active} ${styles.link}` : `${styles.link}`;              
              
              return (
                   <li key={index} className={classes}><Link className={styles.menuLink} to={item.path}>{item.name}</Link></li>
              )
            }
            )}
           </ul>
        </nav>  
    
  );
}

export default KernSidebar;