# Generated by Django 5.0.2 on 2024-02-20 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0005_rename_user_id_otp_user_otp_created_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='otp',
            name='generateTIme',
            field=models.TimeField(auto_now_add=True, default=None),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='otp',
            name='created_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
