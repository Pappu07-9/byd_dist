# Generated by Django 5.0.2 on 2024-02-25 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0007_otp_isused_testdrivedata'),
    ]

    operations = [
        migrations.AlterField(
            model_name='otp',
            name='isused',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
