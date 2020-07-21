// snippet : rafce
import React from "react";
// import css
import "./button.css";
import { Button, Tooltip, Dropdown, Menu } from "antd";
// for icon
import {
  SearchOutlined,
  DownOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const ButtonComp = () => {
  // create menu for Action button
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item>1st Item</Menu.Item>
      <Menu.Item>2nd Item</Menu.Item>
      <Menu.Item>3rd Item</Menu.Item>
    </Menu>
  );

  //   snippet : func
  function handleMenuClick(e) {
    console.log("click", e); //click {key: "item_0", keyPath: Array(1), item: MenuItem, domEvent: Class}
    // other e properties
    console.log("key", e.key); //key item_0
    console.log("item", e.item); //item MenuItem {props: {…}, context: {…}, refs: {…}, updater: {…}, onKeyDown: ƒ, …}
  }

  return (
    <div>
      {/* Type */}
      <h3 style={{ color: "white" }}>Type</h3>
      {/* implement spaces between buttons */}
      <Button type="primary" className="spaces">
        Primary
      </Button>
      <Button id="spaces">Default</Button>
      <Button type="dashed" className="spaces">
        Dashed
      </Button>
      <Button type="link" className="spaces">
        Link
      </Button>

      {/* Icon */}
      <h3 style={{ color: "white" }}>Icon</h3>
      {/* implement Tooltip title */}
      <Tooltip title="search">
        {/* implement type, shape, icon & spaces */}
        <Button
          icon={<SearchOutlined />}
          shape="circle"
          type="primary"
          className="spaces"
        ></Button>
      </Tooltip>
      {/* implement type, icon & spaces */}
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      {/* implement Tooltip title */}
      <Tooltip title="search">
        {/* implement type, shape, icon & spaces */}
        <Button
          icon={<SearchOutlined />}
          shape="circle"
          type="dashed"
          className="spaces"
        ></Button>
      </Tooltip>
      {/* implement type, icon & spaces */}
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>

      {/* Ghost */}
      <h3 style={{ color: "white" }}>Ghost</h3>
      {/* implement ghost, type & spaces */}
      <Button ghost type="primary" className="spaces">
        Primary
      </Button>
      <Button ghost className="spaces">
        Default
      </Button>
      <Button type="dashed" ghost className="spaces">
        link
      </Button>
      <Button type="link" ghost className="spaces">
        link
      </Button>

      {/* Multiple */}
      <h3 style={{ color: "white" }}>Multiple</h3>
      {/* invoke overlay which is connected to menu above */}
      <Dropdown overlay={menu}>
        {/* invoke spaces & ghost*/}
        <Button ghost className="spaces">
          Actions <DownOutlined />
        </Button>
      </Dropdown>

      {/* Danger */}
      <h3 style={{ color: "white" }}>Danger</h3>
      {/* implement danger, type & spaces */}
      <Button type="primary" danger className="spaces">
        Primary
      </Button>
      <Button danger className="spaces">
        Default
      </Button>
      <Button type="dashed" danger className="spaces">
        link
      </Button>
      <Button type="link" danger className="spaces">
        link
      </Button>

      {/* Disabled */}
      <h3 style={{ color: "white" }}>Disabled</h3>
      {/* implement disabled, type & spaces */}
      <Button type="primary" disabled className="spaces">
        Primary
      </Button>
      <Button disabled className="spaces">
        Default
      </Button>
      <Button type="dashed" disabled className="spaces">
        link
      </Button>
      <Button type="link" disabled className="spaces">
        link
      </Button>

      {/* Loading */}
      <h3 style={{ color: "white" }}>Loading</h3>
      {/* implement laoding, type & spaces */}
      <Button type="primary" loading className="spaces">
        Loading
      </Button>
      <Button type="primary" loading className="spaces" size="small">
        Loading
      </Button>
      <Button loading icon={<PoweroffOutlined />} className="spaces"></Button>

      {/* Size */}
      <h3 style={{ color: "white" }}>Size</h3>
      {/* implement size, type & spaces */}
      <Button type="primary" size="small" className="spaces">
        small
      </Button>
      <Button type="primary" className="spaces">
        Default
      </Button>
      <Button type="primary" className="spaces" size="large">
        Large
      </Button>
    </div>
  );
};

export default ButtonComp;
