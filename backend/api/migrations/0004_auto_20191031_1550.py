# Generated by Django 2.2.6 on 2019-10-31 15:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20191031_1548'),
    ]

    operations = [
        migrations.RenameField(
            model_name='myreadingrecord',
            old_name='note',
            new_name='body',
        ),
    ]
