# Generated by Django 5.0.1 on 2024-08-15 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0072_remove_user_roll_number_alter_drives_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='roll_number',
            field=models.CharField(blank=True, max_length=10, null=True, unique=True),
        ),
    ]
