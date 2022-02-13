import logo from "../images/twosomeplace-logo.png";

import twesomeRodeoImageOne from "../images/twesome-rodeo-image-1.svg";
import twesomeRodeoImageTwo from "../images/twesome-rodeo-image-2.svg";
import twesomeRodeoImageThree from "../images/twesome-rodeo-image-3.svg";
import twesomeRodeoImageFour from "../images/twesome-rodeo-image-4.svg";

export const storeDatas = {
  twosomeSeohyeonRodeo: {
    name: "투썸플레이스",
    branch: "서현로데오점",
    logo: logo,
    phone: "02-1234-5678",
    tableNumber: "4",
    chairNumber: "8",
    address: "강남구 봉은사로 4길 20 2층",
    openHours: {
      mon: [900, 2100],
      tue: [900, 2100],
      wed: [900, 2100],
      thu: [900, 2100],
      fri: [900, 2100],
      sat: [900, 2100],
      sun: [900, 2100],
    },
    images: [
      //
      twesomeRodeoImageOne,
      twesomeRodeoImageTwo,
      twesomeRodeoImageThree,
      twesomeRodeoImageFour,
    ],
    menu: {
      drinks: [
        {
          drink: "에스프레소",
          price: "4,900원",
        },
        {
          drink: "아메리카노",
          price: "4,900원",
        },
        {
          drink: "바닐라라떼",
          price: "4,900원",
        },
        {
          drink: "카페 모카",
          price: "4,900원",
        },
      ],
      bakery: [
        {
          drink: "쿠앤크 크림치즈 조각 케익",
          price: "6,000원",
        },
        {
          drink: "얼그레이 조각 케익",
          price: "6,000원",
        },
        {
          drink: "당근 조각 케익",
          price: "6,500원",
        },
      ],
    },
  },
};
