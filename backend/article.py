from flask import Flask , jsonify , request
from flask_restful import Resource , Api
from flask_cors import CORS
Articles=[ 
    {
     'id': '1',
     'title': 'NodeJS',
     'author':'siddhesh.jadhav@gmail.com',
     'text':   "Node.js is similar in design to, and influenced by, systems like Rubys Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform." 
      }
    ,
    {   'id':'2',
        'title':'Java',
        'author':'abc@gmail.com',
        'text':"nheritance in Javais a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of OOPs. The idea behind inheritance is that you can create new classesthat are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class The extends keywordindicates that you are making a new class that derives from an existing class. The meaning of extends is to increase the functionality.To reduce the complexity and simplify the language, multiple inheritance is not supported in java.Polymorphism  is the ability of an object to take on many  forms."
         }
    ,
    {   'id':'3',
        'title':'React',
        'author':'siddhesh.jadhav@gmail.com',
        'text':'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code'
    },

    {   'id':'5',
        'title':'Hogwarts',
        'author':'harry.potter@gmail.com',
        'text':"Founded in the 10th century by Godric Gryffindor, Rowena Ravenclaw, Helga Hufflepuff and Salazar Slytherin, Hogwarts was established in the Highlands of Scotland to educate young wizards and witches as well as to keep students safe from muggle persecution. Theory has it that Rowena Ravenclaw came up with the name of Hogwarts after dreaming of a warty hog that led her to a cliff by a lake.[5] Since then, Hogwarts educated most wizarding children in the United Kingdom and its surrounding areas, keeping its location hidden from other wizarding schools and muggles."
        },
    
    {
        'id':'7',
        'title':'GOT',
        'author':'jon.snow@gmail.com',
        'text':"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show was shot in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, and Spain. It premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.Set on the fictional continents of Westeros and Essos, Game of Thrones has a large ensemble cast and follows several story arcs throughout the course of the show. The first major arc concerns the Iron Throne of the Seven Kingdoms of Westeros through a web of political conflicts among the noble families either vying to claim the throne or fighting for independence from whoever sits on it"
    }
]


class Article(Resource):
    def get(self,id):
        return jsonify({'article':Articles})

    def delete(self,id):
        index=-1
        for item in Articles:
            if item['id']==id:
                Articles.remove(item)
        
