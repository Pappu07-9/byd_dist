# Generated by Django 5.0.2 on 2024-02-25 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0008_alter_otp_isused'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinformation',
            name='reference',
            field=models.TextField(null=True),
        ),
    ]
