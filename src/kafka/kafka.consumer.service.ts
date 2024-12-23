import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService {
    constructor(
        @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
    ){}

    listenToTopic(){
        const consumer = this.kafkaClient.subscribeToResponseOf('topic');
        consumer.pipe().subscribe({
            next: (message) => {
                
            }
        })
    }
}