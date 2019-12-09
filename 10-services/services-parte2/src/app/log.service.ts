export class LogService {
    n: number = 1;
    log(msg: string) {
       console.log('Log ' + this.n++ + ': ' + msg); 
    }
    err(msg: string) {
        console.error('Log ' + this.n++ + ': ' + msg);
    }
    warn(msg: string) {
        console.warn('Log ' + this.n++ + ': ' + msg);
    }
}