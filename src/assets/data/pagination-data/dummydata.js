import dr1 from '@/assets/images/products-list/dr1.svg';
import dr2 from '@/assets/images/products-list/dr2.svg';
import dr3 from '@/assets/images/products-list/dr3.svg';
import dr4 from '@/assets/images/products-list/dr4.svg';

const productsdata = [
  {
    id: 1, 
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: '2500000',
    image: dr1,
    offer: '-30%',
    badgeStatus: true,
    discount: true,
  },
  {
    id: 2,
    title: "Leviosa",
    desc: "Stylish cafe chair",
    price: '2500000',
    image: dr2,
    badgeStatus: false,
    discount: false,
  },
  {
    id: 3,
    title: "Lolito",
    desc: "Luxury big sofa",
    price: '7000000',
    image: dr3,
    offer: '-50%',
    badgeStatus: true,
    discount: true,
  },
  {
    id: 4,
    title: "Respira",
    desc: "Outdoor bar table and stool",
    price: '500000',
    image: dr4,
    offer: 'New',
    badgeStatus: true,
    discount: false,
  },
]

const productsdataExtended = Array.from({ length: 40 }, () => productsdata).flat();


export default productsdataExtended;

