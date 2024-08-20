from distutils.command.upload import upload
from django.db import models
import re
import os

from django.core.exceptions import ValidationError
def upload(instance,file_name):
    return ''.join(["resumes/", instance.email.split(".")[0]+"."+file_name.split(".")[1]])


def upload_profile(instance,file_name):
    return ''.join(["profile/", instance.email.split(".")[0]+"."+file_name.split(".")[1]])


def upload_jd(instance,file_name):
    return ''.join(["drives/", instance.company_name+"_"+instance.year+"_"+instance.role+"."+file_name.split(".")[1]])


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
class User(models.Model):

    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32,blank=True)
    college_choices = (
    ('Select','Select'),
    ('MTIEAT', 'Mother Theresa Institure'),
    )
    aadhar_number = models.BigIntegerField(default=0)
    Dept_ch = (
        ('CSE', 'CSE'),
        ('ECE', 'ECE'),
        ("EEE", 'EEE'),
        ("MECH", "MECH"),
        ("CIVIL", "CIVIl"),
        ("x","x"),
    )
    dept = models.CharField(max_length=10, choices=Dept_ch,default='x')
    percentage = models.BigIntegerField(default=0)
    college_name = models.CharField(max_length=10, choices=college_choices,default='MTIEAT')
    email = models.EmailField(unique=True)
    GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
    )  
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    mobile_number = models.BigIntegerField()
    password = models.CharField(max_length=256)
    resume_link=models.FileField( null=True, blank= True, upload_to=upload)
    TYPE_CHOICES = (
        ('ST', 'Student'),
        ('TPO', 'Tpo'),
        ('HOD', 'HOD'),
    )
    user_type=models.CharField(max_length=3,choices=TYPE_CHOICES,default="ST")
     # Status field with choices
    STATUS_CHOICES = (
        ('AC', 'Active'),
        ('NAC', 'Not Active'),
    )
    status = models.CharField(max_length=3, choices=STATUS_CHOICES, default='NAC')
    roll_number = models.CharField(max_length=10, unique=True, null=True, blank= True)
    reset_password=models.CharField(null=True, blank= True,max_length=10)
    graduation_year=models.PositiveIntegerField(null=True, blank= True, default=2024)

    profile_photo=models.FileField( null=True, blank= True, upload_to=upload_profile)

    def clean(self, update_fields=None):
        """
        Custom validation logic for model fields.
        """
        # Check if we are updating fields
        
        if not validate_password(self.password): 
            raise ValidationError({'Password should atleast have 8 charactes'})

        if update_fields is None:
            update_fields = set()

        if 'resume_link' not in update_fields and self.user_type == 'ST':
            # Only raise validation error if resume_link is not set
            if not self.resume_link:
                raise ValidationError('Resume link is mandatory for students.')
        
        if 'percentage' not in update_fields and self.user_type == 'ST':
            # Only raise validation error if percentage is not set
            if self.percentage == 0:
                raise ValidationError('Percentage is mandatory for students.')

        if 'roll_number' not in update_fields and self.user_type == 'ST':
            # Only raise validation error if roll_number is not set
            if not self.roll_number:
                raise ValidationError('roll_number is mandatory for students.')
        if 'graduation_year' not in update_fields and self.user_type == 'ST':
            # Only raise validation error if graduation_year is not set
            if not self.graduation_year:
                raise ValidationError('graduation_year is mandatory for students.')

    def save(self, *args, **kwargs):
        """
        Override the save method to include custom logic before saving the model.
        """
        update_fields = kwargs.get('update_fields', None)

        # Apply validation for the save method
        self.clean(update_fields=update_fields)

        # Set status based on user type if not already provided
        if update_fields is None or 'status' not in update_fields:
            if self.user_type == 'ST':
                    self.status = 'NAC'  
            else:
                self.status = 'AC'  
        super().save(*args, **kwargs)


class Drives(models.Model):
    company_name = models.CharField(max_length=32)
    email = models.EmailField()
    ctc = models.IntegerField()
    num_of_rounds = models.IntegerField()
    description = models.CharField(max_length=256)
    eligible_percentage = models.BigIntegerField()
    jd_link = models.FileField( null=True, blank= True, upload_to=upload_jd)
    start_date = models.DateField()
    status_ch = (
        ('NS', 'Not Started'),
        ('IP', 'In Progress'),
        ('CO', 'Completed'),
        ('CA', 'Cancelled'),
    )
    status = models.CharField(max_length=2, choices=status_ch)

    enrolled_students = models.ManyToManyField(User, blank=True, related_name='enrolled_drives')
    selected_students = models.ManyToManyField(User, blank=True, related_name='selected_drives')


    TECH = 'tech'
    NON_TECH = 'non-tech'
    ROLE_CHOICES = [
        (TECH, 'Technical'),
        (NON_TECH, 'Non-Technical'),
    ]

    year = models.PositiveIntegerField(null=True, blank= True)
    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        null=True, blank= True
                )
    def __str__(self):
        return self.company_name + " (" +  self.company_name + " )"

class Round(models.Model):
    drive_id = models.ForeignKey(Drives,on_delete=models.CASCADE)
    number=models.IntegerField(default=1)

    selected_students= models.ManyToManyField(User,null=True,blank=True)
    status_ch = (
        ('NS', 'Not Started'),
        ('IP', 'In Progress'),
        ('CO', 'Completed'),
        ('CA', 'Cancelled'),
    )
    status = models.CharField(max_length=2, choices=status_ch, null=True,blank=True)

    class Meta:
        unique_together = ('drive_id', 'number',)
    def __str__(self):
        return 'ROunds'




class Approval(models.Model):
    approval_id = models.AutoField(primary_key=True)
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('rejected', 'Rejected'),
        ('approved','Approved'),

    ]
    
    stu_name = models.CharField(max_length=100)
    roll_number = models.CharField(max_length=100)
    stu_email=models.EmailField()
    hod_id = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'user_type': 'HOD'}, related_name='hod_approvals')
    dept = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    APPROVAL_TYPE_CHOICES = [
        ('new_stu_account','stu_account'),
        ('percentage', 'Percentage'),
        ('dept', 'Department'),
        ('clg_name', 'College Name'),

    ]

    approval_type = models.CharField(
        max_length=20,
        choices=APPROVAL_TYPE_CHOICES,
        default='percentage',
    )
    old_data = models.TextField(null=True, blank= True)  
    new_data = models.TextField(null=True, blank= True)  
    
    def __str__(self):
        return f"{self.stu_email} - {self.dept} - {self.status}"


