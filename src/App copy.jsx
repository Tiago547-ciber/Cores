import { useEffect } from 'react'
import React from 'react';


import './App.css'


const hex = {
  "Papel de Seda": "#fffdf0",
  "Brilho do Luar": "#f0f0fa",
  "Suspiro Caseiro": "#fff8dc",
  "Manteiga de Carité": "#ffebb4",
  "Luz do Sol": "#ffc832",
  "Jasmim-amarelo": "#ffe178",
  "Gengibre": "#f2e7b5",
  "Polpa de Mangostim": "#823d5a",
  "Chapada Diamantina": "#5a6e5a",
  "Pinus": "#5e7c5e",
  "Cinza-urbano": "#969696",
  "Sisal": "#d2c88a",
  "Pedra de Caulinita": "#b4aa96",
  "Espuma de Baunilha": "#f3e5c0",
  "Lua de Cristal": "#dce6ff",
  "Som das Ondas": "#c8d8f0",
  "Bem-me-quer": "#ffd2e6",
  "Praia Branca": "#f5f5f5",
  "Macramê": "#e6dcc8",
  "Tesouro Perdido": "#c86432",
  "Pitaia Colombiana": "#ff6490",
  "Seiva de Cajueiro": "#ff964c",
  "Cacau da Bahia": "#783c28",
  "Felicidade": "#ffb432",
  "Prata": "#c0c0c0",
  "Prata Envelhecido": "#aaaaaa",
  "Terra Fértil": "#6e503c",
  "Rock'n Roll": "#464646",
  "Farda Militar": "#4b553c",
  "Black": "#000000",
  "Pérola Cintilante": "#F5E9DD",
  "Veranelo": "#F8EDD1",
  "Luxo": "#F3E4C6",
  "Croissant": "#F7E4C1",
  "Vintage": "#F6E0B5",
  "Rosa-champanhe": "#F6E6B8",
  "Naturale": "#F0DBCB",
  "Pêssego": "#F5D9C2",
  "Aquarela Pêssego": "#F8D8C0",
  "Amarelo dos Andes": "#F8E6C0",
  "Sorbet de Baunilha": "#FAF5E8",
  "Nuvem de Papel": "#F5F0E1",
  "Silêncio da Manhã": "#F6F0E4",
  "Nata": "#F9F5EB",
  "Cordilheira dos Andes": "#F4F0E3",
  "Nata Fresca": "#F5F1E4",
  "Lugar Comum": "#F6F0E3",
  "Gelo Seco": "#F7F3E7",
  "Balé Chinês": "#F5F0E0",
  "Açúcar Cristal": "#F7F3E3",
  "Pão de Minuto": "#F8F4E2",
  "Mimo": "#F6F2E2",
  "Montanhas Rochosas": "#F4F0E0",
  "Lenda do Deserto": "#F5F0E0",
  "Espinho de Rosa": "#F6F1E0",
  "Brilho de Estrela": "#F7F2E0",
  "Violoncelo": "#F7F2E0",
  "Quase Rosa": "#F6F1E1",
  "Lua Minguante": "#F5F0E0",
  "Castanha-de-caju": "#F5F0E0",
  "Berço": "#F4F0E0",
  "Algodão Egípcio": "#F5F0E0",
  "Luar": "#F6F1E0",
  "Gelo": "#F3F0E0",
  "Pérola": "#F7F2E0",
  "Metrópole": "#F5F0E0",
  "Tiramisu": "#F6F1E0",
  "Palha": "#F6F1E0",
  "Ouro Branco": "#F5F0E0",
  "Lascas de Macadâmia": "#F5F0E0",
  "Humanidade": "#F5F0E0",
  "Esponja do Mar": "#F5F0E0",
  "Casquinha de Sorvete": "#F5F0E0",
  "Areia do Deserto": "#F6F0E0",
  "Adormecida": "#F8E9D7",
  "Agulha de Costura": "#F3F0E1",
  "Papel Picado": "#F5F0E0",
  "Flan de Baunilha": "#F6F1E0",
  "Trigo": "#F5EED9",
  "Papel Sedoso": "#F6EED8",
  "Gergelim": "#F7EED7",
  "Duna Maranhense": "#F4EAD6",
  "Sol de Outono": "#F8E9D6",
  "Mormaço": "#F7E9D6",
  "Pedrisco Palha": "#F4EBD6",
  "Ratan": "#F5EBD5",
  "Pasta de Amendoim": "#F6EBD5",
  "Areia": "#F9EED5",
  "Meia-calça": "#F6E8D5",
  "Canjica": "#F7E8D5",
  "Marfim Nobre": "#F4E9D3",
  "Crômio": "#E1E3E1",
  "Tapete de Juta": "#F5EAD4",
  "Puma": "#E0E1DE",
  "Broto de Feijão": "#E1E2DF",
  "Tempestade no Mar": "#E0E1DE",
  "Ráfia": "#F3E8D2",
  "Inverno Gelado": "#E2E4E2",
  "Lampião": "#F5E9D3",
  "Doce de Leite": "#F4E9D2",
  "Cocada": "#F3E8D2",
  "Andiroba": "#F3E8D2",
  "Ovelha": "#F3E8D2",
  "Camelo": "#F5E9D2",
  "Frescor de Laranja": "#F9E0C7",
  "Sorvete de Mamão": "#F9E1C8",
  "Nêspera": "#F9E1C8",
  "Frutas Naturais": "#F8E0C7",
  "Laranja Açucarada": "#F8D2B4",
  "Final de Tarde": "#F9D3B6",
  "Doce de Damasco": "#F9D4B8",
  "Cuíca": "#F9D5B9",
  "Tropicália": "#F8D6BB",
  "Maracá": "#F8D7BD",
  "Bacupari do Cerrado": "#F8C79F",
  "Sorvete de Pêssego": "#F9C9A3",
  "Ciranda": "#F9CAAA",
  "Camélia-laranja": "#F9CBAB",
  "Caju": "#F8CCAC",
  "Cabaça": "#F8CDAD",
  "Baião": "#F8B989",
  "Flocos de Milho": "#F9BB8D",
  "Biscoito-champagne": "#F9BC8F",
  "Jenipapo": "#F9BD91",
  "Seriguela": "#F8BE93",
  "Areia do Sertão": "#F9BF95",
  "Coala": "#CDB286",
  "Polpa de Pêssego": "#F5A67B",
  "Papaia": "#F39B6C",
  "Bronze": "#D5A17A",
  "Sofá Aveludado": "#D0B08E",
  "Cortiça": "#CBB08F",
  "Início do Verão": "#F6BCA2",
  "Damasco Suave": "#F7BFA5",
  "Recheio de Avelã": "#E7B99A",
  "Oca": "#E9BFA1",
  "Base Soft": "#F7C0A5",
  "Néctar de Pêssego": "#F8C1A6",
  "Pão de Ló": "#F3D1A8",
  "Ninho": "#F4D2AA",
  "Frescor da Manhã": "#F5D3AC",
  "Capoeira": "#F6D4AE",
  "Nozes": "#EAD0A7",
  "Linho do Oriente": "#E9D0A7",
  "Lebre": "#C4B5A4",
  "Chocolate": "#B79B82",
  "Choconhaque": "#E6B4A2",
  "Camurça": "#CDB599",
  "Juta": "#D7C1A4",
  "Amendoim": "#CDB69C",
  "Noz-moscada": "#E4C49B",
  "Mel": "#F2D29A",
  "Rosa-queimado": "#E9B69C",
  "Bolo de Nozes": "#E5C49D",
  "Barbante": "#F0D19A",
  "Agreste": "#E7B89E",
  "Chapéu de Sol": "#D1A681",
  "Crème Brûlée": "#D3A884",
  "Granizo": "#BDBDBB",
  "Paturí": "#BDB5A9",
  "Galho Seco": "#C4B09A",
  "Cavalo-marinho": "#B9A692",
  "Cadeira de Balanço": "#D2A782",
  "Folha de Tabaco": "#BFA07F",
  "Estrada Velha": "#C2A484",
  "Berimbau": "#BFA383",
  "Passas ao Rum": "#C0A485",
  "Arte Barroca": "#BFA486",
  "Madagascar": "#D2A783",
  "Flor-de-anis": "#E6B29A",
  "Favo de Mel": "#C8A985",
  "Castanha Portuguesa": "#D2A885",
  "Ponte Pênsil": "#BFA487",
  "Canguru": "#BFA588",
  "Granadilha": "#F6935F",
  "Pequi de Goiás": "#F79562",
  "Damasco": "#F89765",
  "Crepúsculo": "#F99968",
  "Bolo de Cenoura": "#F99A6A",
  "Folhas de Outono": "#F99B6D",
  "Alaranjado Vintage": "#F7844D",
  "Forró": "#F88650",
  "Sol de Inverno": "#F98853",
  "Ocre": "#F98955",
  "Laranja Pop": "#F98A58",
  "Cajá": "#F98B5A",
  "Vitamina de Papaia": "#F7753A",
  "Samba": "#F8783E",
  "Pétala Laranja": "#F97A41",
  "Doce de Gengibre": "#F97C44",
  "Suco de Tangerina": "#F97E47",
  "Tijolo Queimado": "#F9804A",
  "Rosa-alaranjada": "#F76627",
  "Festa Junina": "#F8692B",
  "África": "#F96B2E",
  "Paisagem de Marte": "#F96D31",
  "Tangerina Fresca": "#F96F34",
  "Miçanga": "#F97137",
  "Cúrcuma": "#F67A31",
  "Estrada da Fazenda": "#F77D34",
  "Gema Caipira": "#F88037",
  "Afrobeat": "#F9833A",
  "Chão de Taco": "#F9863D",
  "Peixe Palhaço": "#F98940",
  "Frevo": "#F78B42",
  "Manga": "#F88E45",
  "Âmbar": "#B86025",
  "Tijolo": "#B95B22",
  "Fascínio": "#F99048",
  "Cobertura de Laranja": "#F9934B",
  "Tapete Marroquino": "#F77C31",
  "General": "#F87F35",
  "Mamão com Açúcar": "#F98239",
  "Marrakesh": "#F9853D",
  "Geleia de Goiaba": "#F98841",
  "Carnaval": "#F98B45",
  "Bala de Caramelo": "#F76D1E",
  "Maracatu": "#F87022",
  "Calor de Dubai": "#F97326",
  "Petúnia Rosa": "#F8CECC",
  "Lírio-rosa": "#F4D4D2",
  "Rosa-amor": "#FED5C8",
  "Conto de Fadas": "#F3D4DE",
  "Pérola-rosa": "#ECD0D5",
  "Doce Desejo": "#F9D0C9",
  "Amendoeira em Flor": "#F8D0BD",
  "Rosa Sapatilha": "#F2CCCB",
  "Delícia de Morango": "#F3D1E2",
  "Talco Rosa": "#F7CBD0",
  "Surpresa": "#F6C3BD",
  "Floco de Neve": "#F5F5F5",
  "Arrepio": "#F4EDE8",
  "Toque de Porcelana": "#EBEAEB",
  "Sopro": "#E8EEE6",
  "Silêncio das Águas": "#EDEAEB",
  "Casamento": "#F0E9E4",
  "Boas Lembranças": "#EEE8E9",
  "Ar Refrescante": "#EBE8EA",
  "Pétala": "#C7C4D8",
  "Marshmallow": "#F1E8E3",
  "Lenço de Bolso": "#EAE8E7",
  "Espuma Cremosa": "#F2E9E7",
  "Leite de Soja": "#F5EEF1",
  "Pêssego-suave": "#F3E8DF",
  "Graciosa": "#F1E9EC",
  "Flor de Laranjeira": "#EBE4E8",
  "Doce Marshmallow": "#EFE7E8",
  "Delicadeza": "#EEE7E9",
  "Noite de Núpcias": "#F4E5DE",
  "Flor de Vanila": "#EAE0E0",
  "Camisola de Cetim": "#E0E6E8",
  "Branco Alasca": "#E7E4E4",
  "Rosa Pastel": "#F2E5E2",
  "Flor Lilás": "#EBE2DF",
  "Feitiço Inocente": "#E2DDDE",
  "Crochê da Vovó": "#E8E1E3",
  "Aroma da Noite": "rgb(225,219,222)",
  "Amor - sem - fim": "rgb(231,222,215)",
  "Tarde Misteriosa": "rgb(223,218,218)",
  "Palomino": "rgb(246,227,212)",
  "Orvalho": "rgb(242,222,213)",
  "Fita de Seda": "rgb(241,226,230)",
  "Beleza Natural": "rgb(244,222,215)",
  "Arroz-doce": "rgb(230,220,216)",
  "Talco": "rgb(245,223,211)",
  "Renda": "rgb(224,215,215)",
  "Olhar Misterioso": "#F8CECC",
  "Espumante Rosé": "#F8CECC",
  "Biscoito Caseiro": "#F8CECC",
  "Biju": "#F8CECC",
  "Avela": "#F8CECC",
  "Rosa-bebê": "#F8CECC",
  "Rosa Altar": "#F8CECC",
  "Praia de Ipanema": "#F8CECC",
  "Carinho Intenso": "#F8CECC",
  "Beijo-de-anjo": "#F8CECC",
  "Milk-shake": "#F8CECC",
  "Hippie Chique": "#F8CECC",
  "Cacatua Rosa": "#F8CECC",
  "Copacabana": "#F8CECC",
  "Céu de Primavera": "#F8CECC",
  "Castiçal": "#F8CECC",
  "Bodas de Diamante": "#F8CECC",
  "Flor da Paz": "#F8CECC",
  "Patins": "#F8CECC",
  "Pedra do amor": "#F8CECC",
  "Sapatilha de bailarina": "#F8CECC",
  "Colcha de cama": "#F8CECC",
  "Sapatilha de Ponta": "#F8CECC",
  "Flor de Macieira": "#F8CECC",
  "Caminho de Vento": "#F8CECC",
  "Vestido de Seda": "#F8CECC",
  "Pingo de Leite": "#F8CECC",
  "Longo Amor": "#F8CECC",
  "Rosa Secreto": "#F8CECC",
  "Flor-de-maio": "#F8CECC",
  "Duna": "#F8CECC",
  "Saída de Banho": "#F8CECC",
  "Rosa-talco": "#F8CECC",
  "Reco-reco": "#F8CECC",
  "Palito de Picolé": "#F8CECC",
  "Jogo de Cartas": "#F8CECC",
  "Boneca de Pano": "#F8CECC",
  "Adamascado-claro": "#F8CECC",
  "Papiro Egípcio": "#F8CECC",
  "Veludo Cristal": "#F8CECC",
  "Pedreira": "#F8CECC",
  "Cevada": "#F8CECC",
  "Marrom Sussuro": "#F8CECC",
  "Papíro Egípcio": "#F8CECC",
  "Allure": "#F8CECC",
  "Miragem": "#F8CECC",
  "Cartas Guardadas": "#F8CECC",
  "Sonho com Nata": "#F8CECC",
  "Jujuba Rosa": "#F8CECC",
  "Tarde de Outono": "#F8CECC",
  "Rosa-neon": "#F8CECC",
  "Sorvete de Morango": "#F8CECC",
  "Rosa-balé": "#F8CECC",
  "Lago Rosa": "#F8CECC",
  "Astúcia": "#F8CECC",
  "Bicho-de-pé": "#F8CECC",
  "Morango com Champanhe": "#F8CECC",
  "Bala de Morango": "#F8CECC",
  "Torta de Morango": "#F8CECC",
  "Promenade": "#F8CECC",
  "Frapé de Pêssego": "#F8CECC",
  "Figo": "#F8CECC",
  "Sensação": "#F8CECC",
  "Bromélia": "#F8CECC",
  "Prímula-rosa": "#F8CECC",
  "Mousse de Iogurte": "#F8CECC",
  "Flan de Morango": "#F8CECC",
  "Creme de Papaya": "#F8CECC",
  "Bala de Iogurte": "#F8CECC",
  "Babushka": "#F8CECC",
  "Ternura": "#F8CECC",
  "Ninfeta-rosa": "#F8CECC",
  "Flor-de-lis": "#F8CECC",
  "Boina Rosa": "#F8CECC",
  "Sempre-viva": "#F8CECC",
  "Vitamina C": "#F8CECC",
  "Morango com Suspiro": "#F8CECC",
  "Sorbet de Morango": "#F8CECC",
  "Creme Escocês": "#F8CECC",
  "Capa de Livro": "#F8CECC",
  "Penteadeira": "#F8CECC",
  "Lenda de Amor": "#F8CECC",
  "Fruta-da-condessa": "#F8CECC",
  "Petit-suisse": "#F8CECC",
  "Pedaço do Céu": "#F8CECC",
  "Amor Platônico": "#F8CECC",
  "Águia": "#F8CECC",
  "Mesa de Bar": "#F8CECC",
  "Flor de Cerejeira": "#F8CECC",
  "Tempestade": "#F8CECC",
  "Rosa Delicado": "#F8CECC",
  "Focinho de Gato": "#F8CECC",
  "Chão Batido": "#F8CECC",
  "Bolero": "#F8CECC",
  "Bala Toffee": "#F8CECC",
  "Sachê-de-rosas": "#F8CECC",
  "Rosa Laranja": "#F8CECC",
  "Bala de Maçã": "#F8CECC",
  "Bailarina": "#F8CECC",
  "Árvore dos Sonhos": "#F8CECC",
  "Anos Dourados": "#F8CECC",
  "Primorosa": "#F8CECC",
  "Begônia-rosada": "#F8CECC",
  "Meia-luz": "#F8CECC",
  "Açucena": "#F8CECC",
  "Rosa Giz": "#F8CECC",
  "Rosa Fumê": "#F8CECC",
  "Jambo": "#F8CECC",
  "Rosa-bronzeado": "#F8CECC",
  "Banana com Canela": "#F8CECC",
  "Argila": "#F8CECC",
  "Orquestra": "#F8CECC",
  "Couro": "#F8CECC",
  "Jangada": "#F8CECC",
  "Farofa Doce": "#F8CECC",
  "Bombom de Licor": "#F8CECC",
  "Arco e Flecha": "#F8CECC",
  "Suéter": "#F8CECC",
  "Coreto na Praça": "#F8CECC",
  "Janela Indiscreta": "#F8CECC",
  "Talismã": "#F8CECC",
  "Coco Queimado": "#F8CECC",
  "Canoa Quebrada": "#F8CECC",
  "Casca de Jatobá": "#F8CECC",
  "Tapete de Crochê": "#F8CECC",
  "Alfazema Florida": "#F8CECC",
  "Artesanato": "#F8CECC",
  "Vela Aromatizada": "#F8CECC",
  "Surpresa de Amora": "#F8CECC",
  "Poeira Lunar": "#F8CECC",
  "Cinza-espacial": "#F8CECC",
  "Grão de Café": "#F8CECC",
  "Uva do Cerrado": "#F8CECC",
  "Estrada deserta": "#F8CECC",
  "Saia Justa": "#F8CECC",
  "Cimento Moderno": "#F8CECC",
  "Microfone": "#F8CECC",
  "Hibisco": "#F8CECC",
  "Tulipa-rosa": "#F8CECC",
  "Suco de Acerola": "#F8CECC",
  "Calêndula": "#F8CECC",
  "Cravo-rosa": "#F8CECC",
  "Bola de Chiclete": "#F8CECC",
  "Solarium": "#F8CECC",
  "Goiaba": "#F8CECC",
  "Pluméria Rubra": "#F8CECC",
  "Esmalte Rosa": "#F8CECC",
  "Camélia": "#F8CECC",
  "Tafetá": "#F8CECC",
  "Alto-astral": "#F8CECC",
  "Coroa Imperial": "#F8CECC",
  "Beleza Pura": "#F8CECC",
  "Rosa-choque": "#F8CECC",
  "Picante": "#F8CECC",
  "Melancia": "#F8CECC",
  "Frutas Vermelhas": "#F8CECC",
  "Doce Paixão": "#F8CECC",
  "Verso Imoral": "#F8CECC",
  "Telha Nova": "#F8CECC",
  "Framboesa": "#F8CECC",
  "Carmim": "#F8CECC",
  "Vermelho Cardinal": "#F8CECC",
  "Semente de Guaraná": "#F8CECC",
  "Gérbera Vermelha": "#F8CECC",
  "Buquê-de-noiva": "#F8CECC",
  "Nectarina": "#F8CECC",
  "Rosa-intenso": "#F8CECC",
  "Sapato de Salto": "#F8CECC",
  "Flor-de-são-joão": "#F8CECC",
  "Encontro Ardente": "#F8CECC",
  "Vermelho-jalapeño": "#F8CECC",
  "Rosa Vibrante": "#F8CECC",
  "Passado Intenso": "#F8CECC",
  "Suco de Framboesa": "#F8CECC",
  "Pura Luxúria": "#F8CECC",
  "Paixão Inspiradora": "#F8CECC",
  "Flamboyant": "#F8CECC",
  "Altas Horas": "#F8CECC",
  "Vermelho-amor": "#F8CECC",
  "Terra Molhada": "#F8CECC",
  "Páprica": "#F8CECC",
  "Cabelos ao Vento": "#F8CECC",
  "Mármore Vinho": "#F8CECC",
  "Vesúvio": "#F8CECC",
  "Valentino": "#F8CECC",
  "Amor Fatal": "#F8CECC",
  "Terracota": "#F8CECC",
  "Pingente de Rubi": "#F8CECC",
  "Cereja": "#F8CECC",
  "Rouge": "#F8CECC",
  "Tarde de Inverno": "#F8CECC",
  "Rosa-comportado": "#F8CECC",
  "Lenha": "#F8CECC",
  "Buquê de Rosas": "#F8CECC",
  "Vermelho-oriental": "#F8CECC",
  "Poção do Amor": "#F8CECC",
  "Flor de Românzeira": "#F8CECC",
  "Chão de Barro": "#F8CECC",
  "Peroba Rosa": "#F8CECC",
  "Vinho do Porto": "#F8CECC",
  "Petúnia": "#F8CECC",
  "Fim de tarde": "#F8CECC",
  "Rosa Champagne": "#F8CECC",
  "Debutante": "#F8CECC",
  "Estrada real": "#F8CECC",
  "Licor de uva": "#F8CECC",
  "Hibisco Selvagem": "#F8CECC",
  "Cancã": "#F8CECC",
  "Truque de Mágica": "#F8CECC",
  "Cochia": "#F8CECC",
  "Chocolate amargo": "#F8CECC",
  "Alburno": "#F8CECC",
  "Tentação": "#F8CECC",
  "Rosa-fantástico": "#F8CECC",
  "Pink": "#F8CECC",
  "Flor-de-alcachofra": "#F8CECC",
  "Bossa Nova": "#F8CECC",
  "Tapeçaria": "#F8CECC",
  "Rosa-floral": "#F8CECC",
  "Marrom-rosado": "#F8CECC",
  "Vermelho-veneziano": "#F8CECC",
  "Azaleia": "#F8CECC",
  "Argila Vermelha": "#F8CECC",
  "Cortina de Teatro": "#F8CECC",
  "Vermelho-sedução": "#F8CECC",
  "Terra Roxa": "#F8CECC",
  "Tamarindo": "#F8CECC",
  "Gelatina de Framboesa": "#F8CECC",
  "Damasco Seco": "#F8CECC",
  "Torta de Caramelo": "#F8CECC",
  "Terra batida": "#F8CECC",
  "Quadra de Saibro": "#F8CECC",
  "Cerâmica Rosa": "#F8CECC",
  "Urucum Tropical": "#F8CECC",
  "Begonia": "#F8CECC",
  "Aroeira do Sertão": "#F8CECC",
  "Anis estrelado": "#F8CECC",
  "Semente de Romã": "#F8CECC",
  "Batom Malva": "#F8CECC",
  "Murumuru": "#F8CECC",
  "Vale dos Vinhedos": "#F8CECC",
  "Uva-rosada": "#F8CECC",
  "Marrom-glacê": "#F8CECC",
  "Tomate Seco": "#F8CECC",
  "Rosa-blush": "#F8CECC",
  "Uva-rubi": "#F8CECC",
  "Hena": "#F8CECC",
  "Mogno Brasileiro": "#F8CECC",
  "Pó de Tijolo": "#F8CECC",
  "Malva Urbana": "#F8CECC",
  "Antúrio púrpura": "#F8CECC",
  "Argila Cerâmica": "#F8CECC",
  "Semente Frutífera": "#F8CECC",
  "Buganvile": "#F8CECC",
  "Barro Vermelho": "#F8CECC",
  "Camu-camu": "#F8CECC",
  "Açaí": "#F8CECC",
  "Vinho Tinto": "#F8CECC",
  "Lambada": "#F8CECC",
  "Batom de Cereja": "#F8CECC",
  "Rubi": "#F8CECC",
  "Roxo-obsessão": "#F8CECC",
  "Ferrugem": "#F8CECC",
  "Telhado": "#F8CECC",
  "Desejo": "#F8CECC",
  "Bolsa de Veludo": "#F8CECC",
  "Belvedere": "#F8CECC",
  "Café colonial": "#F8CECC",
  "Compota de Cereja": "#F8CECC",
  "Bombom Carmesim": "#F8CECC",
  "Desejo Escarlate": "#F8CECC",
  "Vinho Sedutor": "#F8CECC",
  "Goiabada": "#F8CECC",
  "Calda de Chocolate": "#F8CECC",
  "Banco da Praça": "#F8CECC",
  "Chocolate em Pó": "#F8CECC",
  "Baú de Madeira": "#F8CECC",
  "Shimeji": "#F8CECC",
  "Âncora": "#F8CECC",
  "Gaita": "#F8CECC",
  "Ameixa": "#F8CECC",
  "Lambari Roxo": "#F8CECC",
  "Tarde Chuvosa": "#F8CECC",
  "Geleia de Amora": "#F8CECC",
  "Semente de Jatobá": "#F8CECC",
  "Borra de Café": "#F8CECC",
  "Festival de Teatro": "#F8CECC",
  "Magneto": "#F8CECC",
  "Petit Gâteau": "#F8CECC",
  "Noite de Gala": "#F8CECC",
  "Esconderijo Misterioso": "#F8CECC",
  "Chocolate Derretido": "#F8CECC",
  "Calda de Amora": "#F8CECC",
  "Cabruca": "#F8CECC",
  "Visão Noturna": "#F8CECC",
  "Licor de Cassis": "#F8CECC",
  "Silêncio da noite": "#F8CECC",
  "Favo de Baunilha": "#F8CECC",
  "Chocolate Meio Amargo": "#F8CECC",
  "Aceto Balsâmico": "#F8CECC",
  "Mogno": "#F8CECC",
  "Carvão": "#F8CECC",
  "Preto Intenso": "#F8CECC",
  "Azeitona Preta": "#F8CECC",
  "Amaro": "#F8CECC",
  "Vibração Selvagem": "#F8CECC",
  "Preto-asfalto": "#F8CECC",
  "Café Torrado": "#F8CECC",
  "Marrom-luxo": "#F8CECC",
  "Uva-passa": "#F8CECC",
  "Roxo Profundo": "#F8CECC",
  "Geleia de Ameixa": "#F8CECC",
  "Bombom de Ameixa": "#F8CECC",
  "Bordô": "#683A3F"
};
  

  


export function Dados() {


  useEffect(() => {
    setInterval(() => {
      const fundo = document.getElementById('fundo');
      const input = document.getElementById('input').value;

      fundo.style.backgroundColor = hex[input];
    }, 100)
  }, [])
  

   

  return (
    <div className='main'>
   
      <div className="color" >
        <select id='input'>
          <option id='label'>Amarelos:</option>
          <option value="Papel de Seda">Papel de Seda</option>
          <option value="Brilho do Luar">Brilho do Luar</option>
          <option value="Suspiro Caseiro">Suspiro Caseiro</option>
          <option value="Manteiga de Carité">Manteiga de Carité</option>
          <option value="Luz do Sol">Luz do Sol</option>
          <option value="Jasmim-amarelo">Jasmim-amarelo</option>
          <option value="Gengibre">Gengibre</option>
          <option value="Polpa de Mangostim">Polpa de Mangostim</option>
          <option value="Chapada Diamantina">Chapada Diamantina</option>
          <option value="Pinus">Pinus</option>
          <option value="Cinza-urbano">Cinza-urbano</option>
          <option value="Sisal">Sisal</option>
          <option value="Pedra de Caulinita">Pedra de Caulinita</option>
          <option value="Espuma de Baunilha">Espuma de Baunilha</option>
          <option value="Lua de Cristal">Lua de Cristal</option>
          <option value="Som das Ondas">Som das Ondas</option>
          <option value="Bem-me-quer">Bem-me-quer</option>
          <option value="Praia Branca">Praia Branca</option>
          <option value="Macramê">Macramê</option>
          <option value="Tesouro Perdido">Tesouro Perdido</option>
          <option value="Pitaia Colombiana">Pitaia Colombiana</option>
          <option value="Seiva de Cajueiro">Seiva de Cajueiro</option>
          <option value="Cacau da Bahia">Cacau da Bahia</option>
          <option value="Felicidade">Felicidade</option>
          <option value="Prata">Prata</option>
          <option value="Prata Envelhecido">Prata Envelhecido</option>
          <option value="Terra Fértil">Terra Fértil</option>
          <option value="Rock'n Roll">Rock'n Roll</option>
          <option id='label'>Laranjas:</option>
          <option value="Farda Militar">Farda Militar</option>
          <option value="Black">Black</option>
          <option value="Pérola Cintilante">Pérola Cintilante</option>
          <option value="Veranelo">Veranelo</option>
          <option value="Luxo">Luxo</option>
          <option value="Croissant">Croissant</option>
          <option value="Vintage">Vintage</option>
          <option value="Rosa-champanhe">Rosa-champanhe</option>
          <option value="Naturale">Naturale</option>
          <option value="Pêssego">Pêssego</option>
          <option value="Aquarela Pêssego">Aquarela Pêssego</option>
          <option value="Amarelo dos Andes">Amarelo dos Andes</option>
          <option value="Sorbet de Baunilha">Sorbet de Baunilha</option>
          <option value="Nuvem de Papel">Nuvem de Papel</option>
          <option value="Silêncio da Manhã">Silêncio da Manhã</option>
          <option value="Nata">Nata</option>
          <option value="Cordilheira dos Andes">Cordilheira dos Andes</option>
          <option value="Nata Fresca">Nata Fresca</option>
          <option value="Lugar Comum">Lugar Comum</option>
          <option value="Gelo Seco">Gelo Seco</option>
          <option value="Balé Chinês">Balé Chinês</option>
          <option value="Açúcar Cristal">Açúcar Cristal</option>
          <option value="Pão de Minuto">Pão de Minuto</option>
          <option value="Mimo">Mimo</option>
          <option value="Montanhas Rochosas">Montanhas Rochosas</option>
          <option value="Lenda do Deserto">Lenda do Deserto</option>
          <option value="Espinho de Rosa">Espinho de Rosa</option>
          <option value="Brilho de Estrela">Brilho de Estrela</option>
          <option value="Violoncelo">Violoncelo</option>
          <option value="Quase Rosa">Quase Rosa</option>
          <option value="Lua Minguante">Lua Minguante</option>
          <option value="Castanha-de-caju">Castanha-de-caju</option>
          <option value="Berço">Berço</option>
          <option value="Algodão Egípcio">Algodão Egípcio</option>
          <option value="Luar">Luar</option>
          <option value="Gelo">Gelo</option>
          <option value="Pérola">Pérola</option>
          <option value="Metrópole">Metrópole</option>
          <option value="Tiramisu">Tiramisu</option>
          <option value="Palha">Palha</option>
          <option value="Ouro Branco">Ouro Branco</option>
          <option value="Lascas de Macadâmia">Lascas de Macadâmia</option>
          <option value="Humanidade">Humanidade</option>
          <option value="Esponja do Mar">Esponja do Mar</option>
          <option value="Casquinha de Sorvete">Casquinha de Sorvete</option>
          <option value="Areia do Deserto">Areia do Deserto</option>
          <option value="Adormecida">Adormecida</option>
          <option value="Agulha de Costura">Agulha de Costura</option>
          <option value="Papel Picado">Papel Picado</option>
          <option value="Flan de Baunilha">Flan de Baunilha</option>
          <option value="Trigo">Trigo</option>
          <option value="Papel Sedoso">Papel Sedoso</option>
          <option value="Gergelim">Gergelim</option>
          <option value="Duna Maranhense">Duna Maranhense</option>
          <option value="Sol de Outono">Sol de Outono</option>
          <option value="Mormaço">Mormaço</option>
          <option value="Pedrisco Palha">Pedrisco Palha</option>
          <option value="Ratan">Ratan</option>
          <option value="Pasta de Amendoim">Pasta de Amendoim</option>
          <option value="Areia">Areia</option>
          <option value="Meia-calça">Meia-calça</option>
          <option value="Canjica">Canjica</option>
          <option value="Marfim Nobre">Marfim Nobre</option>
          <option value="Crômio">Crômio</option>
          <option value="Tapete de Juta">Tapete de Juta</option>
          <option value="Puma">Puma</option>
          <option value="Broto de Feijão">Broto de Feijão</option>
          <option value="Tempestade no Mar">Tempestade no Mar</option>
          <option value="Ráfia">Ráfia</option>
          <option value="Inverno Gelado">Inverno Gelado</option>
          <option value="Lampião">Lampião</option>
          <option value="Doce de Leite">Doce de Leite</option>
          <option value="Cocada">Cocada</option>
          <option value="Andiroba">Andiroba</option>
          <option value="Ovelha">Ovelha</option>
          <option value="Camelo">Camelo</option>
          <option value="Frescor de Laranja">Frescor de Laranja</option>
          <option value="Sorvete de Mamão">Sorvete de Mamão</option>
          <option value="Nêspera">Nêspera</option>
          <option value="Frutas Naturais">Frutas Naturais</option>
          <option value="Laranja Açucarada">Laranja Açucarada</option>
          <option value="Final de Tarde">Final de Tarde</option>
          <option value="Doce de Damasco">Doce de Damasco</option>
          <option value="Cuíca">Cuíca</option>
          <option value="Tropicália">Tropicália</option>
          <option value="Maracá">Maracá</option>
          <option value="Bacupari do Cerrado">Bacupari do Cerrado</option>
          <option value="Sorvete de Pêssego">Sorvete de Pêssego</option>
          <option value="Ciranda">Ciranda</option>
          <option value="Camélia-laranja">Camélia-laranja</option>
          <option value="Caju">Caju</option>
          <option value="Cabaça">Cabaça</option>
          <option value="Baião">Baião</option>
          <option value="Flocos de Milho">Flocos de Milho</option>
          <option value="Biscoito-champagne">Biscoito-champagne</option>
          <option value="Jenipapo">Jenipapo</option>
          <option value="Seriguela">Seriguela</option>
          <option value="Areia do Sertão">Areia do Sertão</option>
          <option value="Coala">Coala</option>
          <option value="Polpa de Pêssego">Polpa de Pêssego</option>
          <option value="Papaia">Papaia</option>
          <option value="Bronze">Bronze</option>
          <option value="Sofá Aveludado">Sofá Aveludado</option>
          <option value="Cortiça">Cortiça</option>
          <option value="Início do Verão">Início do Verão</option>
          <option value="Damasco Suave">Damasco Suave</option>
          <option value="Recheio de Avelã">Recheio de Avelã</option>
          <option value="Oca">Oca</option>
          <option value="Base Soft">Base Soft</option>
          <option value="Néctar de Pêssego">Néctar de Pêssego</option>
          <option value="Pão de Ló">Pão de Ló</option>
          <option value="Ninho">Ninho</option>
          <option value="Frescor da Manhã">Frescor da Manhã</option>
          <option value="Capoeira">Capoeira</option>
          <option value="Nozes">Nozes</option>
          <option value="Linho do Oriente">Linho do Oriente</option>
          <option value="Lebre">Lebre</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Choconhaque">Choconhaque</option>
          <option value="Camurça">Camurça</option>
          <option value="Juta">Juta</option>
          <option value="Amendoim">Amendoim</option>
          <option value="Noz-moscada">Noz-moscada</option>
          <option value="Mel">Mel</option>
          <option value="Rosa-queimado">Rosa-queimado</option>
          <option value="Bolo de Nozes">Bolo de Nozes</option>
          <option value="Barbante">Barbante</option>
          <option value="Agreste">Agreste</option>
          <option value="Chapéu de Sol">Chapéu de Sol</option>
          <option value="Crème Brûlée">Crème Brûlée</option>
          <option value="Granizo">Granizo</option>
          <option value="Paturí">Paturí</option>
          <option value="Galho Seco">Galho Seco</option>
          <option value="Cavalo-marinho">Cavalo-marinho</option>
          <option value="Cadeira de Balanço">Cadeira de Balanço</option>
          <option value="Folha de Tabaco">Folha de Tabaco</option>
          <option value="Estrada Velha">Estrada Velha</option>
          <option value="Berimbau">Berimbau</option>
          <option value="Passas ao Rum">Passas ao Rum</option>
          <option value="Arte Barroca">Arte Barroca</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Flor-de-anis">Flor-de-anis</option>
          <option value="Favo de Mel">Favo de Mel</option>
          <option value="Castanha Portuguesa">Castanha Portuguesa</option>
          <option value="Ponte Pênsil">Ponte Pênsil</option>
          <option value="Canguru">Canguru</option>
          <option value="Granadilha">Granadilha</option>
          <option value="Pequi de Goiás">Pequi de Goiás</option>
          <option value="Damasco">Damasco</option>
          <option value="Crepúsculo">Crepúsculo</option>
          <option value="Bolo de Cenoura">Bolo de Cenoura</option>
          <option value="Folhas de Outono">Folhas de Outono</option>
          <option value="Alaranjado Vintage">Alaranjado Vintage</option>
          <option value="Forró">Forró</option>
          <option value="Sol de Inverno">Sol de Inverno</option>
          <option value="Ocre">Ocre</option>
          <option value="Laranja Pop">Laranja Pop</option>
          <option value="Cajá">Cajá</option>
          <option value="Vitamina de Papaia">Vitamina de Papaia</option>
          <option value="Samba">Samba</option>
          <option value="Pétala Laranja">Pétala Laranja</option>
          <option value="Doce de Gengibre">Doce de Gengibre</option>
          <option value="Suco de Tangerina">Suco de Tangerina</option>
          <option value="Tijolo Queimado">Tijolo Queimado</option>
          <option value="Rosa-alaranjada">Rosa-alaranjada</option>
          <option value="Festa Junina">Festa Junina</option>
          <option value="África">África</option>
          <option value="Paisagem de Marte">Paisagem de Marte</option>
          <option value="Tangerina Fresca">Tangerina Fresca</option>
          <option value="Miçanga">Miçanga</option>
          <option value="Cúrcuma">Cúrcuma</option>
          <option value="Estrada da Fazenda">Estrada da Fazenda</option>
          <option value="Gema Caipira">Gema Caipira</option>
          <option value="Afrobeat">Afrobeat</option>
          <option value="Chão de Taco">Chão de Taco</option>
          <option value="Peixe Palhaço">Peixe Palhaço</option>
          <option value="Frevo">Frevo</option>
          <option value="Manga">Manga</option>
          <option value="Âmbar">Âmbar</option>
          <option value="Tijolo">Tijolo</option>
          <option value="Fascínio">Fascínio</option>
          <option value="Cobertura de Laranja">Cobertura de Laranja</option>
          <option value="Tapete Marroquino">Tapete Marroquino</option>
          <option value="General">General</option>
          <option value="Mamão com Açúcar">Mamão com Açúcar</option>
          <option value="Marrakesh">Marrakesh</option>
          <option value="Geleia de Goiaba">Geleia de Goiaba</option>
          <option value="Carnaval">Carnaval</option>
          <option value="Bala de Caramelo">Bala de Caramelo</option>
          <option value="Maracatu">Maracatu</option>
          <option value="Calor de Dubai">Calor de Dubai</option>
          <option id='label'>Vermelhos e Rosas:</option>
          <option value="Petúnia Rosa">Petúnia Rosa</option>
<option value="Lírio-rosa">Lírio-rosa</option>
<option value="Rosa-amor">Rosa-amor</option>
<option value="Conto de Fadas">Conto de Fadas</option>
<option value="Pérola-rosa">Pérola-rosa</option>
<option value="Doce Desejo">Doce Desejo</option>
<option value="Amendoeira em Flor">Amendoeira em Flor</option>
<option value="Rosa Sapatilha">Rosa Sapatilha</option>
<option value="Delícia de Morango">Delícia de Morango</option>
<option value="Talco Rosa">Talco Rosa</option>
<option value="Surpresa">Surpresa</option>
<option value="Floco de Neve">Floco de Neve</option>
<option value="Arrepio">Arrepio</option>
<option value="Toque de Porcelana">Toque de Porcelana</option>
<option value="Sopro">Sopro</option>
<option value="Silêncio das Águas">Silêncio das Águas</option>
<option value="Casamento">Casamento</option>
<option value="Boas Lembranças">Boas Lembranças</option>
<option value="Ar Refrescante">Ar Refrescante</option>
<option value="Pétala">Pétala</option>
<option value="Marshmallow">Marshmallow</option>
<option value="Lenço de Bolso">Lenço de Bolso</option>
<option value="Espuma Cremosa">Espuma Cremosa</option>
<option value="Leite de Soja">Leite de Soja</option>
<option value="Pêssego-suave">Pêssego-suave</option>
<option value="Graciosa">Graciosa</option>
<option value="Flor de Laranjeira">Flor de Laranjeira</option>
<option value="Doce Marshmallow">Doce Marshmallow</option>
<option value="Delicadeza">Delicadeza</option>
<option value="Noite de Núpcias">Noite de Núpcias</option>
<option value="Flor de Vanila">Flor de Vanila</option>
<option value="Camisola de Cetim">Camisola de Cetim</option>
<option value="Branco Alasca">Branco Alasca</option>
<option value="Rosa Pastel">Rosa Pastel</option>
<option value="Flor Lilás">Flor Lilás</option>
<option value="Feitiço Inocente">Feitiço Inocente</option>
<option value="Crochê da Vovó">Crochê da Vovó</option>
<option value="Aroma da Noite">Aroma da Noite</option>
<option value="Amor - sem - fim">Amor - sem - fim</option>
<option value="Tarde Misteriosa">Tarde Misteriosa</option>
<option value="Palomino">Palomino</option>
<option value="Orvalho">Orvalho</option>
<option value="Fita de Seda">Fita de Seda</option>
<option value="Beleza Natural">Beleza Natural</option>
<option value="Arroz-doce">Arroz-doce</option>
<option value="Talco">Talco</option>
<option value="Renda">Renda</option>
<option value="Olhar Misterioso">Olhar Misterioso</option>
<option value="Espumante Rosé">Espumante Rosé</option>
<option value="Biscoito Caseiro">Biscoito Caseiro</option>
<option value="Biju">Biju</option>
<option value="Avela">Avela</option>
<option value="Rosa-bebê">Rosa-bebê</option>
<option value="Rosa Altar">Rosa Altar</option>
<option value="Praia de Ipanema">Praia de Ipanema</option>
<option value="Carinho Intenso">Carinho Intenso</option>
<option value="Beijo-de-anjo">Beijo-de-anjo</option>
<option value="Milk-shake">Milk-shake</option>
<option value="Hippie Chique">Hippie Chique</option>
<option value="Cacatua Rosa">Cacatua Rosa</option>
<option value="Copacabana">Copacabana</option>
<option value="Céu de Primavera">Céu de Primavera</option>
<option value="Castiçal">Castiçal</option>
<option value="Bodas de Diamante">Bodas de Diamante</option>
<option value="Flor da Paz">Flor da Paz</option>
<option value="Patins">Patins</option>
<option value="Pedra do amor">Pedra do amor</option>
<option value="Sapatilha de bailarina">Sapatilha de bailarina</option>
<option value="Colcha de cama">Colcha de cama</option>
<option value="Sapatilha de Ponta">Sapatilha de Ponta</option>
<option value="Flor de Macieira">Flor de Macieira</option>
<option value="Caminho de Vento">Caminho de Vento</option>
<option value="Vestido de Seda">Vestido de Seda</option>
<option value="Pingo de Leite">Pingo de Leite</option>
<option value="Longo Amor">Longo Amor</option>
<option value="Rosa Secreto">Rosa Secreto</option>
<option value="Flor-de-maio">Flor-de-maio</option>
<option value="Duna">Duna</option>
<option value="Saída de Banho">Saída de Banho</option>
<option value="Rosa-talco">Rosa-talco</option>
<option value="Reco-reco">Reco-reco</option>
<option value="Palito de Picolé">Palito de Picolé</option>
<option value="Jogo de Cartas">Jogo de Cartas</option>
<option value="Boneca de Pano">Boneca de Pano</option>
<option value="Adamascado-claro">Adamascado-claro</option>
<option value="Papiro Egípcio">Papiro Egípcio</option>
<option value="Veludo Cristal">Veludo Cristal</option>
<option value="Pedreira">Pedreira</option>
<option value="Cevada">Cevada</option>
<option value="Marrom Sussuro">Marrom Sussuro</option>
<option value="Papíro Egípcio">Papíro Egípcio</option>
<option value="Allure">Allure</option>
<option value="Miragem">Miragem</option>
<option value="Cartas Guardadas">Cartas Guardadas</option>
<option value="Sonho com Nata">Sonho com Nata</option>
<option value="Jujuba Rosa">Jujuba Rosa</option>
<option value="Tarde de Outono">Tarde de Outono</option>
<option value="Rosa-neon">Rosa-neon</option>
<option value="Sorvete de Morango">Sorvete de Morango</option>
<option value="Rosa-balé">Rosa-balé</option>
<option value="Lago Rosa">Lago Rosa</option>
<option value="Astúcia">Astúcia</option>
<option value="Bicho-de-pé">Bicho-de-pé</option>
<option value="Morango com Champanhe">Morango com Champanhe</option>
<option value="Bala de Morango">Bala de Morango</option>
<option value="Torta de Morango">Torta de Morango</option>
<option value="Promenade">Promenade</option>
<option value="Frapé de Pêssego">Frapé de Pêssego</option>
<option value="Figo">Figo</option>
<option value="Sensação">Sensação</option>
<option value="Bromélia">Bromélia</option>
<option value="Prímula-rosa">Prímula-rosa</option>
<option value="Mousse de Iogurte">Mousse de Iogurte</option>
<option value="Flan de Morango">Flan de Morango</option>
<option value="Creme de Papaya">Creme de Papaya</option>
<option value="Bala de Iogurte">Bala de Iogurte</option>
<option value="Babushka">Babushka</option>
<option value="Ternura">Ternura</option>
<option value="Ninfeta-rosa">Ninfeta-rosa</option>
<option value="Flor-de-lis">Flor-de-lis</option>
<option value="Boina Rosa">Boina Rosa</option>
<option value="Sempre-viva">Sempre-viva</option>
<option value="Vitamina C">Vitamina C</option>
<option value="Morango com Suspiro">Morango com Suspiro</option>
<option value="Sorbet de Morango">Sorbet de Morango</option>
<option value="Creme Escocês">Creme Escocês</option>
<option value="Capa de Livro">Capa de Livro</option>
<option value="Penteadeira">Penteadeira</option>
<option value="Lenda de Amor">Lenda de Amor</option>
<option value="Fruta-da-condessa">Fruta-da-condessa</option>
<option value="Petit-suisse">Petit-suisse</option>
<option value="Pedaço do Céu">Pedaço do Céu</option>
<option value="Amor Platônico">Amor Platônico</option>
<option value="Águia">Águia</option>
<option value="Mesa de Bar">Mesa de Bar</option>
<option value="Flor de Cerejeira">Flor de Cerejeira</option>
<option value="Tempestade">Tempestade</option>
<option value="Rosa Delicado">Rosa Delicado</option>
<option value="Focinho de Gato">Focinho de Gato</option>
<option value="Chão Batido">Chão Batido</option>
<option value="Bolero">Bolero</option>
<option value="Bala Toffee">Bala Toffee</option>
<option value="Sachê-de-rosas">Sachê-de-rosas</option>
<option value="Rosa Laranja">Rosa Laranja</option>
<option value="Bala de Maçã">Bala de Maçã</option>
<option value="Bailarina">Bailarina</option>
<option value="Árvore dos Sonhos">Árvore dos Sonhos</option>
<option value="Anos Dourados">Anos Dourados</option>
<option value="Primorosa">Primorosa</option>
<option value="Begônia-rosada">Begônia-rosada</option>
<option value="Meia-luz">Meia-luz</option>
<option value="Açucena">Açucena</option>
<option value="Rosa Giz">Rosa Giz</option>
<option value="Rosa Fumê">Rosa Fumê</option>
<option value="Jambo">Jambo</option>
<option value="Rosa-bronzeado">Rosa-bronzeado</option>
<option value="Banana com Canela">Banana com Canela</option>
<option value="Argila">Argila</option>
<option value="Orquestra">Orquestra</option>
<option value="Couro">Couro</option>
<option value="Jangada">Jangada</option>
<option value="Farofa Doce">Farofa Doce</option>
<option value="Bombom de Licor">Bombom de Licor</option>
<option value="Arco e Flecha">Arco e Flecha</option>
<option value="Suéter">Suéter</option>
<option value="Coreto na Praça">Coreto na Praça</option>
<option value="Janela Indiscreta">Janela Indiscreta</option>
<option value="Talismã">Talismã</option>
<option value="Coco Queimado">Coco Queimado</option>
<option value="Canoa Quebrada">Canoa Quebrada</option>
<option value="Casca de Jatobá">Casca de Jatobá</option>
<option value="Tapete de Crochê">Tapete de Crochê</option>
<option value="Alfazema Florida">Alfazema Florida</option>
<option value="Artesanato">Artesanato</option>
<option value="Vela Aromatizada">Vela Aromatizada</option>
<option value="Surpresa de Amora">Surpresa de Amora</option>
<option value="Poeira Lunar">Poeira Lunar</option>
<option value="Cinza-espacial">Cinza-espacial</option>
<option value="Grão de Café">Grão de Café</option>
<option value="Uva do Cerrado">Uva do Cerrado</option>
<option value="Estrada deserta">Estrada deserta</option>
<option value="Saia Justa">Saia Justa</option>
<option value="Cimento Moderno">Cimento Moderno</option>
<option value="Microfone">Microfone</option>
<option value="Hibisco">Hibisco</option>
<option value="Tulipa-rosa">Tulipa-rosa</option>
<option value="Suco de Acerola">Suco de Acerola</option>
<option value="Calêndula">Calêndula</option>
<option value="Cravo-rosa">Cravo-rosa</option>
<option value="Bola de Chiclete">Bola de Chiclete</option>
<option value="Solarium">Solarium</option>
<option value="Goiaba">Goiaba</option>
<option value="Pluméria Rubra">Pluméria Rubra</option>
<option value="Esmalte Rosa">Esmalte Rosa</option>
<option value="Camélia">Camélia</option>
<option value="Tafetá">Tafetá</option>
<option value="Alto-astral">Alto-astral</option>
<option value="Coroa Imperial">Coroa Imperial</option>
<option value="Beleza Pura">Beleza Pura</option>
<option value="Rosa-choque">Rosa-choque</option>
<option value="Picante">Picante</option>
<option value="Melancia">Melancia</option>
<option value="Frutas Vermelhas">Frutas Vermelhas</option>
<option value="Doce Paixão">Doce Paixão</option>
<option value="Verso Imoral">Verso Imoral</option>
<option value="Telha Nova">Telha Nova</option>
<option value="Framboesa">Framboesa</option>
<option value="Carmim">Carmim</option>
<option value="Vermelho Cardinal">Vermelho Cardinal</option>
<option value="Semente de Guaraná">Semente de Guaraná</option>
<option value="Gérbera Vermelha">Gérbera Vermelha</option>
<option value="Buquê-de-noiva">Buquê-de-noiva</option>
<option value="Nectarina">Nectarina</option>
<option value="Rosa-intenso">Rosa-intenso</option>
<option value="Sapato de Salto">Sapato de Salto</option>
<option value="Flor-de-são-joão">Flor-de-são-joão</option>
<option value="Encontro Ardente">Encontro Ardente</option>
<option value="Vermelho-jalapeño">Vermelho-jalapeño</option>
<option value="Rosa Vibrante">Rosa Vibrante</option>
<option value="Passado Intenso">Passado Intenso</option>
<option value="Suco de Framboesa">Suco de Framboesa</option>
<option value="Pura Luxúria">Pura Luxúria</option>
<option value="Paixão Inspiradora">Paixão Inspiradora</option>
<option value="Flamboyant">Flamboyant</option>
<option value="Altas Horas">Altas Horas</option>
<option value="Vermelho-amor">Vermelho-amor</option>
<option value="Terra Molhada">Terra Molhada</option>
<option value="Páprica">Páprica</option>
<option value="Cabelos ao Vento">Cabelos ao Vento</option>
<option value="Mármore Vinho">Mármore Vinho</option>
<option value="Vesúvio">Vesúvio</option>
<option value="Valentino">Valentino</option>
<option value="Amor Fatal">Amor Fatal</option>
<option value="Terracota">Terracota</option>
<option value="Pingente de Rubi">Pingente de Rubi</option>
<option value="Cereja">Cereja</option>
<option value="Rouge">Rouge</option>
<option value="Tarde de Inverno">Tarde de Inverno</option>
<option value="Rosa-comportado">Rosa-comportado</option>
<option value="Lenha">Lenha</option>
<option value="Buquê de Rosas">Buquê de Rosas</option>
<option value="Vermelho-oriental">Vermelho-oriental</option>
<option value="Poção do Amor">Poção do Amor</option>
<option value="Flor de Românzeira">Flor de Românzeira</option>
<option value="Chão de Barro">Chão de Barro</option>
<option value="Peroba Rosa">Peroba Rosa</option>
<option value="Vinho do Porto">Vinho do Porto</option>
<option value="Petúnia">Petúnia</option>
<option value="Fim de tarde">Fim de tarde</option>
<option value="Rosa Champagne">Rosa Champagne</option>
<option value="Debutante">Debutante</option>
<option value="Estrada real">Estrada real</option>
<option value="Licor de uva">Licor de uva</option>
<option value="Hibisco Selvagem">Hibisco Selvagem</option>
<option value="Cancã">Cancã</option>
<option value="Truque de Mágica">Truque de Mágica</option>
<option value="Cochia">Cochia</option>
<option value="Chocolate amargo">Chocolate amargo</option>
<option value="Alburno">Alburno</option>
<option value="Tentação">Tentação</option>
<option value="Rosa-fantástico">Rosa-fantástico</option>
<option value="Pink">Pink</option>
<option value="Flor-de-alcachofra">Flor-de-alcachofra</option>
<option value="Bossa Nova">Bossa Nova</option>
<option value="Tapeçaria">Tapeçaria</option>
<option value="Rosa-floral">Rosa-floral</option>
<option value="Marrom-rosado">Marrom-rosado</option>
<option value="Vermelho-veneziano">Vermelho-veneziano</option>
<option value="Azaleia">Azaleia</option>
<option value="Argila Vermelha">Argila Vermelha</option>
<option value="Cortina de Teatro">Cortina de Teatro</option>
<option value="Vermelho-sedução">Vermelho-sedução</option>
<option value="Terra Roxa">Terra Roxa</option>
<option value="Tamarindo">Tamarindo</option>
<option value="Gelatina de Framboesa">Gelatina de Framboesa</option>
<option value="Damasco Seco">Damasco Seco</option>
<option value="Torta de Caramelo">Torta de Caramelo</option>
<option value="Terra batida">Terra batida</option>
<option value="Quadra de Saibro">Quadra de Saibro</option>
<option value="Cerâmica Rosa">Cerâmica Rosa</option>
<option value="Urucum Tropical">Urucum Tropical</option>
<option value="Begonia">Begonia</option>
<option value="Aroeira do Sertão">Aroeira do Sertão</option>
<option value="Anis estrelado">Anis estrelado</option>
<option value="Semente de Romã">Semente de Romã</option>
<option value="Batom Malva">Batom Malva</option>
<option value="Murumuru">Murumuru</option>
<option value="Vale dos Vinhedos">Vale dos Vinhedos</option>
<option value="Uva-rosada">Uva-rosada</option>
<option value="Marrom-glacê">Marrom-glacê</option>
<option value="Tomate Seco">Tomate Seco</option>
<option value="Rosa-blush">Rosa-blush</option>
<option value="Uva-rubi">Uva-rubi</option>
<option value="Hena">Hena</option>
<option value="Mogno Brasileiro">Mogno Brasileiro</option>
<option value="Pó de Tijolo">Pó de Tijolo</option>
<option value="Malva Urbana">Malva Urbana</option>
<option value="Antúrio púrpura">Antúrio púrpura</option>
<option value="Argila Cerâmica">Argila Cerâmica</option>
<option value="Semente Frutífera">Semente Frutífera</option>
<option value="Buganvile">Buganvile</option>
<option value="Barro Vermelho">Barro Vermelho</option>
<option value="Camu-camu">Camu-camu</option>
<option value="Açaí">Açaí</option>
<option value="Vinho Tinto">Vinho Tinto</option>
<option value="Lambada">Lambada</option>
<option value="Batom de Cereja">Batom de Cereja</option>
<option value="Rubi">Rubi</option>
<option value="Roxo-obsessão">Roxo-obsessão</option>
<option value="Ferrugem">Ferrugem</option>
<option value="Telhado">Telhado</option>
<option value="Desejo">Desejo</option>
<option value="Bolsa de Veludo">Bolsa de Veludo</option>
<option value="Belvedere">Belvedere</option>
<option value="Café colonial">Café colonial</option>
<option value="Compota de Cereja">Compota de Cereja</option>
<option value="Bombom Carmesim">Bombom Carmesim</option>
<option value="Desejo Escarlate">Desejo Escarlate</option>
<option value="Vinho Sedutor">Vinho Sedutor</option>
<option value="Goiabada">Goiabada</option>
<option value="Calda de Chocolate">Calda de Chocolate</option>
<option value="Banco da Praça">Banco da Praça</option>
<option value="Chocolate em Pó">Chocolate em Pó</option>
<option value="Baú de Madeira">Baú de Madeira</option>
<option value="Shimeji">Shimeji</option>
<option value="Âncora">Âncora</option>
<option value="Gaita">Gaita</option>
<option value="Ameixa">Ameixa</option>
<option value="Lambari Roxo">Lambari Roxo</option>
<option value="Tarde Chuvosa">Tarde Chuvosa</option>
<option value="Geleia de Amora">Geleia de Amora</option>
<option value="Semente de Jatobá">Semente de Jatobá</option>
<option value="Borra de Café">Borra de Café</option>
<option value="Festival de Teatro">Festival de Teatro</option>
<option value="Magneto">Magneto</option>
<option value="Petit Gâteau">Petit Gâteau</option>
<option value="Noite de Gala">Noite de Gala</option>
<option value="Esconderijo Misterioso">Esconderijo Misterioso</option>
<option value="Chocolate Derretido">Chocolate Derretido</option>
<option value="Calda de Amora">Calda de Amora</option>
<option value="Cabruca">Cabruca</option>
<option value="Visão Noturna">Visão Noturna</option>
<option value="Licor de Cassis">Licor de Cassis</option>
<option value="Silêncio da noite">Silêncio da noite</option>
<option value="Favo de Baunilha">Favo de Baunilha</option>
<option value="Chocolate Meio Amargo">Chocolate Meio Amargo</option>
<option value="Aceto Balsâmico">Aceto Balsâmico</option>
<option value="Mogno">Mogno</option>
<option value="Carvão">Carvão</option>
<option value="Preto Intenso">Preto Intenso</option>
<option value="Azeitona Preta">Azeitona Preta</option>
<option value="Amaro">Amaro</option>
<option value="Vibração Selvagem">Vibração Selvagem</option>
<option value="Preto-asfalto">Preto-asfalto</option>
<option value="Café Torrado">Café Torrado</option>
<option value="Marrom-luxo">Marrom-luxo</option>
<option value="Uva-passa">Uva-passa</option>
<option value="Roxo Profundo">Roxo Profundo</option>
<option value="Geleia de Ameixa">Geleia de Ameixa</option>
<option value="Bombom de Ameixa">Bombom de Ameixa</option>
<option value="Bordô">Bordô</option>               
       </select>

      </div>
    </div>
  )
  
}

export default Dados
