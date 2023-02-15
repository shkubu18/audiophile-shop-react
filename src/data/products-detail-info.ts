import xx99mark2_IMG1 from "../assets/headphones/headphone-with-background6.jpg";
import xx99mark2_IMG2 from "../assets/headphones/man-with-headphone.jpg";
import xx99mark2_IMG3 from "../assets/headphones/xx99mark2-images1.jpg";
import xx99mark2_IMG4 from "../assets/headphones/xx99mark2-images2.jpg";
import xx99mark2_IMG5 from "../assets/headphones/headphone-with-background-tablet1.jpg";
import xx99mark1_IMG1 from "../assets/headphones/headphone-with-background2.jpg";
import xx99mark1_IMG2 from "../assets/headphones/xx99mark1-images.jpg";
import xx99mark1_IMG3 from "../assets/headphones/xx99mark1-images1.jpg";
import xx99mark1_IMG4 from "../assets/headphones/xx99mark1-images2.jpg";
import xx99mark1_IMG5 from "../assets/headphones/xx99mark1-tablet.jpg";
import xx59_IMG1 from "../assets/headphones/headphone-with-background3.jpg";
import xx59_IMG2 from "../assets/headphones/xx59-images.jpg";
import xx59_IMG3 from "../assets/headphones/xx59-images1.jpg";
import xx59_IMG4 from "../assets/headphones/xx59-images2.jpg";
import xx59_IMG5 from "../assets/headphones/xx59-tablet.jpg";
import zx9_IMG1 from "../assets/speakers/speaker-with-background.jpg";
import zx9_IMG2 from "../assets/speakers/zx9-images.jpg";
import zx9_IMG3 from "../assets/speakers/zx9-images1.jpg";
import zx9_IMG4 from "../assets/speakers/zx9-images2.jpg";
import zx9_IMG5 from "../assets/speakers/zx9-tablet.jpg";
import zx7_IMG1 from "../assets/speakers/speaker-with-background2.jpg";
import zx7_IMG2 from "../assets/speakers/zx7-images.jpg";
import zx7_IMG3 from "../assets/speakers/zx7-images1.jpg";
import zx7_IMG4 from "../assets/speakers/zx7-images2.jpg";
import zx7_IMG5 from "../assets/speakers/zx7-tablet.jpg";
import yx1_IMG1 from "../assets/earphones/earphone-with-background.jpg";
import yx1_IMG2 from "../assets/earphones/yx1-images.jpg";
import yx1_IMG3 from "../assets/earphones/yx1-images1.jpg";
import yx1_IMG4 from "../assets/earphones/yx1-images2.jpg";
import yx1_IMG5 from "../assets/earphones/yx1-tablet.jpg";
import { ProductData } from "../interfaces/Product";

export interface ProductDetailInfo {
  xx99mark2: ProductData[];
  xx99mark1: ProductData[];
  xx59: ProductData[];
  zx9: ProductData[];
  zx7: ProductData[];
  yx1: ProductData[];
}

export const productsDetailInfo: ProductDetailInfo[] | any = [
  {
    xx99mark2: [
      {
        hint: "NEW PRODUCT",
        name: "XX99 MARK ||",
        productType: "HEADPHONES",
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        price: "2999",
        features1:
          "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        features2:
          "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        inTheBox: {
          item1: "Headphone Unit",
          item1Qty: "1x",
          item2: "Replacement Earcups",
          item2Qty: "2x",
          item3: "User Manual",
          item3Qty: "1x",
          item4: "3.5mm 5m Audio Cable",
          item4Qty: "1x",
          item5: "Travel Bag",
          item5Qty: "1x",
        },
        img1: xx99mark2_IMG1,
        img2: xx99mark2_IMG2,
        img3: xx99mark2_IMG3,
        img4: xx99mark2_IMG4,
        img5: xx99mark2_IMG5,
      },
    ],
    xx99mark1: [
      {
        name: "XX99 MARK |",
        productType: "HEADPHONES",
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        price: "1750",
        features1:
          "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
        features2:
          "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
        inTheBox: {
          item1: "Headphone Unit",
          item1Qty: "1x",
          item2: "Replacement Earcups",
          item2Qty: "2x",
          item3: "User Manual",
          item3Qty: "1x",
          item4: "3.5mm 5m Audio Cable",
          item4Qty: "1x",
        },
        img1: xx99mark1_IMG1,
        img2: xx99mark1_IMG2,
        img3: xx99mark1_IMG3,
        img4: xx99mark1_IMG4,
        img5: xx99mark1_IMG5,
      },
    ],
    xx59: [
      {
        name: "XX59",
        productType: "HEADPHONES",
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        price: "899",
        features1:
          "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
        features2:
          "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        inTheBox: {
          item1: "Headphone Unit",
          item1Qty: "1x",
          item2: "Replacement Earcups",
          item2Qty: "2x",
          item3: "User Manual",
          item3Qty: "1x",
          item4: "3.5mm 5m Audio Cable",
          item4Qty: "1x",
        },
        img1: xx59_IMG1,
        img2: xx59_IMG2,
        img3: xx59_IMG3,
        img4: xx59_IMG4,
        img5: xx59_IMG5,
      },
    ],
    zx9: [
      {
        hint: "NEW PRODUCT",
        name: "ZX9",
        productType: "SPEAKER",
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        price: "4500",
        features1:
          "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        features2:
          "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        inTheBox: {
          item1: "Speaker Unit",
          item1Qty: "2x",
          item2: "Speaker Cloth Panel",
          item2Qty: "2x",
          item3: "User Manual",
          item3Qty: "1x",
          item4: "3.5mm 10m Audio Cable",
          item4Qty: "1x",
          item5: "10m Optical Cable",
          item5Qty: "1x",
        },
        img1: zx9_IMG1,
        img2: zx9_IMG2,
        img3: zx9_IMG3,
        img4: zx9_IMG4,
        img5: zx9_IMG5,
      },
    ],
    zx7: [
      {
        name: "ZX7",
        productType: "SPEAKER",
        description:
          "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        price: "3500",
        features1:
          "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        features2:
          "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        inTheBox: {
          item1: "Speaker Unit",
          item1Qty: "2x",
          item2: "Speaker Cloth Panel",
          item2Qty: "2x",
          item3: "User Manual",
          item3Qty: "1x",
          item4: "3.5mm 7.6m Audio Cable",
          item4Qty: "1x",
          item5: "7.5m Optical Cable",
          item5Qty: "1x",
        },
        img1: zx7_IMG1,
        img2: zx7_IMG2,
        img3: zx7_IMG3,
        img4: zx7_IMG4,
        img5: zx7_IMG5,
      },
    ],
    yx1: [
      {
        hint: "NEW PRODUCT",
        name: "YX1 WIRELESS",
        productType: "EARPHONES",
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        price: "599",
        features1:
          "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
        features2:
          "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        inTheBox: {
          item1: "Earphone Unit",
          item1Qty: "2x",
          item2: "Multi-size Earplugs",
          item2Qty: "6x",
          item3: "User Manual",
          item3Qty: "1x",
          item4: "USB-C Charging Cable",
          item4Qty: "1x",
          item5: "Travel Pouch",
          item5Qty: "1x",
        },
        img1: yx1_IMG1,
        img2: yx1_IMG2,
        img3: yx1_IMG3,
        img4: yx1_IMG4,
        img5: yx1_IMG5,
      },
    ],
  },
];
