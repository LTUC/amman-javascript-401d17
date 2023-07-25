import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand,
    GetCommand,
    DeleteCommand
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);
const tableName = 'student';

export const handler = async (event) => {
    let body;
    let statusCode = 200;
    let headers = {
        'Content-Type': 'application/json'
    };

    console.log(event.routeKey);


    try {
        switch (event.routeKey) {
            case 'DELETE /student/{id}':
                await dynamo.send(
                    new DeleteCommand({
                        TableName: tableName,
                        Key: {
                            id: event.pathParameters.id
                        }
                    })
                )
                body = `Deleted Student: ${event.pathParameters.id}`;
                statusCode = 204;
                break;

            case 'GET /student':
                body = await dynamo.send(
                    new ScanCommand({ TableName: tableName })
                )
                body = body.Items;
                break;

            case 'GET /student/{id}':
                body = await dynamo.send(
                    new GetCommand({
                        TableName: tableName,
                        Key: {
                            id: event.pathParameters.id
                        }
                    })
                )
                body = body.Item;
                break;

            case 'PUT /student':
                const obj = JSON.parse(event.body)
                await dynamo.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: {
                            id: obj.id,
                            name: obj.name,
                            age: obj.age
                        }
                    }))
                body = `PutCommand ${obj.id}`
                break;
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }


    return {
        statusCode,
        body,
        headers
    }

};
