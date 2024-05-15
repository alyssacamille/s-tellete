
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { TbMailFilled } from 'react-icons/tb';
import Header from './Header';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import {D1,D2,L1,L2,L3,L4,L5,L6,L7,LR1,LR2,S0,S1,S10,S11,S12,S13,S14,S15,S16,S2,S3,S4,S5,S6,S7,S8,S9} from './art'
import '../styles/Feed.css'
import { CgClose } from "react-icons/cg";
import Notification from './Notification';
import SearchInput from './Search';
import Navbar from './Navbar';
import Logo from './Logo';
import { Link } from 'react-router-dom';
// Function to shuffle an array


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const products = {
  data: shuffleArray([
    {
      productName: 'OMR 1',
      price: '₱ 250',
      image: D1,
      artist: "dasheru.xz",
      toc: " Scheduling" +"All commissions will be done according to who paid first, unless a rush/priority fee was paid."
    },
    {
      productName: 'OMR 2 ',
      price: '10',
      image: D2,
      artist: "dasheru.xz",
      toc: " Scheduling" +"All commissions will be done according to who paid first, unless a rush/priority fee was paid."
   
    },
    {
      productName: 'Chibi Style',
      price: '₱ 250',
      image: L1,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'YCH ',
      price: '10',
      image: L2,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'Fishing',
      price: '₱ 250',
      image: L3,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'Spear',
      price: '₱ 300',
      image: L4,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'Mask Guy',
      price: '₱ 375',
      image: L5,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'Kurapika',
      price: '₱ 375',
      image: L6,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'Loli Nurse',
      price: '₱ 300',
      image: L7,
      artist:"Lulu Cz Art"
    },
    {
      productName: 'Primogem',
      price: '10',
      image: LR1,
      artist:""
    },
    {
      productName: 'Lowbatt Girl',
      price: '₱ 400',
      image: LR2,
      artist:""
    },
    {
      productName: 'NYAN Pixels',
      price: '₱ 400',
      image: S0,
      artist:"saki"
    },
    {
      productName: 'Space Bunny',
      price: '₱ 375',
      image: S1,
      artist:"saki"
    },
    {
      productName: 'Space Bunny 2',
      price: '₱ 375',
      image: S2,
      artist:"saki"
    },
    {
      productName: 'Space Bunny 3',
      price: '₱ 375',
      image: S3,
      artist:"saki"
    },
    {
      productName: 'Space Bunny 4',
      price: '₱ 375',
      image: S4,
      artist:"saki"
    },
    {
      productName: 'Saki Neko',
      price: '₱ 375',
      image: S5,
      artist:"saki"
    },
    {
      productName: 'Saki Neko 2',
      price: '₱ 375',
      image: S6,
      artist:"saki"
    },
    {
      productName: 'Apex Yaoi',
      price: '₱ 150',
      image: S7,
      artist:"saki"
    },
    {
      productName: 'Saki GL',
      price: '₱ 175',
      image: S8,
      artist:"saki"
    },
    {
      productName: 'Neko Trap',
      price: '₱ 200',
      image: S9,
      artist:"saki"
    },
    {
      productName: 'Yaoi',
      price: '₱ 275',
      image: S10,
      artist:"saki"
    },
    {
      productName: 'Saki GL 2',
      price: '₱ 250',
      image: S11,
      artist:"saki"
    },
    {
      productName: 'Saki Art',
      price: '₱ 300',
      image: S12,
      artist:"saki"
    },
    {
      productName: 'Saki Trap 2',
      price: '₱ 375',
      image: S13,
      artist:"saki"
    },
    {
      productName: 'Saki Neko Gold Eye',
      price: '₱ 400',
      image: S14,
      artist:"saki"
    },
    {
      productName: 'Saki Manga Art',
      price: '₱ 475',
      image: S15,
      artist:"saki"
    },
    {
      productName: 'Saki Ehe!',
      price: '₱ 500',
      image: S16,
      artist:"saki"
    },
    
    // Other product objects
  ]),
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.data.filter((product) =>
      product.productName.toLowerCase().includes(term) ||
      product.artist.toLowerCase().includes(term) ||
      product.price.includes(term)
    );

    setFilteredProducts(filtered);
  };


}
const Feed = () => {
// NILIPAT KO YUNG NASA NAV
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products.data);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    const filtered = products.data.filter(
      (product) =>
        product.productName.toLowerCase().includes(term.toLowerCase()) ||
        product.artist.toLowerCase().includes(term.toLowerCase()) ||
        product.price.includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  const card = (product) => {
    return (
      <div className="default-round inline-block w-full" key={product.productName}>
        <img
          className="default-round card card-small block w-full"
          src={product.image}
          alt="Product Image"
          onClick={() => openModal(product)}
        />
      </div>
    );
  };
  return (
    <>
<nav className={`top-round bg-white sticky top-0 max-w-[36em] z-50 duration-500 ${isScrolled ? '' : 'sticky top-0 bg-white shadow-lg'}`}>
      {isScrolled ? (
        <div className='p-5 justify-between flex'>

        <Link to={"/Messages"} className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out"
>
      <Logo className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out" size={'24'}/>
      </Link> 


          <SearchInput handleSearch={handleSearch} />
           {/* Render the Search component */}
        </div>
      ) : (<div  className=" sticky bg-white p-5  top-round ">
<Logo/>
<p className='text-left text-3xl card' style={{ color: 'black' }}>Be a satellite, orbit now! 🛰️✨</p>
     
<SearchInput handleSearch={handleSearch} />
</div>
      )}
    </nav>
      {/* Render your product cards */}
      <div className="columns-2 mx-auto">
        {filteredProducts.map((product) => card(product))}
      </div>

      {/* Modal */}
        {/* Modal */}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedProduct && (
          <>
            {/* Profile */}
            <div className="p-5 flex items-center text-black">
              <img
                className="w-10 h-10 object-cover object-contain rounded-full object-contain"
                src={selectedProduct.image}
                alt="Product Image"
              />
              <h1 className="card-small text-left font-bold">{selectedProduct.artist}</h1>
              <button className="rounded-full p-2 absolute top-3 right-3" onClick={closeModal}>
                <CgClose className="text-black text-xl" />
              </button>
            </div>

            {/* Image div */}
            <div className="fixed relative object-contain ">
              <img className="object-contain " src={selectedProduct.image} alt="Product Image" />
            </div>

            <div className="max-h-90% p-5 flex text-black justify-between overflow-auto">
              <div className="">
                <h1 className="text-lg font-semibold">{selectedProduct.productName}</h1>
                <p>from {selectedProduct.price}</p>
              </div>
              {/* Right part of card */}
              <div className="text-black flex items-center justify-between gap-2 ">


                <Link to="/Messages">
  <button className="bg-neutral-200 card-small rounded-full">Request</button>

     </Link>
{/* 
                <button className="bg-neutral-200 card card-small rounded-full">
                  <TbMailFilled style={{ color: 'var(--subcolor)', fontSize: 24 }} />
                </button> */}
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Feed;