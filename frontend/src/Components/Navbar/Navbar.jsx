import "antd/dist/antd.css";
import "./Navbar.css";
import { Container } from "@chakra-ui/react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TannerGoods = (
  <div
    className="megadropdown"
    style={{
      display: "flex",
      margin: "1rem",
      justifyContent: "space-around",
      width: "100%",
      height: "50vh",
      background: "white",
    }}
  >
    <div style={{ margin: "1rem" }}>
      <div>
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leather-goods-tg-1629899667.jpg?crop=1.00xw:0.869xh;0,0.0509xh&resize=980:*"
          alt=""
        />
      </div>

      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              ></a>
            ),
          },
          {
            key: "2",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
              >
                {/* <img src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2017/08/Tanner-Card-Wallet-Gear-Patrol-Lead-Full.jpg?crop=0.6706185567010309xw:1xh;center,top&resize=980:*" alt="" /> */}
              </a>
            ),
          },
          {
            key: "3",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
              ></a>
            ),
          },
        ]}
      ></Menu>
    </div>
    <div style={{ margin: "1rem" }}>
      <div>
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIAFHqRUttU6hgd5Ys5W7vo5Sw2vfASl22AdX9BiMmtB2slE8gZyE6-9t5ARU65v8VPw&usqp=CAU"
          alt=""
        />
      </div>

      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              ></a>
            ),
          },
          {
            key: "2",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
              >
                2nd menu item
              </a>
            ),
          },
          {
            key: "3",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
              >
                3rd menu item
              </a>
            ),
          },
        ]}
      ></Menu>
    </div>
    <div style={{ margin: "1rem" }}>
      <div>
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://d2rg8qz2n54jhj.cloudfront.net/1920/20200512-DSC09786.webp"
          alt=""
        />
      </div>

      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              ></a>
            ),
          },
          {
            key: "2",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
              >
                2nd menu item
              </a>
            ),
          },
          {
            key: "3",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
              >
                3rd menu item
              </a>
            ),
          },
        ]}
      ></Menu>
    </div>
    <div style={{ margin: "1rem" }}>
      <div style={{ width: "200px", height: "150px" }}>
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://m.media-amazon.com/images/I/61tmACBhPML._SX679_.jpg"
          alt=""
        />
      </div>
      <Menu
        items={[
          {
            key: "1",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              ></a>
            ),
          },
          {
            key: "2",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
              >
                2nd menu item
              </a>
            ),
          },
          {
            key: "3",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
              >
                3rd menu item
              </a>
            ),
          },
        ]}
      ></Menu>
    </div>
  </div>
);
const MazamaWares = (
  <div style={{ marginTop: ".5rem" }}>
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Glassware
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Table ware
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Ceramic Mugs
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Kitchen Kinves
            </a>
          ),
        },
      ]}
    />
  </div>
);
const FeaturedCollections = (
  <div style={{ marginTop: ".5rem" }}>
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Best Sellers
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              New Arrivals
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Everyday Carry
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Apothecary
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Apparel
            </a>
          ),
        },
        {
          key: "6",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Summer Accessories
            </a>
          ),
        },
        {
          key: "7",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Lightweight Goods
            </a>
          ),
        },
      ]}
    />
  </div>
);
const GiftsSets = (
  <div style={{ marginTop: ".5rem" }}>
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Skin Care Kits & Sets
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Makeup Kits & sets
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Hair Care Kits & sets
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Bath & Body Kits & sets
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Men's Kits & sets
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              BeautyFIX
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Best of Dermstore
            </a>
          ),
        },
      ]}
    />
  </div>
);
const SummerShop = (
  <div style={{ marginTop: ".5rem" }}>    
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              SPF
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Travel Size
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Skin Care
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Makeup
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Hair Care
            </a>
          ),
        },
      ]}
    />
  </div>
);
const NewArrival = (
  <div style={{ marginTop: ".5rem" }}>
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              New & Now
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              New Skincare
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              New Haircare
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              New Makeup
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              New Bath & Body
            </a>
          ),
        },
        {
          key: "6",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              New Men's Products
            </a>
          ),
        },
        {
          key: "7",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              New Gifts & sets
            </a>
          ),
        },
      ]}
    />
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Container pt="2rem" pb="1rem" display="flex" maxW="container.2xl">
        <Container maxW="container.2xl" display="flex">
          <Dropdown
            style={{ width: "100%" }}
            overlay={TannerGoods}
            placement="bottom"
          >
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Brands
            </button>
          </Dropdown>

          <Dropdown overlay={SummerShop} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Summer Shop
            </button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Browse By
            </button>
          </Dropdown>

          <Dropdown overlay={TannerGoods} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Bestsellers
            </button>
          </Dropdown>

          <Dropdown overlay={MazamaWares} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Skin Care
            </button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Makeup
            </button>
          </Dropdown>

          <Dropdown overlay={TannerGoods} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Hair Care
            </button>
          </Dropdown>

          <Dropdown overlay={MazamaWares} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Bath & Body
            </button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Tools & Devices
            </button>
          </Dropdown>

          <Dropdown overlay={GiftsSets} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Gifts & Sets
            </button>
          </Dropdown>

          <Dropdown overlay={MazamaWares} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              BeautyFIX
            </button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Offers
            </button>
          </Dropdown>
          <Dropdown overlay={NewArrival} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              New Arrivals
            </button>
          </Dropdown>
          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <button style={{ width: "100%" }} type="link" className="btn-navbar">
              Skin 101
            </button>
          </Dropdown>
        </Container>
      </Container>
    </>
  );
};

export default Navbar;
