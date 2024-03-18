<template>
  <div class="home">
    <div class="container-fluid text-center text-black">
      <div class="row justify-content-evenly">
        <div class="col">
         <h1 class="display-1">
          GARDEN
         </h1>
         <h2 class="display-4 fw-medium">‘’Cultivating Beauty, Naturally: Explore Garden's Oasis’’</h2>
         <h3><a href="#more" class="fw-medium display-5 text-decoration-none text-black">Read More</a></h3> 
        </div>
        <div class="col">
         <img src="https://i.ibb.co/YfS9nZ0/Rectangle-3-2.png" alt="Aloe" loading="lazy" class="img-fluid">
        </div>
      </div>
    </div>  
  </div> 

    <div id="more" class="mt-5">
   <div class="row d-flex">
    <img src="https://i.ibb.co/xsVpwtS/6bf5b0aad480bd8673ab3946d8c9d729.jpg" alt="model-1" loading="lazy" class="w-25">
    <img src="https://i.ibb.co/vZvkW9h/4adcaec2a04a3f4ce33f4dbe0eba84ca.jpg" alt="model-2" loading="lazy" class="w-25">
    <img src="https://i.ibb.co/5jTX44Y/58cdd41c5cef58917c1b1e207891bcef.jpg" alt="model-3" loading="lazy" class="w-25">
    <img src="https://i.ibb.co/jw0wWW3/d6288e8c1072cd132a0ffe515ce1531b.jpg" alt="skin" loading="lazy" class="w-25">
   </div>
 
    <div class="container-fluid text-center text-black mt-5">
      <div class="row">
        <div class="col text-white" id="Vision">
          <h1>OUR VISION</h1>
        </div>
        <div class="col" id="Mission">
          <h1>OUR MISSION</h1>
        </div>
      </div>
    </div>
   </div>

  <div>
   <div class="text-black text-center mt-5 p-5 text-wrap">
    <h4 class="display-1">What makes “GARDEN” different from other organic, beauty companies?</h4>
    <p class="display-5 mt-5">Find out more when you click this button</p>
    <button class=" mt-4" type="submit"><a href="/about" class="text-decoration-none text-white">About the company</a></button>
   </div>
  </div>

   <div id="categories">
    <div class="row justify-content-between mt-5">
      <img src="https://i.ibb.co/Mp3sMTM/69ad3044dca303c896c13d6ddc7d4b31.jpg" alt="soaps" loading="lazy" class="w-25">
    <img src="https://i.ibb.co/G5gWxq0/a88e668a10221a897815217ca4d65a5a.jpg" alt="oils" loading="lazy" class="w-25 ">
    <img src="https://i.ibb.co/yqcJgzR/708a2c53f12a160b0396273c635e17ee.jpg" alt="other" loading="lazy" class="w-25 ">
  
    </div>
   </div>
 
</template>

<script>

</script>

<style scoped>
h1{
  font-size: 150px;
  margin-top: 10rem;
  font-weight: 500;
  word-wrap:break-word;
}

h2{
  margin-top: 5rem;
}

h3{
  margin-top: 6rem;
}

#Vision{
  background-color: #58641D;
  
}

#Mission{
  background-color: #F4EDB6;
}

#Vision h1,#Mission h1{
  font-size: 115px;
  margin-bottom: 5rem;
}
button{
  background-color: #58641D;
  width: 10rem;
  border: #58641D;
  border-radius: 12px;
}
</style>
