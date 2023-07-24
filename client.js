const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./models/helloworld.proto', {});
const appProto = grpc.loadPackageDefinition(packageDefinition).helloworld;
// const serviceApp_url = 'localhost:3000'
// const serviceApp_url = '34.101.113.212:4002'
const serviceApp_url = 'https://test-grpc-production.up.railway.app:5857'


const client = new appProto.Greeter(serviceApp_url, grpc.credentials.createInsecure());

data = {
	name: "asu kabeh"
}

client.SayHello(data, (err, res) => {
    if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
})

// const grpc = require('grpc');
// const protoLoader = require('@grpc/proto-loader');

// const package = protoLoader.loadSync('helloworld.proto', {
//     keepCase: true,
//     default_package: 'helloworld',
// });

// const helloworld = grpc.create('helloworld.Greeter');

// exports.hello = (request, response) => {
//     const name = request.name;
//     const greeting = helloworld.sayHello({ name });

//     response.send(greeting);
// };