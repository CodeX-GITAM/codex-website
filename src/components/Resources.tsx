import styles from '../styles/resources.module.css'
import front from '../assests/frontendimg.png';
import back from '../assests/backendimg.png';
import competitive from '../assests/runningimg.png';
import cone from '../assests/Cones.jpg';
import wand from '../assests/Wands.jpg';
import rec from '../assests/Rectangle 33.png';
import Resource from './Resource';
import Image from "next/image";
export default function Resources(){
  const data=[{heading:"FRONT END DEVELOPMENT",
  description:"Front-end development is generally responsible for the aesthetic of the site. What you see on the screen is the front end, which includes menus, images, and other elements",
  image:"../assests/fed_img.png"
  },{
    heading:"BACK END DEVELOPMENT",
    description:"Back end development is the process of creating everything that happens behind the scenes of a website or application that the user cannot see." ,
    image:"../assests/bed_img.png"
  },{
    heading:"COMPETITIVE PROGRAMMING",
    description:"Competitive Programming is a mental sport which enables you to code a given problem under provided constraints" ,
    image:"../assests/cp_img.png"
  }]
  return(
    <div className={styles.resoucespage_entire}>
      <div className={styles.resourcespage}>
        <div className={styles.rscheader}>
          <h1>Resources</h1>
        </div>
        <div className={styles.rlayout}>
         {data.map((item)=>{
            return(
            <div className={styles.viewBx}><Resource heading={item.heading} 
                      description={item.description}
                      image={front}
                      desg={rec}/></div>);
           })}
          <div className={styles.viewmore}>
            <h2>View More</h2>
          </div>
        </div>
          
      </div>
      {/* <div className={styles.leftimg}>
            <Image src={cone} alt='coneimg'/>
          </div>
      <div className={styles.rightimg}>
            <Image src={wand} alt='wandimg'/>
        </div> */}
    </div>
    
  )
}