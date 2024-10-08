# Generated by Django 4.0.2 on 2023-07-07 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0043_rename_profile_user_college_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='college_name',
            field=models.TextField(blank=True, max_length=32),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1),
        ),
    ]
