# Generated by Django 5.0.2 on 2024-02-20 07:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0003_alter_userinformation_carmodel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userinformation',
            old_name='user_id',
            new_name='user',
        ),
    ]
