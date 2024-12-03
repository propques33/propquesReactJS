import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalForm = () => {
  const navigate = useNavigate();
  const { isFormOpen, toggleForm } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalExpectation: "",
    city: "",
    microMarket: "",
    areaCarpet: "",
    areaSuper: "",
    propertyDetails: "",
    coworkingOption: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    Other: ["Other"]
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/thankyou");
    }
  }, [isSuccess, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset microMarket if city changes
    if (name === "city") {
      setFormData((prevData) => ({
        ...prevData,
        microMarket: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.areaCarpet < 3500 || formData.areaSuper < 3500) {
      alert("Both Carpet Area and Super Area must be at least 3500 sq. ft.");
      return;
    }

    setIsLoading(true);

    try {
      const now = new Date();
      const offset = 330; // IST offset in minutes (5 hours 30 minutes)
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

      const dataToSend = {
        ...formData,
        timestamp,
      };

      await axios.post(
        "https://hook.eu2.make.com/b8iebbyrokw9p15vrpl6y8ehca5c22o1",
        dataToSend
      );

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        rentalExpectation: "",
        city: "",
        microMarket: "",
        areaCarpet: "",
        areaSuper: "",
        propertyDetails: "",
        coworkingOption: "",
      });
      toggleForm();
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isFormOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100000000000000000] "
      id="contact-btn"
    >
      <div className="relative bg-white  shadow-lg p-8 max-w-2xl w-full rounded-xl">
        <button
          onClick={toggleForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoClose className="text-2xl" />
        </button>

        <h2 className="text-md font-bold mb-4 text-center ">
          Please fill out this form to provide us with more details about your
          property
          <p className="text-sm text-blue-500">
            We will reach out to you if we are a mutual fit.
          </p>
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your Phone"
              required
            />
          </div>

          {/* City */}
          <div className="mb-4 gap-2 flex">
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-1/2 p-2 border rounded"
              required
            >
              <option value="">Select City</option>
              {Object.keys(cityMicroMarketMap).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              name="microMarket"
              value={formData.microMarket}
              onChange={handleInputChange}
              className="w-1/2 p-2 border rounded"
              required
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
          </div>

          {/* Micro Market */}
          {/* <div className="mb-4">
            
          </div> */}

          {/* Rental Expectation */}
          <div className="mb-4">
            <input
              type="number"
              name="rentalExpectation"
              value={formData.rentalExpectation}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Rental Expectation"
              required
            />
          </div>

          {/* Areas */}
          <div className="mb-4 flex gap-2">
            <input
              type="number"
              name="areaSuper"
              value={formData.areaSuper}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Super Area (sq. ft.)"
              required
            />
            <input
              type="number"
              name="areaCarpet"
              value={formData.areaCarpet}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Carpet Area (sq. ft.)"
              required
            />
          </div>

          {/* Coworking Option */}
          <div className="mb-4">
            <select
              name="coworkingOption"
              value={formData.coworkingOption}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Coworking Option</option>
              <option value="Start Your Own Coworking">
                Start Your Own Coworking
              </option>
              <option value="Match Making With Coworking">
                Match Making With Coworking
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
