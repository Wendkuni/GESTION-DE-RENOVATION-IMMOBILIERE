import { ChatComponent, TemplateMessage } from './chat.component';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { CanalChat, ChatUser } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { CanalService } from './canal.service';
import { environment } from 'src/environments/environment';

export class WebSocketAPI {
    webSocketEndPoint: string = environment.BACK_END.DEMARRAGERENAUVATION.MESSAGERIE_GESTION;
    topic: string = "/chat/greetings";
    MessageList: string = "/chat/findAllMessager/sms";
    MessageSave: string = "/chat/save";
    stompClient: any;
    // appComponent: ChatComponent;
    // constructor(appComponent: ChatComponent){
    //     this.appComponent = appComponent;
    // }
    _connect(messageListe: ChatUser[]) {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function(frame) {
            _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
             // console.log("j'ai fini");
                messageListe.push(JSON.parse(sdkEvent.body));
                //console.log(messageListe.length)
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error, list) {
        console.log("errorCallBack -> " + error)
        // setTimeout(() => {
        //    // this._connect(list);
        // }, 5000);
    }

	/**
	 * Send message to sever via web socket
	 * @param {*} message
	 */
    _send(message: TemplateMessage) {
        //console.log("calling logout api via web socket");
        this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    }

    // sendMessage(message)
    // {
    //     this.stompClient.send("/message/save/", {}, message);
    // }
    // GetAllMessageMessage(message)
    // {
    //     this.stompClient.send("/message/", {}, message);
    // }
}