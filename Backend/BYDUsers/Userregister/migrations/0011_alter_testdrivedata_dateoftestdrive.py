# Generated by Django 5.0.2 on 2024-02-25 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0010_remove_userinformation_reference'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testdrivedata',
            name='dateOfTestDrive',
            field=models.DateField(),
        ),
    ]
