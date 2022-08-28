import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import "./FilterSidebar.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterSidebar = () => {
  const [brand, setBrand] = useState(true);
  const [hairCategory, setHairCategory] = useState(true);
  const [electricalHairTools, setElectricalHairTools] = useState(true);
  const [hairBenefit, setHairBenefit] = useState(true);
  const [key, setKey] = useState(true);
  const [price, setPrice] = useState(true);
  const [review, setReview] = useState(true);
  const [savings, setSavings] = useState(true);
  
  return (
    <div className="filtersidebar">
      <p className="filtersidebar__heading">
        Home / <span>Hair Care Products</span>
      </p>
      <div className="category">
        <div>
          <div className="category__head">Refine</div>
          <hr />
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setBrand((prv) => !prv)}
          >
            Brand {brand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {brand && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Altera</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Aquis</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Augustinus Bader</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>BLONDME</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Briogeo</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>By Terry</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Christophe Robin</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Color WOW</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>David Mallett</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Fekkai</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Grow Gorgeous</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>KLORANE</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Nioxin</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Olaplex</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Ouidad</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Patrix</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>The Organic Pharmacy</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Ursa Major</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>VIRTUE</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Wander Beauty</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setHairCategory((prv) => !prv)}
          >
            Hair Care Category{" "}
            {hairCategory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {hairCategory && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Preparation</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Styling</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Electrical Hair Tools</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Accessories</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Supplements</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setElectricalHairTools((prv) => !prv)}
          >
            Electrical Hair Tools
            {electricalHairTools ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {electricalHairTools && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Curler</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Dryer</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Straightener</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Waver</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setHairBenefit((prv) => !prv)}
          >
            Hair Care Benefit{" "}
            {hairBenefit ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {hairBenefit && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Anti-Dandruff</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Anti-Frizz</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Balancing</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Hair Growth</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Scalp Treatment</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Shine</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div className="category__head" onClick={() => setKey((prv) => !prv)}>
            Key Ingredients {key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {key && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Almond Oil</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Aloe Vera</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Alpha Hydroxy Acids</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Amino Acids</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>BHA</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Biotin</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Caffeine</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Castor Oil</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Coconut Oil</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Grape Seed Oil</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Green Tea</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Honey</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Omega Acids</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Rose</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Sea Salt</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Vitamin A</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Vitamin C</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Vitamin D</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>Vitamin E</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setPrice((prv) => !prv)}
          >
            Price {price ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {price && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Less than $10</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>$10 - $25</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>$25 - $50</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>$50 - $100</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>More than $100</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setSavings((prv) => !prv)}
          >
            Savings {savings ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {savings && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>Up to 25%</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>25% - 50%</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>50% - 75%</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
        <div>
          <div
            className="category__head"
            onClick={() => setReview((prv) => !prv)}
          >
            Average Reviews {review ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr />
          {review && (
            <Scrollbar style={{ width: "100%", height: 150 }}>
              <div className="products__inputCheckboxes">
                <div>
                  <div className="products__checkbox"></div>
                  <label>2-3</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>3-4</label>
                </div>
                <div>
                  <div className="products__checkbox"></div>
                  <label>4+</label>
                </div>
              </div>
            </Scrollbar>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
