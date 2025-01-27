import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SYOC = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
 const [formData, setFormData] = useState({
    ownershipType: "",
    flexDevelopmentStage: "",
    goalsForSpace: "",
    coworkingStyles: [],
    city: "",
    microMarket: "",
    otherCity: "",
    area: "",
    marketRate: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    domain: "",
  });

 const cityMicroMarketMap = {
    Ahemdabad: [
      "Ashok Vatika",
      "Ashram Road",
      "Bodakdev",
      "Bopal",
      "Cg Road",
      "Chanakyapuri",
      "Ellisbridge",
      "Hebatpur",
      "Jodhpur Village",
      "Makarba",
      "Memnagar",
      "Mithakhali",
      "Motera",
      "Naranpura",
      "Navrangpura",
      "Nehru Nagar",
      "Netaji Road",
      "Nikol",
      "Panjrapole",
      "Prahlad Nagar",
      "Ramdev Nagar",
      "Ratnanjali Square, Jodhpur, Satellite",
      "Sarkhej",
      "Satellite",
      "Science City",
      "Science City Road",
      "SG Highway",
      "Shyamal",
      "Shyamal Cross Roads",
      "Sindhu Bhavan Road",
      "Sola",
      "South Bopal",
      "Subhash Society, Naranpura",
      "Thaltej",
      "Thaltej Shilaj Road",
      "Vadiwadi",
      "Vastrapur",
      "Vejalpur",
      "Vijay Cross Road",
      "Vikram Nagar",
      "Vishwabharti Society",
    ],
    Bangalore: [
      "10th A Cross Road",
      "15th Cross Road",
      "1st R Block",
      "24th Main Road",
      "38th Cross",
      "80 Feet Road",
      "Adugodi",
      "AECS Layout",
      "Akkithimana Halli",
      "Akshaya Nagar",
      "Anchepet",
      "Arakere Bannerghatta Road",
      "Ashok Nagar",
      "Ashwath Nagar",
      "Ashwini Layout",
      "Banashankari",
      "Bannerghatta Road",
      "Basavanagudi",
      "Behind Indiranagar Metro Street",
      "Bellandur",
      "Bellary Road",
      "Bennigana Halli",
      "Bilekahalli",
      "Binny Mill Road",
      "Bommanahalli",
      "Bommasandra",
      "Brigade Road",
      "Brookefield",
      "BTM Layout",
      "Byappanahalli",
      "C V Raman Nagar",
      "Central",
      "Challaghatta",
      "Chamarajpet",
      "Chikkabellandur",
      "Church Street",
      "Cooke Town",
      "Cunningham Road",
      "Dickenson Road",
      "Doddanekundi",
      "Domlur",
      "Dooravani Nagar",
      "Eden Park",
      "Electronic City",
      "Embassy Quest",
      "EPIP Industrial Area",
      "EPIP Zone",
      "Eshwara Layout",
      "Gajendra Nagar",
      "Galaxy",
      "Ganganagar",
      "Garvebhavi Palya",
      "Geetha Colony",
      "Grace Platina",
      "HAL 2nd Stage",
      "Hebbal",
      "Hennur",
      "Hennur Gardens",
      "Hoodi",
      "Hosur",
      "Hosur Road",
      "Hoysala Nagar",
      "HRBR Layout",
      "HRBR Layout 1st Block",
      "HSR Layout",
      "Indiranagar",
      "Infantry Road",
      "ITPL Main Road",
      "Jakkuru",
      "Jayanagar",
      "Jayanagar East",
      "Jeevan Bhima Nagar",
      "Jeevan Bima Nagar",
      "Jogupalya",
      "JP Nagar",
      "JP Nagar 7th Phase",
      "Kadubeesanahalli",
      "Kaikondrahalli",
      "Kalasipalya",
      "Kalyan Nagar",
      "Kasturi Nagar",
      "Kengeri Upanagar",
      "KHB Colony",
      "Kodandaramapura",
      "Kodihalli",
      "Konanakunte",
      "Koramangala",
      "Koramangala Extension",
      "KR Puram",
      "Kudlu Gate",
      "Kudlu Road",
      "Kumara Park West",
      "Lakshmi Arcade",
      "Lal Bagh Main Road",
      "Lexington Towers",
      "Mahadevapura",
      "Mahaganapathi Nagar",
      "Mahalakshmipuram",
      "Malleshwaram",
      "Marathahalli",
      "Marenahalli",
      "Maruthi Sevanagar",
      "MG Road",
      "Millers Road",
      "Murugeshpalya",
      "Nagarabhavi",
      "Nagavara",
      "Nallurahalli",
      "Nanjappa Garden",
      "New BEL Road",
      "NGEF East",
      "North Damodaran Road",
      "O Shaughnessy Road",
      "Off Varthur Whitefield",
      "Old Airport Road",
      "Outer Ring Road",
      "Pagariya Plaza",
      "Prestige Central",
      "Prestige Cube",
      "Puttappa Layout",
      "Raheja Towers",
      "Rajajinagar",
      "Rajesh Chambers",
      "Ramanagara",
      "Residency Road",
      "Richmond Town",
      "RMV Extension",
      "Sadanandanagar",
      "Sadashivanagar",
      "Sahakar Nagar",
      "Sampangiram Nagar",
      "Sanjay Nagar",
      "Sarjapura",
      "Sector 4",
      "Seshadripuram",
      "SG Palya",
      "Shantinagar",
      "Shivaji Nagar",
      "Singasandra",
      "Sirur Park Road",
      "Sivanchetti Gardens",
      "Stage 1",
      "Subramanyanagar",
      "Sudhama Nagar",
      "Tasker Town",
      "Tata Silk Farm",
      "Thanisandra Main Road",
      "The Pavilion",
      "Ulsoor",
      "Uttarahalli Hobli",
      "Varthur",
      "Vasanth Nagar",
      "Venkatala",
      "Victoria Layout",
      "Vijayanagar",
      "Vittal Mallya Road",
      "Whitefield",
      "Wilson Garden",
      "Yelahanka",
      "Yellappa Chetty Layout",
    ],
    Chandigarh: [
      "Bridge Market",
      "Industrial Area",
      "Industrial Area Phase I",
      "Madhya Road",
      "Mohali",
      "Motiaz Royal Business Park, Zirakpur",
      "NH 21",
      "Opp Hyatt Regency",
      "Panchkula",
      "SCO 170-12",
      "Sector 17",
      "Sector 26",
      "Sector 34",
      "Sector 34A",
      "Sector 37",
      "Sector 73",
      "Sector 74",
      "Sector 82",
      "Sector 91",
      "Zirakpur",
    ],
    Chennai: [
      "141 Old Mahabalipuram Road",
      "4th Cross Street",
      "5323 3rd Main Road",
      "64 Cathedral Road, Gopalapuram",
      "Alandur",
      "Alwarpet",
      "Ambattur",
      "Ambattur Industrial Area",
      "Ambattur Industrial Estate",
      "Ambedkar Nagar, Guindy",
      "Aminjikarai",
      "Ananda Road",
      "Anna Nagar",
      "Anna Nagar West",
      "Anna Salai",
      "Anna Salai, Nandanam",
      "Anna Salai, Nizara Bonanza",
      "Arumbakkam",
      "Ashok Nagar",
      "Balaji Nagar",
      "Karunanidhi Nagar, Perungudi",
      "Kilpauk",
      "Kilpauk 2nd Floor",
      "Kodambakkam",
      "Kolathur",
      "Kottivakkam",
      "Kotturpuram",
      "Maduravoyal",
      "Mambalam",
      "Mogappair East",
      "Mount Road",
      "Mylapore",
      "Navalur",
      "Nehru Nagar, Perungudi",
      "No 28 Olympia Teknos, 5th Floor, SIDCO Estate, Guindy",
      "Nungambakkam",
      "Nungambakkam High Road",
      "Olympia National Tower",
      "Pallavaram",
      "Parthasarathi Puram",
      "Perungudi",
      "Poonamallee",
      "Poonamallee High Road",
      "Porur",
      "PTK Nagar",
      "Purawalkam",
      "Railway Colony",
      "RMZ Millenia Business Park",
      "Royapettah",
      "Saidapet",
      "Sakthi Nagar",
      "Saligramam",
      "Shanthi Colony, Anna Nagar",
      "Sholinganallur",
      "SIDCO Industrial Estate",
      "Sivan Koil Street",
      "South Phase",
      "St. Thomas Mount",
      "Station Border Road",
      "T Nagar",
      "Taramani",
      "Teynampet",
      "Thiru Vi Ka Kudiyiruppu",
      "Thirumangalam",
      "Thiruvanmiyur",
      "Thoraipakkam",
      "Thoraipakkam, OMR",
      "Thousand Lights",
      "U R Nagar Extension",
      "Vadapalani",
      "Valasaravakkam",
      "Vasudevan Nagar",
      "Velachery",
      "Vishwas Nagar",
    ],
    Coimbatore: [
      "36D Vadavalli",
      "Alamelu Manga Puram",
      "Avarampalayam",
      "Avinashi Road",
      "Chinnavedampatti",
      "Coimbatore",
      "Cross Cut Road",
      "Eachanari",
      "Gandhipuram",
      "Gandipuram",
      "Gopalapuram",
      "Hudco Colony",
      "Indiranagar",
      "Kalapatti",
      "Kalapatti Main Road",
      "Kovai",
      "Neelambur",
      "Nehru Nagar",
      "Pappanaickenpalayam",
      "Peelamedu",
      "Peelamedu Pudur",
      "Peelamedu West",
      "R S Puram West",
      "Race Course",
      "Rajkannan Garden",
      "Ram Nagar",
      "Ramanathapuram",
      "Rathinam Techzone",
      "R S Puram",
      "Saibaba Colony",
      "Saravanampatti",
      "Subbiah Layout",
      "Tatabad",
      "TNHB Colony",
      "T V S Nagar",
      "Vadavalli",
    ],
    Delhi: [
      "Aerocity",
      "Ajmeri Gate",
      "Amberhai Road Number 1",
      "Anand Vihar",
      "Aram Bagh",
      "Asaf Ali Road",
      "Ashok Nagar",
      "Ashok Park Main",
      "Ashok Vihar",
      "Badarpur",
      "Barakhamba",
      "Bareja Sadan Market",
      "Block B Badarpur",
      "Block B1",
      "Building P Level 3",
      "Chanakyapuri",
      "Chattarpur",
      "Chhatarpur",
      "Connaught Place",
      "Dani Plaza",
      "Dashrath Puri",
      "Defence Colony",
      "Delhi",
      "Derawal Nagar",
      "Dwarka",
      "Dwarka Mor",
      "Dwarka Sec23B",
      "East Of Kailash",
      "East Patel Nagar",
      "Ghitorni",
      "Greater Kailash",
      "Greater Kailash II",
      "Green Park",
      "GT Karnal Road",
      "Gujranwala Town",
      "Hafed Complex Netaji Subhash Place",
      "Hargobind Enclave",
      "Hargobind Enclave Karkardooma",
      "Hauz Khas",
      "Hospitality District",
      "Janakpuri",
      "Jasola",
      "Jasola Vihar",
      "Jhandewalan",
      "Karol Bagh",
      "Kasturba Gandhi Road",
      "KG Road",
      "Kirti Nagar",
      "Lado Sarai",
      "Lajpat Nagar",
      "Lajpat Nagar II",
      "Laxmi Nagar",
      "Mahavir Enclave",
      "Mahavir Enclave Part 1",
      "Malviya Nagar",
      "Mata Sundari Railway Colony",
      "Mathura Road",
      "Mayapuri",
      "Mayur Vihar",
      "Mayur Vihar Phase 1",
      "Mohan Cooperative Industrial Estate",
      "Mohan Estate",
      "Moti Nagar",
      "Najafgarh",
      "Naraina",
      "Nawada",
      "Nehru Place",
      "Netaji Subhash Place",
      "New Friends Colony",
      "Nirman Vihar",
      "Nirman Vihar East",
      "Okhla",
      "Okhla Industrial Area",
      "Okhla Phase 1",
      "Okhla Phase 2",
      "Outer Circle",
      "Palam",
      "Palam Extension",
      "Paschim Vihar",
      "Patel Nagar",
      "Pitam Pura",
      "Pitampura",
      "Preet Vihar",
      "Qutab Institutional Area",
      "Raja Garden",
      "Rajendra Place",
      "Rajinder Nagar",
      "Rajouri Garden",
      "Ramesh Nagar",
      "Rohini",
      "Safdarjung Enclave",
      "Saidabad Mohan Cooperative",
      "Saiyad Ul Ajaib Extension",
      "Saket",
      "Saket District Centre",
      "Sector 12 Dwarka",
      "Sector 21",
      "Sector 7 Dwarka",
      "Shahpur Jat",
      "Shalimar Bagh",
      "Siri Fort",
      "South Delhi",
      "South Extension I",
      "South Extension II",
      "State Bank Colony",
      "Suraj Vihar",
      "Tilak Nagar",
      "Turkman Gate",
      "Uttam Nagar",
      "Vasant Kunj",
      "Vasant Vihar",
      "Wazirpur",
      "Wazirpur Industrial Area",
      "West Delhi",
      "Westend Road",
      "Worldmark 1 Tower A",
      "Yusuf Sarais",
    ],

    Ghaziabad: [
      "Govindpuram",
      "Greater Noida West",
      "Gyan Khand II",
      "Indirapuram",
      "Kaushambi",
      "Rajat Vihar",
      "Sector 16",
      "Sector 4",
      "Sector 57",
      "Sector 58",
      "Sector 59",
      "Sector 62",
      "Sector 63",
      "Sector 64",
      "Sector 65",
      "Sector 67",
      "Sector 68",
      "Surya Nagar",
      "Vaishali",
    ],

    Goa: [
      "Cacra Village",
      "Camotim Vaddo, Candolim",
      "Mandrem",
      "Panaji",
      "Panjim",
      "St. Inez",
      "Vagator",
    ],

    Gurgaon: [
      "Ashok Road",
      "Block C 2",
      "Blue One Square",
      "Dlf Colony",
      "Dlf Cyber City",
      "Dlf Epitome",
      "Dlf Phase 4",
      "Enkay Square",
      "Golf Course Road",
      "Good Earth City Centre",
      "Huda City Centre",
      "Huda Colony",
      "Infinity Tower",
      "Institutional Area",
      "Jmd Empire Square",
      "Jmd Megapolis Sector 48",
      "Jmd Megapolis",
      "Mehrauli Gurgaon Road",
      "Mg Road",
      "Mgf Megacity",
      "Mgf Metropolis Mall",
      "NH8",
      "NH8 Sector 15",
      "Nirvana Courtyard",
      "Old Dlf Colony",
      "Omaxe City Centre",
      "Orchid Centre",
      "Phase IV",
      "Platina Tower",
      "Plaza Mall",
      "Prem Puri Sector 32",
      "Sector 14",
      "Sector 15",
      "Sector 16",
      "Sector 18",
      "Sector 20",
      "Sector 24",
      "Sector 25",
      "Sector 27",
      "Sector 28",
      "Sector 29",
      "Sector 30",
      "Sector 32",
      "Sector 33",
      "Sector 35",
      "Sector 35 Udyog Vihar VII",
      "Sector 38",
      "Sector 39",
      "Sector 41",
      "Sector 42",
      "Sector 43",
      "Sector 44",
      "Sector 45",
      "Sector 46",
      "Sector 47",
      "Sector 48",
      "Sector 49",
      "Sector 50",
      "Sector 51",
      "Sector 53",
      "Sector 54",
      "Sector 57",
      "Sector 58",
      "Sector 59",
      "Sector 61",
      "Sector 63",
      "Sector 65",
      "Sector 74",
      "Sikanderpur",
      "Sikanderpur Sector 26",
      "Sohna Road",
      "South City 1",
      "South City 2",
      "South City II",
      "Supermart I",
      "Sushant Lok",
      "Sushant Lok Phase I",
      "The Galaxy Hotel",
      "Time Square Building",
      "Towerb Sector 39",
      "Two Horizon Centre",
      "Udyog Vihar",
      "Udyog Vihar Phase 4",
      "Unit 204206 Tower B4 Spaze I Tech Park Sector 49",
      "Unitech Cyber Park",
      "Vijohn Tower",
      "Vipul Trade Centre",
    ],
    Hyedrabad: [
      "Accord Blu",
      "Ameerpet",
      "Anand Banjara Colony",
      "Banjara Hills",
      "Begumpet",
      "Boduppal",
      "Cbi Colony",
      "Film Nagar",
      "Financial District",
      "Gachibowli",
      "Green Valley",
      "Himayatnagar",
      "Hitech City",
      "Hitech City Road",
      "Idpl",
      "Izatnagar",
      "Jubilee Enclave",
      "Jubilee Hills",
      "Kavuri Hills, Madhapur",
      "Khanammet",
      "Kharkana",
      "Kondapur",
      "Kothaguda",
      "Kphb",
      "Krishe Emerald, Hitech City",
      "Kukatpally",
      "Kukatpally Housing Board Colony",
      "Laxmi Cyber City",
      "Madhapur",
      "Modern Profound Tech Park",
      "Modern Profound Tech Park, Whitefields",
      "Nagarjuna Nagar",
      "Nampally",
      "Nanakramguda",
      "Nanakramguda Road",
      "Newmark House",
      "Phase 2 Gachibowli",
      "Prakash Nagar",
      "Punjagutta",
      "Purva Summit, Hitech City",
      "Raheja Mindspace",
      "Raidurg",
      "Raidurgam",
      "Raj Bhavan Road",
      "Rajapushpa Summit, Gachibowli",
      "Ranga Reddy",
      "Rao Nagar",
      "Secunderabad",
      "Serilingampalle M",
      "Sohini Tech Park",
      "Somajiguda",
      "Sr Nagar",
      "Sreshta Marvel",
      "Swamik Nagar",
      "Trimulgherry",
      "Uppal",
      "Vaishnavi's Cynosure",
      "Whitefields",
    ],

    Indore: [
      "1015 Skye Corporate Park Scheme No. 78 Ab Road",
      "11 Bungalow Colony",
      "Ab Road",
      "Adarsh Indira Nagar",
      "Bhawarkua",
      "Bhawarkuan",
      "Indore",
      "Janjeerwala",
      "Janki Nagar",
      "Jaora Compound",
      "Jawahar Road",
      "Mangal City",
      "Mg Road",
      "Near Janjeerwala Square",
      "Piplyahana",
      "Race Course Road",
      "Ratna Lok Colony",
      "Ravindra Nagar",
      "Rnt Road",
      "Scheme No. 114",
      "Scheme No. 140",
      "Scheme No. 54",
      "Scheme No. 54, Pu4",
      "Sheetal Nagar",
      "Shiv Sakti Nagar",
      "Siyaganj",
      "South Tukoganj",
      "South Tukoganj, Regal Square",
      "Tapeshwari Bagh Colony",
      "Vijay Nagar",
    ],
    Jaipur: [
      "Ajmer Road",
      "Ashok Nagar",
      "Bais Godam",
      "Bajaj Nagar",
      "Bapu Nagar",
      "Barkat Nagar",
      "C Scheme",
      "Chase Tower, 3Rd Floor",
      "Civil Lines",
      "Durgapura",
      "Hathroi",
      "Hotel Royal Akshyam, Near New Vivek Metro Station",
      "Indiranagar",
      "Jagatpura",
      "Jaipur",
      "Jawahar Lal Nehru Road",
      "Jawahar Nagar Police Street",
      "Kailash Puri Colony",
      "Lal Kothi",
      "Lalarpura",
      "M.I. Road",
      "Mahatma Gandhi Nagar",
      "Mahaveer Nagar 2",
      "Malviya Nagar",
      "Mansarovar",
      "Mohan Nagar",
      "Nirman Nagar",
      "Pratap Nagar",
      "Raja Park",
      "Rajiv Vihar Colony",
      "Rambagh",
      "Ramnagar",
      "Ranisati Nagar",
      "Sanganer",
      "Sector 3",
      "Shanthi Nagar",
      "Shanthi Nagar, Mansarovar",
      "Shastri Nagar",
      "Shiv Puri Colony",
      "Shri Gopal Nagar",
      "Shyam Nagar",
      "Sitapura",
      "Sudarshanpura Bais Godam",
      "Tagore Nagar",
      "Tonk Road",
      "Triveni Nagar",
      "Vaishali Nagar",
      "Vidhayak Nagar",
      "Vidyadhar Nagar",
    ],
    Kochi: [
      "Angamaly",
      "Deshabhimani Road",
      "Edappally",
      "Ernakulam",
      "Ernakulam South",
      "Hmt Road",
      "Infopark Campus",
      "Iyyattil Junction",
      "Kacheripady",
      "Kadavanthara",
      "Kakkanad",
      "Kalamassery",
      "Kaloor",
      "Kinfra Park",
      "Kv Nagar",
      "Marine Drive",
      "Mg Road",
      "Nedumbassery",
      "October Road, Vyttila",
      "Padamughal",
      "Padivattom Edappally",
      "Palarivattom",
      "Pallimukku, Ernakulam",
      "Panampilly Nagar",
      "Ponnurunni",
      "Poonithura",
      "Ravipuram",
      "Shanmugham Road",
      "Srm Road",
      "Thrikkakara",
      "Valamkottil Towers, Kakkanad",
      "Vallathol Padi",
    ],
    Kolkata: [
      "3410 Ballygunge Circular Road",
      "Ajc Bose Road",
      "Ajmal Khan Road",
      "Anuj Chambers, 24 Park Street",
      "Ballygunge",
      "Bbd Bagh",
      "Bhowanipore",
      "Bidhannagar",
      "Bose Road",
      "Bowbazar",
      "Camac Street",
      "Chinar Park",
      "Chitpur",
      "Dalhousie",
      "Dash Drone",
      "Dharmatala",
      "Dum Dum",
      "East Kolkata Township",
      "Ecospace Business Park",
      "Elgin",
      "Gariahat",
      "Golaghata Road",
      "Hanuman Estates",
      "Hati Bagan",
      "Hazra",
      "Kalighat",
      "Kankaria Estates",
      "Kasba",
      "Lal Bazar",
      "Manohar Pukur",
      "Mullick Bazaar",
      "Nagerbazar",
      "New Town",
      "New Town Action Area II",
      "Paddapukur",
      "Park Street",
      "Ps Srijan Corporate Park",
      "Raja Subodh Mullick Square Road",
      "Rajarhat",
      "Rash Behari",
      "Rekjuani",
      "Salt Lake",
      "Sarani Road",
      "Sector 2",
      "Sector V",
      "Sri Manjari",
      "Taltala",
      "Theatre Road",
      "Topsia",
    ],
    Lucknow: [
      "Civil Lines",
      "Golf City",
      "Gomti Nagar",
      "Gopal Nagar",
      "Hazratganj",
      "Indiranagar",
      "Jankipuram",
      "Jopling Road",
      "Jsv Hyundai Building",
      "Sector 5E",
      "Telibagh",
      "Vibhuti Khand",
    ],

    Mumbai: [
      "247 Park",
      "2nd Floor Pinnacle Business Park, Mahakali Caves Road, Andheri",
      "Aarey Road Goregaon West",
      "Airoli",
      "Andheri",
      "Andheri East",
      "Andheri Kurla Road, Andheri East",
      "Andheri West",
      "Aston Building",
      "Azad Maidan Fort",
      "Badhwar Park",
      "Bandra",
      "Bandra East",
      "Bandra Kurla Complex",
      "Bandra West",
      "Bhandup",
      "Bhandup West",
      "Bhaveshwar Arcade Annex",
      "Bkc",
      "Borivali West",
      "Cbd Belapur",
      "Central Road Andheri East",
      "Chandivali",
      "Chembur",
      "Chembur East",
      "Churchgate",
      "Colaba",
      "Dadar East",
      "Dadar West",
      "Dadar West Parel",
      "Dynasty Business Park",
      "Enam Sambhav",
      "Equinox",
      "Fort",
      "Ghatkopar East",
      "Ghatkopar West",
      "Ghatla",
      "Godrej Boyce",
      "Goregaon",
      "Goregaon East",
      "Goregaon West",
      "Gundavali",
      "Hiranandani Business Park",
      "Hiranandani Gardens",
      "Hiranandani Powai Vikhroli Link Road",
      "Jogeshwari East",
      "Jogeshwari Vikhroli Link Road",
      "Juhu",
      "Kamala Nagar",
      "Kandivali",
      "Kandivali West",
      "Khar West",
      "Kopar Khairane",
      "Krishna Bhawan Santacruz West",
      "Kurla",
      "Laxmi Nagar",
      "Lokhandwala Road",
      "Lower Parel",
      "Mahim",
      "Makhija Arcade",
      "Malad",
      "Malad East",
      "Malad West",
      "Marol",
      "Marol Midc",
      "Marol Naka Andheri East",
      "Matulya Center Lower Parel",
      "Midc Central Road",
      "Mira Road East",
      "Modi House Off Link Road",
      "Mulund West",
      "Nariman Point",
      "Navi Mumbai Airoli",
      "Nesco It Park Goregaon",
      "Netaji Subhash Chandra Road",
      "Oberoi Garden City",
      "Orchard Ave",
      "Powai",
      "Powai Plaza",
      "Raheja Platinum",
      "Raheja Titanium Goregaon",
      "Ram Krishna Nagar Khar West",
      "Saki Naka",
      "Saki Vihar Road",
      "Santacruz",
      "Santacruz East",
      "Santacruz West",
      "Sector 30 Navi",
      "Seepz Andheri East",
      "Senapati Bapat Road",
      "Shantinagar",
      "Sv Road Andheri West",
      "Techno It Park Borivali West",
      "Thane",
      "Thane Belapur Road",
      "Trade World Tower Lower Parel",
      "Turbhe",
      "Vashi",
      "Vijay Diamond",
      "Vijay Diamond Andheri East",
      "Vikhroli",
      "Vikhroli West",
      "Vile Parle West",
      "Virar West",
      "Wadala East",
      "Wagle Industrial Estate",
      "Western Express Highway Goregaon East",
      "Worli",
      "Worli Shivaji Nagar",
    ],
    Noida: [
      "Badarpur",
      "Greater Noida",
      "Greater Noida West",
      "Mathura Road",
      "Mohan Cooperative Industrial Estate",
      "Sector 10 Hbc",
      "Sector 107",
      "Sector 12",
      "Sector 125",
      "Sector 126",
      "Sector 127",
      "Sector 132",
      "Sector 136",
      "Sector 16",
      "Sector 16A",
      "Sector 18",
      "Sector 20B",
      "Sector 32",
      "Sector 4",
      "Sector 41",
      "Sector 43",
      "Sector 57",
      "Sector 58",
      "Sector 59",
      "Sector 62",
      "Sector 63",
      "Sector 64",
      "Sector 65",
      "Sector 67",
      "Sector 68",
      "Sector 78",
      "Sector 87",
      "Sector 9",
      "Sector 94",
      "Sector 96",
    ],
    Pune: [
      "Agarkar Nagar",
      "Airport Road, Shastrinagar, Yerwada",
      "Ashok Nagar Kharadi",
      "Ashoka Nagar",
      "Aundh",
      "Balewadi",
      "Balewadi Road Baner",
      "Baner",
      "Baner Road",
      "Bavdhan",
      "Bhandarkar Road Deccan Gymkhana",
      "Camp",
      "Chinchwad",
      "Church Road Camp",
      "Cosmos Gardens",
      "Dapodi",
      "Deccan Gymkhana",
      "Dhole Patil Road",
      "Downtown Road",
      "Ds Ikon 4Th Floor",
      "Erandwane",
      "Fatima Nagar",
      "Guruwar Peth",
      "Hadapsar",
      "Hinjawadi",
      "Hinjewadi Phase",
      "Kalyani Nagar",
      "Karve Nagar",
      "Karve Road",
      "Katraj",
      "Kharadi",
      "Kondhwa Budruk",
      "Koregaon",
      "Koregaon Park",
      "Kothrud",
      "Lantana Gardens Bavdhan",
      "Lullanagar",
      "Magarpatta City",
      "Mangaldas Road",
      "Marvel Fuego",
      "Mohammed Wadi",
      "Mundhwa",
      "Narayan Peth",
      "Narhe",
      "Naylor Road",
      "Next To Malaka Spice",
      "Next To Medipoint Hospital Baner",
      "Nyati County",
      "Pallod Farms Baner",
      "Pashan",
      "Pashan Gaon",
      "Pimple Saudagar",
      "Pimpri Chinchwad",
      "Ragvilas Society",
      "Raja Bahadur Mill Road",
      "Sadashiv Peth",
      "Sadhu Vasvani Nagar",
      "Sakore Nagar",
      "Sakore Nagar Viman Nagar",
      "Sanewadi",
      "Sanewadi Aundh",
      "Sangamvadi",
      "Satara Road",
      "Shivaji Nagar",
      "Shivneri Colony",
      "Subhash Nagar",
      "Swargate",
      "Sygenta Baner",
      "Symphony Nanded City",
      "The Kode",
      "Tilak Smarak Mandir",
      "Tingre Nagar",
      "Vakil Nagar",
      "Varsha Park",
      "Vidyut Nagar Society",
      "Viman Nagar",
      "Vishweshwar Bank Lane Baner",
      "Wakad",
      "Wakad Hinjewadi Road",
      "Wakadhinjewadi Road",
      "Wakdewadi",
      "Yerawada",
      "Yerwada",
    ],
    Other: ["Other"],
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "coworkingStyles") {
        setFormData((prevData) => ({
          ...prevData,
          coworkingStyles: checked
            ? [...prevData.coworkingStyles, value]
            : prevData.coworkingStyles.filter((style) => style !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    if (name === "city") {
      setFormData((prevData) => ({
        ...prevData,
        microMarket: "",
        otherCity: value === "Other" ? "" : prevData.otherCity,
      }));
    }
  };
 const validateForm = () => {
    const requiredFields = [
      "ownershipType",
      "flexDevelopmentStage",
      "goalsForSpace",
      "area",
      "marketRate",
      "name",
      "email",
      "phone",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        setErrorMessage(
          `Please fill in the ${field.replace(/([A-Z])/g, " $1").toLowerCase()}.`
        );
        return false;
      }
    }

    if (!formData.city || (formData.city === "Other" && !formData.otherCity)) {
      setErrorMessage("Please provide a valid city or specify 'Other'.");
      return false;
    }

    if (!formData.microMarket && formData.city !== "Other") {
      setErrorMessage("Please select a micro market.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return alert("Please fill all the required fields");
    }

    setIsSubmitting(true);

    try {
      const now = new Date();
      const offset = 330; // IST offset in minutes
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

      const dataToSend = {
        ...formData,
        city: formData.city === "Other" ? formData.otherCity : formData.city,
        microMarket: formData.city === "Other" ? "Other" : formData.microMarket,
        timestamp,
      };

      await axios.post(
        "https://hook.eu2.make.com/irpno6z3m67rk2ft6m4q1txlqc3wu2rw",
        dataToSend
      );
      navigate("/start-your-own-coworking-space-thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen mt-20 text-sm bg-gray-100 flex flex-col lg:flex-row items-start justify-center md:p-6 lg:p-6 p-0 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Insights Section */}
      <aside className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Drive 3x revenue from your property with Coworking space
        </h2>
        <p className="text-base mb-4">
          Embarking on the journey to start your own coworking space is not just
          about creating a shared workspace—it's about building a vibrant
          community where creativity, collaboration, and innovation thrive.
        </p>

        <p className="mt-4 text-base font-medium">
          With the rise of flexible work models and the demand for dynamic
          environments, coworking spaces offer a unique opportunity to cater to
          freelancers, startups, and enterprises looking for more than just an
          office. From designing inspiring interiors to curating a culture that
          fosters networking and growth, launching your coworking venture allows
          you to redefine how people work together.
        </p>
        <p className="mt-4 text-base font-medium">
          Whether you're transforming a vacant building into a bustling hub or
          reimagining shared offices, this venture can be as rewarding as it is
          impactful.
        </p>
      </aside>

      {/* Form Section */}
      <form
        className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg space-y-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Information
        </h2>

        {/* Ownership Type Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Do you own the property?
          </label>
          <select
            name="ownershipType"
            value={formData.ownershipType}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Flex Development Stage Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Where are you in the coworking space development process?
          </label>
          <select
            name="flexDevelopmentStage"
            value={formData.flexDevelopmentStage}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a stage</option>
           
            <option value="I'm a broker looking to help my client">
              I'm a broker looking to help my client
            </option>
            <option value="I'm a developer looking to partner with a coworking space operator">
              I'm building owner looking to partner with a coworking space operator
            </option>
            {/* <option value="I'm a coworking space operator looking to partner with a developer">
              I'm a coworking space operator looking to partner with a developer
            </option> */}
            <option value="Something else">Something else</option>
          </select>
        </div>

        {/* Goals for Space Dropdown */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What are your goals for the space?
          </label>
          <select
            name="goalsForSpace"
            value={formData.goalsForSpace}
            onChange={handleChange}
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a goal</option>
            <option value="I’m eager to start my own coworking space to maximize profitability.">
              I’m eager to start my own coworking space to maximize
              profitability.
            </option>
            <option value="I’d prefer to partner with an established operator, as I don’t have time to build my own brand..">
              I’d prefer to partner with an established operator, as I don’t
              have time to build my own brand.
            </option>

            <option value="I’m not sure yet. Let’s talk.">
              I’m not sure yet. Let’s talk.
            </option>
          </select>
        </div>

        {/* Coworking Style Checkboxes */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Coworking Style (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:gap-4 lg:gap-4 gap-2 mt-1 text-sm">
            {[
              "High-end Coworking",
              "Mid-range Coworking",
              "Low-end Coworking",
              "Traditional (Desk-only) Coworking",
              // "Legacy Executive Suites",
              "Modern Executive Suites",
              // "Spec Suites",
              // "Pop-up Spaces",
              // "Industrial Conversion",
              // "Retail Conversion",
              // "Alternate Models",
              "Other",
            ].map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="coworkingStyles"
                  value={style}
                  checked={formData.coworkingStyles.includes(style)}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* address */}
          <div>
          <label className="block text-sm font-extrabold text-gray-900">
            City and Micro Market
          </label>
          <div className="flex gap-2 mt-1">
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
            >
              <option value="">Select City</option>
              {Object.keys(cityMicroMarketMap).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {formData.city === "Other" ? (
              <input
                type="text"
                name="otherCity"
                value={formData.otherCity}
                onChange={handleChange}
                placeholder="Specify Other City"
                className="w-1/2 p-2 border rounded"
              />
            ) : (
              <select
                name="microMarket"
                value={formData.microMarket}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                disabled={!formData.city}
              >
                <option value="">Select Micro Market</option>
                {formData.city &&
                  cityMicroMarketMap[formData.city].map((market) => (
                    <option key={market} value={market}>
                      {market}
                    </option>
                  ))}
              </select>
            )}
          </div>
        </div>

         <div>
          <label className="block text-sm font-bold text-gray-700">
            On which coworking model are you planning to expand?
            <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 md:gap-4 lg:gap-4 gap-2 mt-2">
            {[
              "Revenue Sharing  Model ",
              "Profit Sharing Model",
              "Franchise Model",
              "Lease Model",
              "Others",
            ] .map((style) => (
              <label key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="domain"
                  value={style}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* num of space */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is the carpet area of the space in square feet?
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter carpet area"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Honest Market Rate */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            What is an honest market rent on carpet area (INR per Sqft ) ?
          </label>
          <input
            type="text"
            name="marketRate"
            value={formData.marketRate}
            onChange={handleChange}
            placeholder="e.g., 50"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Contact Information */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Contact Information
        </h2>
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-extrabold text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-extrabold text-gray-900">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-extrabold text-gray-900">
            Any other notes for us?
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Add any additional information here"
            className="mt-1 text-sm w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div class="my-">
  <label class="flex items-start space-x-2">
    <input type="checkbox" required class="mt-1" />
    <span class="text-sm text-gray-700">
      By submitting, you agree to list your property on <strong>Propques</strong>. Your contact details will be shared based on your selected preferences.
    </span>
  </label>
</div>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg shadow-lg transition duration-300 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Property Information"}
        </button>
      </form>
    </div>
  );
};

export default SYOC;
