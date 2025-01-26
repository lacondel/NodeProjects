const EventEmmiter = require('events');

const myEmitter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
}

myEmitter.addListener('connected', logDbConnection);

myEmitter.emit('connected');

myEmitter.removeListener('connected', logDbConnection);

myEmitter.emit('connected');

myEmitter.on('msg', (data) => {
    console.log(`Получил: ${data}`);
});

myEmitter.prependListener('msg', (data) => {
    console.log(`Prepend`);
});

myEmitter.emit('msg', 'Привет! Получи моё сообщение');

myEmitter.once('off', () => {
    console.log('Один раз выполнился, больше не буду');
});

myEmitter.emit('off');
myEmitter.emit('off');

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(5);
console.log(myEmitter.getMaxListeners());

console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());

myEmitter.on('error', (err) => {
    console.log(`Произошла ошибка: ${err.message}`);
});

myEmitter.emit('error', new Error('BOOOM!'));



const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));