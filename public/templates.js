module.exports = {
  login: [
    `<form class="form-inline" role="role">
      <div class="form-group">
        <input type="text" class="form-control" id="login-user" placeholder="User name">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="login-pwd" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-default">Login</button>
    </form>`
  ].join(''),

  newUser: [
    `<form role="form">
      <div class="form-group form">
        <input type="text" class="form-control" id="userName" placeholder="User name">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="pwd" placeholder="Password">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="fullName" placeholder="Full name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="imageUrl" placeholder="Image URL">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="vidUrl" placeholder="Profile video URL:">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="age" placeholder="Age">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="interests" placeholder="Interests">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="influences" placeholder="Influences">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="city" placeholder="City">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="state" placeholder="State">
      </div>
      <button type="submit" class="btn btn-default btn-block">Submit</button>
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
};
