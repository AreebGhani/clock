import './index.css';

export default function Grid() {
  return(<>
    <div className='main'> 
         <div className='main-nav'>
         <div className='logo'>
         <h2>
          <span><span>G</span>hani<span> D</span>evelopers</span>
         </h2>
         </div>
         <div className='menu-link'>
             <h3>
                 <p>
                     <a herf='#'>Home</a>
                 </p>
                 <p>
                     <a herf='#'>About</a>
                 </p>
                 <p>
                     <a herf='#'>Contact</a>
                 </p>
                 <p>
                     <a herf='#'>Services</a>
                 </p>
             </h3>
         </div>
         <div className='social-media'>
              <h3>
                 <p>
                     <a herf='#' className='facebook'>Facebook</a>
                 </p>
                 <p>
                     <a herf='#' className='twitter'>Twitter</a>
                 </p>
                 <p>
                     <a herf='#' className='whatsapp'>Whatsapp</a>
                 </p>
                 <p>
                     <a herf='#' className='instagram'>Instagram</a>
                 </p>
             </h3>
         </div>
         </div>
    </div>      
         <section className='hero-section'>
           <p>Welcome to <h1>Ghani Site Developers</h1></p>
         </section>
    </>);
}