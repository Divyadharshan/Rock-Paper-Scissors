const gcon= document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");  
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src =
      "rock.png";
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gcon.classList.add("start");

    let time = setTimeout(()=>{
      gcon.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random()*3);
      let cpuImages = [
        "rock.png",
        "paper.png",
        "scissor.png"
      ];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {"RR": "Draw", "RP": "Chitti", "RS": "You", "PP": "Draw", "PR": "You", "PS": "Chitti", "SS": "Draw", "SR": "Chitti", "SP": "You"};

      let outComeValue = outcomes[userValue + cpuValue];
      result.textContent = (userValue === cpuValue) ? "Match Draw" : `${outComeValue} Won!!`;
    },60);
  });
});