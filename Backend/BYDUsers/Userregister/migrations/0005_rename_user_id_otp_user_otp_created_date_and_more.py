# Generated by Django 5.0.2 on 2024-02-20 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userregister', '0004_rename_user_id_userinformation_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='otp',
            old_name='user_id',
            new_name='user',
        ),
        migrations.AddField(
            model_name='otp',
            name='created_date',
            field=models.DateField(default=None),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='otp',
            name='otp',
            field=models.CharField(max_length=6),
        ),
    ]
