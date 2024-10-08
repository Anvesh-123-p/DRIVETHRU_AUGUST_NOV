# Generated by Django 4.0.2 on 2023-07-09 17:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0059_remove_round_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='doctor_id',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='gamescore',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='question',
            name='type_quiz',
        ),
        migrations.RemoveField(
            model_name='result',
            name='type_quiz',
        ),
        migrations.RemoveField(
            model_name='result',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='submittedtask',
            name='doctor_id',
        ),
        migrations.RemoveField(
            model_name='submittedtask',
            name='task_id',
        ),
        migrations.RemoveField(
            model_name='submittedtask',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='task',
            name='doctor_id',
        ),
        migrations.RemoveField(
            model_name='task',
            name='user_email',
        ),
        migrations.DeleteModel(
            name='Answer',
        ),
        migrations.DeleteModel(
            name='Appointment',
        ),
        migrations.DeleteModel(
            name='Doctor',
        ),
        migrations.DeleteModel(
            name='GameScore',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
        migrations.DeleteModel(
            name='Quiz',
        ),
        migrations.DeleteModel(
            name='Result',
        ),
        migrations.DeleteModel(
            name='SubmittedTask',
        ),
        migrations.DeleteModel(
            name='Task',
        ),
    ]
