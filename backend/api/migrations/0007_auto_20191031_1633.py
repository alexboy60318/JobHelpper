# Generated by Django 2.2.6 on 2019-10-31 16:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20191031_1628'),
    ]

    operations = [
        migrations.RenameField(
            model_name='myreadingrecord',
            old_name='note',
            new_name='note1',
        ),
    ]
