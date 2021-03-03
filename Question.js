class Question{
    constructor(){
        this.input = createInput("Enter your name:")
        this.input2 = createInput("Answer:")
        this.title = createElement("h3")
        this.question = createElement("h4.5")
        this.option1 = createElement("h4")
        this.option2 = createElement("h4")
        this.option3 = createElement("h4")
        this.option4 = createElement("h4")
        this.greeting = createElement("h2")
        this.button = createButton("SUBMIT")
    }
    hide(){
        this.question.hide()
        this.input.hide()
        this.button.hide()
        this.option1.hide()
        this.option2.hide()
        this.option3.hide()
        this.option4.hide()
    }

    display(){
        
        this.title.html("QUESTIONAIRE")
        this.title.position(130,0)

        this.question.html("A farmer in California owns a beautiful pear tree. He supplies the fruit to a nearby grocery store. The store owner has called the farmer to see how much fruit is available for him to purchase. The farmer knows that the main trunk has 24 branches. Each branch has exactly 12 boughs and each bough has exactly 6 twigs. Since each twig bears one piece of fruit, how many plums will the farmer be able to deliver?")
        this.question.position(10,70)

        this.option1.html("1: 12")
        this.option1.position(150,130)

        this.option2.html("2: 24")
        this.option2.position(150,150)

        this.option3.html("3: 1782")
        this.option3.position(150,170)

        this.option4.html("4: 0")
        this.option4.position(150,190)

        
        this.input.position(130,260)
        this.input2.position(300,260)
       
        this.button.position(250,300)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            

            this.option1.hide()
            
            this.option2.hide()
            
            this.option3.hide()
            
        
        });

        
        
    }}
