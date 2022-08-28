import React from "react";
const products = [
  {
    id: 1,
    imageUrl:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11397659-1154871067742002.jpg",
    name: "Avene High Protection Tinted Compact SPF 50 - Beige",
    rating: "4.5",
    Price: "200",
    overview:
      "Protect even the most sensitive skin from the daily effects of UVA/UVB rays with Avene High Protection Tinted Compact SPF 50. This broad-spectrum sunscreen contains skin-nourishing vitamin E for potent antioxidant protection and Avene thermal spring water to soothe and soften the skin. Haute Protection won't irritate post-procedure or ultra-sensitive skin and is hypoallergenic and non-comedogenic so you can maintain a healthy, glowing complexion.",
  },
];

const ProductCard = () => {
  const product = products;

  console.log(product);
  return (
    <div>
      {product.map((item) => {
        return (
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginLeft: "30px",
                width: "600px",
                height: "900px",
                textAlign: "justify",
              }}
            >
              <img
                src={item.imageUrl}
                alt=""
                width={"600px"}
                height={"700px"}
              />
              <p>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  Overview :-{" "}
                </span>
                {item.overview}
              </p>
            </div>
            <div
              style={{
                marginTop: "100px",
                width: "600px",
                height: "900px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              <h1
                style={{
                  textAlign: "left",
                  marginLeft: "50px",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                {item.name}
              </h1>
              <h3
                style={{
                  textAlign: "left",
                  marginLeft: "50px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Rating :⭐ {item.rating}
              </h3>
              <h3
                style={{
                  textAlign: "left",
                  marginLeft: "50px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Price : {item.Price}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
