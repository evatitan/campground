const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });
const Kitty = new Cat({ name: 'Eva' });
Kitty.save().then(() => {
	console.log('meow');
});
