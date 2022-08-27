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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Alterna</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Augustinus Bader</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>BLONDME</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Briogeo</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>By Terry</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Color WOW</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>David Mallett</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>ghd</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Grow Gorgeous</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>KLORANE</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Wander Beauty</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Weleda</label>
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Preparation</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Styling</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Electrical Hair Tools</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Accessories</label>
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Curler</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Dryer</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Straightener</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Hair Brushes</label>
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Anti-Dandruff</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Anti-Frizz</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Balancing</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Scalp Treatment</label>
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Aloe Vera</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Amino Acids</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Biotin</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Caffeine</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Castor Oil</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Coconut Oil</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Green Tea</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>Vitamin C</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Less than $10</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>$10 - $25</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>$25 - $50</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>$50 - $100</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>Up to 25%</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>25% - 50%</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
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
                  <input type="checkbox" className="products__checkbox" />
                  <label>2-3</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
                  <label>3-4</label>
                </div>
                <div>
                  <input type="checkbox" className="products__checkbox" />
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
