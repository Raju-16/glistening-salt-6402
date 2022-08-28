import "antd/dist/antd.css";
import "./Navbar.css";
import { Box, Button, Container } from "@chakra-ui/react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const skin101 = (
  <div
    style={{
      display: "flex",
      margin: "1rem",
      justifyContent: "space-around",
      width: "100%",
      height: "30vh",
      background: "white",
    }}
  >
    <div style={{ margin: "1rem" }}>
      <Box
        width="200px"
        height="150px"
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://static.thcdn.com/navigation/208/2021/05/original-blog-3-20210523-20210525.jpg"
          alt=""
        />
        <h2 style={{ padding: ".5rem", textAlign: "center" }}>
          Answer to your skin care questions
        </h2>
      </Box>
    </div>

    <div style={{ margin: "1rem" }}>
      <Box
        width="200px"
        height="150px"
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://static.thcdn.com/navigation/208/2021/05/original-blog-2-20210523-20210525.jpg"
          alt=""
        />
        <h2 style={{ padding: ".5rem", textAlign: "center" }}>
          Become a skin expert
        </h2>
      </Box>
    </div>

    <div style={{ margin: "1rem" }}>
      <Box
        width="200px"
        height="150px"
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <img
          style={{ width: "200px", height: "150px" }}
          src="https://static.thcdn.com/navigation/208/2021/05/original-blog-1-20210523-20210525.jpg"
          alt=""
        />
        <h2 style={{ padding: ".5rem", textAlign: "center" }}>
          How-tos and more{" "}
        </h2>
      </Box>
    </div>
  </div>
);

const TannerGoods = (
  <div
    style={{
      display: "flex",
      margin: "1rem",
      justifyContent: "space-around",
      width: "100%",
      height: "50vh",
      background: "",
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
      <Container
        pt="2rem"
        pb="1rem"
        margin={"auto"}
        display="flex"
        maxW="container.2xl"
      >
        <Container maxW="container.2xl" display="flex">
          <Dropdown
            style={{
              width: "100%",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
            }}
            overlay={TannerGoods}
            placement="bottom"
          >
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
              //
            >
              Brands
            </Button>
          </Dropdown>

          <Dropdown overlay={SummerShop} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Summer Shop
            </Button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Browse By
            </Button>
          </Dropdown>

          <Dropdown overlay={TannerGoods} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Bestsellers
            </Button>
          </Dropdown>

          <Dropdown overlay={MazamaWares} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Skin Care
            </Button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Makeup
            </Button>
          </Dropdown>

          <Dropdown overlay={TannerGoods} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
              onClick={() => navigate("/products")}
            >
              Hair Care
            </Button>
          </Dropdown>

          <Dropdown overlay={MazamaWares} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Bath & Body
            </Button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Tools & Devices
            </Button>
          </Dropdown>

          <Dropdown overlay={GiftsSets} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Gifts & Sets
            </Button>
          </Dropdown>

          <Dropdown overlay={MazamaWares} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              BeautyFIX
            </Button>
          </Dropdown>

          <Dropdown overlay={FeaturedCollections} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Offers
            </Button>
          </Dropdown>
          <Dropdown overlay={NewArrival} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              New Arrivals
            </Button>
          </Dropdown>
          <Dropdown overlay={skin101} placement="bottom">
            <Button
              w="100%"
              borderRadius={"none"}
              variant="ghost"
              size="sm"
              fontWeight={400}
              fontSize={"medium"}
              type="link"
            >
              Skin 101
            </Button>
          </Dropdown>
        </Container>
      </Container>
    </>
  );
};

export default Navbar;
