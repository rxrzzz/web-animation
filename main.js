const the_animation = document.getElementsByClassName("animation");
const sections = document.getElementsByTagName("section");

let options = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.style.backgroundColor = "green";
    } else {
      entry.target.style.backgroundColor = "white";
    }
  });
}, options);

for (let i = 0; i < sections.length; i++) {
  const element = sections[i];
  sectionObserver.observe(element);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 1 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];
  observer.observe(elements);
}

const [isVisible, setIsVisible] = useState(false);
const articleRef = useRef<HTMLTitleElement | null>(null);

//react js intersection observer code.
useEffect(() => {
  const observer = new IntersectionObserver(
    (entry) => {
      entry.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    },
    { threshold: 1 }
  );

  console.log(isVisible)
  if(articleRef.current){
    observer.observe(articleRef.current)
  }
}, [articleRef, isVisible]);