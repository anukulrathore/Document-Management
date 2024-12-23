import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
    constructor(
        @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
    ){}

    onModuleInit(){
        this.kafkaClient.connect();
    }

    async sendMessage(topic:string, message: any): Promise<void> {
        try {
            await this.kafkaClient.emit(topic, message);
        } catch (error) {
            console.log(error);
        }
    }

    async handleKafkaRequest(topic: string, message: any): Promise<any> {
        return this.kafkaClient.send(topic, message)
    }
}
