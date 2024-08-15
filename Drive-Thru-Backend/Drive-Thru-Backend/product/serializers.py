from rest_framework import serializers

from product.models import User,  Drives,Round,Approval

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
def validate(self, data):
        # Validate resume_link only if it is not provided in the update
        if 'resume_link' not in data:
            user_instance = self.instance
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


