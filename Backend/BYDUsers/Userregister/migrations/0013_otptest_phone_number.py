# Generated by Django 5.0.2 on 2024-02-27 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0012_otptest_testdrivedata_phonenumber_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='otptest',
            name='phone_number',
            field=models.CharField(default='111111111', max_length=10),
        ),
    ]
