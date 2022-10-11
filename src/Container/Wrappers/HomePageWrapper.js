import styled from "styled-components";

const HomePageWrapper = styled.div`
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

  .section-2 {
    margin-bottom: 100px;
    .cards {
      .col-2 {
        margin-right: 110px;
      }
    }
    .infoCard {
      margin-top: 60px;

      .booksFintion {
        font-family: "Rozha One", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 71px;
        text-align: center;

        color: #0b0b0b;
      }
    }
    .card {
      width: 320px;
      text-align: start;
      border-radius: 20px;
      .card-body {
        p {
          color: #8F8F8F;
        }
      }
      .price {
        color: #fe8537;
      }
      .btn {
        background: #14668c;
        border-radius: 16px;
        color: white;
      }
    }
  }
`;
export default HomePageWrapper;
