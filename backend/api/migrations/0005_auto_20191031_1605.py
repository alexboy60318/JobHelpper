# Generated by Django 2.2.6 on 2019-10-31 16:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20191031_1550'),
    ]

    operations = [
        migrations.RenameField(
            model_name='myreadingrecord',
            old_name='body',
            new_name='content',
        ),
    ]
