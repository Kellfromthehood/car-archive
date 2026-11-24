function pesquisar() {

    const campo = document.getElementById("campoPesquisa");

    const pesquisa = campo.value.trim();

    if (pesquisa === "") {
        alert("Digite o nome de um carro ou peça.");
        return;
    }

    alert("Pesquisando por: " + pesquisa);
}


function abrirPeca(nomeDaPeca) {

    alert(
        "Você selecionou: " +
        nomeDaPeca +
        "\n\nEm breve teremos informações completas sobre essa peça."
    );

}
const modelosPorMarca = {

   "Volkswagen": {
    "Gol": {
        versao: "Gol Last Edition 1.0 MPI",
        ano: "2023",
        dados: {
            "Motor": "1.0 MPI aspirado, 3 cilindros, 999 cm³",
            "Potência": "84 cv (etanol) / 77 cv (gasolina)",
            "Torque": "10,4 kgfm (etanol) / 9,7 kgfm (gasolina)",
            "Câmbio": "Manual de 5 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Carroceria": "Hatch"
        }
    },

    "Golf": {
        versao: "Golf GTI 2.0 TSI DSG",
        ano: "2019",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "230 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Velocidade máxima": "238 km/h",
            "Aceleração 0–100 km/h": "7 segundos",
            "Carroceria": "Hatch"
        }
    },

    "Jetta": {
        versao: "Jetta GLI 350 TSI",
        ano: "2024",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "231 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 7 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Carroceria": "Sedã"
        }
    },

    "Polo": {
        versao: "Polo 1.0 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.0 TSI Turbo",
            "Potência": "116 cv",
            "Torque": "16,8 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Carroceria": "Hatch"
        }
    },

    "Virtus": {
        versao: "Virtus Highline 200 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.0 TSI turbo, 3 cilindros, 999 cm³",
            "Potência": "128 cv (etanol) / 116 cv (gasolina)",
            "Torque": "20,4 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Velocidade máxima": "196 km/h",
            "Aceleração 0–100 km/h": "10 segundos",
            "Carroceria": "Sedã"
        }
    },

    "T-Cross": {
        versao: "T-Cross Highline 250 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.4 TSI turbo, 4 cilindros, 1.395 cm³",
            "Potência": "150 cv",
            "Torque": "25,5 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Velocidade máxima": "204 km/h (etanol) / 202 km/h (gasolina)",
            "Aceleração 0–100 km/h": "8,6 s (etanol) / 8,8 s (gasolina)",
            "Carroceria": "SUV"
        }
    },

    "Nivus": {
        versao: "Nivus Highline 200 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.0 TSI turbo, 3 cilindros, 999 cm³",
            "Potência": "128 cv (etanol) / 116 cv (gasolina)",
            "Torque": "20,4 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Velocidade máxima": "189 km/h (etanol) / 185 km/h (gasolina)",
            "Carroceria": "SUV cupê"
        }
    },

    "Tiguan": {
        versao: "Tiguan Allspace R-Line 2.0 TSI",
        ano: "2020",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "220 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 7 marchas",
            "Tração": "Integral 4Motion",
            "Combustível": "Gasolina",
            "Velocidade máxima": "223 km/h",
            "Aceleração 0–100 km/h": "6,8 segundos",
            "Carroceria": "SUV"
        }
    },

    "Passat": {
        versao: "Passat Highline 2.0 TSI",
        ano: "2019",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros",
            "Potência": "220 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Carroceria": "Sedã"
        }
    },

    "Fusca": {
        versao: "Fusca 2.0 TSI",
        ano: "2014",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "211 cv",
            "Torque": "28,6 kgfm",
            "Câmbio": "DSG de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Velocidade máxima": "224 km/h",
            "Aceleração 0–100 km/h": "6,9 segundos",
            "Carroceria": "Cupê"
        }
    }
},

    "Chevrolet": [
        "Onix", "Cruze", "Camaro", "Tracker", "Equinox",
        "Montana", "S10", "Spin", "Cobalt", "Opala"
    ],

    "Fiat": [
        "Uno", "Palio", "Argo", "Cronos", "Mobi",
        "Fastback", "Pulse", "Toro", "Strada", "147"
    ],

    "Toyota": [
        "Corolla", "Corolla Cross", "Hilux", "Yaris",
        "SW4", "Etios", "Camry", "Supra", "RAV4", "Prius"
    ],

    "Honda": [
        "Civic", "Accord", "City", "Fit", "HR-V",
        "CR-V", "ZR-V", "NSX", "Prelude", "WR-V"
    ],

    "Ford": [
        "Mustang", "Focus", "Fusion", "Fiesta", "Ka",
        "Ranger", "Bronco", "Territory", "EcoSport", "GT"
    ],

    "BMW": [
        "M3", "M4", "M5", "M2", "320i",
        "330i", "X1", "X3", "X5", "i8"
    ],

    "Mercedes-Benz": [
        "Classe A", "Classe C", "Classe E", "Classe S",
        "AMG GT", "A45 AMG", "C63 AMG", "GLE", "GLC", "G-Class"
    ],

    "Audi": [
        "A3", "A4", "A5", "A6", "A8",
        "Q3", "Q5", "Q7", "R8", "RS6"
    ],

    "Porsche": [
        "911", "718 Cayman", "718 Boxster", "Cayenne",
        "Macan", "Panamera", "Taycan", "Carrera GT", "918 Spyder"
    ],

    "Ferrari": [
        "F40", "F50", "Enzo", "458 Italia", "488 GTB",
        "F8 Tributo", "296 GTB", "SF90", "LaFerrari", "12Cilindri"
    ],

    "Lamborghini": [
        "Aventador", "Huracán", "Urus", "Revuelto",
        "Gallardo", "Murciélago", "Diablo", "Countach", "Veneno"
    ],

    "McLaren": [
        "P1", "720S", "750S", "570S", "600LT",
        "765LT", "Artura", "Senna", "F1", "GT"
    ],

    "Nissan": [
        "GT-R", "350Z", "370Z", "Silvia S15", "Skyline",
        "Sentra", "Versa", "Kicks", "Frontier", "Leaf"
    ],

    "Hyundai": [
        "HB20", "Creta", "Tucson", "Elantra", "Azera",
        "Santa Fe", "i30", "Veloster", "Ioniq 5", "Kona"
    ],

    "Kia": [
        "Sportage", "Sorento", "Cerato", "Picanto",
        "Stinger", "EV6", "EV9", "Soul", "Rio", "Carnival"
    ],

    "Renault": [
        "Kwid", "Sandero", "Logan", "Duster", "Captur",
        "Oroch", "Megane", "Clio", "Fluence", "Kardian"
    ],

    "Peugeot": [
        "208", "2008", "308", "3008", "408",
        "508", "Partner", "206", "207", "RCZ"
    ],

    "Mitsubishi": [
        "Lancer", "Lancer Evolution", "Eclipse",
        "ASX", "Outlander", "Pajero", "L200",
        "Eclipse Cross", "3000GT"
    ],

    "Subaru": [
        "Impreza", "WRX", "WRX STI", "BRZ",
        "Forester", "Outback", "Legacy", "XV", "Levorg"
    ],

    "Volvo": [
        "XC40", "XC60", "XC90", "S60", "S90",
        "V60", "V90", "C30", "EX30", "EX90"
    ],

    "Jeep": [
        "Renegade", "Compass", "Commander",
        "Wrangler", "Grand Cherokee", "Gladiator",
        "Cherokee", "Avenger"
    ],

    "BYD": [
        "Dolphin", "Dolphin Mini", "Seal", "Yuan Plus",
        "Song Plus", "King", "Han", "Tan", "Shark"
    ],

    "Dodge": [
        "Charger", "Challenger", "Viper", "Durango",
        "Dart", "Journey", "RAM SRT-10", "Charger Daytona"
    ]

};


// CRIAR ÁREA DE MODELOS

const secaoCarros = document.querySelector("#carros");
const gradeMarcas = secaoCarros.querySelector(".cards");
console.log("Seção carros:", secaoCarros);
console.log("Grade de marcas:", gradeMarcas);
console.log("Botões explorar:", document.querySelectorAll("#carros .card button").length);
const resultadoModelos = document.createElement("div");

resultadoModelos.id = "resultadoModelos";
resultadoModelos.style.marginTop = "60px";

gradeMarcas.insertAdjacentElement("afterend", resultadoModelos);


// FUNCIONALIDADE DOS BOTÕES EXPLORAR

document.querySelectorAll("#carros .card").forEach(card => {

    const nomeMarca = card.querySelector("h3").textContent;
    const botao = card.querySelector("button");

   botao.addEventListener("click", () => {

    const modelosOriginais = modelosPorMarca[nomeMarca];

    const modelos = Array.isArray(modelosOriginais)
        ? modelosOriginais
        : Object.keys(modelosOriginais || {});

    if (modelos.length === 0) {
        alert("Nenhum modelo encontrado para essa marca.");
        return;
    }

    resultadoModelos.innerHTML = `

            <h2>Modelos ${nomeMarca}</h2>

            <p class="descricao">
                Explore os principais veículos da ${nomeMarca}.
            </p>

            <div class="cards">

                ${modelos.map(modelo => `

                    <div class="card">

                        <h3>${modelo}</h3>

                        <p>
                            Conheça o modelo ${modelo} e suas
                            características automotivas.
                        </p>

                        <button onclick="verModelo('${nomeMarca}', '${modelo}')">
                            Ver modelo
                        </button>

                    </div>

                `).join("")}

            </div>

        `;

        resultadoModelos.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// INFORMAÇÕES DO MODELO

function verModelo(marca, modelo) {
    const fichasTecnicas = {
      "Volkswagen": {
    "Gol": {
        versao: "Gol Last Edition 1.0 MPI",
        ano: "2023",
        dados: {
            "Motor": "1.0 MPI aspirado, 3 cilindros, 999 cm³",
            "Potência": "84 cv (etanol) / 77 cv (gasolina)",
            "Torque": "10,4 kgfm (etanol) / 9,7 kgfm (gasolina)",
            "Câmbio": "Manual de 5 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Velocidade máxima": "164 km/h",
            "Aceleração 0–100 km/h": "13,4 segundos",
            "Carroceria": "Hatch"
        }
    },

    "Golf": {
        versao: "Golf GTI 2.0 TSI DSG",
        ano: "2019",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "230 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Velocidade máxima": "238 km/h",
            "Aceleração 0–100 km/h": "7 segundos",
            "Carroceria": "Hatch"
        }
    },

    "Jetta": {
        versao: "Jetta GLI 350 TSI",
        ano: "2024",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "231 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 7 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Carroceria": "Sedã"
        }
    },

    "Polo": {
        versao: "Polo Highline 1.0 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.0 TSI turbo, 3 cilindros, 999 cm³",
            "Potência": "116 cv (etanol) / 109 cv (gasolina)",
            "Torque": "16,8 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Carroceria": "Hatch"
        }
    },

    "Virtus": {
        versao: "Virtus Highline 200 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.0 TSI turbo, 3 cilindros, 999 cm³",
            "Potência": "128 cv (etanol) / 116 cv (gasolina)",
            "Torque": "20,4 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Velocidade máxima": "196 km/h",
            "Aceleração 0–100 km/h": "10 segundos",
            "Carroceria": "Sedã"
        }
    },

    "T-Cross": {
        versao: "T-Cross Highline 250 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.4 TSI turbo, 4 cilindros, 1.395 cm³",
            "Potência": "150 cv",
            "Torque": "25,5 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Carroceria": "SUV"
        }
    },

    "Nivus": {
        versao: "Nivus Highline 200 TSI",
        ano: "2024",
        dados: {
            "Motor": "1.0 TSI turbo, 3 cilindros, 999 cm³",
            "Potência": "128 cv (etanol) / 116 cv (gasolina)",
            "Torque": "20,4 kgfm",
            "Câmbio": "Automático de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Flex",
            "Velocidade máxima": "189 km/h (etanol) / 185 km/h (gasolina)",
            "Aceleração 0–100 km/h": "9,9 segundos (etanol)",
            "Carroceria": "SUV cupê"
        }
    },

    "Tiguan": {
        versao: "Tiguan Allspace R-Line 2.0 TSI",
        ano: "2020",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "220 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 7 marchas",
            "Tração": "Integral 4Motion",
            "Combustível": "Gasolina",
            "Velocidade máxima": "223 km/h",
            "Aceleração 0–100 km/h": "6,8 segundos",
            "Carroceria": "SUV"
        }
    },

    "Passat": {
        versao: "Passat Highline 2.0 TSI",
        ano: "2019",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "220 cv",
            "Torque": "35,7 kgfm",
            "Câmbio": "DSG de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Velocidade máxima": "246 km/h",
            "Carroceria": "Sedã"
        }
    },

    "Fusca": {
        versao: "Fusca 2.0 TSI",
        ano: "2014",
        dados: {
            "Motor": "2.0 TSI turbo, 4 cilindros, 1.984 cm³",
            "Potência": "211 cv",
            "Torque": "28,6 kgfm",
            "Câmbio": "DSG de 6 marchas",
            "Tração": "Dianteira",
            "Combustível": "Gasolina",
            "Velocidade máxima": "224 km/h",
            "Aceleração 0–100 km/h": "6,9 segundos",
            "Carroceria": "Cupê"
        }
    }
},
        

        "Chevrolet": {
            "Onix": {
                versao: "Onix LT 1.0 Turbo",
                ano: "2024",
                dados: {
                    "Motor": "1.0 Turbo",
                    "Potência": "116 cv",
                    "Torque": "16,8 kgfm",
                    "Câmbio": "Automático de 6 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "Hatch"
                }
            }
        },

        "Fiat": {
            "Argo": {
                versao: "Argo Drive 1.0 Firefly",
                ano: "2024",
                dados: {
                    "Motor": "1.0 Firefly",
                    "Potência": "75 cv",
                    "Torque": "10,7 kgfm",
                    "Câmbio": "Manual de 5 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "Hatch"
                }
            }
        },

        "Toyota": {
            "Corolla": {
                versao: "Corolla 2.0 Dynamic Force",
                ano: "2024",
                dados: {
                    "Motor": "2.0 Dynamic Force",
                    "Potência": "175 cv",
                    "Torque": "21,3 kgfm",
                    "Câmbio": "CVT de 10 marchas simuladas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "Sedã"
                }
            }
        },

        "Honda": {
            "Civic": {
                versao: "Civic Touring 1.5 Turbo",
                ano: "2021",
                dados: {
                    "Motor": "1.5 Turbo",
                    "Potência": "173 cv",
                    "Torque": "22,4 kgfm",
                    "Câmbio": "CVT",
                    "Tração": "Dianteira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Sedã"
                }
            }
        },

        "Ford": {
            "Ranger": {
                versao: "Ranger Limited 3.0 V6",
                ano: "2024",
                dados: {
                    "Motor": "3.0 V6 Turbo Diesel",
                    "Potência": "250 cv",
                    "Torque": "61,2 kgfm",
                    "Câmbio": "Automático de 10 marchas",
                    "Tração": "4x4",
                    "Combustível": "Diesel",
                    "Carroceria": "Picape"
                }
            }
        },

        "BMW": {
            "320i": {
                versao: "320i GP 2.0 Turbo Flex",
                ano: "2023",
                dados: {
                    "Motor": "2.0 TwinPower Turbo",
                    "Potência": "184 cv",
                    "Torque": "30,6 kgfm",
                    "Câmbio": "Automático de 8 marchas",
                    "Tração": "Traseira",
                    "Combustível": "Flex",
                    "Carroceria": "Sedã"
                }
            }
        },

        "Mercedes-Benz": {
            "Classe C": {
                versao: "C 200 AMG Line",
                ano: "2023",
                dados: {
                    "Motor": "1.5 Turbo com sistema híbrido leve",
                    "Potência": "204 cv",
                    "Torque": "30,6 kgfm",
                    "Câmbio": "Automático de 9 marchas",
                    "Tração": "Traseira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Sedã"
                }
            }
        },

        "Audi": {
            "A3": {
                versao: "A3 Sportback 2.0 TFSI",
                ano: "2024",
                dados: {
                    "Motor": "2.0 TFSI Turbo",
                    "Potência": "204 cv",
                    "Torque": "32,6 kgfm",
                    "Câmbio": "Automático de dupla embreagem, 7 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Hatch"
                }
            }
        },

        "Porsche": {
            "911": {
                versao: "911 Carrera 3.0",
                ano: "2024",
                dados: {
                    "Motor": "3.0 Boxer 6 cilindros biturbo",
                    "Potência": "385 cv",
                    "Torque": "45,9 kgfm",
                    "Câmbio": "PDK",
                    "Tração": "Traseira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Cupê esportivo"
                }
            }
        },

        "Ferrari": {
            "488 GTB": {
                versao: "488 GTB 3.9 V8",
                ano: "2018",
                dados: {
                    "Motor": "3.9 V8 Biturbo",
                    "Potência": "670 cv",
                    "Torque": "77,5 kgfm",
                    "Câmbio": "Automático de dupla embreagem, 7 marchas",
                    "Tração": "Traseira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Cupê esportivo"
                }
            }
        },

        "Lamborghini": {
            "Huracán": {
                versao: "Huracán EVO 5.2 V10",
                ano: "2020",
                dados: {
                    "Motor": "5.2 V10 aspirado",
                    "Potência": "640 cv",
                    "Torque": "61,2 kgfm",
                    "Câmbio": "Automático de dupla embreagem, 7 marchas",
                    "Tração": "Integral",
                    "Combustível": "Gasolina",
                    "Carroceria": "Cupê esportivo"
                }
            }
        },

        // LOTE 4 - McLaren, Nissan, Hyundai e Kia

        "McLaren": {
            "720S": {
                versao: "720S 4.0 V8 Twin-Turbo",
                ano: "2024",
                dados: {
                    "Motor": "4.0 V8 Biturbo",
                    "Potência": "720 PS",
                    "Torque": "770 Nm",
                    "Câmbio": "Automático SSG de 7 marchas",
                    "Tração": "Traseira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Superesportivo"
                }
            }
        },

        "Nissan": {
            "GT-R": {
                versao: "GT-R Premium 3.8 V6",
                ano: "2024",
                dados: {
                    "Motor": "3.8 V6 Biturbo",
                    "Potência": "565 hp",
                    "Torque": "633 Nm",
                    "Câmbio": "Automático de dupla embreagem, 6 marchas",
                    "Tração": "Integral AWD",
                    "Combustível": "Gasolina",
                    "Carroceria": "Cupê esportivo"
                }
            }
        },

        "Hyundai": {
            "HB20": {
                versao: "HB20 1.0 TGDI Automático",
                ano: "2024",
                dados: {
                    "Motor": "1.0 TGDI Turbo Flex",
                    "Potência": "120 cv",
                    "Torque": "17,5 kgfm",
                    "Câmbio": "Automático de 6 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "Hatch"
                }
            }
        },

       "Kia": {
            "Sportage": {
                versao: "Sportage 1.6 TGDI MHEV",
                ano: "2024",
                dados: {
                    "Motor": "1.6 TGDI Turbo com sistema híbrido leve",
                    "Potência": "180 cv",
                    "Torque": "27 kgfm",
                    "Câmbio": "Automático de dupla embreagem, 7 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Gasolina",
                    "Carroceria": "SUV"
                }
            }
        },

        "Renault": {
            "Kardian": {
                versao: "Kardian Première Edition",
                ano: "2025",
                dados: {
                    "Motor": "1.0 TCe Turbo Flex",
                    "Potência": "125 cv",
                    "Torque": "22,4 kgfm",
                    "Câmbio": "Automático EDC de dupla embreagem, 6 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "SUV"
                }
            }
        },

        "Peugeot": {
            "208": {
                versao: "208 GT Turbo 200",
                ano: "2025",
                dados: {
                    "Motor": "1.0 Turbo 200 Flex",
                    "Potência": "130 cv",
                    "Torque": "20 kgfm",
                    "Câmbio": "CVT com 7 marchas simuladas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "Hatch"
                }
            }
        },

        "Mitsubishi": {
            "Lancer Evolution": {
                versao: "Lancer Evolution X",
                ano: "2015",
                dados: {
                    "Motor": "2.0 Turbo 4 cilindros",
                    "Potência": "295 cv",
                    "Torque": "37,3 kgfm",
                    "Câmbio": "Automatizado de dupla embreagem, 6 marchas",
                    "Tração": "Integral AWD",
                    "Combustível": "Gasolina",
                    "Carroceria": "Sedã esportivo"
                }
            }
        },

       "Subaru": {
            "WRX STI": {
                versao: "WRX STI 2.5 Turbo",
                ano: "2021",
                dados: {
                    "Motor": "2.5 Boxer Turbo 4 cilindros",
                    "Potência": "310 cv",
                    "Torque": "41,5 kgfm",
                    "Câmbio": "Manual de 6 marchas",
                    "Tração": "Integral Symmetrical AWD",
                    "Combustível": "Gasolina",
                    "Carroceria": "Sedã esportivo"
                }
            }
        },

        // LOTE 6 - VOLVO, JEEP, BYD E DODGE

        "Volvo": {
            "XC60": {
                versao: "XC60 T8 Recharge Plus",
                ano: "2025",
                dados: {
                    "Motor": "2.0 Turbo híbrido plug-in",
                    "Potência": "462 cv combinados",
                    "Torque": "40,7 kgfm (motor a combustão)",
                    "Câmbio": "Automático Geartronic de 8 marchas",
                    "Tração": "Integral AWD",
                    "Combustível": "Híbrido plug-in",
                    "Carroceria": "SUV"
                }
            }
        },

        "Jeep": {
            "Renegade": {
                versao: "Renegade Longitude T270",
                ano: "2025",
                dados: {
                    "Motor": "1.3 Turbo T270 Flex",
                    "Potência": "180 cv (gasolina) / 185 cv (etanol)",
                    "Torque": "27,5 kgfm",
                    "Câmbio": "Automático de 6 marchas",
                    "Tração": "Dianteira",
                    "Combustível": "Flex",
                    "Carroceria": "SUV"
                }
            }
        },

        "BYD": {
            "Dolphin": {
                versao: "Dolphin GS 44,9 kWh",
                ano: "2025",
                dados: {
                    "Motor": "Elétrico",
                    "Potência": "95 cv",
                    "Torque": "18,3 kgfm",
                    "Câmbio": "Automático",
                    "Tração": "Dianteira",
                    "Combustível": "Elétrico",
                    "Bateria": "44,9 kWh",
                    "Autonomia": "291 km (PBEV)",
                    "Carroceria": "Hatch"
                }
            }
        },

        "Dodge": {
            "Charger": {
                versao: "Charger SRT Hellcat Redeye",
                ano: "2023",
                dados: {
                    "Motor": "6.2 V8 HEMI Supercharged",
                    "Potência": "807 hp",
                    "Torque": "959 Nm",
                    "Câmbio": "Automático TorqueFlite de 8 marchas",
                    "Tração": "Traseira",
                    "Combustível": "Gasolina",
                    "Carroceria": "Sedã esportivo"
                }
            }
        }
    };

    const ficha = fichasTecnicas[marca]?.[modelo];
console.log("Marca recebida:", marca);
console.log("Modelo recebido:", modelo);
console.log(
    "Modelos cadastrados:",
    Object.keys(fichasTecnicas[marca] || {})
);
    const fichaAntiga = document.getElementById("fichaTecnica");
    if (fichaAntiga) fichaAntiga.remove();

    const elemento = document.createElement("div");
    elemento.id = "fichaTecnica";

    if (!ficha) {
        elemento.innerHTML = `
            <div class="aviso-ficha">
                <h2>${marca} ${modelo}</h2>
                <p>A ficha técnica deste modelo ainda está sendo cadastrada.</p>
            </div>
        `;
    } else {
        const campos = Object.entries(ficha.dados);

        elemento.innerHTML = `
            <div class="ficha-cabecalho">
                <span>CAR ARCHIVE / FICHA TÉCNICA</span>
                <h2>${marca} ${modelo}</h2>
                <p>${ficha.versao} • ${ficha.ano}</p>
            </div>

            <div class="ficha-informacoes">
                ${campos.map(([titulo, valor]) => `
                    <div class="ficha-item">
                        <span>${titulo}</span>
                        <strong>${valor}</strong>
                    </div>
                `).join("")}
            </div>

            <button class="botao-voltar" id="botaoVoltar">
    Voltar aos modelos
</button>
        `;
    }

    resultadoModelos.appendChild(elemento);

    elemento.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    const botaoVoltar = elemento.querySelector("#botaoVoltar");

    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", () => {
            elemento.remove();

            resultadoModelos.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
}
