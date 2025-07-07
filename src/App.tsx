import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import styles from './App.module.css';

// addons
import KernToggleDarkModeButton from './components/addons/KernToggleDarkMode';
 
import "@kern-ux/native/dist/kern.min.css";
import "@kern-ux/native/dist/fonts/fira-sans.css";

// Addons
import { DialogProvider } from './components/addons/DialogContext';
import KernSidebar from './components/addons/KernSidebar';
// Pages
import Accordion from "./Pages/Accordion";
import Alerts from "./Pages/Alerts";
import Badge from "./Pages/Badge";
import Button from "./Pages/Button";
import Card from "./Pages/Card";
import DescriptionList from "./Pages/DescriptionList";
import Divider from "./Pages/Divider";
import Icon from "./Pages/Icon";
import LinkPage from "./Pages/Link";
import Loader from './Pages/Loader';
import Progress from './Pages/Progress';

import TaskList from "./Pages/TaskList";
import FormExample from './Pages/Form';
import TextExample from './Pages/Text';


import DialogExample  from './Pages/DialogExample';
import TableExample from './Pages/Table';
import SummaryExample from './Pages/Summary';

// Example
import TrashCanWizard from './Pages/wizards/trashcan/TrashCanWizard';



function App() {


  // Pages
  const items = [
    {"divider": "Beispiele"},
    {"path": "/trashCan", name: "Mülltonnen-Beispiel", element: <><TrashCanWizard /></>},
    {"divider": "KERN Komponenten"},
    {"path":"/accordion", "name": "Accordion", element: <><Accordion /></>},
    {"path":"/alert", "name": "Alert", element: <><Alerts /></>},
    {"path":"/badge", "name": "Badge", element: <><Badge /></>},
    {"path":"/button", "name": "Button", element: <><Button /></>},
    {"path":"/card", "name": "Card", element: <><Card /></>},
    {"path":"/descriptionList", "name": "Description List", element: <><DescriptionList /></>},
    {"path": "/dialog", name: "Dialog", element: <><DialogExample /></>},
    {"path": "/divider", name: "Divider", element: <><Divider /></>},
    {"path": "/form", name: "Formular / Fieldset", element: <><FormExample /></>},   
    {"path": "/icon", name: "Icon", element: <><Icon /></>},   
    {"path": "/link", name: "Link", element: <><LinkPage /></>},   
    {"path": "/loader", name: "Loader", element: <><Loader /></>},
    {"path": "/progress", name: "Progress", element: <><Progress /></>},   
    {"path": "/summary", name: "Summary", element: <><SummaryExample /></>},   
    {"path": "/table", name: "Table", element: <><TableExample /></>},  
    {"path": "/taskList", name: "Task List", element: <><TaskList /></>},
    {"path": "/text", name: "Text", element: <><TextExample/></>},
            
    
  ]   

  return (
    <>
   
    <BrowserRouter>
      <DialogProvider>

        <div className={styles.layout}>
          <header className={styles.header}><span className={styles.headline}>KERN.react</span> <KernToggleDarkModeButton/></header>
          <aside className={styles.sidebar}>
              <KernSidebar items={items}></KernSidebar>

              {/* <svg className={`icon ${styles.yellow}`} width="200" height="300" style={{transform: "scale(.5)"}}><use href="#trash" /></svg> */}
          </aside>

          <main className={styles.main}>
             <section style={{margin:"auto", maxWidth:"800px"}}>
          <Routes>
            {items.map((item, key)=>{
              return (<Route path={item.path} element={item.element}/>)
            })}        
            
          </Routes>
          </section>
          </main>

        </div>
      </DialogProvider>
    </BrowserRouter>


    <svg style={{"display": "none"}}>

    <symbol id="trash" width="194.15959" height="300">
        <defs>
          <filter
            id="filter3528"
            x="-0.030946313"
            y="-0.019600419"
            width="1.0618926"
            height="1.0392008">
            <feGaussianBlur
              stdDeviation="2.657031"
              id="feGaussianBlur3530" />
          </filter>
        </defs>
        <g transform="matrix(0.88731798,0,0,0.88731798,-0.6809948,-1.5588895)">
      <path
        d="m 106.45685,8.13373 c -27.57828,0 -54.801149,3.375 -81.9375,10.125 l -1,12 -2,2.000002 -0.1875,1.25 h -0.0625 v 0.312496 l -0.75,4.875004 -0.75,-0.1875 -1.25,2.5 0.4375,0.09375 -0.09375,0.468746 -0.59375,0.437504 v 0.96875 C 17.75812,43.344761 17.4256,43.9469 17.4256,44.633732 L 7.45685,57.571228 c 0,0.02151 -6.4e-4,0.04117 0,0.0625 -0.19196,0.312187 -0.3125,0.696838 -0.3125,1.09375 v 12.937496 c 0,1.125336 0.89389,2.03125 2,2.03125 h 19.5625 L 46.644348,315.79001 c 0,9.79339 7.8941,17.6875 17.6875,17.6875 h 2.34375 89.000002 0.625 c 8.29693,0 15.17483,-5.90473 16.90625,-13.8125 -0.18735,0.43884 -0.40622,0.86304 -0.625,1.28125 0.15915,-0.52417 0.29553,-1.04993 0.40625,-1.59375 0.23471,-1.15289 0.34375,-2.33832 0.34375,-3.5625 L 188.1131,91.539978 c 0.0461,0.173096 0.0865,0.354118 0.125,0.53125 l 1.03125,-18.375 h 21.9375 c 1.10614,0 2,-0.905914 2,-2.03125 V 58.727482 c 0,-0.111214 -0.0143,-0.206573 -0.0312,-0.3125 v -0.25 h -0.0625 c -0.18354,-0.623993 -0.64646,-1.130013 -1.25,-1.343754 l -11.59375,-9.406246 0.0625,-0.03125 -1.03125,-0.78125 -1.46875,-1.1875 -0.9375,-3.875004 0.875,-0.281246 -1.28125,-1.40625 -0.96875,-4.09375 V 31.25873 l -1.5,-1.5 -3.5,-11.5 c -28.55054,-6.75 -56.48422,-10.125 -84.0625,-10.125 z"
        id="rect3494"
        filter="url(#filter3528)"
        strokeMiterlimit="4"
        strokeWidth="0.884778px"
        fill="#000000" />
      <rect
      rx="17.67767"
      ry="17.67767"
      y="69.134308"
      x="48.656189"
      height="260.33054"
      width="126.68734"
      id="rect3190"
      strokeMiterlimit="4"
      strokeWidth="0.884778px"
      fill="#ff0000" />
      <path
      id="rect2418"
      d="m 191.34357,68.811981 -16,242.975189 c 0,9.79346 -7.88428,17.67767 -17.67768,17.67767 H 66.333863 c -9.793392,0 -17.677673,-7.88421 -17.677673,-17.67767 L 30.656192,68.811981 Z"
      strokeMiterlimit="4"
      strokeWidth="0.884778px"
      style={{fill:"#4d4d4d"}} />
      <path
      id="path3193"
      d="M 186.30542,68.811981 171.44073,308.82098 c 0,9.67389 -7.32476,17.46192 -16.42327,17.46192 H 70.166199 c -9.098507,0 -16.423279,-7.78803 -16.423279,-17.46192 L 41.020199,68.811981 Z"
      strokeMiterlimit="4"
      strokeWidth="0.884778px"
      style={{fill:"#4d4d4d"}} />
      <path
      id="path3199"
      d="m 33.644348,68.821228 17.66394,242.968752 c 0,9.79345 7.7467,17.6875 17.3573,17.6875 h 89.638362 c 8.29694,0 15.16584,-5.90467 16.89728,-13.8125 -2.55261,5.97973 -8.09594,10.125 -14.59729,10.125 l -88.166379,0.5 c -8.92865,0 -16.130611,-7.79486 -16.130611,-17.46875 L 42.075619,80.571228 c 3.427551,-4.47583 9.646671,-4.371735 20.395332,-4.75 27.602657,-0.962738 67.254509,-0.513916 97.335689,-0.375 17.3208,0.07999 28.5221,3.881165 30.4212,12.625 l 1.10401,-19.25 z"
      strokeMiterlimit="4"
      strokeWidth="0.884778px"
      style={{fill:"#808080"}} />
      <path
      id="rect3203"
      d="m 21.4256,38.602482 c -1.102301,0 -2,0.905937 -2,2.03125 L 9.45685,53.571228 c 0,0.02151 -6.1e-4,0.04114 0,0.0625 -0.19196,0.312187 -0.3125,0.696838 -0.3125,1.09375 v 12.937496 c 0,1.125305 0.89386,2.03125 2,2.03125 h 202.0625 c 1.10614,0 2,-0.905945 2,-2.03125 V 54.727482 c 0,-0.889713 -0.56403,-1.6301 -1.34375,-1.906254 l -15,-12.187496 c 0,-1.125313 -0.89765,-2.03125 -2,-2.03125 z"
      strokeMiterlimit="4"
      strokeWidth="1px"
      style={{fill:"#4d4d4d"}} />
      <rect
      y="54.171108"
      x="9.2371778"
      height="3"
      width="205.92807"
      id="rect3210"
      strokeMiterlimit="4"
      strokeWidth="1px"
      fill="#ffffff" />
      <path
      className="can-lid"
      id="path3216"
      d="m 19.51935,44.245911 17.999998,5 148.500002,-1.5 14.5,-3.5 -3,-12.5 v -4.5 l -1.5,-1.5 -3.5,-11.500001 c -61.34375,-9.964479 -110.313112,-9.964479 -166,0 l -1,12.000001 -2,2 -1,6.5 -1.5,2 z"
      strokeWidth="1px"
      fill="var(--lid-color, #5b9e2d)" />
      <path
      id="path3214"
      d="m 20.26935,43.995911 17.749998,4 -0.25,-16.5 159.500002,-0.5 -0.25,-2.25 -173.75,0.75 0.25,6 -3.25,2.5 z"
      strokeWidth="1px"
      style={{fill:"#000000", "fillOpacity":1, "opacity":0.33}} />
      <path
      id="path3218"
      d="m 20.51935,36.995911 16.999998,3.75 150.750002,0.25 11.5,-3.75 -2.25,-2.5 -9.25,3.5 H 37.269348 l -15.499998,-3.75 z"
      strokeWidth="1px"
      fill="#ffffff" />
      <path
      id="path3220"
      d="m 26.51935,16.495911 c 2.75,-0.25 165.75,-0.500001 165.75,-0.500001 l -0.5,-1.5 h -165 z"
      strokeWidth="1px"
      fill="#ffffff" />
      <path
      id="path3224"
      d="m 20.26672,44.907532 17.871342,3.838379 150.131288,0.25 14.06323,-5.606171 -2.51514,-1.88129 -11.54809,4.737461 H 38.138061 l -17.871342,-4.10355 z"
      strokeWidth="1px"
      fill="#282828" />
        </g>
      </symbol>



    </svg>
    </>
  )
}

export default App
