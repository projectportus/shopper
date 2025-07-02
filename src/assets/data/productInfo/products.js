import ph1 from "@/assets/images/productInfo/ph-bl1.svg";
import ph2 from "@/assets/images/productInfo/ph-bl2.svg";
import ph3 from "@/assets/images/productInfo/ph-bl3.svg";
import ph4 from "@/assets/images/productInfo/ph-bl4.svg";
import mainPhoto from "@/assets/images/productInfo/main.svg";
import sofa1 from "@/assets/images/productInfo/sofa1.svg";
import sofa2 from "@/assets/images/productInfo/sofa2.svg";

const products = [
  {
    id: 1,
    mainPhoto: mainPhoto,
    secondaryPhotos: [ph1, ph2, ph3, ph4],
    additionalPhotos: [sofa1, sofa2],
    alt: "furniture-item",
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.5,
    reviews: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    sizes: ["L", "XL", "XS"],
    colors: [
      { name: "purple", hex: "#8A2BE2" },
      { name: "black", hex: "#000000" },
      { name: "gold", hex: "#DAA520" },
    ],
    options: {
      desc: {
        t1: "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
        t2: "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
      },
      add: {
        t1: "Capturing the untamed spirit of rock 'n' roll, the Kilburn portable active stereo speaker delivers Marshall's iconic look and sound, cutting the cords and taking the music on the road.",
        t2: "Less than 7 pounds, the Kilburn is a sleek, vintage-inspired piece of engineering. As one of the most powerful speakers in its category, it delivers a rich, balanced sound with crisp midrange and extended highs. The analog knobs offer precise control over your audio, while the guitar-inspired leather strap adds both style and convenience for on-the-go listening.",
      },
      rev: {
        t1: "The rebellious essence of rock 'n' roll, the Kilburn portable stereo speaker showcases Marshall's signature style and sound, unplugging from the wires and hitting the road.",
        t2: "At under 7 pounds, the Kilburn combines lightweight design with classic vintage aesthetics. Known as one of the loudest in its class, it offers a well-rounded sound profile with clear mids and pronounced highs. Customizing your listening experience is easy with its analog controls, and the guitar-inspired leather strap makes traveling with the speaker both stylish and practical.",
      },
    },
  },
  {
    id: 2,
    mainPhoto: mainPhoto,
    secondaryPhotos: [ph1, ph2, ph3, ph4],
    additionalPhotos: [sofa1, sofa2],
    alt: "furniture-item",
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.5,
    reviews: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    sizes: ["L", "XL", "XS"],
    colors: [
      { name: "purple", hex: "#8A2BE2" },
      { name: "black", hex: "#000000" },
      { name: "gold", hex: "#DAA520" },
      { name: "pink", hex: "transparent", border: "border-pink-500" },
    ],
  },
  {
    id: 3,
    mainPhoto: mainPhoto,
    secondaryPhotos: [ph1, ph2, ph3, ph4],
    additionalPhotos: [sofa1, sofa2],
    alt: "furniture-item",
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.5,
    reviews: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    sizes: ["L", "XL", "XS"],
    colors: [
      { name: "purple", hex: "#8A2BE2" },
      { name: "black", hex: "#000000" },
      { name: "gold", hex: "#DAA520" },
      { name: "pink", hex: "transparent", border: "border-pink-500" },
    ],
  },
];

export default products;
