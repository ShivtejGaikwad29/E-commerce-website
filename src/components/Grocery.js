import React, { useState } from "react";

const Stationary = () => {
  const categories = [
    {
      name: "RICE",
      image: "https://i.pinimg.com/736x/2d/99/c2/2d99c2163b2bebaa2cf1baeb98b1ef06.jpg",
      description: "Ideal for sketching and writing.",
      varieties: [
        {
          name: "Daawat Super Basmati",
          image: "https://www.daawat.com/media/images/product/thumbnail/super-basmati-1kg-merged-1640956746.png",
          description: "Known for its aged basmati rice with rich aroma.",
        },
        {
          name: "Daawat Rozana",
          image: "https://www.daawat.com/media/images/product/thumbnail/rozana-mini-basmati-rice-1640955627.png",
          description: "Known for its aged basmati rice with rich aroma.",
        },
        {
          name: "Daawat Biryani Basmati",
          image: "https://m.media-amazon.com/images/I/61Y1PZx5CZL.jpg",
          description: "Known for its aged basmati rice with rich aroma.",
        },
        {
          name: "Daawat Traditional Basmati",
          image: "https://m.media-amazon.com/images/I/81nR3v3CFcL.jpg",
          description: "Known for its aged basmati rice with rich aroma.",
        },
        {
          name: "India Gate Extra Long Basmati",
          image: "https://dookan.com/cdn/shop/files/India_Gate_Extra_Long_Basmati_Rice_-_Excel_5kg_-500px_eeb43986-8338-4450-b4de-35925eed53c9.png?v=1729291910",
          description: "Offers premium basmati rice, including classic and aged varieties.",
        },
        {
          name: "India Gate Everyday",
          image: "https://i0.wp.com/farms2home.sg/wp-content/uploads/IndiaGate-Everyday.png?fit=600%2C600&ssl=1",
          description: "Offers premium basmati rice, including classic and aged varieties.",
        },
        {
          name: "Kohinoor Authentic",
          image:
            "https://www.jiomart.com/images/product/original/493073099/kohinoor-authentic-basmati-rice-1-kg-product-images-o493073099-p600748609-0-202304201903.jpg?im=Resize=(1000,1000)",
          description: "Famous for its extra-long grain basmati rice.",
        },
        {
          name: "Lal Qilla Dubar Basmati",
          image: "https://budgetbazaar.online/wp-content/uploads/2024/10/Lal-Qilla-Dubar-Basmati-Rice-5Kg.jpg",
          description: "High-quality, aged basmati with a distinct flavor.",
        },
        {
          name: "Lal Qilla Super Broken",
          image: "https://www.africshopping.com/wp-content/uploads/2022/06/Lal-Qilla-broken_basmati_rice.png",
          description: "High-quality, aged basmati with a distinct flavor.",
        },
        {
          name: "Fortune Biryani Special",
          image: "https://m.media-amazon.com/images/I/81vW+LbPsoL.jpg",
          description: "Preferred for biryanis due to its long grains.",
        },
        {
          name: "Patanjali",
          image:
            "https://www.patanjaliayurved.net/assets/product_images/400x500/1689676694SilverBasmatiRice1kg1.png",
          description: "Offers organic rice, including sona masoori and basmati.",
        },
      ],
    },
    {
      name: "CHIPS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKjePU7SoJ_NrRSivtrCJsP26usHnVHTg9Z-jSJq2SZv_mMTORRDsS6so8C_eC5ADr6g&usqp=CAU",
      description: "Smooth writing experience.",
      varieties: [
        {
          name: "Lays Potato Chips",
          image:
            "https://m.media-amazon.com/images/I/71+bz5i4SDL._AC_UF1000,1000_QL80_.jpg",
          description: "Smooth and long-lasting ballpoint pen.",
        },
        {
          name: "Lays Chile Lemon",
          image:
            "https://www.quickpantry.in/cdn/shop/products/lay-s-chile-limon-potato-chips-32-g-quick-pantry.jpg?v=1710539171&width=900",
          description: "Water-based gel ink for effortless writing.",
        },
        {
          name: "Lays Classic Salted",
          image:
            "https://m.media-amazon.com/images/I/71eRbcMmZqL.jpg",
          description: "Classic fountain pen for elegant handwriting.",
        },
        {
          name: "Lays Sweet Chile Potato Chips",
          image:
            "https://m.media-amazon.com/images/I/71+bz5i4SDL._AC_UF1000,1000_QL80_.jpg",
          description: "Smooth and long-lasting ballpoint pen.",
        },
        {
          name: "Lays Indias Magic Masala",
          image:
            "https://m.media-amazon.com/images/I/71s0CmnLLTL.jpg",
          description: "Water-based gel ink for effortless writing.",
        },
        {
          name: "Lays Sizzling Hot",
          image:
            "https://m.media-amazon.com/images/I/71eRbcMmZqL.jpg",
          description: "Classic fountain pen for elegant handwriting.",
        },
        {
          name: "Lays Spanish Tomato Tango",
          image:
            "https://ik.imagekit.io/wlfr/wellness/images/products/302752-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end",
          description: "Smooth and long-lasting ballpoint pen.",
        },
        {
          name: "Balaji Crunchem Salted Wafers",
          image:
            "https://www.balajiwafers.com/wp-content/uploads/2019/04/T_Wafers_SimplySalted_Middle-2.png",
          description: "Water-based gel ink for effortless writing.",
        },
        {
          name: "Balaji Cream & Onion Wafers",
          image:
            "https://www.balajiwafers.com/wp-content/uploads/2019/04/T_Wafers_CreamOnion_Middle-1.png",
          description: "Classic fountain pen for elegant handwriting.",
        },
        {
          name: "Balaji Masala Masti",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyWL8JIhYHzewDB-4IHO_6bS5bKesGE2v4Q&s",
          description: "Smooth and long-lasting ballpoint pen.",
        },
        {
          name: "Balaji Simpli Salted",
          image:
            "https://www.quickpantry.in/cdn/shop/files/balaji-wafers-simply-salted-quick-pantry-2.png?v=1710538876&width=460",
          description: "Water-based gel ink for effortless writing.",
        },
        {
          name: "Balaji Tomato Twist",
          image:
            "https://www.bigbasket.com/media/uploads/p/xxl/40053584_5-balaji-tomato-masti-chips.jpg",
          description: "Classic fountain pen for elegant handwriting.",
        },
        {
          name: "Balaji Wheels",
          image:
            "https://rukminim2.flixcart.com/image/850/1000/xif0q/snack-savourie/q/u/b/-original-imah8mputhzzgqyn.jpeg?q=20",
          description: "Classic fountain pen for elegant handwriting.",
        },
        {
          name: "Kurkure Masala Munch",
          image:
            "https://tiimg.tistatic.com/fp/1/007/514/kurkure-masala-munch-flavor-with-a-great-combination-of-spice-crunch-orange-color-pack-239.jpg",
          description: "Smooth and long-lasting ballpoint pen.",
        },
        {
          name: "Kurkure Green Chutney",
          image:
            "https://m.media-amazon.com/images/I/71kOfSi3VjL.jpg",
          description: "Water-based gel ink for effortless writing.",
        },
        {
          name: "Kurkure Chili Chatka",
          image:
            "https://images-cdn.ubuy.co.in/64b96328994a6e2c731ba34a-kurkure-namkeen-chilli-chatka-94-g.jpg",
          description: "Classic fountain pen for elegant handwriting.",
        },
      ],
    },
    {
      name: "MILK",
      image:
        "https://thumbs.dreamstime.com/b/flat-animated-cartoon-milk-large-paper-box-illustration-high-calcium-drinks-healthy-strong-bone-preventing-osteoporosis-261764033.jpg",
      description: "Essential for students.",
      varieties: [
        {
          name: "Amul Moti Milk",
          image: "https://m.media-amazon.com/images/I/812816L+HkL.jpg",
          description: "Soft eraser with minimal residue.",
        },
        {
          name: "Amul Cow Milk",
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592",
          description: "Soft eraser with minimal residue.",
        },
        {
          name: "Amul Buffalo Milk",
          image:
            "https://rukminim2.flixcart.com/image/850/1000/xif0q/milk/e/t/4/500-a2-buffalo-pasteurised-milk-pouch-plain-amul-original-imah2hrgbqshfjpa.jpeg?q=20&crop=false",
          description: "Great for shading and soft corrections.",
        },
        {
          name: "Amul Gir Milk",
          image:
            "https://www.jiomart.com/images/product/original/491694998/amul-deshi-a2-cow-milk-500-ml-product-images-o491694998-p607422438-0-202401181700.jpg?im=Resize=(1000,1000)",
          description: "Soft eraser with minimal residue.",
        },
        {
          name: "Amul Kesar Milk",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/6/317422456/SQ/FO/EQ/110694738/amul-kool-premium-kesar-milk-drink.jpg",
          description: "Soft eraser with minimal residue.",
        },
        {
          name: "Amul Elaichi Milk",
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40175691_4-amul-kool-elaichi.jpg",
          description: "Great for shading and soft corrections.",
        },
        {
          name: "Amul Rose Milk",
          image:
            "https://www.bigbasket.com/media/uploads/p/xl/40175692_4-amul-kool-rose.jpg",
          description: "Great for shading and soft corrections.",
        },
        {
          name: "Gokul Milk",
          image:
            "https://www.jiomart.com/images/product/original/590009250/gokul-full-cream-milk-1-l-pouch-product-images-o590009250-p591057849-0-202209160758.jpg?im=Resize=(1000,1000)",
          description: "Great for shading and soft corrections.",
        },
        {
          name: "Amul Kesar Milk",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/6/317422456/SQ/FO/EQ/110694738/amul-kool-premium-kesar-milk-drink.jpg",
          description: "Soft eraser with minimal residue.",
        },
        {
          name: "Amul Elaichi Milk",
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40175691_4-amul-kool-elaichi.jpg",
          description: "Great for shading and soft corrections.",
        },
        {
          name: "Amul Rose Milk",
          image:
            "https://www.bigbasket.com/media/uploads/p/xl/40175692_4-amul-kool-rose.jpg",
          description: "Great for shading and soft corrections.",
        },
        {
          name: "Gokul Milk",
          image:
            "https://www.jiomart.com/images/product/original/590009250/gokul-full-cream-milk-1-l-pouch-product-images-o590009250-p591057849-0-202209160758.jpg?im=Resize=(1000,1000)",
          description: "Great for shading and soft corrections.",
        },
      ],
    },
    {
      name: "Spices",
      image: "https://us.123rf.com/450wm/coffeeein/coffeeein1901/coffeeein190100028/124438990-spice-icon-organic-spices-vector-illustration.jpg?ver=6",
      description: "Keeps pencils sharp.",
      varieties: [
        {
          name: "Everest",
          image:
            "https://m.media-amazon.com/images/I/61L03U7kgIL._AC_SL1500_.jpg",
          description: "One of the most popular brands, offering a wide variety of masalas like garam masala, pav bhaji masala, and more.",
        },
        {
          name: "MDH",
          image:
            "https://m.media-amazon.com/images/I/41dQ5IxqG2L._AC_UF1000,1000_QL80_.jpg",
          description: "Famous for its traditional spice blends like chaat masala, kitchen king, and tandoori masala.",
        },
        {
          name: "Catch",
          image:
            "https://m.media-amazon.com/images/I/61L03U7kgIL._AC_SL1500_.jpg",
          description: "Known for high-quality whole and ground spices, including black pepper and hing",
        },
        {
          name: "Patanjali",
          image:
            "https://m.media-amazon.com/images/I/41dQ5IxqG2L._AC_UF1000,1000_QL80_.jpg",
          description: "Offers organic and Ayurvedic masalas like turmeric, jeera, and garam masala.",
        },
        {
          name: "Tata Sampann",
          image:
            "https://m.media-amazon.com/images/I/61L03U7kgIL._AC_SL1500_.jpg",
          description: "Specializes in pure and natural spices with essential oils retained.",
        },
        {
          name: "Badshah",
          image:
            "https://m.media-amazon.com/images/I/41dQ5IxqG2L._AC_UF1000,1000_QL80_.jpg",
          description: "Provides premium quality blended spices, especially for North Indian dishes.",
        },
        {
          name: "Eastern",
          image:
            "https://m.media-amazon.com/images/I/61L03U7kgIL._AC_SL1500_.jpg",
          description: "Famous in South India for sambar powder, rasam powder, and other regional spice mixes.",
        },
        {
          name: "Aachi",
          image:
            "https://m.media-amazon.com/images/I/41dQ5IxqG2L._AC_UF1000,1000_QL80_.jpg",
          description: "Popular in Tamil Nadu, known for its traditional spice blends like chettinad masala.",
        },
        {
          name: "Pushp",
          image:
            "https://m.media-amazon.com/images/I/61L03U7kgIL._AC_SL1500_.jpg",
          description: "Offers premium and aromatic spices, mainly used in central India.",
        },
        {
          name: "Priya",
          image:
            "https://m.media-amazon.com/images/I/41dQ5IxqG2L._AC_UF1000,1000_QL80_.jpg",
          description: "Known for its Andhra-style spice powders and pickles.",
        },
      ],
    },
    {
      name: "NODDLE'S",
      image: "https://img.freepik.com/premium-photo/noodle-doodle-simplified-animation-journey-through-delicious-noodles-white-canvas_983420-42807.jpg",
      description: "Various types of paper available.",
      varieties: [
        {
          name: "Maggi",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1I2jrpA2Oy3smZkWdXHX2sf1BBUWW5wilA&s",
          description: "The most popular instant noodle brand by Nestlé, available in various flavors like Masala, Atta, and Chicken.",
        },
        {
          name: "Sunfeast Yippee!",
          image: "https://m.media-amazon.com/images/I/91HTANVPF3L.jpg",
          description: "Known for its long, non-sticky noodles and different variants like Magic Masala and Mood Masala.",
        },
        {
          name: "Patanjali Atta Noodles ",
          image: "https://www.patanjaliayurved.net/assets/product_images/400x500/1709033411ChatpataNoodles-60g1.png",
          description: "A healthier alternative made from whole wheat flour.",
        },
        {
          name: "Top Ramen",
          image: "https://www.bigbasket.com/media/uploads/p/xxl/40001611_3-top-ramen-noodles-masala.jpg",
          description: "A classic brand with flavors like Curry and Masala.",
        },
        {
          name: "Knorr Soupy Noodles ",
          image: "https://5.imimg.com/data5/SELLER/Default/2023/11/362024557/JA/IN/BD/20624773/knorr-soupy-noodles.jpg",
          description: "A combination of soup and noodles for a unique taste.",
        },
      ],
    },
    {
      name: "SHAMPOO",
      image: "https://png.pngtree.com/png-clipart/20220117/original/pngtree-hand-drawn-cartoon-shampoo-elements-png-image_7146310.png",
      description: "Essential for geometry.",
      varieties: [
        {
          name: "Clinic Plus",
          image: "https://5.imimg.com/data5/ECOM/Default/2024/9/450479918/QL/YZ/RN/141449392/clinic-plus-strong-and-long-health-shampoo-quick-pantry-1-500x500.jpg",
          description: "Affordable and gentle, suitable for daily use.",
        },
        {
          name: "Sunsilk ",
          image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/sunsilk/1013721/0/QWdfZ-rV_C-HOB0A7rXvL-qm8d9GN55Y-sN1Y9LdzMx-1013721_1.jpg",
          description: "Offers different variants for smooth, strong, and long hair.",
        },
        {
          name: "Dove ",
          image: "https://m.media-amazon.com/images/I/41G2IZXVrcL.jpg",
          description: "Moisturizing formula for soft and frizz-free hair.",
        },
        {
          name: "Tresemme ",
          image: "https://m.media-amazon.com/images/I/51RnEZJ82WL.jpg",
          description: "Salon-like smoothness, good for frizz control.",
        },
        {
          name: "Pantene ",
          image: "https://cdn11.bigcommerce.com/s-xyx0x9ybhg/images/stencil/1280x1280/products/584/9033/51wZC83hRrL._SL1500___93875.1721206681.jpg?c=2",
          description: "Known for strengthening hair and reducing hair fall.",
        },
        {
          name: "Patanjali Kesh Kanti",
          image: "https://m.media-amazon.com/images/I/718FZLJ5D9L.jpg",
          description: "Herbal shampoo for hair fall control.",
        },
        {
          name: "Himalaya Anti-Hair Fall",
          image: "https://m.media-amazon.com/images/I/71jwJ3WGcAL.jpg",
          description: "Enriched with bhringraj for hair strengthening.",
        },
        {
          name: "L'Oréal Paris Total Repair 5 ",
          image: "https://pharmacyforlife.ca/cdn/shop/products/07124936430_grande.jpg?v=1571720771",
          description: "Repairs damaged hair.",
        },
        {
          name: "Head & Shoulders",
          image: "https://i5.walmartimages.com/seo/Head-and-Shoulders-Dandruff-Shampoo-Classic-Clean-8-45-fl-oz_7eccea03-e44c-48e6-9de0-17b3063f2985.bdd7cd46308e9df02af07dfbce0c576b.jpeg",
          description: "One of the best for dandruff control.",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="container my-4">
      {/* Show Main Categories if No Category is Selected */}
      {!selectedCategory ? (
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div
                className="card"
                style={{
                  width: "100%",
                  border: "1.5px solid black",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedCategory(category)}
              >
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">{category.description}</p>
                  <button className="btn btn-primary">View Varieties</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Show Varieties of Selected Category */
        <div className="container d-flex flex-column position-relative">
          {/* Back Button Adjusted Slightly Down */}
          <div className="position-absolute top-0 end-0 mt-5 me-4">
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedCategory(null)}
            >
              Back to Categories
            </button>
          </div>
  
          {/* Category Title */}
          <h3 className="mt-5 text-center">{selectedCategory.name} Varieties</h3>
  
          {/* Items Grid */}
          <div className="row w-100">
            {selectedCategory.varieties.map((variety, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div
                  className="card shadow"
                  style={{
                    width: "100%",
                    minHeight: "300px",
                    border: "1.5px solid black",
                  }}
                >
                  <img
                    src={variety.image}
                    className="card-img-top"
                    alt={variety.name}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between text-center">
                    <h5 className="card-title">{variety.name}</h5>
                    <p className="card-text">{variety.description}</p>
                    <button className="btn btn-primary">ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Stationary;
