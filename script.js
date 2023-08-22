const nomesMasculinos = [
    "João",
    "Pedro",
    "Thiago",
    "Daniel",
    "Lucas",
    "Mateus",
    "Gustavo",
    "Bruno",
    "Felipe",
    "Rafael",
    "Fernando",
    "Carlos",
    "Eduardo",
    "Gabriel",
    "André",
    "Vinícius",
    "Leonardo",
    "Guilherme",
    "Paulo",
    "Rodrigo",
    "Marcos",
    "José",
    "Luiz",
    "Antônio",
    "Ricardo",
    "Hugo",
    "Miguel",
    "Alexandre",
    "Raul",
    "Diego",
    "Marcelo",
    "Júlio",
    "Ronaldo",
    "Wagner",
    "César",
    "Vitor",
    "Samuel",
    "Roberto",
    "Mauro",
    "Alberto",
    "Isaac",
    "Davi",
    "Caio",
    "Enzo",
    "Renato",
    "Pablo",
    "Arthur",
    "Igor",
    "Benjamin",
    "Otávio",
    "Nícolas",
    "Erick",
    "Valentim",
    "Estevão",
    "Jorge",
    "Alex",
    "Wesley",
    "Feliciano",
    "Renan",
    "Mário",
    "Leandro",
    "Israel",
    "Victor",
    "Noah",
    "Adriano",
    "Augusto",
    "Danilo",
    "Edson",
    "Heitor",
    "Joel",
    "Maurício",
    "Nelson",
    "Rui",
    "Sérgio",
    "Ulisses",
    "Yuri",
    "Zacarias"
];

const nomesFemininos = [
    "Ana",
    "Maria",
    "Julia",
    "Carolina",
    "Isabela",
    "Beatriz",
    "Lara",
    "Mariana",
    "Sophia",
    "Luisa",
    "Helena",
    "Gabriela",
    "Fernanda",
    "Camila",
    "Rafaela",
    "Vitória",
    "Laura",
    "Clara",
    "Manuela",
    "Valentina",
    "Amanda",
    "Bianca",
    "Letícia",
    "Giovanna",
    "Natalia",
    "Alice",
    "Sofia",
    "Eduarda",
    "Antonia",
    "Joana",
    "Luiza",
    "Thais",
    "Raquel",
    "Catarina",
    "Rita",
    "Teresa",
    "Carla",
    "Elisabete",
    "Débora",
    "Cecília",
    "Eva",
    "Francisca",
    "Inês",
    "Leonor",
    "Olívia",
    "Rosa",
    "Sara"
];

const sobrenomes = [
    "Silva",
    "Santos",
    "Pereira",
    "Ferreira",
    "Oliveira",
    "Rodrigues",
    "Almeida",
    "Costa",
    "Martins",
    "Gomes",
    "Carvalho",
    "Ribeiro",
    "Freitas",
    "Melo",
    "Araújo",
    "Barbosa",
    "Lima",
    "Sousa",
    "Rocha",
    "Teixeira",
    "Correia",
    "Cunha",
    "Machado",
    "Cardoso",
    "Nunes",
    "Miranda",
    "Gonçalves",
    "Cruz",
    "Azevedo",
    "Monteiro",
    "Cavalcanti",
    "Fernandes",
    "Dias",
    "Carneiro",
    "Campos",
    "Sales",
    "Peixoto",
    "Pinto",
    "Ramos",
    "Lopes",
    "Reis",
    "Medeiros",
    "Andrade",
    "Tavares",
    "Borges",
    "Freire",
    "Macedo",
    "Caldeira",
    "Pacheco",
    "Castro",
    "Braga",
    "Xavier",
    "Vargas",
    "Fonseca",
    "Dantas",
    "Vieira",
    "Marques",
    "Leal",
    "Mendes",
    "Maia",
    "Morais"
];

const terceirosNomes = [
    "dos Santos",
    "de Oliveira",
    "da Silva",
    "Rodrigues",
    "Almeida",
    "Nunes",
    "Gonçalves",
    "Barbosa",
    "Ribeiro",
    "Carvalho",
    "Martins",
    "Melo",
    "Araújo",
    "Lima",
    "Sousa",
    "Rocha",
    "Teixeira",
    "Correia",
    "Cunha",
    "Machado",
    "Cardoso",
    "Miranda",
    "Freitas",
    "Gomes",
    "Cruz",
    "Monteiro",
    "Cavalcanti",
    "Fernandes",
    "Dias",
    "Carneiro",
    "Campos",
    "Sales",
    "Peixoto",
    "Ramos",
    "Reis",
    "Medeiros",
    "Andrade",
    "Tavares",
    "Borges",
    "Freire",
    "Macedo",
    "Caldeira",
    "Pacheco",
    "Castro",
    "Braga",
    "Xavier",
    "Vargas",
    "Fonseca",
    "Dantas",
    "Marques",
    "Leal",
    "Mendes",
    "Maia",
    "Morais"
];

const cargos = [
    "Front-End Developer", 
    "Back-End Developer",
    "Mobile Developer",
    "Designer", 
    "Gerente", 
    "Analista", 
    "Coordenador"
];

const times = [
    "Programação", 
    "Front-End", 
    "Data Science", 
    "DevOps", 
    "UX & Design", 
    "Mobile", 
    "Inovação e Gestão"
];

let lastGeneratedImage = null;

const imagensHomens = [
  "./assets/images/homens/imagem.jpg",
  "./assets/images/homens/imagem1.jpg",
  "./assets/images/homens/imagem2.jpg",
  "./assets/images/homens/imagem3.jpg",
  "./assets/images/homens/imagem4.jpg",
  "./assets/images/homens/imagem5.jpg",
  "./assets/images/homens/imagem6.jpg",
  "./assets/images/homens/imagem7.jpg",
  "./assets/images/homens/imagem8.jpg",
  "./assets/images/homens/imagem9.jpg",
  "./assets/images/homens/imagem10.jpg"
]

const imagensMulheres = [
  "./assets/images/mulheres/imagem.jpg",
  "./assets/images/mulheres/imagem1.jpg",
  "./assets/images/mulheres/imagem2.jpg",
  "./assets/images/mulheres/imagem3.jpg",
  "./assets/images/mulheres/imagem4.jpg",
  "./assets/images/mulheres/imagem5.jpg",
  "./assets/images/mulheres/imagem6.jpg",
  "./assets/images/mulheres/imagem7.jpg",
  "./assets/images/mulheres/imagem8.jpg",
  "./assets/images/mulheres/imagem9.jpg",
  "./assets/images/mulheres/imagem10.jpg",
  "./assets/images/mulheres/imagem11.jpg",
  "./assets/images/mulheres/imagem12.jpg"  
];

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateData);

function generateData() {
  document.getElementById('dataDisplay').innerHTML = `<div id="profileImageContainer" style="display: none;">
    <img id="profileImage" src="" alt="Imagem de perfil">
    <button class="copyButton" onclick="copyToClipboard('profileImage')">Copiar Imagem</button>
    </div>
    <p><strong>Nome:</strong> <span id="nome"></span> <button class="copyButton" onclick="copyToClipboard('nome')">Copiar</button></p>
    <p><strong>CPF:</strong> <span id="cpf"></span> <button class="copyButton" onclick="copyToClipboard('cpf')">Copiar</button></p>
    <p><strong>Cargo:</strong> <span id="cargo"></span> <button class="copyButton" onclick="copyToClipboard('cargo')">Copiar</button></p>
    <p><strong>Time:</strong> <span id="time"></span> <button class="copyButton" onclick="copyToClipboard('time')">Copiar</button></p>`


  const genero = Math.random() < 0.5 ? "masculino" : "feminino";
  const nome = generateFullName(genero);
  const cpf = generateRandomCPF();
  const cargo = cargos[Math.floor(Math.random() * cargos.length)];
  const time = times[Math.floor(Math.random() * times.length)];

  let imagemURL = genero === "masculino" ? getRandomImageURL(imagensHomens) : getRandomImageURL(imagensMulheres);
  while (imagemURL === lastGeneratedImage) {
    imagemURL = genero === "masculino" ? getRandomImageURL(imagensHomens) : getRandomImageURL(imagensMulheres);
  }
  lastGeneratedImage = imagemURL;

  const dataDisplay = document.getElementById("dataDisplay");
  const profileImageContainer = document.getElementById("profileImageContainer");
  const profileImage = document.getElementById("profileImage");
  const copyImageButton = document.getElementById("copyImageButton");

  profileImage.src = imagemURL;
  profileImage.alt = "Imagem de perfil";
  profileImageContainer.style.display = "block";

  dataDisplay.innerHTML = `
    <p><strong>Dados gerados:</strong></p>
    <div id="profileImageContainer">
      <img id="profileImage" src="${imagemURL}" alt="Imagem de perfil">
      <button class="copyButton" id="copyImageButton" onclick="copyToClipboard('profileImage')">Copiar Imagem</button>
    </div>
    <p><strong>Nome:</strong> <span id="nome">${nome}</span> <button class="copyButton" onclick="copyToClipboard('nome')">Copiar</button></p>
    <p><strong>CPF:</strong> <span id="cpf">${cpf}</span> <button class="copyButton" onclick="copyToClipboard('cpf')">Copiar</button></p>
    <p><strong>Cargo:</strong> <span id="cargo">${cargo}</span> <button class="copyButton" onclick="copyToClipboard('cargo')">Copiar</button></p>
    <p><strong>Time:</strong> <span id="time">${time}</span> <button class="copyButton" onclick="copyToClipboard('time')">Copiar</button></p>
  `;

  const copyButtons = document.querySelectorAll(".copyButton");
  for (const button of copyButtons) {
    button.style.display = "inline";
  }
}

function generateFullName(genero) {
  const nomeArray = genero === "masculino" ? nomesMasculinos : nomesFemininos;
  const firstName = nomeArray[Math.floor(Math.random() * nomeArray.length)];
  const lastName1 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  const terceiroNome = terceirosNomes[Math.floor(Math.random() * terceirosNomes.length)];
  return `${firstName} ${lastName1} ${terceiroNome}`;
}

function generateRandomCPF() {
    const cpfParcial = [];
    for (let i = 0; i < 9; i++) {
        cpfParcial.push(Math.floor(Math.random() * 10));
    }

    cpfParcial.push(calcularDigitoVerificador(cpfParcial, 10));
    cpfParcial.push(calcularDigitoVerificador(cpfParcial, 11));

    return formatarCPF(cpfParcial);
}

function calcularDigitoVerificador(cpfParcial, multiplicador) {
    let soma = 0;

    for (let i = 0; i < cpfParcial.length; i++) {
        soma += cpfParcial[i] * multiplicador;
        multiplicador--;
    }

    const resto = soma % 11;
    const digito = 11 - resto;

    return digito >= 10 ? 0 : digito;
}

function formatarCPF(cpfParcial) {
    const cpfFormatado = cpfParcial.map((digit, index) => {
        if (index === 2 || index === 5) {
            return digit + ".";
        } else if (index === 8) {
            return digit + "-";
        } else {
            return digit.toString();
        }
    });

    return cpfFormatado.join("");
}

function getRandomImageURL(imagesArray) {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

function copyToClipboard(id) {
  const element = document.getElementById(id);
  const text = element.textContent || element.src;

  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");

  document.body.removeChild(tempInput);

  element.style.color = "green";

  setTimeout(() => {
    element.style.color = "#333";
  }, 1000);
}

document.oncontextmenu = function(event) {
  event.preventDefault();
};
