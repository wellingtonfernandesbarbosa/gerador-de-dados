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
  "https://img.freepik.com/fotos-premium/um-homem-com-barba-e-uma-camisa-que-diz-esta-sorrindo_662214-44495.jpg",
  "https://img.freepik.com/fotos-gratis/retrato-de-jovem-sorridente-bonito-em-uma-camiseta-branca-isolado-no-branco_186202-8965.jpg",
    "https://img.freepik.com/fotos-gratis/feche-o-retrato-do-macho-europeu-bonito-encaracolado_176532-8133.jpg",
    "https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg",
    "https://img.freepik.com/fotos-gratis/africano-alegre-com-estreitos-olhos-escuros-e-cabelo-fofo-vestido-com-uma-elegante-camisa-branca_273609-14082.jpg",
    "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg",
    "https://img.freepik.com/fotos-premium/sorriso-de-retrato-e-homem-com-confianca-positiva-e-despreocupado-contra-um-fundo-de-estudio-cinza-enfrentar-pessoa-do-sexo-masculino-e-humano-com-uma-atitude-alegre-liberdade-e-modelo-com-alegria-canada-e-relaxar_590464-177008.jpg",
    "https://img.freepik.com/fotos-gratis/jovem-homem-posando-isolado-contra-a-parede-em-branco-do-estudio_273609-12356.jpg",
    "https://img.freepik.com/fotos-gratis/retrato-de-homem-barbudo-bonito_23-2149880047.jpg",
    "https://img.freepik.com/fotos-premium/retrato-de-um-jovem-casual-feliz-em-pe_171337-29744.jpg",
    "https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg"
];

const imagensMulheres = [
    "https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita-em-sueter-rosa-quente-aparencia-natural-sorridente-retrato-ligado-isolado-cabelo-comprido_285396-896.jpg",
    "https://img.freepik.com/fotos-gratis/close-de-uma-jovem-adoravel-sorridente-com-um-coque-de-cabelo-escuro-e-cacheado_295783-638.jpg",
    "https://img.freepik.com/fotos-gratis/conceito-de-felicidade-bem-estar-e-confianca-mulher-afro-americana-atraente-alegre-corte-de-cabelo-encaracolado-peito-de-bracos-cruzados-em-pose-poderosa-e-segura-sorrindo-determinado-usar-sueter-amarelo_176420-35063.jpg",
    "https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-sorridente-tocando-seu-rosto-com-maquiagem-natural-e-parecendo-alegre-a-frente-em-pe-contra-uma-parede-branca_176420-38914.jpg",
    "https://img.freepik.com/fotos-gratis/conceito-de-felicidade-bem-estar-e-confianca-mulher-afro-americana-atraente-alegre-corte-de-cabelo-encaracolado-peito-de-bracos-cruzados-em-pose-poderosa-e-segura-sorrindo-determinado-usar-sueter-amarelo_176420-35063.jpg",
    "https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg",
    "https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg",
    "https://img.freepik.com/fotos-premium/jovem-mulher-bonita-olhando-feliz-e-pateta-com-um-sorriso-largo-divertido-e-maluco-e-olhos-bem-abertos-contra-uma-parede-branca_1194-38831.jpg",
    "https://img.freepik.com/fotos-premium/mulher-negra-com-um-corte-de-cabelo-curto-em-estudio-sorrindo-e-vestindo-vestido_633478-1562.jpg",
    "https://img.freepik.com/fotos-gratis/close-up-foto-de-estudio-da-bela-modelo-de-mulher-jovem-mestica-com-cabelo-escuro-e-encaracolado_273609-13870.jpg",
  "https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-bonita-com-maquiagem-olhos-esfumacados-muito-jovem-adulta-posando-no-estudio-closeup-rosto-feminino-atraente_186202-4439.jpg",
  "https://img.freepik.com/fotos-premium/rosto-de-jovem-em-ia-generativa-de-fundo-branco_849906-20048.jpg",
    "https://img.freepik.com/fotos-gratis/close-up-tiro-de-mulher-bonita-com-dentes-perfeitos-e-pele-limpa-escura-descansando-dentro-de-casa-sorrindo-alegremente-depois-de-receber-boas-noticias-positivas_273609-1248.jpg"
];

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateData);

function generateData() {
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
