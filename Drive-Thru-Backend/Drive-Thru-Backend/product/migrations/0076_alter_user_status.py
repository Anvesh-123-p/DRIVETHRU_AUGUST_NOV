# Generated by Django 5.0.1 on 2024-08-15 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0075_alter_approval_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='status',
            field=models.CharField(choices=[('AC', 'Active'), ('NAC', 'Not Active')], default='NAC', max_length=3),
        ),
    ]
