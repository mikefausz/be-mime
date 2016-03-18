module.exports = {
  login: [
    `<form role="role">
      <div class="form-group">
        <label for="login-user">User name:</label>
        <input type="text" class="form-control" id="login-user">
      </div>
      <div class="form-group">
        <label for="login-user">Password:</label>
        <input type="password" class="form-control" id="login-user">
      </div>
      <button type="submit" class="btn btn-default btn-block">Login</button>
    </form>`
  ].join(''),

  newUser: [
    `<form role="form">
      <div class="form-group form">
        <label for="userName">User name:</label>
        <input type="text" class="form-control" id="userName">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd">
      </div>
      <div class="form-group">
        <label for="fullName">Full name:</label>
        <input type="text" class="form-control" id="fullName">
      </div>
      <div class="form-group">
        <label for="imageUrl">Image URL:</label>
        <input type="text" class="form-control" id="imageUrl">
      </div>
      <div class="form-group">
        <label for="vidUrl">Profile video URL:</label>
        <input type="text" class="form-group" id="vidUrl">
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="text" class="form-control" id="age">
      </div>
      <div class="form-group">
        <label for="interests">Interests:</label>
        <input type="text" class="form-control" id="interests">
      </div>
      <div class="form-group">
        <label for="influences">Influences:</label>
        <input type="text" class="form-control" id="influences">
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" class="form-control" id="city">
      </div>
      <div class="form-group">
        <label for="state">State:</label>
        <input type="text" class="form-control" id="state">
      </div>
      <button type="submit" class="btn btn-default btn-block">Submit</button>
    </form>`
  ].join(''),
  user: [
    `<li><%= userName %></li>
    <li><%= fullName %></li>
    <li><%= imageUrl %></li>
    <li><%= profileVideoUrl %></li>
    <li><%= age %></li>
    <li><%= interests %></li>
    <li><%= influences %></li>
    <li><%= city %></li>
    <li><%= state %></li>`
  ].join(''),
};
