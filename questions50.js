const questions = [
  {
    "question": "Capital of India?",
    "options": [
      "Mumbai",
      "New Delhi",
      "Chennai",
      "Goa"
    ],
    "answer": 1
  },
  {
    "question": "Scientific name of sapota?",
    "options": [
      "Tamarindus indica",
      "Solanum tuberosum",
      "Manilkara zapota",
      "Mangifera indica"
    ],
    "answer": 2
  },
  {
    "question": "Who is popularly known as the Father of the Nation in India?",
    "options": [
      "Mahatma Gandhi",
      "Subhash Chandra Bose",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    "answer": 0
  },
  {
    "question": "Who is the President of India?",
    "options": [
      "Narendra Modi",
      "Droupadi Murmu",
      "Amit Shah",
      "Rahul Gandhi"
    ],
    "answer": 1
  },
  {
    "question": "National animal of India?",
    "options": [
      "Lion",
      "Bengal tiger",
      "Elephant",
      "Leopard"
    ],
    "answer": 1
  },
  {
    "question": "National bird of India?",
    "options": [
      "Sparrow",
      "Parrot",
      "Peacock",
      "Ostrich"
    ],
    "answer": 2
  },
  {
    "question": "National flower of India?",
    "options": [
      "Rose",
      "Lotus",
      "Jasmine",
      "Sunflower"
    ],
    "answer": 1
  },
  {
    "question": "First Prime Minister of India?",
    "options": [
      "Mahatma Gandhi",
      "Sardar Patel",
      "Jawaharlal Nehru",
      "Lal Bahadur Shastri"
    ],
    "answer": 2
  },
  {
    "question": "Currency of India?",
    "options": [
      "Rupee",
      "Yen",
      "Dollar",
      "Pound"
    ],
    "answer": 0
  },
  {
    "question": "Largest Indian state by area?",
    "options": [
      "Uttar Pradesh",
      "Madhya Pradesh",
      "Andhra Pradesh",
      "Rajasthan"
    ],
    "answer": 3
  },
  {
    "question": "Smallest Indian state by area?",
    "options": [
      "Goa",
      "Sikkim",
      "Tripura",
      "Manipur"
    ],
    "answer": 0
  },
  {
    "question": "Largest planet in the Solar System?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter",
      "Neptune"
    ],
    "answer": 2
  },
  {
    "question": "Planet known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Mercury",
      "Jupiter"
    ],
    "answer": 1
  },
  {
    "question": "Planet closest to the Sun?",
    "options": [
      "Mercury",
      "Venus",
      "Earth",
      "Mars"
    ],
    "answer": 0
  },
  {
    "question": "Natural satellite of Earth?",
    "options": [
      "Sun",
      "Moon",
      "Mars",
      "Venus"
    ],
    "answer": 1
  },
  {
    "question": "Chemical symbol for gold?",
    "options": [
      "Ag",
      "Au",
      "Fe",
      "Gd"
    ],
    "answer": 1
  },
  {
    "question": "Chemical formula of water?",
    "options": [
      "CO2",
      "H2O",
      "O2",
      "NaCl"
    ],
    "answer": 1
  },
  {
    "question": "Gas mainly absorbed by plants during photosynthesis?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    "answer": 2
  },
  {
    "question": "Largest organ in the human body?",
    "options": [
      "Heart",
      "Liver",
      "Skin",
      "Lung"
    ],
    "answer": 2
  },
  {
    "question": "Approximate number of bones in an adult human body?",
    "options": [
      "106",
      "206",
      "306",
      "406"
    ],
    "answer": 1
  },
  {
    "question": "Universal donor blood group for red blood cells?",
    "options": [
      "AB positive",
      "A positive",
      "O negative",
      "B negative"
    ],
    "answer": 2
  },
  {
    "question": "Organ that pumps blood?",
    "options": [
      "Brain",
      "Heart",
      "Kidney",
      "Lung"
    ],
    "answer": 1
  },
  {
    "question": "Hardest natural substance?",
    "options": [
      "Iron",
      "Diamond",
      "Quartz",
      "Graphite"
    ],
    "answer": 1
  },
  {
    "question": "SI unit of force?",
    "options": [
      "Joule",
      "Watt",
      "Newton",
      "Pascal"
    ],
    "answer": 2
  },
  {
    "question": "SI unit of electric current?",
    "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "answer": 1
  },
  {
    "question": "Who is credited with inventing the telephone?",
    "options": [
      "Alexander Graham Bell",
      "Thomas Edison",
      "James Watt",
      "Isaac Newton"
    ],
    "answer": 0
  },
  {
    "question": "Who discovered penicillin?",
    "options": [
      "Louis Pasteur",
      "Alexander Fleming",
      "Marie Curie",
      "Robert Koch"
    ],
    "answer": 1
  },
  {
    "question": "First person to walk on the Moon?",
    "options": [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins"
    ],
    "answer": 1
  },
  {
    "question": "Largest ocean on Earth?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "answer": 2
  },
  {
    "question": "Longest river in India?",
    "options": [
      "Yamuna",
      "Ganga",
      "Godavari",
      "Narmada"
    ],
    "answer": 1
  },
  {
    "question": "Highest mountain peak in the world?",
    "options": [
      "K2",
      "Mount Everest",
      "Kangchenjunga",
      "Lhotse"
    ],
    "answer": 1
  },
  {
    "question": "Largest hot desert in the world?",
    "options": [
      "Gobi Desert",
      "Thar Desert",
      "Sahara Desert",
      "Kalahari Desert"
    ],
    "answer": 2
  },
  {
    "question": "Largest continent by area?",
    "options": [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    "answer": 1
  },
  {
    "question": "Country known as the Land of the Rising Sun?",
    "options": [
      "China",
      "Japan",
      "Thailand",
      "South Korea"
    ],
    "answer": 1
  },
  {
    "question": "Capital of Japan?",
    "options": [
      "Kyoto",
      "Osaka",
      "Tokyo",
      "Hiroshima"
    ],
    "answer": 2
  },
  {
    "question": "Largest country in the world by area?",
    "options": [
      "Canada",
      "China",
      "Russia",
      "United States"
    ],
    "answer": 2
  },
  {
    "question": "How many continents are there?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 2
  },
  {
    "question": "How many sides does a hexagon have?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1
  },
  {
    "question": "Square root of 144?",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "answer": 2
  },
  {
    "question": "15 × 4 equals?",
    "options": [
      "45",
      "50",
      "60",
      "75"
    ],
    "answer": 2
  },
  {
    "question": "Programming language associated with 'write once, run anywhere'?",
    "options": [
      "Python",
      "Java",
      "C",
      "HTML"
    ],
    "answer": 1
  },
  {
    "question": "CPU stands for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User"
    ],
    "answer": 0
  },
  {
    "question": "RAM stands for?",
    "options": [
      "Read Access Memory",
      "Random Access Memory",
      "Rapid Application Memory",
      "Run Access Module"
    ],
    "answer": 1
  },
  {
    "question": "Device commonly used to input text?",
    "options": [
      "Monitor",
      "Printer",
      "Keyboard",
      "Speaker"
    ],
    "answer": 2
  },
  {
    "question": "WWW stands for?",
    "options": [
      "World Wide Web",
      "World Web Window",
      "Wide World Wire",
      "Web World Wide"
    ],
    "answer": 0
  },
  {
    "question": "Company that developed Android?",
    "options": [
      "Google",
      "Microsoft",
      "IBM",
      "Intel"
    ],
    "answer": 0
  },
  {
    "question": "Largest democracy in the world by population?",
    "options": [
      "India",
      "Canada",
      "Australia",
      "Brazil"
    ],
    "answer": 0
  },
  {
    "question": "India's Independence Day is celebrated on?",
    "options": [
      "26 January",
      "15 August",
      "2 October",
      "14 November"
    ],
    "answer": 1
  },
  {
    "question": "India's Republic Day is celebrated on?",
    "options": [
      "15 August",
      "26 January",
      "2 October",
      "5 September"
    ],
    "answer": 1
  },
  {
    "question": "Who wrote Jana Gana Mana?",
    "options": [
      "Bankim Chandra Chattopadhyay",
      "Rabindranath Tagore",
      "Sarojini Naidu",
      "Subramania Bharati"
    ],
    "answer": 1
  }
];
