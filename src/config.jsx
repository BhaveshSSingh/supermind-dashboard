import { SiTraefikproxy } from "react-icons/si";
import { HiOutlineLink, HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";

export const appName = "Airnow";

export const manageOptions = [
  { name: "Proxy", logo: <SiTraefikproxy /> },
  { name: "Balance", logo: <HiOutlineBanknotes /> },
  { name: "Online check", logo: <BsGlobe /> },
  { name: "Affiliate system", logo: <HiOutlineLink /> },
];

export const supportOptions = [
  { name: "Tickets", logo: <CgNotes /> },
  { name: "FAQ", logo: <HiOutlineSpeakerphone /> },
];
