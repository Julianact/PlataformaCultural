export default {
  canEditTopic(topic) {
    return this.checkPermissions({
      permissions: ['categories_topics:write'],
      scope: { name: 'categories', id: topic.category.slug },
    })
    || this.checkPermissions({
      permissions: ['own_topics:write'],
      isOwner: this.id === topic.owner.id,
    });
  },

  canDeleteTopic(topic) {
    return this.checkPermissions({
      permissions: ['categories_topics:delete'],
      scope: { name: 'categories', id: topic.category.slug },
    })
    || this.checkPermissions({
      permissions: ['own_topics:delete'],
      isOwner: this.id === topic.owner.id,
    });
  },

  canEditReply(reply, categorySlug) {
    return this.checkPermissions({
      permissions: ['categories_replies:write'],
      scope: { name: 'categories', id: categorySlug },
    })
    || this.checkPermissions({
      permissions: ['own_replies:write'],
      isOwner: this.id === reply.user.id,
    });
  },

  canDeleteReply(reply, categorySlug) {
    return this.checkPermissions({
      permissions: ['categories_replies:delete'],
      scope: { name: 'categories', id: categorySlug },
    })
    || this.checkPermissions({
      permissions: ['own_replies:delete'],
      isOwner: this.id === reply.user.id,
    });
  },

  checkPermissions({ permissions, isOwner = null, scope = null }) {
    if (this.can(permissions, scope)) {
      return isOwner === null ? true : isOwner;
    }
    return false;
  },

  can(permissions, scope = null) {
    const targetPermissions = Array.isArray(permissions) ? permissions : [permissions];
    const userPermissions = !scope
      ? this.permissions.root
      : this.permissions[scope.name] && this.permissions[scope.name][scope.id];
    return targetPermissions.every((value) => (userPermissions || []).includes(value));
  },
};
