const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function createHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           margin: 20px;
           width: 40%;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      </head>`;
        }

      function devInfo(res) {
        return `<body>
        <div class="row wrapper">
          <div class="photo-header">
            <img src="${res.data.avatar_url}" alt="${res.data.name}'s photo" class="photo-header">
      
            <h1>Hi!</h1>
            <h2 id="userName">${res.data.name}</h2>
            <div class="row" style="width:100%; text-align:center">
              <h4 style="width: 100%" id="currentJob">${res.data.company}</h4>
            </div>
            <div class="links-nav" style="width: 50%; text-align: center;">
              <a href="https://www.google.com/maps/place/${res.data.location}" class="nav-link">${res.data.location}</a>
              <a href="${res.data.html_url}" class="nav-link">My GitHub</a>
              <a href="${res.data.blog}" class="nav-link">LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row" style="width:100%; text-align:center">
            <h1 style="width:100%; text-align:center">${res.data.bio}</h1>
          </div>
          <div class="row" style="width:100%; text-align:center">
            <div class="card">
              <h3>Public Repositories</h3>
              <h6 id="repos">${res.data.public_repos}</h6>
            </div>
            <div class="card">
              <h3 id="followers">Followers</h3>
              <h6>${res.data.followers}</h6>
            </div>
          </div>
          <div class="row" style="width:100%; text-align:center">
          <div class="card">
              <h3 id="followers">Following</h3>
              <h6>${res.data.following}</h6>
            </div>`
      } 
      function devInfo2(starCount) {
        return `
          <div class="card">
              <h3 id="stars">GitHub Stars</h3>
              <h6>${starCount}</h6>
            </div>  
          </div>
        </div>
        <div class="row wrapper" style="height: 33%;"></div>   
      </body>
      </html>`;
      }

      module.exports = {
        createHTML: createHTML,
        devInfo: devInfo,
        devInfo2: devInfo2,
      };
