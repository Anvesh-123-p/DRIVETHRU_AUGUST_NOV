# Generated by Django 5.0.1 on 2024-08-17 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0080_remove_approval_id_approval_approval_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='reset_password',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='drives',
            name='role',
            field=models.CharField(blank=True, choices=[('tech', 'Technical'), ('non-tech', 'Non-Technical')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='drives',
            name='year',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
