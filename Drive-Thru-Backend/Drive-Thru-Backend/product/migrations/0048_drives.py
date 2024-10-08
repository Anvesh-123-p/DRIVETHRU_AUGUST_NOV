# Generated by Django 4.0.2 on 2023-07-07 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0047_alter_user_last_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Drives',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=32)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('ctc', models.IntegerField()),
                ('num_of_rounds', models.IntegerField()),
                ('description', models.CharField(max_length=256)),
                ('eligible_percentage', models.BigIntegerField()),
                ('jd_link', models.CharField(max_length=256)),
                ('start_date', models.DateField()),
                ('status', models.CharField(choices=[('NS', 'Not Started'), ('IP', 'In Progress'), ('CO', 'Completed'), ('CA', 'Cancelled')], max_length=2)),
                ('enrolled_students', models.ManyToManyField(to='product.User')),
            ],
        ),
    ]
