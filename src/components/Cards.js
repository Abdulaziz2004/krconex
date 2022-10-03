import styled from "styled-components";
import card3 from "../components/assets/img/card3.png";
import card4 from "../components/assets/img/card4.png";
import card5 from "../components/assets/img/card5.png";
import card6 from "../components/assets/img/card6.png";

function Cards() {
  return (
    <Wrapper>
      <div class="grid-container">
        <div class="item2">
          <img src={card3} alt="" />
          <div className="item-text">ACCESSORIES</div>
        </div>
        <div class="item3">
          <img src={card5} alt="" />
          <div className="item-text">NEW ARRIVALS</div>
        </div>
        <div class="item4">
          <img src={card6} alt="" />
          <div className="item-text">MEN’S JEANS</div>
        </div>
        <div class="item5">
          <img src={card4} alt="" />
          <div className="item-text">SUMMER SALE</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cards;

const Wrapper = styled.div`
  padding: 84px 139px 0 139px;

  .item2 {
    grid-area: menu;
    position: relative;

    .item-text {
      width: 169px;
      height: 54.42px;
      left: 268px;
      top: 1506.13px;
      background: #fdeb37;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 83%;
      left: 100px;
      cursor: pointer;
    }
  }
  .item3 {
    grid-area: main;
    position: relative;

    .item-text {
      width: 169px;
      height: 54.42px;
      left: 268px;
      top: 1506.13px;
      background: #fdeb37;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 67%;
      left: 150px;
      cursor: pointer;
    }
  }
  .item4 {
    grid-area: right;
    position: relative;

    .item-text {
      width: 169px;
      height: 54.42px;
      left: 268px;
      top: 1506.13px;
      background: #fdeb37;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 67%;
      left: 150px;
      cursor: pointer;
    }
  }
  .item5 {
    grid-area: footer;
    position: relative;

    .item-text {
      width: 169px;
      height: 54.42px;
      left: 268px;
      top: 1506.13px;
      background: #fdeb37;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 67%;
      left: 42%;
      cursor: pointer;
    }
  }

  .grid-container {
    display: grid;
    grid-template-areas:
      "menu footer footer footer footer footer"
      "menu main main main right right";
    gap: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
`;
