const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

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

const preport = process.env.PORT || 3000

const port = `0.0.0.0:${preport}`

console.log(port);

server.bindAsync(port, grpc.ServerCredentials.createInsecure(), () => {
	console.log(`Server running at ${port}`);
	server.start();
});