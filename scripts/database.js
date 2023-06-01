// declare a variable database that will hold the value of an Object
// inside of that Object, 
// begin an array of fish that will contain properties of the fish object array:
// name, species , length , nickName , location, diet 

const database = {
    fish: [
        {
            image: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRb0-_yEyjO3KQK8zaWkIV96SFrLbHAYn0wxL65n1AKpK-t-Xsc`,
            name: "Tangerine Darter",
            species: "Percina Aurantiaca",
            length: "7 inches",
            nickName: "Fishie Boi",
            location: "Upper Tennessee River",
            food: "Aquatic insects"
        },
        {
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGirXhALqsLsRqzr6SlOJrVt1-2yermpYPEJDLZkfa&s`,
            name: "Bronze Darter",
            species: "Percina Palmaris",
            length: "4 inches",
            nickName: "Jeffrey",
            location: "Coosa and Tallapoosa River Systems",
            food: "Aquatic insects"
        },
        {
            image: `https://tnacifin.com/wp-content/uploads/elementor/thumbs/cyprinella_callistia_alabama_shiner_0-p4zkz7s728mw35r68bovw1vlo8erjcibzyygmb6o3w.jpg`,
            name: "Alabama Shiner",
            species: "Cyprinella Callistia",
            length: "5 inches",
            nickName: "Sir Fishington",
            location: "Mobile Basin",
            food: "Aquatic Insects"
        },
        {
            image: `https://a-z-animals.com/media/2023/01/iStock-1404933563.jpg`,
            name: "Yellowtail Snapper",
            species: "Ocyurus Chrysurus",
            length: "34 inches",
            nickName: "DatFishDude",
            location: "North American Coast of Atlantic Ocean",
            food: "Crabs, shrimps, worms, smaller fish"
        },
        {
            image: `https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2017/05/Abudefduf-saxatilis-06.jpg`,
            name: "Sergeant Major",
            species: "Abudefduf Saxatilis",
            length: "9 inches",
            nickName: "Fishy McFishington",
            location: "Atlantic Ocean, Gulf of Mexico, Carribean",
            food: "Algea, crustaceans, fish larvae"
        },
        {
            image: `https://upload.wikimedia.org/wikipedia/commons/0/06/Phractocephalus_hemioliopterus_2012_G1.jpg`,
            name: "Redtail Catfish",
            species: "Phractocephalus Hemioliopterus",
            length: "4 Feet",
            nickName: "The Artist Formerly Know as Fish",
            location: "South America, Amazon and Orinoco Basins",
            food: "Fish, invertebrates, fallen fruit"
        },
        {
            image: `https://www.wildtrout.org/imager/general/111/rainbow_trout_4d70ad715b0bdc212e98d22bb9d8106e.jpg`,
            name: "Rainbow Trout",
            species: "Oncorhynchus Mykiss",
            length: "20-24 inches",
            nickName: "Phish",
            location: "North America / North Mexico",
            food: "Insects, plankton, crustaceans, fish, eggs"
        }
    ]
}

// export the module
export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}
