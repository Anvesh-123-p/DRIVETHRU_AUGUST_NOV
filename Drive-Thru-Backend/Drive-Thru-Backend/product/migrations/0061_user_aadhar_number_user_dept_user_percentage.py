# Generated by Django 4.0.2 on 2023-07-11 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0060_remove_appointment_doctor_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='aadhar_number',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='dept',
            field=models.CharField(choices=[('CSE', 'CSE'), ('ECE', 'ECE'), ('EEE', 'EEE'), ('MECH', 'MECH'), ('CIVIL', 'CIVIl'), ('x', 'x')], default='x', max_length=10),
        ),
        migrations.AddField(
            model_name='user',
            name='percentage',
            field=models.BigIntegerField(default=0),
        ),
    ]
