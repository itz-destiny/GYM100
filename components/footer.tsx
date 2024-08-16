import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between lg:items-center px-5">
        <div className="flex   
 lg:items-center mb-4 md:mb-0">
           <img
                alt=""
                src="./gym 100.png"
                className="h-8 w-auto"
              />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-2/4">
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul>
              <li><Link href="#Home">Home</Link></li>
              <li><Link href="/membership">Membershipt</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>   

          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Order</Link></li>
              <li><Link href="#">Videos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <ul>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;