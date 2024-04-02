import { CardType } from "@/types/Card";

export const items: CardType[] = [
    {
        slug: "mobile-apps",
        title: "Mobile Apps",
        subTitle: "Get your own mobile app ",
        amount: 100,
        imageUrl: "/card-images/image1.png",
        color: "#0A488F",
    },
    {
        slug: "bi",
        title: "BI",
        subTitle: "Create Dashboards ",
        amount: 100,
        imageUrl: "/card-images/image2.png",
        color: "#579064",
    },
    {
        slug: "hr",
        title: "HR",
        subTitle: "Talents",
        amount: 100,
        imageUrl: "/card-images/image3.png",
        color: "#950000",
    },
    {
        slug: "operations",
        title: "Operations",
        subTitle: "ERP Management",
        amount: 100,
        imageUrl: "/card-images/image4.png",
        color: "#8F6C0A",
    },
] as const;