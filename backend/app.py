from flask import Flask , jsonify , request
from flask_restful import Resource , Api
from flask_cors import CORS
from article import Article
app=Flask(__name__)
CORS(app)

User=[ 
    {
        'name':'Siddhesh',
        'userName':'siddhesh.jadhav@gmail.com',
        'password':'123456'
    },
    {
        'name':'Harry',
        'userName':'harry.potter@gmail.com',
        'password':'123456'
    },
    {
        'name':'Jon',
        'userName':'jon.snow@gmail.com',
        'password':'123456'
    },
    {
        'name':'Sam',
        'userName':'abc@gmail.com',
        'password':'123456'
    }
]
def isPresent(userName):
    for u in User:
        if u['userName'] == userName:
            return True
    return False
class Users( Resource):
    def get(self, userName):
        user=None
        for u in User:
            if(u["userName"]==userName):
                print(u["userName"],userName)
                user=u
        if user is not None:
            return jsonify(user)
        else:
            return jsonify({'message':'Not Found'})
    
    def post(self, userName):
        print(userName)
        data=request.get_json()
        if isPresent(data['userName']):
            return jsonify({
                'message':"already present"
            })
        User.append({'name':data['name'] , 'userName':data['userName'] , 'password':data['password']})
        print(data)
        return jsonify({
            'message':'Registered'
        })




api=Api(app)
api.add_resource(Users,'/user/<userName>')
api.add_resource(Article , '/article/<id>')

app.run()
