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
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
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
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
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
    `<div class="row text-left">
      <h2>Welcome, <%= userName %></h2>
      <button type="button" class="btn btn-default">Log Out</button>
      <img src="<%= imageUrl %>" class="img-rounded" alt="user image" width="200" height="200">
      <h2><%= userName %></h2>
      <ul class="row-left">
        <li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><%= city %>, <%= state %></li>
        <li><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><%= age %></li>
        <li class="text-muted"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>Edit Profile</li>
        <li class="text-muted"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Delete Profile</li>
      </ul>
    </div>`
  ].join(''),

  editProf: [
    `<form role="form">
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
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
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
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
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

  profile: [

    `<iframe width="320" height="240" src="<%= profileVideoUrl %>" frameborder="0" allowfullscreen></iframe>
    <ul>
      <li><h3><%= userName %></h3></li>
      <li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><em><%= city %>, <%= state %></em></li>
      <li><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><%= age %></li>
      <li><%= interests %></li>
      <li><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></li>
    </ul>`
  ].join(''),

  admimerers :[
    `
      <img src="<%= imageUrl %>" class="img-rounded" alt="<%= userName %> Profile Image" width="50" height="50">
    <ul class="details">
      <li><h4><%= userName %></h4></li>
      <li><strong><%= age %></strong> <%= city %>, <%= state %></p></li>
    </ul>`
  ].join(''),
};
