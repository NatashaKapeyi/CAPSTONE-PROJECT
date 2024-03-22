<template>
    <div class="row container m-3">
     <div class="col display-1 "><h1>HERE IS HOW YOU CAN REACH US</h1>
    </div>
     <div class="col mt-5 d-flex justify-content-end"> <form action="https://formspree.io/f/mvoebljn" method="POST" class="w-50">

<div class="col">

  <label for="firstname" class="form-label">First Name</label>
  <input type="text" placeholder="Enter your name" name="firstname" class="form-control" id="firstname" required>
</div>

<div class="mb-3 ">
  <label for="lastname" class="form-label">Last Name</label>
  <input type="text" placeholder="Enter your surname" name="lastname" class="form-control" id="lastname" required>
</div>

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" placeholder="Enter your email" id="exampleInputEmail1"
    required>
</div>

<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Message</label>
  <textarea class="form-control" name="message" placeholder="Enter your message" id="message" rows="3"
    required></textarea>
</div>

<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1{
    font-size: 90px;
    margin-top: 53px;
    color: #58641D;
    text-shadow: 2px 1px 5px rgb(0, 0, 0) white;
    
}
</style>