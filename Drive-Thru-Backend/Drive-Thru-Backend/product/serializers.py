from rest_framework import serializers

from product.models import User,  Drives,Round,Approval
import re
def validate_password(password):  
    if len(password) < 8:  
        return False  
    if not re.search("[a-z]", password):  
        return False  
    if not re.search("[A-Z]", password):  
        return False  
    if not re.search("[0-9]", password):  
        return False  
    return True

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
def validate(self, data):
       
        user_instance = self.instance
        print(user_instance.password)
        if not validate_password(user_instance.password): 
            raise serializers.ValidationError({'Password should atleast have 8 charactes'})

        if 'resume_link' not in data:
            
            if user_instance and user_instance.type == 'Student' and not user_instance.resume_link:
                raise serializers.ValidationError({'resume_link': 'Resume link is mandatory for students.'})
        

class DriveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drives
        fields = "__all__"

class RoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Round
        fields = "__all__"



class ApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approval
        fields = "__all__"


