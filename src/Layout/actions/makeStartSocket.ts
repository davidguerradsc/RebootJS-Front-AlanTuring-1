import io from 'socket.io-client';

export function makeStartSocket(){
  return (dispatch: any) => {
    const socketServer = io.connect('http://localhost:3000');

    socketServer.on('connect', () => {
      console.log('Je suis bien connecté au back');
    })

    socketServer.on('mon-super-event', (data: any) => {
      console.log(data);
    })
  }
}