import { SiTraefikproxy } from "react-icons/si";
import { HiOutlineLink, HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";

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
