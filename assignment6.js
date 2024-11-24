const express = require("express");
const app = express();
const port = 8000;

var motoGP = [
    {
        circuit: "Losail",
        location: "Qatar",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizlozo",
            country: "Italy",
        },
    },
    {
        circuit: "Autodromo",
        location: "Argentine",
        winner: {
            firstName: "Cal",
            lastName: "Crutchlow",
            country: "UK",
        },
    },
    {
        circuit: "De Jerez",
        location: "Spain",
        winner: {
            firstName: "Valentino",
            lastName: "Rossi",
            country: "Italy",
        },
    },
    {
        circuit: "Mugello",
        location: "Italy",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizlozo",
            country: "Italy",
        },
    },
];


app.get("/", (req, res) => {
    res.json(motoGP);
});

app.get("/country", (req, res) => {
    const groupedByCountry = motoGP.reduce((group, race) => {
        const country = race.winner.country;
        group[country] = group[country] || [];
        group[country].push(race);
        return group;
    }, {});
    res.json(groupedByCountry);
});

app.get("/name", (req, res) => {
    const groupedByName = motoGP.reduce((group, race) => {
        const fullName = `${race.winner.firstName} ${race.winner.lastName}`;
        group[fullName] = group[fullName] || [];
        group[fullName].push(race);
        return group;
    }, {});
    res.json(groupedByName);
});

app.all("*", (req, res) => {
    res.status(400).send("Bad Request");
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
