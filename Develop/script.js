



var teamArr = [];

console.log(teamArr);

function generateHTMLFile() {
 var teamHeader = `<!doctype html>
  <html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Template Engine</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid bg-primary">
      <div class="container">
        <h1 id="teamHeader" class="display-4 text-center text-white text-bold bg-primary">MY TEAM</h1>
      </div>
    </div>
    <div class="container">`

    var teamMiddle = ``;

    for (var i = 0; i < teamArr.length; i++) {
      if (teamArr[i] instanceof Magager) {
          teamMiddle += generateManager();
      }
      else if (teamArr[i] instanceof Engineer) {
          teamMiddle += generateEngineer();
      }
      else if (teamArr[i] instanceof Intern) {
          teamMiddle += generateIntern();
      }
      return teamMiddle;
    }
  




  `</div>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <script type="text/javascript" src="script.js"></script>
        </body>
    </html>`





}


function generateManager() {
    return `<div class="card" style="width: 14rem;">
    <div class="card-img-top bg-primary">
      <h3 class="card-title p-2 text-white">Name</h3>
      <h4 class="card-title p-2 text-white">Manager</h4>
    </div>
    <div class="card-body">
    <div class="card" style="width: 12rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID</li>
        <li class="list-group-item">Email</li>
      </ul>
    </div>
  </div>
</div>`

}

function generateEngineer() {
     `<div class="card" style="width: 14rem;">
            <div class="card-img-top bg-primary">
              <h3 class="card-title p-2 text-white">Name</h3>
              <h4 class="card-title p-2 text-white">Engineer</h4>
            </div>
            <div class="card-body">
            <div class="card" style="width: 12rem;">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email</li>
                <li class="list-group-item">{username}</li>
              </ul>
            </div>
          </div>
        </div>`

        return generateEngineer;
}

function generateIntern() {
    return ` <div class="card" style="width: 14rem;">
    <div class="card-img-top bg-primary">
      <h3 class="card-title p-2 text-white">Name</h3>
      <h4 class="card-title p-2 text-white">Intern</h4>
    </div>
    <div class="card-body">
    <div class="card" style="width: 12rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID</li>
        <li class="list-group-item">Email</li>
      </ul>
    </div>
  </div>
</div>`
 return generateIntern;
}



module.exports = teamArr;




// function generateMainHTML() {

// }