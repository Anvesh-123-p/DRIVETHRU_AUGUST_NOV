# Generated by Django 5.0.1 on 2024-08-15 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0069_alter_approval_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='drives',
            name='role',
            field=models.CharField(choices=[('tech', 'Technical'), ('non-tech', 'Non-Technical')], default='tech', max_length=10),
        ),
        migrations.AddField(
            model_name='drives',
            name='year',
            field=models.PositiveIntegerField(default=2024),
        ),
        migrations.AddField(
            model_name='user',
            name='roll_number',
            field=models.CharField(default='21hr1a05a4', max_length=10, unique=True),
        ),
    ]
