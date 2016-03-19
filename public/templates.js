module.exports = {
  login: [
    `<form class="form-inline" role="role">
      <div class="form-group row">
        <div class="col-sm-5">
          <input type="text" class="form-control" id="login-user" placeholder="Username">
        </div>
        <div class="col-sm-5">
          <input type="password" class="form-control" id="login-pwd" placeholder="Password">
        </div>
        <div class="col-lg-2">
          <button type="submit" class="btn btn-default">Log In</button>
        </div>
      </div>
    </form>`
  ].join(''),


  newUser: [
    `<h2>Join The Charade!</h2>
    <form role="form">
      <div class="form-group form">
        <input type="text" class="form-control" id="userName" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="pwd" placeholder="Password">
      </div>
      <div class="form-group row">
        <div class="col-sm-6">
          <input type="text" class="form-control" id="firstName" placeholder="First Name">
        </div>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="lastName" placeholder="Last Name">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3">
          <select class="form-control" id="age">
            <option value="">Age</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
          </select>
        </div>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="city" placeholder="City">
        </div>
        <div class="col-sm-3">
          <select class="form-control" id="state">
            <option value="">State</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="imageUrl" placeholder="Image URL">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="vidUrl" placeholder="Profile Video URL">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="interests" placeholder="Interests">
      </div>
      <button type="submit" class="btn btn-default btn-block">Create New Account</button>
    </form>`
  ].join(''),

  currentUser: [
    `<img src="<%= imageUrl %>" class="img-rounded" alt="user image" width="200" height="200">
    <h2><%= userName %></h2></div>`
  ].join(''),

  profile: [
    `<iframe width="320" height="240" src="<%= profileVideoUrl %>" frameborder="0" allowfullscreen></iframe>
    <ul>
      <li><h3><%= userName %></h3></li>
      <li><em><%= city %>, <%= state %></em></li>
      <li><%= age %></li>
      <li><%= interests %></li>
    </ul>`
  ].join(''),

  admimerers :[
    `  <ul>
        <li><h3><%= userName %></h3></li>
        <li><h4><%= Age %></h4></li>
        <li><em><%= city %>, <%= state %></em></li>
      </ul>`
  ]
};
