from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import  User,Drives,Round,Approval
from .serializers import *
from django.http import JsonResponse
from django.contrib.auth import authenticate



from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import User, Approval
from .serializers import UserSerializer
import smtplib

def sendmail(stu_name,approval_type,old_data,new_data):
    server =smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login("crtproject258@gmail.com","lxiz muyd zast abwg")
    message=stu_name + " has sent a apprval request with type "+approval_type+" changing from "+old_data+" to "+new_data
    server.sendmail("crtproject258@gmail.com","hruthika.sa258@gmail.com",message)
    print("hi")
def sendmail_response(stu_name,approval_type,old_data,new_data):
    server =smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login("crtproject258@gmail.com","lxiz muyd zast abwg")
    message=stu_name + " has approved request with type "+approval_type+" changing from "+old_data+" to "+new_data
    server.sendmail("crtproject258@gmail.com","hruthika.sa258@gmail.com",message)
    print("hi")


class UserView(APIView):
    def get(self, request):
        param = request.GET
        print("Hi")
        email = param.get('email')
        password = param.get('password')

        if email and password:
            try:
                user = User.objects.get(email=email)
                # Directly compare the password
                if user.password == password:
                    if user.status == 'AC':
                        services = User.objects.filter(email=param.get('email'))
                        response = UserSerializer(services, many=True)
                        return Response({"data": response.data},status=200)
                    else:
                        return Response({"status": "error", "message": "User is not active"}, status=403)
                else:
                    return Response({"status": "error", "message": "Invalid credentials"}, status=401)
            except User.DoesNotExist:
                return Response({"status": "error", "message": "User not found"}, status=400)
            

        if param.get('user_type') == 'ST' and param.get('status') == 'NAC':
            college_name = param.get('college_name')
            department = param.get('dept')
            queryset = User.objects.filter(
                user_type='ST',
                status='NAC',
                college_name=college_name,
                dept=department
            )
            serializer = UserSerializer(queryset, many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        


        if bool(param.get('email')):
            item = get_object_or_404(User, email=param.get('email'))
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
        try:
            serializer = UserSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            if data["user_type"] == 'ST':
                # Find the HOD for the user's department
            
                    hod = User.objects.get(user_type='HOD', dept=data["dept"])
                    # Create an approval record
                    Approval.objects.create(
                        stu_email=data["email"],
                        stu_name=data["first_name"],
                        roll_number=data["roll_number"],
                        hod_id=hod,
                        dept=data["dept"],
                        status='pending' ,
                        approval_type='new_stu_account',
                        old_data="NO ACCOUNT",
                        new_data="New student Account"
                    )
                    user = serializer.save()
                    try:
                        sendmail(data["first_name"],'new_stu_account',"NO ACCOUNT","New student Account")
                    except:
                        pass
        except User.DoesNotExist:
                # Handle the case where no HOD is found
                return Response({"status": "error", "message": "No HOD found for the department"}, status=404)

        return Response(serializer.data, status=201)


    def patch(self, request):
        email= request.data.get('email')
        
        if not email:
            return Response(
                {"status": "error", "message": "User email is required"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Retrieve the user object
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"status": "error", "message": "User not found"}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Get existing values
        existing_values = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'aadhar_number': user.aadhar_number,
            'dept': user.dept,
            'percentage': user.percentage,
            'college_name': user.college_name,
            'email': user.email,
            'gender': user.gender,
            'mobile_number': user.mobile_number,
            'password': user.password,
            'resume_link': user.resume_link,
            'user_type': user.user_type,
            'status': user.status,
            'roll_number':user.roll_number
        }
        
        # Update existing values with the data from the request
        updated_fields = existing_values.copy()  # Copy existing values
        updated_fields.update({key: value for key, value in request.data.items() if key in existing_values})
        for field in ['percentage', 'dept', 'college_name']:
            updated_fields[field] = existing_values[field]
        
        print(updated_fields)
        # Create and validate the serializer with the updated fields
        serializer = UserSerializer(user, data=updated_fields, partial=True)
        
        if serializer.is_valid():
            # Save the user with updated fields
            serializer.save()

            # Handle special fields
            if 'dept' in request.data:
                # Check if we need to create an Approval record
                hod = User.objects.filter(user_type='HOD', dept=updated_fields['dept']).first()
                if hod:
                    Approval.objects.create(
                        stu_email=user.email,
                        
                        stu_name=existing_values["first_name"],
                        roll_number=existing_values["roll_number"],
                        hod_id=hod,
                        dept=updated_fields['dept'],
                        status='pending' ,
                        approval_type='dept',
                        old_data=existing_values["dept"],
                        new_data=request.data.get('dept')
                    )
                    try:
                        sendmail(existing_values["first_name"],'dept',existing_values["dept"],request.data.get('dept'))
                    except:
                        pass
            if 'college_name' in request.data:
                # Check if we need to create an Approval record
                hod = User.objects.filter(user_type='HOD', dept=updated_fields['dept']).first()
                if hod:
                    Approval.objects.create(
                        stu_email=user.email,
                        stu_name=existing_values["first_name"],
                        roll_number=existing_values["roll_number"],
                        hod_id=hod,
                        dept=updated_fields['dept'],
                        status='pending',
                        approval_type='college_name',
                        old_data=existing_values["college_name"],
                        new_data=request.data.get('college_name')
                    )
                    try:
                        sendmail(existing_values["first_name"],'college_name',existing_values["college_name"],request.data.get('college_name'))
                    except:
                        pass
            if 'percentage' in request.data:
                print("%")
                # Check if we need to create an Approval record
                hod = User.objects.filter(user_type='HOD', dept=updated_fields['dept']).first()
                if hod:
                    Approval.objects.create(
                        stu_email=user.email,
                        stu_name=existing_values["first_name"],
                        roll_number=existing_values["roll_number"],
                        hod_id=hod,
                        dept=updated_fields['dept'],
                        status='pending',
                        approval_type='percentage',
                        old_data=existing_values["percentage"],
                        new_data=request.data.get('percentage')
                    )
                    try:

                        sendmail(existing_values["first_name"],'percentage',str(existing_values["percentage"]),str(request.data.get('percentage')))
                    except:
                        pass
            # Return the updated user data
            return Response(
                {"status": "success", "data": UserSerializer(user).data}, 
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"status": "error", "data": serializer.errors}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        


    def delete(self, request):
        param = request.GET
        item = None
        if bool(param.get('id')):
            item = get_object_or_404(User, id=param.get('id'))
        elif bool(param.get('email')):
            item = get_object_or_404(User, email=param.get('email'))
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
            item = Drives.objects.filter(company_name=param.get('company_name'))
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
        for i in range(request.data['num_of_rounds']+1):
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
    # def delete(self, request):
    #     # param = request.GET
    #     # item = None
    #     # if bool(param.get('id')):
    #     #     item = get_object_or_404(Drives, id=param.get('id'))
    #     # item.delete()
    #     services = Drives.objects.all()
    #     print(services)
    #     services.delete()
    #     return Response({"status": "success", "data": "Item Deleted"},status=200)

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

    # def delete(self, request):
    #     # param = request.GET
    #     # item = None
    #     # if bool(param.get('id')):
    #     #     item = get_object_or_404(Round, id=param.get('id'))
    #     # item.delete()
    #     services = Round.objects.all()
    #     services.delete()

    #     return Response({"status": "success", "data": "Item Deleted"},status=200)


class ApprovalView(APIView):
    def get(self, request):
        param = request.GET

        stu_email = param.get('stu_email')
        dept = param.get('dept')
        approval_type = param.get('approval_type')

        if stu_email:
            items = Approval.objects.filter(stu_email=stu_email)
            serializer = ApprovalSerializer(items, many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        
        if dept:
            items = Approval.objects.filter(dept=dept)
            serializer = ApprovalSerializer(items, many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        
        if approval_type:
            items = Approval.objects.filter(approval_type=approval_type)
            serializer = ApprovalSerializer(items, many=True)
            return Response({"status": "success", "data": serializer.data}, status=200)
        
        services = Approval.objects.all()
        response = ApprovalSerializer(services, many=True)
        return Response({"data": response.data},status=200)
    


    def patch(self, request):
        action = request.data.get('status')
        approval_id = request.data.get('approval_id')
        
        print(action,approval_id)
        if not action or not approval_id:
            return Response({'error': 'Action and approval_id are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            approval = Approval.objects.get(approval_id=approval_id)
            # Retrieve details from the approval record
            stu_email = approval.stu_email
            approval_type = approval.approval_type
            old_data = approval.old_data
            new_data = approval.new_data
            stu_name=approval.stu_name
            # Retrieve the associated user
            user = User.objects.get(email=stu_email)
            if action == 'approved':
                if approval_type == 'new_stu_account':
                        print("12345")
                        user.status = 'AC'
                        user.save(update_fields=['status'])
                elif approval_type == 'percentage':
                    user.percentage = int(new_data) 
                    user.save(update_fields=['percentage'])
                elif approval_type == 'dept':
                        print("dwwr")
                        user.dept = new_data 
                        user.save(update_fields=['dept'])           
                elif approval_type == 'college_name':
                
                    user.college_name = new_data 
                    user.save(update_fields=['college_name'])
                approval.status = 'Accepted'
                approval.save()
                print(stu_name,approval_type,old_data,new_data)
                sendmail_response(stu_name,approval_type,old_data,new_data)
                return Response({'message': 'Approval accepted and user updated successfully.'}, status=status.HTTP_200_OK)        
            elif action == 'rejected':
                approval.status = 'Rejected'
                approval.save()
                sendmail_response(user.first_name,approval_type,old_data,new_data)
                return Response({'message': 'Approval rejected successfully.'}, status=status.HTTP_200_OK)
        
            else:
                return Response({'error': 'Invalid action.'}, status=status.HTTP_400_BAD_REQUEST)
        except Approval.DoesNotExist:
            return Response({'error': 'Approval record not found.'}, status=status.HTTP_404_NOT_FOUND)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        

from django.core.exceptions import ValidationError
import random
import string



def generate_reset_code():
        code = ''.join(random.choices(string.digits, k=6))
        return code

def send_reset_email(email, reset_code):
        # Send an email with the reset code using smtplib
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login("crtproject258@gmail.com", "lxiz muyd zast abwg")
        subject = "Password Reset Code"
        message = f"Subject: {subject}\n\nYour password reset code is {reset_code}. Please enter this code to reset your password."
        server.sendmail("crtproject258@gmail.com", "hruthika.sa258@gmail.com", message)
        server.quit()

def request_password_reset( email):
        # Generate and send reset code
        
        try:
                
            user = User.objects.get(email=email)
            print(user)
        except User.DoesNotExist:
            raise ValidationError("No user with this email address exists.")
        sent=False
        reset_code = generate_reset_code()
        user.reset_password = reset_code
        try:
            send_reset_email(email, reset_code)
            user.save()

        except:
            pass
        else:
            sent=True
        if sent:
            return "Reset code sent to email."
        else:
            raise ValidationError(" email is not sent Please try again.")

def validate_reset_code( email, entered_code):
        print("enetred code")
        # Validate the entered reset code
        valid=False
        # print(user,user.reset_password)
        try:
            user = User.objects.get(email=email)
            print(user,user.reset_password)
            if user.reset_password == entered_code:
            
                valid=True
        except User.DoesNotExist:
            pass
        return valid

def reset_password( email, new_password):
        # Reset password if the code is valid
        if email:
            user = User.objects.get(email=email)
            user.password=new_password 
            user.reset_password=""
            user.save()
            
            return "Password successfully reset."
        else:
            raise ValidationError("Invalid reset code or code expired.")

class PasswordResetView(APIView):
    def get(self, request):
        email = request.query_params.get('email')
        if email:
            try:
                message = request_password_reset(email)
                return Response({"message": message}, status=status.HTTP_200_OK)
            except ValidationError as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        new_password = request.data.get('new_password')
        email = request.data.get('email')
        reset_code = request.data.get('reset_code')
        print(reset_code,email)
        if email and reset_code:
            if validate_reset_code(email, reset_code):
                try:
                    message = reset_password(email, new_password)
                except Exception as e:
                    return Response({"error:",str(e)}, status=status.HTTP_400_BAD_REQUEST)
                return Response({"message": "Try new password to login."}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid reset code."}, status=status.HTTP_200_OK)
        return Response({"error": "Email and reset code are required."}, status=status.HTTP_400_BAD_REQUEST)
    
class StudentOffersAPIView(APIView):

    def get(self, request):
        year = request.query_params.get('year')
        role = request.query_params.get('role')
        dept=request.query_params.get('dept')
        email=request.query_params.get('email')
        roll_number=request.query_params.get('roll_number')
        company_name=request.query_params.get('company_name')
        print(year, role,dept,email,roll_number,company_name)
        if company_name:

            drives = Drives.objects.filter(company_name=company_name)
        elif email or roll_number:
            if role:
                drives = Drives.objects.filter(role=role)
            else:
                drives = Drives.objects.all()
        else:
            if role:
                drives = Drives.objects.filter(year=year, role=role)
            else:
                drives = Drives.objects.filter(year=year)

        print(drives)
        student_data = []
        for drive in drives:
            selected_students = drive.selected_students.all()
            if email:
                selected_students=User.objects.filter(email=email)
            if roll_number:
                selected_students=User.objects.filter(roll_number=roll_number)
            if dept:
                print("dept")
                selected_students = selected_students.filter(dept=dept)
            print(selected_students)
       
            for student in selected_students:
                
                offer_data = {
                    "company_name": drive.company_name,
                    "ctc": drive.ctc,
                    "role":drive.role,
                    "year":drive.year
                }
                
                # Check if the student is already in the student_data list
                existing_student = next((item for item in student_data if item["email"] == student.email), None)
                
                if existing_student:
                    existing_student["offers"].append(offer_data)
                    existing_student["offers_count"] = len(existing_student["offers"])

                else:
                    student_data.append({
                        "first_name": student.first_name,
                        "last_name": student.last_name,
                        "email": student.email,
                        "roll_number": student.roll_number,
                        "offers": [offer_data],
                        "offers_count":1,
                        "Graduation_year":student.graduation_year,
                        
                    })
                if not company_name:
                    student_data = sorted(student_data, key=lambda x: x["offers_count"], reverse=True)
                else:
                    student_data = sorted(student_data, key=lambda x: x["offers"][0]["year"], reverse=True)
        
        return Response(student_data, status=status.HTTP_200_OK)
