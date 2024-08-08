from rest_framework import serializers

from product.models import User,  Drives,Round



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
class DriveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drives
        fields = "__all__"

class RoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Round
        fields = "__all__"


