// Publish amoebae data points
Meteor.publish('amoebae', function () {
  return Amoebae.find();
});