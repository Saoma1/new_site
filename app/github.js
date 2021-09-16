// all repos, fetch name, releases_url , img = 'homepage',
// check if 'tag_name' : 'profile' is included grab id

// fetch("https://api.github.com/users/saoma1/repos")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((element) => {
//       let name = element.name;
//       let img_url = element.homepage;
//       fetch(`https://api.github.com/repos/Saoma1/${element.name}/releases`)
//         .then((response) => response.json())
//         .then((release_data) => {
//           if (release_data.length == 0) {
//             let repo = { name: name, img: img_url };
//             repos.push(repo);
//           }
//         });
//     });
//   });

// console.log(repos);

// tag_name "profile"
// const mainUrl = `https://api.github.com/repos/Saoma1/tip-calculator-app-main/releases`;
require("dotenv").config();

onsole.log(process.env.API_KEY);

const container = document.getElementById("github_projects");
const repos = [];

fetch("https://api.github.com/users/saoma1/repos", {
  headers: {
    Authorization: `token ${my_token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      let name = element.name;
      let img_url = element.homepage;
      fetch(`https://api.github.com/repos/saoma1/${element.name}/releases`, {
        headers: {
          Authorization: `token ${my_token}`,
        },
      })
        .then((response) => response.json())
        .then((release_data) => {
          if (release_data.length != 0) {
            console.log(release_data);
            let div = document.createElement("div");
            div.className = "project";
            div.style.backgroundImage = `url(${img_url})`;
            container.prepend(div);
          }
        });
    });
    const rest_repos = [
      {
        name: "yachtme",
        url: "https://yacht-me.herokuapp.com/",
        img_url: "https://www.sailuxeboat.com/wp-content/uploads/2019/04/1_sailuxe_home.jpg",
      },
      { name: "tester", url: "https://le-wagon-tester.herokuapp.com/", img_url: "./" },
    ];
    let div = document.createElement("div");
    div.className = "project";
    div.style.backgroundImage = `url(https://www.sailuxeboat.com/wp-content/uploads/2019/04/1_sailuxe_home.jpg)`;
    container.prepend(div);
  });
