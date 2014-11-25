module.exports = function(sequelize, DataTypes) {
	var Question = sequelize.define('Question', {
	  title: DataTypes.STRING,
	  description: DataTypes.STRING,
	  codeSnippet: DataTypes.STRING,
	  githubRepo: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
				Question.hasMany(models.Reply);
			}
		}
	});

	return Question;
};
