// snippet : rafce
import React from "react";

//import icons
import {
  UpCircleTwoTone,
  DownCircleTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PlayCircleTwoTone,
  RightSquareTwoTone,
  LeftSquareTwoTone,
  //
  AccountBookTwoTone,
  CustomerServiceTwoTone,
  DollarCircleTwoTone,
  SecurityScanTwoTone,
  PrinterTwoTone,
  MehTwoTone,
  PushpinTwoTone,
  //
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  StockOutlined,
  FundOutlined,
  //
  AndroidFilled,
  ChromeFilled,
  CodeSandboxCircleFilled,
  GithubFilled,
  TaobaoCircleFilled,
  Html5Filled,
  WindowsFilled,
} from "@ant-design/icons";
import { Row, Col, Card, Divider } from "antd";

const IconComp = () => {
  return (
    <div>
      <Divider></Divider>
      {/* Directional  */}
      {/* implement icon inside card and card inside grid with divider */}
      <Divider orientation="left" style={{ color: "white" }}>
        Directional Icons
      </Divider>
      <Row gutter={16}>
        {/* invoke margin left */}
        <Col span={2} style={{ marginLeft: 24 }}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <UpCircleTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <DownCircleTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <LeftCircleTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>
      </Row>

      {/* for next Row */}
      <Row gutter={16} style={{ marginTop: 12 }}>
        <Col span={2} style={{ marginLeft: 24 }}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <RightCircleTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <PlayCircleTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <RightSquareTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <LeftSquareTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>
      </Row>

      {/* Application */}
      {/* implement icon inside card and card inside grid with divider */}
      <Divider orientation="left" style={{ color: "white" }}>
        Application Icons
      </Divider>
      <Row gutter={16}>
        {/* invoke margin left */}
        <Col span={2} style={{ marginLeft: 24 }}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <AccountBookTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <CustomerServiceTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <DollarCircleTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>
      </Row>

      {/* for next Row */}
      <Row gutter={16} style={{ marginTop: 12 }}>
        <Col span={2} style={{ marginLeft: 24 }}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <SecurityScanTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <PrinterTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <MehTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card style={{ background: "black" }}>
            {/* invoke icon with increased size   */}
            <PushpinTwoTone style={{ fontSize: "26px" }} />
          </Card>
        </Col>
      </Row>

      {/* Data */}
      <Divider orientation="left" style={{ color: "white" }}>
        Data Icons
      </Divider>
      <Row gutter={16}>
        {/* invoke margin left */}
        <Col span={2} style={{ marginLeft: 24 }}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <AreaChartOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <PieChartOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <BarChartOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>
        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <LineChartOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <DotChartOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <StockOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <FundOutlined style={{ fontSize: "26px" }} />
          </Card>
        </Col>
      </Row>

      {/* Brand and Logos */}
      <Divider orientation="left" style={{ color: "white" }}>
        Brand and Logos
      </Divider>
      <Row gutter={16}>
        {/* invoke margin left */}
        <Col span={2} style={{ marginLeft: 24 }}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <GithubFilled style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <TaobaoCircleFilled style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <Html5Filled style={{ fontSize: "26px" }} />
          </Card>
        </Col>
        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <CodeSandboxCircleFilled style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <AndroidFilled style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <WindowsFilled style={{ fontSize: "26px" }} />
          </Card>
        </Col>

        <Col span={2}>
          {/* invoke card */}
          <Card>
            {/* invoke icon with increased size   */}
            <ChromeFilled style={{ fontSize: "26px" }} />
          </Card>
        </Col>
      </Row>

      <Divider></Divider>
    </div>
  );
};

export default IconComp;
