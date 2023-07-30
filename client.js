// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');

// const packageDefinition = protoLoader.loadSync('./models/helloworld.proto', {});
// const appProto = grpc.loadPackageDefinition(packageDefinition).helloworld;
// // const serviceApp_url = 'localhost:3000'
// // const serviceApp_url = '34.101.113.212:4002'
// const serviceApp_url = 'https://test-run-ycfd6pylla-et.a.run.app:8080'


// const client = new appProto.Greeter(serviceApp_url, grpc.credentials.createInsecure());

// data = {
// 	name: ",meooong"
// }

// client.SayHello(data, (err, res) => {
//     if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(res);
// 	}
// })

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


const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./models/helloworld.proto', {});
const appProto = grpc.loadPackageDefinition(packageDefinition).helloworld;
const serviceApp_url = 'localhost:3000'
// const serviceApp_url = 'test-run-ycfd6pylla-et.a.run.app:443';

const client = new appProto.Greeter(serviceApp_url, grpc.credentials.createInsecure()); // Menggunakan createSsl()

data = {
    name: "meooong" // Perhatikan di sini, pastikan nama parameter "name" tidak ada koma (,)
}

client.SayHello(data, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});