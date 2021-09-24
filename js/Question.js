class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Your Answer");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.Options = createElement("h4");
    this.Options2 = createElement("h4");
      this.Options3 = createElement("h4");
      this.Options4 = createElement("h4");



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
      this.input2.position(350,230);
      this.question.html("Question1 : What starts with an E and ends with an E and has a letter in it?");
      this.question.position(100,50);
      this.Options.html("a) Everyone");
      this.Options.position(100,70);
      this.Options2.html("b) Envelope");
      this.Options2.position(100,100);
      this.Options3.html("c) Estimate");
      this.Options3.position(100,130);
      this.Options4.html("d) Example");
      this.Options4.position(100,160);
      




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You Your Answer has been Subbmitted");
        this.message.position(500,500);
    })


  }
}
