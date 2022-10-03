import styled from "styled-components";
import car1 from "../components/assets/icon/car.svg";
import car2 from "../components/assets/icon/Vector.svg";
import car3 from "../components/assets/icon/lock.svg";

function Main() {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <h3>
            Up To <span>40%</span> Off
          </h3>
          <h2>SALE!</h2>
        </div>

        <div className="grid">
          <div className="grid-car">
            <div>
              <img src={car1} alt="" />
            </div>
            <h4>
              Free & Fast <br /> Shipping
            </h4>
          </div>
        </div>

        <div className="grid">
          <div className="grid-car">
            <div>
              <img src={car2} alt="" />
            </div>
            <h4>
              30-days <br /> Free Return
            </h4>
          </div>
        </div>

        <div className="grid">
          <div className="grid-car">
            <div>
              <img src={car3} alt="" />
            </div>
            <h4>
              100% Secure <br /> Shopping
            </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  margin-top: 98px;

  .container {
    background-color: #323232;
    padding: 20px 0 11px 70px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    .grid {
      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 34px;
        color: #ffffff;

        span {
          color: #fdeb37;
        }
      }
      h2 {
        font-weight: 700;
        font-size: 80px;
        line-height: 92px;
        color: #fdeb37;
      }

      .grid-car {
        display: flex;
        align-items: center;
        gap: 17px;
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
        color: #c4c4c4;
      }
    }
  }
`;
