# Generated by Django 5.0.1 on 2024-08-18 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0083_drives_selected_students_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='resume_link',
            field=models.FileField(blank=True, null=True, upload_to='resume/'),
        ),
    ]
