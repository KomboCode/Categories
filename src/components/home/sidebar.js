import React from 'react';


const Sidebar = ({ allBrands, active, handleBrand, toggle }) => {

    return (
        <section className='sidebar' 
            style={ toggle ? { width: "150px"} : null }
        >
           <div className='brands'>
               {allBrands.map((brand, index) => {
                   var icon = "./icons/"

                   switch(brand) {
                       case 'Nike':
                        icon += 'nikelogo.png';
                        break;
                       case 'Puma': 
                        icon += 'pumalogo.png';
                        break;
                       case 'Yeezy':
                        icon += 'yeezylogo.png';
                        break;
                       case 'Adidas':
                        icon += 'adidaslogo.png';
                        break;
                       case 'Jordan':
                        icon += 'jordanlogo.png';
                        break;
                       case 'all':
                        icon += 'alllogo.png';
                        break;
                   }

                   return (
                       <div key={index} 
                       onClick={() => handleBrand(brand, index)}
                       className={`brand ${ active === index && "active"}`}
                       style={ toggle ? 
                          { padding: "2rem 1rem", 
                            margin: "25px 40px",
                            padding: "1.8rem 0.5rem"
                            
                          }
                          : null }
                       >
                           <img src={icon}/>
                           <label  
                              style={ toggle ? { display: "none"} : null }
                           >{brand}</label>
                       </div>
                   )
               })}
           </div>
        </section>
    )
}

export default Sidebar;