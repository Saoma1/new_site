// all repos, fetch name, releases_url , img = 'homepage',
// check if 'tag_name' : 'profile' is included grab id
const repos = {};
fetch("https://api.github.com/users/saoma1/repos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      let name = element.name;
      let umg_url = element.homepage;
      fetch(`https://api.github.com/repos/Saoma1/${element.name}/releases`)
        .then((response) => response.json())
        .then((data) => {
          repos[]

          });
        });
    });
  });

// tag_name "profile"
// const mainUrl = `https://api.github.com/repos/Saoma1/tip-calculator-app-main/releases`;
