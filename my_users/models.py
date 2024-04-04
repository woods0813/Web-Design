from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Must input email address')

        name = first_name + ' ' + last_name
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name = last_name)

        user.set_password(password)
        user.is_active = True
        user.save()

        return user

    def create_superuser(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Must input email address')
        
        name = first_name + ' ' + last_name
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name = last_name)

        user.set_password(password)
        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.is_active = True
        user.save()


        return user

    
class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    # EMAIL_FIELD = USERNAME_FIELD
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email