var personType = {
    actor: 1,
    director: 2,
    actorAndDirector: 3
}

var persons = [
	{
		"name": "Austin Holloway",
		"personType": 3
	},
	{
		"name": "Heather Logan",
		"personType": 1
	},
	{
		"name": "Todd Wilkins",
		"personType": 1
	},
	{
		"name": "Chase Barr",
		"personType": 1
	},
	{
		"name": "Kelsey Rush",
		"personType": 1
	},
	{
		"name": "Kiayada Davenport",
		"personType": 1
	},
	{
		"name": "Lacy Larson",
		"personType": 1
	},
	{
		"name": "Yoshio Huber",
		"personType": 1
	},
	{
		"name": "Jena Foreman",
		"personType": 3
	},
	{
		"name": "Nicole White",
		"personType": 1
	},
	{
		"name": "Mariko Oliver",
		"personType": 1
	},
	{
		"name": "Myles Norton",
		"personType": 1
	},
	{
		"name": "Valentine Phelps",
		"personType": 3
	},
	{
		"name": "Gillian Melton",
		"personType": 1
	},
	{
		"name": "Felicia Donovan",
		"personType": 2
	},
	{
		"name": "Zane Tanner",
		"personType": 2
	},
	{
		"name": "Alfonso Winters",
		"personType": 3
	},
	{
		"name": "Adrienne Petersen",
		"personType": 3
	},
	{
		"name": "Miranda Hamilton",
		"personType": 2
	},
	{
		"name": "Christian Roberts",
		"personType": 2
	},
	{
		"name": "Keaton Kidd",
		"personType": 1
	},
	{
		"name": "Lance Wise",
		"personType": 2
	},
	{
		"name": "Maris Morrow",
		"personType": 2
	},
	{
		"name": "Callie Collins",
		"personType": 1
	},
	{
		"name": "Jerome Gonzalez",
		"personType": 1
	},
	{
		"name": "Elton Juarez",
		"personType": 3
	},
	{
		"name": "Samson Perry",
		"personType": 2
	},
	{
		"name": "Joan Osborne",
		"personType": 3
	},
	{
		"name": "Jonas Mccray",
		"personType": 1
	},
	{
		"name": "Constance Campos",
		"personType": 1
	},
	{
		"name": "Cooper Hays",
		"personType": 1
	},
	{
		"name": "Chancellor Dillon",
		"personType": 2
	},
	{
		"name": "Grant Fields",
		"personType": 1
	},
	{
		"name": "Ray Mann",
		"personType": 1
	},
	{
		"name": "Lars Fleming",
		"personType": 2
	},
	{
		"name": "Nigel England",
		"personType": 2
	},
	{
		"name": "Cairo Mooney",
		"personType": 1
	},
	{
		"name": "Deacon Huber",
		"personType": 2
	},
	{
		"name": "Jaquelyn Dale",
		"personType": 2
	},
	{
		"name": "Stewart Strickland",
		"personType": 1
	},
	{
		"name": "Alfreda Benjamin",
		"personType": 2
	},
	{
		"name": "Jameson Chen",
		"personType": 2
	},
	{
		"name": "Deirdre Reid",
		"personType": 1
	},
	{
		"name": "Kevin Houston",
		"personType": 3
	},
	{
		"name": "Nathaniel Snow",
		"personType": 3
	},
	{
		"name": "Eric Golden",
		"personType": 3
	},
	{
		"name": "Rigel Sherman",
		"personType": 2
	},
	{
		"name": "Hakeem Hughes",
		"personType": 2
	},
	{
		"name": "Kai Duncan",
		"personType": 2
	},
	{
		"name": "Kyra Bruce",
		"personType": 2
	},
	{
		"name": "Chase Bird",
		"personType": 1
	},
	{
		"name": "Xantha Reyes",
		"personType": 2
	},
	{
		"name": "Margaret York",
		"personType": 2
	},
	{
		"name": "Dale Clay",
		"personType": 1
	},
	{
		"name": "Mia Goodwin",
		"personType": 1
	},
	{
		"name": "Damian Welch",
		"personType": 1
	},
	{
		"name": "Iola Montoya",
		"personType": 1
	},
	{
		"name": "Vera Gilbert",
		"personType": 2
	},
	{
		"name": "Lilah Golden",
		"personType": 1
	},
	{
		"name": "Drew Rivera",
		"personType": 2
	},
	{
		"name": "Calvin Gonzales",
		"personType": 1
	},
	{
		"name": "Reed Dodson",
		"personType": 2
	},
	{
		"name": "John Beach",
		"personType": 2
	},
	{
		"name": "Germane Cross",
		"personType": 1
	},
	{
		"name": "Ariana Reid",
		"personType": 1
	},
	{
		"name": "Felix Mullen",
		"personType": 1
	},
	{
		"name": "Lucas Whitehead",
		"personType": 1
	},
	{
		"name": "Buckminster Henry",
		"personType": 2
	},
	{
		"name": "Christine Sosa",
		"personType": 1
	},
	{
		"name": "Stacey Nunez",
		"personType": 1
	},
	{
		"name": "Bree Sellers",
		"personType": 1
	},
	{
		"name": "Delilah Bean",
		"personType": 2
	},
	{
		"name": "Nicholas Finley",
		"personType": 1
	},
	{
		"name": "Aiko Riddle",
		"personType": 3
	},
	{
		"name": "Hedwig Dawson",
		"personType": 3
	},
	{
		"name": "Debra Pickett",
		"personType": 3
	},
	{
		"name": "Harper Golden",
		"personType": 3
	},
	{
		"name": "Tiger Best",
		"personType": 2
	},
	{
		"name": "Vivian Drake",
		"personType": 3
	},
	{
		"name": "Kim Phelps",
		"personType": 2
	},
	{
		"name": "Maris Foster",
		"personType": 1
	},
	{
		"name": "Colorado Allen",
		"personType": 3
	},
	{
		"name": "Russell Rojas",
		"personType": 2
	},
	{
		"name": "Athena Preston",
		"personType": 3
	},
	{
		"name": "Kelsey Richards",
		"personType": 1
	},
	{
		"name": "Melyssa Dixon",
		"personType": 2
	},
	{
		"name": "Colby Combs",
		"personType": 3
	},
	{
		"name": "Ashton Freeman",
		"personType": 1
	},
	{
		"name": "Blythe Hess",
		"personType": 1
	},
	{
		"name": "Micah Preston",
		"personType": 1
	},
	{
		"name": "Xena Potts",
		"personType": 3
	},
	{
		"name": "Paula Rowe",
		"personType": 1
	},
	{
		"name": "Kathleen Bentley",
		"personType": 2
	},
	{
		"name": "Quynn Adkins",
		"personType": 1
	},
	{
		"name": "Lani Townsend",
		"personType": 2
	},
	{
		"name": "Maggy Calhoun",
		"personType": 2
	},
	{
		"name": "Jolie Potter",
		"personType": 1
	},
	{
		"name": "Hop Dillon",
		"personType": 1
	},
	{
		"name": "Ralph Mueller",
		"personType": 1
	},
	{
		"name": "Laurel Walsh",
		"personType": 3
	}
];

module.exports = {persons, personType};