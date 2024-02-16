**Auth flow**
![Auth flow](./docs/image-1.png)


**Request flow**

![Auth flow](./docs/image.png)

**Serialize - Deserialize**

- saved to session <br />
- req.session.passport.user = {id: '..'}
    passport.serializeUser(function(user, done) {
    done(null, user.id);
    });

=> user object attaches to the request as req.user
    passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


