import styled from "styled-components";

const MainWrapper = styled.div`
  .section-1 {
    .homePage {
      .homeTitle {
        position: absolute;
        left: 150px;
        top: 330px;
        width: 80%;
        font-family: "Rozha One", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        line-height: 142px;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 7px 7px rgba(0, 0, 0, 0.7);
      }
    }
  }
  .MainPage {
    margin-bottom: 100px;
    .infoCard {
      margin-top: 60px;
      font-family: "Rozha One", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 71px;
      /* identical to box height */
      text-align: center;

      color: #0b0b0b;
    }
    .col-2 {
      margin-right: 110px;
    }
    .card {
      width: 320px;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
      .card-img-top {
        width: 40px;
      }
      .card-text {
        font-family: "Rozha One", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 37px;
        text-align: center;

        color: #0b0b0b;
      }
    }
  }
`;

export default MainWrapper;
