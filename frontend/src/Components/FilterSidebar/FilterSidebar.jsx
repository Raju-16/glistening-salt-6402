import React, { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";
import "./FilterSidebar.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const initialState = {
  en_brand_content: [],
  en_hairCategory_content: [],
  en_electricalTools_content: [],
  en_hairCareBenefit_content: [],
  en_keyIngredients_content: [],
  en_price_content: [],
  en_savingPercent_content: [],
  en_averageReviewScore_content: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "en_brand_content":
      return {
        ...state,
        en_brand_content: payload,
      };
    case "en_hairCategory_content":
      return {
        ...state,
        en_hairCategory_content: payload,
      };
    case "en_electricalTools_content":
      return {
        ...state,
        en_electricalTools_content: payload,
      };
    case "en_hairCareBenefit_content":
      return {
        ...state,
        en_hairCareBenefit_content: payload,
      };
    case "en_keyIngredients_content":
      return {
        ...state,
        en_keyIngredients_content: payload,
      };
    case "en_price_content":
      return {
        ...state,
        en_price_content: payload,
      };
    case "en_savingPercent_content":
      return {
        ...state,
        en_savingPercent_content: payload,
      };
    case "en_averageReviewScore_content":
      return {
        ...state,
        en_averageReviewScore_content: payload,
      };
    default:
      return state;
  }
};

const FilterSidebar = () => {
  const [facetFilters, setFacetFilters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, setter] = useReducer(reducer, initialState);

  const [brand, setBrand] = useState(true);
  const [hairCategory, setHairCategory] = useState(true);
  const [electricalHairTools, setElectricalHairTools] = useState(true);
  const [hairBenefit, setHairBenefit] = useState(true);
  const [key, setKey] = useState(true);
  const [price, setPrice] = useState(true);
  const [review, setReview] = useState(true);
  const [savings, setSavings] = useState(true);

  const handleChangeFilter = (e, value, variable) => {
    let newValueArray = value;
    let option = e.target.value;
    if (newValueArray.includes(option)) {
      newValueArray.splice(value.indexOf(option), 1);
    } else {
      newValueArray.push(option);
    }
    setter({ type: variable, payload: newValueArray });
  };

  useEffect(() => {
    if (
      state.en_brand_content?.length > 0 ||
      state.en_hairCategory_content?.length > 0
    ) {
      setSearchParams({
        en_hairCategory_content: state.en_hairCategory_content,
        en_brand_content: state.en_brand_content,
      });
    }
  }, [
    state.en_brand_content?.length,
    state.en_hairCategory_content?.length,
    setSearchParams,
  ]);

  console.log(state.en_brand_content, state.en_hairCategory_content);

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
                  <input
                    type="checkbox"
                    value={"Alterna"}
                    defaultChecked={state.en_brand_content.includes("Alterna")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Alterna</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Augustinus Bader"}
                    defaultChecked={state.en_brand_content.includes(
                      "Augustinus Bader"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Augustinus Bader</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"BLONDME"}
                    defaultChecked={state.en_brand_content.includes("BLONDME")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>BLONDME</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Briogeo"}
                    defaultChecked={state.en_brand_content.includes("Briogeo")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Briogeo</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"By Terry"}
                    defaultChecked={state.en_brand_content.includes("By Terry")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>By Terry</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Color WOW"}
                    defaultChecked={state.en_brand_content.includes(
                      "Color WOW"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Color WOW</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"David Mallett"}
                    defaultChecked={state.en_brand_content.includes(
                      "David Mallett"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>David Mallett</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"ghd"}
                    defaultChecked={state.en_brand_content.includes("ghd")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>ghd</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Grow Gorgeous"}
                    defaultChecked={state.en_brand_content.includes(
                      "Grow Gorgeous"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Grow Gorgeous</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"KLORANE"}
                    defaultChecked={state.en_brand_content.includes("KLORANE")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>KLORANE</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Wander Beauty"}
                    defaultChecked={state.en_brand_content.includes(
                      "Wander Beauty"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Wander Beauty</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Weleda"}
                    defaultChecked={state.en_brand_content.includes("Weleda")}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_brand_content,
                        "en_brand_content"
                      )
                    }
                    className="products__checkbox"
                  />
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
                  <input
                    type="checkbox"
                    value={"Hair Preperation"}
                    defaultChecked={state.en_hairCategory_content.includes(
                      "Hair Preperation"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_hairCategory_content,
                        "en_hairCategory_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Hair Preparation</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Hair Styling"}
                    defaultChecked={state.en_hairCategory_content.includes(
                      "Hair Styling"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_hairCategory_content,
                        "en_hairCategory_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Hair Styling</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Electrical Hair Tools"}
                    defaultChecked={state.en_hairCategory_content.includes(
                      "Electrical Hair Tools"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_hairCategory_content,
                        "en_hairCategory_content"
                      )
                    }
                    className="products__checkbox"
                  />
                  <label>Electrical Hair Tools</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={"Hair Accessories"}
                    defaultChecked={state.en_hairCategory_content.includes(
                      "Hair Accessories"
                    )}
                    onChange={(e) =>
                      handleChangeFilter(
                        e,
                        state.en_hairCategory_content,
                        "en_hairCategory_content"
                      )
                    }
                    className="products__checkbox"
                  />
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
