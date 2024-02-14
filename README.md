**Request flow**

![Auth flow](image.png)

**Serialize - Deserialize in passport**

    passport.serializeUser(function(user, done) {
    done(null, user.id);
    });

=> saved to session <br />
=> req.session.passport.user = {id: '..'}

    passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

=> user object attaches to the request as req.user

