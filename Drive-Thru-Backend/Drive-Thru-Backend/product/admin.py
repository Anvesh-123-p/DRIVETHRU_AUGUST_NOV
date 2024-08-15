from django.contrib import admin

from product.models import User,Drives,Round,Approval

class Rounds_admin(admin.TabularInline):
    model = Round

class Drives_admin(admin.ModelAdmin):
    inlines = [Rounds_admin]
admin.site.register(User)
admin.site.register(Round)
admin.site.register(Approval)
admin.site.register(Drives,Drives_admin)
