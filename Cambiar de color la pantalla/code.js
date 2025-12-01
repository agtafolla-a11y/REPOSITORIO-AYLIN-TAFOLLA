onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255),0.5));
  });
});
onEvent("image1", "click", function( ) {
  playSound("assets/El-Pato-Asado.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://images.unsplash.com/photo-1564678164-f00ad53a38e6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
});
