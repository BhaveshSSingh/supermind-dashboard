import { SiTraefikproxy } from "react-icons/si";
import { HiOutlineLink, HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";
import paypalLogo from "./assets/paypal-logo.png";
import masterCardLogo from "./assets/Master-Card-logo.png";
import webMoneyLogo from "./assets/webmoney-logo.png";
import qiwiLogo from "./assets/qiwi-logo.png";
import transferWiseLogo from "./assets/wise-transferwise-logo.png";

export const appName = "Airnow";

export const manageOptions = [
  { name: "Proxy", logo: <SiTraefikproxy color="var(--light-blue)" /> },
  { name: "Balance", logo: <HiOutlineBanknotes color="var(--light-blue)" /> },
  { name: "Online check", logo: <BsGlobe color="var(--light-blue)" /> },
  {
    name: "Affiliate system",
    logo: <HiOutlineLink color="var(--light-blue)" />,
  },
];

export const supportOptions = [
  { name: "Tickets", logo: <CgNotes color="var(--light-blue)" /> },
  { name: "FAQ", logo: <HiOutlineSpeakerphone color="var(--light-blue)" /> },
];

export const tableData = [
  {
    time: "17 Feb 2020, 16:30",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png",
    name: "Mastercard",
    pending: "Pending",
    amount: "-400.00$",
  },
  {
    time: "14 Feb 2020, 12:39",
    img: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
    name: "PayPal",
    pending: "Pending",
    amount: "-250.00$",
  },
  {
    time: "12 Feb 2020, 09:45",
    img: "https://w7.pngwing.com/pngs/408/844/png-transparent-qiwi-ps-yandex-money-llc-e-commerce-payment-system-others-text-service-orange-thumbnail.png",
    name: "Mastercard",
    pending: "Done",
    amount: "+1000.00$",
  },
  {
    time: "10 Feb 2020, 12:39",
    img: "https://www.wmtransfer.com/img/icons/wmlogo_flat_256.png?1677655696",
    name: " Webmoney",
    pending: "Pending",
    amount: "-250.00$",
  },
];
