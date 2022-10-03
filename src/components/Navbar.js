import styled from "styled-components";
import insta from "../components/assets/icon/ins.svg";
import twet from "../components/assets/icon/tweet.svg";
import meta from "../components/assets/icon/meta.svg";
import user from "../components/assets/icon/user.svg";
import buy from "../components/assets/icon/Buy.svg";
import heart from "../components/assets/icon/Heart.svg";
import card1 from "../components/assets/img/card1.png";
import card2 from "../components/assets/img/card2.png";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav">
        <div className="nav-network">
          <a href="#">
            <img src={insta} alt="" />
          </a>
          <a href="#">
            <img src={twet} alt="" />
          </a>
          <a href="#">
            <img src={meta} alt="" />
          </a>
        </div>
        <div className="nav-user">
          <img src={user} alt="" />
          <a href="#">My account</a>
        </div>
      </div>

      <div className="navbar-header">
        <div className="logo">
          <a href="/">Krconex</a>
        </div>
        <div className="routes">
          <a className="men" href="#">
            Men
          </a>
          <a href="#">Women</a>
          <a href="#">Shipping</a>
          <a href="#">Clearance</a>
          <a href="#">Lifestyle</a>
          <a href="#">Contact</a>
          <a href="#">Articles</a>
        </div>
        <div className="add-to-bag">
          <form>
            <input placeholder="search" type="search" name="search" />
          </form>
          <div className="btn">
            <button>
              <img src={buy} alt="" />
              <div className="buy">3</div>
            </button>
            <button>
              <img src={heart} alt="" />
              <div className="heart">8</div>
            </button>
          </div>
        </div>
      </div>

      <div className="nav-card">
        <div className="card-1">
          <img src={card1} alt="" />
          <button className="shop">SHOP FOR HER</button>
        </div>
        <div className="card-2">
          <img src={card2} alt="" />
          <button className="shop">SHOP FOR HER</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  height: 100vh;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #323232;
    padding: 9px 23px 6px 23px;

    .nav-network {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .nav-user {
      display: flex;
      align-items: center;
      gap: 9px;
      img {
        width: 18px;
      }
      a {
        font-size: 12px;
        line-height: 14px;
        color: #c2c2c2;
        text-decoration: none;
      }
    }
  }

  .navbar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 55px 10px 32px;
    background: #f7f7f7;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    margin-top: 8px;
    .logo {
      a {
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
        color: #323232;
        text-decoration: none;
      }
    }

    .routes {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-left: 80px;

      a {
        font-style: normal;
        font-size: 20px;
        line-height: 23px;
        color: #323232;
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
          transform: translateY(-2px);
        }
      }
      .men {
        font-weight: 700;
      }
    }
    .add-to-bag {
      display: flex;
      align-items: center;
      gap: 50px;
      form {
        input {
          width: 227px;
          height: 38.87px;
          background: rgba(229, 229, 229, 0.88);
          border-radius: 1000px;
          border: none;
          outline: none;
          padding: 0 15px 0 15px;
          font-style: normal;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.3);
        }
      }

      .btn {
        display: flex;
        gap: 18px;
        button {
          border: none;
          background-color: transparent;
          position: relative;
          .buy {
            width: 20px;
            height: 20px;
            background-color: #fdeb37;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -8px;
            right: 0;
          }

          .heart {
            width: 20px;
            height: 20px;
            background-color: #fdeb37;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -8px;
            right: 0;
          }
          img {
            width: 23px;
            height: 24px;
          }
        }
      }
    }
  }

  .nav-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 7px;

    img {
      width: 100%;
      height: 693px;
    }

    .card-1 {
      position: relative;
      .shop {
        position: absolute;
        top: 50%;
        right: 64px;
        width: 169px;
        height: 59px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #323232;
        border: none;
        cursor: pointer;
      }
    }

    .card-2 {
      position: relative;
      .shop {
        position: absolute;
        top: 50%;
        right: 64px;
        width: 169px;
        height: 59px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #fff;
        border: none;
        cursor: pointer;
        background: #323232;
      }
    }
  }
`;
