from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import  User,Drives,Round
from .serializers import RoundSerializer,DriveSerializer, UserSerializer


class UserView(APIView):
    def get(self, request):
        param = request.GET
        if bool(param.get('id')):
            item = get_object_or_404(User, id=param.get('id'))
            serializer = UserSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('name')):
            item = User.objects.filter(first_name=param.get('name'))
            serializer = UserSerializer(item,many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('college_name')):
            item = User.objects.filter(college_name=param.get('college_name'))
            serializer = UserSerializer(item,many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('email')):
            item = User.objects.filter(email=param.get('email'))
            serializer = UserSerializer(item,many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('ids')):
            print(param.get('ids'))
            if (param.get('ids')=='a'):
                return Response({"status": "success", "data": []}, status=200)
            li=param.get('ids').split(',')
            print(li)
            res=[]


            for i in li:

                item = get_object_or_404(User, id=i)
                serializer = UserSerializer(item)
                res.append(serializer.data)
            return Response({"status": "success", "data": res}, status=200)
        elif bool(param.get('dept')):
            item = User.objects.filter(dept=param.get('dept'))
            serializer = UserSerializer(item, many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        services = User.objects.all()
        response = UserSerializer(services, many=True)
        return Response({"data": response.data},status=200)

    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=201)

    def patch(self, request):
        param = request.GET
        if bool(param.get('id')):
            item = get_object_or_404(User, id=param.get('id'))
            serializer = UserSerializer(item, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": "success", "data": serializer.data},status=200)
            else:
                return Response({"status": "error", "data": serializer.errors},status=400)

    def delete(self, request):
        param = request.GET
        item = None
        if bool(param.get('id')):
            item = get_object_or_404(User, id=param.get('id'))
        item.delete()
        return Response({"status": "success", "data": "Item Deleted"},status=200)


class DriveView(APIView):
    def get(self, request):
        param = request.GET
        if bool(param.get('id')):
            item = get_object_or_404(Drives, id=param.get('id'))
            serializer = DriveSerializer(item)
            nd = serializer.data['num_of_rounds']
            ll = []
            for i in range(1, nd):
                ll.append(i + 1)

            item = Round.objects.filter(drive_id=param.get('id'))
            serializer2 = RoundSerializer(item, many=True)
            print(serializer2.data[0])
            total=len(serializer2.data)
            c=0

            for i in range(0, total):
                print(serializer2.data[i]['status'])
                if(serializer2.data[i]['status']=='CO'):
                    c=c+1

            p=(c/total)*100
            # serializer.data['percent']=p


            return Response({"status": "success", "data": serializer.data, "data2": ll, "width": p}, status=200)
        elif bool(param.get('company_name')):
            item = Drives.objects.filter(company_name=param.get('name'))
            serializer = DriveSerializer(item,many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('ctc')):
            item = Drives.objects.filter(ctc=param.get('ctc'))
            serializer = DriveSerializer(item,many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        services = Drives.objects.all()
        response = DriveSerializer(services, many=True)
        return Response({"data": response.data},status=200)

    def post(self, request):
        data = request.data
        serializer = DriveSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        request.data['num_of_rounds']=int(request.data['num_of_rounds'])
        for i in range(request.data['num_of_rounds']):
            data2 = {}
            print("hi")
            if(i==0):
                data2['selected_students'] = request.data['enrolled_students']
            else:
                data2['selected_students'] = []
            data2['number'] = i + 1
            data2['drive_id'] = serializer.data['id']
            print(data2)

            serializer2 = RoundSerializer(data=data2)
            serializer2.is_valid(raise_exception=True)
            serializer2.save()


        return Response(serializer.data, status=201)

    def patch(self, request):
        param=request.GET

        item = get_object_or_404(Drives, id=param.get('id'))
        s = DriveSerializer(item)
        sd=s.data['enrolled_students']
        param = request.GET
        data=request.data
        print("0000000")
        print(data)
        try:

            if bool(param.get('id')):
                item = get_object_or_404(Drives, id=param.get('id'))
                data2=data['enrolled_students']
                print(data2)
                try:
                    if(data['enrolled_students']):
                        data2.extend(sd)
                        print(data2)

                except:
                    pass
                hel={
                }
                hel['enrolled_students']=data2
                serializer = DriveSerializer(item, data=hel, partial=True)
        except:
            serializer = DriveSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data},status=200)
        else:
            return Response({"status": "error", "data": serializer.errors},status=400)
    def delete(self, request):
        # param = request.GET
        # item = None
        # if bool(param.get('id')):
        #     item = get_object_or_404(Drives, id=param.get('id'))
        # item.delete()
        services = Drives.objects.all()
        services.delete()
        return Response({"status": "success", "data": "Item Deleted"},status=200)

class RoundView(APIView):
    def get(self, request):
        param = request.GET
        if bool(param.get('id')):
            item = get_object_or_404(Round, id=param.get('id'))
            serializer = RoundSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('number') and param.get('drive_id')):
            item = Round.objects.filter(drive_id=param.get('drive_id'), number=param.get('number'))
            serializer = RoundSerializer(item, many=True)

            l = serializer.data[0]["selected_students"]
            xl = []
            for i in l:
                item = get_object_or_404(User, id=i)
                serializer2 = UserSerializer(item)
                xl.append(serializer2.data)
            serializer.data[0]["selected_students"] = xl

            return Response({"status": "success", "data": serializer.data}, status=200)
        elif bool(param.get('drive_id')):
            item = Round.objects.filter(drive_id=param.get('drive_id'))
            serializer = RoundSerializer(item,many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)


        services = Round.objects.all()
        response = RoundSerializer(services, many=True)
        return Response({"data": response.data},status=200)

    def post(self, request):
        data = request.data
        serializer = RoundSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=201)

    def patch(self, request):
        param = request.GET
        if bool(param.get('id')):
            item = get_object_or_404(Round, id=param.get('id'))
            serializer = RoundSerializer(item, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": "success", "data": serializer.data}, status=200)
            else:
                return Response({"status": "error", "data": serializer.errors}, status=400)

        elif bool(param.get('number') and param.get('drive_id')):
            print(param.get('number'))
            print(param.get('drive_id'))
            item = get_object_or_404(Round, number=param.get('number'), drive_id=param.get('drive_id'))

            s = RoundSerializer(item)
            sd = s.data['selected_students']

            data2 = request.data
            try:
                if (data2['selected_students']):
                    data2['selected_students'].extend(sd)


            except:
                pass

            serializer = RoundSerializer(item, data=data2, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": "success", "data": serializer.data}, status=200)
            else:
                return Response({"status": "error", "data": serializer.errors}, status=400)

    def delete(self, request):
        # param = request.GET
        # item = None
        # if bool(param.get('id')):
        #     item = get_object_or_404(Round, id=param.get('id'))
        # item.delete()
        services = Round.objects.all()
        services.delete()

        return Response({"status": "success", "data": "Item Deleted"},status=200)


