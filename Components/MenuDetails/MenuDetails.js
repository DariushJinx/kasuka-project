import styles from './MenuDetails.module.css'
import Image from 'next/image'

export default function MenuDetails({allMenus}) {
  return (
    <div className={`menu__details col-lg-12 mt-5`}>
       <div className="row">
       {
            allMenus.map(menu => (
                <div className={`${styles.menu__details_item} col-lg-4 mt-4`}>
                    
                    <div className="menu__details_item_details position-relative">

                        <div className="menu__details_item_details_image">
                            <Image
                              src={menu.img}
                              width={350}
                              height={350}
                              quality={100}
                              className="w-100"
                             />
                        </div>

                        <div className={`${styles.menu__details_item_details_hover}`}>

                            <h4 className={`${styles.menu__details_item_details_hover_title}`}>
                                {menu.titleHover}
                            </h4>

                            <span className={`${styles.menu__details_item_details_hover_subtitle}`}>
                                {menu.subTitleHover}
                            </span>

                        </div>

                    </div>

                </div>
            ))
        }
       </div>
    </div>
  )
}
