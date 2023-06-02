const testimonials = [
  {
    name: "Khulkar",
    photo: "/images/man.jpeg",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
    voluptatem numquam natus"`,
  },
  {
    name: "Akhmad",
    photo: "/images/dada.jpg",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
    voluptatem numquam natus"`,
  },
  {
    name: "Ann",
    photo: "/images/girl.png",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
    voluptatem numquam natus"`,
  },
];
const img = document.querySelector("img");
const text = document.querySelector(".text");
const userName = document.querySelector(".username");
let idx = 1;
function updateTestemonials() {
  const { name, photo, text } = testimonials[idx];
  img.src = photo;
  text.innerHtml = text;
  userName.innerHTML = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
}
setInterval(() => {
  updateTestemonials();
}, 2000);
