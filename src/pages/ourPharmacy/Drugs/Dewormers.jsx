// Drugs photos
import Wormplex0 from "../../../assets/drugs/Wormplex0.jpg";
import Wormplex1 from "../../../assets/drugs/Wormplex1.jpg";
import Wormplex2 from "../../../assets/drugs/Wormplex2.jpg";
import Zentel0 from "../../../assets/drugs/Zentel0.webp";
import Zentel1 from "../../../assets/drugs/Zentel1.jpg";
import Zentel2 from "../../../assets/drugs/Zentel2.jpeg";
import Vermox0 from "../../../assets/drugs/Vermox0.jpeg";
import Vermox1 from "../../../assets/drugs/Vermox1.png";
import Tanzol0 from "../../../assets/drugs/Tanzol0.jpg";
import Tanzol1 from "../../../assets/drugs/Tanzol1.jpg";
import Tanzol2 from "../../../assets/drugs/Tanzol2.jpg";



const DewormersData = [
    {
        id: 0,
        drugName: "Wormplex",
        description: "Wormplex is an anti-parasitic medication designed to treat infections caused by intestinal worms. It typically contains a combination of active ingredients that target a range of common intestinal parasites, including roundworms, hookworms, and tapeworms. The medication is used to eliminate these parasites and relieve associated symptoms such as abdominal pain and discomfort.",
        image0: Wormplex0,
        image1: Wormplex1,
        image2: Wormplex2,
        inStock: true,
        price: "GHS 16.00",
        uses: [
            "Treating intestinal worm infections, including roundworms, hookworms, and tapeworms.",
            "Relieving symptoms associated with worm infestations, such as abdominal pain and digestive issues.",
            "Preventing reinfection by effectively clearing parasites from the gastrointestinal tract.",
            "Providing broad-spectrum anti-parasitic activity for comprehensive treatment.",
        ],
        keyComponents: [
            "Albendazole, mebendazole, or pyrantel pamoate (active ingredients targeting various types of intestinal worms).",
            "Excipients such as microcrystalline cellulose and magnesium stearate (in tablets).",
            "Fillers and stabilizers (in liquid forms or tablets).",
        ],
    },
    {
        id: 1,
        drugName: "Zentel",
        description: "Zentel is an anti-parasitic medication used to treat a variety of worm infections. The active ingredient in Zentel is albendazole, which is effective against a range of intestinal parasites, including roundworms, hookworms, tapeworms, and whipworms. Albendazole works by inhibiting the ability of parasites to absorb glucose, leading to their death. Zentel is commonly used to treat infections such as pinworm, ascariasis, and trichuriasis.",
        image0: Zentel0,
        image1: Zentel1,
        image2: Zentel2,
        inStock: true,
        price: "GHS 22.00",
        uses: [
            "Treating infections caused by intestinal worms, including roundworms, hookworms, and tapeworms.",
            "Managing conditions such as ascariasis, trichuriasis, and enterobiasis (pinworm infection).",
            "Treating more severe parasitic infections, such as neurocysticercosis (pork tapeworm infection in the brain).",
            "Providing broad-spectrum anti-parasitic action to ensure effective treatment of various worm infestations.",
        ],
        keyComponents: [
            "Albendazole (active ingredient).",
            "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
            "Fillers and stabilizers (in oral suspension forms).",
        ],
    },
    {
        id: 2,
        drugName: "Vermox",
        description: "Vermox is an anti-parasitic medication containing mebendazole as its active ingredient. Mebendazole works by inhibiting the ability of intestinal worms to absorb glucose, ultimately leading to their death. Vermox is used to treat a range of worm infections, including roundworms, hookworms, whipworms, and pinworms. It is effective against various common parasitic infections and is available in tablet and suspension forms.",
        image0: Vermox0,
        image1: Vermox1,
        image2: "",
        inStock: true,
        price: "GHS 28.00",
        uses: [
            "Treating infections caused by intestinal worms, such as roundworms, hookworms, and whipworms.",
            "Managing pinworm infections (enterobiasis).",
            "Treating mixed infections involving multiple types of intestinal worms.",
            "Providing a broad-spectrum anti-parasitic treatment to eliminate worms from the gastrointestinal tract.",
        ],
        keyComponents: [
            "Mebendazole (active ingredient).",
            "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
            "Fillers and stabilizers (in oral suspension forms).",
        ],
    },
    {
        id: 3,
        drugName: "Tanzol",
        description: "Tanzol is an anti-parasitic medication containing albendazole as its active ingredient. Albendazole is effective against a wide range of intestinal parasites, including roundworms, hookworms, tapeworms, and whipworms. Tanzol works by interfering with the parasites' ability to absorb glucose, leading to their death. It is used to treat various worm infections and is available in tablet and suspension forms.",
        image0: Tanzol0,
        image1: Tanzol1,
        image2: Tanzol2,
        inStock: true,
        price: "GHS 5.00",
        uses: [
            "Treating infections caused by intestinal worms, such as roundworms, hookworms, and tapeworms.",
            "Managing conditions like ascariasis, trichuriasis, and enterobiasis (pinworm infection).",
            "Treating more severe parasitic infections, such as neurocysticercosis (pork tapeworm infection in the brain).",
            "Providing broad-spectrum anti-parasitic activity to ensure effective treatment of various worm infestations.",
        ],
        keyComponents: [
            "Albendazole (active ingredient).",
            "Excipients like microcrystalline cellulose and magnesium stearate (in tablets).",
            "Fillers and stabilizers (in oral suspension forms).",
        ],
    },
];

export default DewormersData;