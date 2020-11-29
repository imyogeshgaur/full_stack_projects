import React from 'react'

const App = () => {
  return (
    <>
      <form method="post" action="/register">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Enter Your Password" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
export default App;
