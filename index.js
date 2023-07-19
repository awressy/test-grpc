const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// const functions = require('firebase-functions');

const packageDefinition = protoLoader.loadSync('./models/helloworld.proto', {});
const helloworld = grpc.loadPackageDefinition(packageDefinition).helloworld;

const handler = (call, cb) => {
    const res = {
        message: `Hello, ${call.request.name}!`
    }
    cb(null, res);
};

// const grpcServer = grpc.createServer();
const server = new grpc.Server();
server.addService(helloworld.Greeter.service, { 'SayHello': handler });

const port = process.env.PORT_APP || '0.0.0.0:4002'

server.bindAsync(port, grpc.ServerCredentials.createInsecure(), () => {
	console.log(`Server running at http://${port}`);
	server.start();
});

// exports.grpcServer = functions.https.onRequest((req, res) => {
//     server.emit('request', req, res);
// });

// const grpcServerFn = functions.https.onRequest(server);

// module.exports = {
//     grpcServer: grpcServerFn
// };