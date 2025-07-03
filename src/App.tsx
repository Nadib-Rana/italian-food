import logo from './assets/Logo.png'
import pizzaHero from './assets/hero.svg'
import pizza1 from './assets/hero.svg'
import pizza2 from './assets/hero.svg'
import pizza3 from './assets/hero.svg'
import pizzaDelivery from './assets/hero.svg'
import pizzaDiscount from './assets/hero.svg'
import pizzaQuote from './assets/hero.svg'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#181818] text-white">
      {/* Navbar */}
     <div className="
      w-screen 
      min-h-screen 
      relative 
      bg-[url('/src/assets/hero.svg')] 
      bg-cover 
      bg-center 
      text-white
    ">
      <div className="absolute inset-0 bg-black/50"></div>

      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="container mx-auto flex items-center px-6 py-6">
          <img src={logo} alt="Logo" className="h-10 pr-8" />
          <ul className="hidden md:flex space-x-10">
            {['Home','Product','Promo','About','Contact'].map(link => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="font-medium hover:text-yellow-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-32 pb-40 z-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Best Pizza
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
            ORDER NOW
          </button>
        </div>
      </section>
    </div>


      {/* Popular Menu Section */}
      <section className="relative bg-[#1e1e1e] py-16 px-4 md:px-12 text-center">
        <h2 className="text-white text-4xl font-serif font-bold mb-4">Popular Menu</h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="flex flex-col items-center">
            <img src={pizza1} alt="Pizza 1" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#232323]" />
            <h3 className="text-white font-bold mb-2">Title Here</h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={pizza2} alt="Pizza 2" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#232323]" />
            <h3 className="text-white font-bold mb-2">Title Here</h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={pizza3} alt="Pizza 3" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#232323]" />
            <h3 className="text-white font-bold mb-2">Title Here</h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Free Delivery Section */}
      <section className="
       relative 
       flex
       flex-col 
       md:flex-row 
       items-center
       justify-between
       px-12
       py-16  
       w-screen
       bg-[url('src/assets/FreeDelivery.svg')]
       bg-cover
       bg-center

       ">
        <div className="max-w-xl z-10 ml-auto ">
          <h2 className="text-white text-4xl font-bold font-serif mb-6">Free Delivery</h2>
          <p className="text-gray-200 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
            ORDER NOW
          </button>
        </div>
      </section>



      <section className="bg-gray-900 text-white py-12 px-4 text-center relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Statistics</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <div className="ml-64 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <div className="
  flex 
  flex-col 
  items-center 
  justify-center 
  w-32 
  h-32 
  bg-gray-800 
  rounded-full 
  text-center
  border border-5 border-green-500
">
              <h3 className="text-3xl font-bold leading-none">
                123
              </h3>
              <p className="text-sm">
                STORE
              </p>
            </div>
            <div className="
  flex 
  flex-col 
  items-center 
  justify-center 
  w-32 
  h-32 
  bg-gray-800 
  rounded-full 
  text-center
  border border-5 border-green-500
  
">
              <h3 className="text-3xl font-bold leading-none">
                123
              </h3>
              <p className="text-sm">
                STORE
              </p>
            </div>
            <div className="
  flex 
  flex-col 
  items-center 
  justify-center 
  w-32 
  h-32 
  bg-gray-800 
  rounded-full 
  text-center
  border border-5 border-green-500
  
">
              <h3 className="text-3xl font-bold leading-none">
                123
              </h3>
              <p className="text-sm">
                STORE
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <img src="pizza1" className="absolute" />
        </div>
      </section>

      {/* Discount Section */}
      <section className="relative 
       bg-[url('src/assets/Discount.svg')]
      
      flex flex-col md:flex-row items-center justify-between px-12 py-16 ">
        <div className="max-w-xl z-10">
          <h2 className="text-white text-3xl font-bold font-serif mb-4">Discount 20%</h2>
          <p className="text-gray-200 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br />

            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
            ORDER NOW
          </button>
        </div>

      </section>

      {/* Subscribe Section */}



      {/* Quote Section */}
      <section className="relative flex items-center justify-center px-4 py-16 bg-[#181818]">
        <img
          src={pizzaQuote}
          alt="Pizza Quote"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-white text-xl md:text-2xl font-serif mb-4">
            If you are a culinary fan, if you like to spend time in your kitchen, you likely find yourself looking for reliable resources through which you can cook.
          </p>
          <span className="text-white font-bold text-lg">Mike Carlson</span>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative bg-[#232323] py-16 px-4 md:px-12 text-center">
        <h2 className="text-white text-3xl font-serif font-bold mb-4">Subscribe</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 rounded-full w-full md:w-auto focus:outline-none"
          />

        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Best Pizza</h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.
          </p>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-gray-300"><FaInstagram className="text-2xl" /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebookF className="text-2xl" /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter className="text-2xl" /></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">About</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-300">History</a></li>
            <li><a href="#" className="hover:text-gray-300">Our Team</a></li>
            <li><a href="#" className="hover:text-gray-300">Brand Guidelines</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Services</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-300">How to Order</a></li>
            <li><a href="#" className="hover:text-gray-300">Our Product</a></li>
            <li><a href="#" className="hover:text-gray-300">Order Status</a></li>
            <li><a href="#" className="hover:text-gray-300">Promo</a></li>
            <li><a href="#" className="hover:text-gray-300">Payment Method</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Other</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Help</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default App