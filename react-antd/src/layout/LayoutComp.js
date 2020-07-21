// snippet : rafce
import React from "react";
// for css
import "./layout.css";
// for routing
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
// import icon
import {
  UserOutlined,
  RightSquareOutlined,
  SketchOutlined,
  //
  DatabaseOutlined,
  CommentOutlined,
  StopTwoTone,
  NodeCollapseOutlined,
  //
  ColumnHeightOutlined,
  LineHeightOutlined,
} from "@ant-design/icons";
import ButtonComp from "../general/button/ButtonComp";
import IconComp from "../general/icon/IconComp";
import CommentComp from "../dataDisplay/comment/CommentComp";
import CarouselComp from "../dataDisplay/carousel/CarouselComp";
import CollapseComp from "../dataDisplay/collapse/CollapseComp";
import AnchorComp from "../other/anchor/AnchorComp";

// snippet : cp
// Layout consist of Header, Sider & Content
const { Header, Sider, Content } = Layout;
// Menu consist of SubMenu
// snippet : cp
const { SubMenu } = Menu;

const LayoutComp = () => {
  return (
    //   implement routing
    <BrowserRouter>
      {/* implement Layout Header */}
      <Layout>
        <Header>
          {/* implement mode & theme */}
          <Menu mode="horizontal" theme="dark">
            <Menu.Item>Dashboard</Menu.Item>
            <Menu.Item>Menu</Menu.Item>
            <Menu.Item>User Profile</Menu.Item>
          </Menu>
        </Header>
      </Layout>

      {/* implment Layout Sider */}
      {/* implement view to consume web page height */}
      <Layout className="view">
        <Sider>
          {/* for General */}
          {/* implement theme & mode */}
          <Menu mode="inline" theme="dark">
            {/* implement title & icon */}
            <SubMenu icon={<UserOutlined />} title="General">
              <Menu.Item icon={<RightSquareOutlined />}>
                {/* invoke link to component */}
                <Link to="/button">Button</Link>
              </Menu.Item>
              <Menu.Item icon={<SketchOutlined />}>
                {/* invoke link to component */}
                <Link to="/icon">Icon</Link>
              </Menu.Item>
              <Menu.Item>Typography</Menu.Item>
            </SubMenu>

            {/* for Data Display */}
            {/* implement title & icon */}
            <SubMenu icon={<DatabaseOutlined />} title="Data Display">
              <Menu.Item icon={<CommentOutlined />}>
                {/* invoke link to component */}
                <Link to="/comment">Comment</Link>
              </Menu.Item>
              {/* make the icon rotate using spin property */}
              <Menu.Item icon={<StopTwoTone spin />}>
                {/* invoke link to component */}
                <Link to="/carousel">Carousel</Link>
              </Menu.Item>
              <Menu.Item icon={<NodeCollapseOutlined />}>
                {/* invoke link to component */}
                <Link to="/collapse">Collapse</Link>
              </Menu.Item>
            </SubMenu>

            {/* for Other */}
            {/* implement title & icon */}
            <SubMenu icon={<ColumnHeightOutlined />} title="Other">
              <Menu.Item icon={<LineHeightOutlined />}>
                {/* invoke link to component */}
                <Link to="/anchor">Anchor</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        {/* implement Layout Content */}
        <Layout>
          <Content style={{ background: "black" }}>
            {/* invoking display of selected url component */}

            {/* for General */}
            <Route path="/button" component={ButtonComp} />
            <Route path="/icon" component={IconComp} />

            {/* for Data Display */}
            <Route path="/comment" component={CommentComp}></Route>
            <Route path="/carousel" component={CarouselComp}></Route>
            <Route path="/collapse" component={CollapseComp}></Route>

            {/* for other */}
            <Route path="/anchor" component={AnchorComp}></Route>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default LayoutComp;
