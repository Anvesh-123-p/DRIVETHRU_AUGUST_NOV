from distutils.command.upload import upload
from django.db import models


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
    resume_link=models.CharField(max_length=256, null=True, blank= True)
    TYPE_CHOICES = (
        ('ST', 'Student'),
        ('TPO', 'Tpo'),
        ('HOD', 'HOD'),
    )
    type=models.CharField(max_length=3,choices=TYPE_CHOICES,default="ST")

    def __str__(self):
        return self.email + " (" +  self.first_name + " )"



class Drives(models.Model):
    company_name = models.CharField(max_length=32)
    email = models.EmailField()
    ctc = models.IntegerField()
    num_of_rounds = models.IntegerField()
    description = models.CharField(max_length=256)
    eligible_percentage = models.BigIntegerField()
    jd_link = models.CharField(max_length=256)
    start_date = models.DateField()
    status_ch = (
        ('NS', 'Not Started'),
        ('IP', 'In Progress'),
        ('CO', 'Completed'),
        ('CA', 'Cancelled'),
    )
    status = models.CharField(max_length=2, choices=status_ch)
    enrolled_students= models.ManyToManyField(User,null=True,blank=True)

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


