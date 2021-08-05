import homeSvg from "@assets/images/icons/home.svg";
import dawSvg from "@assets/images/icons/daw.svg";
import priceSvg from "@assets/images/icons/price.svg";
import valutSvg from "@assets/images/icons/vault.svg";
import voteSvg from "@assets/images/icons/vote.svg";

const Route = [
    {
        id: "home",
        title: "Home",
        icon: homeSvg,
        // navLink: "/dashboard",
    },
    {
        id: "daw",
        title: "DAW",
        icon: dawSvg,
        // navLink: "/daw",
    },
    {
        id: "prices",
        title: "Prices",
        icon: priceSvg,
        // navLink: '/my-match'
        // navLink: "/prices",
    },
    {
        id: "vault",
        title: "Vault",
        icon: valutSvg,
        // navLink: '/find-my-match'
        // navLink: "/vault",
    },
    {
        id: "vote",
        title: "Vote",
        icon: voteSvg,
        // navLink: '/wallet'
        // navLink: "/vote",
    },
    {
        id: "stake",
        title: "Stake",
        icon: voteSvg,
        // navLink: '/wallet'
        navLink: "/",
    },
];

export default Route;
